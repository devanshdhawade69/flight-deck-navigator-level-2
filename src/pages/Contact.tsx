import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Linkedin, Instagram, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    inquiryType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.inquiryType) {
      newErrors.inquiryType = "Please select an inquiry type";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Static form - just show success
      setIsSubmitted(true);
      toast({
        title: "Message received!",
        description: "Thank you for your inquiry. I'll get back to you soon.",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

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
              The Tower
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Contact
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
              Ready to clear for takeoff? Let's start a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
                Send a Message
              </h2>

              {isSubmitted ? (
                <Card className="p-12 text-center">
                  <CardContent className="p-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
                    </motion.div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. I'll review your message and 
                      get back to you as soon as possible.
                    </p>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          company: "",
                          email: "",
                          inquiryType: "",
                          message: "",
                        });
                      }}
                      variant="outline"
                      className="font-heading"
                    >
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="John Doe"
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="john@example.com"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type *</Label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={(value) => handleInputChange("inquiryType", value)}
                    >
                      <SelectTrigger className={errors.inquiryType ? "border-destructive" : ""}>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ferry">Ferry Flight Services</SelectItem>
                        <SelectItem value="charter">Private Charter</SelectItem>
                        <SelectItem value="instruction">Flight Instruction</SelectItem>
                        <SelectItem value="employment">Employment Opportunity</SelectItem>
                        <SelectItem value="collaboration">Collaboration</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.inquiryType && (
                      <p className="text-sm text-destructive">{errors.inquiryType}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell me about your inquiry..."
                      rows={5}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Base Location */}
              <Card className="overflow-hidden">
                <div className="aspect-video bg-muted relative">
                  <img
                    src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80"
                    alt="Airport"
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                      <h3 className="font-heading text-4xl font-bold text-foreground">
                        KJFK
                      </h3>
                      <p className="text-muted-foreground">
                        Currently based in New York
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                  Connect Online
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-3 px-6 py-4 bg-muted rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors group"
                  >
                    <Linkedin className="w-6 h-6" />
                    <div>
                      <p className="font-heading font-semibold">LinkedIn</p>
                      <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/70">
                        Professional Network
                      </p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-6 py-4 bg-muted rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors group"
                  >
                    <Instagram className="w-6 h-6" />
                    <div>
                      <p className="font-heading font-semibold">Instagram</p>
                      <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/70">
                        Visual Portfolio
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <Card className="bg-accent/10 border-accent/20">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-foreground mb-2">
                    Response Time
                  </h3>
                  <p className="text-muted-foreground">
                    I typically respond to inquiries within 24-48 hours. 
                    For urgent matters, please indicate so in your message.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
