import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import undergroundTank from "@/assets/underground-tank.jpg";
import tankMaintenance from "@/assets/tank-maintenance.jpg";
import electricalSupplies from "@/assets/electrical-supplies.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Tank Manufacture, Maintenance, Diesel & Electrical" },
      {
        name: "description",
        content:
          "Manufacturing and maintenance of underground and above-ground gas, diesel and water tanks, diesel 50ppm and 10ppm, oil, paraffin and electrical appliances.",
      },
      {
        property: "og:title",
        content: "Services | Dubai Projects and Mineral Resources",
      },
      {
        property: "og:description",
        content:
          "Tank manufacture and maintenance, fuel supply and electrical appliances for mining, civil and petroleum clients.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

const manufacture = [
  {
    t: "Underground Tanks",
    items: [
      "Gas, diesel and water tanks manufactured to specification",
      "Installation for petroleum and gas companies",
      "Suited to sites using a bactofuge in production",
      "Quality assured with international partners",
    ],
  },
  {
    t: "Above-Ground Tanks",
    items: [
      "Upper-ground gas, diesel and water tanks",
      "Fabrication for mining, civil and industrial sites",
      "Installation and commissioning",
      "Professional workmanship and standards",
    ],
  },
];

const maintenance = [
  {
    t: "Tank Maintenance",
    items: [
      "Maintenance of underground and above-ground tanks",
      "Inspection, servicing and repair",
      "Gas, diesel and water tank support",
      "Ongoing maintenance arrangements",
    ],
  },
  {
    t: "Spares & Advisory",
    items: [
      "Expertise in spares departments across our industries",
      "Innovative, solution-based advice",
      "Support for mining, civil and emerging construction clients",
      "Support for diesel and petroleum companies",
    ],
  },
];

const supply = [
  {
    t: "Fuel & Fluids",
    items: [
      "Diesel 50ppm supply",
      "Diesel 10ppm supply",
      "Oil supply",
      "Paraffin supply",
    ],
  },
  {
    t: "Electrical Appliances",
    items: ["Cables and wires", "Switches and plugs", "Bulbs", "Related electrical supplies"],
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
        eyebrow="Services Offered"
        title="Tank manufacture, maintenance and industrial supply"
        intro="A registered mining and civil, water, petroleum and gas tank manufacture and maintenance service provider, supplying fuel, oil, paraffin and electrical appliances."
      />

      <Block
        id="manufacturing"
        eyebrow="Manufacturing"
        title="Underground and above-ground tanks"
        intro="We manufacture and install underground and upper-ground gas, diesel and water tanks for petroleum and gas companies across South Africa, holding to the highest standard of workmanship."
        image={undergroundTank}
        alt="Underground fuel tank being lowered into an excavation by crane"
        groups={manufacture}
      />

      <Block
        id="maintenance"
        eyebrow="Maintenance"
        title="Keeping tanks safe and serviceable"
        intro="Our maintenance service covers underground and above-ground gas, diesel and water tanks, backed by spares expertise and practical technical advice."
        image={tankMaintenance}
        alt="Technician maintaining valves on a storage tank"
        groups={maintenance}
        reverse
        tinted
      />

      <Block
        id="supply"
        eyebrow="Supply"
        title="Fuel, fluids and electrical appliances"
        intro="Alongside tanks, we supply diesel 50ppm and 10ppm, oil and paraffin, as well as electrical appliances including cables, wires, switches, plugs and bulbs."
        image={electricalSupplies}
        alt="Electrical supplies including cables, switches, plugs and bulbs on warehouse shelves"
        groups={supply}
      />

      <section className="navy-panel">
        <div className="container-x flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <h2 className="text-2xl text-white md:text-3xl">
            Tell us what your project needs
          </h2>
          <Link to="/contact" className="btn-primary">
            Request a quotation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
