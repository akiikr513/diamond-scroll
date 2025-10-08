import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// Placeholder for the landscape
export default class Landscape extends THREE.Group {
  constructor() {
    super();

    const loader = new GLTFLoader();
    // Make sure you have a 'landscape.glb' file in your /public folder
    loader.load("/landscape.glb", (gltf) => {
      const model = gltf.scene;
      model.scale.setScalar(25); // Scale the model to a reasonable size
      model.position.set(-50, -50, 50);
      model.rotation.y = Math.PI / 15; // 12 degrees
      this.add(model);
    });
  }
}
