import * as THREE from "three";

export default class FallingLeaves extends THREE.Points {
  constructor(count = 500) {
    // Geometry
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count * 3); // x: phase, y: speed, z: size

    for (let i = 0; i < count; i++) {
      // Initial position spread across the scene
      positions[i * 3 + 0] = (Math.random() * 2 - 1) * 100; // x
      positions[i * 3 + 1] = Math.random() * 150; // y (start from top)
      positions[i * 3 + 2] = (Math.random() * 2 - 1) * 150; // z

      // Random values for animation to make each leaf unique
      randoms[i * 3 + 0] = Math.random() * Math.PI * 2; // phase for swaying
      randoms[i * 3 + 1] = 5 + Math.random() * 5; // fall speed
      randoms[i * 3 + 2] = Math.random() * 3 + 2; // size
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aRandom", new THREE.BufferAttribute(randoms, 3));

    // Material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uTexture: {
          value: new THREE.TextureLoader().load("/leaf3.png"),
        },
      },
      vertexShader: `
        uniform float uTime;
        attribute vec3 aRandom;

        void main() {
            vec3 pos = position;

            // Animate falling
            pos.y = mod(pos.y - (aRandom.y * uTime), 200.0) - 50.0;

            // Animate swaying
            pos.x += sin(uTime * 0.3 + aRandom.x) * 3.0;
            pos.z += cos(uTime * 0.2 + aRandom.x) * 2.0;

            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = aRandom.z * (200.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;

        void main() {
            // Use a circular shape for the particle
            float dist = length(gl_PointCoord - vec2(0.5));
            if (dist > 0.5) discard;

            gl_FragColor = texture2D(uTexture, gl_PointCoord);
            if (gl_FragColor.a < 0.1) discard;
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });

    super(geometry, material);

    this.frustumCulled = false;
  }

  update(delta) {
    this.material.uniforms.uTime.value += delta;
  }
}
