import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Globe, Send } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ivevane | Request a Fuel & Lubricant Quotation" },
      {
        name: "description",
        content:
          "Request a custom fuel or lubricant quotation. Call 087 255 3185, email info@ivevaneme.com or visit our Boksburg, Gauteng office.",
      },
      { property: "og:title", content: "Contact Ivevane Minerals and Energy" },
      {
        property: "og:description",
        content: "Tell us about your operation and we'll prepare a tailored quotation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const pricing = [
  ["Volume", "Higher volumes attract preferential rates and contract pricing."],
  ["Product Type", "Pricing varies by fuel grade or lubricant specification."],
  ["Delivery", "Location, access, frequency and urgency are factored in."],
  ["Service Level", "Basic supply versus a full on-site management programme."],
];

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const body = [
      `Name: ${form.get("name")}`,
      `Company: ${form.get("company")}`,
      `Email: ${form.get("email")}`,
      `Phone: ${form.get("phone")}`,
      `Requirement: ${form.get("requirement")}`,
      "",
      `${form.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:info@ivevaneme.com?subject=${encodeURIComponent(
      `Quotation request — ${form.get("company") || form.get("name")}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "mt-2 w-full rounded-md border border-input bg-card px-3.5 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-ring/30";
  const label = "block font-display text-xs font-bold uppercase tracking-widest text-navy";

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact us for a custom quotation"
        intro="We are ready to assess your operation and provide a tailored solution — transparent pricing, no hidden fees."
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="surface-card p-8">
            <h2 className="text-2xl">Request a quotation</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Share a few details and our team will come back to you with an itemised quote.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={label} htmlFor="name">
                    Full name
                  </label>
                  <input id="name" name="name" required className={field} />
                </div>
                <div>
                  <label className={label} htmlFor="company">
                    Company
                  </label>
                  <input id="company" name="company" className={field} />
                </div>
                <div>
                  <label className={label} htmlFor="email">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required className={field} />
                </div>
                <div>
                  <label className={label} htmlFor="phone">
                    Phone
                  </label>
                  <input id="phone" name="phone" className={field} />
                </div>
              </div>
              <div>
                <label className={label} htmlFor="requirement">
                  What do you need?
                </label>
                <select id="requirement" name="requirement" className={field} defaultValue="Bulk diesel">
                  <option>Bulk diesel</option>
                  <option>ULP petrol</option>
                  <option>LPG</option>
                  <option>Jet fuel / IP</option>
                  <option>Lubricants</option>
                  <option>On-site lubrication services</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className={label} htmlFor="message">
                  Tell us about your operation
                </label>
                <textarea id="message" name="message" rows={5} className={field} />
              </div>
              <button type="submit" className="btn-primary">
                Send request <Send className="h-4 w-4" />
              </button>
              {sent && (
                <p className="text-sm text-muted-foreground">
                  Your email app should now open with the request ready to send. If it doesn't, email
                  us directly at info@ivevaneme.com.
                </p>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div className="surface-card p-8">
              <h2 className="text-xl">Contact details</h2>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>
                    <a href="tel:+27872553185" className="block hover:text-accent">
                      087 255 3185
                    </a>
                    <a href="tel:+27681496468" className="block hover:text-accent">
                      068 149 6468
                    </a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <a href="mailto:info@ivevaneme.com" className="hover:text-accent">
                    info@ivevaneme.com
                  </a>
                </li>
                <li className="flex gap-3">
                  <Globe className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>www.ivevaneme.com</span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground">
                    Eastlands Office Park, Bentel Avenue, 1st Floor, Regus Building, Jansen Park,
                    Boksburg, 1501
                  </span>
                </li>
              </ul>
            </div>

            <div className="surface-card p-8">
              <h2 className="text-xl">Pricing structure</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We do not apply a one-size-fits-all pricing model. Pricing is structured around your
                specific requirements.
              </p>
              <dl className="mt-6 space-y-4">
                {pricing.map(([t, d]) => (
                  <div key={t} className="border-l-2 border-accent pl-4">
                    <dt className="font-display text-sm font-bold">{t}</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">{d}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
