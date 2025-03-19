
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
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Temple Introduction Routes - Include Navbar for inner pages */}
          <Route path="/intro/about" element={<><Navbar /><TempleAbout /></>} />
          <Route path="/intro/origin" element={<><Navbar /><TempleOrigin /></>} />
          <Route path="/intro/history" element={<><Navbar /><TempleHistory /></>} />
          <Route path="/intro/facilities" element={<><Navbar /><TempleFacilities /></>} />
          <Route path="/intro/message" element={<><Navbar /><AbbotMessage /></>} />
          <Route path="/intro/monks" element={<><Navbar /><TempleMonks /></>} />
          
          {/* Events Routes */}
          <Route path="/events/calendar" element={<><Navbar /><EventsCalendar /></>} />
          <Route path="/events/dharma-talks" element={<><Navbar /><DharmaTalks /></>} />
          
          {/* Donation Route */}
          <Route path="/donation" element={<><Navbar /><Donation /></>} />
          
          {/* Location Route */}
          <Route path="/location" element={<><Navbar /><Location /></>} />
          
          {/* Notice Routes */}
          <Route path="/notice/announcements" element={<><Navbar /><Announcements /></>} />
          <Route path="/notice/faq" element={<><Navbar /><FAQ /></>} />
          <Route path="/notice/gallery" element={<><Navbar /><Gallery /></>} />
          <Route path="/notice/resources" element={<><Navbar /><Resources /></>} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
