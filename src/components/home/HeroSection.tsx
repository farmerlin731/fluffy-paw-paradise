import { PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    //ori
    //first solu
    // <section
    //   className="bg-cover bg-center py-20 md:py-32 relative overflow-hidden"
    //   style={{ backgroundImage: "url('/banner.jpg')" }}
    // >

    //second solu
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* 背景圖層 */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/banner.jpg')",
          opacity: 0.5, // 這裡調整透明度
          zIndex: 0,
        }}
      ></div>

      <div className="salon-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
            為您的毛小孩提供最頂級的美容服務
          </h1>
          <p className="text-xl text-gray-700 mb-8 animate-slide-in">
            專業美容師，溫馨環境，讓您的寵物享受奢華的護理體驗
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 py-6 text-lg animate-slide-in bg-primary hover:bg-primary/90 text-white shadow-lg"
          >
            <Link to="/booking">
              <PawPrint className="mr-2" size={20} />
              立即預約
            </Link>
          </Button>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 text-primary">
          <PawPrint size={40} />
        </div>
        <div className="absolute bottom-10 right-10 text-primary">
          <PawPrint size={40} />
        </div>
        <div className="absolute top-1/2 left-1/4 text-lavender-400">
          <PawPrint size={30} />
        </div>
        <div className="absolute top-1/4 right-1/3 text-lavender-400">
          <PawPrint size={25} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
