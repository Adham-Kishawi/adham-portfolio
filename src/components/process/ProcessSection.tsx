"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { QuoteCalculator } from "./QuoteCalculator";
import { CoinItem } from "../gamification/CoinItem";
import { Compass, Palette, Code, Rocket, CheckCircle2, ShieldCheck } from "lucide-react";

export function ProcessSection() {
  const { t, lang } = useLanguage();

  const stepIcons = [Compass, Palette, Code, Rocket];

  return (
    <section id="process-section" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded bg-emerald-950/50 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-bold tracking-wider uppercase">
              {t.services.sectionNum}
            </span>
            <span className="text-xs font-mono text-slate-500">
              ZERO TECHNICAL DEBT • 95+ LIGHTHOUSE SLA
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 mb-3 tracking-tight">
            {t.services.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl font-sans">
            {t.services.subtitle}
          </p>
        </div>

        {/* 4 Steps Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {t.services.steps.map((step, idx) => {
            const Icon = stepIcons[idx] || Compass;
            return (
              <motion.div
                key={step.stepNum}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-all group backdrop-blur-md"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-200">
                      {step.stepNum}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40 flex items-center justify-center text-cyan-400 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-mono text-sm sm:text-base font-bold text-slate-100 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-400 font-sans leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                {/* Deliverable Badge */}
                <div className="pt-3 border-t border-slate-800/80 text-[11px] font-mono text-cyan-400 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 truncate">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{step.deliverable}</span>
                  </div>

                  {/* Coin #7 hidden in Step 04 */}
                  {step.stepNum === "04" || step.stepNum === "٠٤" ? (
                    <CoinItem id="coin-terminal-secret" />
                  ) : null}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Estimator / Quote Calculator */}
        <QuoteCalculator />
      </div>
    </section>
  );
}
