import * as THREE from "three";

export default class MouseLeafTrail extends THREE.Points {
  constructor(
    count = 1000,
    texturePaths = ["/leaf1.png", "/leaf2.png", "/leaf3.png", "/leaf4.png"]
  ) {
    // Geometry
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const life = new Float32Array(count);
    const sizes = new Float32Array(count);
    const textureIndices = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() * 2 - 1) * 10;
      positions[i * 3 + 1] = (Math.random() * 2 - 1) * 10;
      positions[i * 3 + 2] = (Math.random() * 2 - 1) * 10;

      life[i] = Math.random(); // Start with random life
      sizes[i] = 0.1 + Math.random() * 0.1; // Set base size to 0.1
      textureIndices[i] = Math.floor(Math.random() * texturePaths.length);
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aLife", new THREE.BufferAttribute(life, 1));
    geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute(
      "aTextureIndex",
      new THREE.BufferAttribute(textureIndices, 1)
    );

    const textureLoader = new THREE.TextureLoader();
    const textures = texturePaths.map((path) => textureLoader.load(path));

    const material = new THREE.ShaderMaterial({
      defines: {
        TEXTURE_COUNT: textures.length,
      },
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector3(999, 999, 999) },
        uTextures: { value: textures },
      },
      vertexShader: `
        uniform float uTime;
        uniform vec3 uMouse;

        attribute float aLife;
        attribute float aSize;
        attribute float aTextureIndex;

        varying float vAlpha;
        varying float vTextureIndex;

        // Simplex 3D Noise by Stefan Gustavson
        // https://github.com/stegu/webgl-noise
        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
        vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
        float snoise(vec3 v) {
          const vec2 C = vec2(1.0/6.0, 1.0/3.0);
          const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
          vec3 i = floor(v + dot(v, C.yyy));
          vec3 x0 = v - i + dot(i, C.xxx);
          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min(g.xyz, l.zxy);
          vec3 i2 = max(g.xyz, l.zxy);
          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy;
          vec3 x3 = x0 - D.yyy;
          i = mod289(i);
          vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0))
              + i.x + vec4(0.0, i1.x, i2.x, 1.0));
          float n_ = 0.142857142857;
          vec3 ns = n_ * D.wyz - D.xzx;
          vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_);
          vec4 x = x_ * ns.x + ns.yyyy;
          vec4 y = y_ * ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);
          vec4 b0 = vec4(x.xy, y.xy);
          vec4 b1 = vec4(x.zw, y.zw);
          vec4 s0 = floor(b0)*2.0 + 1.0;
          vec4 s1 = floor(b1)*2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));
          vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
          vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
          vec3 p0 = vec3(a0.xy,h.x);
          vec3 p1 = vec3(a0.zw,h.y);
          vec3 p2 = vec3(a1.xy,h.z);
          vec3 p3 = vec3(a1.zw,h.w);
          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
          p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
          vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
          m = m * m;
          return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
        }

        // Curl noise
        vec3 curl(vec3 p) {
          const float e = 0.1;
          float n1 = snoise(vec3(p.x, p.y + e, p.z));
          float n2 = snoise(vec3(p.x, p.y - e, p.z));
          float n3 = snoise(vec3(p.x, p.y, p.z + e));
          float n4 = snoise(vec3(p.x, p.y, p.z - e));
          float n5 = snoise(vec3(p.x + e, p.y, p.z));
          float n6 = snoise(vec3(p.x - e, p.y, p.z));
          float x = n2 - n1 - (n4 - n3);
          float y = n4 - n3 - (n6 - n5);
          float z = n6 - n5 - (n2 - n1);
          return normalize(vec3(x, y, z));
        }

        void main() {
            float life = mod(aLife - uTime * 0.01, 1.0);
            vec3 pos = position;

            if (life < 0.01) {
              pos = uMouse;
            }

            vec3 velocity = curl(pos * 0.1 + uTime * 0.005);
            pos += velocity * 0.05;

            // Fade in and out
            float fadeIn = life * 2.0;
            float fadeOut = (1.0 - life) * 2.0;
            vAlpha = min(fadeIn, fadeOut);

            vTextureIndex = aTextureIndex;

            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = (1.0 - life) * aSize * (100.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D uTextures[TEXTURE_COUNT];
        varying float vAlpha;
        varying float vTextureIndex;

        void main() {
            float dist = length(gl_PointCoord - vec2(0.5));
            if (dist > 0.5) discard;

            vec4 color = vec4(0.0);
            int index = int(vTextureIndex);
            if (index == 0) {
                color = texture2D(uTextures[0], gl_PointCoord);
            } else if (index == 1) {
                color = texture2D(uTextures[1], gl_PointCoord);
            } else if (index == 2) {
                color = texture2D(uTextures[2], gl_PointCoord);
            } else if (index == 3) {
                color = texture2D(uTextures[3], gl_PointCoord);
            }

            gl_FragColor = color * vAlpha;
            if (gl_FragColor.a < 0.1) discard;
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });

    super(geometry, material);

    this.frustumCulled = false;
    this.particleIndex = 0;
  }

  update(delta, mousePosition, isMouseMoving) {
    this.material.uniforms.uTime.value += delta;
    this.material.uniforms.uMouse.value.copy(mousePosition);

    const lifeAttr = this.geometry.attributes.aLife;
    const positionAttr = this.geometry.attributes.position;

    // Update life and reset particles
    for (let i = 0; i < this.geometry.attributes.aLife.count; i++) {
      let life = lifeAttr.getX(i);
      life -= 0.01;

      if (life < 0 && isMouseMoving) {
        // Only reset if mouse is moving
        life = 1.0;
        positionAttr.setXYZ(
          i,
          mousePosition.x,
          mousePosition.y,
          mousePosition.z
        );
      }
      lifeAttr.setX(i, life);
    }
    lifeAttr.needsUpdate = true;
    positionAttr.needsUpdate = true;
  }
}
