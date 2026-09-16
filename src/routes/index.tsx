import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Droplet,
  Fuel,
  Flame,
  Plane,
  Wrench,
  ShieldCheck,
  ArrowRight,
  Truck,
  HardHat,
  Factory,
  Sprout,
  Building2,
  Mountain,
  CheckCircle2,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroTanker from "@/assets/hero-tanker.jpg";
import onsiteService from "@/assets/onsite-service.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ivevane Minerals and Energy | Bulk Diesel & Lubricants SA" },
      {
        name: "description",
        content:
          "Bulk diesel, lubricants, LPG and jet fuel supply with on-site lubrication services for mining, transport, construction and industry across South Africa.",
      },
      { property: "og:title", content: "Ivevane Minerals and Energy | Fuel & Lubrication Partner" },
      {
        property: "og:description",
        content:
          "Reliable bulk fuel supply, OEM-spec lubricants and on-site technical support from Boksburg, Gauteng.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Droplet, label: "Bulk Diesel", note: "50ppm low-sulphur, scheduled & emergency" },
  { icon: Fuel, label: "Lubricants", note: "Engine, hydraulic, gear & greases" },
  { icon: Flame, label: "LPG", note: "Cylinder & bulk, industrial and commercial" },
  { icon: Plane, label: "Jet Fuel", note: "Jet A-1 for aviation operations" },
  { icon: Wrench, label: "On-Site Services", note: "Inspections, oil changes, advisory" },
  { icon: ShieldCheck, label: "IP", note: "Illuminating paraffin for industry" },
];

const stats = [
  { value: "100%", label: "South African owned" },
  { value: "6+", label: "Fuel products supplied" },
  { value: "7", label: "Industries served" },
  { value: "24/7", label: "Emergency supply" },
];

const steps = [
  {
    n: "01",
    t: "Assess",
    d: "A detailed consultation covering fleet size, equipment types, fuel volumes and current lubricants.",
  },
  {
    n: "02",
    t: "Recommend",
    d: "Fuel grades, lubricant specifications and service packages matched to OEM requirements.",
  },
  {
    n: "03",
    t: "Quote",
    d: "A clear, itemised quotation with transparent pricing and no hidden fees.",
  },
  {
    n: "04",
    t: "Deliver",
    d: "Scheduled delivery to site on agreed timelines — safely, on time, in correct quantities.",
  },
  {
    n: "05",
    t: "Support",
    d: "Follow-up visits, lubricant health monitoring, emergency response and ongoing optimisation.",
  },
];

const industries = [
  {
    icon: Truck,
    t: "Transport & Logistics",
    d: "Fleet refuelling, diesel contracts and bulk lubricants for trucking and distribution fleets.",
  },
  {
    icon: Mountain,
    t: "Mining & Resources",
    d: "Bulk diesel, specialised lubricants and on-site programmes for surface and underground equipment.",
  },
  {
    icon: HardHat,
    t: "Construction",
    d: "Fuel and lubricants for excavators, graders, generators and compactors, with emergency supply.",
  },
  {
    icon: Sprout,
    t: "Agriculture",
    d: "Diesel and lubricants for tractors, harvesters and irrigation, with seasonal contract supply.",
  },
  {
    icon: Factory,
    t: "Manufacturing & Industrial",
    d: "Generator fuel and a full range of industrial lubricants to keep production lines running.",
  },
  {
    icon: Building2,
    t: "Generator-Dependent Facilities",
    d: "SLA-based diesel supply for hospitals, data centres and commercial buildings.",
  },
];

const reasons = [
  ["Reliable Diesel Supply", "Disciplined logistics, priority scheduling and emergency backup."],
  ["High-Quality Lubricants", "Products meeting or exceeding OEM and South African standards."],
  ["On-Site Technical Support", "We bring expertise to your site — assessing and implementing."],
  ["Flexible, Transparent Pricing", "Volume-based quotations with no hidden costs."],
  ["Fast Response Times", "An agile team for emergency supply and on-site callouts."],
  ["One Trusted Partner", "Fuel, lubricants and services under one roof."],
];

function Home() {
  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden">
        <img
          src={heroTanker}
          alt="Ivevane fuel tanker at an industrial fuel depot at sunset"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.18_0.07_264/0.94)_0%,oklch(0.22_0.09_264/0.82)_45%,oklch(0.22_0.09_264/0.25)_100%)]" />
        <div className="container-x relative py-28 md:py-36">
          <span className="eyebrow text-white/70">Fuel &amp; Lubrication Solutions</span>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] text-white sm:text-5xl md:text-6xl">
            Powering Performance.
            <br />
            Protecting Equipment.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Ivevane Minerals and Energy supplies bulk diesel, high-performance lubricants and on-site
            technical support to industrial operations across South Africa and the African continent.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">
              Request a quotation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="btn-onnavy">
              Explore our services
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="container-x grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-extrabold text-navy md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <span className="eyebrow">Our Services</span>
          <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">
            Everything your operation burns, needs and depends on
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.label} className="surface-card p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-navy">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg">{s.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.note}</p>
              </div>
            ))}
          </div>
          <Link to="/services" className="btn-outline mt-10">
            See full product range <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="navy-panel">
        <div className="container-x grid items-center gap-12 py-20 lg:grid-cols-2">
          <div>
            <span className="eyebrow text-white/70">On-Site Lubrication</span>
            <h2 className="mt-3 text-3xl text-white md:text-4xl">
              We don't just supply — we optimise your operation
            </h2>
            <p className="mt-5 text-white/75">
              Our on-site lubrication programme brings qualified technical support directly to your
              facility, reducing downtime and extending equipment life.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Scheduled lubrication inspections and findings reports",
                "On-site oil sampling, level checks and OEM-spec changes",
                "Lubricant register development and product consolidation",
                "Weekly, monthly and quarterly visits plus emergency callouts",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-white/80">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={onsiteService}
            alt="Technician performing on-site lubrication on heavy mining equipment"
            loading="lazy"
            width={1280}
            height={960}
            className="rounded-lg object-cover shadow-2xl"
          />
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <span className="eyebrow">How We Work</span>
          <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">
            From first contact to ongoing support
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
            {steps.map((s) => (
              <div key={s.n} className="surface-card p-6">
                <p className="font-display text-sm font-extrabold tracking-widest text-accent">
                  {s.n}
                </p>
                <h3 className="mt-3 text-lg">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-secondary/60">
        <div className="container-x">
          <span className="eyebrow">Target Industries</span>
          <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">
            Built for sectors where uptime is mission-critical
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((i) => (
              <div key={i.t} className="surface-card p-7">
                <i.icon className="h-6 w-6 text-accent" />
                <h3 className="mt-4 text-lg">{i.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="eyebrow">Why Ivevane</span>
            <h2 className="mt-3 text-3xl md:text-4xl">Reliable supply with genuine partnership</h2>
            <p className="mt-5 text-muted-foreground">
              Operating from Boksburg, Gauteng, we supply clients across South Africa and into
              sub-Saharan Africa — combining disciplined logistics with real technical expertise.
            </p>
            <Link to="/contact" className="btn-primary mt-8">
              Talk to our team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {reasons.map(([t, d]) => (
              <div key={t} className="border-l-2 border-accent pl-4">
                <h3 className="text-base">{t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="navy-panel">
        <div className="container-x flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl text-white md:text-3xl">Need fuel or lubricants on site?</h2>
            <p className="mt-2 text-white/70">
              Contact us today for a custom quotation tailored to your operation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">
              Get a quote
            </Link>
            <a href="tel:+27872553185" className="btn-onnavy">
              087 255 3185
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
