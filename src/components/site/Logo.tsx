import { Link } from "@tanstack/react-router";

export function Logo({ onNavy = false }: { onNavy?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3">
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="h-9 w-9 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="tankGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.62 0.18 255)" />
            <stop offset="100%" stopColor="oklch(0.24 0.09 264)" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="44" height="44" rx="8" fill="url(#tankGrad)" />
        <path
          d="M14 18c0-2.2 4.5-4 10-4s10 1.8 10 4v14c0 2.2-4.5 4-10 4s-10-1.8-10-4V18Z"
          fill="white"
          fillOpacity="0.9"
        />
        <ellipse cx="24" cy="18" rx="10" ry="4" fill="white" />
        <path d="M18 24h12M18 29h12" stroke="oklch(0.28 0.1 264)" strokeWidth="1.6" />
      </svg>
      <span className="leading-tight">
        <span
          className={`block font-display text-base font-extrabold tracking-tight ${
            onNavy ? "text-white" : "text-navy"
          }`}
        >
          DUBAI PROJECTS
        </span>
        <span
          className={`block text-[0.6rem] font-semibold uppercase tracking-[0.18em] ${
            onNavy ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          &amp; Mineral Resources
        </span>
      </span>
    </Link>
  );
}
