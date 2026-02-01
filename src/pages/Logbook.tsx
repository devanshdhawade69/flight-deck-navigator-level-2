import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

interface GalleryImage {
  id: string;
  url: string;
  title: string;
  description: string;
}

const viewsGallery: GalleryImage[] = [
  {
    id: "v1",
    url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    title: "Golden Hour at 35,000ft",
    description: "Sunset over the Pacific, en route to Tokyo",
  },
  {
    id: "v2",
    url: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80",
    title: "Cloud Formations",
    description: "Towering cumulus over the Atlantic",
  },
  {
    id: "v3",
    url: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80",
    title: "Northern Lights",
    description: "Aurora borealis on polar route",
  },
  {
    id: "v4",
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
    title: "Mountain Passes",
    description: "Alpine crossing at dawn",
  },
  {
    id: "v5",
    url: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
    title: "City Lights",
    description: "Night approach into Dubai",
  },
  {
    id: "v6",
    url: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800&q=80",
    title: "Storm Avoidance",
    description: "Navigating around weather systems",
  },
];

const machineGallery: GalleryImage[] = [
  {
    id: "m1",
    url: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80",
    title: "Pre-Flight Check",
    description: "Walk-around inspection routine",
  },
  {
    id: "m2",
    url: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=80",
    title: "Flight Deck",
    description: "Boeing 777 cockpit at night",
  },
  {
    id: "m3",
    url: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&q=80",
    title: "Engine Detail",
    description: "GE90 turbofan close-up",
  },
  {
    id: "m4",
    url: "https://images.unsplash.com/photo-1529074393562-0d9fef6c5a47?w=800&q=80",
    title: "Wing at Sunset",
    description: "Airbus A350 wing in golden light",
  },
  {
    id: "m5",
    url: "https://images.unsplash.com/photo-1606768666853-403c90a981ad?w=800&q=80",
    title: "Navigation Instruments",
    description: "Primary flight display",
  },
  {
    id: "m6",
    url: "https://images.unsplash.com/photo-1583202075546-76c93f8a21c9?w=800&q=80",
    title: "Landing Gear",
    description: "Main gear retraction",
  },
];

const destinations = [
  {
    id: "d1",
    city: "Tokyo",
    country: "Japan",
    code: "NRT",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    description: "48 hours exploring ancient temples and modern marvels. The contrast between Shibuya's neon lights and Asakusa's historic Senso-ji temple never fails to inspire.",
    highlights: ["Tsukiji Fish Market", "TeamLab Borderless", "Meiji Shrine"],
  },
  {
    id: "d2",
    city: "Dubai",
    country: "UAE",
    code: "DXB",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    description: "Where tradition meets tomorrow. From the historic Creek to the soaring Burj Khalifa, every layover reveals new facets of this desert metropolis.",
    highlights: ["Desert Safari", "Dubai Marina", "Gold Souk"],
  },
  {
    id: "d3",
    city: "Sydney",
    country: "Australia",
    code: "SYD",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80",
    description: "The harbor city that captured my heart. Morning runs along Bondi Beach and evening strolls past the Opera House make every long-haul worthwhile.",
    highlights: ["Harbour Bridge Climb", "Bondi to Coogee Walk", "The Rocks"],
  },
  {
    id: "d4",
    city: "London",
    country: "UK",
    code: "LHR",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    description: "My most frequent destination and a city that always feels like home. From quiet pubs in Hampstead to world-class museums, London never disappoints.",
    highlights: ["British Museum", "Borough Market", "Greenwich Observatory"],
  },
];

const Logbook = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

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
              Portfolio
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              The Logbook
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
              Visual stories from 30,000 feet and destinations around the globe
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="views" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="views" className="font-heading">The Views</TabsTrigger>
              <TabsTrigger value="machine" className="font-heading">The Machine</TabsTrigger>
              <TabsTrigger value="destinations" className="font-heading">Destinations</TabsTrigger>
            </TabsList>

            {/* Views Gallery */}
            <TabsContent value="views">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {viewsGallery.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
                      {image.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{image.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Machine Gallery */}
            <TabsContent value="machine">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {machineGallery.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
                      {image.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{image.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Destinations */}
            <TabsContent value="destinations">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-8"
              >
                {destinations.map((dest, index) => (
                  <motion.div
                    key={dest.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden">
                      <div className="grid md:grid-cols-2">
                        <div className="aspect-video md:aspect-auto">
                          <img
                            src={dest.image}
                            alt={dest.city}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-8 flex flex-col justify-center">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-accent/10 text-accent font-heading font-bold rounded-full text-sm">
                              {dest.code}
                            </span>
                            <span className="text-muted-foreground text-sm">
                              {dest.country}
                            </span>
                          </div>
                          <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                            48 Hours in {dest.city}
                          </h3>
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {dest.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {dest.highlights.map((highlight) => (
                              <span
                                key={highlight}
                                className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-accent transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full rounded-xl"
              />
              <div className="mt-6 text-center">
                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-white/70">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Logbook;
