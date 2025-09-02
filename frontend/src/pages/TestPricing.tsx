import PageWrapper from "@/components/layout/PageWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PawPrint, Scissors, Dog, Cat } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// components/PricingCardMobile.tsx

const pricingData = [
  {
    service: "基礎洗澡",
    prices: {
      small: "NT$600",
      medium: "NT$800",
      large: "NT$1,000 起",
    },
  },
  {
    service: "造型剪剪",
    prices: {
      small: "NT$900",
      medium: "NT$1,200",
      large: "NT$1,500 起",
    },
  },
  {
    service: "精緻護理",
    prices: {
      small: "NT$1,200",
      medium: "NT$1,500",
      large: "NT$1,800 起",
    },
  },
  {
    service: "指甲修剪",
    prices: {
      small: "NT$200",
      medium: "NT$200",
      large: "NT$250",
    },
  },
  {
    service: "耳朵清潔",
    prices: {
      small: "NT$200",
      medium: "NT$250",
      large: "NT$300",
    },
  },
];

const TestPricing = () => {
  return (
    <PageWrapper>
      <div className="gradient-bg py-12 mb-8">
        <div className="salon-container">
          <h1 className="page-title text-white">測試欄位</h1>
          <p className="text-center text-white/90 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            fugiat asperiores veniam! Unde error repellat, consequuntur incidunt
            animi magnam, laborum recusandae excepturi molestias ipsa ab illo
            beatae fuga minus reprehenderit?
          </p>
        </div>
      </div>

      {/* <div className="md:hidden space-y-4"> */}
      <div className="space-y-4">
        {pricingData.map((item, index) => (
          <Card key={index} className="bg-white shadow-sm rounded-xl border">
            <CardHeader>
              <CardTitle className="text-lg text-purple-700">
                {item.service}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-1">
              <div>
                🐶 小型犬（5kg以下）：<strong>{item.prices.small}</strong>
              </div>
              <div>
                🐕 中型犬（5–15kg）：<strong>{item.prices.medium}</strong>
              </div>
              <div>
                🐩 大型犬（15kg以上）：<strong>{item.prices.large}</strong>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageWrapper>
  );
};

export default TestPricing;
