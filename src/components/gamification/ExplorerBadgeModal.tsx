"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGamification, ALL_COINS } from "@/context/GamificationContext";
import { useLanguage } from "@/context/LanguageContext";
import { useAudio } from "@/context/AudioContext";
import { Trophy, Sparkles, X, CheckCircle, Mail, MessageSquare } from "lucide-react";

export function ExplorerBadgeModal() {
  const { showBadgeModal, setShowBadgeModal, collectedCoins } = useGamification();
  const { t, lang } = useLanguage();
  const { playClick } = useAudio();

  if (!showBadgeModal) return null;

  const handleClose = () => {
    playClick();
    setShowBadgeModal(false);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Dim backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 30 }}
          transition={{ type: "spring", stiffness: 320, damping: 25 }}
          className="relative z-10 w-full max-w-lg rounded-2xl bg-slate-950 border-2 border-yellow-500/50 p-6 sm:p-8 shadow-[0_0_60px_rgba(251,191,36,0.35)] text-center text-slate-100"
        >
          {/* Top Gold Ribbon */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-500 via-amber-300 to-yellow-500 rounded-t-2xl shadow-[0_0_15px_#FBBF24]" />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Golden Trophy Emblem */}
          <div className="relative mx-auto mb-4 w-24 h-24 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-xl animate-pulse" />
            <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 p-0.5 shadow-[0_0_25px_rgba(251,191,36,0.5)] flex items-center justify-center">
              <div className="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center">
                <Trophy className="w-10 h-10 text-yellow-400 drop-shadow-[0_0_10px_#FBBF24]" />
              </div>
            </div>
            {/* Corner Sparkles */}
            <Sparkles className="absolute -top-1 -right-1 w-6 h-6 text-yellow-300 animate-spin" style={{ animationDuration: "6s" }} />
          </div>

          {/* Title & Subtitle */}
          <span className="inline-block px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 font-mono text-xs font-bold tracking-widest uppercase mb-2">
            {t.coinHunt.modalTitle}
          </span>

          <h2 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-500 mb-2">
            {t.coinHunt.badgeName}
          </h2>

          <p className="text-sm font-sans text-slate-300 mb-6 leading-relaxed">
            {t.coinHunt.badgeDesc}
          </p>

          {/* Coins Checklist */}
          <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-3 mb-6 text-left">
            <div className="flex items-center justify-between text-xs font-mono text-yellow-400 font-bold mb-2 px-1">
              <span>{t.coinHunt.coinsProgress}</span>
              <span>8 / 8 (100%)</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-300">
              {ALL_COINS.map((c) => (
                <div key={c.id} className="flex items-center gap-1.5 truncate">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs: Contact Adham directly */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:Adhamkishawi@gmail.com?subject=Found%20all%208%20Coins!%20Let%27s%20Work%20Together"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-slate-950 font-mono text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(251,191,36,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>{t.coinHunt.claimReward}</span>
            </a>

            <button
              onClick={handleClose}
              className="px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 font-mono text-xs sm:text-sm text-slate-300 transition-colors cursor-pointer"
            >
              Continue Exploring
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
