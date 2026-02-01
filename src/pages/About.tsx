import { motion } from "framer-motion";
import { Clock, MapPin, Plane, Globe, Award, Shield, Star, FileCheck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { icon: Clock, value: "5,200+", label: "Total Flight Hours", color: "text-accent" },
  { icon: Star, value: "4,100+", label: "PIC Hours", color: "text-secondary" },
  { icon: Plane, value: "12", label: "Aircraft Types", color: "text-accent" },
  { icon: Globe, value: "45", label: "Countries Visited", color: "text-secondary" },
];

const certifications = [
  { icon: Award, name: "ATPL", description: "Airline Transport Pilot License" },
  { icon: Shield, name: "CPL", description: "Commercial Pilot License" },
  { icon: FileCheck, name: "IR", description: "Instrument Rating" },
  { icon: Plane, name: "ME", description: "Multi-Engine Rating" },
];

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=600&q=80",
    alt: "Pre-flight inspection",
  },
  {
    url: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=600&q=80",
    alt: "Cockpit view",
  },
  {
    url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
    alt: "Aircraft on runway",
  },
  {
    url: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&q=80",
    alt: "Sunset from cockpit",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-primary-foreground rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-primary-foreground rounded-full" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-accent font-heading text-sm tracking-[0.3em] uppercase mb-4 block">
              The Manifest
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              About Me
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
              The story of a lifelong passion for aviation and a commitment to excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-accent" />
                <span className="text-accent font-heading text-sm tracking-[0.2em] uppercase">
                  My Story
                </span>
              </div>
              
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                From a childhood dream to the flight deck
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My journey began at the age of eight, watching aircraft trace their paths 
                  across the sky from my grandparents' backyard near the local airport. That 
                  fascination never faded—it only grew stronger.
                </p>
                <p>
                  After earning my private pilot license at seventeen, I knew aviation would 
                  be my life's work. Through years of training, thousands of hours of study, 
                  and countless simulator sessions, I progressed from single-engine Cessnas 
                  to commanding wide-body aircraft across the globe.
                </p>
                <p>
                  Today, I carry that same wonder with me into every flight. Whether it's a 
                  routine transatlantic crossing or navigating challenging weather, I approach 
                  each journey with the discipline and respect that aviation demands—and the 
                  joy that first sparked my passion.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80"
                  alt="Pilot portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-xl overflow-hidden shadow-gold border-4 border-background">
                <img
                  src="https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=400&q=80"
                  alt="Cockpit"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              By the Numbers
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A career built one flight hour at a time
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center p-6 hover:shadow-gold transition-shadow">
                  <CardContent className="p-0">
                    <stat.icon className={`w-10 h-10 mx-auto mb-4 ${stat.color}`} />
                    <div className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Certifications
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Licensed and type-rated with major aviation authorities
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center p-6 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <cert.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-1">
                  {cert.name}
                </h3>
                <p className="text-xs text-muted-foreground text-center">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Life on the Tarmac
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Moments from the flight line
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="aspect-square rounded-xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
