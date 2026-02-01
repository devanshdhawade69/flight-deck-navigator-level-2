import { motion } from "framer-motion";
import { Plane, Users, GraduationCap, Briefcase, Download, Calendar, MapPin } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Plane,
    title: "Ferry Flights",
    description: "Professional aircraft relocation services worldwide. Experienced in both domestic and international ferry operations with all required permits and documentation.",
    features: ["Worldwide coverage", "Full documentation", "Insurance coordination", "Maintenance oversight"],
  },
  {
    icon: Users,
    title: "Private Charter",
    description: "Discreet, professional VIP transport services. Personalized flight planning and execution for business executives and private clients.",
    features: ["Flexible scheduling", "Custom itineraries", "Executive handling", "Maximum privacy"],
  },
  {
    icon: GraduationCap,
    title: "Flight Instruction",
    description: "One-on-one flight training and mentorship for aspiring pilots. From PPL preparation to advanced type rating training and airline interview preparation.",
    features: ["PPL to ATP training", "Type rating prep", "Interview coaching", "Simulator sessions"],
  },
];

const typeRatings = [
  { aircraft: "Boeing 737-800/900", rating: "Captain" },
  { aircraft: "Airbus A320 Family", rating: "Captain" },
  { aircraft: "Boeing 777-200/300", rating: "First Officer" },
  { aircraft: "Boeing 787 Dreamliner", rating: "First Officer" },
];

const careerTimeline = [
  {
    period: "2020 - Present",
    role: "Captain",
    company: "Major International Carrier",
    aircraft: "Boeing 737-800",
    location: "New York, USA",
  },
  {
    period: "2017 - 2020",
    role: "First Officer",
    company: "European Flag Carrier",
    aircraft: "Airbus A320",
    location: "Frankfurt, Germany",
  },
  {
    period: "2014 - 2017",
    role: "First Officer",
    company: "Regional Airline",
    aircraft: "Embraer E175",
    location: "Chicago, USA",
  },
  {
    period: "2012 - 2014",
    role: "Flight Instructor",
    company: "ATP Flight School",
    aircraft: "Cessna 172, Piper Seminole",
    location: "Phoenix, USA",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-accent font-heading text-sm tracking-[0.3em] uppercase mb-4 block">
              Professional Services
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Services & Resume
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
              Professional aviation services and career history
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="services" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="services" className="font-heading">Hire Me</TabsTrigger>
              <TabsTrigger value="resume" className="font-heading">Employment</TabsTrigger>
            </TabsList>

            {/* Services Tab */}
            <TabsContent value="services">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid md:grid-cols-3 gap-8"
              >
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-gold transition-shadow">
                      <CardHeader>
                        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                          <service.icon className="w-8 h-8 text-accent" />
                        </div>
                        <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button asChild variant="outline" className="w-full font-heading">
                          <Link to="/contact">Inquire Now</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Resume Tab */}
            <TabsContent value="resume">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-4xl mx-auto"
              >
                {/* Professional Summary */}
                <div className="mb-12">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    Professional Summary
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Highly experienced commercial airline pilot with over 5,000 flight hours 
                    and a proven track record of safety, efficiency, and professionalism. 
                    Type-rated on multiple Boeing and Airbus aircraft with extensive 
                    international long-haul and short-haul experience. Strong leadership 
                    skills with experience mentoring first officers and conducting line training.
                  </p>
                </div>

                {/* Type Ratings Grid */}
                <div className="mb-12">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                    Type Ratings
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {typeRatings.map((rating, index) => (
                      <motion.div
                        key={rating.aircraft}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 bg-muted/50 rounded-xl text-center"
                      >
                        <Plane className="w-8 h-8 text-accent mx-auto mb-3" />
                        <h3 className="font-heading font-semibold text-foreground text-sm mb-1">
                          {rating.aircraft}
                        </h3>
                        <span className="text-xs text-accent">{rating.rating}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Career Timeline */}
                <div className="mb-12">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                    Career Timeline
                  </h2>
                  <div className="space-y-6">
                    {careerTimeline.map((item, index) => (
                      <motion.div
                        key={item.period}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-8 border-l-2 border-accent/30"
                      >
                        <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-accent" />
                        <div className="flex flex-wrap items-start gap-4 mb-2">
                          <span className="flex items-center gap-1 text-sm text-accent font-heading font-semibold">
                            <Calendar className="w-4 h-4" />
                            {item.period}
                          </span>
                          <span className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            {item.location}
                          </span>
                        </div>
                        <h3 className="font-heading font-bold text-lg text-foreground">
                          {item.role}
                        </h3>
                        <p className="text-muted-foreground">{item.company}</p>
                        <p className="text-sm text-secondary">{item.aircraft}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Download Resume */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-center p-8 bg-primary/5 rounded-xl"
                >
                  <Briefcase className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    Need a full resume?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Download my complete CV with references and documentation
                  </p>
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF Resume
                  </Button>
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
