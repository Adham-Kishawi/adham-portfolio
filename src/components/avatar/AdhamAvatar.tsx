"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export type AvatarState = "waving" | "thumbs-up" | "talking" | "coding";

interface AdhamAvatarProps {
  state?: AvatarState;
  size?: number;
  className?: string;
  showHoloRing?: boolean;
}

export function AdhamAvatar({
  state = "waving",
  size = 120,
  className = "",
  showHoloRing = true
}: AdhamAvatarProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Subtle Cosmic & Cyber Glow Ring */}
      {showHoloRing && (
        <motion.div
          animate={{
            scale: [1, 1.06, 1],
            opacity: [0.35, 0.6, 0.35],
            rotate: [0, 360]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-sky-400/25 blur-md pointer-events-none"
        />
      )}

      {/* Luxury Obsidian Outer Frame with Precision Tech Brackets */}
      <div
        className="relative z-10 w-full h-full rounded-2xl overflow-hidden p-0.5 bg-gradient-to-b from-cyan-400/40 via-blue-600/20 to-slate-800/60 shadow-[0_8px_24px_rgba(0,240,255,0.2)]"
      >
        <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-[#0A0E17]">
          {/* Adham's Real High-Res Portrait */}
          <Image
            src="/images/adham-portrait.jpg"
            alt="Adham Kishawi — Front-End Engineer & Web Architect"
            fill
            sizes={`${size}px`}
            priority
            className="object-cover object-top filter brightness-[1.02] contrast-[1.03] transition-transform duration-500 hover:scale-105"
          />

          {/* Precision Vignette & Tech Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070B]/80 via-transparent to-transparent pointer-events-none" />

          {/* Micro HUD status corner reticle */}
          <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-cyan-400/80 pointer-events-none" />
          <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-cyan-400/80 pointer-events-none" />
          <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-cyan-400/80 pointer-events-none" />
          <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-cyan-400/80 pointer-events-none" />
        </div>
      </div>

      {/* State Badge Pill */}
      {state === "talking" && (
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute -bottom-1.5 px-2 py-0.5 rounded-full bg-cyan-950/90 border border-cyan-400/60 text-cyan-300 font-mono text-[9px] font-bold tracking-wider z-20 flex items-center gap-1 shadow-[0_0_10px_rgba(0,240,255,0.4)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>GUIDE</span>
        </motion.div>
      )}

      {state === "coding" && (
        <div className="absolute -bottom-1.5 px-2 py-0.5 rounded-full bg-slate-900/90 border border-emerald-400/50 text-emerald-300 font-mono text-[9px] font-bold tracking-wider z-20 flex items-center gap-1 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>DEV</span>
        </div>
      )}

      {(state === "waving" || state === "thumbs-up") && (
        <div className="absolute -bottom-1.5 px-2 py-0.5 rounded-full bg-slate-950/90 border border-cyan-500/40 text-cyan-400 font-mono text-[9px] font-bold tracking-wider z-20 flex items-center gap-1 shadow-[0_0_10px_rgba(0,240,255,0.25)]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500" />
          </span>
          <span>ONLINE</span>
        </div>
      )}
    </div>
  );
}
