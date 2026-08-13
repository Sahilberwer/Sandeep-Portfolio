import Reveal from "./Reveal";

const beats = [
  {
    label: "Beginning",
    text: "I started B.Tech CSE (AI & ML) at GJUST Hisar without a strong programming background — just curiosity about how AI actually works under the hood.",
  },
  {
    label: "Learning",
    text: "Python, C++, and the fundamentals of ML — Scikit-learn, Pandas, NumPy — turned from lecture slides into things I could actually use on real data.",
  },
  {
    label: "Challenges",
    text: "Going from tutorial code to something that runs cleanly end-to-end is a different skill entirely. Debugging MERN stacks and tuning classifiers taught me that finishing is harder than starting.",
  },
  {
    label: "Projects",
    text: "Each project — from a simple family album site to a 10-model stock prediction platform — pushed the bar higher than the last.",
  },
  {
    label: "Internship",
    text: "CodeAlpha gave me my first structured internship experience across both Full Stack and ML tracks. Honeywell is where I'm applying AI in a professional setting right now.",
  },
  {
    label: "Growth",
    text: "Somewhere between building SkillVerse AI's monorepo and comparing 10 models in StockVision AI, I stopped thinking like a student following instructions and started thinking like an engineer making decisions.",
  },
  {
    label: "Current Stage",
    text: "Right now I'm balancing production-grade project work, an active AI internship, and GATE DA 2026 preparation — three different kinds of rigor, at once.",
  },
  {
    label: "Future Direction",
    text: "I'm building toward a career at the intersection of AI/ML and software engineering — going deeper into Generative AI and real-world AI applications.",
  },
];

export default function Story() {
  return (
    <section id="story" className="relative px-5 sm:px-8 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="font-mono text-sm text-[var(--teal)] mb-3">the story so far</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--ink)] mb-16">
            Not a resume.
            <br />A transformation.
          </h2>
        </Reveal>

        <div className="space-y-10">
          {beats.map((b, i) => (
            <Reveal key={b.label} delay={i * 0.04}>
              <div className="grid grid-cols-[auto_1fr] gap-5 sm:gap-8 items-start">
                <span className="font-mono text-xs sm:text-sm text-[var(--ink-dim)] pt-1.5 whitespace-nowrap w-24 sm:w-28">
                  {b.label}
                </span>
                <p className="text-lg sm:text-xl text-[var(--ink)]/90 leading-relaxed border-l border-[var(--line)] pl-5 sm:pl-8">
                  {b.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
