"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AdhamAvatar } from "../avatar/AdhamAvatar";
import { useLanguage } from "@/context/LanguageContext";
import { useAudio } from "@/context/AudioContext";
import { useGamification } from "@/context/GamificationContext";
import { X, ChevronLeft, ChevronRight, Terminal, Sparkles } from "lucide-react";

export function RpgTour() {
  const { t, isRtl } = useLanguage();
  const { playClick, playDialog, playStart } = useAudio();
  const { tourActive, setTourActive } = useGamification();
  const [currentStep, setCurrentStep] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const chapters = t.tour.chapters;
  const currentChapter = chapters[currentStep];

  // Scroll to targeted section when step changes
  useEffect(() => {
    if (!tourActive || !currentChapter) return;

    const targetEl = document.getElementById(currentChapter.targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    // Typewriter effect
    const fullText = currentChapter.message;
    setDisplayedText("");
    setIsTyping(true);

    let idx = 0;
    const interval = setInterval(() => {
      if (idx < fullText.length) {
        setDisplayedText(fullText.slice(0, idx + 1));
        if (idx % 3 === 0) {
          playDialog();
        }
        idx++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 24);

    return () => clearInterval(interval);
  }, [tourActive, currentStep, currentChapter, playDialog]);

  // Handle keyboard shortcuts
  useEffect(() => {
    if (!tourActive) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleSkip();
      } else if (e.key === "ArrowRight") {
        if (isRtl) handlePrev();
        else handleNext();
      } else if (e.key === "ArrowLeft") {
        if (isRtl) handleNext();
        else handlePrev();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [tourActive, currentStep, isRtl]);

  const handleNext = () => {
    playClick();
    if (currentStep < chapters.length - 1) {
      setCurrentStep((p) => p + 1);
    } else {
      handleFinish();
    }
  };

  const handlePrev = () => {
    playClick();
    if (currentStep > 0) {
      setCurrentStep((p) => p - 1);
    }
  };

  const handleSkip = () => {
    playClick();
    setTourActive(false);
    setCurrentStep(0);
  };

  const handleFinish = () => {
    playStart();
    setTourActive(false);
    setCurrentStep(0);
  };

  if (!tourActive) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 pointer-events-auto">
        {/* Fullscreen Dim Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleSkip}
          className="absolute inset-0 bg-black/80 backdrop-blur-[2px] transition-all"
        />

        {/* Floating Spotlight Floating Pointer over target element */}
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-end p-4 sm:p-8">
          {/* RPG Dialog Box Container */}
          <motion.div
            initial={{ y: 80, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 80, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="pointer-events-auto relative mx-auto w-full max-w-3xl rounded-2xl bg-slate-950/95 border-2 border-cyan-500/40 p-5 sm:p-6 shadow-[0_0_50px_rgba(0,240,255,0.25)] text-slate-100"
          >
            {/* Top Glowing Trim */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 rounded-t-2xl shadow-[0_0_12px_#00F0FF]" />

            {/* Header Ribbon */}
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#FF0055]/20 border border-[#FF0055]/50 text-[#FF0055] font-mono text-xs font-bold tracking-wider">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>{t.tour.headerTag}</span>
                </span>
                <span className="font-mono text-xs text-cyan-400 font-semibold tracking-wider">
                  {t.tour.chapterPrefix} {currentStep + 1} / {chapters.length}: {currentChapter.title}
                </span>
              </div>

              {/* Progress Blocks */}
              <div className="hidden sm:flex items-center gap-1">
                {chapters.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 w-5 rounded-full transition-all duration-300 ${
                      i === currentStep
                        ? "bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]"
                        : i < currentStep
                        ? "bg-slate-600"
                        : "bg-slate-800"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleSkip}
                className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800/80 transition-colors cursor-pointer"
                title={t.tour.skip}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Dialog Content Grid */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 my-2">
              {/* Flying Character Avatar using layoutId */}
              <motion.div
                layoutId="adham-tour-avatar"
                className="flex-shrink-0 bg-slate-900/80 p-2 rounded-xl border border-cyan-500/30 shadow-[0_0_15px_rgba(0,240,255,0.15)]"
              >
                <AdhamAvatar
                  state={isTyping ? "talking" : "thumbs-up"}
                  size={88}
                  showHoloRing={true}
                />
              </motion.div>

              {/* Typewriter Text Window */}
              <div className="flex-1 min-h-[70px] sm:min-h-[85px] text-sm sm:text-base font-mono leading-relaxed text-slate-200">
                <p>
                  {displayedText}
                  {isTyping && (
                    <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 animate-pulse" />
                  )}
                </p>
              </div>
            </div>

            {/* Controls Bar */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800 mt-2">
              <button
                onClick={handleSkip}
                className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {t.tour.skip}
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900 font-mono text-xs font-semibold text-slate-300 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer flex items-center gap-1"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>{t.tour.prev}</span>
                </button>

                <button
                  onClick={handleNext}
                  className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 font-mono text-xs font-bold text-white hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>
                    {currentStep === chapters.length - 1
                      ? t.tour.finish
                      : t.tour.next}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
