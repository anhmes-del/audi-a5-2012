"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function CarLighting() {
  const particlesRef = useRef<THREE.Points>(null);

  // Slow drifting particle field representing dynamic wind/dust
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.02;
      particlesRef.current.position.y = Math.sin(time * 0.5) * 0.1;
    }
  });

  // Generate particle geometry
  const particleCount = 120;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 10;
    positions[i + 1] = (Math.random() - 0.5) * 6;
    positions[i + 2] = (Math.random() - 0.5) * 10;
  }

  return (
    <>
      {/* Volumetric ambient lighting */}
      <ambientLight intensity={0.4} />

      {/* Main Studio Key Light (Warm orange/white) */}
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.8}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      {/* Red Rim Light (Sports accent) */}
      <spotLight
        position={[-6, 4, -6]}
        angle={0.6}
        penumbra={0.8}
        intensity={4}
        color="#ff003c"
      />

      {/* Cool blue underglow fill */}
      <pointLight position={[0, -1, 0]} intensity={2.5} color="#0088ff" distance={4} />

      {/* Dynamic atmospheric dust points */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          color="#ff5e00"
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Glowing tech line grid on floor */}
      <gridHelper args={[20, 20, "#ff5e00", "#111111"]} position={[0, -0.4, 0]} />
    </>
  );
}
