
import PageWrapper from "@/components/layout/PageWrapper";
import HeroSection from "@/components/home/HeroSection";
import FeatureSection from "@/components/home/FeatureSection";
import ReviewCarousel from "@/components/home/ReviewCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { PawPrint } from "lucide-react";

const Home = () => {
  return (
    <PageWrapper>
      <HeroSection />
      <FeatureSection />
      <ReviewCarousel />
      
      {/* Welcome Section */}
      <section className="py-16">
        <div className="salon-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">歡迎來到毛茸茸天堂</h2>
              <p className="text-gray-700 mb-4">
                毛茸茸天堂是您寵物美容的首選目的地。我們提供全方位的美容服務，從基本的洗澡、修毛到專業的造型修剪，滿足您毛孩的各種需求。
              </p>
              <p className="text-gray-700 mb-6">
                我們的美容師擁有豐富的經驗和專業知識，使用優質的產品和工具，確保您的寵物在舒適的環境中享受美容服務。無論是貓咪還是狗狗，無論是大型還是小型品種，我們都能為他們提供最適合的護理。
              </p>
              <Button asChild>
                <Link to="/services">
                  瞭解我們的服務 <PawPrint className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-w-4 aspect-h-3 bg-gradient-to-r from-salon-pink to-salon-light-pink rounded-2xl p-1">
                <div className="w-full h-full rounded-xl bg-[url('https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3')] bg-cover bg-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-salon-gray">
        <div className="salon-container">
          <h2 className="section-title text-center mb-12">顧客評價</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "陳小姐",
                pet: "貓咪 - 小花",
                comment: "美容師非常溫柔，小花平常怕生，但在這裡竟然很放鬆。修剪得很漂亮，會一直回來！"
              },
              {
                name: "林先生",
                pet: "狗狗 - 豆豆",
                comment: "服務超棒！豆豆是第一次來這裡，美容師很有耐心，環境也很乾淨。豆豆看起來很開心。"
              },
              {
                name: "王太太",
                pet: "狗狗 - 可可",
                comment: "預約方便，服務專業，價格合理。可可的毛被剪得很漂亮，整個人都精神了！"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="card-shadow">
                <CardContent className="p-6">
                  <p className="italic text-gray-600 mb-4">"{testimonial.comment}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.pet}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="salon-container">
          <div className="gradient-bg rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">立即為您的寵物預約美容服務</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              不要讓您的毛小孩等待！選擇專業的美容服務，讓他們煥然一新。
            </p>
            <Button asChild variant="secondary" size="lg" className="font-medium">
              <Link to="/booking">
                立即預約 <PawPrint className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;
