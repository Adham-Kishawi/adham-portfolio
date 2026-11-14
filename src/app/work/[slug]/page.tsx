import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS_DATA } from "@/lib/data/projectsData";
import { ArrowLeft, ExternalLink, CheckCircle2, AlertCircle, Cpu, Layers } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";

export function generateStaticParams() {
  return PROJECTS_DATA.map((p) => ({
    slug: p.slug
  }));
}

export default async function ProjectCaseStudyPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = PROJECTS_DATA.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];

  return (
    <div className="min-h-screen bg-[#05070B] text-slate-100 py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/#projects-section"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 hover:border-cyan-400 transition-all mb-8 shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>

        {/* Top Accent Strip */}
        <div
          className="h-1.5 w-full rounded-t-xl mb-6 shadow-md"
          style={{ backgroundColor: project.accentColor }}
        />

        {/* Meta Header */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span
            className="px-3 py-1 rounded text-xs font-mono font-bold uppercase tracking-wider"
            style={{
              backgroundColor: `${project.accentColor}20`,
              color: project.accentColor,
              border: `1px solid ${project.accentColor}50`
            }}
          >
            {project.category}
          </span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
            {project.year}
          </span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
            {project.roleEn}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight">
          {project.titleEn}
        </h1>

        <p className="text-base sm:text-lg text-slate-300 mb-8 font-sans leading-relaxed">
          {project.taglineEn}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 mb-10 pb-6 border-b border-slate-800">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-slate-200 transition-all flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View GitHub Source</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live Preview</span>
            </a>
          )}
        </div>

        {/* Verified Metrics */}
        <div className="mb-10">
          <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
            VERIFIED SYSTEM TELEMETRY
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((m, i) => (
              <div
                key={i}
                className="rounded-xl bg-slate-900/80 border border-slate-800 p-4 flex flex-col"
              >
                <span
                  className="text-2xl font-black font-mono mb-1"
                  style={{ color: project.accentColor }}
                >
                  {m.value}
                </span>
                <span className="text-xs font-sans text-slate-400">
                  {m.labelEn}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial Story: Challenge, Solution, Outcome */}
        <div className="space-y-6 mb-10 font-sans">
          <div className="rounded-xl bg-slate-900/60 border border-rose-500/20 p-6">
            <h4 className="text-sm font-mono font-bold text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              <span>01 The Challenge</span>
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.challengeEn}
            </p>
          </div>

          <div className="rounded-xl bg-slate-900/60 border border-cyan-500/20 p-6">
            <h4 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>02 The Engineering Solution</span>
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.solutionEn}
            </p>
          </div>

          <div className="rounded-xl bg-slate-900/60 border border-emerald-500/20 p-6">
            <h4 className="text-sm font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>03 Architectural Outcome</span>
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.outcomeEn}
            </p>
          </div>
        </div>

        {/* Tech Badges */}
        <div className="mb-12">
          <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>Technologies &amp; Libraries</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Next Project Footer */}
        <div className="pt-8 border-t border-slate-800 flex items-center justify-between">
          <Link
            href="/#projects-section"
            className="text-xs font-mono text-slate-400 hover:text-white"
          >
            ← All Case Studies
          </Link>
          <Link
            href={`/work/${nextProject.slug}`}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 text-cyan-400 font-mono text-xs font-bold transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)]"
          >
            Next Project: {nextProject.titleEn} →
          </Link>
        </div>
      </div>
    </div>
  );
}
