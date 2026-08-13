export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden noise-grid bg-[var(--bg)]">
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[var(--signal)]/20 blur-[120px] animate-pulse-slow" />
      <div className="absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-[var(--teal)]/10 blur-[110px] animate-drift" />
      <div className="absolute bottom-0 left-1/4 h-[380px] w-[380px] rounded-full bg-[var(--ember)]/10 blur-[110px] animate-pulse-slow" />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.35]"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="node-glow" r="50%">
            <stop offset="0%" stopColor="var(--signal)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--signal)" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
