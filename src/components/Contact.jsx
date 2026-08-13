import { Mail, FileText, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data/content";
import Reveal from "./Reveal";

const links = [
  { label: "Email", value: profile.email, href: profile.email.startsWith("[") ? null : `mailto:${profile.email}`, icon: Mail },
  { label: "GitHub", value: "Sahilberwer", href: profile.github, icon: GithubIcon },
  { label: "LinkedIn", value: "sandeep-berwer", href: profile.linkedin, icon: LinkedinIcon },
  { label: "Portfolio", value: "sahilberwer.github.io", href: `https://${profile.githubPagesPortfolio.replace("https://", "")}`, icon: Globe },
  { label: "Resume", value: "Download / View", href: profile.resumeUrl.startsWith("[") ? null : profile.resumeUrl, icon: FileText },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-5 sm:px-8 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="font-mono text-sm text-[var(--teal)] mb-3">let's talk</p>
          <h2 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight text-[var(--ink)] mb-6">
            Get in touch
          </h2>
          <p className="text-lg text-[var(--ink-muted)] max-w-xl mx-auto mb-14">
            Open to internships, collaborations, and conversations about AI/ML,
            full-stack builds, or GATE DA prep.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-4">
          {links.map((l, i) => (
            <Reveal key={l.label} delay={i * 0.05}>
              {l.href ? (
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-2xl px-6 py-5 flex items-center gap-4 hover:border-[var(--signal)]/40 transition-colors text-left"
                >
                  <span className="grid place-items-center h-11 w-11 rounded-xl bg-[var(--signal)]/15 text-[var(--signal)] shrink-0">
                    <l.icon size={18} />
                  </span>
                  <div>
                    <p className="text-sm text-[var(--ink-dim)] font-mono">{l.label}</p>
                    <p className="text-[var(--ink)] font-medium">{l.value}</p>
                  </div>
                </a>
              ) : (
                <div className="glass rounded-2xl px-6 py-5 flex items-center gap-4 opacity-60 text-left">
                  <span className="grid place-items-center h-11 w-11 rounded-xl bg-[var(--surface-2)] text-[var(--ink-dim)] shrink-0">
                    <l.icon size={18} />
                  </span>
                  <div>
                    <p className="text-sm text-[var(--ink-dim)] font-mono">{l.label}</p>
                    <p className="text-[var(--ink-dim)] font-medium">{l.value}</p>
                  </div>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
