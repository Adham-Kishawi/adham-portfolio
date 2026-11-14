"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCaseStudy, PROJECTS_DATA } from "@/lib/data/projectsData";
import { useLanguage } from "@/context/LanguageContext";
import { useAudio } from "@/context/AudioContext";
import {
  X,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Layers,
  Cpu,
  BarChart3
} from "lucide-react";
import { GithubIcon } from "../icons/GithubIcon";

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onSelectProject: (p: ProjectCaseStudy) => void;
}

export function CaseStudyModal({ project, onClose, onSelectProject }: CaseStudyModalProps) {
  const { t, lang, isRtl } = useLanguage();
  const { playClick } = useAudio();
  const [sliderPos, setSliderPos] = useState(50);

  if (!project) return null;

  // Find next project for smooth footer navigation
  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];

  const handleNext = () => {
    playClick();
    onSelectProject(nextProject);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Dim Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Sheet */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 30 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-950 border-2 border-cyan-500/40 p-6 sm:p-10 shadow-[0_0_60px_rgba(0,240,255,0.25)] text-slate-100"
        >
          {/* Top Neon Accent */}
          <div
            className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl shadow-[0_0_15px_#00F0FF]"
            style={{ backgroundColor: project.accentColor }}
          />

          {/* Close Button */}
          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-1.5 rounded-xl hover:bg-slate-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Metadata */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span
              className="px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider"
              style={{
                backgroundColor: `${project.accentColor}20`,
                color: project.accentColor,
                border: `1px solid ${project.accentColor}50`
              }}
            >
              {project.category}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
              {project.year}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
              {lang === "ar" ? project.roleAr : project.roleEn}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black mb-3">
            {lang === "ar" ? project.titleAr : project.titleEn}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 mb-6 font-sans leading-relaxed">
            {lang === "ar" ? project.taglineAr : project.taglineEn}
          </p>

          {/* Links Row */}
          <div className="flex flex-wrap items-center gap-3 mb-8 pb-6 border-b border-slate-800">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-slate-200 transition-all flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>{t.projects.viewGitHub}</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold transition-all flex items-center gap-2 shadow-[0_0_12px_rgba(0,240,255,0.4)]"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{t.projects.viewLiveDemo}</span>
              </a>
            )}
          </div>

          {/* Metrics Grid */}
          <div className="mb-8">
            <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span>{t.projects.metricsTitle}</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((m, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-slate-900/80 border border-slate-800 p-3.5 flex flex-col"
                >
                  <span
                    className="text-xl sm:text-2xl font-black font-mono mb-1"
                    style={{ color: project.accentColor }}
                  >
                    {m.value}
                  </span>
                  <span className="text-[11px] font-sans text-slate-400">
                    {lang === "ar" ? m.labelAr : m.labelEn}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Editorial Story: 01 Challenge, 02 Solution, 03 Outcome */}
          <div className="space-y-6 mb-8 font-sans">
            {/* 01 Challenge */}
            <div className="rounded-xl bg-slate-900/50 border border-rose-500/20 p-5">
              <h4 className="text-sm font-mono font-bold text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                <span>{t.projects.challengeTitle}</span>
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {lang === "ar" ? project.challengeAr : project.challengeEn}
              </p>
            </div>

            {/* 02 Solution */}
            <div className="rounded-xl bg-slate-900/50 border border-cyan-500/20 p-5">
              <h4 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>{t.projects.solutionTitle}</span>
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {lang === "ar" ? project.solutionAr : project.solutionEn}
              </p>
            </div>

            {/* 03 Outcome */}
            <div className="rounded-xl bg-slate-900/50 border border-emerald-500/20 p-5">
              <h4 className="text-sm font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>{t.projects.outcomeTitle}</span>
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {lang === "ar" ? project.outcomeAr : project.outcomeEn}
              </p>
            </div>
          </div>

          {/* Architecture Highlights */}
          <div className="mb-8">
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>{t.projects.keyHighlights}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(lang === "ar"
                ? project.architectureHighlightsAr
                : project.architectureHighlightsEn
              ).map((h, i) => (
                <div
                  key={i}
                  className="rounded-lg bg-slate-900/80 border border-slate-800 p-3 text-xs font-sans text-slate-300 flex items-start gap-2"
                >
                  <span className="text-cyan-400 mt-0.5">•</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-slate-800">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Next Project Footer Button */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => {
                playClick();
                onClose();
              }}
              className="text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              {t.projects.closeCaseStudy}
            </button>

            <button
              onClick={handleNext}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 text-cyan-400 font-mono text-xs font-bold transition-all flex items-center gap-2 cursor-pointer hover:border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
            >
              <span>{t.projects.nextProject}: {lang === "ar" ? nextProject.titleAr : nextProject.titleEn}</span>
              {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
