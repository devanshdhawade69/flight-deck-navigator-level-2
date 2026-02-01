import { motion } from "framer-motion";
import { Shield, Award, GraduationCap, Plane } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    name: "FAA",
    description: "ATPL Certified",
  },
  {
    icon: Award,
    name: "EASA",
    description: "Type Rated",
  },
  {
    icon: GraduationCap,
    name: "Flight Academy",
    description: "ATP Training",
  },
  {
    icon: Plane,
    name: "Airline Partner",
    description: "Major Carrier",
  },
];

const airlines = [
  "United Airlines",
  "Delta Air Lines",
  "Emirates",
  "Lufthansa",
];

const TrustSignals = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Certifications & Affiliations
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Fully certified and type-rated with the world's leading aviation authorities
          </p>
        </motion.div>

        {/* Certification Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-card rounded-xl shadow-soft hover:shadow-gold transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <cert.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-1">
                {cert.name}
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Airline Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-border pt-12"
        >
          <p className="text-center text-sm text-muted-foreground mb-8 font-heading tracking-wide uppercase">
            Experience with Leading Airlines
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {airlines.map((airline, index) => (
              <motion.div
                key={airline}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-lg md:text-xl font-heading font-semibold text-muted-foreground/50 hover:text-primary transition-colors"
              >
                {airline}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSignals;
