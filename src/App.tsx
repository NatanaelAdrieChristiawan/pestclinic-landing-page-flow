import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Commercial from "./pages/Commercial";
import Disinfection from "./pages/Disinfection";
import Specialist from "./pages/Specialists";
import Contact from "./pages/ContactUs";
import TermiteControl from "./pages/services/termite/Control";
import TermiteInspection from "./pages/services/termite/Inspection";
import TermiteTypes from "./pages/services/termite/Types";
import Ants from "./pages/services/ants/Ants";
import BedBugs from "./pages/services/bed-bugs/BedBugs";
import Cockroaches from "./pages/services/cockroaches/Cockroaches";
import Flies from "./pages/services/flies/Flies";
import Mosquitos from "./pages/services/mosquitos/Mosquitos";
import Rodents from "./pages/services/rodents/Rodents";
import OtherPests from "./pages/services/other-pests/OtherPests";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/disinfection" element={<Disinfection />} />
          <Route path="/specialist" element={<Specialist />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/termite/control" element={<TermiteControl />} />
          <Route path="/services/termite/inspection" element={<TermiteInspection />} />
          <Route path="/services/termite/types" element={<TermiteTypes />} />
          <Route path="/services/ants" element={<Ants />} />
          <Route path="/services/bed-bugs" element={<BedBugs />} />
          <Route path="/services/cockroaches" element={<Cockroaches />} />
          <Route path="/services/flies" element={<Flies />} />
          <Route path="/services/mosquitos" element={<Mosquitos />} />
          <Route path="/services/rodents" element={<Rodents />} />
          <Route path="/services/other-pests" element={<OtherPests />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
