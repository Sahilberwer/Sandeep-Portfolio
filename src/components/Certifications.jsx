import { Award, ExternalLink } from "lucide-react";
import { certifications } from "../data/content";
import Reveal from "./Reveal";

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-5 sm:px-8 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-sm text-[var(--teal)] mb-3">receipts</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--ink)] mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-[var(--ink-muted)] max-w-xl mb-14">
            Placeholders stay placeholders until verified — nothing here is invented.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.05}>
              <div className="glass rounded-2xl p-6 h-full flex flex-col">
                <span className="grid place-items-center h-10 w-10 rounded-xl bg-[var(--ember)]/12 text-[var(--ember)] mb-4">
                  <Award size={18} />
                </span>
                <h3 className="font-display font-semibold text-[var(--ink)] leading-snug mb-1">
                  {c.name}
                </h3>
                <p className="text-sm text-[var(--ink-muted)] mb-4">
                  {c.org} · {c.date}
                </p>
                <a
                  href={c.link.startsWith("[") ? undefined : c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto inline-flex items-center gap-1.5 text-sm ${
                    c.link.startsWith("[")
                      ? "text-[var(--ink-dim)] cursor-default"
                      : "text-[var(--signal)] hover:underline"
                  }`}
                >
                  <ExternalLink size={14} />
                  {c.link.startsWith("[") ? c.link : "Verify"}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
