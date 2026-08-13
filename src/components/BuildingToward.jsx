import { Target } from "lucide-react";
import { buildingToward } from "../data/content";
import Reveal from "./Reveal";

export default function BuildingToward() {
  return (
    <section id="building" className="relative px-5 sm:px-8 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="font-mono text-sm text-[var(--teal)] mb-3">right now</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--ink)] mb-14">
            What I'm Building Toward
          </h2>
        </Reveal>

        <div className="space-y-3">
          {buildingToward.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.04}>
              <div className="glass rounded-2xl px-6 py-5 flex items-start gap-4">
                <span className="grid place-items-center h-9 w-9 rounded-lg bg-[var(--signal)]/15 text-[var(--signal)] shrink-0 mt-0.5">
                  <Target size={16} />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-[var(--ink)]">{b.title}</h3>
                  <p className="text-sm text-[var(--ink-muted)] mt-1">{b.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
