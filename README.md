<div align="center">

  # 🌐 Chamath Pesara — Developer Portfolio

  **A modern, responsive, and performance-focused developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.**

  <p align="center">
    <a href="https://my-portfolio-omega-orcin-70.vercel.app">
      <img src="https://img.shields.io/badge/Live_Demo-my--portfolio.vercel.app-6366F1?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
    </a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Next.js_14%2B-black?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-black?style=flat-square&logo=framer&logoColor=blue" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/Deployment-Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />
  </p>

</div>

---

## ⚡ Overview

This repository contains the source code for my personal engineering portfolio. It is architected around a **centralized data pipeline** (`data/portfolio.ts`) that decouples presentation components from profile data, making content updates instant and maintainable.

### ✨ Key Features

- **Developer Aesthetic UI:** Dark-mode slate palette accented with a radial dot-matrix background and ambient glow flares.
- **Typewriter Terminal Header:** Animated custom typewriter cycling through core technical roles with a blinking terminal cursor.
- **Micro-Interactions & Transitions:** Fluid scroll-triggered section reveals and interactive card hover physics powered by Framer Motion.
- **Direct Resume Access:** Integrated one-click preview and download pipeline for CV distribution.
- **Modular Sections:**
  - 🛠️ **Technical Arsenal:** Categorized stack badges (Full-Stack, AI & ML, DevOps & Cloud, Desktop GUI).
  - 💻 **Featured Projects:** Deep links to repositories and live demos.
  - 🏆 **Achievements & Honors:** Recognitions including 2nd Runners Up at the Innorbit Exhibition (Team SHINKA).
  - 💼 **Professional Experience:** NVQ-certified traineeship at P&S Bakers.
  - 🎓 **Academic Background:** BSc in Information Technology at Rajarata University of Sri Lanka.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Motion & FX** | Framer Motion |
| **Icons** | Lucide React & Custom SVG Components |
| **Hosting** | Vercel CI/CD |

---

## 📂 Project Architecture

```plaintext
├── app/
│   ├── globals.css          # Tailwind setup, dot-matrix patterns & theme variables
│   ├── layout.tsx           # Base HTML scaffolding & font configuration
│   └── page.tsx             # Composed portfolio page & dynamic sections
├── components/
│   ├── icons.tsx            # Clean SVG brand vectors (GitHub, LinkedIn)
│   ├── MotionWrapper.tsx    # Client-side Framer Motion animation primitives
│   └── Typewriter.tsx       # Dynamic role cycling component
├── data/
│   └── portfolio.ts         # Single source of truth (Bio, Stack, Projects, Awards)
├── public/
│   ├── profile.png          # Developer headshot
│   └── Chamath_Pesara_Resume.pdf  # Downloadable resume
└── package.json
