import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="navy-panel">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo onNavy />
          <p className="mt-5 max-w-sm text-sm text-white/70">
            Bulk fuel, high-performance lubricants and on-site lubrication services for
            industrial operations across South Africa and sub-Saharan Africa.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <Link to="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Request a quotation
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                073 859 1793
                <br />
                073 859 1793
              </span>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              <a href="mailto:andanombexeza@gmail.com" className="hover:text-white">
                andanombexeza@gmail.com
              </a>
            </li>
            <li className="flex gap-2">
              <Globe className="mt-0.5 h-4 w-4 shrink-0" />
              <span>www.ivevaneme.com</span>
            </li>
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                Eastlands Office Park, Bentel Avenue, 1st Floor, Regus Building, Jansen Park,
                Boksburg, 1501
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="container-x py-5 text-xs text-white/55">
          © {new Date().getFullYear()} Dubai Minerals and Energy (Pty) Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
