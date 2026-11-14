"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGamification } from "@/context/GamificationContext";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, Check } from "lucide-react";

interface CoinItemProps {
  id: string;
  className?: string;
}

export function CoinItem({ id, className = "" }: CoinItemProps) {
  const { isCoinCollected, collectCoin } = useGamification();
  const { t } = useLanguage();
  const [showFloatXp, setShowFloatXp] = useState(false);
  const collected = isCoinCollected(id);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (collected) return;

    const success = collectCoin(id);
    if (success) {
      setShowFloatXp(true);
      setTimeout(() => setShowFloatXp(false), 1200);
    }
  };

  return (
    <div className={`relative inline-block select-none ${className}`}>
      {/* Floating XP Animation */}
      <AnimatePresence>
        {showFloatXp && (
          <motion.div
            initial={{ opacity: 0, y: 0, scale: 0.8 }}
            animate={{ opacity: 1, y: -36, scale: 1.1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute -top-4 left-1/2 -translate-x-1/2 z-50 pointer-events-none px-2 py-0.5 rounded-full bg-yellow-400 text-slate-950 font-mono text-[10px] font-black shadow-[0_0_12px_#FBBF24] whitespace-nowrap flex items-center gap-1"
          >
            <Sparkles className="w-2.5 h-2.5" />
            <span>+100 XP!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={handleClick}
        className={`group relative p-1.5 rounded-xl transition-all duration-300 cursor-pointer ${
          collected
            ? "opacity-50 hover:opacity-80"
            : "hover:scale-115 active:scale-95"
        }`}
        title={collected ? "Coin already collected!" : "Hidden Coin! Click to collect 🪙"}
      >
        {/* Glow halo */}
        {!collected && (
          <div className="absolute inset-0 rounded-xl bg-yellow-400/20 blur-md group-hover:bg-yellow-400/40 transition-colors animate-pulse" />
        )}

        {/* 16-Bit Pixel Coin SVG */}
        <div className="relative z-10 w-7 h-7 flex items-center justify-center">
          {collected ? (
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400">
              <Check className="w-3.5 h-3.5" />
            </div>
          ) : (
            <svg
              viewBox="0 0 24 24"
              width="26"
              height="26"
              className="drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]"
              style={{ shapeRendering: "crispEdges", imageRendering: "pixelated" }}
            >
              {/* Outer gold border */}
              <circle cx="12" cy="12" r="10" fill="#B45309" />
              <circle cx="12" cy="12" r="8.5" fill="#FBBF24" />
              {/* Inner coin face */}
              <circle cx="12" cy="12" r="7" fill="#FDE047" />
              {/* Star emblem in center */}
              <rect x="11" y="7" width="2" height="10" fill="#D97706" />
              <rect x="7" y="11" width="10" height="2" fill="#D97706" />
              <rect x="11" y="11" width="2" height="2" fill="#FEF08A" />
              {/* Pixel shine */}
              <rect x="8" y="7" width="2" height="2" fill="#FFFFFF" opacity="0.9" />
            </svg>
          )}
        </div>
      </button>
    </div>
  );
}
