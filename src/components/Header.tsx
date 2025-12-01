import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-soft-teal to-sage-green">
            <Heart className="h-5 w-5 text-white" fill="white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-soft-teal to-sage-green bg-clip-text text-transparent">
            HealthMapp
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#resources" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Resources
          </a>
          <a href="#map" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Find Care
          </a>
          <a href="#chat" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            AI Assistant
          </a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="gap-2">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">1-800-HEALTH</span>
          </Button>
          <Button variant="warm" size="sm">
            Get Help Now
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;