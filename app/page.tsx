import { portfolioData } from "@/data/portfolio";
import { 
  Mail, 
  MapPin, 
  GraduationCap, 
  Trophy, 
  FolderGit2, 
  Code2, 
  ArrowUpRight 
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Link from "next/link";

export default function Home() {
  const { name, tagline, bio, location, socials, techStack, academics, achievements, projects } = portfolioData;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/15 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 space-y-24">
        {/* --- Hero / Bio --- */}
        <section className="space-y-6 pt-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for full-time roles & internships
            </span>
            <span className="inline-flex items-center gap-1 text-slate-400 text-xs font-mono">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              {location}
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              {name}
            </h1>
            <p className="text-xl text-indigo-400 font-medium">{tagline}</p>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">{bio}</p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href={socials.github}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800 hover:border-slate-700 transition text-sm font-medium"
            >
              <GithubIcon className="w-4 h-4 text-slate-300" />
              GitHub
            </Link>
            <Link
              href={socials.linkedin}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800 hover:border-slate-700 transition text-sm font-medium"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-400" />
              LinkedIn
            </Link>
            <Link
              href={`mailto:${socials.email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition shadow-lg shadow-indigo-600/20"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </Link>
          </div>
        </section>

        {/* --- Tech Stack Section --- */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
            <Code2 className="w-6 h-6 text-indigo-400" />
            <h2 className="text-2xl font-bold tracking-tight text-white">Technical Arsenal</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {techStack.map((group, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-slate-800/80 bg-slate-900/30 backdrop-blur-sm space-y-3"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-300">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-800/70 text-slate-300 border border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Featured Projects --- */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
            <FolderGit2 className="w-6 h-6 text-indigo-400" />
            <h2 className="text-2xl font-bold tracking-tight text-white">Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl border border-slate-800/90 bg-slate-900/30 hover:bg-slate-900/60 hover:border-indigo-500/40 transition flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                      {proj.title}
                    </h3>
                    {proj.githubUrl && (
                      <Link
                        href={proj.githubUrl}
                        target="_blank"
                        className="text-slate-400 hover:text-white transition"
                        aria-label="GitHub Repo"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{proj.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-800/60 text-slate-300 border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Achievements & Certifications --- */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
            <Trophy className="w-6 h-6 text-amber-400" />
            <h2 className="text-2xl font-bold tracking-tight text-white">Achievements & Certifications</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition ${
                  idx === 0
                    ? "border-amber-500/40 bg-amber-500/5 shadow-md shadow-amber-500/5"
                    : "border-slate-800/90 bg-slate-900/40 hover:bg-slate-900/70 hover:border-slate-700"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-slate-200 leading-snug">{item.title}</h3>
                  <span className="text-[11px] font-mono text-slate-400 shrink-0">{item.date}</span>
                </div>
                <p className="text-xs text-indigo-400 font-medium mt-1">{item.issuer}</p>
                <p className="text-sm text-slate-400 mt-2.5 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Academic Details --- */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
            <GraduationCap className="w-6 h-6 text-indigo-400" />
            <h2 className="text-2xl font-bold tracking-tight text-white">Academic Details</h2>
          </div>

          <div className="space-y-6">
            {academics.map((edu, idx) => (
              <div
                key={idx}
                className="relative pl-6 border-l-2 border-slate-800 hover:border-indigo-500/60 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-lg font-semibold text-slate-200">{edu.degree}</h3>
                  <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                </div>
                <p className="text-sm text-indigo-300 font-medium">{edu.institution}</p>
                {edu.scoreOrGpa && <p className="text-xs text-slate-400 mt-1">{edu.scoreOrGpa}</p>}
                {edu.highlights && (
                  <ul className="mt-3 list-disc list-inside text-sm text-slate-400 space-y-1">
                    {edu.highlights.map((item, hIdx) => (
                      <li key={hIdx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 text-center text-xs text-slate-500 border-t border-slate-900">
            © 2026 Chamath Pesara. Built with Next.js, TypeScript & Tailwind CSS.
        </footer>
      </div>
    </main>
  );
}