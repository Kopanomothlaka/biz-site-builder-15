import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur">
      <div className="container-x flex h-18 items-center justify-between py-3">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-navy [&.active]:text-navy"
            >
              {item.label}
            </Link>
          ))}
          <a href="tel:+27738591793" className="btn-primary">
            <Phone className="h-4 w-4" /> 073 859 1793
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="text-navy md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:bg-secondary [&.active]:text-navy"
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:+27872553185" className="btn-primary mt-3">
              <Phone className="h-4 w-4" /> Call us
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
