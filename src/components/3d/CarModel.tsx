"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function CarModel({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const wheelsRef = useRef<THREE.Group>(null);

  // Animate car wheels and general idle hover
  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Idle float
      groupRef.current.position.y = Math.sin(time * 1.5) * 0.05 - 0.2;
      
      // Auto rotation based on scroll progress
      // Scene 1: face forward/diagonal (rotation Y = 0.5)
      // Scene 2: rotate to show side curve (rotation Y = 1.6)
      // Scene 3: rotate to show back (rotation Y = 3.2)
      // Scene 4: rotate to show side specs profile (rotation Y = 4.8)
      // Scene 5: show full car rotating (rotation Y = 4.8 + time * 0.1)
      let targetRotY = 0.5;
      if (scrollProgress < 0.25) {
        // Scene 1 to Scene 2
        const p = scrollProgress / 0.25;
        targetRotY = THREE.MathUtils.lerp(0.5, 1.6, p);
      } else if (scrollProgress < 0.5) {
        // Scene 2 to Scene 3
        const p = (scrollProgress - 0.25) / 0.25;
        targetRotY = THREE.MathUtils.lerp(1.6, 3.2, p);
      } else if (scrollProgress < 0.75) {
        // Scene 3 to Scene 4
        const p = (scrollProgress - 0.5) / 0.25;
        targetRotY = THREE.MathUtils.lerp(3.2, 4.8, p);
      } else {
        // Scene 4 to Scene 5
        const p = (scrollProgress - 0.75) / 0.25;
        targetRotY = THREE.MathUtils.lerp(4.8, 6.28 + time * 0.05, p);
      }

      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotY,
        0.05
      );
    }

    // Rotate wheels based on time/velocity
    if (wheelsRef.current) {
      wheelsRef.current.children.forEach((wheel) => {
        wheel.rotation.x = time * 3;
      });
    }
  });

  return (
    <group ref={groupRef} scale={1.2}>
      
      {/* Main Car Body / Chassis (Aerodynamic Sports Coupe) */}
      <mesh castShadow receiveShadow position={[0, 0.25, 0]}>
        <boxGeometry args={[1.2, 0.4, 3.0]} />
        <meshStandardMaterial
          color="#111111"
          roughness={0.15}
          metalness={0.9}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Sweeping Roof Cabin (Audi Sportback Curve) */}
      <mesh castShadow position={[0, 0.55, -0.2]}>
        <boxGeometry args={[1.0, 0.35, 1.6]} />
        <meshStandardMaterial
          color="#0d0d0d"
          roughness={0.05}
          metalness={0.95}
        />
      </mesh>

      {/* Front Hood Angle */}
      <mesh castShadow position={[0, 0.3, 1.3]} rotation={[-0.15, 0, 0]}>
        <boxGeometry args={[1.18, 0.25, 0.8]} />
        <meshStandardMaterial color="#111111" roughness={0.1} metalness={0.9} />
      </mesh>

      {/* Rear Coupe Slope (Sportback Slope) */}
      <mesh castShadow position={[0, 0.45, -1.2]} rotation={[0.25, 0, 0]}>
        <boxGeometry args={[0.98, 0.25, 1.0]} />
        <meshStandardMaterial color="#111111" roughness={0.1} metalness={0.9} />
      </mesh>

      {/* High-Tech Glowing Headlights (White Emissive) */}
      <group position={[0, 0.2, 1.5]}>
        <mesh position={[-0.45, 0, 0]}>
          <boxGeometry args={[0.2, 0.05, 0.1]} />
          <meshBasicMaterial color="#ffffff" toneMapped={false} />
        </mesh>
        <mesh position={[0.45, 0, 0]}>
          <boxGeometry args={[0.2, 0.05, 0.1]} />
          <meshBasicMaterial color="#ffffff" toneMapped={false} />
        </mesh>
      </group>

      {/* High-Tech Glowing Taillights (Red Emissive) */}
      <group position={[0, 0.25, -1.52]}>
        <mesh position={[-0.45, 0, 0]}>
          <boxGeometry args={[0.22, 0.05, 0.05]} />
          <meshBasicMaterial color="#ff003c" toneMapped={false} />
        </mesh>
        <mesh position={[0.45, 0, 0]}>
          <boxGeometry args={[0.22, 0.05, 0.05]} />
          <meshBasicMaterial color="#ff003c" toneMapped={false} />
        </mesh>
      </group>

      {/* Wireframe Outline for Tech Feel */}
      <mesh position={[0, 0.25, 0]}>
        <boxGeometry args={[1.22, 0.42, 3.02]} />
        <meshBasicMaterial color="#ff5e00" wireframe opacity={0.15} transparent />
      </mesh>

      {/* Wheels Group */}
      <group ref={wheelsRef}>
        {/* Front Left */}
        <mesh position={[-0.65, 0.1, 0.9]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.3, 0.3, 0.25, 24]} />
          <meshStandardMaterial color="#1c1c1c" roughness={0.7} metalness={0.3} />
        </mesh>
        {/* Front Right */}
        <mesh position={[0.65, 0.1, 0.9]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.3, 0.3, 0.25, 24]} />
          <meshStandardMaterial color="#1c1c1c" roughness={0.7} metalness={0.3} />
        </mesh>
        {/* Rear Left */}
        <mesh position={[-0.65, 0.1, -0.9]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.3, 0.3, 0.25, 24]} />
          <meshStandardMaterial color="#1c1c1c" roughness={0.7} metalness={0.3} />
        </mesh>
        {/* Rear Right */}
        <mesh position={[0.65, 0.1, -0.9]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.3, 0.3, 0.25, 24]} />
          <meshStandardMaterial color="#1c1c1c" roughness={0.7} metalness={0.3} />
        </mesh>
      </group>

    </group>
  );
}
