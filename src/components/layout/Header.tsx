import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Logbook", path: "/logbook" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:animate-pulse-gold transition-all">
              <Plane className="w-5 h-5 text-primary-foreground transform -rotate-45" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-heading font-bold text-lg tracking-wide transition-colors",
              isScrolled ? "text-foreground" : "text-white"
            )}>
              CAPTAIN
            </span>
            <span className={cn(
              "text-xs tracking-[0.2em] uppercase transition-colors",
              isScrolled ? "text-accent" : "text-accent"
            )}>
              Portfolio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "relative px-4 py-2 font-heading text-sm font-medium tracking-wide transition-colors",
                location.pathname === item.path
                  ? isScrolled ? "text-accent" : "text-accent"
                  : isScrolled ? "text-foreground hover:text-accent" : "text-white/90 hover:text-white"
              )}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Button
          asChild
          className="hidden md:inline-flex bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold tracking-wide"
        >
          <Link to="/contact">Get In Touch</Link>
        </Button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "md:hidden p-2 transition-colors",
            isScrolled ? "text-foreground" : "text-white"
          )}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-card/98 backdrop-blur-lg border-t border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={cn(
                      "block py-3 px-4 font-heading font-medium tracking-wide rounded-lg transition-colors",
                      location.pathname === item.path
                        ? "bg-accent/10 text-accent"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="pt-4"
              >
                <Button
                  asChild
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold"
                >
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
