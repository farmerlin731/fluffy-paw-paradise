import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import PricingOptimized from "./pages/PricingOptimized";
import Booking from "./pages/Booking";
import TestPricing from "./pages/TestPricing";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Reviews from "./pages/Reviews";
import ReviewDetail from "./pages/ReviewDetail";
import ReviewCarouselComparison from "./pages/ReviewCarouselComparison";
import NotFound from "./pages/NotFound";
import { AnimatePresence, motion } from "framer-motion";

const queryClient = new QueryClient();

// 路由組件包裝器，處理頁面頂端開始
const AppRoutes = () => {
  const location = useLocation();

  // 有一些bug在, 改pageWrapper的寫法
  // useEffect(() => {
  //   // 每次路由變化時滾動到頁面頂端
  //   window.scrollTo({ top: 0, behavior: "instant" });
  // }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      {/*   // 有一些bug在, 改pageWrapper的寫法 
      <motion.div
        key={location.pathname} // 依路由切換觸發動畫
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full h-full"
      > */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/pricing-optimized" element={<PricingOptimized />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/testpricing" element={<TestPricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/:id" element={<ReviewDetail />} />
        <Route
          path="/review-carousel-comparison"
          element={<ReviewCarouselComparison />}
        />
        <Route path="/profile" element={<Profile />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* </motion.div> */}
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
