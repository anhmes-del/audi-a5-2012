"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowUpRight, Gauge, Shield, Key, Sparkles, PhoneCall } from "lucide-react";
import { translations, Language } from "@/utils/translations";
import CarText from "@/components/CarText";

import CarHeroImage from "@/components/CarHeroImage";

import AudioPlayer from "@/components/AudioPlayer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(900);
  const [lang, setLang] = useState<Language>("vi"); // Vietnamese default
  const t = translations[lang];

  useEffect(() => {
    setViewportHeight(window.innerHeight);
    
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Calculate progress of scroll through the 500vh container
      const totalHeight = containerRef.current.scrollHeight - window.innerHeight;
      const scrollTop = -rect.top;
      const progress = Math.min(Math.max(scrollTop / totalHeight, 0), 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate translate offset for fixed container to scroll out of view at the end of the 500vh block
  const totalStoryScroll = containerRef.current 
    ? containerRef.current.scrollHeight - viewportHeight 
    : 3600;
  const translateY = scrollY > totalStoryScroll ? -(scrollY - totalStoryScroll) : 0;

  return (
    <div className="relative w-full min-h-screen bg-[#050505] text-[#f5f5f7] select-none overflow-x-hidden">
      
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 backdrop-blur-md bg-black/10 border-b border-white/5">
        <div className="text-xl font-bold tracking-[0.25em] text-white">
          AUDI<span className="text-[#ff5e00]">A5</span>
        </div>
        <nav className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest text-zinc-400">
          <a href="#genesis" className="hover:text-white transition-colors duration-300">{t.navGenesis}</a>
          <a href="#activation" className="hover:text-white transition-colors duration-300">{t.navCurve}</a>
          <a href="#porosity" className="hover:text-white transition-colors duration-300">{t.navPerformance}</a>
          <a href="#applications" className="hover:text-white transition-colors duration-300">{t.navSpecs}</a>
        </nav>
        <div className="flex items-center gap-4">
          
          {/* Scaled 3x Language Switcher */}
          <div className="flex gap-4 text-[30px] font-mono tracking-widest text-zinc-500 mr-4 border-r border-white/10 pr-6">
            {(["en", "vi", "zh", "es", "ja"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`hover:text-white uppercase transition-colors cursor-pointer ${
                  lang === l ? "text-[#ff5e00] font-black" : "font-light"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full border border-white/10 hover:border-[#ff5e00] hover:bg-[#ff5e00]/10 transition-all duration-500"
          >
            {t.navInquire} <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* 5-Scene Scroll Story Container */}
      <div ref={containerRef} className="relative w-full h-[500vh]">
        <div 
          className="fixed top-0 left-0 w-full h-screen overflow-hidden z-10"
          style={{ transform: `translateY(${translateY}px)` }}
        >
          <CarHeroImage scrollProgress={scrollProgress} />
          <CarText scrollProgress={scrollProgress} lang={lang} />
        </div>
      </div>

      {/* Reversion Main Sections */}
      <main className="relative z-20 w-full bg-gradient-to-b from-black to-[#050505] border-t border-white/5">
        
        {/* Detail Specs & Overview */}
        <section id="applications" className="min-h-screen w-full flex flex-col justify-center px-8 md:px-16 py-32">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div className="flex flex-col justify-center gap-6">
              <span className="text-xs font-mono text-[#ff5e00] tracking-widest uppercase">
                {lang === "vi" ? "ĐIỂM NỔI BẬT" : "VEHICLE HIGHLIGHTS"}
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                {lang === "vi" ? "SANG TRỌNG ĐẲNG CẤP ĐỨC" : "GERMAN AUTOMOTIVE EXCELLENCE"}
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                {lang === "vi" 
                  ? "Xe Audi A5 Sportback 2012 nhập khẩu nguyên chiếc. Thiết kế thời thượng vượt thời gian cùng mức giá 399 Triệu Đồng lý tưởng để sở hữu xế sang."
                  : "Imported Audi A5 Sportback 2012. Timeless coupe aesthetics with direct performance underpinnings at an accessible pricing."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1 */}
              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-sm flex flex-col gap-4 hover:border-[#ff5e00]/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#ff5e00]/10 flex items-center justify-center text-[#ff5e00]">
                  <Gauge className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {lang === "vi" ? "Vận Hành Bền Bỉ" : "Solid Performance"}
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed font-light">
                  {lang === "vi" 
                    ? "Hộp số S-Tronic chuyển số mượt mà, khung gầm đầm chắc đặc trưng của dòng xe Audi nhập Đức."
                    : "S-Tronic dual clutch transmission with solid handling and high-speed highway stability."}
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-sm flex flex-col gap-4 hover:border-[#ff5e00]/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#ff5e00]/10 flex items-center justify-center text-[#ff5e00]">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {lang === "vi" ? "An Toàn Tối Đa" : "High Safety Rating"}
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed font-light">
                  {lang === "vi" 
                    ? "Hệ thống phanh ABS, cân bằng điện tử ESP, cùng túi khí bảo vệ toàn bộ cabin hành khách."
                    : "Comprehensive active safety, electronic stability control, and advanced airbag network."}
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-sm flex flex-col gap-4 hover:border-[#ff5e00]/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#ff5e00]/10 flex items-center justify-center text-[#ff5e00]">
                  <Key className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {lang === "vi" ? "Giá Trị Hoàn Hảo" : "Outstanding Value"}
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed font-light">
                  {lang === "vi" 
                    ? "Chỉ với 399 Triệu Đồng sở hữu ngay phom dáng Sportback sang chảnh không hề lỗi thời."
                    : "Obtain a high-end luxury vehicle shape with frameless doors for only 399 Million VND."}
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-sm flex flex-col gap-4 hover:border-[#ff5e00]/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#ff5e00]/10 flex items-center justify-center text-[#ff5e00]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {lang === "vi" ? "Kiểu Dáng Coupe" : "Sleek Coupe Line"}
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed font-light">
                  {lang === "vi" 
                    ? "Dáng Sportback 5 cửa thể thao, cửa không viền thời thượng thu hút mọi ánh nhìn."
                    : "Classic 5-door Sportback configuration with elegant frameless side window profile."}
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Section 5: Cinematic Footer & Contact */}
        <section id="contact" className="h-[80vh] w-full flex flex-col justify-between px-8 py-20 md:px-16">
          <div /> {/* Spacer */}
          
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="flex flex-col gap-4"
            >
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-none">
                {lang === "vi" ? "SỞ HỮU NGAY" : "OWN THE ROAD"}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-[#ff5e00] drop-shadow-[0_0_30px_rgba(255,94,0,0.35)]">
                  {lang === "vi" ? "AUDI A5 SPORTBACK." : "AUDI A5 COUPE."}
                </span>
              </h2>
              <p className="max-w-lg text-sm text-zinc-400 leading-relaxed font-light mt-4 mx-auto">
                {lang === "vi"
                  ? "Bán xe Audi A5 Sportback 2012 màu đen lịch lãm, nội thất da cao cấp. Liên hệ đặt lịch xem xe và lái thử ngay hôm nay tại Hà Nội / TP.HCM."
                  : "Luxury black paint, premium leather cockpit. Connect with us to schedule an in-person viewing and test drive today."}
              </p>
            </motion.div>

            <a
              href="tel:0909999999"
              className="flex items-center gap-2 px-8 py-4 bg-[#ff5e00] text-black font-extrabold uppercase text-sm tracking-widest rounded-full hover:bg-white hover:scale-105 transition-all duration-500 shadow-[0_4px_30px_rgba(255,94,0,0.4)]"
            >
              <PhoneCall className="w-4 h-4" /> {t.specBtn}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/5 pt-8 text-[10px] font-mono text-zinc-600 gap-4">
            <div>{t.footRights}</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors duration-300">TERMS</a>
              <a href="#" className="hover:text-white transition-colors duration-300">PRIVACY</a>
              <a href="#" className="hover:text-white transition-colors duration-300">SPECS</a>
            </div>
          </div>
        </section>

      </main>
      
      {/* Audio integration */}
      <AudioPlayer />
      
    </div>
  );
}
