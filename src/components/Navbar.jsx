import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { nav, profile } from "../data/content";

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(nav[0].id);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-black/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-16">
        <button
          onClick={() => goTo("hero")}
          className="font-display font-semibold text-lg tracking-tight text-[var(--ink)]"
        >
          SB<span className="text-[var(--signal)]">.</span>
        </button>

        <ul className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <li key={n.id}>
              <button
                onClick={() => goTo(n.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-full ${
                  active === n.id
                    ? "text-[var(--ink)]"
                    : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
                }`}
              >
                {active === n.id && (
                  <span className="absolute inset-0 rounded-full bg-[var(--signal)]/15 -z-10" />
                )}
                {n.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
          >
            <LinkedinIcon size={18} />
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="grid place-items-center h-9 w-9 rounded-full border border-[var(--line)] text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="grid place-items-center h-9 w-9 rounded-full border border-[var(--line)] text-[var(--ink-muted)]"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="grid place-items-center h-9 w-9 rounded-full border border-[var(--line)] text-[var(--ink)]"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-[var(--line)] px-5 py-4 bg-[var(--bg)] shadow-2xl">
          <ul className="flex flex-col gap-1">
            {nav.map((n) => (
              <li key={n.id}>
                <button
                  onClick={() => goTo(n.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                    active === n.id
                      ? "bg-[var(--signal)]/15 text-[var(--ink)]"
                      : "text-[var(--ink-muted)]"
                  }`}
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 mt-3 px-3">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-[var(--ink-muted)]">
              <GithubIcon size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--ink-muted)]">
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
