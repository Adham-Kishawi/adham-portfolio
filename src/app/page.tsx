"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { ArcadePreloader } from "@/components/preloader/ArcadePreloader";
import { Navbar } from "@/components/navbar/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProjectsSection } from "@/components/work/ProjectsSection";
import { AboutSection } from "@/components/about/AboutSection";
import { BrandCommunitySection } from "@/components/brand/BrandCommunitySection";
import { ArsenalSection } from "@/components/arsenal/ArsenalSection";
import { ProcessSection } from "@/components/process/ProcessSection";
import { AdhamTerminal } from "@/components/terminal/AdhamTerminal";
import { Footer } from "@/components/footer/Footer";
import { RpgTour } from "@/components/tour/RpgTour";
import { ExplorerBadgeModal } from "@/components/gamification/ExplorerBadgeModal";

export default function HomePage() {
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // If the user visited recently in session, they can skip or start directly
    const sessionStarted = sessionStorage.getItem("ak_started");
    if (sessionStarted === "true") {
      setHasStarted(true);
    }
  }, []);

  const handleStart = () => {
    setHasStarted(true);
    sessionStorage.setItem("ak_started", "true");
  };

  return (
    <main className="relative min-h-screen bg-[#05070B] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950">
      {/* 1. Retro Arcade Preloader */}
      <AnimatePresence>
        {!hasStarted && <ArcadePreloader onStart={handleStart} />}
      </AnimatePresence>

      {/* 2. Floating Navbar */}
      <Navbar />

      {/* 3. Main Sections */}
      <div className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <BrandCommunitySection />
        <ArsenalSection />
        <ProcessSection />
        <AdhamTerminal />
      </div>

      {/* 4. Footer & Live Ismailia Clock */}
      <Footer />

      {/* 5. ADHAM.EXE RPG Guided Tour Overlay */}
      <RpgTour />

      {/* 6. 8-Coin Explorer Achievement Modal */}
      <ExplorerBadgeModal />
    </main>
  );
}
