import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Eye, Gem, Users } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import heroTanks from "@/assets/hero-tanks.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Dubai Projects and Mineral Resources (Pty) Ltd" },
      {
        name: "description",
        content:
          "A 100% black woman-owned tank manufacture and maintenance company registered in South Africa, based in Sunward Park, Boksburg. Reg 2021/854755/07.",
      },
      {
        property: "og:title",
        content: "About Dubai Projects and Mineral Resources",
      },
      {
        property: "og:description",
        content:
          "Our background, vision, mission and expertise in tank manufacture, maintenance and industrial supply.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const pillars = [
  {
    icon: Eye,
    t: "Our Vision",
    d: "To achieve par-excellence quality and professional services in all the sectors we serve.",
  },
  {
    icon: Target,
    t: "Our Mission",
    d: "To be a nationally recognised professional and quality service provider to all our clients.",
  },
  {
    icon: Gem,
    t: "Our Objective",
    d: "To provide clients with innovative, solution-based advice and expert service in the spares departments of our industries.",
  },
  {
    icon: Users,
    t: "Our Commitment",
    d: "As an African woman empowerment service provider, we help empower unemployed youth through access to skills-based programmes.",
  },
];

const expertise = [
  ["Registered Service Provider", "Mining and civil, water, petroleum and gas tank manufacture and maintenance."],
  ["Practical Solutions", "Solution-based advice for mining, civil, emerging construction, diesel and petroleum clients."],
  ["Sector Experience", "A vast collective experience in the petroleum and gas sector and related industries."],
  ["Quality Assurance", "International partners engaged to ensure our tank quality is adhered to and achieved."],
  ["Cost Effective", "Innovative service solutions that are cost effective every time and all the time."],
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="Highest standard in tank manufacture and maintenance"
        intro="Dubai Projects and Mineral Resources (Pty) Ltd — Reg 2021/854755/07 — operates from Sunward Park, Boksburg, and is 100% black owned by a female."
      />

      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Introduction</span>
            <h2 className="mt-3 text-3xl md:text-4xl">
              Best service, highest standard, long-term relationships
            </h2>
            <p className="mt-5 text-muted-foreground">
              Dubai Projects and Mineral Resources strives to give clients the best service and to
              deliver only the highest standard of manufacturing and maintaining underground and
              above-ground tanks. For this reason we supply clients with the installation of
              underground and upper-ground tanks for most petroleum and gas companies that utilise a
              bactofuge in the production process in South Africa.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our aim is to establish a viable and satisfied client base by providing the highest
              quality and professional services to our customers, ensuring a long-term relationship.
            </p>
          </div>
          <img
            src={heroTanks}
            alt="Storage tanks under fabrication at an industrial yard"
            loading="lazy"
            width={1920}
            height={1088}
            className="rounded-lg object-cover shadow-xl"
          />
        </div>
      </section>

      <section className="section bg-secondary/60">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.t} className="surface-card p-8">
              <p.icon className="h-6 w-6 text-accent" />
              <h2 className="mt-4 text-xl">{p.t}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="eyebrow">Expertise Statement</span>
            <h2 className="mt-3 text-3xl md:text-4xl">What we bring to a project</h2>
            <p className="mt-5 text-muted-foreground">
              Through collective experience in the petroleum and gas sector and other related
              sectors, we are positioned to deliver a competitive edge to our clients and support
              their sustainability.
            </p>
            <Link to="/contact" className="btn-primary mt-8">
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-6">
            {expertise.map(([t, d]) => (
              <div key={t} className="border-l-2 border-accent pl-4">
                <h3 className="text-base">{t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="navy-panel">
        <div className="container-x py-16">
          <span className="eyebrow text-white/70">Company Details</span>
          <h2 className="mt-3 text-3xl text-white md:text-4xl">Registered in South Africa</h2>
          <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Company", "Dubai Projects and Mineral Resources (Pty) Ltd"],
              ["Registration", "2021/854755/07"],
              ["Office", "Sunward Park, Boksburg"],
              ["Ownership", "100% black owned by female"],
            ].map(([t, d]) => (
              <div key={t} className="rounded-lg border border-white/15 bg-white/5 p-5">
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">{t}</dt>
                <dd className="mt-2 text-sm text-white/85">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </SiteLayout>
  );
}
