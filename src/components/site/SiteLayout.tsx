import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="navy-panel">
      <div className="container-x py-20">
        <span className="eyebrow text-white/70">{eyebrow}</span>
        <h1 className="mt-4 max-w-3xl text-4xl text-white md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base text-white/75">{intro}</p>
      </div>
    </section>
  );
}
