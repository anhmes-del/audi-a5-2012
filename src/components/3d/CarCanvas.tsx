"use client";

import { Canvas } from "@react-three/fiber";
import CarModel from "./CarModel";
import CarLighting from "./CarLighting";
import CarAnimation from "./CarAnimation";

export default function CarCanvas({ scrollProgress }: { scrollProgress: number }) {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 1.2, 5.0], fov: 45, near: 0.1, far: 20 }}
        gl={{ antialias: true, alpha: true }}
      >
        <CarLighting />
        <CarAnimation scrollProgress={scrollProgress}>
          <CarModel scrollProgress={scrollProgress} />
        </CarAnimation>
      </Canvas>
    </div>
  );
}
