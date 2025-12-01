import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Pill, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import mentalHealthImg from "@/assets/mental-health.jpg";
import physicalHealthImg from "@/assets/physical-health.jpg";

const resources = [
  {
    icon: Brain,
    title: "Mental Health",
    description: "Access counseling, therapy, and mental wellness resources",
    image: mentalHealthImg,
    color: "from-sage-green to-soft-teal",
  },
  {
    icon: Heart,
    title: "Physical Health",
    description: "Find clinics, doctors, and healthcare facilities near you",
    image: physicalHealthImg,
    color: "from-warm-coral to-accent",
  },
  {
    icon: Pill,
    title: "Medication Assistance",
    description: "Discover prescription discounts and assistance programs",
    color: "from-soft-teal to-primary",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with support groups and community resources",
    color: "from-accent to-sage-green",
  },
];

const ResourceCards = () => {
  return (
    <section id="resources" className="py-20 bg-warm-cream">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Healthcare Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the care you need with our curated resources for physical health, mental wellness, and community support
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-soft)] h-full">
                  {resource.image && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={resource.image} 
                        alt={resource.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  {!resource.image && (
                    <div className={`h-48 bg-gradient-to-br ${resource.color} flex items-center justify-center`}>
                      <Icon className="h-16 w-16 text-white" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${resource.color}`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">{resource.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {resource.description}
                    </p>
                    <Button variant="ghost" className="gap-2 p-0 h-auto font-semibold text-primary group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResourceCards;