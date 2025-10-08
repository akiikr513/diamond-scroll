import { useEffect, useRef } from "react";
import * as THREE from "three";
import Landscape from "./Landscape";
import { Sky } from "three/examples/jsm/objects/Sky.js";
import { HDRLoader } from "three/examples/jsm/loaders/HDRLoader.js";
import DiamondSequence from "./DiamondSequence";
import AmbientParticles from "./AmbientParticles";

export default function Experience({ scrollProgress, weather, windspeed }) {
  const mountRef = useRef(null);
  const scrollRef = useRef(scrollProgress);

  useEffect(() => {
    let animationFrameId;
    const currentMount = mountRef.current;

    const setup = async () => {
      const clock = new THREE.Clock();

      // Scene & Renderer
      const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.toneMapping = THREE.ReinhardToneMapping;
      renderer.toneMappingExposure = 0.7;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.shadowMap.enabled = true;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      currentMount.appendChild(renderer.domElement);

      // Camera
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      scene.add(camera);

      // Define a flight path for the camera
      const cameraPath = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 5, 60), // Start further back
        new THREE.Vector3(5, 7, 30), // Fly in and up
        new THREE.Vector3(-5, 4, 10),
        new THREE.Vector3(0, 6, -10), // Original path ends around here
        new THREE.Vector3(10, 4, -30),
        new THREE.Vector3(-10, 5, -50),
        new THREE.Vector3(0, 6, -70),
        new THREE.Vector3(0, 5, -90), // Previous end point
        new THREE.Vector3(-20, 7, -110), // --- New longer path segments ---
        new THREE.Vector3(20, 4, -130),
        new THREE.Vector3(0, 5, -150), // New, further end point
      ]);

      // Placeholder objects for our story components
      const landscape = new Landscape();
      landscape.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      // Make ground reflective when it rains
      if (weather === "Rain") {
        landscape.traverse((child) => {
          if (child.isMesh && child.material) {
            child.material.roughness = 0.2;
            child.material.metalness = 0.6;
          }
        });
      }

      scene.add(landscape);

      // --- Sky, Sun, and Moon ---
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
      scene.add(ambientLight);

      const sunLight = new THREE.DirectionalLight(0xffffff, 2);
      sunLight.castShadow = true;
      sunLight.shadow.mapSize.width = 2048;
      sunLight.shadow.mapSize.height = 2048;
      sunLight.shadow.camera.near = 0.5;
      sunLight.shadow.camera.far = 500;
      scene.add(sunLight);

      const sky = new Sky();
      sky.scale.setScalar(1000);
      scene.add(sky);

      const sun = new THREE.Vector3();

      const moonLight = new THREE.PointLight(0x6677aa, 0.3);
      scene.add(moonLight);

      const moonGeometry = new THREE.SphereGeometry(4, 32, 32);
      const moonMaterial = new THREE.MeshStandardMaterial({
        emissive: 0xffffff,
        emissiveIntensity: 1,
      });
      const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
      scene.add(moonMesh);

      // --- Starfield ---
      const starGeometry = new THREE.BufferGeometry();
      const starMaterial = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uOpacity: { value: 0.0 }, // For smooth fade-in
        },
        vertexShader: `
          attribute float aRandom;
          varying float vRandom;
          void main() {
            vRandom = aRandom;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = 1.5 * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          uniform float uTime;
          uniform float uOpacity;
          varying float vRandom;
          void main() {
            float d = length(gl_PointCoord - vec2(0.5));
            if (d > 0.5) discard;
            // Use a combination of sine waves for a more natural twinkle
            float opacity = sin((uTime * vRandom * 0.5) + (vRandom * 6.28)) * 0.5 + 0.5;
            gl_FragColor = vec4(vec3(1.0), opacity * uOpacity);
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });

      const starVertices = [];
      const starRandoms = new Float32Array(10000);
      for (let i = 0; i < 10000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = Math.random() * 500;
        const z = (Math.random() - 0.5) * 2000;
        starVertices.push(x, y, z);
        starRandoms[i] = Math.random();
      }
      starGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(starVertices, 3)
      );
      starGeometry.setAttribute(
        "aRandom",
        new THREE.BufferAttribute(starRandoms, 1)
      );
      const stars = new THREE.Points(starGeometry, starMaterial);
      scene.add(stars);

      // --- Weather Particles ---
      let seasonConfig;
      if (weather === "Rain") {
        seasonConfig = {
          count: 1500,
          texturePaths: ["rain.png"],
          particleSize: 1.5,
          fallSpeed: { min: 15, max: 25 },
          sway: { x: 0.1, z: 0.1 },
        };
      } else if (weather === "Snow") {
        seasonConfig = {
          count: 1000,
          texturePaths: ["snowflake.png"],
          particleSize: 2.0,
          fallSpeed: { min: 0.5, max: 1.5 },
          sway: { x: 1.0, z: 1.0 },
        };
      } else {
        // Seasonal effects for clear weather
        const month = new Date().getMonth();
        if (month >= 2 && month <= 4) {
          // Spring
          seasonConfig = {
            count: 400,
            texturePaths: ["green_leaf.png", "sakura.png"],
            particleSize: 4.0,
            fallSpeed: { min: 1, max: 3 },
            sway: { x: 2.0, z: 2.0 },
          };
        } else if (month >= 5 && month <= 7) {
          // Summer
          seasonConfig = {
            count: 200,
            texturePaths: ["sparkle.png"],
            particleSize: 1.5,
            fallSpeed: { min: 0.2, max: 0.8 },
            sway: { x: 3.0, z: 3.0 },
          };
        } else if (month >= 8 && month <= 10) {
          // Autumn
          seasonConfig = {
            count: 400,
            texturePaths: ["orange_leaf.png", "red_leaf.png", "brown_leaf.png"],
            particleSize: 5.0,
            fallSpeed: { min: 3, max: 6 },
            sway: { x: 4.0, z: 4.0 },
          };
        } else {
          // Winter (no snow)
          seasonConfig = { count: 0, texturePaths: [] }; // Or subtle sparkles for frost
        }
      }

      // Add wind effect
      const windFactor = Math.min(windspeed / 30, 1.0); // Normalize windspeed (cap at ~30km/h)
      seasonConfig.sway.x *= 1 + windFactor * 4;

      const ambientParticles = new AmbientParticles(seasonConfig);
      scene.add(ambientParticles);

      // --- Wind Gust Particles (only on non-rainy/snowy days) ---
      let windParticles = { update: () => {} }; // No-op object
      const WIND_THRESHOLD = 15; // km/h
      if (
        windspeed > WIND_THRESHOLD &&
        weather !== "Rain" &&
        weather !== "Snow"
      ) {
        const windGustConfig = {
          count: 150,
          texturePaths: ["brown_leaf.png", "green_leaf.png"],
          particleSize: 3.0,
          fallSpeed: { min: 10, max: 20 }, // This will be horizontal speed
          sway: { x: 15.0, z: 5.0 }, // Strong horizontal movement
          yPosition: { min: -10, max: 5 }, // Keep them low to the ground
        };
        windParticles = new AmbientParticles(windGustConfig);
        scene.add(windParticles);
      }

      const updateSky = (clock) => {
        const uniforms = sky.material.uniforms;
        const turbidity = { Sunny: 2, Cloudy: 15, Rain: 20, Snow: 10 };
        const rayleigh = { Sunny: 0.5, Cloudy: 2, Rain: 3, Snow: 1 };

        uniforms["turbidity"].value = turbidity[weather] || 2;
        uniforms["rayleigh"].value = rayleigh[weather] || 0.5;
        uniforms["mieCoefficient"].value = 0.005;
        uniforms["mieDirectionalG"].value = 0.7;

        // --- NEW: Scroll-based Day/Night Cycle ---
        let sunElevation = 0;
        let moonElevation = 0;
        const scroll = scrollRef.current;

        const DUSK_START = 0.45;
        const DUSK_END = 0.55;

        if (scroll < DUSK_START) {
          // --- Daytime ---
          const dayProgress = scroll / DUSK_START;
          const sunAngle = dayProgress * 180; // Sun travels 180 degrees
          sunElevation = Math.sin(THREE.MathUtils.degToRad(sunAngle)) * 90;
          // Day lighting
          sunLight.intensity = 2.5;
          ambientLight.intensity = 0.4;
          renderer.toneMappingExposure = 0.8;
          moonMesh.visible = false;
          stars.visible = false;
          moonLight.intensity = 0;
          starMaterial.uniforms.uOpacity.value = 0.0;
        } else if (scroll >= DUSK_START && scroll < DUSK_END) {
          // --- Dusk/Sunset Transition ---
          const transitionProgress =
            (scroll - DUSK_START) / (DUSK_END - DUSK_START);
          const sunAngle =
            (DUSK_START / 0.5 +
              (transitionProgress * (0.5 - DUSK_START)) / 0.5) *
            180;
          sunElevation = Math.sin(THREE.MathUtils.degToRad(sunAngle)) * 90;

          // Interpolate lighting values
          sunLight.intensity = THREE.MathUtils.lerp(
            2.5,
            0.05,
            transitionProgress
          );
          ambientLight.intensity = THREE.MathUtils.lerp(
            0.4,
            0.8,
            transitionProgress
          );
          renderer.toneMappingExposure = THREE.MathUtils.lerp(
            0.8,
            0.4,
            transitionProgress
          );

          // Fade in moon and stars
          moonMesh.visible = true;
          stars.visible = true;
          moonLight.intensity = THREE.MathUtils.lerp(
            0,
            1.2,
            transitionProgress
          );
          starMaterial.uniforms.uOpacity.value = transitionProgress;
        } else {
          // --- Nighttime ---
          sunElevation = -5; // Ensure sun is below the horizon
          const nightProgress = (scroll - DUSK_END) / (1.0 - DUSK_END);
          const moonAngle = nightProgress * 180; // Moon travels 180 degrees
          moonElevation = Math.sin(THREE.MathUtils.degToRad(moonAngle)) * 90;

          // Full night lighting
          sunLight.intensity = 0.05;
          ambientLight.intensity = 0.8; // A bit brighter
          renderer.toneMappingExposure = 0.4;
          moonMesh.visible = true;
          moonLight.intensity = 1.2; // A bit brighter
          stars.visible = true;
          starMaterial.uniforms.uOpacity.value = 1.0;
        }

        const azimuth = 180;

        const sunPhi = THREE.MathUtils.degToRad(90 - sunElevation);
        const sunTheta = THREE.MathUtils.degToRad(azimuth);
        sun.setFromSphericalCoords(1, sunPhi, sunTheta);

        uniforms["sunPosition"].value.copy(sun);
        sunLight.position.copy(sun);

        // Always update moon and stars, their visibility is controlled above
        starMaterial.uniforms.uTime.value = clock.getElapsedTime();
        const moonPhi = THREE.MathUtils.degToRad(90 - moonElevation);
        const moonTheta = THREE.MathUtils.degToRad(azimuth - 180); // Opposite side of the sky
        const moonPosition = new THREE.Vector3().setFromSphericalCoords(
          1,
          moonPhi,
          moonTheta
        );
        moonMesh.position.copy(moonPosition).multiplyScalar(400);
        moonLight.position.copy(moonPosition);
      };

      // Animation loop
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        const delta = clock.getDelta();
        const pathTime = Math.min(scrollRef.current, 0.999999);
        const position = cameraPath.getPointAt(pathTime);
        const tangent = cameraPath.getTangentAt(pathTime);
        const lookAtPosition = position.clone().add(tangent);

        camera.position.copy(position);
        camera.lookAt(lookAtPosition);

        ambientParticles.update(delta);
        windParticles.update(delta);
        updateSky(clock);

        renderer.render(scene, camera);
      };

      // Handle resize
      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", onResize);

      animate();

      return { renderer, onResize };
    };

    let cleanup = () => {};
    setup().then(({ renderer, onResize }) => {
      cleanup = () => {
        cancelAnimationFrame(animationFrameId);
        if (currentMount && currentMount.contains(renderer.domElement)) {
          currentMount.removeChild(renderer.domElement);
        }
        window.removeEventListener("resize", onResize);
      };
    });

    // Cleanup
    return () => cleanup();
  }, [weather, windspeed]); // Re-run if weather or windspeed changes

  useEffect(() => {
    scrollRef.current = scrollProgress;
  }, [scrollProgress]);

  return <div ref={mountRef} />;
}
