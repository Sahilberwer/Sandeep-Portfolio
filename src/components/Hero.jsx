import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-5 sm:px-8 pt-24 pb-16"
    >
      <div className="mx-auto max-w-5xl w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm text-[var(--teal)] mb-6 flex items-center gap-2"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--teal)] animate-pulse-slow" />
          currently building · GJUST Hisar
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-semibold text-[13vw] sm:text-7xl md:text-8xl leading-[0.95] tracking-tight text-gradient"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 font-display text-xl sm:text-2xl text-[var(--ink)]/90 max-w-2xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-5 text-base sm:text-lg text-[var(--ink-muted)] max-w-xl leading-relaxed"
        >
          {profile.heroStatement}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <button
            onClick={() =>
              document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 rounded-full bg-[var(--signal)] text-white px-6 py-3 text-sm font-semibold hover:bg-[var(--signal-2)] transition-colors"
          >
            Explore My Journey
            <ArrowDown size={16} />
          </button>
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] text-[var(--ink)] px-6 py-3 text-sm font-semibold hover:border-[var(--signal)] transition-colors"
          >
            View Projects
          </button>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] text-[var(--ink-muted)] px-5 py-3 text-sm font-medium hover:text-[var(--ink)] hover:border-[var(--signal)] transition-colors"
          >
            <GithubIcon size={16} /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] text-[var(--ink-muted)] px-5 py-3 text-sm font-medium hover:text-[var(--ink)] hover:border-[var(--signal)] transition-colors"
          >
            <LinkedinIcon size={16} /> LinkedIn
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] text-[var(--ink-muted)] px-5 py-3 text-sm font-medium hover:text-[var(--ink)] hover:border-[var(--signal)] transition-colors"
          >
            <FileText size={16} /> Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--ink-dim)]"
      >
        <ArrowDown size={18} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
