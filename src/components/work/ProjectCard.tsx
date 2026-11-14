"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProjectCaseStudy } from "@/lib/data/projectsData";
import { useLanguage } from "@/context/LanguageContext";
import { useAudio } from "@/context/AudioContext";
import { CoinItem } from "../gamification/CoinItem";
import {
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Activity,
  QrCode,
  Kanban,
  ShoppingBag,
  CloudSun
} from "lucide-react";

interface ProjectCardProps {
  project: ProjectCaseStudy;
  onOpenCaseStudy: (p: ProjectCaseStudy) => void;
  index: number;
}

export function ProjectCard({ project, onOpenCaseStudy, index }: ProjectCardProps) {
  const { lang, t } = useLanguage();
  const { playClick } = useAudio();

  const handleCardClick = () => {
    playClick();
    onOpenCaseStudy(project);
  };

  // Render contextual simulated mini UI mockup
  const renderMockup = () => {
    switch (project.mockupType) {
      case "erp-dashboard":
        return (
          <div className="w-full h-44 rounded-xl bg-slate-900/90 border border-slate-800 p-3 flex flex-col justify-between font-mono text-[10px] select-none overflow-hidden relative group-hover:border-cyan-500/40 transition-colors">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-cyan-400 font-bold">DOCTECH OS // DR. DASHBOARD</span>
              </div>
              <span className="text-slate-400">PATIENT ID: #MED-4820</span>
            </div>
            {/* 3 Tab Simulation */}
            <div className="grid grid-cols-3 gap-1.5 my-1 text-[9px]">
              <div className="bg-cyan-950/40 border border-cyan-500/40 text-cyan-300 p-1.5 rounded">
                1. General Profile
              </div>
              <div className="bg-slate-800/40 border border-slate-700/50 text-slate-300 p-1.5 rounded">
                2. Timeline &amp; Scans
              </div>
              <div className="bg-slate-800/40 border border-slate-700/50 text-slate-300 p-1.5 rounded">
                3. WhatsApp AI Queue
              </div>
            </div>
            {/* Status & Metrics */}
            <div className="flex items-center justify-between bg-slate-950/80 p-2 rounded border border-slate-800/70 text-[9px]">
              <div className="flex items-center gap-1 text-emerald-400">
                <Activity className="w-3 h-3" />
                <span>Hermes AI: Active (Qwen 3.5)</span>
              </div>
              <span className="text-slate-400">Double-Booking Risk: 0%</span>
            </div>
          </div>
        );

      case "event-telemetry":
        return (
          <div className="w-full h-44 rounded-xl bg-slate-900/90 border border-slate-800 p-3 flex flex-col justify-between font-mono text-[10px] select-none overflow-hidden relative group-hover:border-rose-500/40 transition-colors">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center gap-1.5 text-rose-400 font-bold">
                <QrCode className="w-3.5 h-3.5" />
                <span>11TH AUTOMOTIVE SUMMIT GATE</span>
              </div>
              <span className="text-emerald-400">1,200+ ATTENDEES</span>
            </div>
            <div className="flex items-center justify-between my-2 p-2 rounded bg-slate-950/80 border border-slate-800">
              <span className="text-slate-300">Fast Gate QR Telemetry</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                2.8s Print Speed
              </span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-rose-500 to-cyan-400 w-4/5" />
            </div>
          </div>
        );

      case "kanban-crm":
        return (
          <div className="w-full h-44 rounded-xl bg-slate-900/90 border border-slate-800 p-3 flex flex-col justify-between font-mono text-[10px] select-none overflow-hidden relative group-hover:border-amber-500/40 transition-colors">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-amber-400 font-bold flex items-center gap-1">
                <Kanban className="w-3 h-3" />
                <span>PRIME CRM // KANBAN PIPELINE</span>
              </span>
              <span className="text-slate-400">WINTER DROP 2026</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 my-1">
              <div className="bg-slate-950 p-2 rounded border border-slate-800">
                <span className="text-[8px] text-slate-500 block">Cutting</span>
                <span className="text-amber-300 font-bold">45 units</span>
              </div>
              <div className="bg-slate-950 p-2 rounded border border-slate-800">
                <span className="text-[8px] text-slate-500 block">Printing</span>
                <span className="text-cyan-300 font-bold">80 units</span>
              </div>
              <div className="bg-slate-950 p-2 rounded border border-slate-800">
                <span className="text-[8px] text-slate-500 block">Dispatched</span>
                <span className="text-emerald-300 font-bold">120 units</span>
              </div>
            </div>
            <div className="text-[9px] text-slate-400 flex justify-between">
              <span>Inventory Mismatch: 0</span>
              <span className="text-amber-400">XLSX Export: Ready</span>
            </div>
          </div>
        );

      case "marketplace":
        return (
          <div className="w-full h-44 rounded-xl bg-slate-900/90 border border-slate-800 p-3 flex flex-col justify-between font-mono text-[10px] select-none overflow-hidden relative group-hover:border-emerald-500/40 transition-colors">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <ShoppingBag className="w-3 h-3" />
                <span>SPORT CYCLE MARKETPLACE</span>
              </span>
              <span className="text-xs">🏅 FINALIST</span>
            </div>
            <div className="p-2 rounded bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-slate-200 block font-bold">Pro Spin Bike V2</span>
                <span className="text-slate-400 text-[9px]">Ismailia, Egypt</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                Score: 9.6/10
              </span>
            </div>
            <div className="text-[9px] text-slate-400 flex justify-between">
              <span>Cloudflare Edge TTFB: 55ms</span>
              <span className="text-emerald-400">Verified Condition</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-44 rounded-xl bg-slate-900/90 border border-slate-800 p-3 flex flex-col justify-between font-mono text-[10px] select-none overflow-hidden relative group-hover:border-sky-500/40 transition-colors">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-sky-400 font-bold flex items-center gap-1">
                <CloudSun className="w-3 h-3" />
                <span>AETHERCAST NEO-BRUTALISM</span>
              </span>
              <span className="text-slate-400">ISMAILIA • 24°C</span>
            </div>
            <div className="p-2 rounded bg-slate-950/80 border border-slate-800 flex justify-between items-center">
              <span className="text-slate-300">Adaptive Meteorological Theme</span>
              <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-400 font-bold">
                15s Auto-Sync
              </span>
            </div>
            <div className="text-[9px] text-slate-400">
              Lighthouse Score: 100/100 • Zero API Key
            </div>
          </div>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={handleCardClick}
      className="group relative rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-cyan-500/50 p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(0,240,255,0.18)] transition-all duration-300 flex flex-col justify-between cursor-pointer backdrop-blur-md"
    >
      {/* Top Card Bar with Category & Coin Placement */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span
            className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider"
            style={{
              backgroundColor: `${project.accentColor}18`,
              color: project.accentColor,
              border: `1px solid ${project.accentColor}40`
            }}
          >
            {project.category}
          </span>
          <span className="text-xs font-mono text-slate-500">{project.year}</span>
        </div>

        {/* HIDDEN COIN PLACEMENT */}
        {project.id === "doctech-os" && (
          <div onClick={(e) => e.stopPropagation()}>
            <CoinItem id="coin-doctech-preview" />
          </div>
        )}
        {project.id === "craft-crew-automotive" && (
          <div onClick={(e) => e.stopPropagation()}>
            <CoinItem id="coin-automotive-badge" />
          </div>
        )}
      </div>

      {/* Simulated Interactive Mockup Window */}
      <div className="mb-5">{renderMockup()}</div>

      {/* Title & Tagline */}
      <div className="mb-4">
        <h3 className="text-xl sm:text-2xl font-black text-slate-100 group-hover:text-cyan-400 transition-colors flex items-center justify-between">
          <span>{lang === "ar" ? project.titleAr : project.titleEn}</span>
          <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-2 line-clamp-2 font-sans leading-relaxed">
          {lang === "ar" ? project.taglineAr : project.taglineEn}
        </p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 gap-2 mb-4 py-2 border-y border-slate-800/80">
        {project.metrics.slice(0, 2).map((m, i) => (
          <div key={i} className="flex flex-col">
            <span
              className="text-base sm:text-lg font-bold font-mono"
              style={{ color: project.accentColor }}
            >
              {m.value}
            </span>
            <span className="text-[10px] font-sans text-slate-400">
              {lang === "ar" ? m.labelAr : m.labelEn}
            </span>
          </div>
        ))}
      </div>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {project.techStack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800/80 font-mono text-[10px] text-slate-300"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 4 && (
          <span className="px-1.5 py-0.5 font-mono text-[10px] text-slate-500">
            +{project.techStack.length - 4}
          </span>
        )}
      </div>
    </motion.div>
  );
}
