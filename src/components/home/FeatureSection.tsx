
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Clock, DollarSign, Heart } from "lucide-react";

const features = [
  {
    icon: <Scissors className="h-8 w-8 text-primary" />,
    title: "專業美容師",
    description: "我們的美容師擁有多年專業經驗，熟悉各種犬種和貓種的特性和需求。"
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "彈性預約",
    description: "提供線上預約系統，您可以隨時查看空缺時段，並選擇最方便的時間。"
  },
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    title: "合理價格",
    description: "根據寵物大小和服務項目提供透明的價格，無隱藏費用。"
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "愛心照護",
    description: "我們像對待自己的寵物一樣照顧每一位到訪的毛小孩，提供溫柔細心的服務。"
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 bg-salon-white">
      <div className="salon-container">
        <h2 className="section-title text-center mb-12">我們的特色</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="card-shadow bg-white border-0 overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
