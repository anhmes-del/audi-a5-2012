"use client";

import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function CarAnimation({
  scrollProgress,
  children,
}: {
  scrollProgress: number;
  children: React.ReactNode;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const { camera, viewport } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  // Camera coordinates rig
  const targetCamPos = new THREE.Vector3(0, 1.2, 5.0);
  const smoothedCamPos = new THREE.Vector3(0, 1.2, 5.0);

  // Mouse parallax interaction
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;

    // Coordinate state machine per scroll stage
    // Scene 1: Central silhouette, camera front-low (Z=5.2)
    // Scene 2: Zoom close to roofline / side panels (Z=3.8, X=0.4, Y=0.8)
    // Scene 3: Camera shifts to show rear details (Z=4.5, X=-0.5, Y=0.5)
    // Scene 4: Shift car to the left, camera side profile (Z=4.8, X=-1.3, Y=0.4)
    // Scene 5: Zoom out, show full rotating model (Z=5.5, X=0, Y=1.0)
    let targetX = 0;
    let targetY = 0;
    let targetZ = 5.2;

    if (scrollProgress < 0.25) {
      // Scene 1 to 2
      const p = scrollProgress / 0.25;
      targetX = THREE.MathUtils.lerp(0, 0.5, p);
      targetY = THREE.MathUtils.lerp(0, 0.4, p);
      targetZ = THREE.MathUtils.lerp(5.2, 3.8, p);
    } else if (scrollProgress < 0.5) {
      // Scene 2 to 3
      const p = (scrollProgress - 0.25) / 0.25;
      targetX = THREE.MathUtils.lerp(0.5, -0.6, p);
      targetY = THREE.MathUtils.lerp(0.4, 0.3, p);
      targetZ = THREE.MathUtils.lerp(3.8, 4.2, p);
    } else if (scrollProgress < 0.75) {
      // Scene 3 to 4
      const p = (scrollProgress - 0.5) / 0.25;
      // Shift car to the left on desktop for side-by-side specs view
      const isMobile = viewport.width < 4;
      const leftShift = isMobile ? 0 : -1.2;
      targetX = THREE.MathUtils.lerp(-0.6, leftShift, p);
      targetY = THREE.MathUtils.lerp(0.3, 0.1, p);
      targetZ = THREE.MathUtils.lerp(4.2, 4.6, p);
    } else {
      // Scene 4 to 5
      const p = (scrollProgress - 0.75) / 0.25;
      const isMobile = viewport.width < 4;
      const prevX = isMobile ? 0 : -1.2;
      targetX = THREE.MathUtils.lerp(prevX, 0, p);
      targetY = THREE.MathUtils.lerp(0.1, 0, p);
      targetZ = THREE.MathUtils.lerp(4.6, 5.5, p);
    }

    // Apply mouse parallax only in active viewport zones
    const parallaxX = mouse.current.x * 0.25;
    const parallaxY = mouse.current.y * 0.25;

    // Smooth lerping positions
    targetCamPos.set(targetX + parallaxX, 1.2 + parallaxY, targetZ);
    smoothedCamPos.lerp(targetCamPos, 0.05);
    camera.position.copy(smoothedCamPos);

    // Keep camera looking at the car center
    const targetLookAt = new THREE.Vector3(targetX, 0.2, 0);
    camera.lookAt(targetLookAt);
  });

  return <group ref={groupRef}>{children}</group>;
}
