import * as THREE from "three";

export default class AmbientParticles extends THREE.Points {
  constructor(config) {
    // --- Default Configuration ---
    const defaultConfig = {
      count: 500,
      texturePaths: ["/green_leaf.png"],
      particleSize: 4.0,
      fallSpeed: { min: 1, max: 3 },
      sway: { x: 2.0, z: 2.0 },
      yPosition: { min: 0, max: 150 }, // Default starting height range
    };

    // Merge user config with defaults
    config = { ...defaultConfig, ...config };

    // Geometry
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(config.count * 3);
    const randoms = new Float32Array(config.count * 3); // x: phase, y: speed, z: sway intensity
    const textureIndices = new Float32Array(config.count);

    for (let i = 0; i < config.count; i++) {
      // Initial position spread across the scene
      positions[i * 3 + 0] = (Math.random() * 2 - 1) * 100; // x
      positions[i * 3 + 1] =
        config.yPosition.min +
        Math.random() * (config.yPosition.max - config.yPosition.min); // y
      positions[i * 3 + 2] = (Math.random() * 2 - 1) * 150; // z

      // Random values for animation to make each leaf unique
      randoms[i * 3 + 0] = Math.random() * Math.PI * 2; // phase for swaying
      randoms[i * 3 + 1] =
        config.fallSpeed.min +
        Math.random() * (config.fallSpeed.max - config.fallSpeed.min);
      randoms[i * 3 + 2] = Math.random(); // sway intensity multiplier

      textureIndices[i] = Math.floor(
        Math.random() * config.texturePaths.length
      );
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aRandom", new THREE.BufferAttribute(randoms, 3));
    geometry.setAttribute(
      "aTextureIndex",
      new THREE.BufferAttribute(textureIndices, 1)
    );

    const textureLoader = new THREE.TextureLoader();
    const textures = config.texturePaths.map((path) =>
      textureLoader.load(path)
    );

    // Material
    const material = new THREE.ShaderMaterial({
      defines: {
        TEXTURE_COUNT: textures.length,
      },
      uniforms: {
        uTime: { value: 0 },
        uTextures: { value: textures },
        uParticleSize: { value: config.particleSize },
        uSway: { value: new THREE.Vector2(config.sway.x, config.sway.z) },
      },
      vertexShader: `
        uniform float uTime;
        uniform float uParticleSize;
        uniform vec2 uSway;
        attribute vec3 aRandom;
        attribute float aTextureIndex;
        varying float vTextureIndex;

        void main() {
            vec3 pos = position;

            // Animate falling
            pos.y = mod(pos.y - (aRandom.y * uTime), 200.0) - 50.0;

            // Animate swaying
            pos.x += sin(uTime * 0.3 + aRandom.x) * uSway.x * aRandom.z;
            pos.z += cos(uTime * 0.2 + aRandom.x) * uSway.y * aRandom.z;

            vTextureIndex = aTextureIndex;

            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = uParticleSize * (200.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D uTextures[TEXTURE_COUNT];
        varying float vTextureIndex;

        void main() {
            float dist = length(gl_PointCoord - vec2(0.5));
            if (dist > 0.5) discard;

            vec4 color = vec4(0.0);
            int index = int(vTextureIndex);

            // Use preprocessor directives to compile only the necessary texture lookups.
            // This is the most robust way to handle variable-length sampler arrays.
            #if TEXTURE_COUNT > 0
              if (index == 0) color = texture2D(uTextures[0], gl_PointCoord);
            #endif
            #if TEXTURE_COUNT > 1
              else if (index == 1) color = texture2D(uTextures[1], gl_PointCoord);
            #endif
            #if TEXTURE_COUNT > 2
              else if (index == 2) color = texture2D(uTextures[2], gl_PointCoord);
            #endif
            #if TEXTURE_COUNT > 3
              else if (index == 3) color = texture2D(uTextures[3], gl_PointCoord);
            #endif

            // Fallback for safety, though it should not be needed with the preprocessor guards.
            if (vTextureIndex >= float(TEXTURE_COUNT)) {
                color = texture2D(uTextures[0], gl_PointCoord);
            }

            gl_FragColor = color;
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
