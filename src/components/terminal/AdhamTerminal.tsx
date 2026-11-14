"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useAudio } from "@/context/AudioContext";
import { useGamification } from "@/context/GamificationContext";
import { Terminal, CornerDownLeft, Sparkles, Copy, Check } from "lucide-react";

interface TerminalLine {
  id: string;
  type: "input" | "output" | "error" | "success" | "ascii";
  text: string;
}

export function AdhamTerminal() {
  const { t, lang } = useLanguage();
  const { playClick, playDialog, playStart, playBadge } = useAudio();
  const { collectCoin } = useGamification();

  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      id: "init-1",
      type: "output",
      text: "AdhamOS v2.4.0 (x86_64-pc-none-elf) [Ismailia Gateway]"
    },
    {
      id: "init-2",
      type: "output",
      text: "Type 'help' to inspect available commands or 'sudo hire-adham' to initiate recruitment protocol."
    }
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    playDialog();
    setHistory((prev) => [...prev, cmd]);
    setHistoryIdx(-1);

    const newLines: TerminalLine[] = [
      ...lines,
      { id: String(Date.now()), type: "input", text: `$ ${cmd}` }
    ];

    const parts = cmd.toLowerCase().split(" ");
    const command = parts[0];

    switch (command) {
      case "help":
        newLines.push({
          id: String(Date.now() + 1),
          type: "output",
          text: `AVAILABLE COMMANDS:
  about           : Display Adham's bio, ITI background & Ismailia roots
  projects        : List flagship engineering case studies (DOCTECH, Automotive, PRIME)
  skills          : Output complete categorized technical arsenal
  contact         : Show direct email, WhatsApp, GitHub and location
  sudo hire-adham : Special recruiter protocol to schedule an interview
  date            : Print current Ismailia / Egypt local timestamp
  whoami          : Display current user session
  coin            : Collect hidden coin #7 if not already claimed!
  clear           : Wipe terminal scrollback history`
        });
        break;

      case "about":
        newLines.push({
          id: String(Date.now() + 1),
          type: "output",
          text: `Adham Kishawi (أدهم كيشاوي)
Mid-Level Front-End Engineer & Web Developer based in Ismailia, Egypt.
Graduate of the Information Technology Institute (ITI) Intensive Program.
Founder of PRIME Apparel and Finalist at Creativa Ismailia Startup Sprint (Sport Cycle).
Specialized in Next.js 16, React 19, Strict TypeScript, GSAP, and resilient client-side architectures.`
        });
        break;

      case "projects":
        newLines.push({
          id: String(Date.now() + 1),
          type: "output",
          text: `FLAGSHIP REPOSITORIES:
  1. DOCTECH          - Multi-Tenant Clinic OS with WhatsApp AI & EMR (Next.js 16, Supabase, Vitest)
  2. craft-crew-events- 11th Egypt Automotive Summit Portal with 2.8s QR Telemetry (React 19, Visx)
  3. prime-brand-crm  - Apparel Brand Operations CRM with Kanban pipeline & XLSX audits
  4. sport-cycle      - Circular sports gear marketplace on Cloudflare Edge (Creativa Finalist)
  5. AetherCast       - Soft Neo-Brutalist live weather dashboard (React 19, Open-Meteo)
  6. maswada-ai       - Intelligent Arabic RTL note-taking workspace`
        });
        break;

      case "skills":
        newLines.push({
          id: String(Date.now() + 1),
          type: "output",
          text: `CORE ARSENAL:
  Languages : TypeScript (Strict), JavaScript (ESNext), HTML5/CSS3
  Frameworks: Next.js 16 (App Router), React 19, Vite, Node.js
  Styling   : Tailwind CSS v4, shadcn/ui, Radix UI, Glassmorphism
  Motion    : GSAP 3 (ScrollTrigger, Flip), Framer Motion 14, Web Audio API
  Database  : Supabase SSR, Prisma ORM, PostgreSQL, Cloudflare Edge, Redis`
        });
        break;

      case "contact":
        newLines.push({
          id: String(Date.now() + 1),
          type: "output",
          text: `DIRECT CHANNELS:
  Email   : Adhamkishawi@gmail.com
  GitHub  : https://github.com/Adham-Kishawi
  Location: Ismailia, Egypt (GMT+2)
  WhatsApp: +20 101 662 9983`
        });
        break;

      case "sudo":
        if (parts.slice(1).join(" ") === "hire-adham") {
          playBadge();
          newLines.push({
            id: String(Date.now() + 1),
            type: "ascii",
            text: `
  =============================================================
  [SUCCESS] ROOT PERMISSION GRANTED! RECRUITMENT PROTOCOL ENGAGED!
  =============================================================
  Candidate : Adham Kishawi
  Role      : Mid-Level Front-End Engineer & Web Architect
  Status    : READY FOR IMMEDIATE DEPLOYMENT 🚀
  Direct URL: mailto:Adhamkishawi@gmail.com?subject=Offer%20/%20Interview
  Opening your default email client now...`
          });
          setTimeout(() => {
            window.location.href = "mailto:Adhamkishawi@gmail.com?subject=Offer%20/%20Interview%20Invitation";
          }, 1200);
        } else {
          newLines.push({
            id: String(Date.now() + 1),
            type: "error",
            text: `sudo: unknown command '${parts.slice(1).join(" ")}'. Try 'sudo hire-adham'`
          });
        }
        break;

      case "date":
        newLines.push({
          id: String(Date.now() + 1),
          type: "output",
          text: new Date().toLocaleString("en-US", { timeZone: "Africa/Cairo" }) + " (Ismailia / Africa/Cairo)"
        });
        break;

      case "whoami":
        newLines.push({
          id: String(Date.now() + 1),
          type: "output",
          text: "guest_developer@adham-kishawi.me"
        });
        break;

      case "coin":
        collectCoin("coin-terminal-secret");
        newLines.push({
          id: String(Date.now() + 1),
          type: "success",
          text: "🪙 [REWARD] Root Sudo Key coin collected! Check your navbar counter!"
        });
        break;

      case "clear":
        setLines([]);
        setInput("");
        return;

      default:
        newLines.push({
          id: String(Date.now() + 1),
          type: "error",
          text: `command not found: '${command}'. Type 'help' to see valid commands.`
        });
        break;
    }

    setLines(newLines);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIdx === -1 ? history.length - 1 : Math.max(0, historyIdx - 1);
        setHistoryIdx(nextIdx);
        setInput(history[nextIdx] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx !== -1) {
        const nextIdx = historyIdx + 1;
        if (nextIdx >= history.length) {
          setHistoryIdx(-1);
          setInput("");
        } else {
          setHistoryIdx(nextIdx);
          setInput(history[nextIdx] || "");
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const commands = ["help", "about", "projects", "skills", "contact", "sudo hire-adham", "clear", "date", "whoami", "coin"];
      const match = commands.find((c) => c.startsWith(input.toLowerCase().trim()));
      if (match) {
        setInput(match);
      }
    }
  };

  return (
    <section id="terminal-section" className="relative py-20 sm:py-28 overflow-hidden bg-slate-950/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded bg-purple-950/50 border border-purple-500/40 text-purple-400 font-mono text-xs font-bold tracking-wider uppercase">
              {t.terminal.sectionNum}
            </span>
            <span className="text-xs font-mono text-slate-500">
              UNIX CLI SIMULATOR
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-100 mb-2 tracking-tight">
            {t.terminal.title}
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 max-w-xl font-sans">
            {t.terminal.subtitle}
          </p>
        </div>

        {/* Terminal Chrome Window */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="rounded-2xl bg-slate-950 border-2 border-cyan-500/40 shadow-[0_0_50px_rgba(0,240,255,0.2)] overflow-hidden cursor-text"
        >
          {/* Top Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>adham@ismailia-node: ~/portfolio</span>
            </div>

            <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">
              bash 5.2
            </span>
          </div>

          {/* Scrollable Shell Output */}
          <div className="p-4 sm:p-6 min-h-[300px] max-h-[460px] overflow-y-auto font-mono text-xs sm:text-sm space-y-2 leading-relaxed">
            {lines.map((l) => (
              <div key={l.id}>
                {l.type === "input" && (
                  <div className="text-cyan-400 font-bold">{l.text}</div>
                )}
                {l.type === "output" && (
                  <pre className="text-slate-300 whitespace-pre-wrap font-mono">{l.text}</pre>
                )}
                {l.type === "ascii" && (
                  <pre className="text-emerald-400 font-bold whitespace-pre-wrap font-mono">{l.text}</pre>
                )}
                {l.type === "success" && (
                  <div className="text-yellow-400 font-bold">{l.text}</div>
                )}
                {l.type === "error" && (
                  <div className="text-rose-400">{l.text}</div>
                )}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Prompt Input Row */}
          <div className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-slate-900/60 border-t border-slate-800">
            <span className="text-cyan-400 font-mono font-bold">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help' or 'sudo hire-adham'..."
              className="flex-1 bg-transparent text-slate-100 font-mono text-xs sm:text-sm outline-none placeholder:text-slate-600"
            />
            <button
              onClick={() => handleCommand(input)}
              className="p-1 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
