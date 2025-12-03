import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Target, Users, Sparkles, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description: "We believe everyone deserves access to healthcare information and support, regardless of their circumstances.",
  },
  {
    icon: Target,
    title: "Accessibility",
    description: "Making healthcare navigation simple and understandable for all users.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building connections between people and the resources they need to thrive.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Using AI technology to provide personalized guidance and support.",
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
          
          <div className="container px-4 relative">
            <Link to="/">
              <Button variant="ghost" className="mb-6 gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About HealthMapp</h1>
              <p className="text-xl text-muted-foreground">
                Connecting communities to healthcare resources with compassion and innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-warm-cream">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                HealthMapp was created with a simple yet powerful mission: to make healthcare 
                resources accessible to everyone. We believe that navigating the healthcare 
                system shouldn't be overwhelming or confusing. Our AI-powered platform helps 
                users find the care, support, and resources they need—all in one place.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <p className="leading-relaxed mb-4">
                  HealthMapp was born from a recognition that too many people struggle to find 
                  the healthcare resources they need. Whether it's locating a nearby clinic, 
                  understanding medication assistance programs, or finding mental health support, 
                  the journey to care can be daunting.
                </p>
                <p className="leading-relaxed mb-4">
                  By combining modern AI technology with a warm, user-friendly interface, 
                  HealthMapp bridges the gap between people and the healthcare services 
                  available to them. Our platform provides personalized guidance, helping 
                  users navigate their options with confidence.
                </p>
                <p className="leading-relaxed">
                  We're committed to continuously improving and expanding our resources to 
                  serve communities across the country.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-warm-cream">
          <div className="container px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-6 h-full text-center border-2 border-border/50 hover:border-primary/50 transition-all">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Creator Section */}
        <section className="py-16">
          <div className="container px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg text-muted-foreground mb-2">
                Created by
              </p>
              <p className="text-2xl font-bold text-primary">
                Madison Van Horn
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Find Resources?</h2>
            <p className="text-muted-foreground mb-6">
              Let our AI assistant help you discover healthcare options in your area.
            </p>
            <Button variant="warm" size="lg" asChild>
              <Link to="/#chat">Start Exploring</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
