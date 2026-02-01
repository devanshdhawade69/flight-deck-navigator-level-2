import { motion } from "framer-motion";
import InteractiveGlobe from "./InteractiveGlobe";

const GlobeSection = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-heading text-sm tracking-[0.2em] uppercase">
              Flight Routes
            </span>
            <div className="h-px w-12 bg-accent" />
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Connecting the World
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Explore my flight routes across six continents. Click on any route 
            to see flight details and aircraft information.
          </p>
        </motion.div>

        {/* Globe Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square max-w-3xl mx-auto"
        >
          <InteractiveGlobe className="w-full h-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default GlobeSection;
