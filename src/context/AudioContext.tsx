"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { retroAudio } from "@/lib/audio/RetroAudio";

interface AudioContextType {
  sfxEnabled: boolean;
  setSfxEnabled: (v: boolean) => void;
  bgmEnabled: boolean;
  setBgmEnabled: (v: boolean) => void;
  volume: number;
  setVolume: (v: number) => void;
  playCoin: () => void;
  playClick: () => void;
  playStart: () => void;
  playDialog: () => void;
  playBadge: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [sfxEnabled, setSfxState] = useState<boolean>(true);
  const [bgmEnabled, setBgmState] = useState<boolean>(false);
  const [volume, setVolumeState] = useState<number>(0.5);

  useEffect(() => {
    const savedSfx = localStorage.getItem("ak_sfx");
    if (savedSfx !== null) {
      const val = savedSfx === "true";
      setSfxState(val);
      retroAudio.setSfxEnabled(val);
    }
  }, []);

  const setSfxEnabled = (v: boolean) => {
    setSfxState(v);
    localStorage.setItem("ak_sfx", String(v));
    retroAudio.setSfxEnabled(v);
    if (v) retroAudio.playClick();
  };

  const setBgmEnabled = (v: boolean) => {
    setBgmState(v);
    retroAudio.setBgmEnabled(v);
  };

  const setVolume = (v: number) => {
    setVolumeState(v);
    retroAudio.setVolume(v);
  };

  const playCoin = () => retroAudio.playCoin();
  const playClick = () => retroAudio.playClick();
  const playStart = () => retroAudio.playStart();
  const playDialog = () => retroAudio.playDialog();
  const playBadge = () => retroAudio.playBadge();

  return (
    <AudioContext.Provider
      value={{
        sfxEnabled,
        setSfxEnabled,
        bgmEnabled,
        setBgmEnabled,
        volume,
        setVolume,
        playCoin,
        playClick,
        playStart,
        playDialog,
        playBadge
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error("useAudio must be used within AudioProvider");
  return ctx;
}
