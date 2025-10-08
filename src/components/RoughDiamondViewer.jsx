import { useEffect, useRef } from "react";
import * as THREE from "three";
import { HDRLoader } from "three/examples/jsm/loaders/HDRLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function RoughDiamondViewer() {
  const mountRef = useRef(null);

  useEffect(() => {
    const current = mountRef.current;
    const boxSize = 400;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      boxSize / boxSize,
      0.1,
      1000
    );
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(boxSize, boxSize);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    current.appendChild(renderer.domElement);

    const material = new THREE.MeshStandardMaterial({
      color: 0x4dd8ff,
      roughness: 0.2,
      metalness: 0.1,
    });

    let model = null;

    new HDRLoader().load("royal_esplanade_1k.hdr", (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = texture;
      scene.background = texture;
      scene.backgroundBlurriness = 0.5;
    });

    const loader = new GLTFLoader();
    loader.load("rough_diamond.glb", (gltf) => {
      model = gltf.scene;
      model.scale.set(2, 2, 2);
      model.traverse((child) => {
        if (child.isMesh) {
          child.material = material;
        }
      });
      scene.add(model);
    });

    const pointLight1 = new THREE.PointLight(0xffffff, 10);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    let isDragging = false;
    const previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e) => {
      isDragging = true;
      previousMousePosition.x = e.clientX;
      previousMousePosition.y = e.clientY;
    };

    const onMouseMove = (e) => {
      if (!isDragging || !model) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;
      model.rotation.y += deltaX * 0.005;
      model.rotation.x += deltaY * 0.005;
      console.log(
        `Rotation => X: ${model.rotation.x.toFixed(
          2
        )}, Y: ${model.rotation.y.toFixed(2)}, Z: ${model.rotation.z.toFixed(
          2
        )}`
      );
      previousMousePosition.x = e.clientX;
      previousMousePosition.y = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    renderer.domElement.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      // Placeholder for responsiveness if needed
    };
    window.addEventListener("resize", onResize);

    return () => {
      if (current && current.contains(renderer.domElement)) {
        current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", onResize);
      renderer.domElement.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return <div ref={mountRef} style={{ width: 400, height: 400 }} />;
}
