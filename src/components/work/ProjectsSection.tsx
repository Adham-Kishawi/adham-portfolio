"use client";

import React, { useState } from "react";
import { PROJECTS_DATA, ProjectCaseStudy } from "@/lib/data/projectsData";
import { ProjectCard } from "./ProjectCard";
import { CaseStudyModal } from "./CaseStudyModal";
import { WarpCarousel, WarpCard } from "@/components/ui/warp-carousel";
import { useLanguage } from "@/context/LanguageContext";
import { useAudio } from "@/context/AudioContext";
import { Sparkles, Terminal, Layers } from "lucide-react";

export function ProjectsSection() {
  const { t, lang } = useLanguage();
  const { playClick } = useAudio();
  const [filter, setFilter] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<ProjectCaseStudy | null>(null);

  // Custom 3D Warp Carousel cards mapped to Adham's real flagship projects
  const warpCards: WarpCard[] = [
    {
      title: "DOCTECH EMR\nClinic OS",
      value: "100",
      unit: "%",
      footer: "Next.js 16 • Supabase • WhatsApp AI",
      detail: "slider",
      labels: ["Hermes AI", "Active"],
      numeral: ["#00f0ff", "#60a5fa"],
      accent: "#00f0ff",
      glow: "#00f0ff",
      mesh: [
        "#022852", "#031e3f", "#031934", "#021831", "#021b36", "#022246",
        "#022345", "#020e1e", "#01040f", "#000416", "#020b31", "#021c57",
        "#01172f", "#01010c", "#03001d", "#0a0f4c", "#112383", "#0b36af",
        "#021142", "#050b47", "#0c2e8f", "#165bd4", "#1675fd", "#167bff",
        "#03288e", "#0438af", "#0d66e7", "#107eec", "#30afff", "#71dcff",
        "#0356e8", "#0259ec", "#0945b0", "#001a49", "#3f7c9d", "#d4ffff",
        "#0365ff", "#0256ea", "#052a87", "#00001f", "#1f4c7b", "#9ee7ff"
      ]
    },
    {
      title: "11th Automotive\nSummit 2026",
      value: "1.2k",
      unit: "+",
      footer: "Visx D3 • Live QR Scanners • 60 FPS",
      detail: "cross",
      labels: ["Gate", "2.8s", "Pass"],
      numeral: ["#f43f5e", "#fda4af"],
      accent: "#f43f5e",
      glow: "#f43f5e",
      mesh: [
        "#4c2d5f", "#3b2245", "#3e285b", "#33204f", "#381844", "#572571",
        "#644096", "#4f3688", "#8358f6", "#8d54f3", "#5e20ac", "#6e24b7",
        "#482e6d", "#261b48", "#825bf6", "#d48cff", "#d07bff", "#b359ff",
        "#2d1837", "#140a1b", "#2c1d66", "#3a2383", "#693bca", "#8b42ef",
        "#411c5b", "#300753", "#3b006e", "#500f79", "#7e31c1", "#9541f3",
        "#44245a", "#3f0c69", "#6f15b9", "#d17cff", "#e2a3ff", "#a668ff",
        "#4b2f60", "#4d2172", "#6819aa", "#9b48dc", "#965dc9", "#7745c4"
      ]
    },
    {
      title: "PRIME Brand CRM\nKanban Pipeline",
      value: "3x",
      unit: "Speed",
      footer: "Bespoke Apparel ERP • XLSX Engine",
      detail: "ring",
      labels: ["Orders", "Audit"],
      numeral: ["#f59e0b", "#fde68a"],
      accent: "#f59e0b",
      glow: "#f59e0b",
      mesh: [
        "#ff623e", "#f57337", "#e49435", "#fba03f", "#ef6b36", "#f14c36",
        "#f29a3e", "#a0a92e", "#a2ba36", "#fffe65", "#ffd852", "#f2863b",
        "#a5b12e", "#46821d", "#6a6127", "#b88b44", "#b6bd41", "#c4b838",
        "#7e9f27", "#3b5a19", "#412c10", "#0d1700", "#255b0c", "#98ad28",
        "#a5b232", "#3e7c1e", "#002800", "#00300f", "#5b9745", "#c1b833",
        "#f3983b", "#b3b431", "#6fa31f", "#9bc976", "#edd896", "#fd8c3d",
        "#ff5f3b", "#ff7d47", "#ffa880", "#ffc1d8", "#ff8d99", "#ff5438"
      ]
    },
    {
      title: "Sport Cycle\nCircular MVP",
      value: "55",
      unit: "ms",
      footer: "Creativa Sprint Finalist • Edge Native",
      detail: "wave",
      labels: ["Verify", "98%"],
      numeral: ["#10b981", "#6ee7b7"],
      accent: "#10b981",
      glow: "#10b981",
      mesh: [
        "#034a36", "#043c2c", "#023526", "#022b1f", "#032e22", "#053d2d",
        "#053e2e", "#031d16", "#010f0b", "#01130d", "#021c13", "#043223",
        "#022b1e", "#010e0a", "#02140e", "#0a3826", "#0d4d35", "#0e5a3e",
        "#032217", "#063625", "#0e5039", "#157855", "#18986c", "#1ca475",
        "#05422d", "#08573b", "#10885c", "#149e6b", "#36d399", "#6ee7b7",
        "#076e48", "#08734c", "#0b6241", "#022e1e", "#2e7a5b", "#d1fae5",
        "#088357", "#07714b", "#09442e", "#001a12", "#1b5a41", "#a7f3d0"
      ]
    }
  ];

  const categories = [
    "All",
    "Full-Stack Enterprise",
    "E-Commerce",
    "SaaS MVP",
    "Creative UI/UX"
  ];

  const filteredProjects =
    filter === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === filter);

  return (
    <section id="projects-section" className="relative py-20 sm:py-28 bg-[#05070B] overflow-hidden">
      {/* Subtle Ambient Cosmic Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-blue-500/30 text-cyan-400 font-mono text-xs font-semibold mb-3">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.projects.sectionNum}</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 tracking-tight">
              {t.projects.title}
            </h2>
            
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl font-sans">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playClick();
                  setFilter(cat);
                }}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs font-semibold transition-all cursor-pointer ${
                  filter === cat
                    ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                    : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 1. 3D Interactive Warp Carousel (User Requested Component) */}
        <div className="relative w-full rounded-2xl bg-slate-950/80 border border-blue-500/25 p-4 sm:p-6 mb-16 shadow-[0_16px_48px_rgba(0,0,0,0.6)] backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2 text-cyan-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>WARP CYLINDER // ARCHITECTURAL TELEMETRY</span>
            </span>
            <span className="hidden sm:inline text-slate-500">DRAG OR AUTOPLAY • 3D CANVAS</span>
          </div>

          <div className="w-full h-[440px] sm:h-[480px]">
            <WarpCarousel
              cards={warpCards}
              autoplay={true}
              interval={4.5}
              warp={0.4}
              background="transparent"
            />
          </div>
        </div>

        {/* 2. Flagship Project Cards with Real Screenshots & Deep-Dive Modals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={setActiveProject}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Interactive Case Study Deep-Dive Modal */}
      {activeProject && (
        <CaseStudyModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
          onSelectProject={(p) => setActiveProject(p)}
        />
      )}
    </section>
  );
}
