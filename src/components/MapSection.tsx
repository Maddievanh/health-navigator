import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Search, Navigation, Hospital, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

// Mock facility data
const mockFacilities = [
  {
    id: 1,
    name: "Community Health Center",
    type: "Physical Health",
    address: "123 Main St",
    distance: "0.8 miles",
    phone: "(555) 123-4567",
    accepting: true,
  },
  {
    id: 2,
    name: "Mindful Wellness Clinic",
    type: "Mental Health",
    address: "456 Oak Ave",
    distance: "1.2 miles",
    phone: "(555) 234-5678",
    accepting: true,
  },
  {
    id: 3,
    name: "Family Care Medical",
    type: "Physical Health",
    address: "789 Pine Rd",
    distance: "2.1 miles",
    phone: "(555) 345-6789",
    accepting: false,
  },
];

const MapSection = () => {
  const [zipCode, setZipCode] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (zipCode.length === 5) {
      setShowResults(true);
    }
  };

  return (
    <section id="map" className="py-20 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find Healthcare Facilities Near You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enter your ZIP code to discover physical and mental health resources in your area
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6 mb-8 border-2 border-primary/20">
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter ZIP code (e.g., 90210)"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value.replace(/\D/g, "").slice(0, 5))}
                    className="pl-10 h-12 text-base border-2"
                    maxLength={5}
                  />
                </div>
                <Button 
                  variant="warm" 
                  size="lg" 
                  className="gap-2 px-8"
                  onClick={handleSearch}
                  disabled={zipCode.length !== 5}
                >
                  <Search className="h-5 w-5" />
                  Search
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Map Placeholder and Results */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-[500px] overflow-hidden border-2 border-border/50">
                <div className="relative h-full bg-gradient-to-br from-soft-teal/20 via-sage-green/20 to-warm-coral/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="h-16 w-16 mx-auto mb-4 text-primary" />
                    <p className="text-lg font-medium text-foreground mb-2">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">
                      {showResults 
                        ? "Showing facilities in your area"
                        : "Enter your ZIP code to see nearby facilities"
                      }
                    </p>
                  </div>
                  {/* Note: In production, integrate Mapbox here */}
                </div>
              </Card>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              {showResults ? (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">Nearby Facilities</h3>
                    <Badge variant="secondary" className="gap-1">
                      <Navigation className="h-3 w-3" />
                      {mockFacilities.length} found
                    </Badge>
                  </div>
                  
                  {mockFacilities.map((facility, index) => (
                    <motion.div
                      key={facility.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Card className="p-5 hover:shadow-[var(--shadow-card)] transition-shadow border-2 border-border/50 hover:border-primary/30">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-lg ${
                            facility.type === "Mental Health" 
                              ? "bg-sage-green/20" 
                              : "bg-soft-teal/20"
                          }`}>
                            {facility.type === "Mental Health" ? (
                              <Brain className="h-6 w-6 text-sage-green" />
                            ) : (
                              <Hospital className="h-6 w-6 text-soft-teal" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-bold text-foreground">{facility.name}</h4>
                              <Badge 
                                variant={facility.accepting ? "default" : "secondary"}
                                className="ml-2"
                              >
                                {facility.accepting ? "Accepting" : "Full"}
                              </Badge>
                            </div>
                            <p className="text-sm text-primary font-medium mb-2">{facility.type}</p>
                            <div className="space-y-1 text-sm text-muted-foreground">
                              <p className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                {facility.address} · {facility.distance}
                              </p>
                              <p>{facility.phone}</p>
                            </div>
                            <Button variant="outline" size="sm" className="mt-3">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </>
              ) : (
                <Card className="p-12 text-center border-2 border-dashed border-border/50">
                  <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    Enter your ZIP code to find healthcare facilities near you
                  </p>
                </Card>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;