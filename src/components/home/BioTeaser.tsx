import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BioTeaser = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Section Label */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-heading text-sm tracking-[0.2em] uppercase">
              About Me
            </span>
            <div className="h-px w-12 bg-accent" />
          </div>

          {/* Bio Text */}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Flying has been more than a career—
            <span className="text-accent"> it's a calling.</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            With over a decade in the cockpit, I've had the privilege of connecting 
            cities across six continents. From the crisp dawn departures over the 
            Atlantic to the starlit approaches into Asia's megacities, every flight 
            reinforces my commitment to safety, precision, and the art of aviation.
          </p>

          {/* Link to About */}
          <Link
            to="/about"
            className="inline-flex items-center gap-2 font-heading font-semibold text-accent hover:text-accent/80 transition-colors group"
          >
            Read My Full Story
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BioTeaser;
