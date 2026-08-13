import { skillCategories } from "../data/content";
import Reveal from "./Reveal";

const levelStyles = {
  Strong: "bg-[var(--signal)]/15 text-[var(--signal)] border-[var(--signal)]/30",
  Intermediate: "bg-[var(--teal)]/10 text-[var(--teal)] border-[var(--teal)]/25",
  Beginner: "bg-[var(--ink-dim)]/10 text-[var(--ink-muted)] border-[var(--line)]",
  "Currently Learning": "bg-[var(--ember)]/12 text-[var(--ember)] border-[var(--ember)]/30",
};

export default function Skills() {
  return (
    <section id="skills" className="relative px-5 sm:px-8 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-sm text-[var(--teal)] mb-3">what I actually use</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--ink)] mb-4">
            Skills, honestly rated
          </h2>
          <p className="text-[var(--ink-muted)] max-w-xl mb-14">
            No fake 95% bars. Just where I really am — Beginner, Intermediate, Strong,
            or Currently Learning.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.category} delay={i * 0.05}>
              <div className="glass rounded-2xl p-6 h-full">
                <h3 className="font-display font-semibold text-[var(--ink)] mb-4">
                  {cat.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <li
                      key={s.name}
                      className={`text-xs font-medium rounded-full border px-3 py-1.5 ${levelStyles[s.level]}`}
                      title={s.level}
                    >
                      {s.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap gap-4 text-xs text-[var(--ink-dim)] font-mono">
            {Object.entries(levelStyles).map(([level, cls]) => (
              <span key={level} className="flex items-center gap-1.5">
                <span className={`h-2.5 w-2.5 rounded-full border ${cls}`} />
                {level}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
