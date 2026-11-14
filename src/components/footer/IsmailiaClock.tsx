"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CoinItem } from "../gamification/CoinItem";
import { Clock, MapPin } from "lucide-react";

export function IsmailiaClock() {
  const { t, lang } = useLanguage();
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString(lang === "ar" ? "ar-EG" : "en-US", {
        timeZone: "Africa/Cairo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      });
      setTimeStr(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [lang]);

  return (
    <div className="flex flex-wrap items-center gap-3 p-3.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-xs font-mono shadow-[0_0_20px_rgba(0,240,255,0.1)]">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
        </span>
        <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
          <Clock className="w-3.5 h-3.5" />
          <span>{t.footer.localTimePrefix}:</span>
        </div>
        <span className="text-slate-100 font-bold tracking-wider">{timeStr || "01:28:40 AM"}</span>
      </div>

      <div className="hidden sm:flex items-center gap-1 text-slate-500 text-[11px]">
        <MapPin className="w-3 h-3 text-pink-400" />
        <span>{t.footer.coordinates} • GMT+2</span>
      </div>

      {/* HIDDEN COIN #8: Placed right here inside the Ismailia clock badge! */}
      <div className="ml-auto flex items-center gap-1">
        <CoinItem id="coin-footer-clock" />
      </div>
    </div>
  );
}
