"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AdhamAvatar } from "../avatar/AdhamAvatar";
import { useAudio } from "@/context/AudioContext";
import { Play } from "lucide-react";

interface ArcadePreloaderProps {
  onStart: () => void;
}

export function ArcadePreloader({ onStart }: ArcadePreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { playStart, playClick } = useAudio();

  useEffect(() => {
    // Fast simulated system boot
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoaded(true);
          return 100;
        }
        const jump = Math.floor(Math.random() * 15) + 8;
        return Math.min(100, prev + jump);
      });
    }, 90);

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
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05070B] overflow-hidden select-none"
    >
      {/* 1. Cyber Synthwave 3D Perspective Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#00F0FF15_1px,transparent_1px),linear-gradient(to_bottom,#00F0FF15_1px,transparent_1px)] bg-[size:40px_40px]"
          style={{
            transform: "perspective(300px) rotateX(60deg) translateY(120px) scale(2.2)",
            transformOrigin: "bottom center"
          }}
        />
        {/* Neon horizon glow */}
        <div className="absolute bottom-1/3 left-0 right-0 h-32 bg-gradient-to-t from-pink-500/20 via-cyan-500/10 to-transparent blur-xl" />
      </div>

      {/* 2. Floating Starfield / Particles */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-[#05070B]" />

      {/* 3. Central Arcade Container */}
      <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center">
        {/* Pixel Avatar Waving */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <AdhamAvatar state="waving" size={140} showHoloRing={true} />
        </motion.div>

        {/* Arcade System Title with Blinking Crimson Cursor */}
        <div className="flex items-center justify-center space-x-1 mb-2 font-mono tracking-widest text-lg sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-pink-500">
          <span>ADHAM KISHAWI</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-2.5 h-6 bg-[#FF0055] ml-1 shadow-[0_0_8px_#FF0055]"
          />
        </div>

        <p className="text-xs sm:text-sm font-mono text-cyan-400/80 tracking-wider mb-6">
          MID-LEVEL FRONT-END ENGINEER &amp; ARCHITECT
        </p>

        {/* Segmented Neon Loading Bar */}
        <div className="w-64 sm:w-80 p-1.5 rounded-lg bg-slate-900/90 border border-cyan-500/30 shadow-[0_0_20px_rgba(0,240,255,0.15)] mb-6">
          <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400/70 mb-1 px-1">
            <span>SYSTEM BOOT</span>
            <span>{progress}%</span>
          </div>

          <div className="h-3 w-full bg-slate-950 rounded flex overflow-hidden p-0.5 gap-0.5">
            {Array.from({ length: 20 }).map((_, i) => {
              const filled = (progress / 100) * 20 > i;
              return (
                <div
                  key={i}
                  className={`flex-1 transition-all duration-150 rounded-xs ${
                    filled
                      ? i % 4 === 0
                        ? "bg-[#FF0055] shadow-[0_0_6px_#FF0055]"
                        : "bg-[#00F0FF] shadow-[0_0_6px_#00F0FF]"
                      : "bg-slate-800/40"
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* 3D Beveled Arcade Button */}
        <div className="h-14 flex items-center justify-center">
          <AnimatePresence>
            {isLoaded ? (
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [1, 1.03, 1], opacity: 1 }}
                transition={{
                  scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 0.3 }
                }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePressStart}
                className="group relative px-8 py-3.5 rounded-xl font-mono text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-pink-500 shadow-[0_0_25px_rgba(0,240,255,0.6)] border-b-4 border-cyan-700 active:border-b-0 active:translate-y-1 transition-all cursor-pointer flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-current text-slate-950 group-hover:scale-110 transition-transform" />
                <span>PRESS START [ENTER]</span>
              </motion.button>
            ) : (
              <div className="text-xs font-mono text-slate-500 animate-pulse">
                INITIALIZING CYBERSPACE ENGINE...
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Retro Subtext */}
        <p className="mt-8 text-[11px] font-mono text-slate-500">
          © 2026 ADHAM KISHAWI • ISMAILIA, EGYPT • 16-BIT AUDIO ENABLED
        </p>
      </div>
    </motion.div>
  );
}
