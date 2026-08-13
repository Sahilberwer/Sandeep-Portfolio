import Reveal from "./Reveal";
import { profile } from "../data/content";

export default function About() {
  return (
    <section id="about" className="relative px-5 sm:px-8 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
        <Reveal>
          <p className="font-mono text-sm text-[var(--teal)] mb-3">the person behind the repos</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--ink)]">
            About Me
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-5 text-lg text-[var(--ink)]/85 leading-relaxed">
            <p>
              I'm {profile.name}, a CSE (AI & ML) student at {profile.university}, based in{" "}
              {profile.location}. I like building things I can actually open in a browser
              or run from a terminal — not just concepts on a slide.
            </p>
            <p>
              What I enjoy building most is the stuff that forces me to connect pieces —
              a Next.js frontend talking to a FastAPI ML service, or ten different models
              fighting it out on the same stock data. That's where I actually learn.
            </p>
            <p>
              Right now I'm learning how production systems are actually structured —
              monorepos, proper APIs, real databases — while also going back to basics
              with DSA for GATE DA 2026. Two very different kinds of discipline, at the
              same time.
            </p>
            <p>
              What motivates me is simple: I want to build AI systems that are actually
              useful to people, not just accurate on a benchmark. I want to become an
              engineer who can take an idea from "what if" to something running in
              production — and I'm using every project here to get closer to that.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
