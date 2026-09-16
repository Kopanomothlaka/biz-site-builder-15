import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Eye, Gem } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import fuelDepot from "@/assets/fuel-depot.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ivevane Minerals and Energy | Boksburg, Gauteng" },
      {
        name: "description",
        content:
          "A 100% South African owned fuel and lubrication solutions provider based in Boksburg, Gauteng, serving mining, transport, construction and manufacturing.",
      },
      { property: "og:title", content: "About Ivevane Minerals and Energy" },
      {
        property: "og:description",
        content:
          "An operational partner for fuel and lubrication — mission, vision, values and the problems we solve.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const pillars = [
  {
    icon: Target,
    t: "Our Mission",
    d: "To provide reliable, high-quality fuel and lubrication solutions that reduce operational downtime, protect equipment, and drive cost efficiency for our clients.",
  },
  {
    icon: Eye,
    t: "Our Vision",
    d: "To be the most trusted fuel and lubrication partner for industrial businesses in South Africa — known for excellence, reliability, and technical expertise.",
  },
  {
    icon: Gem,
    t: "Our Values",
    d: "Reliability. Quality. Partnership. Integrity. Innovation. These principles guide every delivery, every visit, and every client relationship.",
  },
];

const help = [
  ["Reduce Equipment Wear", "Correct lubricant selection reduces friction and component degradation, extending asset life."],
  ["Prevent Breakdowns", "Inspections, scheduled oil changes and monitoring catch problems before costly failures."],
  ["Improve Machine Efficiency", "Well-lubricated machinery runs cooler, draws less energy and performs at optimal output."],
  ["Lower Maintenance Costs", "Extended service intervals and fewer unplanned repairs reduce total maintenance cost."],
  ["Ensure Fuel Continuity", "Bulk diesel contracts and emergency backup keep fleets and generators supplied."],
];

const deliver = [
  "Reduce fuel and lubrication costs",
  "Extend equipment lifespan",
  "Improve uptime and productivity",
  "Simplify supply with one trusted partner",
  "Prevent unplanned breakdowns",
  "Lower total cost of maintenance",
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="An operational partner, not just a supplier"
        intro="Ivevane Minerals and Energy (Pty) Ltd is a South African fuel and lubrication solutions provider headquartered in Boksburg, Gauteng."
      />

      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Who We Are</span>
            <h2 className="mt-3 text-3xl md:text-4xl">
              Fuel and lubrication are the lifeblood of productivity
            </h2>
            <p className="mt-5 text-muted-foreground">
              We deliver bulk diesel, high-performance lubricants and on-site support to businesses
              across South Africa and the African continent. In industries like mining, transport,
              construction and manufacturing, we go beyond transactional product supply to become a
              true operational partner.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our portfolio includes bulk diesel (50ppm), ULP petrol, LPG, jet fuel and aviation fuel
              (IP) — alongside a complete range of engine oils, hydraulic oils, gear oils and
              industrial lubricants.
            </p>
          </div>
          <img
            src={fuelDepot}
            alt="Fuel storage infrastructure at dusk"
            loading="lazy"
            width={1280}
            height={960}
            className="rounded-lg object-cover shadow-xl"
          />
        </div>
      </section>

      <section className="section bg-secondary/60">
        <div className="container-x grid gap-5 md:grid-cols-3">
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
            <span className="eyebrow">Our Solution Approach</span>
            <h2 className="mt-3 text-3xl md:text-4xl">The problem we solve</h2>
            <p className="mt-5 text-muted-foreground">
              Many businesses carry hidden costs from improper lubrication and unreliable fuel supply
              — unexpected breakdowns, excessive maintenance spend, shortened asset lifespan and
              production stoppages. We design supply and service packages that address those
              operational challenges directly.
            </p>
          </div>
          <div className="space-y-6">
            {help.map(([t, d]) => (
              <div key={t} className="border-l-2 border-accent pl-4">
                <h3 className="text-base">{t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="navy-panel">
        <div className="container-x py-20">
          <span className="eyebrow text-white/70">Value Proposition</span>
          <h2 className="mt-3 text-3xl text-white md:text-4xl">What we deliver</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deliver.map((d) => (
              <div
                key={d}
                className="rounded-lg border border-white/15 bg-white/5 p-5 text-sm text-white/85"
              >
                {d}
              </div>
            ))}
          </div>
          <Link to="/contact" className="btn-onnavy mt-10">
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
