import { useState, useMemo } from "react";
import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { projects } from "../data/content";
import Reveal from "./Reveal";

const filters = ["All", "AI/ML", "Web", "Full Stack"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.tags.includes(filter));
  }, [filter]);

  return (
    <section id="projects" className="relative px-5 sm:px-8 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-sm text-[var(--teal)] mb-3">what I've shipped</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--ink)] mb-4">
            Projects
          </h2>
          <p className="text-[var(--ink-muted)] max-w-xl mb-10">
            From a static family album site to a 10-model stock prediction platform —
            evidence of the climb, not just the summit.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
                  filter === f
                    ? "bg-[var(--signal)] border-[var(--signal)] text-white"
                    : "border-[var(--line)] text-[var(--ink-muted)] hover:text-[var(--ink)] hover:border-[var(--signal)]/50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 0.05}>
              <article
                className={`glass rounded-2xl p-6 h-full flex flex-col ${
                  p.flagship ? "ring-1 ring-[var(--signal)]/40" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-display text-xl font-semibold text-[var(--ink)]">
                    {p.name}
                  </h3>
                  {p.flagship && (
                    <span className="shrink-0 inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wide text-[var(--ember)] border border-[var(--ember)]/30 bg-[var(--ember)]/10 rounded-full px-2 py-1">
                      <Star size={10} /> Flagship
                    </span>
                  )}
                </div>

                <span className="font-mono text-[11px] text-[var(--ink-dim)] mb-4">
                  {p.status}
                </span>

                <p className="text-sm text-[var(--ink-muted)] mb-3">
                  <span className="text-[var(--ink)]/80 font-medium">Problem: </span>
                  {p.problem}
                </p>
                <p className="text-sm text-[var(--ink-muted)] mb-4">
                  <span className="text-[var(--ink)]/80 font-medium">Solution: </span>
                  {p.solution}
                </p>

                <ul className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="font-mono text-[11px] text-[var(--ink-muted)] border border-[var(--line)] rounded-md px-2 py-1"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 border-t border-[var(--line)] flex items-center gap-4">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
                  >
                    <GithubIcon size={15} /> Code
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
                    >
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 text-center border border-dashed border-[var(--line)] rounded-2xl py-8 text-[var(--ink-dim)] text-sm">
            + more AI/ML projects coming as I build them
          </div>
        </Reveal>
      </div>
    </section>
  );
}
