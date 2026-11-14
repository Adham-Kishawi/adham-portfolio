export interface SkillCategory {
  titleEn: string;
  titleAr: string;
  icon: string;
  color: string;
  skills: {
    name: string;
    level: string;
    levelAr: string;
    highlight?: boolean;
    descriptionEn: string;
    descriptionAr: string;
  }[];
}

export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    titleEn: "Core Frameworks & Runtimes",
    titleAr: "أطر العمل وبيئات التشغيل الأساسية",
    icon: "Layers",
    color: "#00F0FF",
    skills: [
      {
        name: "Next.js 16 (App Router)",
        level: "Expert",
        levelAr: "متقدم جداً",
        highlight: true,
        descriptionEn: "Server Components (RSC), Streaming, Partial Prerendering, Dynamic Metadata, Edge Handlers",
        descriptionAr: "مكونات الخادم (RSC)، والتحميل التدريجي، والصفحات الديناميكية الفائقة، ومعالجات الحافة"
      },
      {
        name: "React 19",
        level: "Expert",
        levelAr: "متقدم جداً",
        highlight: true,
        descriptionEn: "Actions, useOptimistic, useTransition, Suspense architectures, custom hooks",
        descriptionAr: "أحدث ميزات ريأكت 19، وإدارة الحالة التفاؤلية، واستدعاءات Hooks المتقدمة"
      },
      {
        name: "TypeScript (Strict Mode)",
        level: "Advanced",
        levelAr: "متقدم",
        highlight: true,
        descriptionEn: "Generics, Discriminated Unions, Type Guards, Zod schema inference, zero-any policy",
        descriptionAr: "التحقق الصارم من الأنواع البرمجية، والأنماط المعقدة، والتكامل مع مخططات Zod"
      },
      {
        name: "JavaScript (ESNext)",
        level: "Advanced",
        levelAr: "متقدم",
        descriptionEn: "Modern async patterns, Web Workers, Event Loop mastery, memory profile optimizations",
        descriptionAr: "إتقان البرمجة غير المتزامنة، وWeb Workers، وتحسين استهلاك الذاكرة"
      }
    ]
  },
  {
    titleEn: "Styling & Design Engineering",
    titleAr: "هندسة التصميم والواجهات الحديثة",
    icon: "Palette",
    color: "#F43F5E",
    skills: [
      {
        name: "Tailwind CSS v4",
        level: "Expert",
        levelAr: "متقدم جداً",
        highlight: true,
        descriptionEn: "Modern CSS tokens, container queries, dark mode ergonomics, fluid typography",
        descriptionAr: "تنسيق متقدم عبر توكنز CSS الحديثة، واستجابة فائقة لمختلف أحجام الشاشات"
      },
      {
        name: "shadcn/ui & Radix UI",
        level: "Expert",
        levelAr: "متقدم جداً",
        highlight: true,
        descriptionEn: "Accessible headless primitives, custom theme tokens, compound components",
        descriptionAr: "مكونات عالية الأمان وسهولة الوصول، وبناء أنظمة تصميم خاصة بكل مشروع"
      },
      {
        name: "Bilingual Typography (i18n / RTL)",
        level: "Expert",
        levelAr: "متقدم جداً",
        highlight: true,
        descriptionEn: "Flawless Arabic typography (Cairo, IBM Plex), logical CSS properties, mirror layout transitions",
        descriptionAr: "دعم احترافي كامل للاتجاهين (RTL/LTR)، وخطوط عربية منسقة بدقة طباعية عالية"
      },
      {
        name: "Glassmorphism & Cyber Retro UI",
        level: "Advanced",
        levelAr: "متقدم",
        descriptionEn: "High-contrast dark modes, glowing neon borders, backdrop filters, 3D perspective grids",
        descriptionAr: "جماليات النيون والزجاج الداكن والشبكات ثلاثية الأبعاد بأسلوب السايبربنك العصري"
      }
    ]
  },
  {
    titleEn: "Motion & Gamified Interactions",
    titleAr: "الحركة والتجارب التفاعلية والألعاب",
    icon: "Sparkles",
    color: "#F59E0B",
    skills: [
      {
        name: "Framer Motion",
        level: "Advanced",
        levelAr: "متقدم",
        highlight: true,
        descriptionEn: "layoutId shared element transitions, gestures, drag physics, presence orchestration",
        descriptionAr: "انتقالات العناصر المترابطة عبر الصفحات، وتفاعل السحب والإفلات الفيزيائي"
      },
      {
        name: "GSAP 3 (GreenSock)",
        level: "Advanced",
        levelAr: "متقدم",
        highlight: true,
        descriptionEn: "ScrollTrigger timelines, 3D perspective camera motion, text scrubbing",
        descriptionAr: "تحريك احترافي مرتبط بسكرول الشاشة، وتأثيرات بصرية عالية السلاسة (60 FPS)"
      },
      {
        name: "Web Audio API",
        level: "Proficient",
        levelAr: "كفء ومتقن",
        highlight: true,
        descriptionEn: "Real-time sound synthesis, 8-bit chiptune melodies, audio feedback loops without external assets",
        descriptionAr: "توليد نغمات وأصوات أركيد 8 بت تفاعلية برمجياً من داخل المتصفح مباشرة"
      },
      {
        name: "Visx & D3.js Data Viz",
        level: "Proficient",
        levelAr: "كفء ومتقن",
        descriptionEn: "Sankey flow diagrams, interactive heatmaps, high-performance telemetry charts",
        descriptionAr: "تمثيل البيانات المعقدة ومخططات التدفق والخرائط الحرارية التفاعلية"
      }
    ]
  },
  {
    titleEn: "Data Layer & Cloud Architecture",
    titleAr: "طبقة البيانات والخدمات السحابية",
    icon: "Database",
    color: "#10B981",
    skills: [
      {
        name: "Supabase & PostgreSQL",
        level: "Advanced",
        levelAr: "متقدم",
        highlight: true,
        descriptionEn: "SSR auth, Row Level Security (RLS), real-time change channels, storage buckets",
        descriptionAr: "مصادقة آمنة، وأذونات صارمة على مستوى الصفوف، وقنوات إشعارات لحظية"
      },
      {
        name: "Prisma ORM",
        level: "Advanced",
        levelAr: "متقدم",
        descriptionEn: "Schema modeling, relations, database migrations, connection pooling",
        descriptionAr: "نمذجة البيانات والعلاقات، وإدارة الترحيلات البرمجية لقواعد البيانات"
      },
      {
        name: "Cloudflare & Vercel Edge",
        level: "Advanced",
        levelAr: "متقدم",
        descriptionEn: "Edge functions, Vinext runtime, CDN caching, custom domains, automated CI/CD",
        descriptionAr: "استضافة الحافة السحابية، واستجابة فائقة السرعة، وأتمتة النشر عبر GitHub"
      },
      {
        name: "Meta Cloud API & AI Integrations",
        level: "Proficient",
        levelAr: "كفء ومتقن",
        descriptionEn: "WhatsApp Business Cloud webhooks, OpenRouter AI streaming, Human-in-the-Loop workflows",
        descriptionAr: "ربط واجهات واتساب للأعمال، وتدفق ردود نماذج الذكاء الاصطناعي مع طوابير المراجعة"
      }
    ]
  }
];
