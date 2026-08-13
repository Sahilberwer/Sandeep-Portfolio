import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { profile } from "../data/content";

export default function Footer() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative px-5 sm:px-8 py-10 border-t border-[var(--line)]">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--ink-dim)] font-mono">
          © {new Date().getFullYear()} {profile.name} · built with React, Vite & Tailwind
        </p>
        <p className="text-xs text-[var(--ink-dim)]">
          Documented, not decorated — every claim here is real.
        </p>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-40 grid place-items-center h-11 w-11 rounded-full glass text-[var(--ink)] shadow-lg transition-all duration-300 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}
