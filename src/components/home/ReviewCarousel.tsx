import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, ChevronLeft, ChevronRight, Hand } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

// Same review data as in Reviews page (first 6 for carousel)
const featuredReviews = [
  {
    id: 1,
    petName: "小白",
    petPhoto: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=400&fit=crop&crop=face",
    comment: "美容師非常專業，小白洗完澡後毛髮好柔順！整個過程都很安心，小白也很享受洗澡的過程。",
    rating: 5
  },
  {
    id: 2,
    petName: "咪咪",
    petPhoto: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop&crop=face",
    comment: "環境很乾淨，咪咪第一次這麼乖乖地配合美容。店內設備很新，工作人員也很有愛心。",
    rating: 5
  },
  {
    id: 3,
    petName: "黃金",
    petPhoto: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop&crop=face",
    comment: "服務態度很好，黃金洗完後整個人都精神了！美容師的技術很專業，剪毛的造型也很好看。",
    rating: 5
  },
  {
    id: 4,
    petName: "花花",
    petPhoto: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop&crop=face",
    comment: "技術專業，花花的毛被修剪得很漂亮。美容師很有耐心，會先了解我們的需求。",
    rating: 4
  },
  {
    id: 5,
    petName: "布丁",
    petPhoto: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop&crop=face",
    comment: "價格合理，服務周到，布丁很喜歡這裡！每次來都會很開心，美容師記得布丁的習慣。",
    rating: 5
  },
  {
    id: 6,
    petName: "豆豆",
    petPhoto: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&h=400&fit=crop&crop=face",
    comment: "美容師很有耐心，豆豆從害怕到享受。第一次來的時候豆豆很緊張，但是美容師很溫柔地安撫牠。",
    rating: 5
  }
];

const ReviewCarousel = () => {
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSwipeHint(false), 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="py-16 bg-gradient-to-br from-lavender-50 to-pink-50">
      <div className="salon-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            客戶好評分享
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            聽聽其他毛爸毛媽怎麼說
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        {showSwipeHint && (
          <div className="block md:hidden mb-6">
            <div className="flex items-center justify-center space-x-2 animate-bounce">
              <Hand className="w-5 h-5 text-pink-400" />
              <span className="text-sm text-gray-500">左右滑動查看更多評價</span>
              <Hand className="w-5 h-5 text-pink-400 scale-x-[-1]" />
            </div>
          </div>
        )}

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
          <CarouselContent className="-ml-2 md:-ml-4">
            {featuredReviews.map((review) => (
              <CarouselItem key={review.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex flex-col items-center text-center space-y-4 flex-1">
                      <img
                        src={review.petPhoto}
                        alt={`${review.petName}的照片`}
                        className="w-20 h-20 rounded-2xl object-cover border-4 border-lavender-200 shadow-md"
                      />
                      <h3 className="text-lg font-semibold text-gray-800">{review.petName}</h3>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 flex-1">
                        {review.comment}
                      </p>
                      <Button 
                        asChild 
                        variant="outline" 
                        size="sm" 
                        className="mt-auto rounded-full border-lavender-300 text-lavender-600 hover:bg-lavender-50"
                      >
                        <Link to={`/reviews/${review.id}`}>閱讀更多</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* 桌面版自訂導航按鈕 - 更大更明顯 */}
          <CarouselPrevious className="hidden md:flex left-0 -translate-x-1/2 w-14 h-14 bg-gradient-to-r from-pink-400 to-purple-400 border-0 shadow-xl hover:shadow-2xl hover:scale-115 transition-all duration-300 z-10">
            <ChevronLeft className="w-7 h-7 text-white" />
          </CarouselPrevious>
          <CarouselNext className="hidden md:flex right-0 translate-x-1/2 w-14 h-14 bg-gradient-to-r from-purple-400 to-pink-400 border-0 shadow-xl hover:shadow-2xl hover:scale-115 transition-all duration-300 z-10">
            <ChevronRight className="w-7 h-7 text-white" />
          </CarouselNext>

          {/* 手機版導航按鈕 - 固定在底部 */}
          <div className="flex md:hidden justify-center mt-6 space-x-4">
            <CarouselPrevious className="relative left-0 translate-x-0 translate-y-0 w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 border-0 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
              <ChevronLeft className="w-6 h-6 text-white" />
            </CarouselPrevious>
            <div className="flex items-center px-4">
              <div className="flex space-x-2">
                {featuredReviews.map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full bg-pink-300 opacity-50"
                  />
                ))}
              </div>
            </div>
            <CarouselNext className="relative right-0 translate-x-0 translate-y-0 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 border-0 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
              <ChevronRight className="w-6 h-6 text-white" />
            </CarouselNext>
          </div>

          {/* 桌面版進度指示器 */}
          <div className="hidden md:flex justify-center mt-6 space-x-3">
            {featuredReviews.map((_, index) => (
              <div
                key={index}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              />
            ))}
          </div>
          </Carousel>
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link to="/reviews">查看更多評價</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;