import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Container,
  Wrench,
  Zap,
  Droplet,
  Flame,
  ArrowRight,
  Mountain,
  Factory,
  Building2,
  Hotel,
  Stethoscope,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroTanks from "@/assets/hero-tanks.jpg";
import tankMaintenance from "@/assets/tank-maintenance.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dubai Projects and Mineral Resources | Tank Manufacture SA" },
      {
        name: "description",
        content:
          "Manufacture and maintenance of underground and above-ground gas, diesel and water tanks, plus diesel 50ppm and 10ppm, oil, paraffin and electrical supplies. Boksburg, Gauteng.",
      },
      {
        property: "og:title",
        content: "Dubai Projects and Mineral Resources (Pty) Ltd",
      },
      {
        property: "og:description",
        content:
          "Tank manufacture and maintenance, diesel, oil, paraffin and electrical supplies for mining, civil and petroleum industries.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const services = [
  {
    icon: Container,
    label: "Tank Manufacturing",
    note: "Underground and above-ground gas, diesel and water tanks",
  },
  {
    icon: Wrench,
    label: "Tank Maintenance",
    note: "Servicing and repair of underground and above-ground tanks",
  },
  {
    icon: Droplet,
    label: "Diesel Supply",
    note: "Diesel 50ppm and 10ppm for fleets and industry",
  },
  {
    icon: Flame,
    label: "Oil & Paraffin",
    note: "Reliable supply of oil and paraffin",
  },
  {
    icon: Zap,
    label: "Electrical Appliances",
    note: "Cables, wires, switches, plugs and bulbs",
  },
  {
    icon: Briefcase,
    label: "Spares & Advisory",
    note: "Spares supply and solution-based technical advice",
  },
];

const stats = [
  { value: "100%", label: "Black woman-owned" },
  { value: "2021", label: "Registered in South Africa" },
  { value: "7", label: "Project sectors served" },
  { value: "50 & 10", label: "ppm diesel grades supplied" },
];

const sectors = [
  { icon: Mountain, t: "Mining & Civil Projects" },
  { icon: Droplet, t: "Petroleum Industries" },
  { icon: Building2, t: "Commercial Offices" },
  { icon: Hotel, t: "Hotel & Leisure" },
  { icon: Briefcase, t: "Corporate Headquarters" },
  { icon: Stethoscope, t: "Hospital & Medical" },
  { icon: Factory, t: "Industrial" },
];

function Home() {
  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden">
        <img
          src={heroTanks}
          alt="Steel storage tanks under fabrication at an industrial yard"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.18_0.07_264/0.94)_0%,oklch(0.22_0.09_264/0.82)_45%,oklch(0.22_0.09_264/0.25)_100%)]" />
        <div className="container-x relative py-28 md:py-36">
          <span className="eyebrow text-white/70">Tank Manufacture &amp; Maintenance</span>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] text-white sm:text-5xl md:text-6xl">
            Built to the highest standard. Maintained for the long term.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Dubai Projects and Mineral Resources (Pty) Ltd manufactures and maintains underground and
            above-ground gas, diesel and water tanks for petroleum and gas companies across South
            Africa.
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
              <p className="font-display text-3xl font-extrabold text-navy md:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <span className="eyebrow">Services Offered</span>
          <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">
            Tanks, fuel and supplies from one accountable partner
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
            See all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="navy-panel">
        <div className="container-x grid items-center gap-12 py-20 lg:grid-cols-2">
          <div>
            <span className="eyebrow text-white/70">Quality Assurance</span>
            <h2 className="mt-3 text-3xl text-white md:text-4xl">
              Par-excellence quality, professionally delivered
            </h2>
            <p className="mt-5 text-white/75">
              We engage international companies to ensure the quality of our tanks is adhered to and
              achieved in terms of quality assurance management — and we supply clients that use a
              bactofuge in their production process.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Installation of underground and above-ground tanks",
                "Registered mining, civil, water, petroleum and gas service provider",
                "Innovative, solution-based technical advice",
                "Cost-effective service, every time",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-white/80">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={tankMaintenance}
            alt="Technician inspecting valves and pipework on a large storage tank"
            loading="lazy"
            width={1280}
            height={960}
            className="rounded-lg object-cover shadow-2xl"
          />
        </div>
      </section>

      <section className="section bg-secondary/60">
        <div className="container-x">
          <span className="eyebrow">Project Experience</span>
          <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">
            A wealth of expertise across all types of projects
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s) => (
              <div key={s.t} className="surface-card flex items-center gap-4 p-6">
                <s.icon className="h-6 w-6 shrink-0 text-accent" />
                <h3 className="text-base">{s.t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Empowerment</span>
            <h2 className="mt-3 text-3xl md:text-4xl">
              An African woman empowerment service provider
            </h2>
            <p className="mt-5 text-muted-foreground">
              The company is 100% black owned by a female and is committed to lifting and empowering
              unemployed youth in the country by ensuring access to skills-based programmes.
            </p>
            <Link to="/about" className="btn-outline mt-8">
              More about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="border-l-2 border-accent pl-4">
              <h3 className="text-base">Our Vision</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                To achieve par-excellence quality and professional services in all the sectors we
                serve.
              </p>
            </div>
            <div className="border-l-2 border-accent pl-4">
              <h3 className="text-base">Our Mission</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                To be a nationally recognised professional and quality service provider to all our
                clients.
              </p>
            </div>
            <div className="border-l-2 border-accent pl-4">
              <h3 className="text-base">Our Aim</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                To establish a viable and satisfied client base through long-term relationships.
              </p>
            </div>
            <div className="border-l-2 border-accent pl-4">
              <h3 className="text-base">Our Approach</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Practical, solution-based advice for mining, civil, construction, diesel and
                petroleum clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="navy-panel">
        <div className="container-x flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl text-white md:text-3xl">Have a tank or supply requirement?</h2>
            <p className="mt-2 text-white/70">
              Contact us for a quotation tailored to your project.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">
              Get a quote
            </Link>
            <a href="tel:+27738591793" className="btn-onnavy">
              073 859 1793
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
