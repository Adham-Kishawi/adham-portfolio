"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useGamification } from "@/context/GamificationContext";
import { useAudio } from "@/context/AudioContext";
import Galaxy from "@/components/ui/Galaxy";
import { CoinItem } from "../gamification/CoinItem";
import {
  Gamepad2,
  ArrowDown,
  Copy,
  Check,
  MapPin,
  ExternalLink,
  Code2,
  Sparkles,
  Camera
} from "lucide-react";

export function HeroSection() {
  const { t, isRtl } = useLanguage();
  const { setTourActive } = useGamification();
  const { playClick, playStart } = useAudio();
  const [copied, setCopied] = useState(false);
  const [activePhoto, setActivePhoto] = useState<"portrait" | "event">("portrait");

  const handleCopyEmail = () => {
    playClick();
    navigator.clipboard.writeText("Adhamkishawi@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const marqueeTech = [
    "Next.js 16 (App Router)",
    "React 19",
    "TypeScript",
    "Tailwind CSS v4",
    "GSAP 3",
    "Framer Motion",
    "Supabase SSR",
    "Prisma ORM",
    "Meta WhatsApp API",
    "WebGL / Three.js",
    "Web Audio API",
    "Vitest",
    "TanStack Virtual",
    "Visx D3",
    "Cloudflare Edge"
  ];

  return (
    <section
      id="hero-section"
      className="relative min-h-[95vh] pt-28 pb-16 sm:pt-36 sm:pb-24 flex flex-col justify-between overflow-hidden bg-[#05070B]"
    >
      {/* 1. Real Interactive WebGL Galaxy Starfield */}
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-75">
        <Galaxy
          density={0.75}
          glowIntensity={0.35}
          starSpeed={0.35}
          starColors={["#ffffff", "#00f0ff", "#2563eb", "#60a5fa"]}
          backgroundColor="transparent"
          mouseRepulsion={true}
          repulsionStrength={1.6}
          twinkleIntensity={0.4}
          starSize={1.1}
          layers={4}
          style={{}}
          dpr={1}
          className="w-full h-full"
        />
      </div>

      {/* 2. Quiet Gradient Vignette to ground the content */}
      <div className="absolute inset-0 z-1 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,#05070B_85%)]" />

      {/* 3. Main Hero Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Bold, Confident Architectural Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Status Pill + Hidden Coin #1 */}
            <div className="flex items-center gap-2 mb-6 flex-wrap justify-center lg:justify-start">
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-cyan-300 font-mono text-xs font-medium tracking-wide shadow-[0_0_16px_rgba(0,240,255,0.12)] backdrop-blur-md"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  <span>Ismailia, Egypt</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-300 font-semibold">{t.hero.badge}</span>
                </span>
              </motion.div>

              {/* HIDDEN COIN #1: Right beside the Hero status pill */}
              <CoinItem id="coin-hero-tech" />
            </div>

            {/* Confident Name & Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-100 leading-[1.1] mb-5"
            >
              <span className="block text-white">
                Adham Kishawi
              </span>
              <span className="block mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                Front-End Engineer &amp; Web Architect
              </span>
            </motion.h1>

            {/* Subtitle Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-8 font-sans"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* CTA Cluster */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10 w-full"
            >
              {/* Guided Tour with Adham */}
              <button
                onClick={() => {
                  playStart();
                  setTourActive(true);
                }}
                className="group px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-mono text-xs sm:text-sm font-bold shadow-[0_0_24px_rgba(0,240,255,0.35)] transition-all cursor-pointer flex items-center gap-2.5 active:scale-95"
              >
                <Gamepad2 className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
                <span>{t.hero.startTour}</span>
              </button>

              {/* Explore Selected Work */}
              <a
                href="#projects-section"
                onClick={playClick}
                className="px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/50 font-mono text-xs sm:text-sm font-semibold text-slate-200 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>{t.hero.exploreWork}</span>
                <ArrowDown className="w-4 h-4 text-cyan-400" />
              </a>

              {/* Direct Copy Email */}
              <button
                onClick={handleCopyEmail}
                className="px-4 py-3.5 rounded-xl bg-slate-950/70 hover:bg-slate-900 border border-slate-800 hover:border-blue-500/40 font-mono text-xs text-slate-300 transition-all cursor-pointer flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">{t.hero.emailCopied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-cyan-400" />
                    <span>{t.hero.copyEmail}</span>
                  </>
                )}
              </button>
            </motion.div>

            {/* Quiet, Understated Telemetry Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 w-full max-w-lg"
            >
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-slate-100">
                  {t.hero.metric1Value}
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                  {t.hero.metric1Label}
                </div>
              </div>

              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-cyan-400">
                  {t.hero.metric2Value}
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                  {t.hero.metric2Label}
                </div>
              </div>

              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-slate-100">
                  {t.hero.metric3Value}
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                  {t.hero.metric3Label}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Adham's Real Photo Centerpiece in Luxury Obsidian Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-[340px] sm:max-w-[380px]"
            >
              {/* Backglow Bezel */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-blue-600/20 to-sky-400/20 blur-xl opacity-75" />

              {/* Luxury Frame */}
              <div className="relative rounded-2xl bg-[#0A0E17]/90 border border-blue-500/30 p-2.5 shadow-[0_24px_64px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                
                {/* Photo Header Bar with Switcher */}
                <div className="flex items-center justify-between px-2.5 py-1.5 mb-2 border-b border-slate-800/80 text-[10px] font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-cyan-400 font-bold tracking-wider">ADHAM_KISHAWI.RAW</span>
                  </div>
                  
                  {/* Photo Switcher Button */}
                  <button
                    onClick={() => {
                      playClick();
                      setActivePhoto(prev => prev === "portrait" ? "event" : "portrait");
                    }}
                    className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-900 border border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 transition-colors cursor-pointer"
                    title="Toggle portrait/event photo"
                  >
                    <Camera className="w-3 h-3 text-cyan-400" />
                    <span>{activePhoto === "portrait" ? "Event View" : "Portrait View"}</span>
                  </button>
                </div>

                {/* Photo Display with Framer Motion Crossfade */}
                <div className="relative w-full h-[400px] sm:h-[440px] rounded-xl overflow-hidden bg-slate-950">
                  <AnimatePresence mode="wait">
                    {activePhoto === "portrait" ? (
                      <motion.div
                        key="portrait"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src="/images/adham-portrait.jpg"
                          alt="Adham Kishawi — Studio Portrait"
                          fill
                          priority
                          sizes="(max-width: 640px) 340px, 380px"
                          className="object-cover object-top filter brightness-[1.02] contrast-[1.04]"
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="event"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src="/images/adham-event.jpg"
                          alt="Adham Kishawi — Event Shot"
                          fill
                          sizes="(max-width: 640px) 340px, 380px"
                          className="object-cover object-center filter brightness-[1.02] contrast-[1.04]"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Corner Tech Reticles */}
                  <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
                  <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />

                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-transparent pointer-events-none" />

                  {/* Bottom Real-Time Telemetry HUD Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-950/85 border border-slate-800/90 backdrop-blur-md">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <div className="flex items-center gap-1.5 text-slate-200 font-semibold">
                        <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Adham Kishawi</span>
                      </div>
                      <span className="text-cyan-400 text-[10px]">Ismailia, EG</span>
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 mt-1 flex items-center justify-between">
                      <span>Front-End &amp; Web Architect</span>
                      <span className="text-emerald-400 font-medium">● Available</span>
                    </div>
                  </div>
                </div>

                {/* Footer Coordinates */}
                <div className="flex items-center justify-between px-2 pt-2 text-[9px] font-mono text-slate-500">
                  <span>LAT 30.6043° N</span>
                  <span>SYS: ONLINE</span>
                  <span>LON 32.2723° E</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 4. Infinite Tech Marquee Loop */}
      <div className="relative z-10 w-full overflow-hidden border-t border-blue-500/15 bg-slate-950/80 py-3 backdrop-blur-md mt-12">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-8">
          {[...marqueeTech, ...marqueeTech].map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2 font-mono text-xs text-slate-400 font-semibold uppercase tracking-wider"
            >
              <span className="text-cyan-400">✦</span>
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
