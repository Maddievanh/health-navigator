import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Phone, Users, BookOpen, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import mentalHealthImg from "@/assets/mental-health.jpg";

const resources = [
  {
    icon: Phone,
    title: "Crisis Hotlines",
    description: "24/7 support for mental health emergencies",
    items: [
      "National Suicide Prevention Lifeline: 988",
      "Crisis Text Line: Text HOME to 741741",
      "SAMHSA Helpline: 1-800-662-4357",
    ],
  },
  {
    icon: Users,
    title: "Counseling Services",
    description: "Professional therapy and counseling options",
    items: [
      "Individual therapy sessions",
      "Group counseling programs",
      "Family and couples therapy",
    ],
  },
  {
    icon: BookOpen,
    title: "Self-Help Resources",
    description: "Tools and guides for mental wellness",
    items: [
      "Mindfulness and meditation apps",
      "Mental health workbooks",
      "Online support communities",
    ],
  },
];

const MentalHealth = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={mentalHealthImg} 
              alt="Mental Health Support" 
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
                <div className="p-4 rounded-2xl bg-gradient-to-br from-sage-green to-soft-teal">
                  <Brain className="h-10 w-10 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">Mental Health Resources</h1>
              </div>
              <p className="text-xl text-muted-foreground">
                Access counseling, therapy, and mental wellness resources. You're not alone—help is available 24/7.
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
                        <div className="p-2 rounded-lg bg-gradient-to-br from-sage-green to-soft-teal">
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
            <h2 className="text-2xl font-bold mb-4">Need Immediate Help?</h2>
            <p className="text-muted-foreground mb-6">
              If you're in crisis, please reach out immediately. Help is available 24/7.
            </p>
            <Button variant="warm" size="lg" asChild>
              <a href="tel:988">Call 988 Now</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MentalHealth;
