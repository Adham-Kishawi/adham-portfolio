"use client";

import React, { useState, useRef, useEffect } from "react";
import { useAudio } from "@/context/AudioContext";
import { useLanguage } from "@/context/LanguageContext";
import { Volume2, VolumeX, Music, Bell } from "lucide-react";

export function SoundDropdown() {
  const { sfxEnabled, setSfxEnabled, bgmEnabled, setBgmEnabled, volume, setVolume, playClick } = useAudio();
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Sound Trigger Button */}
      <button
        onClick={() => {
          playClick();
          setIsOpen(!isOpen);
        }}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-mono transition-all cursor-pointer ${
          sfxEnabled || bgmEnabled
            ? "border-cyan-500/40 bg-cyan-950/30 text-cyan-400 hover:border-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.2)]"
            : "border-slate-800 bg-slate-900/60 text-slate-400 hover:text-slate-200"
        }`}
        title="Retro Sound & Synthesizer Controls"
      >
        {sfxEnabled || bgmEnabled ? (
          <Volume2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-slate-500" />
        )}
        <span className="hidden sm:inline font-semibold">AUDIO</span>
      </button>

      {/* Styled Retro Arcade Sound Box */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-xl bg-slate-950/95 border-2 border-cyan-500/50 p-4 shadow-[0_0_30px_rgba(0,240,255,0.25)] z-50 text-slate-200 font-mono text-xs select-none">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2 mb-3">
            <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 bg-[#FF0055] rounded-full animate-ping" />
              {t.nav.soundTitle}
            </span>
            <span className="text-[10px] text-slate-500">8-BIT SYNTH</span>
          </div>

          {/* SFX Toggle */}
          <div className="flex items-center justify-between py-2 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <Bell className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-slate-300">{t.nav.sfxLabel}</span>
            </div>
            <button
              onClick={() => setSfxEnabled(!sfxEnabled)}
              className={`px-2.5 py-1 rounded font-bold text-[10px] tracking-wider transition-all cursor-pointer ${
                sfxEnabled
                  ? "bg-[#00F0FF] text-slate-950 shadow-[0_0_8px_#00F0FF]"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700"
              }`}
            >
              {sfxEnabled ? "ON" : "OFF"}
            </button>
          </div>

          {/* Synth BGM Toggle */}
          <div className="flex items-center justify-between py-2 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <Music className="w-3.5 h-3.5 text-pink-400" />
              <span className="text-slate-300">{t.nav.bgmLabel}</span>
            </div>
            <button
              onClick={() => {
                playClick();
                setBgmEnabled(!bgmEnabled);
              }}
              className={`px-2.5 py-1 rounded font-bold text-[10px] tracking-wider transition-all cursor-pointer ${
                bgmEnabled
                  ? "bg-[#FF0055] text-white shadow-[0_0_8px_#FF0055]"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700"
              }`}
            >
              {bgmEnabled ? "ON" : "OFF"}
            </button>
          </div>

          {/* Volume Slider */}
          <div className="pt-3">
            <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1.5">
              <span>{t.nav.volumeLabel}</span>
              <span className="text-cyan-400">{Math.round(volume * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>
        </div>
      )}
    </div>
  );
}
