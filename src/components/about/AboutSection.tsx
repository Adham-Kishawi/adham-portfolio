"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TIMELINE_DATA } from "@/lib/data/timelineData";
import { useLanguage } from "@/context/LanguageContext";
import { useAudio } from "@/context/AudioContext";
import { CoinItem } from "../gamification/CoinItem";
import {
  MapPin,
  GraduationCap,
  Briefcase,
  Award,
  Sparkles,
  Download,
  Calendar,
  CheckCircle2
} from "lucide-react";

export function AboutSection() {
  const { t, lang } = useLanguage();
  const { playClick } = useAudio();

  const getMilestoneIcon = (type: string) => {
    switch (type) {
      case "education":
        return <GraduationCap className="w-4 h-4 text-pink-400" />;
      case "achievement":
        return <Award className="w-4 h-4 text-emerald-400" />;
      case "brand":
        return <Sparkles className="w-4 h-4 text-amber-400" />;
      default:
        return <Briefcase className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="about-section" className="relative py-20 sm:py-28 overflow-hidden bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded bg-pink-950/50 border border-pink-500/40 text-pink-400 font-mono text-xs font-bold tracking-wider uppercase">
              {t.about.sectionNum}
            </span>
            <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.about.locationBadge}</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 mb-3 tracking-tight">
            {t.about.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl font-sans">
            {t.about.subtitle}
          </p>
        </div>

        {/* Bio Grid with High-Res Portrait Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Portrait Photo Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm">
              {/* Neon Glow Frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-pink-500 to-blue-600 opacity-30 group-hover:opacity-60 blur-lg transition duration-500" />

              <div className="relative rounded-2xl bg-slate-900 border-2 border-cyan-500/40 overflow-hidden shadow-2xl">
                {/* Real Photo of Adham */}
                <div className="relative h-[420px] w-full">
                  <Image
                    src="/images/adham-portrait.jpg"
                    alt="Adham Kishawi — Mid-Level Front-End Engineer"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                  {/* Subtle Dark Gradient at bottom of photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                </div>

                {/* Overlaid Bio Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-950/90 border border-cyan-500/30 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-mono text-sm font-bold text-slate-100">
                        Adham Kishawi (أدهم كيشاوي)
                      </h4>
                      <p className="font-mono text-xs text-cyan-400">
                        Ismailia, Egypt • Front-End Architect
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Text */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
            <p className="rounded-xl bg-slate-900/40 border border-slate-800 p-4">
              {t.about.bioParagraph1}
            </p>
            <p className="rounded-xl bg-slate-900/40 border border-slate-800 p-4">
              {t.about.bioParagraph2}
            </p>
            <p className="rounded-xl bg-slate-900/40 border border-slate-800 p-4">
              {t.about.bioParagraph3}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="mailto:Adhamkishawi@gmail.com?subject=Job%20Opportunity%20/%20Adham%20Kishawi"
                onClick={playClick}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-mono text-xs font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all cursor-pointer flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>{t.about.downloadCv}</span>
              </a>

              <span className="font-mono text-xs text-slate-500">
                Email: Adhamkishawi@gmail.com
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Milestones Timeline */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-8">
            <Calendar className="w-5 h-5 text-cyan-400" />
            <h3 className="text-xl sm:text-2xl font-black text-slate-100 font-mono">
              {t.about.timelineTitle}
            </h3>
          </div>

          <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-8">
            {TIMELINE_DATA.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Node Dot */}
                <div
                  className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 flex items-center justify-center shadow-lg"
                  style={{ borderColor: milestone.highlightColor }}
                >
                  {getMilestoneIcon(milestone.type)}
                </div>

                {/* Content Card */}
                <div className="rounded-xl bg-slate-900/60 border border-slate-800/80 group-hover:border-cyan-500/40 p-5 transition-all shadow-md">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className="px-2.5 py-0.5 rounded font-mono text-xs font-black"
                        style={{
                          backgroundColor: `${milestone.highlightColor}20`,
                          color: milestone.highlightColor
                        }}
                      >
                        {milestone.year}
                      </span>
                      {milestone.quarter && (
                        <span className="font-mono text-xs text-slate-500">
                          {milestone.quarter}
                        </span>
                      )}
                    </div>

                    {/* HIDDEN COIN #4: Next to ITI milestone! */}
                    {milestone.tags.includes("ITI Graduate") && (
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono text-pink-400">Hidden Token:</span>
                        <CoinItem id="coin-about-iti" />
                      </div>
                    )}
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-slate-100 mb-1">
                    {lang === "ar" ? milestone.titleAr : milestone.titleEn}
                  </h4>

                  <h5 className="text-xs sm:text-sm font-mono text-cyan-400 mb-3">
                    {lang === "ar" ? milestone.organizationAr : milestone.organizationEn}
                  </h5>

                  <p className="text-xs sm:text-sm text-slate-300 mb-4 font-sans leading-relaxed">
                    {lang === "ar" ? milestone.descriptionAr : milestone.descriptionEn}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {milestone.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
