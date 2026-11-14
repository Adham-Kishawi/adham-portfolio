export type Language = "en" | "ar";

export interface Translations {
  nav: {
    work: string;
    about: string;
    brand: string;
    arsenal: string;
    services: string;
    terminal: string;
    letsTalk: string;
    availableForWork: string;
    soundTitle: string;
    sfxLabel: string;
    bgmLabel: string;
    volumeLabel: string;
    coinsFound: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    startTour: string;
    exploreWork: string;
    copyEmail: string;
    emailCopied: string;
    metric1Label: string;
    metric1Value: string;
    metric2Label: string;
    metric2Value: string;
    metric3Label: string;
    metric3Value: string;
    statusLabel: string;
  };
  projects: {
    sectionNum: string;
    title: string;
    subtitle: string;
    viewCaseStudy: string;
    closeCaseStudy: string;
    viewLiveDemo: string;
    viewGitHub: string;
    challengeTitle: string;
    solutionTitle: string;
    outcomeTitle: string;
    keyHighlights: string;
    nextProject: string;
    metricsTitle: string;
    allProjectsBadge: string;
  };
  about: {
    sectionNum: string;
    title: string;
    subtitle: string;
    bioParagraph1: string;
    bioParagraph2: string;
    bioParagraph3: string;
    locationBadge: string;
    timelineTitle: string;
    downloadCv: string;
  };
  brand: {
    sectionNum: string;
    title: string;
    subtitle: string;
    primeTagline: string;
    primeDesc: string;
    craftTagline: string;
    craftDesc: string;
    statCollections: string;
    statDesigns: string;
    statCommunity: string;
  };
  arsenal: {
    sectionNum: string;
    title: string;
    subtitle: string;
    githubTitle: string;
    githubSubtitle: string;
    viewGithubProfile: string;
    publicRepos: string;
    contributionsLabel: string;
  };
  services: {
    sectionNum: string;
    title: string;
    subtitle: string;
    calculatorTitle: string;
    calculatorSubtitle: string;
    projectTypeLabel: string;
    scopeLabel: string;
    timelineLabel: string;
    estimatedDelivery: string;
    getQuoteWhatsApp: string;
    getQuoteEmail: string;
    stepsTitle: string;
    steps: {
      stepNum: string;
      title: string;
      desc: string;
      deliverable: string;
    }[];
  };
  terminal: {
    sectionNum: string;
    title: string;
    subtitle: string;
    welcomeMsg: string;
    helpPrompt: string;
    hirePrompt: string;
  };
  tour: {
    headerTag: string;
    chapterPrefix: string;
    skip: string;
    prev: string;
    next: string;
    finish: string;
    chapters: {
      title: string;
      message: string;
      targetId: string;
    }[];
  };
  coinHunt: {
    modalTitle: string;
    modalSubtitle: string;
    badgeName: string;
    badgeDesc: string;
    allCoinsFound: string;
    claimReward: string;
    coinCollected: string;
    coinsProgress: string;
  };
  footer: {
    localTimePrefix: string;
    coordinates: string;
    allRightsReserved: string;
    builtWith: string;
    backToTop: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      work: "01 Work",
      about: "02 About",
      brand: "03 Brand",
      arsenal: "04 Arsenal",
      services: "05 Process",
      terminal: "06 Terminal",
      letsTalk: "Let's Talk",
      availableForWork: "Available for new projects",
      soundTitle: "Retro Audio System",
      sfxLabel: "SFX Audio",
      bgmLabel: "Synth BGM",
      volumeLabel: "Volume",
      coinsFound: "Coins"
    },
    hero: {
      badge: "MID-LEVEL FRONT-END ENGINEER & SOLUTIONS ARCHITECT",
      titleLine1: "Architecting High-Performance Web Apps",
      titleLine2: "With Cyber-Precision & Gamified Delight.",
      subtitle: "Hi, I'm Adham Kishawi (أدهم كيشاوي) — based in Ismailia, Egypt. I engineer enterprise-grade Next.js 16 systems, fluid GSAP animations, accessible UI frameworks, and high-concurrency event telemetry.",
      startTour: "Start ADHAM.EXE Tour",
      exploreWork: "Explore Work",
      copyEmail: "Copy Email",
      emailCopied: "Email Copied!",
      metric1Label: "Lighthouse Performance",
      metric1Value: "99+",
      metric2Label: "Production Apps Built",
      metric2Value: "15+",
      metric3Label: "Check-in Telemetry Speed",
      metric3Value: "< 2.8s",
      statusLabel: "Open for Mid-Level roles & high-impact contracts"
    },
    projects: {
      sectionNum: "01 // CASE STUDIES",
      title: "Selected Enterprise Work",
      subtitle: "Real-world architectures extracted directly from my local engineering environments — built for resilience, speed, and business outcomes.",
      viewCaseStudy: "Deep Case Study",
      closeCaseStudy: "Close Case Study",
      viewLiveDemo: "Live Preview",
      viewGitHub: "GitHub Repo",
      challengeTitle: "01 The Architectural Challenge",
      solutionTitle: "02 The Engineering Solution",
      outcomeTitle: "03 Business & Performance Outcome",
      keyHighlights: "Key Technical Highlights",
      nextProject: "Next Case Study",
      metricsTitle: "Verified System Telemetry",
      allProjectsBadge: "PRODUCTION GRADE"
    },
    about: {
      sectionNum: "02 // BACKGROUND",
      title: "The Engineering Story",
      subtitle: "From building algorithmic web experiments to delivering national automotive summit software and clinic OS architectures.",
      bioParagraph1: "I am a Mid-Level Front-End Engineer and Solutions Architect based in Ismailia, Egypt. My engineering philosophy combines strict type safety, 60fps micro-interactions, and resilient client-side state with ruthless performance optimization.",
      bioParagraph2: "A proud graduate of the intensive Software Engineering track at the Information Technology Institute (ITI), I honed foundational disciplines in algorithms, object-oriented design, and distributed web patterns. Soon after, I led product and edge architecture for 'Sport Cycle', earning finalist honors at the Creativa Ismailia Startup Sprint Demo Day.",
      bioParagraph3: "Beyond code, I founded PRIME — an independent apparel brand where I orchestrate visual concept design, streetwear drops, and engineered our bespoke Kanban operations CRM from scratch.",
      locationBadge: "Ismailia, Egypt • GMT+2",
      timelineTitle: "Career Milestones & Education",
      downloadCv: "Download Full Resume"
    },
    brand: {
      sectionNum: "03 // CREATIVE LEADERSHIP",
      title: "Brand Architecture & Community",
      subtitle: "Bridging the gap between creative visual identity, physical apparel design, and digital tooling.",
      primeTagline: "PRIME Apparel — Streetwear Identity & Operations Engine",
      primeDesc: "Founded an Egyptian streetwear and university merchandise label. Directed creative visual assets, 3D clothing concepts, winter collections, and built a custom React operations CRM that eliminated inventory leaks.",
      craftTagline: "Craft Crew Platform & Event Operations",
      craftDesc: "Collaborating on engineering sovereign digital summit infrastructure, ticketing telemetry, and high-concurrency check-in experiences for leading regional conferences.",
      statCollections: "Seasonal Drops",
      statDesigns: "Custom 3D Concepts",
      statCommunity: "Local Mentorship"
    },
    arsenal: {
      sectionNum: "04 // TECH STACK",
      title: "The Battle-Tested Arsenal",
      subtitle: "Strictly modern tools curated for type safety, zero layout shifts, and sub-100ms client responses.",
      githubTitle: "Live GitHub Telemetry",
      githubSubtitle: "Real-time activity and repository metrics fetched directly from @Adham-Kishawi.",
      viewGithubProfile: "View on GitHub",
      publicRepos: "Public Repositories",
      contributionsLabel: "Continuous Git Delivery"
    },
    services: {
      sectionNum: "05 // PRODUCTION PROCESS",
      title: "How I Turn Ideas Into Reality",
      subtitle: "A proven, rigorous 4-step engineering lifecycle guaranteeing 95+ Lighthouse scores and zero technical debt.",
      calculatorTitle: "Interactive Project Estimator",
      calculatorSubtitle: "Calculate a ballpark timeline and scope for your upcoming venture, then send me an instant direct brief.",
      projectTypeLabel: "Project Type",
      scopeLabel: "Target Scope",
      timelineLabel: "Estimated Delivery Window",
      estimatedDelivery: "Delivery Window",
      getQuoteWhatsApp: "Request via WhatsApp",
      getQuoteEmail: "Send Direct Brief",
      stepsTitle: "The 4-Step Engineering Protocol",
      steps: [
        {
          stepNum: "01",
          title: "Discovery & System Architecture",
          desc: "Deep-dive into business workflows, edge cases, user personas, API boundaries, and database entity relationships.",
          deliverable: "Architecture Blueprint & Technical RFC"
        },
        {
          stepNum: "02",
          title: "Design Engineering & Design Systems",
          desc: "Translating brand identity into accessible, headless component tokens with dark mode ergonomics and fluid typography.",
          deliverable: "Tailwind / Shadcn Modular Design System"
        },
        {
          stepNum: "03",
          title: "Full-Stack Front-End Engineering",
          desc: "Building with Next.js 16 App Router, React 19 RSC, strict TypeScript, offline-first caching, and GSAP/Framer animations.",
          deliverable: "Production Next.js Codebase"
        },
        {
          stepNum: "04",
          title: "Audit, Hardening & Zero-Downtime Deploy",
          desc: "Stress-testing with Vitest, automated accessibility checks, Lighthouse 99+ optimization, and automated Vercel/Cloudflare CI/CD.",
          deliverable: "Live Deployed Web Application"
        }
      ]
    },
    terminal: {
      sectionNum: "06 // DEVELOPER TERMINAL",
      title: "adham.sh Interactive CLI",
      subtitle: "For recruiters and fellow engineers who prefer exploring profiles through a Unix terminal shell.",
      welcomeMsg: "AdhamOS v2.4.0 (x86_64-pc-none-elf)\nType 'help' to inspect available system commands, or 'sudo hire-adham' for instant scheduling.",
      helpPrompt: "Available commands: about, projects, skills, contact, coin, clear, date, whoami, sudo hire-adham",
      hirePrompt: "Opening direct scheduling channel..."
    },
    tour: {
      headerTag: "ADHAM.EXE // INTERACTIVE NAVIGATOR",
      chapterPrefix: "CHAPTER",
      skip: "Skip Tour [Esc]",
      prev: "◀ Prev",
      next: "Next ▶",
      finish: "Finish Tour 🚀",
      chapters: [
        {
          title: "The Command Deck",
          message: "Welcome to my portfolio! I'm Adham Kishawi — Mid-Level Front-End Engineer & Web Developer. Notice the retro audio controls in the top right to enable authentic 8-bit sound effects!",
          targetId: "hero-section"
        },
        {
          title: "Flagship Case Studies",
          message: "Here are my real-world applications including DOCTECH (Clinic OS with WhatsApp AI), the 11th Egypt Automotive Summit platform, and the PRIME brand operations engine.",
          targetId: "projects-section"
        },
        {
          title: "Hidden Coin Gamification",
          message: "There are 8 golden pixel coins hidden across the page! Find all 8 to unlock the prestigious 'Explorer 🏆' achievement badge with sound effects and confetti.",
          targetId: "coin-counter-badge"
        },
        {
          title: "The Engineering Story",
          message: "Discover my journey through ITI intensive software training, Creativa Ismailia startup sprint, and scaling modern web applications.",
          targetId: "about-section"
        },
        {
          title: "PRIME Brand & Leadership",
          message: "I founded PRIME streetwear and directed its visual identity, winter apparel collections, and custom operations CRM software.",
          targetId: "brand-section"
        },
        {
          title: "Tech Arsenal & Live GitHub",
          message: "Inspect my categorized skill breakdown (Next.js 16, React 19, TypeScript, GSAP, Supabase) and live metrics pulled directly from my GitHub profile.",
          targetId: "arsenal-section"
        },
        {
          title: "4-Step Production Protocol",
          message: "Review how I guarantee 99+ Lighthouse scores from discovery to deployment, with an interactive project cost & timeline estimator.",
          targetId: "process-section"
        },
        {
          title: "adham.sh Developer Terminal",
          message: "You can control my portfolio via code! Try running commands like 'about', 'skills', or the recruiter shortcut 'sudo hire-adham'.",
          targetId: "terminal-section"
        }
      ]
    },
    coinHunt: {
      modalTitle: "ACHIEVEMENT UNLOCKED!",
      modalSubtitle: "You collected all 8 hidden pixel coins across the portfolio!",
      badgeName: "Master Explorer 🏆",
      badgeDesc: "Awarded for exceptional curiosity, attention to detail, and thorough exploration of Adham Kishawi's work.",
      allCoinsFound: "8 / 8 Coins Discovered",
      claimReward: "Schedule VIP Chat with Adham",
      coinCollected: "+100 XP Coin Found!",
      coinsProgress: "Coins Collected"
    },
    footer: {
      localTimePrefix: "ISMAILIA, EGYPT",
      coordinates: "30.5965° N, 32.2715° E",
      allRightsReserved: "All rights reserved.",
      builtWith: "Engineered with Next.js 16, TypeScript, Tailwind CSS v4, GSAP & Web Audio API",
      backToTop: "Return to Top ↑"
    }
  },
  ar: {
    nav: {
      work: "٠١ الأعمال",
      about: "٠٢ عني",
      brand: "٠٣ البراند",
      arsenal: "٠٤ الأدوات",
      services: "٠٥ المنهجية",
      terminal: "٠٦ الطرفية",
      letsTalk: "تواصل معي",
      availableForWork: "متاح للمشاريع الجديدة",
      soundTitle: "نظام المؤثرات الصوتية",
      sfxLabel: "المؤثرات الصوتية",
      bgmLabel: "موسيقى السنث",
      volumeLabel: "مستوى الصوت",
      coinsFound: "العملات"
    },
    hero: {
      badge: "مهندس واجهات أمامية ومعماري حلول ويب",
      titleLine1: "هندسة وبناء تطبيقات ويب فائقة السرعة",
      titleLine2: "بدقة تقنية وجماليات تفاعلية استثنائية.",
      subtitle: "أهلاً بك، أنا أدهم كيشاوي — من الإسماعيلية، مصر. أهندس أنظمة Next.js 16 للمؤسسات، ورسوم GSAP فائقة السلاسة، وأنظمة تصميم تفاعلية، ومنصات مؤتمرات كبرى.",
      startTour: "بدء جولة ADHAM.EXE",
      exploreWork: "استكشف المشاريع",
      copyEmail: "نسخ البريد",
      emailCopied: "تم نسخ البريد بنجاح!",
      metric1Label: "مؤشر أداء Lighthouse",
      metric1Value: "99+",
      metric2Label: "تطبيقات حية منجزة",
      metric2Value: "+15",
      metric3Label: "سرعة إصدار تذاكر الدخول",
      metric3Value: "أقل من 2.8 ثانية",
      statusLabel: "متاح لعروض التوظيف والتعاقدات التقنية الكبرى"
    },
    projects: {
      sectionNum: "٠١ // دراسات الجدوى والأنظمة",
      title: "أبرز المشاريع والتطبيقات",
      subtitle: "مشاريع حقيقية تم استخراجها مباشرة من بيئات عملي البرمجية — صُممت لتحمل ضغط الاستخدام العالي وتحقيق أقصى سرعة وقيمة تجارية.",
      viewCaseStudy: "تفاصيل دراسة المشروع",
      closeCaseStudy: "إغلاق دراسة المشروع",
      viewLiveDemo: "معاينة حية",
      viewGitHub: "مستودع GitHub",
      challengeTitle: "٠١ التحدي الهندسي والتشغيلي",
      solutionTitle: "٠٢ الحل البرمجي والمعماري",
      outcomeTitle: "٠٣ النتائج المحققة ومؤشرات الأداء",
      keyHighlights: "أهم الركائز المعمارية والتقنية",
      nextProject: "المشروع التالي",
      metricsTitle: "قياسات الأداء المعتمدة",
      allProjectsBadge: "جاهز للإنتاج الفعلي"
    },
    about: {
      sectionNum: "٠٢ // السيرة المهنية",
      title: "رحلتي في هندسة البرمجيات",
      subtitle: "من بناء خوارزميات الويب التفاعلية إلى تطوير برمجيات قمة السيارات السنوية ونظام إدارة العيادات الشامل.",
      bioParagraph1: "أنا مهندس واجهات أمامية ومعماري حلول تقنية أقيم في مدينة الإسماعيلية، مصر. فلسفتي الهندسية ترتكز على التنميط الصارم للبيانات (TypeScript)، وسلاسة الحركة بمعدل 60 إطاراً في الثانية، مع تحسين استثنائي لسرعة تحميل وتجاوب الواجهات.",
      bioParagraph2: "خريج المسار التدريبي الاحترافي المكثف لهندسة البرمجيات بمعهد تكنولوجيا المعلومات (ITI)، حيث صقلت مهاراتي في الخوارزميات، وهندسة البرمجيات كائنية التوجه (OOP)، والأنظمة السحابية الموزعة. كما قدت تطوير وتصميم منصة 'Sport Cycle' وتأهلت للنهائيات في يوم العرض الختامي لحاضنة كرياتيفا الإسماعيلية.",
      bioParagraph3: "إلى جانب البرمجة، أسست علامة PRIME للأزياء المستقلة، حيث قدت الإشراف الإبداعي على التصميمات والهوية البصرية، وطوّرت نظام CRM مخصص لإدارة عمليات التصنيع والمخزون وحسابات الموردين بالكامل.",
      locationBadge: "الإسماعيلية، مصر • توقيت القاهرة",
      timelineTitle: "المحطات المهنية والمؤهلات الأكاديمية",
      downloadCv: "تحميل السيرة الذاتية (CV)"
    },
    brand: {
      sectionNum: "٠٣ // القيادة الإبداعية",
      title: "بناء العلامات التجارية والمجتمع التقني",
      subtitle: "الربط بين التصميم البصري، والمنتجات الملموسة، والحلول البرمجية الذاتية.",
      primeTagline: "برايم للأزياء — الهوية البصرية ومحرك إدارة العمليات",
      primeDesc: "تأسيس علامة أزياء مصرية مستقلة وتصميم هويتها ومجموعاتها الشتوية وتصميمات 3D، مع بناء نظام CRM متكامل لإدارة خطوط الإنتاج والمبيعات والمخزون.",
      craftTagline: "منصة كرافت كرو وتشغيل الفعاليات الكبرى",
      craftDesc: "المساهمة في هندسة البنية التحتية لتسجيل الحضور، وتحليلات المؤتمرات اللحظية، وتوليد الشارات السريعة لأكبر مؤتمرات الصناعة في المنطقة.",
      statCollections: "مجموعات موسمية",
      statDesigns: "تصميمات ثلاثية الأبعاد",
      statCommunity: "إرشاد المطورين الجدد"
    },
    arsenal: {
      sectionNum: "٠٤ // الترسانة التقنية",
      title: "أحدث الأدوات والتقنيات البرمجية",
      subtitle: "أدوات متطورة ومختارة بعناية لضمان سلامة الأكواد، وانعدام تشوه التصميم، وسرعة استجابة فائقة للعملاء.",
      githubTitle: "نشاط مستودعات GitHub الحي",
      githubSubtitle: "بيانات وإحصائيات مباشرة يتم جلبها لحظياً من حسابي على @Adham-Kishawi.",
      viewGithubProfile: "زيارة ملف GitHub",
      publicRepos: "المستودعات العامة",
      contributionsLabel: "التزام مستمر بالبناء والشحن السريع"
    },
    services: {
      sectionNum: "٠٥ // منهجية العمل",
      title: "كيف أحول الأفكار إلى منصات حية",
      subtitle: "منهجية هندسية احترافية من 4 خطوات تضمن تحقيق 95+ على Lighthouse وانعدام الديون التقنية.",
      calculatorTitle: "حاسبة تقدير المشاريع التفاعلية",
      calculatorSubtitle: "حدد نوع مشروعك وحجم متطلباته للحصول على تقدير فوري للجدول الزمني ومراسلتي بملخص المشروع.",
      projectTypeLabel: "نوع المشروع",
      scopeLabel: "نطاق العمل المطلوب",
      timelineLabel: "المدة الزمنية التقديرية",
      estimatedDelivery: "فترة الإنجاز المتوقعة",
      getQuoteWhatsApp: "طلب تفاصيل عبر واتساب",
      getQuoteEmail: "إرسال ملخص بالبريد",
      stepsTitle: "البروتوكول الهندسي المتبع",
      steps: [
        {
          stepNum: "٠١",
          title: "استكشاف المتطلبات والمعمارية",
          desc: "تحليل دقيق لسير العمل التجاري، وحالات الاستخدام، وحدود واجهات API، ونمذجة قواعد البيانات.",
          deliverable: "المخطط المعماري والمواصفات الفنية"
        },
        {
          stepNum: "٠٢",
          title: "هندسة التصميم ونظام المكونات",
          desc: "تحويل الهوية إلى مكونات متوافقة مع سهولة الوصول، وأنماط الوضع الليلي والخطوط المتجاوبة.",
          deliverable: "نظام تصميم متكامل عبر Tailwind و Shadcn"
        },
        {
          stepNum: "٠٣",
          title: "التطوير البرمجي الشامل للواجهات",
          desc: "البناء بأحدث إصدارات Next.js 16 و React 19، والكتابة بـ TypeScript الصارم، وتحريك GSAP.",
          deliverable: "قاعدة كود برمجية متكاملة وجاهزة للإنتاج"
        },
        {
          stepNum: "٠٤",
          title: "الفحص واختبار الأداء والنشر السحابي",
          desc: "اختبارات Vitest، والتأكد من تحقيق 99+ على Lighthouse، والأتمتة عبر Vercel / Cloudflare.",
          deliverable: "منصة ويب حية ومستقرة عالمياً"
        }
      ]
    },
    terminal: {
      sectionNum: "٠٦ // الطرفية البرمجية",
      title: "طرفية adham.sh التفاعلية",
      subtitle: "لمسؤولي التوظيف والمهندسين الذين يفضلون استكشاف الملفات عبر أوامر سطر الأوامر (CLI).",
      welcomeMsg: "نظام AdhamOS v2.4.0 (x86_64-pc-none-elf)\nاكتب 'help' لعرض الأوامر المتاحة، أو 'sudo hire-adham' لجدولة مقابلة عمل مباشرة.",
      helpPrompt: "الأوامر المتاحة: about, projects, skills, contact, coin, clear, date, whoami, sudo hire-adham",
      hirePrompt: "جاري فتح قناة التواصل المباشرة لجدولة المقابلة..."
    },
    tour: {
      headerTag: "مرشد ADHAM.EXE التفاعلي",
      chapterPrefix: "المحطة",
      skip: "تخطي الجولة [Esc]",
      prev: "◀ السابق",
      next: "التالي ▶",
      finish: "إنهاء الجولة 🚀",
      chapters: [
        {
          title: "منصة القيادة والترحيب",
          message: "أهلاً بك في موقعي الشخصي! أنا أدهم كيشاوي — مهندس واجهات أمامية ومطور ويب. يمكنك تفعيل أصوات الأركيد 8-bit من قائمة الصوت في الأعلى!",
          targetId: "hero-section"
        },
        {
          title: "أبرز دراسات المشاريع",
          message: "استعرض مشروعاتي الحقيقية مثل نظام دوكتيك الطبي (مدعوم بذكاء اصطناعي لواتساب)، ومنصة قمة السيارات السنوية، ونظام برايم للعمليات.",
          targetId: "projects-section"
        },
        {
          title: "لعبة العملات الذهبية الخفية",
          message: "هناك 8 عملات بكسل ذهبية مخبأة داخل أقسام الموقع! اعثر عليها جميعاً لفتح وسام 'المستكشف الخارق 🏆' مع احتفال بصري وصوتي.",
          targetId: "coin-counter-badge"
        },
        {
          title: "رحلتي وخلفيتي الهندسية",
          message: "تعرف على مساري في تدريب معهد ITI المكثف، وتجربة حاضنة كرياتيفا الإسماعيلية، وشغفي ببناء منتجات ويب فائقة الأداء.",
          targetId: "about-section"
        },
        {
          title: "علامة برايم والقيادة الإبداعية",
          message: "أسست علامة PRIME للأزياء وصممت هويتها البصرية وتصميمات ثلاثية الأبعاد ونظام CRM متكامل لإدارة الإنتاج والمخازن.",
          targetId: "brand-section"
        },
        {
          title: "ترسانة المهارات ونشاط GitHub",
          message: "تفقد مهاراتي التقنية المتقدمة (Next.js 16, React 19, TypeScript, GSAP, Supabase) مع بيانات لحظية مستمدة من حسابي على GitHub.",
          targetId: "arsenal-section"
        },
        {
          title: "خطوات تنفيذ المشاريع والحاسبة",
          message: "تعرف على الخطوات الأربع لضمان جودة المشاريع، مع حاسبة تفاعلية لتقدير تكلفة وزمن أي مشروع ومراسلتي فورياً.",
          targetId: "process-section"
        },
        {
          title: "طرفية المطورين adham.sh",
          message: "يمكنك استكشاف الموقع عبر الأوامر البرمجية! جرب كتابة 'about' أو 'skills' أو الأمر السري لمسؤولي التوظيف 'sudo hire-adham'.",
          targetId: "terminal-section"
        }
      ]
    },
    coinHunt: {
      modalTitle: "إنجاز استثنائي مكتمل!",
      modalSubtitle: "لقد نجحت في العثور على جميع العملات الذهبية الثماني المخفية في الموقع!",
      badgeName: "المستكشف الخارق 🏆",
      badgeDesc: "وسام شرفي يُمنح لشدة الملاحظة والاهتمام بالتفاصيل واستكشاف أعمال أدهم كيشاوي بالكامل.",
      allCoinsFound: "تم اكتشاف 8 / 8 عملات ذهبية",
      claimReward: "جدولة محادثة VIP مباشرة مع أدهم",
      coinCollected: "تم العثور على عملة +100 XP!",
      coinsProgress: "العملات المكتشفة"
    },
    footer: {
      localTimePrefix: "الإسماعيلية، مصر",
      coordinates: "30.5965° N, 32.2715° E",
      allRightsReserved: "جميع الحقوق محفوظة.",
      builtWith: "تم التطوير باستخدام Next.js 16 و TypeScript و Tailwind v4 و GSAP و Web Audio API",
      backToTop: "العودة للأعلى ↑"
    }
  }
};
