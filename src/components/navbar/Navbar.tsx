"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useGamification } from "@/context/GamificationContext";
import { useAudio } from "@/context/AudioContext";
import { SoundDropdown } from "./SoundDropdown";
import { Trophy, Globe, MessageSquare, Menu, X, Sparkles } from "lucide-react";

export function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const { collectedCoins, totalCoins, setShowBadgeModal } = useGamification();
  const { playClick, playCoin } = useAudio();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.work, href: "#projects-section" },
    { label: t.nav.about, href: "#about-section" },
    { label: t.nav.brand, href: "#brand-section" },
    { label: t.nav.arsenal, href: "#arsenal-section" },
    { label: t.nav.services, href: "#process-section" },
    { label: t.nav.terminal, href: "#terminal-section" }
  ];

  const handleLinkClick = (href: string) => {
    playClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center p-3 sm:p-5 pointer-events-none">
      <nav
        className={`pointer-events-auto transition-all duration-300 w-full max-w-6xl rounded-2xl border flex items-center justify-between px-3 sm:px-5 py-2.5 ${
          scrolled
            ? "bg-slate-950/85 backdrop-blur-md border-cyan-500/30 shadow-[0_8px_32px_rgba(0,240,255,0.12)]"
            : "bg-slate-950/60 backdrop-blur-sm border-slate-800/80 shadow-lg"
        }`}
      >
        {/* AK Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            playClick();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex items-center gap-2 cursor-pointer select-none"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-0.5 shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:shadow-[0_0_20px_rgba(255,0,85,0.6)] transition-all">
            <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center font-mono font-black text-sm text-cyan-400 group-hover:text-pink-400 transition-colors">
              AK
            </div>
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="font-mono text-xs font-bold text-slate-100 tracking-wider">
              ADHAM KISHAWI
            </span>
            <span className="text-[10px] font-mono text-cyan-400">
              FRONT-END ARCHITECT
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleLinkClick(item.href)}
              className="px-2.5 py-1.5 rounded-lg text-xs font-mono text-slate-300 hover:text-cyan-400 hover:bg-slate-900/60 transition-all cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Action Stack */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Live Coin Counter */}
          <div
            id="coin-counter-badge"
            onClick={() => {
              playClick();
              if (collectedCoins.length === totalCoins) {
                setShowBadgeModal(true);
              }
            }}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border font-mono text-xs font-bold select-none transition-all cursor-pointer ${
              collectedCoins.length === totalCoins
                ? "bg-yellow-500/20 border-yellow-400/60 text-yellow-400 shadow-[0_0_15px_rgba(251,191,36,0.3)]"
                : "bg-slate-900/70 border-slate-800 text-slate-300 hover:border-yellow-500/40"
            }`}
            title="Hidden Coins Found across Portfolio"
          >
            <Trophy className="w-3.5 h-3.5 text-yellow-400" />
            <span>
              {collectedCoins.length} / {totalCoins}
            </span>
          </div>

          {/* Retro Sound Menu */}
          <SoundDropdown />

          {/* Language Switcher */}
          <button
            onClick={() => {
              playClick();
              toggleLang();
            }}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 font-mono text-xs transition-all cursor-pointer"
            title="Switch Language (Arabic / English)"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-bold">{lang === "en" ? "عربي" : "EN"}</span>
          </button>

          {/* Let's Talk CTA Button */}
          <a
            href="mailto:Adhamkishawi@gmail.com"
            onClick={playClick}
            className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-mono text-xs font-bold shadow-[0_0_15px_rgba(0,240,255,0.35)] transition-all cursor-pointer"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{t.nav.letsTalk}</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 rounded-2xl bg-slate-950/95 border-2 border-cyan-500/40 p-5 shadow-[0_0_40px_rgba(0,240,255,0.2)] z-50 pointer-events-auto flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleLinkClick(item.href)}
              className="text-left py-2 px-3 rounded-lg font-mono text-sm text-slate-200 hover:text-cyan-400 hover:bg-slate-900 transition-all cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <a
            href="mailto:Adhamkishawi@gmail.com"
            className="mt-2 text-center py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-mono text-xs font-bold"
          >
            {t.nav.letsTalk}
          </a>
        </div>
      )}
    </header>
  );
}
