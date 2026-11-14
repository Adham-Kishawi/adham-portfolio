export interface ProjectCaseStudy {
  id: string;
  slug: string;
  titleEn: string;
  titleAr: string;
  taglineEn: string;
  taglineAr: string;
  category: "Full-Stack Enterprise" | "Creative UI/UX" | "E-Commerce" | "SaaS MVP";
  year: string;
  roleEn: string;
  roleAr: string;
  clientEn: string;
  clientAr: string;
  techStack: string[];
  metrics: { labelEn: string; labelAr: string; value: string }[];
  accentColor: string;
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  challengeEn: string;
  challengeAr: string;
  solutionEn: string;
  solutionAr: string;
  outcomeEn: string;
  outcomeAr: string;
  architectureHighlightsEn: string[];
  architectureHighlightsAr: string[];
  mockupType: "erp-dashboard" | "event-telemetry" | "kanban-crm" | "marketplace" | "weather-dashboard" | "luxury-perfume";
}

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    id: "doctech-os",
    slug: "doctech-hospital-erp",
    titleEn: "DOCTECH — Clinic Management OS",
    titleAr: "دوكتيك — نظام إدارة العيادات والمراكز الطبية",
    taglineEn: "Multi-tenant medical operating system with Meta WhatsApp AI booking agent and real-time clinical workflows.",
    taglineAr: "نظام تشغيل طبي سحابي متعدد المنشآت مدعوم بوكيل ذكاء اصطناعي لحجوزات واتساب وإدارة ملفات المرضى.",
    category: "Full-Stack Enterprise",
    year: "2026",
    roleEn: "Lead Front-End Architect & Solutions Engineer",
    roleAr: "معماري واجهات أمامية ومطور حلول تقنية",
    clientEn: "DOCTECH Health Tech Group",
    clientAr: "مجموعة دوكتيك للحلول الطبية",
    techStack: [
      "Next.js 16 (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Supabase SSR",
      "Prisma ORM",
      "Meta WhatsApp Cloud API",
      "OpenRouter AI (Qwen 3.5)",
      "Vitest"
    ],
    metrics: [
      { labelEn: "Zero Double-Bookings", labelAr: "انعدام تضارب المواعيد", value: "100%" },
      { labelEn: "Drop in Patient No-Shows", labelAr: "انخفاض التغيب عن الحضور", value: "-42%" },
      { labelEn: "EMR Retrieval Time", labelAr: "سرعة استرجاع السجل الطبي", value: "< 240ms" },
      { labelEn: "WhatsApp AI Intake Rate", labelAr: "معدل الحجز التلقائي بواتساب", value: "85%" }
    ],
    accentColor: "#00F0FF",
    featured: true,
    githubUrl: "https://github.com/Adham-Kishawi/DOCTECH",
    challengeEn: "Private medical practices faced disjointed scheduling, high no-show rates (up to 40%), manual paper-based patient histories, and secretary overload due to constant phone and WhatsApp booking inquiries.",
    challengeAr: "عانت العيادات الطبية من تشتت مواعيد المرضى، وارتفاع معدلات التغيب إلى 40%، والاعتماد على السجلات الورقية، والضغط الهائل على طاقم السكرتارية في الرد على مكالمات ورسائل الحجز عبر واتساب.",
    solutionEn: "Architected a high-speed, multi-tenant Clinic Management System with role-based permission matrices (Doctor vs. Secretary). Integrated Meta's WhatsApp Cloud API with an intelligent Hermes AI booking agent (Human-in-the-Loop review queue) that answers patient inquiries 24/7. Built a comprehensive 3-tab Electronic Medical Record (EMR) with vital metrics timeline, chronic allergy badges, and drag-and-drop diagnostic imaging with instant lightbox inspection.",
    solutionAr: "قمنا بهندسة منصة سحابية فائقة السرعة ومتعددة الصلاحيات تفصل بين واجهات الأطباء والسكرتارية. تم ربط واجهة Meta WhatsApp الرسمية بوكيل ذكاء اصطناعي ذكي يفرز طلبات الحجز على مدار الساعة مع طابور مراجعة بشري. صممنا ملفاً طبياً إلكترونياً تفاعلياً من 3 تبويبات لتتبع الزيارات والتحاليل والأشعة الطبية مع معاينة مكبرة فورية.",
    outcomeEn: "Achieved a 42% reduction in appointment no-shows through automated bidirectional WhatsApp confirmations, streamlined reception cashier accounting with real-time drawer reconciliation, and isolated physician revenue analytics.",
    outcomeAr: "انخفاض بنسبة 42% في حالات التغيب بفضل رسائل التأكيد التلقائية على واتساب، وتبسيط إجراءات الخزينة والمحاسبة اليومية للسكرتارية، مع توفير تقارير أرباح مشفرة ومستقلة لكل طبيب.",
    architectureHighlightsEn: [
      "Sliding drawer mobile architecture with fixed responsive bottom action bar",
      "Automated clinical scheduling engine preventing slot collisions down to the minute",
      "Human-in-the-loop WhatsApp AI triage queue with fallback between Qwen 3.5 & GLM-4",
      "Offline-first EMR caching with drag-and-drop medical document scanning"
    ],
    architectureHighlightsAr: [
      "معمارية تصفح متحركة للهواتف مع شريط إجراءات سفلي متكيف مع وضع الشاشات اللمسية",
      "محرك جدولة سريري ذكي يمنع تضارب الفترات الزمنية بدقة الدقيقة",
      "طابور فرز ذكي لحجوزات واتساب مع آلية مراجعة فورية ودعم نماذج ذكاء اصطناعي متعددة",
      "تخزين مؤقت فوري للسجلات الطبية مع دعم السحب والإفلات لتقارير الأشعة والتحاليل"
    ],
    mockupType: "erp-dashboard"
  },
  {
    id: "craft-crew-automotive",
    slug: "craft-crew-automotive-summit",
    titleEn: "11th Egypt Automotive Summit & Enterprise Events OS",
    titleAr: "القمة السنوية الـ 11 للسيارات ومنصة المؤتمرات الكبرى",
    taglineEn: "Enterprise event operations engine handling 1,200+ delegates with real-time QR ticketing, Visx D3 telemetry, and ultra-fast badge issuance.",
    taglineAr: "محرك تشغيلي للفعاليات والمؤتمرات الكبرى يدير أكثر من 1200 وفد مع نظام تذاكر QR وتحليلات Visx D3 فورية.",
    category: "Full-Stack Enterprise",
    year: "2026",
    roleEn: "Senior Front-End Engineer & Performance Specialist",
    roleAr: "مهندس واجهات أمامية أول ومختص أداء النظم",
    clientEn: "Craft Crew Operations × Digital Industry Council",
    clientAr: "منصة كرافت كرو بالتعاون مع مجلس الصناعة الرقمية",
    techStack: [
      "Next.js 16 (App Router)",
      "React 19",
      "GSAP 3.15",
      "Motion 12",
      "Visx (D3.js Sankey & Heatmaps)",
      "TanStack Virtual Table",
      "ZXing QR Scanner",
      "Tailwind CSS v4"
    ],
    metrics: [
      { labelEn: "Badge Print Speed", labelAr: "سرعة طباعة شارة الدخول", value: "< 2.8s" },
      { labelEn: "Peak Check-in Telemetry", labelAr: "سعة تسجيل الحضور اللحظية", value: "1,200+ delegates" },
      { labelEn: "UI Frame Rate Under Load", labelAr: "معدل الإطارات في الثانية", value: "60 FPS" },
      { labelEn: "Offline Gate Resilience", labelAr: "استمرارية العمل دون إنترنت", value: "100%" }
    ],
    accentColor: "#F43F5E",
    featured: true,
    githubUrl: "https://github.com/Adham-Kishawi/craft-crew-events",
    challengeEn: "Major industrial gatherings like the Egypt Automotive Annual Summit struggled with long registration queues at gate terminals, badge printing bottlenecks, unreliable conference WiFi, and sluggish agenda interfaces with hundreds of concurrent sessions.",
    challengeAr: "واجهت المؤتمرات الصناعية الكبرى مثل القمة السنوية للسيارات طوابير انتظار طويلة عند البوابات، وتأخر طباعة بطاقات الحضور، وانقطاع شبكة الإنترنت في قاعات المؤتمرات، وبطء جداول الأعمال المعقدة.",
    solutionEn: "Engineered a high-performance offline-resilient event portal with instant camera-based QR code scanning via ZXing, 60fps bilingual agenda scrollers, virtualized attendee data grids handling 10,000+ records via TanStack Virtual, and interactive flow telemetry powered by Visx D3 Sankey diagrams.",
    solutionAr: "طورنا بوابة رقمية فائقة السرعة تعمل دون الحاجة لاتصال مستمر بالإنترنت، تدعم قراءة رموز QR فورياً عبر الكاميرا، مع جدول أعمال ثنائي اللغة بسلاسة 60 إطاراً في الثانية، وجداول افتراضية تفرز آلاف الحضور لحظياً، ومخططات بيانية تفاعلية لحركة الوفود عبر تقنيات Visx D3.",
    outcomeEn: "Cut gate queue times from 4 minutes down to under 3 seconds per attendee, enabled uninterrupted check-in operations during venue network blips, and delivered a 99+ Lighthouse performance score on all summit public pages.",
    outcomeAr: "تقليص زمن انتظار التسجيل عند البوابة من 4 دقائق إلى أقل من 3 ثوانٍ لكل زائر، وضمان استمرار عمل أجهزة الدخول حتى في حالات انقطاع الشبكة، وتحقيق تقييم 99+ على مقياس Lighthouse للأداء.",
    architectureHighlightsEn: [
      "Zero-latency Web Worker QR scanning with visual edge detection overlay",
      "TanStack Virtual row virtualization preventing DOM thrashing on heavy delegate tables",
      "Visx D3 interactive telemetry depicting attendance flows between summit stages",
      "Dynamic print style engine generating vectorized NFC/QR visitor badges on thermal printers"
    ],
    architectureHighlightsAr: [
      "مسح رموز QR عبر Web Worker لمنع تجميد الواجهة مع إطار توجيه بصري متقدم",
      "تصيير افتراضي لجداول البيانات الضخمة لمنع استهلاك الذاكرة وتثاقل المتصفح",
      "خرائط تدفق تفاعلية توضح حركة الحضور وتوزيع الكثافة بين قاعات المؤتمر",
      "محرك طباعة فوري يولد بطاقات وشارات دخول بدقة عالية مناسبة للطابعات الحرارية"
    ],
    mockupType: "event-telemetry"
  },
  {
    id: "prime-brand-crm-app",
    slug: "prime-brand-crm",
    titleEn: "PRIME — Apparel Brand & Operations CRM",
    titleAr: "برايم — العلامة التجارية ومنظومة إدارة العمليات والإنتاج",
    taglineEn: "Bespoke apparel operations platform orchestrating collections, Kanban order pipelines, fabric suppliers, and automated financial auditing.",
    taglineAr: "منظومة سحابية متكاملة لعلامة أزياء خاصة تدير خطوط الإنتاج والطلبات وموردي الأقمشة والتقارير المالية.",
    category: "E-Commerce",
    year: "2026",
    roleEn: "Founder, Creative Director & Full-Stack Developer",
    roleAr: "المؤسس والمدير الإبداعي ومطور المنظومة التقنية",
    clientEn: "PRIME Apparel Egypt",
    clientAr: "علامة برايم للملابس الجاهزة بمصر",
    techStack: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Lucide Icons",
      "Canvas Confetti",
      "XLSX Engine",
      "LocalStorage & Cloud Backup"
    ],
    metrics: [
      { labelEn: "Production Cycle Tracking", labelAr: "دقة تتبع دورة التصنيع", value: "100%" },
      { labelEn: "Inventory Discrepancy", labelAr: "نسبة الخطأ في المخزون", value: "0%" },
      { labelEn: "Order Fulfillment Speed", labelAr: "سرعة تجهيز وشحن الطلبات", value: "+300%" },
      { labelEn: "Audit Report Generation", labelAr: "توليد تقارير الجرد المالي", value: "Instant" }
    ],
    accentColor: "#F59E0B",
    featured: true,
    githubUrl: "https://github.com/Adham-Kishawi/prime-brand-crm",
    challengeEn: "Running a fast-growing independent fashion brand involved handling multiple custom collections (streetwear, winter hoodies, university graduating batches), managing suppliers and printing houses across Egypt, and preventing inventory leaks caused by manual spreadsheets.",
    challengeAr: "تطلب تشغيل علامة ملابس سريعة النمو إدارة عدة مجموعات موسمية (شتوي، كولكشن قضية، دفعات التخرج الجامعية)، والتنسيق بين مصانع الغزل والمطابع، والتغلب على فوضى الجداول اليدوية التي أدت لأخطاء المخزون.",
    solutionEn: "Engineered a tailor-made ERP/CRM dashboard featuring an interactive Kanban order pipeline, real-time inventory decrement per size/color, automated expense and supplier ledger balancing, and one-click Excel reconciliation sheets.",
    solutionAr: "بناء لوحة تحكم ERP/CRM مخصصة تتضمن لوحة كانبان تفاعلية لتتبع مراحل الطلب، وخصماً فورياً من المخزون حسب المقاس واللون، وسجلاً محاسبياً لموردي الأقمشة وتكاليف الطباعة، مع تصدير فوري لتقارير إكسل مدققة.",
    outcomeEn: "Completely eliminated manual stock mismatches, accelerated order fulfillment by 3x, and established clear profitability margins for each seasonal apparel drop.",
    outcomeAr: "القضاء التام على أخطاء المخزون والحسابات، وتسريع تسليم الطلبات للعملاء بثلاثة أضعاف، مع وضوح كامل لهوامش أرباح كل دفعة إنتاجية.",
    architectureHighlightsEn: [
      "Fluid drag-and-drop Kanban workflow with status transition triggers",
      "Multi-variant SKU matrix automatically calculating remaining fabric & prints",
      "Dynamic in-browser spreadsheet generation with formulas and styling",
      "Celebratory gamified UI states with tactile auditory and visual feedback"
    ],
    architectureHighlightsAr: [
      "سير عمل كانبان مرن بنظام السحب والإفلات وتنبيهات تغيير حالة الطلب",
      "مصفوفة أكواد منتجات متعددة الخصائص تحسب المواد الخام المتبقية تلقائياً",
      "توليد مستندات إكسل منسقة ومعادلات حسابية مباشرة من المتصفح",
      "واجهات تفاعلية مبهجة تقدم ردود فعل بصرية وصوتية تعزز إنتاجية فريق العمل"
    ],
    mockupType: "kanban-crm"
  },
  {
    id: "sport-cycle-app",
    slug: "sport-cycle-marketplace",
    titleEn: "Sport Cycle — Circular Sports Gear Marketplace",
    titleAr: "سبورت سايكل — منصة الاقتصاد الدائري للمعدات الرياضية",
    taglineEn: "Egyptian sports equipment marketplace empowering athletes to buy, sell, and verify pre-owned fitness gear with trust scoring.",
    taglineAr: "سوق مصري رائد لإعادة تدوير وبيع وشراء الأجهزة والمعدات الرياضية المستعملة مع فحص الجودة.",
    category: "SaaS MVP",
    year: "2026",
    roleEn: "Product Lead & Front-End Engineer",
    roleAr: "قائد المنتج ومهندس الواجهات الأمية",
    clientEn: "Creativa Ismailia Startup Sprint Demo Day",
    clientAr: "حاضنة كرياتيفا الإسماعيلية — العرض الختامي للشركات الناشئة",
    techStack: [
      "Next.js 16",
      "Cloudflare Pages (Vinext)",
      "React 19",
      "Supabase SSR",
      "Tailwind CSS v4",
      "Zod",
      "Sharp"
    ],
    metrics: [
      { labelEn: "Demo Day Pitching", labelAr: "عرض يوم الديمو داي", value: "Finalist 🏅" },
      { labelEn: "Mobile Edge TTFB", labelAr: "سرعة استجابة السيرفر عبر الحافة", value: "< 55ms" },
      { labelEn: "Image Compression Ratio", labelAr: "ضغط صور المعدات تلقائياً", value: "-78%" },
      { labelEn: "User Verification Trust", labelAr: "معدل موثوقية الفحص الرياضي", value: "98%" }
    ],
    accentColor: "#10B981",
    featured: true,
    githubUrl: "https://github.com/Adham-Kishawi/sport-cycle",
    challengeEn: "Premium fitness equipment in Egypt has become prohibitively expensive, while traditional classified apps suffer from scams, hidden defects, lack of athletic specifications, and painful buyer-seller coordination.",
    challengeAr: "أصبحت أسعار الأجهزة الرياضية الأصلية باهظة جداً في مصر، بينما تعاني مواقع الإعلانات المبوبة من الاحتيال، وعدم دقة المواصفات الفنية، وانعدام الثقة في حالة الأجهزة المستعملة.",
    solutionEn: "Designed and built an edge-native mobile marketplace with standardized fitness inspection badges, escrow-friendly communication, fast multi-attribute filtering (brand, weight class, condition), and sub-50ms page transitions via Cloudflare edge routing.",
    solutionAr: "تصميم وبناء سوق رقمي متكيف مع الهواتف يعمل عبر الحافة السحابية (Edge)، مزود بشارات فحص معيارية للأجهزة، وفلاتر بحث سريعة حسب الماركة والأوزان والحالة، وسرعة تنقل فائقة بين الشاشات.",
    outcomeEn: "Selected as a finalist at the Creativa Ismailia Startup Sprint Demo Day, earning praise for its slick mobile ergonomics, lightning-fast edge performance, and verified condition workflow.",
    outcomeAr: "التأهل للنهائيات في يوم العرض الختامي لحاضنة كرياتيفا الإسماعيلية، ونيل إشادة لجان التحكيم لسهولة الاستخدام وسرعة الأداء وموثوقية فحص المعدات.",
    architectureHighlightsEn: [
      "Cloudflare edge deployment delivering instant global asset streaming",
      "Optimized client-side image compression reducing upload payload by 78%",
      "Zod schema validation shared across client and serverless boundaries",
      "Condition grading engine assigning transparency scores to equipment listings"
    ],
    architectureHighlightsAr: [
      "استضافة عبر حافة كلاودفلير السحابية لتقديم استجابة فورية فائقة السرعة",
      "ضغط تلقائي لصور المعدات من هاتف المستخدم يوفر 78% من حجم البيانات",
      "تحقق برمجي صارم باستخدام Zod يضمن سلامة البيانات المدخلة",
      "محرك تقييم معتمد يعطي درجة موثوقية شفافة لحالة كل قطعة رياضية معروضة"
    ],
    mockupType: "marketplace"
  },
  {
    id: "aethercast-app",
    slug: "aethercast-weather",
    titleEn: "AetherCast — Atmospheric Weather Engine",
    titleAr: "إيثر كاست — محرك رصد الطقس الجوي بنمط النيو-بروتاليزم",
    taglineEn: "Tactile live weather dashboard featuring dynamic meteorological palettes, 24-hour timeline scrollers, and smart lifestyle badges.",
    taglineAr: "لوحة طقس حية تفاعلية بأسلوب النيو-بروتاليزم الهادئ مع ألوان متكيفة حسب الغلاف الجوي.",
    category: "Creative UI/UX",
    year: "2026",
    roleEn: "Front-End Developer & UI Designer",
    roleAr: "مطور واجهات أمامية ومصمم تجربة المستخدم",
    clientEn: "Open Source Showcase",
    clientAr: "مشروع مفتوح المصدر للاستعراض التقني",
    techStack: [
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Open-Meteo API",
      "Lucide React",
      "Vite"
    ],
    metrics: [
      { labelEn: "Auto-Sync Interval", labelAr: "دورة التحديث التلقائي اللحظي", value: "15s" },
      { labelEn: "Zero External API Key", labelAr: "اعتماد كامل على بيانات مفتوحة", value: "100%" },
      { labelEn: "Lighthouse Performance", labelAr: "تقييم الأداء القياسي", value: "100" },
      { labelEn: "Color Palette States", labelAr: "حالات الألوان المتكيفة مع الطقس", value: "6 Themes" }
    ],
    accentColor: "#38BDF8",
    featured: false,
    githubUrl: "https://github.com/Adham-Kishawi/AetherCast",
    challengeEn: "Most weather applications are cluttered with intrusive ads, heavy tracking scripts, and lifeless repetitive gradients that fail to communicate the tactile feeling of outside conditions.",
    challengeAr: "تعاني أغلب تطبيقات الطقس من الإعلانات المزعجة، والتصميمات الباهتة المتكررة، وصعوبة استخلاص التوصيات السريعة لحالة الجو المناسبة للمستخدم.",
    solutionEn: "Created a soft Neo-Brutalist dashboard that adapts its color accent palette dynamically to real-time atmospheric conditions (Sunny, Rainy, Foggy, Stormy, Night Twilight) with smart recommendation stickers (UV alert, heavy coat warning).",
    solutionAr: "ابتكار واجهة طقس نيو-بروتاليزمية ناعمة تتكيف ألوانها وحوافها وظلالها لحظياً حسب حالة السماء المحيطة، مع ملصقات ذكية تقترح الملابس المناسبة وتحذر من أشعة الشمس أو الأمطار.",
    outcomeEn: "Delivered a tactile, ultra-fast weather tool with zero dependencies on commercial API keys, 100/100 Lighthouse score, and fluid horizontal touch timeline navigation.",
    outcomeAr: "تقديم أداة طقس استثنائية الجمال وسريعة الاستجابة تعمل مجاناً بالكامل دون مفاتيح برمجية مدفوعة، وبتقييم 100/100 على Lighthouse.",
    architectureHighlightsEn: [
      "Atmospheric CSS tokens reacting in real-time to solar radiation & cloud coverage",
      "Debounced geolocation search with fuzzy matching across global coordinates",
      "Horizontal 24h temperature spline with smooth scrub gestures"
    ],
    architectureHighlightsAr: [
      "متغيرات تصميمية ذكية تتفاعل آنياً مع نسبة الغيوم وموقع الشمس",
      "بحث جغرافي فوري وسلس يدعم تحديد موقع المستخدم بنقرة واحدة",
      "مخطط حراري أفقي على مدار 24 ساعة يتفاعل بمرونة مع السحب واللمس"
    ],
    mockupType: "weather-dashboard"
  },
  {
    id: "maswada-ai-app",
    slug: "maswada-ai",
    titleEn: "Maswada AI — Intelligent Arabic Draft Workspace",
    titleAr: "مسوّدة ذكاء اصطناعي — مساحة الكتابة والتدوين الذكية ثنائية اللغة",
    taglineEn: "Distraction-free markdown workspace with native Arabic RTL typography and AI assistant integration.",
    taglineAr: "مساحة عمل احترافية للتدوين والكتابة تدعم اللغة العربية والذكاء الاصطناعي دون أي مشتتات.",
    category: "SaaS MVP",
    year: "2026",
    roleEn: "Front-End Engineer & i18n Specialist",
    roleAr: "مهندس واجهات ومختص دعم اللغات وثنائية الاتجاه",
    clientEn: "Internal SaaS Project",
    clientAr: "مشروع ذاتي للإنتاجية وصناع المحتوى",
    techStack: [
      "React 19",
      "Vite",
      "Tailwind CSS v4",
      "Clerk Auth",
      "Radix UI",
      "React-Intl",
      "Lucide React"
    ],
    metrics: [
      { labelEn: "Bidirectional Typing Latency", labelAr: "زمن استجابة الكتابة ثنائية اللغة", value: "< 8ms" },
      { labelEn: "RTL Layout Fidelity", labelAr: "دقة التنسيق العربي RTL", value: "100%" },
      { labelEn: "Distraction-Free Mode", labelAr: "وضع التركيز الخالي من المشتتات", value: "Included" }
    ],
    accentColor: "#A855F7",
    featured: false,
    githubUrl: "https://github.com/Adham-Kishawi/maswada-ai",
    challengeEn: "Arabic writers and developers frequently face broken formatting, poor font rendering, and mixed LTR/RTL punctuation bugs in mainstream markdown and note-taking editors.",
    challengeAr: "يواجه الكتاب والمطورون العرب تشوهاً متكرراً في علامات الترقيم، وخطوطاً رديئة، ومشاكل في محاذاة الفقرات عند خلط الكلمات العربية بالإنجليزية أو الأكواد البرمجية.",
    solutionEn: "Engineered a purpose-built workspace with typography tuned specifically for modern Arabic fonts (Cairo, IBM Plex Arabic), seamless bidirectional paragraph isolation, and conversational AI drafting.",
    solutionAr: "بناء مساحة عمل مخصصة تعتمد خطوطاً عربية أصيلة مع عزل اتجاه الفقرات آلياً، ومساعد ذكاء اصطناعي لإعادة الصياغة وتوليد الأفكار في بيئة هادئة.",
    outcomeEn: "Delivered a silky-smooth drafting tool with instant keyboard shortcuts, dark mode ergonomics, and zero input lag during long-form composition.",
    outcomeAr: "أداة كتابة فائقة السلاسة باختصارات لوحة مفاتيح مريحة، ووضع ليلي مريح للعينين، وسرعة استجابة فورية للنصوص الطويلة.",
    architectureHighlightsEn: [
      "Bidirectional DOM paragraph isolation maintaining correct punctuation positions",
      "Keyboard shortcut engine matching Vim and modern IDE editor conventions",
      "Modular sidebar with live word count, reading time, and reading complexity score"
    ],
    architectureHighlightsAr: [
      "معالجة متقدمة لاتجاه النصوص تحافظ على أماكن علامات الترقيم والأقواس بدقة",
      "محرك اختصارات متقدم متوافق مع معايير محررات الأكواد الحديثة",
      "شريط أدوات يحسب عدد الكلمات ووقت القراءة ومستوى سهولة النص لحظياً"
    ],
    mockupType: "erp-dashboard"
  }
];
