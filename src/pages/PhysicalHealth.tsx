import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, MapPin, Stethoscope, Activity, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import physicalHealthImg from "@/assets/physical-health.jpg";

const resources = [
  {
    icon: MapPin,
    title: "Find Nearby Clinics",
    description: "Locate healthcare facilities in your area",
    items: [
      "Community health centers",
      "Urgent care facilities",
      "Free and low-cost clinics",
    ],
  },
  {
    icon: Stethoscope,
    title: "Primary Care",
    description: "Regular checkups and preventive care",
    items: [
      "Annual wellness exams",
      "Immunizations and screenings",
      "Chronic disease management",
    ],
  },
  {
    icon: Activity,
    title: "Wellness Programs",
    description: "Programs to improve your overall health",
    items: [
      "Nutrition counseling",
      "Exercise programs",
      "Health education workshops",
    ],
  },
];

const PhysicalHealth = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={physicalHealthImg} 
              alt="Physical Health Support" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
          </div>
          
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
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-warm-coral to-accent">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">Physical Health Resources</h1>
              </div>
              <p className="text-xl text-muted-foreground">
                Find clinics, doctors, and healthcare facilities near you. Access quality healthcare for you and your family.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-warm-cream">
          <div className="container px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {resources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <motion.div
                    key={resource.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-6 h-full border-2 border-border/50 hover:border-primary/50 transition-all">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-warm-coral to-accent">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold">{resource.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">{resource.description}</p>
                      <ul className="space-y-2">
                        {resource.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm">
                            <span className="text-primary mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Find Care Near You</h2>
            <p className="text-muted-foreground mb-6">
              Use our AI assistant to find healthcare facilities in your area.
            </p>
            <Button variant="warm" size="lg" asChild>
              <Link to="/#chat">Chat with AI Assistant</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PhysicalHealth;
