import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Sky } from "three/examples/jsm/objects/Sky.js";
import Landscape from "./Landscape";
import AmbientParticles from "./AmbientParticles";

export default function LandscapeViewer({ weather }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    const clock = new THREE.Clock();

    // Scene & Renderer
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    // Use a slightly less aggressive tone mapping for better night scenes
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.shadowMap.enabled = true;
    renderer.toneMappingExposure = 0.7;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Camera & Controls
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.set(0, 20, 50);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.maxPolarAngle = Math.PI / 2 - 0.1; // Prevent camera from going below ground

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 2);
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 500;
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    scene.add(sunLight);

    // Sky
    const sky = new Sky();
    sky.scale.setScalar(1000);
    scene.add(sky);

    const sun = new THREE.Vector3();

    // --- Moon ---
    const moonLight = new THREE.PointLight(0x6677aa, 0.3);
    scene.add(moonLight);

    const moonGeometry = new THREE.SphereGeometry(4, 32, 32);
    const moonMaterial = new THREE.MeshStandardMaterial({
      emissive: 0xffffff,
      emissiveIntensity: 1,
    });
    const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
    scene.add(moonMesh);

    // Landscape
    const landscape = new Landscape();
    landscape.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    scene.add(landscape);

    // --- Weather & Time based effects ---
    let seasonConfig;

    if (weather === "Rain") {
      seasonConfig = {
        count: 3000,
        texturePaths: ["/rain.png"],
        particleSize: 1.5,
        fallSpeed: { min: 15, max: 25 },
        sway: { x: 0.1, z: 0.1 },
      };
    } else if (weather === "Snow") {
      seasonConfig = {
        count: 2000,
        texturePaths: ["/snowflake.png"],
        particleSize: 2.0,
        fallSpeed: { min: 0.5, max: 1.5 },
        sway: { x: 1.0, z: 1.0 },
      };
    } else {
      // Default to no particles for Sunny/Cloudy
      seasonConfig = { count: 0, texturePaths: [] };
    }

    const ambientParticles = new AmbientParticles(seasonConfig);
    scene.add(ambientParticles);

    const updateSky = () => {
      const uniforms = sky.material.uniforms;

      // Weather adjustments
      const turbidity = { Sunny: 2, Cloudy: 15, Rain: 20, Snow: 10 };
      const rayleigh = { Sunny: 0.5, Cloudy: 2, Rain: 3, Snow: 1 };

      uniforms["turbidity"].value = turbidity[weather] || 2;
      uniforms["rayleigh"].value = rayleigh[weather] || 0.5;
      uniforms["mieCoefficient"].value = 0.005;
      uniforms["mieDirectionalG"].value = 0.7;

      // Time of day adjustments
      const date = new Date();
      const hours = date.getHours() + date.getMinutes() / 60;
      // Correctly calculate sun elevation: 0 at sunrise/sunset, 90 at noon.
      const elevation = Math.max(
        0,
        hours > 6 && hours < 18 ? 90 - Math.abs(hours - 12) * 15 : 0
      );
      const azimuth = 180; // Keep sun in the south for simplicity

      const phi = THREE.MathUtils.degToRad(90 - elevation);
      const theta = THREE.MathUtils.degToRad(azimuth);
      sun.setFromSphericalCoords(1, phi, theta);

      uniforms["sunPosition"].value.copy(sun);
      sunLight.position.copy(sun);

      // Night effect
      if (sun.y < -0.05) {
        // Night time
        sunLight.intensity = 0.1;
        ambientLight.intensity = 0.1;
        renderer.toneMappingExposure = 0.3;
        moonMesh.visible = true;
        moonLight.intensity = 0.3;
        const moonPosition = sun.clone().negate();
        moonMesh.position.copy(moonPosition).multiplyScalar(400);
        moonLight.position.copy(moonPosition);
      } else {
        sunLight.intensity = 2;
        ambientLight.intensity = 0.2;
        renderer.toneMappingExposure = 0.7;
        moonMesh.visible = false;
        moonLight.intensity = 0;
      }
    };

    updateSky(); // Initial setup

    // Animation loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      controls.update();
      ambientParticles.update(delta);
      updateSky(); // Update the sky on every frame for smooth animation
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

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onResize);
      if (currentMount && renderer.domElement.parentNode === currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      // Dispose of Three.js objects
      scene.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach((m) => m.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, [weather]); // Re-run useEffect if weather changes

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
}
