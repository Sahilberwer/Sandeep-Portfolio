import Reveal from "./Reveal";

export default function Vision() {
  return (
    <section id="vision" className="relative px-5 sm:px-8 py-28 sm:py-36 overflow-hidden">
      <div className="mx-auto max-w-4xl text-center relative">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,var(--signal)_0%,transparent_65%)] opacity-[0.12]"
          aria-hidden="true"
        />
        <Reveal>
          <p className="font-mono text-sm text-[var(--teal)] mb-3">where I'm going</p>
          <h2 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight text-[var(--ink)] mb-8">
            Every project here is a
            <br />
            <span className="text-gradient">foundation, not a finish line.</span>
          </h2>
          <p className="text-lg text-[var(--ink-muted)] max-w-2xl mx-auto leading-relaxed">
            I'm building toward a career at the intersection of AI/ML and software
            engineering — going deeper into Generative AI, advanced machine learning,
            and data science, while sharpening the DSA fundamentals GATE DA is testing me
            on. No invented job titles or numbers here — just the direction I'm actually
            moving in, one shipped system at a time.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-14 grid sm:grid-cols-3 gap-4 text-left">
            {[
              { t: "Depth", d: "Advanced ML, Generative AI, and the theory behind what I already build." },
              { t: "Scale", d: "Systems like SkillVerse AI and StockVision AI — built to be used, not just demoed." },
              { t: "Rigor", d: "GATE DA prep, keeping the fundamentals as sharp as the applied work." },
            ].map((v) => (
              <div key={v.t} className="glass rounded-2xl p-6">
                <h3 className="font-display font-semibold text-[var(--signal)] mb-2">{v.t}</h3>
                <p className="text-sm text-[var(--ink-muted)]">{v.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
