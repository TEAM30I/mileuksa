
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Donation from "./pages/Donation";

// Import temple introduction pages
import TempleAbout from "./pages/intro/About";
import TempleOrigin from "./pages/intro/Origin";
import TempleHistory from "./pages/intro/History";
import TempleFacilities from "./pages/intro/Facilities";
import AbbotMessage from "./pages/intro/Message";
import TempleMonks from "./pages/intro/Monks";

// Import events pages
import EventsCalendar from "./pages/events/Calendar";
import DharmaTalks from "./pages/events/DharmaTalks";

// Import notice pages
import Announcements from "./pages/notice/Announcements";
import FAQ from "./pages/notice/FAQ";
import Gallery from "./pages/notice/Gallery";
import Resources from "./pages/notice/Resources";

// Import location page
import Location from "./pages/Location";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Temple Introduction Routes */}
          <Route path="/intro/about" element={<TempleAbout />} />
          <Route path="/intro/origin" element={<TempleOrigin />} />
          <Route path="/intro/history" element={<TempleHistory />} />
          <Route path="/intro/facilities" element={<TempleFacilities />} />
          <Route path="/intro/message" element={<AbbotMessage />} />
          <Route path="/intro/monks" element={<TempleMonks />} />
          
          {/* Events Routes */}
          <Route path="/events/calendar" element={<EventsCalendar />} />
          <Route path="/events/dharma-talks" element={<DharmaTalks />} />
          
          {/* Donation Route */}
          <Route path="/donation" element={<Donation />} />
          
          {/* Location Route */}
          <Route path="/location" element={<Location />} />
          
          {/* Notice Routes */}
          <Route path="/notice/announcements" element={<Announcements />} />
          <Route path="/notice/faq" element={<FAQ />} />
          <Route path="/notice/gallery" element={<Gallery />} />
          <Route path="/notice/resources" element={<Resources />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
