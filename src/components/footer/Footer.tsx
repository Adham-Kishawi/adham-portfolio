"use client";

import React from "react";
import { IsmailiaClock } from "./IsmailiaClock";
import { useLanguage } from "@/context/LanguageContext";
import { useAudio } from "@/context/AudioContext";
import { Mail, MessageSquare, ArrowUp, Heart } from "lucide-react";
import { GithubIcon } from "../icons/GithubIcon";

export function Footer() {
  const { t } = useLanguage();
  const { playClick } = useAudio();

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950 pt-16 pb-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Live Ismailia Clock Bar */}
        <div className="mb-12">
          <IsmailiaClock />
        </div>

        {/* Footer Main Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono font-black text-xl text-slate-100">
              <span className="text-cyan-400">AK</span>
              <span>// ADHAM KISHAWI</span>
            </div>
            <p className="text-xs text-slate-400 font-sans max-w-md leading-relaxed">
              Mid-Level Front-End Engineer &amp; Web Developer specializing in Next.js 16, React 19, GSAP, and resilient client-side state architectures.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Adham-Kishawi"
              target="_blank"
              rel="noreferrer"
              onClick={playClick}
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-all cursor-pointer"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="mailto:Adhamkishawi@gmail.com"
              onClick={playClick}
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 hover:bg-slate-800 flex items-center justify-center text-slate-300 hover:text-pink-400 transition-all cursor-pointer"
              title="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/201016629983"
              target="_blank"
              rel="noreferrer"
              onClick={playClick}
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800 flex items-center justify-center text-slate-300 hover:text-emerald-400 transition-all cursor-pointer"
              title="WhatsApp Direct"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-cyan-400 hover:border-cyan-400 transition-all flex items-center gap-1.5 cursor-pointer ml-2"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 text-[11px] font-mono text-slate-500">
          <div>
            © 2026 Adham Kishawi. {t.footer.allRightsReserved}
          </div>
          <div>
            {t.footer.builtWith}
          </div>
        </div>
      </div>
    </footer>
  );
}
