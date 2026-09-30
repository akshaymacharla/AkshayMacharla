export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'backend' | 'fullstack' | 'ai';
  description: string;
  longDescription: string;
  architectureHighlights: string[];
  techStack: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  keyFeatures: string[];
  metricsOrEndpoints?: string;
  badge?: string;
}

export interface WorkshopTrack {
  id: string;
  title: string;
  subtitle: string;
  audience: string;
  duration: string;
  description: string;
  curriculum: string[];
  icon: string;
  level: string;
}

export interface CreatorPost {
  id: string;
  title: string;
  category: 'Java & Backend' | 'Architecture' | 'AI Tools' | 'Career & Internships';
  views: string;
  likes: string;
  duration: string;
  thumbnailGradient: string;
  summary: string;
}

export const portfolioData = {
  personal: {
    name: "Akshay Macharla",
    roleBadge: "Java Backend Developer • Educator • Tech Creator",
    heroHeadline: "I build. I teach. I create.",
    heroStatement: "Java Backend Developer, Educator and Tech Creator helping students turn technology into real-world skills.",
    alternativeLine: "Building backend systems, teaching practical technology, and creating content that helps students grow.",
    location: "Hyderabad, India",
    phone: "+91 70328 25979",
    whatsappNumber: "917032825979",
    email: "akshaymacharla0523@gmail.com",
    linkedin: "https://linkedin.com/in/akshaymacharia",
    github: "https://github.com/akshaymacharla",
    instagram: "https://instagram.com/macharla_akshay",
    instagramHandle: "@macharla_akshay",
    university: "Chaitanya Deemed To Be University",
    degree: "B.S. Computer Science",
    academicHonor: "Academic Excellence Honors • 9.0+ CGPA",
    gradYear: "2023 - Present",
  },

  // Editable statistics
  stats: [
    {
      id: "creator",
      label: "Student-Focused Content",
      value: "Tech Content Creator",
      helper: "Java, AI, careers & practical learning",
      icon: "Video",
    },
    {
      id: "workshops",
      label: "Practical Learning",
      value: "Tech Workshops",
      helper: "Hands-on project building sessions",
      icon: "BookOpen",
    },
    {
      id: "students",
      label: "Students Reached",
      value: "1,000s",
      helper: "Workshops, sessions & training cohorts",
      icon: "GraduationCap",
    },
    {
      id: "projects",
      label: "Projects & Builds",
      value: "10+",
      helper: "Production backend & full-stack systems",
      icon: "Code2",
    },
    {
      id: "cgpa",
      label: "Academic CGPA",
      value: "9.0+",
      helper: "Consistent Academic Excellence honors",
      icon: "Award",
    },
  ],

  // 3 Core Pillars
  pillars: [
    {
      id: "builder",
      title: "Developer",
      subtitle: "BUILD",
      role: "Backend Architect & Full-Stack Engineer",
      description: "Building resilient backend systems, RESTful microservices, and full-stack applications with Java, Spring Boot, PostGIS spatial queries, and Kafka event streams.",
      gradient: "from-blue-600/10 via-indigo-600/5 to-transparent",
      accentColor: "text-indigo-600",
      borderColor: "group-hover:border-indigo-500/40",
      skillsSnippet: ["Java 17", "Spring Boot 3", "PostgreSQL", "Kafka", "Redis"],
    },
    {
      id: "educator",
      title: "Educator",
      subtitle: "TEACH",
      role: "Tech Trainer & Workshop Host",
      description: "Demystifying complex computer science concepts through project-first hands-on sessions. Helping students bridge the gap between classroom theory and real industry expectations.",
      gradient: "from-emerald-600/10 via-teal-600/5 to-transparent",
      accentColor: "text-emerald-600",
      borderColor: "group-hover:border-emerald-500/40",
      skillsSnippet: ["Workshops", "Mentorship", "System Design", "Hands-on Labs"],
    },
    {
      id: "creator",
      title: "Content Creator",
      subtitle: "CREATE",
      role: "Tech Storyteller & Digital Educator",
      description: "Creating educational content around Java, AI, careers, internships, and software development.",
      gradient: "from-purple-600/10 via-pink-600/5 to-transparent",
      accentColor: "text-purple-600",
      borderColor: "group-hover:border-purple-500/40",
      skillsSnippet: ["Java & AI", "Reels & Guides", "Careers & Internships", "Software Dev"],
    },
  ],

  // Skills organized strictly by category
  skillsByCategory: [
    {
      category: "Backend Engineering",
      description: "Enterprise application architectures, RESTful API design, and distributed services",
      skills: [
        { name: "Java (JDK 17/21)", level: "Advanced", icon: "Coffee" },
        { name: "Spring Boot 3", level: "Advanced", icon: "Layers" },
        { name: "Spring MVC & REST APIs", level: "Advanced", icon: "Send" },
        { name: "Spring Security & JWT", level: "Proficient", icon: "ShieldCheck" },
        { name: "Spring Data JPA & Hibernate", level: "Advanced", icon: "Database" },
        { name: "Microservices Architecture", level: "Working Knowledge", icon: "Network" },
        { name: "C Language", level: "Academic", icon: "Terminal" },
      ]
    },
    {
      category: "Databases & Geospatial",
      description: "Relational persistence, spatial indexing, high-performance caching & in-memory testing",
      skills: [
        { name: "PostgreSQL & PostGIS", level: "Advanced", icon: "Globe" },
        { name: "MySQL", level: "Advanced", icon: "Database" },
        { name: "Redis Caching & TTL", level: "Proficient", icon: "Cpu" },
        { name: "H2 In-Memory DB", level: "Proficient", icon: "HardDrive" },
        { name: "SQL Query Optimization", level: "Proficient", icon: "Zap" },
        { name: "Database Schema Design", level: "Advanced", icon: "Table" },
      ]
    },
    {
      category: "Messaging, Tools & DevOps",
      description: "Build automation, event-driven messaging, containerization, and deployment platforms",
      skills: [
        { name: "Apache Kafka", level: "Proficient", icon: "Radio" },
        { name: "Docker", level: "Proficient", icon: "Box" },
        { name: "Git & GitHub", level: "Advanced", icon: "GitBranch" },
        { name: "Maven & Build Automation", level: "Advanced", icon: "Wrench" },
        { name: "Postman API Testing", level: "Advanced", icon: "CheckCircle" },
        { name: "IntelliJ IDEA & VS Code", level: "Advanced", icon: "Code" },
        { name: "Railway / Render / Vercel", level: "Proficient", icon: "Cloud" },
      ]
    },
    {
      category: "Frontend Development",
      description: "Building responsive, modern user interfaces to accompany backend APIs",
      skills: [
        { name: "React 18", level: "Proficient", icon: "Layout" },
        { name: "JavaScript (ES6+)", level: "Proficient", icon: "FileCode" },
        { name: "HTML5 & Modern CSS", level: "Advanced", icon: "Palette" },
        { name: "Vite", level: "Proficient", icon: "Zap" },
        { name: "Tailwind CSS", level: "Proficient", icon: "Sparkles" },
        { name: "Leaflet Maps & GIS UI", level: "Working Knowledge", icon: "MapPin" },
      ]
    },
    {
      category: "AI, Biometrics & Innovation",
      description: "Integrating voice biometrics, generative AI, RAG workflows, and audio processing",
      skills: [
        { name: "Voice Biometrics & Resemblyzer", level: "Proficient", icon: "Mic" },
        { name: "Cosine Similarity Verification", level: "Proficient", icon: "Activity" },
        { name: "SpeechRecognition & Murf AI", level: "Proficient", icon: "Volume2" },
        { name: "Generative AI & RAG", level: "Working Knowledge", icon: "Bot" },
        { name: "Agentic AI & Automation", level: "Working Knowledge", icon: "Workflow" },
      ]
    },
    {
      category: "Core Engineering Principles",
      description: "Foundational software engineering principles for robust, scalable software",
      skills: [
        { name: "OOP & SOLID Principles", level: "Advanced", icon: "CheckSquare" },
        { name: "IoC & Dependency Injection", level: "Advanced", icon: "Repeat" },
        { name: "JPA Optimistic Locking (@Version)", level: "Advanced", icon: "Lock" },
        { name: "Layered MVC Architecture", level: "Advanced", icon: "Layers" },
        { name: "Global Exception Handling", level: "Advanced", icon: "AlertTriangle" },
        { name: "RESTful HTTP Semantics", level: "Advanced", icon: "FileText" },
      ]
    }
  ],

  // Featured Projects verified against resume & real repository implementations
  projects: [
    {
      id: "foodbridge",
      title: "FoodBridge",
      tagline: "Real-Time Surplus Food Redistribution Platform",
      category: "backend" as const,
      badge: "Flagship Project",
      description: "A backend-driven geospatial platform connecting donors, NGOs, and volunteers to redistribute perishable food before expiration using PostGIS and Apache Kafka.",
      longDescription: "Architected and built a high-performance backend using Spring Boot 3.2.3, Spring Data JPA, Hibernate Spatial, and PostgreSQL with PostGIS extensions. It handles high-concurrency food claims with optimistic locking and delivers asynchronous event notifications via Kafka.",
      architectureHighlights: [
        "PostGIS native spatial queries (ST_DWithin, ST_DistanceSphere) for sub-30ms radius distance lookups",
        "JPA Optimistic Locking (@Version) to prevent double-claiming race conditions, returning HTTP 409 Conflict via custom ClaimConflictException",
        "Apache Kafka integration (FoodListingCreatedEvent -> food-listings-topic) with KafkaNotificationListener for NGO notifications",
        "Redis TTL caching combined with background ExpirationSchedulerService running a 5-minute cron job (@Scheduled)",
        "Exposed 15+ secure RESTful endpoints for listing management, verification workflows, and CO2 offset telemetry",
      ],
      techStack: ["Java 17", "Spring Boot 3.2.3", "PostgreSQL", "PostGIS", "Apache Kafka", "Redis", "Spring Security", "JWT", "Maven", "React"],
      githubUrl: "https://github.com/akshaymacharla",
      liveDemoUrl: "https://foodbridge-demo.vercel.app",
      keyFeatures: [
        "Sub-30ms Geospatial Radius Queries",
        "Optimistic Concurrency Protection",
        "Asynchronous Kafka Event Bus",
        "Redis TTL & Automated Cron Eviction",
        "CO2 & Impact Metric Telemetry"
      ],
      metricsOrEndpoints: "15+ REST Endpoints • <30ms Spatial Query Latency • Zero Over-Claim Guarantee",
    },
    {
      id: "ecommerce-backend",
      title: "E-Commerce Backend Platform",
      tagline: "Layered RESTful Architecture with JWT & RBAC",
      category: "backend" as const,
      badge: "Core Backend",
      description: "A high-performance enterprise RESTful backend application engineered with a rigid layered architecture, role-based authorization, and resilient catalog management.",
      longDescription: "Engineered from the ground up to showcase production-grade Java Spring Boot patterns. Features strict separation of concerns across Controller, Service, and Repository layers, resilient error boundaries, and integration test setup accelerated by ~40% using H2 in-memory DB.",
      architectureHighlights: [
        "Exposed 15+ REST endpoints with proper HTTP method semantics (GET, POST, PUT, DELETE)",
        "Role-based authentication & authorization using Spring Security and JWT tokens",
        "Robust CRUD processes for catalog, product inventory, and user profiles with Spring Data JPA",
        "Integrated MySQL for persistent storage and configured H2 in-memory DB cutting integration test setup by ~40%",
        "Global exception handling with custom error responses for standardized client-side API contracts",
        "Leveraged IoC containers, Maven build automation, and Lombok to cut boilerplate code by ~30%",
      ],
      techStack: ["Java", "Spring Boot", "Spring Security", "JWT", "Spring Data JPA", "Hibernate", "MySQL", "H2 Database", "Maven", "Lombok"],
      githubUrl: "https://github.com/akshaymacharla",
      keyFeatures: [
        "Layered Enterprise Architecture",
        "Role-Based Access Control (RBAC)",
        "Global Exception Handler",
        "H2 In-Memory Accelerated Testing",
        "Standardized REST Contracts"
      ],
      metricsOrEndpoints: "15+ REST Endpoints • 40% Faster Test Pipeline • 30% Reduced Boilerplate",
    },
    {
      id: "qflow",
      title: "QFlow",
      tagline: "Smart Queue & Digital Token Management System",
      category: "fullstack" as const,
      badge: "Full Stack & ML",
      description: "A smart queue orchestration platform featuring digital token issuance, dynamic wait-time estimation, and real-time counter status updates.",
      longDescription: "QFlow combines a robust Java Spring Boot backend with a lightweight machine learning prediction service to optimize physical waiting queues for service counters, clinics, and institutions. Provides real-time updates and seamless counter handoffs.",
      architectureHighlights: [
        "Spring Boot micro-services handling digital token lifecycles and counter state machines",
        "Python ML microservice estimating accurate wait-times based on rolling counter throughput",
        "Real-time token broadcast and state synchronization for kiosk displays",
        "Structured RESTful APIs with input validation and audit logging",
      ],
      techStack: ["Java", "Spring Boot", "Python ML", "React", "REST APIs", "WebSocket", "MySQL"],
      githubUrl: "https://github.com/akshaymacharla",
      keyFeatures: [
        "Digital Token Allocation",
        "Dynamic Wait Time Prediction",
        "Real-Time Counter Synchronizer",
        "Admin & Agent Operations Dashboard",
      ],
      metricsOrEndpoints: "Real-time Queue Telemetry • Sub-second Token Generation",
    },
    {
      id: "voice-attendance",
      title: "Voice-First Smart Attendance",
      tagline: "Level 3 Biometric Voice Verification System",
      category: "ai" as const,
      badge: "AI & Biometrics",
      description: "An AI-powered attendance system featuring dual-verification: combining spoken text recognition with live voice biometric embeddings to prevent spoofing.",
      longDescription: "Upgraded with Level 3 Security features. Solves proxy attendance in universities and conferences by checking not only what was said, but mathematically verifying who said it using deep speaker embeddings and cosine similarity scoring.",
      architectureHighlights: [
        "Dual-Layer Attendance: Text verification via SpeechRecognition + Voice biometrics via Resemblyzer numerical embeddings",
        "Cosine similarity calculation against registered biometric voice signature (passes only if score > 0.75)",
        "Dynamic personalized voice confirmation generated using Murf AI API",
        "Complete registration pipeline recording acoustic samples and storing encrypted biometric vectors",
      ],
      techStack: ["Python", "Flask", "Resemblyzer", "SpeechRecognition", "Murf AI API", "NumPy", "JavaScript"],
      githubUrl: "https://github.com/akshaymacharla",
      keyFeatures: [
        "Level 3 Anti-Spoofing Biometrics",
        "Cosine Similarity Embedding Match (>0.75)",
        "Real-time Murf AI Voice Synthesis",
        "Fast 2-Step Audio Pipeline",
      ],
      metricsOrEndpoints: ">0.75 Cosine Similarity Threshold • Dual-Factor Biometric Defense",
    },
    {
      id: "deepvoice-shield",
      title: "DeepVoice Shield",
      tagline: "AI Voice Security & Deepfake Audio Detection",
      category: "ai" as const,
      badge: "Security AI",
      description: "An AI research project exploring voice security, synthetic speech anomaly detection, and defense against audio manipulation.",
      longDescription: "Addresses the growing threat of AI voice clones and synthetic speech spoofing in biometric and financial verification systems. Extracts acoustic spectral features to discern algorithmic speech synthesis artifacts from human vocal tract acoustics.",
      architectureHighlights: [
        "Acoustic spectral feature extraction across frequency domains to spot synthetic harmonics",
        "Machine learning classifier trained on synthesized voice benchmarks",
        "Anomaly scoring engine outputting confidence scores for authentic vs synthetic audio",
        "Modular architecture ready for API integration with voice authentication workflows",
      ],
      techStack: ["Python", "Machine Learning", "Audio Processing", "FastAPI / Flask", "NumPy", "Scikit-Learn"],
      githubUrl: "https://github.com/akshaymacharla",
      keyFeatures: [
        "Deepfake Voice Detection",
        "Harmonic Artifact Analysis",
        "Confidence Anomaly Scoring",
        "Authentication Middleware Ready",
      ],
      metricsOrEndpoints: "Spectral Anomaly Classification • Modular Security API",
    },
    {
      id: "quiz-management",
      title: "Quiz Management System",
      tagline: "Java & Spring Boot Assessment Platform",
      category: "backend" as const,
      badge: "EdTech Build",
      description: "A Java/Spring Boot based quiz management platform designed to create, manage, conduct, and automatically evaluate quizzes efficiently.",
      longDescription: "Engineered to support academic quiz administration with role separation between Instructors and Students. Features timed exam sessions, randomized question sets, automated score calculation, and performance analytics.",
      architectureHighlights: [
        "Spring Boot backend with transactional evaluation pipeline and question pool management",
        "Spring Data JPA relationships mapping Quizzes, Questions, Options, and Student Submissions",
        "Timer synchronization and anti-tamper submission endpoints",
        "Instant score computation with detailed category breakdowns",
      ],
      techStack: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "REST APIs", "Maven"],
      githubUrl: "https://github.com/akshaymacharla",
      keyFeatures: [
        "Automated Quiz Evaluation",
        "Timed Session Handling",
        "Instructor & Student Role Management",
        "Instant Analytics & Reports",
      ],
      metricsOrEndpoints: "100% Automated Scoring • Transactional Submission Security",
    }
  ],

  // Career & Learning Journey
  journey: [
    {
      year: "2023 - Present",
      title: "B.S. in Computer Science",
      organization: "Chaitanya Deemed To Be University",
      subtitle: "Academic Excellence Honors • CGPA: 9.0+",
      description: "Maintaining a consistent 9.0+ GPA across all semesters. Mastering core computer science fundamentals, data structures, algorithms, operating systems, and database management.",
      highlightBadge: "Academic Excellence 9.0+",
      type: "education"
    },
    {
      year: "2023 - 2024",
      title: "Enterprise Backend Deep Dive",
      organization: "Self-Driven Engineering",
      subtitle: "Java 17, Spring Boot 3, Hibernate & Architecture",
      description: "Transitioned from fundamentals to enterprise-grade software architecture: mastering Spring IoC, dependency injection, layered MVC, Spring Security with JWT, and transactional JPA.",
      highlightBadge: "Backend Core",
      type: "technical"
    },
    {
      year: "2024",
      title: "Organizer — CODE COGNITION 2K24 Hackathon",
      organization: "University Event Supported by IBM",
      subtitle: "Leadership & Technical Operations",
      description: "Co-organized a university-wide hackathon with corporate backing from IBM. Managed 100+ registrations, coordinated technical tracks, and ensured seamless scheduling and execution.",
      highlightBadge: "IBM-Supported Event",
      type: "leadership"
    },
    {
      year: "2024 - 2025",
      title: "Architectural Systems & AI Exploration",
      organization: "Production Builds",
      subtitle: "FoodBridge, QFlow & Voice Biometrics",
      description: "Engineered FoodBridge (PostGIS spatial queries + Kafka + Redis TTL) and Level-3 Voice-First Biometric Attendance systems with anti-spoofing cosine similarity models.",
      highlightBadge: "Distributed Systems & AI",
      type: "technical"
    },
    {
      year: "2025 - Present",
      title: "Zinq Skills & Tech Trainer",
      organization: "Education Initiative",
      subtitle: "Bridging the Academia-Industry Gap",
      description: "Founded and scaled Zinq Skills to train 1,000s of students in practical Java backend, Spring Boot, Git, and real-world project development through hands-on workshops.",
      highlightBadge: "1,000s Students Trained",
      type: "educator"
    },
    {
      year: "Present",
      title: "Tech Content Creator",
      organization: "Instagram & Digital Platforms",
      subtitle: "@macharla_akshay",
      description: "Creating educational content around Java, AI, careers, internships, and software development.",
      highlightBadge: "Student-Focused Content",
      type: "creator"
    }
  ],

  // Workshops & Training tracks
  workshops: [
    {
      id: "java-backend",
      title: "Java & Backend Architecture",
      subtitle: "From OOP & Collections to Spring Boot 3 & REST APIs",
      audience: "CS Students & Aspiring Backend Engineers",
      duration: "2 to 3-Day Intensive or Semester Track",
      level: "Beginner to Intermediate",
      icon: "Server",
      description: "A comprehensive hands-on boot camp covering modern Java, enterprise architecture, Spring Boot 3 auto-configuration, Spring Data JPA, and building production REST APIs.",
      curriculum: [
        "Core Java 17/21 Features, Streams & Concurrency Basics",
        "Layered Architecture: Controller -> Service -> Repository",
        "Spring Boot 3, Dependency Injection & IoC Containers",
        "Building RESTful Endpoints with Clean HTTP Semantics",
        "Spring Data JPA, Hibernate Mapping & MySQL Database",
        "Spring Security Basics & JWT Authentication",
        "Global Exception Handling & Postman API Testing"
      ]
    },
    {
      id: "full-stack",
      title: "Full Stack Practical Application",
      subtitle: "Building Complete Web Apps with React & Spring Boot",
      audience: "Developers wanting end-to-end project competency",
      duration: "Weekend Workshop / Hands-on Bootcamp",
      level: "Intermediate",
      icon: "Layers",
      description: "Connecting a reactive frontend with a rigid Java backend. Students build a complete full-stack web application from database schema to interactive UI.",
      curriculum: [
        "API Contract Design: JSON payloads, DTOs & Validation",
        "React + Vite Setup & Clean Component Architecture",
        "State Management, Axios/Fetch & Async API Consumption",
        "Authentication Handshake: JWT Storage & Protected Routes",
        "CORS Configuration & Environment Configuration",
        "Deploying Backend (Render/Railway) & Frontend (Vercel)"
      ]
    },
    {
      id: "ai-emerging",
      title: "AI Tools & Applied Innovation",
      subtitle: "Generative AI, Voice AI, RAG & Developer Productivity",
      audience: "Students looking to supercharge their workflows",
      duration: "1 to 2-Day Interactive Workshop",
      level: "All Skill Levels",
      icon: "Sparkles",
      description: "Moving beyond toy AI prompts to practical engineering: using AI for code refactoring, voice biometrics, API-based speech synthesis, and building RAG workflows.",
      curriculum: [
        "Modern AI Tooling for Software Engineers",
        "Voice Biometrics & Cosine Similarity Principles",
        "Integrating Speech APIs: Murf AI & SpeechRecognition",
        "RAG (Retrieval-Augmented Generation) Architecture",
        "Agentic AI Concepts & Automated Workflows",
        "Best Practices for Building AI-Assisted Projects"
      ]
    },
    {
      id: "career-readiness",
      title: "Career & Industry Readiness",
      subtitle: "Building Proof-of-Work: GitHub, Resumes & Tech Interviews",
      audience: "Graduating Students & Job Seekers",
      duration: "Interactive Session / Masterclass",
      level: "Foundation to Advanced",
      icon: "Briefcase",
      description: "Empowering students with practical career frameworks. How to structure standout GitHub projects, write high-conversion resumes, and ace technical backend interviews.",
      curriculum: [
        "How to Stand Out: Moving Beyond Cliché To-Do Apps",
        "Crafting Architecture-First READMEs and GitHub Profiles",
        "Resume Teardowns: What Tech Recruiters Actually Look For",
        "Acing Java & Backend Technical Interview Questions",
        "Finding Internships, Networking & Personal Branding",
        "Portfolio Building that Showcases Real Engineering Depth"
      ]
    }
  ],

  // Content Creator Reel / Post Showcase
  creatorPosts: [
    {
      id: "post-1",
      title: "Spring Boot 3: Building Your First Production-Grade REST API",
      category: "Java & Backend",
      views: "68K+",
      likes: "4.2K",
      duration: "60s Reel",
      thumbnailGradient: "from-blue-600 to-indigo-800",
      summary: "Step-by-step breakdown of structuring Controller, Service, and Repository layers with clean DTO mapping and HTTP status codes."
    },
    {
      id: "post-2",
      title: "Why JPA @Version Protects You From Race Conditions",
      category: "Architecture",
      views: "52K+",
      likes: "3.8K",
      duration: "75s Reel",
      thumbnailGradient: "from-amber-600 to-orange-800",
      summary: "Explaining Optimistic Locking with real database examples. How two users booking the last ticket gets solved with a single annotation."
    },
    {
      id: "post-3",
      title: "PostGIS Explained: Finding Nearest Locations Under 30ms",
      category: "Architecture",
      views: "44K+",
      likes: "3.1K",
      duration: "90s Guide",
      thumbnailGradient: "from-emerald-600 to-teal-800",
      summary: "How ST_DWithin and ST_DistanceSphere work under the hood in PostgreSQL for real-time delivery and food redistribution apps."
    },
    {
      id: "post-4",
      title: "How to Land Your First Backend Developer Internship",
      category: "Career & Internships",
      views: "94K+",
      likes: "7.9K",
      duration: "60s Reel",
      thumbnailGradient: "from-purple-600 to-pink-800",
      summary: "The exact 4-step framework I used: solid core projects, clear GitHub commits, cold outreach strategy, and interview preparation."
    },
    {
      id: "post-5",
      title: "Apache Kafka in 60 Seconds: Producer, Topic, Consumer",
      category: "Java & Backend",
      views: "58K+",
      likes: "4.5K",
      duration: "60s Reel",
      thumbnailGradient: "from-red-600 to-rose-800",
      summary: "Demystifying asynchronous messaging and event-driven architecture using a simple pizza delivery analogy."
    },
    {
      id: "post-6",
      title: "AI Tools Every Engineering Student Must Know in 2026",
      category: "AI Tools",
      views: "81K+",
      likes: "6.1K",
      duration: "80s Reel",
      thumbnailGradient: "from-cyan-600 to-blue-800",
      summary: "Beyond standard chatbots: specialized coding assistants, voice synthesis APIs, automated testing tools, and system architecture visualizers."
    }
  ],

  // Zinq Skills Initiative
  zinqSkills: {
    brandName: "Zinq Skills",
    tagline: "Building the next generation of tech learners.",
    statement: "Zinq Skills is an education initiative focused on helping students build practical technology skills through workshops, projects, and industry-oriented learning.",
    mission: "Most college curriculums remain trapped in pure theory. Zinq Skills was born out of a passion to bridge that gap — empowering students to write real code, architect actual systems, and gain the confidence required to succeed in modern tech careers.",
    highlights: [
      { number: "1000+", label: "Students Reached" },
      { number: "100%", label: "Hands-on Project Focused" },
      { number: "4+", label: "Specialized Tech Tracks" },
      { number: "Zero", label: "Fluff or Pure Theory" },
    ],
    tracks: [
      "Enterprise Java & Spring Boot Development",
      "Modern Web & Full Stack Architecture",
      "Git, GitHub & Professional Developer Workflows",
      "Practical AI Tools & Automation for Developers"
    ]
  },

  // Highlighted GitHub repositories
  githubRepos: [
    {
      name: "foodbridge",
      description: "Real-time surplus food redistribution platform using Spring Boot 3, PostGIS spatial queries, Kafka, and Redis TTL caching.",
      language: "Java",
      languageColor: "#b07219",
      stars: "28",
      forks: "12",
      topics: ["spring-boot", "postgis", "kafka", "redis", "java17"],
      url: "https://github.com/akshaymacharla"
    },
    {
      name: "ecommerce-backend-api",
      description: "Layered enterprise RESTful backend with role-based JWT security, Spring Data JPA, and H2 testing acceleration.",
      language: "Java",
      languageColor: "#b07219",
      stars: "19",
      forks: "7",
      topics: ["spring-security", "jwt", "jpa", "mysql", "clean-architecture"],
      url: "https://github.com/akshaymacharla"
    },
    {
      name: "qflow-platform",
      description: "Digital queue management platform featuring automated token allocation and ML wait-time prediction service.",
      language: "Java / Python",
      languageColor: "#3572A5",
      stars: "16",
      forks: "5",
      topics: ["queue-management", "machine-learning", "spring-boot", "react"],
      url: "https://github.com/akshaymacharla"
    },
    {
      name: "voice-smart-attendance",
      description: "Level-3 biometric voice verification prototype combining text speech recognition with Resemblyzer cosine similarity.",
      language: "Python",
      languageColor: "#3572A5",
      stars: "24",
      forks: "9",
      topics: ["voice-biometrics", "resemblyzer", "murf-ai", "flask"],
      url: "https://github.com/akshaymacharla"
    }
  ]
};
