export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  scoreOrGpa?: string;
  highlights?: string[];
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const portfolioData = {
  name: "Chamath Pesara",
  tagline: "Full-Stack Developer | AI & DevOps Enthusiast",
  bio: "Passionate IT undergraduate with strong interests in full-stack development, AI, and DevOps. Experienced in building scalable mobile, web, and desktop applications with an emphasis on seamless user experience.",
  location: "Colombo, Sri Lanka",
  socials: {
    github: "https://github.com/ChamathPesara",
    linkedin: "https://linkedin.com/in/chamath-pesara-19033b386",
    email: "chamathpesara@gmail.com",
    phone: "0754393558",
  },

  // Tech Stack / Skills Section
  techStack: [
    {
      category: "Full-Stack & Web",
      skills: ["React", "Node.js", "Express.js", "MongoDB", "Next.js", "REST APIs", "JWT Auth", "Stripe Integration"],
    },
    {
      category: "AI, ML & Mobile",
      skills: ["Android Studio", "TensorFlow Lite", "MobileNet CNN", "Deep Learning", "Audio Processing", "Python"],
    },
    {
      category: "DevOps & Cloud",
      skills: ["AWS (DevOps & AI)", "Docker", "CI/CD Foundations", "Git", "GitHub"],
    },
    {
      category: "Desktop & Other Languages",
      skills: ["C++", "Qt Framework", "Prompt Engineering", "Figma Plugin Development", "UI/UX QA"],
    },
  ] as SkillCategory[],

  // Academic Details
  academics: [
    {
      degree: "BSc in Information Technology (Reading)",
      institution: "Rajarata University of Sri Lanka",
      period: "2023 — Present",
      scoreOrGpa: "GPA: 3.4",
      highlights: [
        "Final Year Project: ARGUS — A Figma plugin that detects near real-time UI/UX issues in Figma designs.",
        "Active Member of the Zero Plastic Club and Gavel Club.",
      ],
    },
    {
      degree: "Diploma in Information Technology",
      institution: "ESOFT Metro Campus",
      period: "2019",
    },
  ] as Education[],

  // Achievements & Certifications
  achievements: [
    {
      title: "2nd Runners Up — Innorbit Exhibition",
      issuer: "Innorbit / Evaluation Panel",
      date: "Recent",
      description: "Won 2nd Runners Up as part of Team SHINKA for evaluating and presenting our final year innovation project (ARGUS).",
    },
    {
      title: "DevOps and AI on AWS",
      issuer: "Amazon Web Services (AWS)",
      date: "2026",
      description: "Certified proficiency in cloud-native DevOps pipelines and AI service integration on AWS.",
    },
    {
      title: "Introduction to DevOps",
      issuer: "IBM",
      date: "2026",
      description: "Foundational mastery in CI/CD, agile methodologies, and automation.",
    },
    {
      title: "Prompt Engineering for ChatGPT",
      issuer: "Vanderbilt University",
      date: "2026",
      description: "Advanced techniques for prompting, instruction optimization, and LLM application development.",
    },
    {
      title: "Full Stack Development",
      issuer: "University of Moratuwa",
      date: "2024",
      description: "Comprehensive training in modern web application design and implementation.",
    },
    {
      title: "AI & ML Bootcamp",
      issuer: "Udemy",
      date: "2025",
      description: "Hands-on implementation of machine learning models, neural networks, and computer vision pipelines.",
    },
  ] as Achievement[],

  // Projects from your portfolio & resume
  projects: [
    {
      title: "ARGUS (Final Year Project - Team SHINKA)",
      description: "A Figma plugin that detects near real-time UI/UX issues inside Figma designs to improve accessibility and design compliance.",
      tags: ["Figma Plugin API", "JavaScript/TypeScript", "UI/UX QA", "Heuristics"],
      githubUrl: "https://github.com/ChamathPesara",
    },
    {
      title: "AirCheck",
      description: "An AI-integrated Android app that provides diagnostics for breathing-related diseases using audio recordings as inputs.",
      tags: ["Android Studio", "Python", "Deep Learning", "CNN", "Audio Processing"],
      githubUrl: "https://github.com/ChamathPesara",
    },
    {
      title: "PetBreedAI",
      description: "Mobile computer-vision app utilizing MobileNet CNN architecture for accurate classification across 37 dog and cat breeds.",
      tags: ["Android Studio", "TensorFlow Lite", "MobileNet CNN", "Java/Kotlin"],
      githubUrl: "https://github.com/ChamathPesara",
    },
    {
      title: "SkyBook",
      description: "Full-featured flight ticket reservation web application complete with secure authentication and integrated payment handling.",
      tags: ["React", "Node.js", "Express.js", "JWT", "Stripe"],
      githubUrl: "https://github.com/ChamathPesara",
    },
    {
      title: "LuxeStay",
      description: "Modern hotel booking platform supporting room availability discovery, reservation management, and role-based access.",
      tags: ["MongoDB Atlas", "Express.js", "React", "Node.js", "JWT"],
      githubUrl: "https://github.com/ChamathPesara",
    },
    {
      title: "Cee-Weather",
      description: "Global weather monitoring dashboard utilizing real-time meteorological data via the OpenWeather REST API.",
      tags: ["React", "Express.js", "Node.js", "OpenWeather API"],
      githubUrl: "https://github.com/ChamathPesara",
    },
    {
      title: "Income & Expense Tracker",
      description: "Desktop financial management application built with desktop UI components and persistent CSV data pipelines.",
      tags: ["C++", "Qt", "CSV Persistence", "Desktop GUI"],
      githubUrl: "https://github.com/ChamathPesara",
    },
  ] as Project[],
};