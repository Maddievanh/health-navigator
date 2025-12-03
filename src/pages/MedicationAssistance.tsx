import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pill, DollarSign, FileText, Building, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const resources = [
  {
    icon: DollarSign,
    title: "Prescription Discounts",
    description: "Save money on your medications",
    items: [
      "GoodRx and similar discount cards",
      "Manufacturer coupons and rebates",
      "Generic medication alternatives",
    ],
  },
  {
    icon: FileText,
    title: "Patient Assistance Programs",
    description: "Programs from pharmaceutical companies",
    items: [
      "Income-based assistance programs",
      "Free medication programs",
      "Copay assistance programs",
    ],
  },
  {
    icon: Building,
    title: "Government Programs",
    description: "Federal and state assistance options",
    items: [
      "Medicare Part D Extra Help",
      "Medicaid prescription coverage",
      "State pharmaceutical programs",
    ],
  },
];

const MedicationAssistance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-soft-teal/20 to-primary/10" />
          
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
                <div className="p-4 rounded-2xl bg-gradient-to-br from-soft-teal to-primary">
                  <Pill className="h-10 w-10 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">Medication Assistance</h1>
              </div>
              <p className="text-xl text-muted-foreground">
                Discover prescription discounts and assistance programs. No one should have to choose between medications and other essentials.
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
                        <div className="p-2 rounded-lg bg-gradient-to-br from-soft-teal to-primary">
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
            <h2 className="text-2xl font-bold mb-4">Need Help Finding Assistance?</h2>
            <p className="text-muted-foreground mb-6">
              Our AI assistant can help you find the right medication assistance programs for your situation.
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

export default MedicationAssistance;
