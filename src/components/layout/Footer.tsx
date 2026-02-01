import { Link } from "react-router-dom";
import { Plane, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <Plane className="w-6 h-6 text-accent-foreground transform -rotate-45" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl tracking-wide block">
                  CAPTAIN
                </span>
                <span className="text-xs tracking-[0.2em] uppercase text-accent">
                  Portfolio
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 max-w-md leading-relaxed">
              Professional commercial pilot with thousands of hours of experience 
              flying across the globe. Committed to safety, precision, and excellence 
              in every flight.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-accent">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Logbook", path: "/logbook" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-accent">
              Connect
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-primary-foreground/80">contact@pilot.com</span>
              </div>
              <div className="flex gap-3 mt-2">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Captain Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
            <span>Currently based in</span>
            <span className="font-heading font-bold text-accent">KJFK</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
