"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectCaseStudy } from "@/lib/data/projectsData";
import { useLanguage } from "@/context/LanguageContext";
import { useAudio } from "@/context/AudioContext";
import { CoinItem } from "../gamification/CoinItem";
import {
  ExternalLink,
  ArrowUpRight,
  Activity,
  QrCode,
  Kanban,
  ShoppingBag,
  Sparkles,
  Layers
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

  // Get real project screenshot if available
  const getProjectImage = () => {
    switch (project.id) {
      case "craft-crew-automotive":
        return "/images/projects/craft-crew-dashboard.png";
      case "prime-brand-crm-app":
        return "/images/projects/prime-emblem.jpg";
      case "sport-cycle-app":
        return "/images/projects/sport-cycle-cover.png";
      default:
        return null;
    }
  };

  const projectImage = getProjectImage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-blue-500/50 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_36px_rgba(0,240,255,0.1)] hover:-translate-y-1 backdrop-blur-md"
    >
      {/* Top Meta Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span
              className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold"
              style={{
                backgroundColor: `${project.accentColor}15`,
                color: project.accentColor,
                border: `1px solid ${project.accentColor}30`
              }}
            >
              {project.category}
            </span>
            <span className="text-[11px] font-mono text-slate-500">{project.year}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Hidden Coin inside Automotive Summit Card */}
            {project.id === "craft-crew-automotive" && (
              <CoinItem id="coin-project-automotive" />
            )}

            <button
              onClick={handleCardClick}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-blue-500/40 text-slate-400 group-hover:text-cyan-400 transition-colors cursor-pointer"
              title="Open full case study"
            >
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Project Visual / Real Dashboard Screenshot */}
        <div
          onClick={handleCardClick}
          className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden bg-slate-900 border border-slate-800/80 mb-5 cursor-pointer group-hover:border-cyan-500/40 transition-colors"
        >
          {projectImage ? (
            <div className="relative w-full h-full">
              <Image
                src={projectImage}
                alt={lang === "ar" ? project.titleAr : project.titleEn}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-transparent opacity-80 pointer-events-none" />
              
              {/* Overlay Badge */}
              <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-slate-950/80 border border-slate-700 text-[10px] font-mono text-cyan-300 backdrop-blur-sm">
                Production Capture
              </div>
            </div>
          ) : (
            /* High-Fidelity Interactive DOCTECH EMR UI Simulation */
            <div className="w-full h-full p-3.5 flex flex-col justify-between font-mono text-[10px] select-none bg-gradient-to-br from-slate-950 via-[#0A0E17] to-slate-900">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-cyan-300 font-bold">DOCTECH OS // EMR KERNEL</span>
                </div>
                <span className="text-slate-400 text-[9px]">CLINIC SUITE v2.6</span>
              </div>

              <div className="grid grid-cols-3 gap-1.5 my-2 text-[9px]">
                <div className="bg-cyan-950/50 border border-cyan-500/40 text-cyan-300 p-2 rounded">
                  <div className="text-[8px] text-cyan-400">PATIENT EMR</div>
                  <div className="font-bold">Active File</div>
                </div>
                <div className="bg-slate-900/60 border border-slate-800 text-slate-300 p-2 rounded">
                  <div className="text-[8px] text-slate-400">WHATSAPP AI</div>
                  <div className="font-bold">Hermes Agent</div>
                </div>
                <div className="bg-slate-900/60 border border-slate-800 text-slate-300 p-2 rounded">
                  <div className="text-[8px] text-slate-400">COLLISION RISK</div>
                  <div className="font-bold text-emerald-400">0.00% Zero</div>
                </div>
              </div>

              <div className="flex items-center justify-between bg-slate-950/90 p-2 rounded border border-slate-800/80 text-[9px]">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Meta Cloud API: 24/7 Intake Online</span>
                </div>
                <span className="text-cyan-400 font-mono">&lt; 240ms Query</span>
              </div>
            </div>
          )}

          {/* Quick Deep-Dive Hover Action Pill */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/50 backdrop-blur-xs">
            <span className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-mono text-xs font-bold shadow-[0_0_20px_rgba(0,240,255,0.6)] flex items-center gap-1.5">
              <span>{t.projects.viewCaseStudy}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Project Title & Tagline */}
        <h3
          onClick={handleCardClick}
          className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors cursor-pointer mb-2"
        >
          {lang === "ar" ? project.titleAr : project.titleEn}
        </h3>

        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
          {lang === "ar" ? project.taglineAr : project.taglineEn}
        </p>

        {/* 2 Key Architectural Metrics */}
        <div className="grid grid-cols-2 gap-2 mb-4 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 font-mono">
          {project.metrics.slice(0, 2).map((m, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-[10px] text-slate-500 truncate">
                {lang === "ar" ? m.labelAr : m.labelEn}
              </span>
              <span className="text-sm font-bold text-cyan-300 mt-0.5">
                {m.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Chips & Action Footer */}
      <div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded bg-slate-900/90 border border-slate-800 text-[10px] font-mono text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-1.5 py-0.5 rounded bg-slate-900 text-[10px] font-mono text-slate-500">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs font-mono">
          <button
            onClick={handleCardClick}
            className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 cursor-pointer"
          >
            <span>{t.projects.viewCaseStudy}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-300 flex items-center gap-1"
              title="Inspect Repository"
            >
              <span>Repo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
