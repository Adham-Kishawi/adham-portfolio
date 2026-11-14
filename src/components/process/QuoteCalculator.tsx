"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useAudio } from "@/context/AudioContext";
import { Calculator, MessageSquare, Mail, Sparkles, Clock, CheckCircle } from "lucide-react";

export function QuoteCalculator() {
  const { t, lang } = useLanguage();
  const { playClick } = useAudio();

  const [projectType, setProjectType] = useState<string>("saas");
  const [scope, setScope] = useState<string>("production");

  const projectTypes = [
    { id: "saas", nameEn: "SaaS Web Platform (Next.js 16)", nameAr: "منصة ويب سحابية SaaS (Next.js 16)", baseWeeks: 3 },
    { id: "erp", nameEn: "Enterprise ERP / Clinic System", nameAr: "نظام إدارة مؤسسي / نظام عيادات ERP", baseWeeks: 4 },
    { id: "landing", nameEn: "High-Converting Creative Portfolio", nameAr: "موقع تعريفي وبورتفوليو إبداعي", baseWeeks: 1.5 },
    { id: "ecommerce", nameEn: "E-Commerce & Brand CRM", nameAr: "متجر إلكتروني ومنظومة إدارة الطلبات", baseWeeks: 3.5 }
  ];

  const scopeLevels = [
    { id: "mvp", nameEn: "MVP Prototype (Speed to Market)", nameAr: "نموذج أولي سريع (MVP)", mult: 1 },
    { id: "production", nameEn: "Full Production Platform (Design + Code)", nameAr: "منصة إنتاجية متكاملة (تصميم + كود)", mult: 1.4 },
    { id: "enterprise", nameEn: "Enterprise System (Multi-tenant + Realtime)", nameAr: "منظومة مؤسسية متعددة الصلاحيات", mult: 2 }
  ];

  const currentType = projectTypes.find((p) => p.id === projectType) || projectTypes[0];
  const currentScope = scopeLevels.find((s) => s.id === scope) || scopeLevels[0];

  const estimatedWeeks = Math.round(currentType.baseWeeks * currentScope.mult * 10) / 10;
  const deliveryWindow = `${Math.floor(estimatedWeeks)} - ${Math.ceil(estimatedWeeks + 1)} ${
    lang === "ar" ? "أسابيع" : "weeks"
  }`;

  const messageText = `Hi Adham! I would like to build a ${currentType.nameEn} with scope level: ${currentScope.nameEn}. Estimated timeline: ~${deliveryWindow}. Let's discuss details!`;
  const whatsappUrl = `https://wa.me/201016629983?text=${encodeURIComponent(messageText)}`;
  const mailtoUrl = `mailto:Adhamkishawi@gmail.com?subject=Project%20Inquiry%20-%20${encodeURIComponent(
    currentType.nameEn
  )}&body=${encodeURIComponent(messageText)}`;

  return (
    <div className="rounded-2xl bg-slate-950/90 border-2 border-cyan-500/30 p-6 sm:p-8 shadow-[0_0_35px_rgba(0,240,255,0.15)]">
      <div className="flex items-center gap-2 mb-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
        <Calculator className="w-4 h-4" />
        <span>{t.services.calculatorTitle}</span>
      </div>

      <h3 className="text-xl sm:text-2xl font-black text-slate-100 mb-2">
        {t.services.calculatorTitle}
      </h3>
      <p className="text-xs sm:text-sm text-slate-400 mb-6 font-sans">
        {t.services.calculatorSubtitle}
      </p>

      {/* Select Project Type */}
      <div className="mb-6">
        <label className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider">
          {t.services.projectTypeLabel}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {projectTypes.map((pt) => (
            <button
              key={pt.id}
              onClick={() => {
                playClick();
                setProjectType(pt.id);
              }}
              className={`p-3 rounded-xl text-left border text-xs font-mono transition-all cursor-pointer ${
                projectType === pt.id
                  ? "bg-cyan-950/60 border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.25)] font-bold"
                  : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200"
              }`}
            >
              {lang === "ar" ? pt.nameAr : pt.nameEn}
            </button>
          ))}
        </div>
      </div>

      {/* Select Scope */}
      <div className="mb-6">
        <label className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider">
          {t.services.scopeLabel}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {scopeLevels.map((sl) => (
            <button
              key={sl.id}
              onClick={() => {
                playClick();
                setScope(sl.id);
              }}
              className={`p-3 rounded-xl text-left border text-xs font-mono transition-all cursor-pointer ${
                scope === sl.id
                  ? "bg-pink-950/60 border-pink-400 text-pink-300 shadow-[0_0_12px_rgba(255,0,85,0.25)] font-bold"
                  : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200"
              }`}
            >
              {lang === "ar" ? sl.nameAr : sl.nameEn}
            </button>
          ))}
        </div>
      </div>

      {/* Output Estimation Box */}
      <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-mono text-slate-400 block">
              {t.services.estimatedDelivery}
            </span>
            <span className="text-xl sm:text-2xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-200">
              {deliveryWindow}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
          <CheckCircle className="w-4 h-4" />
          <span>95+ Lighthouse Score Guaranteed</span>
        </div>
      </div>

      {/* Action Buttons: WhatsApp & Email */}
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          onClick={playClick}
          className="flex-1 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>{t.services.getQuoteWhatsApp}</span>
        </a>

        <a
          href={mailtoUrl}
          onClick={playClick}
          className="flex-1 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 text-cyan-400 font-mono text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(0,240,255,0.15)]"
        >
          <Mail className="w-4 h-4" />
          <span>{t.services.getQuoteEmail}</span>
        </a>
      </div>
    </div>
  );
}
