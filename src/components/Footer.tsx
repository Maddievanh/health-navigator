import { Heart, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-warm-cream border-t border-border/50">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-soft-teal to-sage-green">
                <Heart className="h-5 w-5 text-white" fill="white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-soft-teal to-sage-green bg-clip-text text-transparent">
                HealthMapp
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting you to affordable healthcare resources and support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#resources" className="hover:text-primary transition-colors">Resources</a></li>
              <li><a href="#map" className="hover:text-primary transition-colors">Find Care</a></li>
              <li><a href="#chat" className="hover:text-primary transition-colors">AI Assistant</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Get Help Now</h4>
            <div className="space-y-3">
              <Button variant="warm" className="w-full gap-2">
                <Phone className="h-4 w-4" />
                1-800-HEALTH
              </Button>
              <div className="text-sm text-muted-foreground space-y-2">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  support@healthmapp.com
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  <span>Available 24/7 for support and guidance</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© 2025 HealthMapp. All rights reserved. Your health, our priority.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;