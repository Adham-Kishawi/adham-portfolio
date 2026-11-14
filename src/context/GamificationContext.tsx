"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { useAudio } from "./AudioContext";

export interface Coin {
  id: string;
  name: string;
  locationEn: string;
  locationAr: string;
}

export const ALL_COINS: Coin[] = [
  { id: "coin-hero-tech", name: "Genesis Token", locationEn: "Hero Section (Next.js Badge)", locationAr: "واجهة البداية (شارة Next.js)" },
  { id: "coin-doctech-preview", name: "Medical Caduceus", locationEn: "DOCTECH Case Study", locationAr: "دراسة نظام دوكتيك الطبي" },
  { id: "coin-automotive-badge", name: "Velocity Gear", locationEn: "Automotive Summit Platform", locationAr: "منصة قمة السيارات السنوية" },
  { id: "coin-about-iti", name: "Ismailia Nile Spark", locationEn: "About Section (ITI Journey)", locationAr: "قسم السيرة الذاتية (مسار معهد ITI)" },
  { id: "coin-prime-drop", name: "Streetwear Stitch", locationEn: "PRIME Brand & 3D Concepts", locationAr: "علامة برايم وتصميمات 3D" },
  { id: "coin-arsenal-nextjs", name: "Strict Type Shard", locationEn: "Tech Arsenal Bento", locationAr: "ترسانة الأدوات والتقنيات" },
  { id: "coin-terminal-secret", name: "Root Sudo Key", locationEn: "adham.sh Developer Terminal", locationAr: "طرفية المطورين البرمجية" },
  { id: "coin-footer-clock", name: "Suez Meridian Chrono", locationEn: "Live Ismailia Local Clock", locationAr: "ساعة الإسماعيلية الحية" }
];

interface GamificationContextType {
  collectedCoins: string[];
  totalCoins: number;
  collectCoin: (id: string) => boolean;
  isCoinCollected: (id: string) => boolean;
  showBadgeModal: boolean;
  setShowBadgeModal: (v: boolean) => void;
  resetProgress: () => void;
  tourActive: boolean;
  setTourActive: (v: boolean) => void;
}

const GamificationContext = createContext<GamificationContextType | undefined>(undefined);

export function GamificationProvider({ children }: { children: React.ReactNode }) {
  const [collectedCoins, setCollectedCoins] = useState<string[]>([]);
  const [showBadgeModal, setShowBadgeModal] = useState<boolean>(false);
  const [tourActive, setTourActive] = useState<boolean>(false);
  const { playCoin, playBadge } = useAudio();

  useEffect(() => {
    const saved = localStorage.getItem("ak_coins");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setCollectedCoins(parsed);
        }
      } catch {
        // Ignore JSON error
      }
    }
  }, []);

  const collectCoin = (id: string): boolean => {
    if (collectedCoins.includes(id)) return false;

    const next = [...collectedCoins, id];
    setCollectedCoins(next);
    localStorage.setItem("ak_coins", JSON.stringify(next));
    playCoin();

    // Check if user just unlocked all 8 coins
    if (next.length === ALL_COINS.length) {
      setTimeout(() => {
        playBadge();
        setShowBadgeModal(true);
        triggerVictoryConfetti();
      }, 500);
    }
    return true;
  };

  const isCoinCollected = (id: string) => collectedCoins.includes(id);

  const resetProgress = () => {
    setCollectedCoins([]);
    localStorage.removeItem("ak_coins");
  };

  const triggerVictoryConfetti = () => {
    try {
      const end = Date.now() + 3.5 * 1000;
      const colors = ["#00F0FF", "#FF0055", "#FBBF24", "#10B981", "#3B82F6"];

      (function frame() {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    } catch {
      // Fallback
    }
  };

  return (
    <GamificationContext.Provider
      value={{
        collectedCoins,
        totalCoins: ALL_COINS.length,
        collectCoin,
        isCoinCollected,
        showBadgeModal,
        setShowBadgeModal,
        resetProgress,
        tourActive,
        setTourActive
      }}
    >
      {children}
    </GamificationContext.Provider>
  );
}

export function useGamification() {
  const ctx = useContext(GamificationContext);
  if (!ctx) throw new Error("useGamification must be used within GamificationProvider");
  return ctx;
}
