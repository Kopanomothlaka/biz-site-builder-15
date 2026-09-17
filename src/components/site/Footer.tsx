import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, FileText } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="navy-panel">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo onNavy />
          <p className="mt-5 max-w-sm text-sm text-white/70">
            Manufacturing and maintenance of underground and above-ground gas, diesel and water
            tanks, plus diesel, oil, paraffin and electrical supplies. 100% black woman-owned.
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
              <a href="tel:+27738591793" className="hover:text-white">
                073 859 1793
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              <a href="mailto:andanombexeza@gmail.com" className="hover:text-white">
                andanombexeza@gmail.com
              </a>
            </li>
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>Sunward Park, Boksburg, Gauteng, South Africa</span>
            </li>
            <li className="flex gap-2">
              <FileText className="mt-0.5 h-4 w-4 shrink-0" />
              <span>Reg 2021/854755/07</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="container-x py-5 text-xs text-white/55">
          © {new Date().getFullYear()} Dubai Projects and Mineral Resources (Pty) Ltd. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
