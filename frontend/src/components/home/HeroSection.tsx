import { PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center py-20 md:py-32 relative overflow-hidden"
      style={{ 
        backgroundImage: "url('/banner.jpg')",
        backgroundAttachment: 'scroll'
      }}
    >
      <div className="salon-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Frosted glass 背景區塊 */}
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl border border-white/40 px-8 py-10 shadow-2xl inline-block">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              為您的毛小孩
              <br />
              提供最頂級的美容服務
            </h1>
            {/* 手機版隱藏，但保留高度 */}
            <p className="text-l md:text-xl text-gray-700 mb-8">
              - 專業美容師，溫馨環境 - <br />- 讓您的寶貝寵物享受舒適體驗 -
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-white shadow-lg"
            >
              <Link to="/booking">
                <PawPrint className="mr-2" size={20} />
                立即預約
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Simplified decorative elements - only for desktop */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 text-primary">
          <PawPrint size={40} />
        </div>
        <div className="absolute bottom-10 right-10 text-primary">
          <PawPrint size={40} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
