import { portfolioData } from "@/data/portfolio";
import { 
  Mail, 
  MapPin, 
  GraduationCap, 
  Trophy, 
  FolderGit2, 
  Code2, 
  ArrowUpRight,
  Terminal,
  FileDown,
  Sparkles,
  Briefcase 
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { FadeIn, CardHover } from "@/components/MotionWrapper";
import { Typewriter } from "@/components/Typewriter";
import Link from "next/link";
import Image from "next/image"; // <-- 1. Import optimized image component

export default function Home() {
  const { 
    name, 
    profileImage, 
    typewriterRoles, 
    bio, 
    location, 
    socials, 
    resumeUrl, 
    techStack,
    experience, 
    academics, 
    achievements, 
    projects 
  } = portfolioData;

  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-indigo-200 overflow-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-dot-pattern opacity-60" />
      <div className="fixed inset-0 pointer-events-none -z-10 bg-gradient-to-b from-transparent via-slate-950/70 to-slate-950" />
      
      <div className="fixed top-[-10rem] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-indigo-600/20 via-violet-600/15 to-cyan-500/10 blur-[130px] pointer-events-none -z-10 rounded-full" />
      <div className="fixed bottom-[-10rem] right-[-10rem] w-[500px] h-[400px] bg-indigo-900/15 blur-[140px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-4xl mx-auto px-6 py-20 space-y-28">

        {/* --- Hero Section --- */}
        <section className="space-y-7 pt-12 sm:pt-16">
          <FadeIn delay={0.1} className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-4 order-2 sm:order-1">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-slate-900/80 backdrop-blur-md shadow-inner shadow-indigo-500/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-indigo-300 text-xs font-mono tracking-wide">
                  Available for Roles & Internships
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                  {name}
                </span>
              </h1>

              {/* Typewriter Subheading */}
              <div className="text-lg sm:text-2xl font-mono text-indigo-400 font-medium tracking-tight flex items-center gap-2 min-h-[2rem]">
                <Terminal className="w-5 h-5 text-indigo-400 shrink-0" />
                <Typewriter words={typewriterRoles} />
              </div>
            </div>

            {/* Profile Picture (Animated and styled with glowing borders) */}
            {profileImage && (
              <div className="order-1 sm:order-2 shrink-0">
                <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full p-1 bg-gradient-to-tr from-indigo-500 to-cyan-400 shadow-xl shadow-indigo-500/15">
                  <div className="w-full h-full rounded-full overflow-hidden border border-slate-955 bg-slate-900">
                    <Image
                      src={profileImage}
                      alt={`${name}'s photo`}
                      width={144}
                      height={144}
                      priority
                      className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            )}
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {bio}
            </p>
          </FadeIn>

          {/* Action Links */}
          <FadeIn delay={0.4} className="flex flex-wrap items-center gap-3 pt-2">
            {resumeUrl && (
              <a
                href={resumeUrl}
                download="Chamath_Pesara_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-indigo-500/40 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 hover:text-white font-medium text-sm transition-all shadow-sm active:scale-95"
              >
                <FileDown className="w-4 h-4 text-indigo-400" />
                My Resume
              </a>
            )}

            <Link
              href={`mailto:${socials.email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-600/25 active:scale-95"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </Link>

            <Link
              href={socials.github}
              target="_blank"
              className="group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-900/80 hover:bg-slate-800 hover:border-slate-700 hover:text-white transition-all text-sm font-medium shadow-sm"
            >
              <GithubIcon className="w-4 h-4 text-slate-300 group-hover:scale-110 transition-transform" />
              GitHub
            </Link>

            <Link
              href={socials.linkedin}
              target="_blank"
              className="group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-900/80 hover:bg-slate-800 hover:border-slate-700 hover:text-white transition-all text-sm font-medium shadow-sm"
            >
              <LinkedinIcon className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
              LinkedIn
            </Link>

            <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono pl-1">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              {location}
            </div>
          </FadeIn>
        </section>

        {/* ... Rest of your sections (Tech Stack, Projects, Achievements, Academics, Footer) */}

        {/* --- Tech Stack Section --- */}
        <FadeIn delay={0.1}>
          <section className="space-y-7">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-3">
                <Code2 className="w-5 h-5 text-indigo-400" />
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">Technical Arsenal</h2>
              </div>
              <span className="text-xs font-mono text-slate-500">// skills & toolchain</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {techStack.map((group, idx) => (
                <CardHover key={idx} className="h-full">
                  <div className="h-full p-5 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md hover:border-indigo-500/30 transition-colors space-y-3 shadow-sm">
                    <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-300/90">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-800/60 text-slate-300 border border-slate-700/50 hover:border-indigo-500/50 hover:text-white transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardHover>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* --- Featured Projects --- */}
        <FadeIn delay={0.1}>
          <section className="space-y-7">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-3">
                <FolderGit2 className="w-5 h-5 text-indigo-400" />
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">Featured Projects</h2>
              </div>
              <span className="text-xs font-mono text-slate-500">// code & architecture</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {projects.map((proj, idx) => (
                <CardHover key={idx} className="h-full">
                  <div className="group h-full p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md hover:border-indigo-500/40 transition-all flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                          {proj.title}
                        </h3>
                        {proj.githubUrl && (
                          <Link
                            href={proj.githubUrl}
                            target="_blank"
                            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
                            aria-label="GitHub Repository"
                          >
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </Link>
                        )}
                      </div>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                        {proj.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-5">
                      {proj.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-800/50 text-slate-400 border border-slate-700/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardHover>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* --- Work Experience Section --- */}
        <FadeIn delay={0.1}>
          <section className="space-y-7">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-indigo-400" />
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">Work Experience</h2>
              </div>
              <span className="text-xs font-mono text-slate-500">// professional background</span>
            </div>

            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative pl-6 border-l border-slate-800 hover:border-indigo-500/70 transition-colors"
                >
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-slate-700 hover:bg-indigo-400 transition" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base sm:text-lg font-semibold text-slate-200">{exp.role}</h3>
                      {exp.badge && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-slate-500">{exp.period}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-indigo-400 font-medium mt-0.5">{exp.company}</p>

                  <ul className="mt-3 list-disc list-inside text-xs sm:text-sm text-slate-400 space-y-1.5">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="leading-relaxed">{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* --- Achievements & Honors --- */}
        <FadeIn delay={0.1}>
          <section className="space-y-7">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-3">
                <Trophy className="w-5 h-5 text-amber-400" />
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">Achievements & Certifications</h2>
              </div>
              <span className="text-xs font-mono text-slate-500">// milestones</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((item, idx) => (
                <CardHover key={idx} className="h-full">
                  <div
                    className={`h-full p-5 rounded-2xl border backdrop-blur-md transition-all ${
                      idx === 0
                        ? "border-amber-500/40 bg-gradient-to-br from-amber-500/10 via-slate-900/60 to-slate-900/40 shadow-sm"
                        : "border-slate-800/80 bg-slate-900/40 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-slate-200 text-sm leading-snug flex items-center gap-1.5">
                        {idx === 0 && <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                        {item.title}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-500 shrink-0">{item.date}</span>
                    </div>
                    <p className="text-xs text-indigo-400 font-medium mt-1">{item.issuer}</p>
                    <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed">{item.description}</p>
                  </div>
                </CardHover>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* --- Academic Details --- */}
        <FadeIn delay={0.1}>
          <section className="space-y-7">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">Academic Details</h2>
              </div>
              <span className="text-xs font-mono text-slate-500">// education</span>
            </div>

            <div className="space-y-6">
              {academics.map((edu, idx) => (
                <div
                  key={idx}
                  className="relative pl-6 border-l border-slate-800 hover:border-indigo-500/70 transition-colors"
                >
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-slate-700 group-hover:bg-indigo-400 transition" />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-200">{edu.degree}</h3>
                    <span className="text-xs font-mono text-slate-500">{edu.period}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-indigo-400 font-medium mt-0.5">{edu.institution}</p>
                  {edu.scoreOrGpa && <p className="text-xs font-mono text-slate-400 mt-1">{edu.scoreOrGpa}</p>}
                  {edu.highlights && (
                    <ul className="mt-3 list-disc list-inside text-xs sm:text-sm text-slate-400 space-y-1">
                      {edu.highlights.map((item, hIdx) => (
                        <li key={hIdx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* --- Footer --- */}
        <footer className="pt-12 text-center text-xs font-mono text-slate-600 border-t border-slate-900">
          © 2026 {name} • Built with Next.js & Tailwind CSS
        </footer>
      </div>
    </main>
  );
}