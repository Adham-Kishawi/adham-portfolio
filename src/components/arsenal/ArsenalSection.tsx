"use client";

import React from "react";
import { motion } from "framer-motion";
import { SKILLS_CATEGORIES } from "@/lib/data/skillsData";
import { GitHubIntegration } from "./GitHubIntegration";
import { useLanguage } from "@/context/LanguageContext";
import { CoinItem } from "../gamification/CoinItem";
import { LogoLoop } from "@/components/ui/LogoLoop";
import {
  Layers,
  Palette,
  Sparkles,
  Database,
  Code,
  CheckCircle,
  Cpu,
  Globe,
  Terminal,
  Zap,
  Server,
  Workflow
} from "lucide-react";

export function ArsenalSection() {
  const { t, lang } = useLanguage();

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Palette":
        return <Palette className="w-4 h-4 text-cyan-400" />;
      case "Sparkles":
        return <Sparkles className="w-4 h-4 text-blue-400" />;
      case "Database":
        return <Database className="w-4 h-4 text-emerald-400" />;
      default:
        return <Layers className="w-4 h-4 text-sky-400" />;
    }
  };

  // High-Fidelity Modern Tech Logos for the LogoLoop Component
  const techLogos = [
    {
      node: (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-md">
          <span className="font-mono font-black text-xs text-white">N</span>
          <span className="font-mono text-xs font-bold text-slate-200">Next.js 16</span>
        </div>
      ),
      title: "Next.js 16 App Router",
      color: "#00F0FF"
    },
    {
      node: (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-md">
          <span className="font-mono font-black text-xs text-cyan-400">⚛</span>
          <span className="font-mono text-xs font-bold text-slate-200">React 19</span>
        </div>
      ),
      title: "React 19",
      color: "#00F0FF"
    },
    {
      node: (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-md">
          <span className="font-mono font-bold text-xs text-blue-400">TS</span>
          <span className="font-mono text-xs font-bold text-slate-200">TypeScript</span>
        </div>
      ),
      title: "TypeScript Strict",
      color: "#3B82F6"
    },
    {
      node: (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-md">
          <span className="font-mono font-bold text-xs text-sky-400">🌊</span>
          <span className="font-mono text-xs font-bold text-slate-200">Tailwind v4</span>
        </div>
      ),
      title: "Tailwind CSS v4",
      color: "#38BDF8"
    },
    {
      node: (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-md">
          <span className="font-mono font-bold text-xs text-emerald-400">⚡</span>
          <span className="font-mono text-xs font-bold text-slate-200">GSAP 3</span>
        </div>
      ),
      title: "GSAP 3 & ScrollTrigger",
      color: "#10B981"
    },
    {
      node: (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-md">
          <span className="font-mono font-bold text-xs text-emerald-400">⚡</span>
          <span className="font-mono text-xs font-bold text-slate-200">Supabase SSR</span>
        </div>
      ),
      title: "Supabase SSR",
      color: "#3ECF8E"
    },
    {
      node: (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-md">
          <span className="font-mono font-bold text-xs text-cyan-300">▲</span>
          <span className="font-mono text-xs font-bold text-slate-200">Prisma ORM</span>
        </div>
      ),
      title: "Prisma ORM",
      color: "#60A5FA"
    },
    {
      node: (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-md">
          <span className="font-mono font-bold text-xs text-yellow-400">🧪</span>
          <span className="font-mono text-xs font-bold text-slate-200">Vitest</span>
        </div>
      ),
      title: "Vitest Testing",
      color: "#FACC15"
    },
    {
      node: (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-md">
          <span className="font-mono font-bold text-xs text-orange-400">☁</span>
          <span className="font-mono text-xs font-bold text-slate-200">Cloudflare Edge</span>
        </div>
      ),
      title: "Cloudflare Edge",
      color: "#F97316"
    },
    {
      node: (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-md">
          <span className="font-mono font-bold text-xs text-pink-400">💬</span>
          <span className="font-mono text-xs font-bold text-slate-200">WhatsApp API</span>
        </div>
      ),
      title: "Meta WhatsApp Cloud API",
      color: "#EC4899"
    }
  ];

  return (
    <section id="arsenal-section" className="relative py-20 sm:py-28 overflow-hidden bg-[#05070B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded bg-blue-950/40 border border-blue-500/30 text-cyan-400 font-mono text-xs font-bold tracking-wider uppercase">
              {t.arsenal.sectionNum}
            </span>
            <span className="text-xs font-mono text-slate-500">
              MODERN TECH STACK &amp; INFRASTRUCTURE
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-between w-full gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 mb-2 tracking-tight">
                {t.arsenal.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-400 max-w-2xl font-sans">
                {t.arsenal.subtitle}
              </p>
            </div>

            {/* HIDDEN COIN #6: Placed right here in the tech arsenal header */}
            <div className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-[10px] font-mono text-cyan-400">Strict Type Shard:</span>
              <CoinItem id="coin-arsenal-nextjs" />
            </div>
          </div>
        </div>

        {/* 1. Interactive 3D Draggable Tech Wave Loop (User Requested Component) */}
        <div className="relative w-full rounded-2xl bg-slate-950/70 border border-blue-500/20 p-4 sm:p-6 mb-16 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2 text-cyan-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>INFINITE TECH RUNTIME // DRAGGABLE TICKER</span>
            </span>
            <span className="hidden sm:inline text-slate-500">HOVER TO EXPAND • DRAG TO ACCELERATE</span>
          </div>

          <div className="py-2">
            <LogoLoop
              logos={techLogos}
              speed={45}
              direction="left"
              layout="wave"
              bend={0.3}
              scaleOnHover={true}
              pauseOnHover={true}
              draggable={true}
              fadeOut={true}
              fadeOutWidth={0.15}
              gap={24}
              logoHeight={34}
            />
          </div>
        </div>

        {/* 2. Categorized Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {SKILLS_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.titleEn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-blue-500/40 p-6 transition-all shadow-lg backdrop-blur-md"
            >
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-800">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center p-1.5"
                  style={{ backgroundColor: `${cat.color}20` }}
                >
                  {getCategoryIcon(cat.icon)}
                </div>
                <h3 className="font-mono text-sm sm:text-base font-bold text-slate-100">
                  {lang === "ar" ? cat.titleAr : cat.titleEn}
                </h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/60 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs sm:text-sm font-bold text-slate-200">
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span
                            className="px-1.5 py-0.2 rounded font-mono text-[9px] font-bold uppercase tracking-wider"
                            style={{
                              backgroundColor: `${cat.color}20`,
                              color: cat.color
                            }}
                          >
                            {skill.highlight}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, #2563EB, ${cat.color})`
                        }}
                      />
                    </div>

                    <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                      {lang === "ar" ? skill.descriptionAr : skill.descriptionEn}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live GitHub Telemetry */}
        <GitHubIntegration />
      </div>
    </section>
  );
}
