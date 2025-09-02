import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Heart, Quote, ChevronLeft, ChevronRight, Hand } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

const featuredReviews = [
  {
    id: 1,
    ownerName: "王小明",
    petName: "小白",
    petPhoto: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&h=600&fit=crop&crop=face",
    beforeAfterPhoto: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop",
    comment: "美容師非常專業，小白洗完澡後毛髮好柔順！整個過程都很安心，小白也很享受洗澡的過程。服務品質超乎期待，會再次光臨！",
    rating: 5,
    date: "2024-01-15",
    service: "精緻護理"
  },
  {
    id: 2,
    ownerName: "李美華",
    petName: "咪咪",
    petPhoto: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=600&fit=crop&crop=face",
    beforeAfterPhoto: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&h=400&fit=crop",
    comment: "環境很乾淨，咪咪第一次這麼乖乖地配合美容。店內設備很新，工作人員也很有愛心，讓我很放心把咪咪交給他們。",
    rating: 5,
    date: "2024-01-12",
    service: "基礎洗澡"
  },
  {
    id: 3,
    ownerName: "陳大偉",
    petName: "黃金",
    petPhoto: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&h=600&fit=crop&crop=face",
    beforeAfterPhoto: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=400&fit=crop",
    comment: "服務態度很好，黃金洗完後整個人都精神了！美容師的技術很專業，剪毛的造型也很好看，朋友都說黃金變帥了。",
    rating: 5,
    date: "2024-01-10",
    service: "造型剪剪"
  },
  {
    id: 4,
    ownerName: "林小花",
    petName: "花花",
    petPhoto: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=600&fit=crop&crop=face",
    beforeAfterPhoto: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop",
    comment: "技術專業，花花的毛被修剪得很漂亮。美容師很有耐心，會先了解我們的需求，整個過程花花都很配合。",
    rating: 4,
    date: "2024-01-08",
    service: "造型修剪"
  },
  {
    id: 5,
    ownerName: "張志明",
    petName: "布丁",
    petPhoto: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=600&fit=crop&crop=face",
    beforeAfterPhoto: "https://images.unsplash.com/photo-1615751072497-5f5169febe17?w=600&h=400&fit=crop",
    comment: "價格合理，服務周到，布丁很喜歡這裡！每次來都會很開心，美容師記得布丁的習慣，讓我覺得很貼心。",
    rating: 5,
    date: "2024-01-05",
    service: "精緻護理"
  },
  {
    id: 6,
    ownerName: "劉小美",
    petName: "豆豆",
    petPhoto: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=600&h=600&fit=crop&crop=face",
    beforeAfterPhoto: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=600&h=400&fit=crop",
    comment: "美容師很有耐心，豆豆從害怕到享受。第一次來的時候豆豆很緊張，但是美容師很溫柔地安撫牠，現在豆豆每次都很期待來這裡。",
    rating: 5,
    date: "2024-01-03",
    service: "基礎洗澡"
  }
];

const ReviewCarouselOptimize = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-100/20 to-purple-100/20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
      
      <div className="salon-container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            愛心見證分享
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            每一份真摯的評價，都是我們持續進步的動力
          </p>
        </div>

        {/* Mobile Swipe Hint - 永久顯示 */}
        <div className="block md:hidden mb-6">
          <div className="flex items-center justify-center space-x-2 animate-bounce">
            <Hand className="w-5 h-5 text-pink-400" />
            <span className="text-sm text-gray-500">左右滑動查看更多評價</span>
            <Hand className="w-5 h-5 text-pink-400 scale-x-[-1]" />
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {featuredReviews.map((review) => (
              <CarouselItem key={review.id} className="pl-4 md:basis-1/2 xl:basis-1/3">
                <Card 
                  className="h-full border-0 bg-white/80 backdrop-blur-sm overflow-hidden group md:transition-all md:duration-500 md:hover:shadow-2xl md:hover:-translate-y-2"
                  onMouseEnter={() => setHoveredCard(review.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardContent className="p-0">
                    {/* 照片區域 */}
                    <div className="relative overflow-hidden">
                      <div className="aspect-[4/3] relative">
                        <img
                          src={review.beforeAfterPhoto || review.petPhoto}
                          alt={`${review.petName}美容後照片`}
                          className="w-full h-full object-cover md:transition-transform md:duration-700 md:group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                        
                        {/* 寵物頭像 */}
                        <div className="absolute -bottom-6 left-6">
                          <div className="relative">
                            <img
                              src={review.petPhoto}
                              alt={`${review.petName}頭像`}
                              className="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover"
                            />
                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                              <Heart className="w-3 h-3 text-white" />
                            </div>
                          </div>
                        </div>

                        {/* 服務標籤 */}
                        <div className="absolute top-4 right-4">
                          <span className="bg-white/90 backdrop-blur-sm text-pink-600 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                            {review.service}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* 內容區域 */}
                    <div className="p-6 pt-8">
                      {/* 評分和資訊 */}
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-1">{review.petName}</h3>
                          <p className="text-sm text-gray-500">by {review.ownerName}</p>
                        </div>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 transition-all duration-300 ${
                                i < review.rating 
                                  ? "text-yellow-400 fill-current drop-shadow-sm" 
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* 評價內容 */}
                      <div className="relative mb-6">
                        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-pink-200" />
                        <p className="text-gray-600 leading-relaxed pl-6 line-clamp-3 text-sm">
                          {review.comment}
                        </p>
                      </div>

                      {/* 底部資訊 */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">
                          {new Date(review.date).toLocaleDateString('zh-TW')}
                        </span>
                        <Button 
                          asChild 
                          size="sm" 
                          className={`rounded-full md:transition-all md:duration-300 ${
                            hoveredCard === review.id
                              ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                              : 'bg-white border border-pink-200 text-pink-600 hover:bg-pink-50'
                          }`}
                        >
                          <Link to={`/reviews/${review.id}`} className="flex items-center">
                            閱讀更多
                            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* 桌面版導航按鈕 */}
          <CarouselPrevious className="hidden md:flex left-4 bg-gradient-to-r from-pink-500 to-purple-500 border-0 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
            <ChevronLeft className="w-6 h-6 text-white" />
          </CarouselPrevious>
          <CarouselNext className="hidden md:flex right-4 bg-gradient-to-r from-purple-500 to-pink-500 border-0 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
            <ChevronRight className="w-6 h-6 text-white" />
          </CarouselNext>
        </Carousel>


        {/* 統計資訊 */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-600 mb-2">4.9</div>
            <div className="text-sm text-gray-600">平均評分</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-sm text-gray-600">滿意客戶</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-600 mb-2">98%</div>
            <div className="text-sm text-gray-600">回購率</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">3年</div>
            <div className="text-sm text-gray-600">專業經驗</div>
          </div>
        </div>

        {/* CTA 按鈕 */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="rounded-full px-8 py-6 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <Link to="/reviews" className="flex items-center text-lg">
                <Heart className="w-5 h-5 mr-2" />
                查看所有評價
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 py-6 border-2 border-pink-200 text-pink-600 hover:bg-pink-50 hover:border-pink-300 transition-all duration-300"
            >
              <Link to="/booking">
                立即預約體驗
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewCarouselOptimize;