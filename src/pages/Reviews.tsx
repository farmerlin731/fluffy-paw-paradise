import PageWrapper from "@/components/layout/PageWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

// Fake review data
const reviews = [
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
  },
  {
    id: 7,
    petName: "橘子",
    petPhoto: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=200&h=200&fit=crop&crop=face",
    comment: "設備齊全，橘子洗得很舒服，會再來的！",
    rating: 4
  },
  {
    id: 8,
    petName: "雪球",
    petPhoto: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=200&h=200&fit=crop&crop=face",
    comment: "專業的指甲修剪服務，雪球現在走路更舒服了。",
    rating: 5
  },
  {
    id: 9,
    petName: "可樂",
    petPhoto: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=200&fit=crop&crop=face",
    comment: "環境溫馨，可樂洗澡時很放鬆。",
    rating: 5
  },
  {
    id: 10,
    petName: "奶茶",
    petPhoto: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=200&h=200&fit=crop&crop=face",
    comment: "美容後奶茶變得更可愛了，朋友都誇讚！",
    rating: 4
  }
];

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <img
            src={review.petPhoto}
            alt={`${review.petName}的照片`}
            className="w-20 h-20 rounded-full object-cover border-4 border-lavender-200"
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
          <p className="text-sm text-gray-600 leading-relaxed">{review.comment}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const Reviews = () => {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            客戶評價
          </h1>
          <p className="text-lg text-gray-600">
            聽聽其他毛爸毛媽的真實分享
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Reviews;