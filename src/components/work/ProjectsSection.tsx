"use client";

import React, { useState } from "react";
import { PROJECTS_DATA, ProjectCaseStudy } from "@/lib/data/projectsData";
import { ProjectCard } from "./ProjectCard";
import { CaseStudyModal } from "./CaseStudyModal";
import { useLanguage } from "@/context/LanguageContext";
import { useAudio } from "@/context/AudioContext";
import { Sparkles, Terminal } from "lucide-react";

export function ProjectsSection() {
  const { t } = useLanguage();
  const { playClick } = useAudio();
  const [filter, setFilter] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<ProjectCaseStudy | null>(null);

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
    <section id="projects-section" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Cyber Details */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 font-mono text-xs font-bold tracking-wider uppercase">
              {t.projects.sectionNum}
            </span>
            <span className="text-xs font-mono text-slate-500">
              {PROJECTS_DATA.length} CASE STUDIES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 mb-3 tracking-tight">
            {t.projects.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl font-sans">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playClick();
                setFilter(cat);
              }}
              className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer ${
                filter === cat
                  ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(0,240,255,0.35)]"
                  : "bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onOpenCaseStudy={setActiveProject}
            />
          ))}
        </div>
      </div>

      {/* Deep Case Study Modal */}
      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onSelectProject={setActiveProject}
      />
    </section>
  );
}
