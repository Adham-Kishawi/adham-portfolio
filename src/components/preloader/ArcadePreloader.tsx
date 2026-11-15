"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AdhamAvatar } from "../avatar/AdhamAvatar";
import { useAudio } from "@/context/AudioContext";
import { Play, Sparkles, Terminal } from "lucide-react";

interface ArcadePreloaderProps {
  onStart: () => void;
}

export function ArcadePreloader({ onStart }: ArcadePreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { playStart, playClick } = useAudio();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoaded(true);
          return 100;
        }
        const jump = Math.floor(Math.random() * 16) + 10;
        return Math.min(100, prev + jump);
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLoaded && e.key === "Enter") {
        handlePressStart();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLoaded]);

  const handlePressStart = () => {
    playStart();
    onStart();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05070B] overflow-hidden select-none"
    >
      {/* 1. Subtle Cosmic Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,240,255,0.08),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_75%,rgba(37,99,235,0.06),transparent_50%)] pointer-events-none" />

      {/* 2. Precision Space Grid Floor (Subtle & Elegant) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2 opacity-20 pointer-events-none"
        style={{
          background: "linear-gradient(to right, #00F0FF15 1px, transparent 1px), linear-gradient(to bottom, #00F0FF15 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          transform: "perspective(400px) rotateX(65deg) scale(1.8)",
          transformOrigin: "bottom center"
        }}
      />

      {/* 3. Central System Console */}
      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
        {/* Adham's Real Photo inside Refined Bezel */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-5"
        >
          <AdhamAvatar state="waving" size={130} showHoloRing={true} />
        </motion.div>

        {/* Console Title & Typewriter Cursor */}
        <div className="flex items-center justify-center gap-1.5 mb-1.5">
          <span className="font-mono text-xl sm:text-2xl font-black tracking-wider text-slate-100">
            ADHAM KISHAWI
          </span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.7, repeat: Infinity }}
            className="inline-block w-2 h-5 bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]"
          />
        </div>

        {/* Clean Engineering Subtitle */}
        <p className="text-xs font-mono text-cyan-400/90 tracking-widest uppercase mb-6">
          Front-End Engineer &amp; Web Architect
        </p>

        {/* Segmented Precision Loading Bar */}
        <div className="w-64 sm:w-72 p-2 rounded-xl bg-slate-950/80 border border-blue-500/25 shadow-[0_4px_24px_rgba(0,0,0,0.6)] mb-6 backdrop-blur-md">
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1.5 px-1">
            <span className="flex items-center gap-1 text-cyan-400 font-semibold">
              <Terminal className="w-3 h-3" />
              <span>SYSTEM BOOT</span>
            </span>
            <span className="text-cyan-300 font-mono font-bold">{progress}%</span>
          </div>

          <div className="h-2 w-full bg-slate-900 rounded-sm overflow-hidden flex gap-0.5 p-0.5">
            {Array.from({ length: 24 }).map((_, i) => {
              const filled = (progress / 100) * 24 > i;
              return (
                <div
                  key={i}
                  className={`flex-1 transition-all duration-150 rounded-xs ${
                    filled
                      ? "bg-gradient-to-t from-blue-600 to-cyan-400 shadow-[0_0_4px_rgba(0,240,255,0.6)]"
                      : "bg-slate-800/40"
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* Entrance Button */}
        <div className="h-14 flex items-center justify-center">
          <AnimatePresence>
            {isLoaded ? (
              <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: [1, 1.02, 1], opacity: 1 }}
                transition={{
                  scale: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 0.3 }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={handlePressStart}
                className="group relative px-7 py-3 rounded-xl font-mono text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 shadow-[0_0_24px_rgba(0,240,255,0.4)] border border-cyan-300 hover:shadow-[0_0_32px_rgba(0,240,255,0.6)] transition-all cursor-pointer flex items-center gap-2"
              >
                <Play className="w-3.5 h-3.5 fill-current text-slate-950 group-hover:scale-110 transition-transform" />
                <span>ENTER ARCHITECTURE [ENTER]</span>
              </motion.button>
            ) : (
              <div className="text-[11px] font-mono text-slate-500 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span>INITIALIZING WEBGL GALAXY &amp; ASSETS...</span>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Quiet Meta Footer */}
        <div className="mt-8 text-[10px] font-mono text-slate-500 flex items-center justify-center gap-3">
          <span>ISMAILIA, EGYPT</span>
          <span>•</span>
          <span>NEXT.JS 16</span>
          <span>•</span>
          <span>WEB AUDIO</span>
        </div>
      </div>
    </motion.div>
  );
}
