import { Link } from "@tanstack/react-router";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-brand text-brand-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-foreground text-brand">
              <Shield className="h-5 w-5" />
            </span>
            <div className="leading-none">
              <p className="font-serif text-lg font-bold">FutureSafe</p>
              <p className="text-[10px] uppercase tracking-[0.18em] opacity-70">
                Insurance Services
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm opacity-80">
            Independent insurance advisors helping families and businesses secure
            the right cover at the right price since 2008.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-sm font-semibold uppercase tracking-wider">
            Insurance
          </h4>
          <ul className="mt-4 space-y-2 text-sm opacity-85">
            <li><Link to="/health-insurance" className="hover:underline">Health Insurance</Link></li>
            <li><Link to="/life-insurance" className="hover:underline">Life Insurance</Link></li>
            <li><Link to="/motor-insurance" className="hover:underline">Motor Insurance</Link></li>
            <li><Link to="/services" className="hover:underline">All Services</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-sm font-semibold uppercase tracking-wider">
            Company
          </h4>
          <ul className="mt-4 space-y-2 text-sm opacity-85">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-sm font-semibold uppercase tracking-wider">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm opacity-85">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              <span>+1 (555) 010-2030</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              <span>hello@futuresafe.example</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>221 Atlantic Ave, Suite 400<br />New York, NY 10001</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs opacity-75 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} FutureSafe Insurance Services. All rights reserved.</p>
          <p>Licensed insurance brokerage. NPN #1234567.</p>
        </div>
      </div>
    </footer>
  );
}
