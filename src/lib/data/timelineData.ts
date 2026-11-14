export interface Milestone {
  year: string;
  quarter?: string;
  titleEn: string;
  titleAr: string;
  organizationEn: string;
  organizationAr: string;
  descriptionEn: string;
  descriptionAr: string;
  tags: string[];
  type: "career" | "education" | "achievement" | "brand";
  highlightColor: string;
}

export const TIMELINE_DATA: Milestone[] = [
  {
    year: "2026",
    quarter: "Q1 - Present",
    titleEn: "Mid-Level Front-End Engineer & Web Architect",
    titleAr: "مهندس واجهات أمامية ومعماري تطبيقات الويب",
    organizationEn: "Independent & High-Impact Client Projects",
    organizationAr: "مشاريع استشارية وتطوير منصات كبرى",
    descriptionEn: "Architecting enterprise SaaS platforms, clinic operating systems (DOCTECH), high-concurrency event telemetry portals (Craft Crew Automotive Summit), and modern Next.js 16 applications with 99+ Lighthouse performance scores.",
    descriptionAr: "هندسة وبناء أنظمة الويب المؤسسية، ونظام تشغيل العيادات (DOCTECH)، وبوابة تسجيل مؤتمرات السيارات الكبرى (Craft Crew)، وتطوير تطبيقات Next.js 16 بأعلى معايير الأداء والسرعة.",
    tags: ["Next.js 16", "React 19", "TypeScript", "GSAP", "Tailwind CSS v4"],
    type: "career",
    highlightColor: "#00F0FF"
  },
  {
    year: "2026",
    quarter: "Spring",
    titleEn: "Founder & Creative Director",
    titleAr: "المؤسس والمدير الإبداعي ومطور المنظومة",
    organizationEn: "PRIME Apparel & Operations CRM",
    organizationAr: "علامة برايم للأزياء ومنظومة إدارة الإنتاج",
    descriptionEn: "Founded an independent streetwear apparel brand in Egypt, designed the signature visual identity and seasonal capsule drops, and developed a custom ERP/CRM pipeline to streamline inventory, orders, and supplier accounting.",
    descriptionAr: "تأسيس علامة أزياء مصرية مستقلة، وتصميم هويتها البصرية ومجموعاتها الموسمية، وتطوير نظام CRM/ERP مخصص لإدارة المخزون والتوريد وحسابات الإنتاج بدقة 100%.",
    tags: ["React 19", "Brand Identity", "Operations CRM", "UI/UX Design"],
    type: "brand",
    highlightColor: "#F59E0B"
  },
  {
    year: "2025",
    quarter: "Late 2025",
    titleEn: "Creativa Ismailia Startup Sprint Finalist",
    titleAr: "المتأهل للنهائيات بحاضنة كرياتيفا الإسماعيلية",
    organizationEn: "Creativa Innovation Hub (Ismailia)",
    organizationAr: "مركز إبداع مصر الرقمية — كرياتيفا الإسماعيلية",
    descriptionEn: "Pitched 'Sport Cycle' at Demo Day — an Egyptian circular economy marketplace for certified pre-owned sports equipment. Earned finalist recognition for technical execution, edge architecture, and rapid UX prototype.",
    descriptionAr: "تقديم مشروع Sport Cycle في يوم العرض الختامي (Demo Day) — سوق مصري للاقتصاد الدائري للأجهزة الرياضية. نال المشروع تقدير لجان التحكيم لجودة بنيته السحابية وسلاسة تجربة الاستخدام.",
    tags: ["Startup Sprint", "Pitching", "Sport Cycle", "Cloudflare Edge"],
    type: "achievement",
    highlightColor: "#10B981"
  },
  {
    year: "2025",
    quarter: "Mid 2025",
    titleEn: "Intensive Software Engineering Graduate",
    titleAr: "خريج التدريب المكثف لهندسة البرمجيات",
    organizationEn: "Information Technology Institute (ITI)",
    organizationAr: "معهد تكنولوجيا المعلومات (ITI) — وزارة الاتصالات",
    descriptionEn: "Completed rigorous professional engineering training covering data structures, object-oriented design, modern C#, web application architecture, RESTful systems, and scalable front-end state design.",
    descriptionAr: "إتمام برنامج تدريبي مهني مكثف في معهد ITI غطى هياكل البيانات، وهندسة البرمجيات الموجهة للكائنات (OOP)، وتقنيات الويب الحديثة، وبناء واجهات برمجية قوية وتطبيقات متكاملة.",
    tags: ["ITI Graduate", "Algorithms & OOP", "Modern Web", "Ismailia Hub"],
    type: "education",
    highlightColor: "#F43F5E"
  },
  {
    year: "2025",
    quarter: "Early 2025",
    titleEn: "Front-End Developer & UI Experimenter",
    titleAr: "بداية التخصص والتعمق في هندسة الواجهات",
    organizationEn: "Self-Driven Mastery & Open-Source",
    organizationAr: "التطوير الذاتي والمشاريع مفتوحة المصدر",
    descriptionEn: "Built interactive web applications, audio-reactive canvas experiments, Simon game algorithms, and responsive design systems that established a passion for high-framerate creative front-end engineering.",
    descriptionAr: "بناء تطبيقات ويب تفاعلية، وتجارب تفاعلية تعتمد على الصوت وCanvas، وأنظمة تصميم متجاوبة رسخت الشغف بالرسوم الحركية السلسة وجماليات الواجهات الحديثة.",
    tags: ["JavaScript ESNext", "Web Audio API", "Interactive DOM", "Creative UI"],
    type: "career",
    highlightColor: "#A855F7"
  }
];
