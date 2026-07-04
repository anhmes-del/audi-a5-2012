"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";

export default function CarHeroImage({ scrollProgress }: { scrollProgress: number }) {
  const [viewportWidth, setViewportWidth] = useState(1200);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse parallax
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    setViewportWidth(window.innerWidth);

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to -0.5 to 0.5
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(x * 40); // Max 40px parallax offset
      mouseY.set(y * 40);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Map scroll progress to scale and position transitions
  // Scene 1: Center, scale 1.0
  // Scene 2: Zoom close (scale 1.35, X: 150px)
  // Scene 3: Zoom back detail (scale 1.2, X: -100px)
  // Scene 4: Move left to specs layout (scale 0.9, X: -250px on desktop)
  // Scene 5: Pull back for CTA (scale 1.05, Y: 100px)
  let targetScale = 1.0;
  let targetX = 0;
  let targetY = 0;

  const isDesktop = viewportWidth > 768;

  if (scrollProgress < 0.25) {
    const p = scrollProgress / 0.25;
    targetScale = 1.0 + p * 0.35; // 1.0 -> 1.35
    targetX = p * (isDesktop ? 150 : 50);
  } else if (scrollProgress < 0.5) {
    const p = (scrollProgress - 0.25) / 0.25;
    targetScale = 1.35 - p * 0.15; // 1.35 -> 1.2
    targetX = (isDesktop ? 150 : 50) - p * (isDesktop ? 250 : 100);
  } else if (scrollProgress < 0.75) {
    const p = (scrollProgress - 0.5) / 0.25;
    targetScale = 1.2 - p * 0.3; // 1.2 -> 0.9
    const startX = isDesktop ? -100 : -50;
    const endX = isDesktop ? -280 : 0; // Move left on desktop for side-by-side specs
    targetX = startX + p * (endX - startX);
  } else {
    const p = (scrollProgress - 0.75) / 0.25;
    targetScale = 0.9 + p * 0.15; // 0.9 -> 1.05
    const startX = isDesktop ? -280 : 0;
    targetX = startX - p * startX; // Centered
    targetY = p * 60; // Slightly lower for CTA visibility
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none flex items-center justify-center overflow-hidden bg-[#050505]/95">
      
      {/* Dynamic Background Cyber Grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"
        style={{ transform: "perspective(500px) rotateX(60deg) translateY(-100px) scale(1.5)" }}
      />

      {/* Main Photorealistic 3D Render Image Container */}
      <motion.div
        animate={{
          scale: targetScale,
          x: targetX,
          y: targetY,
        }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 15,
        }}
        style={{
          x: springX,
          y: springY,
        }}
        className="relative w-[90%] md:w-[70%] max-w-5xl aspect-video rounded-3xl overflow-hidden border border-white/5 shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
      >
        <img
          src="/audi_a5.jpg"
          alt="Audi A5 Sportback 2012 White"
          className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.05]"
        />

        {/* Ambient Glow Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 pointer-events-none" />
        
        {/* Neon Orange Accent lines around image border */}
        <div className="absolute inset-0 border border-[#ff5e00]/10 rounded-3xl pointer-events-none" />
      </motion.div>

    </div>
  );
}
