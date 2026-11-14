"use client";

import React from "react";
import { motion } from "framer-motion";

export type AvatarState = "waving" | "thumbs-up" | "talking" | "coding";

interface AdhamAvatarProps {
  state?: AvatarState;
  size?: number;
  className?: string;
  showHoloRing?: boolean;
}

export function AdhamAvatar({
  state = "waving",
  size = 120,
  className = "",
  showHoloRing = true
}: AdhamAvatarProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Optional Cyberpunk Holographic Ring underneath */}
      {showHoloRing && (
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.65, 0.35],
            rotate: [0, 360]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-pink-500/20 to-blue-500/20 blur-md pointer-events-none"
        />
      )}

      {/* High-Fidelity 32-Bit Pixel Art SVG Sprite */}
      <svg
        viewBox="0 0 64 64"
        width={size}
        height={size}
        className="relative z-10 drop-shadow-[0_4px_16px_rgba(0,240,255,0.3)]"
        style={{ shapeRendering: "crispEdges", imageRendering: "pixelated" }}
      >
        <defs>
          <radialGradient id="cyberGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* --- 1. HAIR (Adham's signature dark wavy volume) --- */}
        {/* Hair base shape */}
        <rect x="22" y="10" width="20" height="4" fill="#181512" />
        <rect x="18" y="14" width="28" height="6" fill="#181512" />
        <rect x="16" y="20" width="32" height="6" fill="#181512" />
        {/* Hair highlights / texture */}
        <rect x="24" y="12" width="6" height="2" fill="#2E2823" />
        <rect x="34" y="12" width="6" height="2" fill="#2E2823" />
        <rect x="20" y="16" width="8" height="2" fill="#3D352E" />
        <rect x="32" y="16" width="10" height="2" fill="#3D352E" />
        <rect x="18" y="22" width="4" height="4" fill="#25201C" />
        <rect x="42" y="22" width="4" height="4" fill="#25201C" />

        {/* --- 2. FACE (Skin tones) --- */}
        <rect x="20" y="24" width="24" height="18" fill="#F4C29B" />
        {/* Shadow under hair */}
        <rect x="20" y="24" width="24" height="2" fill="#E1A980" />
        {/* Chin & Jaw contour */}
        <rect x="22" y="42" width="20" height="2" fill="#F4C29B" />
        <rect x="26" y="44" width="12" height="2" fill="#E1A980" />

        {/* --- 3. EYES & EYEBROWS --- */}
        {/* Eyebrows */}
        <rect x="22" y="26" width="6" height="2" fill="#1A1714" />
        <rect x="36" y="26" width="6" height="2" fill="#1A1714" />

        {/* Eyes (Dark with glint) */}
        <rect x="24" y="29" width="3" height="3" fill="#1A1714" />
        <rect x="24" y="29" width="1" height="1" fill="#FFFFFF" />
        <rect x="37" y="29" width="3" height="3" fill="#1A1714" />
        <rect x="37" y="29" width="1" height="1" fill="#FFFFFF" />

        {/* Cheeks / Warmth */}
        <rect x="21" y="34" width="3" height="2" fill="#EA9E78" opacity="0.6" />
        <rect x="40" y="34" width="3" height="2" fill="#EA9E78" opacity="0.6" />

        {/* Nose */}
        <rect x="31" y="32" width="2" height="3" fill="#DF9F76" />

        {/* Mouth states */}
        {state === "talking" ? (
          <g>
            <rect x="28" y="37" width="8" height="4" fill="#1A1714" />
            <rect x="29" y="38" width="6" height="2" fill="#F43F5E" />
            <rect x="30" y="37" width="4" height="1" fill="#FFFFFF" />
          </g>
        ) : (
          <g>
            {/* Confident, warm smile */}
            <rect x="27" y="37" width="10" height="2" fill="#994D33" />
            <rect x="29" y="38" width="6" height="1" fill="#FFFFFF" />
            <rect x="26" y="36" width="2" height="1" fill="#994D33" />
            <rect x="36" y="36" width="2" height="1" fill="#994D33" />
          </g>
        )}

        {/* --- 4. CLOTHING (Obsidian Hoodie/Suit with Cyber Blue & Neon Pink) --- */}
        {/* Neck */}
        <rect x="28" y="44" width="8" height="4" fill="#E1A980" />
        {/* Inner White Shirt Collar */}
        <polygon points="28,45 32,50 30,45" fill="#FFFFFF" />
        <polygon points="36,45 32,50 34,45" fill="#FFFFFF" />

        {/* Cyber Dark Suit / Hoodie Body */}
        <rect x="16" y="48" width="32" height="16" fill="#0A0E17" />
        <rect x="18" y="48" width="28" height="16" fill="#131B2E" />

        {/* Electric Cyber Blue Accents & Neon Pink Trims */}
        <rect x="16" y="48" width="2" height="16" fill="#00F0FF" />
        <rect x="46" y="48" width="2" height="16" fill="#00F0FF" />
        <rect x="31" y="50" width="2" height="14" fill="#FF0055" />
        {/* Glowing Chest Badge (AK emblem) */}
        <rect x="22" y="52" width="4" height="3" fill="#00F0FF" />
        <rect x="23" y="53" width="2" height="1" fill="#FFFFFF" />

        {/* --- 5. STATE-SPECIFIC ANIMATED ARMS & ACCESSORIES --- */}

        {/* STATE: WAVING */}
        {state === "waving" && (
          <g className="animate-bounce" style={{ animationDuration: "1s" }}>
            {/* Raised waving right arm */}
            <rect x="48" y="38" width="5" height="12" fill="#131B2E" />
            <rect x="50" y="32" width="5" height="7" fill="#F4C29B" />
            {/* Hand & fingers waving */}
            <rect x="52" y="28" width="4" height="4" fill="#F4C29B" />
            <rect x="50" y="29" width="2" height="3" fill="#F4C29B" />
            {/* Neon Pink Cuff */}
            <rect x="49" y="37" width="5" height="2" fill="#FF0055" />
            {/* Motion sparkles */}
            <circle cx="58" cy="28" r="1.5" fill="#00F0FF" className="animate-pulse" />
            <circle cx="55" cy="22" r="1" fill="#FBBF24" />
          </g>
        )}

        {/* STATE: THUMBS-UP */}
        {state === "thumbs-up" && (
          <g>
            {/* Extended arm with thumbs up */}
            <rect x="46" y="44" width="10" height="6" fill="#131B2E" />
            <rect x="52" y="42" width="2" height="8" fill="#FF0055" />
            {/* Fist */}
            <rect x="56" y="43" width="5" height="6" fill="#F4C29B" />
            {/* Thumb pointing up */}
            <rect x="57" y="37" width="3" height="6" fill="#F4C29B" />
            {/* Sparkle star */}
            <polygon
              points="60,34 61,36 63,37 61,38 60,40 59,38 57,37 59,36"
              fill="#FBBF24"
              className="animate-spin"
              style={{ transformOrigin: "60px 37px", animationDuration: "3s" }}
            />
          </g>
        )}

        {/* STATE: CODING */}
        {state === "coding" && (
          <g>
            {/* Holographic mini terminal laptop */}
            <rect x="18" y="52" width="28" height="1" fill="#00F0FF" />
            {/* Hologram Screen */}
            <polygon
              points="20,52 44,52 46,42 18,42"
              fill="url(#cyberGlow)"
              opacity="0.8"
            />
            <rect x="22" y="44" width="20" height="7" stroke="#00F0FF" strokeWidth="0.5" fill="#05070B" opacity="0.9" />
            {/* Code lines on holo screen */}
            <rect x="24" y="46" width="7" height="1" fill="#10B981" />
            <rect x="33" y="46" width="5" height="1" fill="#00F0FF" />
            <rect x="24" y="48" width="11" height="1" fill="#F43F5E" />
            {/* Pixel hands on keyboard */}
            <rect x="22" y="53" width="4" height="3" fill="#F4C29B" />
            <rect x="38" y="53" width="4" height="3" fill="#F4C29B" />
          </g>
        )}

        {/* STATE: TALKING */}
        {state === "talking" && (
          <g>
            {/* Sound wave rings next to head */}
            <path
              d="M 48 34 A 4 4 0 0 1 48 42"
              fill="none"
              stroke="#00F0FF"
              strokeWidth="1.5"
              strokeDasharray="1 1"
            />
            <path
              d="M 52 31 A 8 8 0 0 1 52 45"
              fill="none"
              stroke="#FF0055"
              strokeWidth="1.5"
              strokeDasharray="2 1"
            />
          </g>
        )}
      </svg>
    </div>
  );
}
