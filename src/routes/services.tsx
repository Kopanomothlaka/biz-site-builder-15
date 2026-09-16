import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import fuelDepot from "@/assets/fuel-depot.jpg";
import lubricants from "@/assets/lubricants.jpg";
import onsiteService from "@/assets/onsite-service.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Bulk Fuel, Lubricants & On-Site Support" },
      {
        name: "description",
        content:
          "Bulk diesel 50ppm, ULP petrol, LPG, Jet A-1 and IP supply, plus engine, hydraulic and industrial lubricants and on-site lubrication services.",
      },
      { property: "og:title", content: "Ivevane Services | Fuel, Lubricants & On-Site Support" },
      {
        property: "og:description",
        content:
          "Comprehensive fuel supply, OEM-spec lubricants and on-site lubrication programmes for industrial clients.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

const fuel = [
  {
    t: "Bulk Diesel (50ppm)",
    items: [
      "50ppm low-sulphur diesel for fleets & industry",
      "Scheduled bulk delivery to your site",
      "Emergency fuel supply available",
      "Contract supply agreements",
      "SA fuel standards compliant",
    ],
  },
  {
    t: "ULP Petrol",
    items: [
      "Unleaded petrol for light commercial vehicles",
      "Fleet and facility supply options",
      "Secure on-site storage supply",
      "Competitive volume pricing",
    ],
  },
  {
    t: "LPG — Liquefied Petroleum Gas",
    items: [
      "Industrial, commercial & hospitality supply",
      "Cylinder and bulk supply options",
      "Safe delivery & regulatory compliance",
      "Reliable scheduled deliveries",
    ],
  },
  {
    t: "Jet Fuel & IP",
    items: [
      "Jet A-1 for aviation operations",
      "Illuminating Paraffin (IP) for industry",
      "SANS and aviation standards compliant",
      "Custom delivery scheduling",
    ],
  },
];

const lubes = [
  {
    t: "Engine Oils",
    items: [
      "Full synthetic, semi-synthetic & mineral grades",
      "Petrol & diesel engine oils",
      "Heavy-duty fleet engine oils",
      "Extended drain performance oils",
    ],
  },
  {
    t: "Hydraulic & Industrial Oils",
    items: [
      "Hydraulic oils for construction & mining",
      "Gear oils for gearboxes & differentials",
      "Automatic & manual transmission fluids",
      "Compressor, turbine & cutting oils",
    ],
  },
  {
    t: "Greases & Specialty Lubricants",
    items: [
      "Lithium, calcium & synthetic greases",
      "High-temperature & extreme-pressure options",
      "Bearing, chassis & multi-purpose greases",
      "Wire rope & open gear lubricants",
    ],
  },
  {
    t: "Industrial Lubricants",
    items: [
      "Circulating oils for plant & machinery",
      "Food-grade lubricants where required",
      "Custom specification & sourcing",
      "Lubricant consolidation programmes",
    ],
  },
];

const onsite = [
  {
    t: "Lubrication Inspections",
    items: [
      "Scheduled on-site inspection visits",
      "Identify over/under-lubricated points",
      "Visual & condition-based assessment",
      "Detailed findings & action reports",
    ],
  },
  {
    t: "Equipment Oil Checks & Changes",
    items: [
      "On-site oil sampling & analysis",
      "Oil level checks across all equipment",
      "Scheduled changes per OEM specs",
      "Contamination detection & advice",
    ],
  },
  {
    t: "Lubricant Management",
    items: [
      "Product selection per OEM requirements",
      "Lubrication register development",
      "Product & inventory consolidation",
      "Ongoing specification management",
    ],
  },
  {
    t: "Scheduled Maintenance Support",
    items: [
      "Weekly, monthly & quarterly visits",
      "Maintenance team integration",
      "Emergency callout support",
      "Technical advisory on wear & failures",
    ],
  },
];

function Block({
  id,
  eyebrow,
  title,
  intro,
  image,
  alt,
  groups,
  reverse = false,
  tinted = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  alt: string;
  groups: { t: string; items: string[] }[];
  reverse?: boolean;
  tinted?: boolean;
}) {
  return (
    <section id={id} className={`section ${tinted ? "bg-secondary/60" : ""}`}>
      <div className="container-x">
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 ${reverse ? "lg:[&>img]:order-first" : ""}`}
        >
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="mt-3 text-3xl md:text-4xl">{title}</h2>
            <p className="mt-5 text-muted-foreground">{intro}</p>
          </div>
          <img
            src={image}
            alt={alt}
            loading="lazy"
            width={1280}
            height={960}
            className="rounded-lg object-cover shadow-xl"
          />
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {groups.map((g) => (
            <div key={g.t} className="surface-card p-7">
              <h3 className="text-lg">{g.t}</h3>
              <ul className="mt-4 space-y-2.5">
                {g.items.map((i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Services"
        title="Fuel supply, lubricants and on-site technical support"
        intro="We supply commercial, industrial and government clients — from scheduled bulk deliveries to 24/7 emergency supply — and back it with qualified on-site service."
      />

      <Block
        id="fuel"
        eyebrow="Fuel Supply"
        title="Reliable fuel, delivered on schedule"
        intro="A comprehensive range of fuel products with contract supply agreements and 24/7 emergency response for critical operations."
        image={fuelDepot}
        alt="Bulk fuel storage tank farm at dusk"
        groups={fuel}
      />

      <Block
        id="lubricants"
        eyebrow="Lubricants Supply"
        title="Maximum protection under demanding conditions"
        intro="From light vehicles to heavy mining equipment and complex industrial plant, we supply the right product for every application."
        image={lubricants}
        alt="Industrial lubricant drums and containers in a warehouse"
        groups={lubes}
        reverse
        tinted
      />

      <Block
        id="on-site"
        eyebrow="On-Site Services"
        title="Technical support at your facility"
        intro="Our on-site lubrication programme reduces downtime, extends equipment life and keeps your operation at peak efficiency."
        image={onsiteService}
        alt="Technician servicing heavy equipment on site"
        groups={onsite}
      />

      <section className="navy-panel">
        <div className="container-x flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <h2 className="text-2xl text-white md:text-3xl">
            Let's match the right products to your equipment
          </h2>
          <Link to="/contact" className="btn-primary">
            Request a quotation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
