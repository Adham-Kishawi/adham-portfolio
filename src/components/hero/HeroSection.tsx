"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useGamification } from "@/context/GamificationContext";
import { useAudio } from "@/context/AudioContext";
import { AdhamAvatar } from "../avatar/AdhamAvatar";
import { CoinItem } from "../gamification/CoinItem";
import {
  Gamepad2,
  ArrowDown,
  Copy,
  Check,
  Terminal,
  Zap,
  ShieldCheck,
  MapPin,
  ExternalLink
} from "lucide-react";

export function HeroSection() {
  const { t, isRtl } = useLanguage();
  const { setTourActive } = useGamification();
  const { playClick, playStart } = useAudio();
  const [copied, setCopied] = useState(false);

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
    "Web Audio API",
    "Vitest",
    "TanStack Virtual",
    "Visx D3",
    "Cloudflare Edge"
  ];

  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] pt-28 pb-16 sm:pt-36 sm:pb-24 flex flex-col justify-center overflow-hidden"
    >
      {/* 1. Cyber Synth Grid Horizon */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#00F0FF12_1px,transparent_1px),linear-gradient(to_bottom,#00F0FF12_1px,transparent_1px)] bg-[size:48px_48px]"
          style={{
            transform: "perspective(450px) rotateX(65deg) translateY(240px) scale(2.2)",
            transformOrigin: "bottom center"
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center text-center">
        {/* Role Badge + Hidden Coin #1 */}
        <div className="flex items-center gap-2 mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span>{t.hero.badge}</span>
          </motion.div>

          {/* HIDDEN COIN #1: Right beside the Hero role badge! */}
          <CoinItem id="coin-hero-tech" />
        </div>

        {/* High-Impact Cyber Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-100 max-w-4xl leading-[1.15] mb-6"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-cyan-200 to-white">
            {t.hero.titleLine1}
          </span>
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-pink-500 drop-shadow-[0_0_30px_rgba(0,240,255,0.3)]">
            {t.hero.titleLine2}
          </span>
        </motion.h1>

        {/* Subtitle with Location & Stack */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 font-sans"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Interactive CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12"
        >
          {/* Launch ADHAM.EXE Tour Button */}
          <button
            onClick={() => {
              playStart();
              setTourActive(true);
            }}
            className="group px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-mono text-xs sm:text-sm font-black shadow-[0_0_25px_rgba(0,240,255,0.45)] transition-all cursor-pointer flex items-center gap-2.5 active:scale-95"
          >
            <Gamepad2 className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
            <span>{t.hero.startTour}</span>
          </button>

          {/* Explore Work */}
          <a
            href="#projects-section"
            onClick={playClick}
            className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/50 font-mono text-xs sm:text-sm font-bold text-slate-200 transition-all cursor-pointer flex items-center gap-2"
          >
            <span>{t.hero.exploreWork}</span>
            <ArrowDown className="w-4 h-4 text-cyan-400" />
          </a>

          {/* Copy Email */}
          <button
            onClick={handleCopyEmail}
            className="px-4 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-pink-500/40 font-mono text-xs text-slate-300 transition-all cursor-pointer flex items-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">{t.hero.emailCopied}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-pink-400" />
                <span>{t.hero.copyEmail}</span>
              </>
            )}
          </button>
        </motion.div>

        {/* 3 Metric Glass Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-3xl mb-12"
        >
          <div className="rounded-xl bg-slate-950/70 border border-cyan-500/20 p-4 shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-md flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-200">
              {t.hero.metric1Value}
            </span>
            <span className="text-xs font-mono text-slate-400 mt-1">
              {t.hero.metric1Label}
            </span>
          </div>

          <div className="rounded-xl bg-slate-950/70 border border-pink-500/20 p-4 shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-md flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-200">
              {t.hero.metric2Value}
            </span>
            <span className="text-xs font-mono text-slate-400 mt-1">
              {t.hero.metric2Label}
            </span>
          </div>

          <div className="rounded-xl bg-slate-950/70 border border-emerald-500/20 p-4 shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-md flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              {t.hero.metric3Value}
            </span>
            <span className="text-xs font-mono text-slate-400 mt-1">
              {t.hero.metric3Label}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Infinite Tech Marquee Ticker */}
      <div className="relative w-full overflow-hidden border-y border-cyan-500/15 bg-slate-950/80 py-3 backdrop-blur-md">
        <div className="flex w-max animate-[marquee_25s_linear_infinite] gap-8">
          {[...marqueeTech, ...marqueeTech].map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2 font-mono text-xs text-slate-400 font-semibold uppercase tracking-wider"
            >
              <span className="text-cyan-400">⚡</span>
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
