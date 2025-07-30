import PageWrapper from "@/components/layout/PageWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ArrowLeft } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";

// Same review data as in Reviews page
const reviews = [
  {
    id: 1,
    petName: "小白",
    petPhoto: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=400&fit=crop&crop=face",
    petPhotos: [
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=400&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop&crop=face"
    ],
    comment: "美容師非常專業，小白洗完澡後毛髮好柔順！整個過程都很安心，小白也很享受洗澡的過程。服務人員很細心，會根據小白的毛質選擇合適的洗毛精。",
    rating: 5
  },
  {
    id: 2,
    petName: "咪咪",
    petPhoto: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop&crop=face",
    petPhotos: [
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=400&fit=crop&crop=face"
    ],
    comment: "環境很乾淨，咪咪第一次這麼乖乖地配合美容。店內設備很新，工作人員也很有愛心。",
    rating: 5
  },
  {
    id: 3,
    petName: "黃金",
    petPhoto: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop&crop=face",
    petPhotos: [
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop&crop=face"
    ],
    comment: "服務態度很好，黃金洗完後整個人都精神了！美容師的技術很專業，剪毛的造型也很好看。預約制度很方便，不用等待太久。",
    rating: 5
  },
  {
    id: 4,
    petName: "花花",
    petPhoto: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop&crop=face",
    petPhotos: [
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop&crop=face"
    ],
    comment: "技術專業，花花的毛被修剪得很漂亮。美容師很有耐心，會先了解我們的需求。",
    rating: 4
  },
  {
    id: 5,
    petName: "布丁",
    petPhoto: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop&crop=face",
    petPhotos: [
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&h=400&fit=crop&crop=face"
    ],
    comment: "價格合理，服務周到，布丁很喜歡這裡！每次來都會很開心，美容師記得布丁的習慣，讓我們很放心。洗完澡後布丁的毛很香很柔軟。",
    rating: 5
  },
  {
    id: 6,
    petName: "豆豆",
    petPhoto: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&h=400&fit=crop&crop=face",
    petPhotos: [
      "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&h=400&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=400&fit=crop&crop=face"
    ],
    comment: "美容師很有耐心，豆豆從害怕到享受。第一次來的時候豆豆很緊張，但是美容師很溫柔地安撫牠。",
    rating: 5
  },
  {
    id: 7,
    petName: "橘子",
    petPhoto: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=400&fit=crop&crop=face",
    petPhotos: [
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=400&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=400&h=400&fit=crop&crop=face"
    ],
    comment: "設備齊全，橘子洗得很舒服，會再來的！店內環境很舒適，橘子在這裡很放鬆。美容師的專業程度很高，讓我們很滿意。",
    rating: 4
  },
  {
    id: 8,
    petName: "雪球",
    petPhoto: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=400&h=400&fit=crop&crop=face",
    petPhotos: [
      "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=400&h=400&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop&crop=face"
    ],
    comment: "專業的指甲修剪服務，雪球現在走路更舒服了。美容師很細心，會檢查每個指甲的狀況。",
    rating: 5
  },
  {
    id: 9,
    petName: "可樂",
    petPhoto: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop&crop=face",
    petPhotos: [
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop&crop=face"
    ],
    comment: "環境溫馨，可樂洗澡時很放鬆。美容師會用溫和的方式處理，讓可樂不會感到壓力。整體體驗很棒！",
    rating: 5
  },
  {
    id: 10,
    petName: "奶茶",
    petPhoto: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop&crop=face",
    petPhotos: [
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=400&fit=crop&crop=face"
    ],
    comment: "美容後奶茶變得更可愛了，朋友都誇讚！美容師很會設計造型，完全符合我們的期待。服務品質一流，推薦給大家！",
    rating: 4
  }
];

const ReviewDetail = () => {
  const { id } = useParams();
  const reviewId = parseInt(id || '0');
  const review = reviews.find(r => r.id === reviewId);

  if (!review) {
    return <Navigate to="/reviews" replace />;
  }

  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <Button asChild variant="ghost" className="rounded-full">
            <Link to="/reviews" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              返回評價列表
            </Link>
          </Button>
        </div>

        {/* Review Detail Card */}
        <Card>
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {review.petName} 的美容評價
              </h1>
              <div className="flex justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Pet Photos */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                {review.petName} 的美容照片
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {review.petPhotos.map((photo, index) => (
                  <div key={index} className="aspect-square">
                    <img
                      src={photo}
                      alt={`${review.petName}的美容照片 ${index + 1}`}
                      className="w-full h-full object-cover rounded-2xl border-4 border-lavender-200 shadow-lg"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Full Comment */}
            <div className="bg-gradient-to-br from-lavender-50 to-pink-50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                完整評價內容
              </h2>
              <p className="text-gray-700 leading-relaxed text-center text-lg">
                {review.comment}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/booking">立即預約美容服務</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/reviews">查看更多評價</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageWrapper>
  );
};

export default ReviewDetail;