import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Fallback gradient for when video isn't available */}
        <div className="absolute inset-0 bg-gradient-sunset opacity-90" />
        
        {/* Stock video placeholder - sunset cockpit view */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-airplane-flying-above-the-clouds-during-sunset-48588-large.mp4"
            type="video/mp4"
          />
        </video>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Pre-headline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-accent font-heading text-sm md:text-base tracking-[0.3em] uppercase mb-6"
          >
            Commercial Airline Pilot
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Precision.
            <br />
            <span className="text-gradient-gold">Safety.</span>
            <br />
            Perspective.
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-white/90 mb-10"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="font-heading font-medium">Type Rated: B737, A320</span>
            </span>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-heading font-medium">5,000+ Flight Hours</span>
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold tracking-wide px-8 py-6 text-base shadow-gold"
            >
              <Link to="/logbook">View Flight Log</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white font-heading font-semibold tracking-wide px-8 py-6 text-base backdrop-blur-sm"
            >
              <Link to="/contact">Contact Me</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs font-heading tracking-widest uppercase">Explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
