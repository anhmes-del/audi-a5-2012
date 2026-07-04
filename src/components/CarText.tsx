"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Compass, Gauge, Cpu, Calendar, Tag, Wrench } from "lucide-react";
import { translations, Language } from "@/utils/translations";

interface CarTextProps {
  scrollProgress: number;
  lang: Language;
}

export default function CarText({ scrollProgress, lang }: CarTextProps) {
  const t = translations[lang];

  // Active scene mapping
  let scene = 1;
  if (scrollProgress >= 0.2 && scrollProgress < 0.45) scene = 2;
  else if (scrollProgress >= 0.45 && scrollProgress < 0.7) scene = 3;
  else if (scrollProgress >= 0.7 && scrollProgress < 0.9) scene = 4;
  else if (scrollProgress >= 0.9) scene = 5;

  const textFadeVariants: any = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeIn" } },
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 flex flex-col justify-between p-8 md:p-16">
      
      {/* Top Header Labels */}
      <div className="flex justify-between items-start w-full">
        <div className="flex flex-col gap-1">
          <span className="text-[9px] font-mono tracking-[0.3em] text-zinc-500 uppercase">
            AUDI AUTOMOTIVE SERIES
          </span>
          <span className="text-xs font-bold text-white tracking-widest uppercase">
            {scene === 1 && "GENESIS"}
            {scene === 2 && "AERODYNAMICS"}
            {scene === 3 && "PERFORMANCE"}
            {scene === 4 && "SPECIFICATIONS"}
            {scene >= 5 && "ACQUISITION"}
          </span>
        </div>
        <div className="text-right flex flex-col gap-1">
          <span className="text-[9px] font-mono tracking-[0.3em] text-[#ff5e00] uppercase">
            ASKING PRICE
          </span>
          <span className="text-xs font-mono font-bold text-[#ff5e00]">
            399,000,000 VND
          </span>
        </div>
      </div>

      {/* Main Narrative Zone */}
      <div className="flex-1 flex items-center justify-between w-full mt-12 mb-12">
        <AnimatePresence mode="wait">
          {scene === 1 && (
            <motion.div
              key="scene-1"
              variants={textFadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="max-w-xl flex flex-col gap-4"
            >
              <h1 className="text-4xl md:text-7xl font-black tracking-tight text-white leading-none">
                {t.heroTitle1}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-600">
                  {t.heroTitle2}
                </span>
              </h1>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light">
                {t.heroDesc}
              </p>
            </motion.div>
          )}

          {scene === 2 && (
            <motion.div
              key="scene-2"
              variants={textFadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="max-w-xl flex flex-col gap-4 ml-auto"
            >
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 text-[9px] font-mono bg-[#ff5e00]/15 text-[#ff5e00] rounded">
                  {t.curveStage}
                </span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">Koppe Outline</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-none">
                {t.curveTitle1}<br />
                <span className="text-[#ff5e00]">{t.curveTitle2}</span>
              </h2>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light">
                {t.curveDesc}
              </p>
              <div className="flex gap-8 mt-4 border-l-2 border-[#ff5e00] pl-4">
                <div>
                  <div className="text-xl font-bold text-white">{t.curveMetric1}</div>
                  <div className="text-[9px] text-zinc-500 uppercase tracking-widest">{t.curveMetric1Label}</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">{t.curveMetric2}</div>
                  <div className="text-[9px] text-zinc-500 uppercase tracking-widest">{t.curveMetric2Label}</div>
                </div>
              </div>
            </motion.div>
          )}

          {scene === 3 && (
            <motion.div
              key="scene-3"
              variants={textFadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="max-w-xl flex flex-col gap-4"
            >
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 text-[9px] font-mono bg-zinc-800 text-zinc-300 rounded">
                  {t.perfStage}
                </span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">QUATTRO DRIVE</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                {t.perfTitle}
              </h2>
              <h3 className="text-sm font-bold text-[#ff5e00]">
                {t.perfSub}
              </h3>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light">
                {t.perfDesc}
              </p>
            </motion.div>
          )}

          {scene === 4 && (
            <motion.div
              key="scene-4"
              variants={textFadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="max-w-md w-full flex flex-col gap-5 bg-black/50 p-6 rounded-2xl border border-white/5 backdrop-blur-md ml-auto"
            >
              <h2 className="text-lg font-black text-white tracking-wider border-b border-white/5 pb-2">
                {t.specTitle}
              </h2>
              <div className="flex flex-col gap-3">
                
                {/* Year */}
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded bg-[#ff5e00]/10 flex items-center justify-center text-[#ff5e00]">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div className="flex-1 text-xs">
                    <div className="font-bold text-white">{t.specYear}</div>
                  </div>
                </div>

                {/* Engine */}
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded bg-[#ff5e00]/10 flex items-center justify-center text-[#ff5e00]">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div className="flex-1 text-xs">
                    <div className="font-bold text-white">{t.specEngine}</div>
                  </div>
                </div>

                {/* Transmission */}
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded bg-[#ff5e00]/10 flex items-center justify-center text-[#ff5e00]">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div className="flex-1 text-xs">
                    <div className="font-bold text-white">{t.specTrans}</div>
                  </div>
                </div>

                {/* Drivetrain */}
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded bg-[#ff5e00]/10 flex items-center justify-center text-[#ff5e00]">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div className="flex-1 text-xs">
                    <div className="font-bold text-white">{t.specDrive}</div>
                  </div>
                </div>

                {/* Selling Price */}
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded bg-[#ff5e00]/10 flex items-center justify-center text-[#ff5e00]">
                    <Tag className="w-4 h-4" />
                  </div>
                  <div className="flex-1 text-xs">
                    <div className="font-bold text-white">{t.specPriceLabel}</div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Footer Info */}
      <div className="flex justify-between items-end w-full">
        <div className="text-[10px] font-mono text-zinc-600">
          [SCROLL TO NAVIGATE]
        </div>
        {scene < 5 && (
          <div className="w-1.5 h-1.5 rounded-full bg-[#ff5e00] animate-ping" />
        )}
        <div className="text-right text-[10px] font-mono text-zinc-600">
          FPS: 60 / WebGL Ambient Active
        </div>
      </div>

    </div>
  );
}
