"use client";

import React from "react";
import { motion } from "framer-motion";
import { SKILLS_CATEGORIES } from "@/lib/data/skillsData";
import { GitHubIntegration } from "./GitHubIntegration";
import { useLanguage } from "@/context/LanguageContext";
import { CoinItem } from "../gamification/CoinItem";
import { Layers, Palette, Sparkles, Database, Code, CheckCircle } from "lucide-react";

export function ArsenalSection() {
  const { t, lang } = useLanguage();

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Palette":
        return <Palette className="w-4 h-4 text-rose-400" />;
      case "Sparkles":
        return <Sparkles className="w-4 h-4 text-amber-400" />;
      case "Database":
        return <Database className="w-4 h-4 text-emerald-400" />;
      default:
        return <Layers className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="arsenal-section" className="relative py-20 sm:py-28 overflow-hidden bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded bg-cyan-950/50 border border-cyan-500/40 text-cyan-400 font-mono text-xs font-bold tracking-wider uppercase">
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

            {/* HIDDEN COIN #6: Placed right here in the tech arsenal header! */}
            <div className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-[10px] font-mono text-cyan-400">Strict Type Shard:</span>
              <CoinItem id="coin-arsenal-nextjs" />
            </div>
          </div>
        </div>

        {/* Categorized Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {SKILLS_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.titleEn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-cyan-500/40 p-6 transition-all shadow-lg backdrop-blur-md"
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
                            Core
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-[10px] text-cyan-400 font-semibold">
                        {lang === "ar" ? skill.levelAr : skill.level}
                      </span>
                    </div>

                    <p className="text-[11px] font-sans text-slate-400 leading-relaxed">
                      {lang === "ar" ? skill.descriptionAr : skill.descriptionEn}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live GitHub Telemetry Card */}
        <GitHubIntegration />
      </div>
    </section>
  );
}
