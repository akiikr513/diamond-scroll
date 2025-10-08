import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function Diamond({ scrollProgress, glowIntensity }) {
  const mountRef = useRef(null);
  const scrollRef = useRef(scrollProgress);
  const glowRef = useRef(glowIntensity);

  useEffect(() => {
    const currentMount = mountRef.current;
    let animationFrameId;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false; // Disable zoom to maintain focus
    controls.enablePan = false; // Disable panning

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // --- Glow Effect ---
    // 1. A point light inside the diamond
    const pointLight = new THREE.PointLight(0xffffff, 0, 100);
    scene.add(pointLight);

    // 2. A glowing sphere mesh around the diamond
    const glowGeometry = new THREE.SphereGeometry(2.5, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0,
      side: THREE.BackSide, // Render on the inside to create a halo effect
      blending: THREE.AdditiveBlending,
    });
    const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glowMesh);

    // Diamond Model
    const loader = new GLTFLoader();
    let diamondMesh;
    loader.load("diamond.glb", (gltf) => {
      diamondMesh = gltf.scene;
      diamondMesh.scale.set(2, 2, 2);
      scene.add(diamondMesh);

      // Apply a more reflective material to the diamond
      diamondMesh.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            metalness: 0.1,
            roughness: 0,
            transmission: 1.0, // Fully transparent
            thickness: 2.0,
            ior: 2.417, // Index of Refraction for diamond
            reflectivity: 1.0,
          });
        }
      });
    });

    // Animation loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (diamondMesh) {
        // Rotate the diamond based on scroll progress for a dynamic feel
        diamondMesh.rotation.y = scrollRef.current * Math.PI * 2;
      }

      // Update glow based on the prop from App.jsx
      pointLight.intensity = glowRef.current * 5; // Make the light intense
      glowMesh.material.opacity = glowRef.current * 0.5; // Make the halo visible

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const onResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onResize);
      if (currentMount && renderer.domElement.parentNode === currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []); // Only run this effect once on mount

  // Keep refs updated without re-triggering the effect
  useEffect(() => {
    scrollRef.current = scrollProgress;
    glowRef.current = glowIntensity;
  }, [scrollProgress, glowIntensity]);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
}
