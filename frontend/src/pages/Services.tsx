
import PageWrapper from "@/components/layout/PageWrapper";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PawPrint, Scissors, Dog, Cat } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const servicesData = [
  {
    title: "基礎洗澡",
    icon: <PawPrint className="h-8 w-8 text-primary" />,
    description: "包括使用優質洗毛精洗澡、吹乾、耳朵清潔、指甲修剪、肛門腺擠壓等基礎護理。",
    details: [
      "天然溫和洗毛精",
      "專業吹水機吹乾",
      "耳朵清潔",
      "指甲修剪",
      "肛門腺擠壓"
    ]
  },
  {
    title: "造型剪剪",
    icon: <Scissors className="h-8 w-8 text-primary" />,
    description: "根據寵物的品種特性和主人的喜好，提供專業的造型修剪服務。",
    details: [
      "依照品種標準修剪",
      "客製化造型設計",
      "包含基礎洗澡服務",
      "臉部精細修剪",
      "足部造型整理"
    ]
  },
  {
    title: "貓咪美容",
    icon: <Cat className="h-8 w-8 text-primary" />,
    description: "專為貓咪設計的溫和美容服務，由了解貓咪行為的專業美容師提供。",
    details: [
      "溫和無壓力的洗澡環境",
      "專用貓咪洗毛精",
      "去除打結和死毛",
      "貓咪專用指甲修剪",
      "眼耳清潔"
    ]
  },
  {
    title: "精緻護理",
    icon: <Dog className="h-8 w-8 text-primary" />,
    description: "高級美容和護理服務，包括SPA護理、特殊護毛產品使用等。",
    details: [
      "深層保濕SPA",
      "毛髮護理精油",
      "口腔護理",
      "皮膚檢查",
      "香氛噴霧"
    ]
  }
];

const Services = () => {
  return (
    <PageWrapper>
      <div className="gradient-bg py-12 mb-8">
        <div className="salon-container">
          <h1 className="page-title text-white">服務項目</h1>
          <p className="text-center text-white/90 max-w-2xl mx-auto">
            我們提供多樣化的寵物美容服務，讓您的毛小孩保持整潔、健康和美麗。選擇適合您寵物的服務，讓專業美容師為他們提供最好的照顧。
          </p>
        </div>
      </div>

      <section className="py-8">
        <div className="salon-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((service, index) => (
              <Card key={index} className="card-shadow border-0 overflow-hidden">
                <CardHeader className="pb-2 flex flex-row items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-semibold">{service.title}</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 mb-8">
        <div className="salon-container">
          <Card className="bg-salon-gray border-0">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">特別說明</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>所有服務皆包含基本檢查，確保您的寵物健康狀態良好。</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>如有特殊需求，請在預約時註明，我們會盡力配合。</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>疫苗接種證明可能需要提供，特別是首次到訪的寵物。</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>服務時間因寵物大小和毛髮狀況而異，請預留足夠時間。</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-8">
        <div className="salon-container">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">準備好為您的寵物預約了嗎？</h2>
            <p className="text-gray-600 mb-6">查看我們的價目表或直接線上預約！</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild>
                <Link to="/pricing">
                  查看價目表
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link to="/booking">
                  立即預約
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Services;
