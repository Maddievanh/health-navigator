import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-health.jpg";
import { useState } from "react";

const Hero = () => {
  const [zipCode, setZipCode] = useState("");

  const handleSearch = () => {
    if (zipCode) {
      document.getElementById("map")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Healthcare support" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Find <span className="bg-gradient-to-r from-soft-teal to-sage-green bg-clip-text text-transparent">Affordable Healthcare</span> Near You
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Your virtual assistant for accessible physical and mental health resources. 
              Connect with affordable care options, medication discounts, and support programs in your area.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-[var(--shadow-card)] border border-border/50"
          >
            <p className="text-sm font-medium text-foreground/70 mb-3">Find healthcare facilities near you</p>
            <div className="flex gap-3">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter your ZIP code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="pl-10 h-12 text-base bg-background border-2 border-border focus:border-primary"
                  maxLength={5}
                />
              </div>
              <Button 
                variant="warm" 
                size="lg" 
                className="gap-2 px-6"
                onClick={handleSearch}
              >
                <Search className="h-5 w-5" />
                Search
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button variant="outline" size="lg">
              Talk to AI Assistant
            </Button>
            <Button variant="soft" size="lg">
              Browse Resources
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;