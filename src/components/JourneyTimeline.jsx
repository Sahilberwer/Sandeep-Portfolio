import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { journey } from "../data/content";
import Reveal from "./Reveal";

export default function JourneyTimeline() {
  const [openId, setOpenId] = useState(journey[0].id);

  return (
    <section id="journey" className="relative px-5 sm:px-8 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="font-mono text-sm text-[var(--teal)] mb-3">git log --graph --all</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--ink)] mb-4">
            The Journey Timeline
          </h2>
          <p className="text-[var(--ink-muted)] max-w-xl mb-16">
            Every milestone here is a commit in a longer build. Tap any node to see what
            I learned, what I used, and what it actually changed.
          </p>
        </Reveal>

        <div className="relative">
          {/* the spine */}
          <div
            className="absolute left-[15px] sm:left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--signal)] via-[var(--teal)] to-transparent"
            aria-hidden="true"
          />

          <ul className="space-y-3">
            {journey.map((item, i) => {
              const isOpen = openId === item.id;
              return (
                <Reveal key={item.id} delay={i * 0.03}>
                  <li className="relative pl-11 sm:pl-14">
                    {/* node */}
                    <span
                      className={`absolute left-0 top-3 grid place-items-center h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 transition-colors ${
                        item.future
                          ? "border-dashed border-[var(--ember)] bg-[var(--bg)]"
                          : isOpen
                          ? "border-[var(--signal)] bg-[var(--signal)]/20"
                          : "border-[var(--line)] bg-[var(--surface)]"
                      }`}
                    >
                      {item.future ? (
                        <Sparkles size={14} className="text-[var(--ember)]" />
                      ) : (
                        <span
                          className={`h-2 w-2 rounded-full ${
                            isOpen ? "bg-[var(--signal)]" : "bg-[var(--ink-dim)]"
                          }`}
                        />
                      )}
                    </span>

                    <button
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      className="w-full text-left glass rounded-2xl px-5 py-4 sm:px-6 sm:py-5 hover:border-[var(--signal)]/40 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="font-mono text-xs text-[var(--ink-dim)]">
                            {item.period}
                          </span>
                          <h3 className="font-display text-lg sm:text-xl font-semibold text-[var(--ink)] mt-1">
                            {item.title}
                          </h3>
                        </div>
                        <ChevronDown
                          size={18}
                          className={`shrink-0 mt-1 text-[var(--ink-muted)] transition-transform ${
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
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="text-[var(--ink-muted)] leading-relaxed mt-4">
                              {item.summary}
                            </p>

                            {item.learned?.length > 0 && (
                              <div className="mt-4">
                                <p className="font-mono text-xs text-[var(--teal)] mb-2">
                                  what I learned
                                </p>
                                <ul className="flex flex-wrap gap-2">
                                  {item.learned.map((l) => (
                                    <li
                                      key={l}
                                      className="text-xs sm:text-sm text-[var(--ink)]/80 bg-[var(--surface-2)] rounded-full px-3 py-1"
                                    >
                                      {l}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {item.tech?.length > 0 && (
                              <div className="mt-4">
                                <p className="font-mono text-xs text-[var(--ember)] mb-2">
                                  tech
                                </p>
                                <ul className="flex flex-wrap gap-2">
                                  {item.tech.map((t) => (
                                    <li
                                      key={t}
                                      className="font-mono text-xs text-[var(--ink-muted)] border border-[var(--line)] rounded-md px-2 py-1"
                                    >
                                      {t}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            <p className="mt-4 text-sm text-[var(--ink)]/70 italic">
                              → {item.impact}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
