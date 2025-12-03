import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MentalHealth from "./pages/MentalHealth";
import PhysicalHealth from "./pages/PhysicalHealth";
import MedicationAssistance from "./pages/MedicationAssistance";
import CommunitySupport from "./pages/CommunitySupport";
import AboutUs from "./pages/AboutUs";

const queryClient = new QueryClient();

import ScrollToTop from "./components/ScrollToTop"; // <-- add this import

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>

        <ScrollToTop />   {/* <-- add this line */}

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/physical-health" element={<PhysicalHealth />} />
          <Route path="/medication-assistance" element={<MedicationAssistance />} />
          <Route path="/community-support" element={<CommunitySupport />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
