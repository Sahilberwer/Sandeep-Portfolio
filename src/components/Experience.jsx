import { useState } from "react";
import { ChevronDown, Briefcase } from "lucide-react";
import { experience } from "../data/content";
import Reveal from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";

export default function Experience() {
  const [openId, setOpenId] = useState(experience[0].id);

  return (
    <section id="experience" className="relative px-5 sm:px-8 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="font-mono text-sm text-[var(--teal)] mb-3">on the job</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--ink)] mb-14">
            Experience
          </h2>
        </Reveal>

        <div className="space-y-4">
          {experience.map((e, i) => {
            const isOpen = openId === e.id;
            return (
              <Reveal key={e.id} delay={i * 0.05}>
                <button
                  onClick={() => setOpenId(isOpen ? null : e.id)}
                  className="w-full text-left glass rounded-2xl px-6 py-5 hover:border-[var(--signal)]/40 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span className="grid place-items-center h-10 w-10 rounded-xl bg-[var(--signal)]/15 text-[var(--signal)] shrink-0">
                        <Briefcase size={18} />
                      </span>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-display text-lg font-semibold text-[var(--ink)]">
                            {e.role}
                          </h3>
                          {e.current && (
                            <span className="text-[10px] font-mono uppercase tracking-wide text-[var(--teal)] border border-[var(--teal)]/30 bg-[var(--teal)]/10 rounded-full px-2 py-0.5">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-[var(--ink-muted)]">
                          {e.org} · {e.period}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 mt-2 text-[var(--ink-muted)] transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-[var(--ink-muted)] mt-4 pl-14 leading-relaxed">
                          {e.summary}
                        </p>
                        <ul className="mt-3 pl-14 space-y-1.5">
                          {e.details.map((d) => (
                            <li
                              key={d}
                              className="text-sm text-[var(--ink)]/80 flex gap-2"
                            >
                              <span className="text-[var(--signal)] mt-1.5">•</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </Reveal>
            );
          })}

          <Reveal>
            <div className="text-center border border-dashed border-[var(--line)] rounded-2xl py-6 text-[var(--ink-dim)] text-sm">
              + space reserved for future roles
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
