"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useAudio } from "@/context/AudioContext";
import { CoinItem } from "../gamification/CoinItem";
import {
  Sparkles,
  Layers,
  Shirt,
  Users,
  Compass,
  ArrowUpRight,
  Palette,
  ExternalLink
} from "lucide-react";

export function BrandCommunitySection() {
  const { t, lang } = useLanguage();
  const { playClick } = useAudio();

  return (
    <section id="brand-section" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded bg-amber-950/50 border border-amber-500/40 text-amber-400 font-mono text-xs font-bold tracking-wider uppercase">
              {t.brand.sectionNum}
            </span>
            <span className="text-xs font-mono text-slate-500">
              CREATIVE DIRECTION &amp; COMMUNITY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 mb-3 tracking-tight">
            {t.brand.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl font-sans">
            {t.brand.subtitle}
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Card 1: PRIME Apparel Brand Identity & CRM */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-950/80 border-2 border-amber-500/30 hover:border-amber-500/60 p-6 sm:p-8 shadow-[0_0_35px_rgba(245,158,11,0.15)] transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 font-mono text-xs font-bold">
                <Shirt className="w-3.5 h-3.5" />
                <span>FOUNDER &amp; CREATIVE DIRECTOR</span>
              </span>

              {/* HIDDEN COIN #5: Placed inside PRIME showcase! */}
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono text-amber-400">Hidden Coin:</span>
                <CoinItem id="coin-prime-drop" />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-100 mb-3">
              {t.brand.primeTagline}
            </h3>

            <p className="text-sm text-slate-300 font-sans leading-relaxed mb-6">
              {t.brand.primeDesc}
            </p>

            {/* PRIME Brand Highlights Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-3.5 text-center">
                <span className="text-xl sm:text-2xl font-mono font-black text-amber-400 block mb-0.5">
                  100%
                </span>
                <span className="text-[11px] font-sans text-slate-400">
                  {t.brand.statCollections}
                </span>
              </div>

              <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-3.5 text-center">
                <span className="text-xl sm:text-2xl font-mono font-black text-cyan-400 block mb-0.5">
                  3D &amp; CAD
                </span>
                <span className="text-[11px] font-sans text-slate-400">
                  {t.brand.statDesigns}
                </span>
              </div>

              <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-3.5 text-center">
                <span className="text-xl sm:text-2xl font-mono font-black text-emerald-400 block mb-0.5">
                  Ismailia
                </span>
                <span className="text-[11px] font-sans text-slate-400">
                  {t.brand.statCommunity}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                #StreetwearDesign
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                #BespokeERP
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                #PrintProduction
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                #3DConcepts
              </span>
            </div>
          </div>

          {/* Event Photo / Community Involvement */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative group rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-[0_0_30px_rgba(0,240,255,0.2)]">
              <div className="relative h-80 sm:h-96 w-full">
                <Image
                  src="/images/adham-event.jpg"
                  alt="Adham Kishawi at technology community gathering"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 border border-cyan-500/20 backdrop-blur-md">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold mb-1">
                  <Users className="w-4 h-4" />
                  <span>{t.brand.craftTagline}</span>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {t.brand.craftDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
