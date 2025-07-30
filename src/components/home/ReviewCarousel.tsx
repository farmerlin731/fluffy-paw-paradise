import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Same review data as in Reviews page (first 6 for carousel)
const featuredReviews = [
  {
    id: 1,
    petName: "小白",
    petPhoto: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=200&h=200&fit=crop&crop=face",
    comment: "美容師非常專業，小白洗完澡後毛髮好柔順！",
    rating: 5
  },
  {
    id: 2,
    petName: "咪咪",
    petPhoto: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&h=200&fit=crop&crop=face",
    comment: "環境很乾淨，咪咪第一次這麼乖乖地配合美容。",
    rating: 5
  },
  {
    id: 3,
    petName: "黃金",
    petPhoto: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=200&h=200&fit=crop&crop=face",
    comment: "服務態度很好，黃金洗完後整個人都精神了！",
    rating: 5
  },
  {
    id: 4,
    petName: "花花",
    petPhoto: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=200&h=200&fit=crop&crop=face",
    comment: "技術專業，花花的毛被修剪得很漂亮。",
    rating: 4
  },
  {
    id: 5,
    petName: "布丁",
    petPhoto: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=200&h=200&fit=crop&crop=face",
    comment: "價格合理，服務周到，布丁很喜歡這裡！",
    rating: 5
  },
  {
    id: 6,
    petName: "豆豆",
    petPhoto: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=200&h=200&fit=crop&crop=face",
    comment: "美容師很有耐心，豆豆從害怕到享受。",
    rating: 5
  }
];

const ReviewCarousel = () => {
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
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <img
                        src={review.petPhoto}
                        alt={`${review.petName}的照片`}
                        className="w-16 h-16 rounded-full object-cover border-4 border-lavender-200"
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
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                        {review.comment}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

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