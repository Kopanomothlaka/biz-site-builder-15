import { Link } from "@tanstack/react-router";

export function Logo({ onNavy = false }: { onNavy?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3">
      <svg
        viewBox="0 0 48 56"
        aria-hidden="true"
        className="h-9 w-8 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="dropGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.62 0.18 255)" />
            <stop offset="100%" stopColor="oklch(0.24 0.09 264)" />
          </linearGradient>
        </defs>
        <path
          d="M24 2C24 2 44 22 44 36a20 20 0 1 1-40 0C4 22 24 2 24 2Z"
          fill="url(#dropGrad)"
        />
        <path
          d="M24 16c-6 6-10 12-10 18a10 10 0 0 0 10 10c-4-6-4-12 0-18 3-4 3-7 0-10Z"
          fill="white"
          fillOpacity="0.85"
        />
      </svg>
      <span className="leading-none">
        <span
          className={`block font-display text-lg font-extrabold tracking-tight ${
            onNavy ? "text-white" : "text-navy"
          }`}
        >
          DUBAI
        </span>
        <span
          className={`block text-[0.6rem] font-semibold uppercase tracking-[0.22em] ${
            onNavy ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          Projects &amp; Minerals Resources PTY LTD
        </span>
      </span>
    </Link>
  );
}
