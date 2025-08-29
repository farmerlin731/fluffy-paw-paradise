import PageWrapper from "@/components/layout/PageWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PawPrint, Check, Star } from "lucide-react";
import { useState } from "react";

const PricingOptimized = () => {
  const [selectedCategory, setSelectedCategory] = useState<'dog' | 'cat'>('dog');

  const dogServices = [
    {
      name: "基礎洗澡",
      description: "完整清潔、吹乾造型",
      prices: { small: 600, medium: 800, large: "1,000起" },
      features: ["溫和洗毛精", "徹底吹乾", "基礎造型", "耳朵清潔"]
    },
    {
      name: "造型剪剪",
      description: "專業修剪、造型設計",
      prices: { small: 900, medium: 1200, large: "1,500起" },
      features: ["專業修剪", "造型設計", "指甲修剪", "耳朵清潔"],
      popular: true
    },
    {
      name: "精緻護理",
      description: "全套護理、深層保養",
      prices: { small: 1200, medium: 1500, large: "1,800起" },
      features: ["深層護理", "毛髮保養", "皮膚檢查", "香氛造型"]
    },
    {
      name: "指甲修剪",
      description: "安全專業修剪",
      prices: { small: 200, medium: 200, large: 250 },
      features: ["安全修剪", "磨平處理"]
    },
    {
      name: "耳朵清潔",
      description: "深層清潔護理",
      prices: { small: 200, medium: 250, large: 300 },
      features: ["專業清潔", "健康檢查"]
    }
  ];

  const catServices = [
    {
      name: "基礎洗澡",
      description: "溫和清潔、專業護理",
      prices: { short: 800, long: 1000 },
      features: ["溫和洗毛精", "低噪音吹乾", "基礎造型"],
      popular: true
    },
    {
      name: "去毛結",
      description: "專業去結、毛髮護理",
      prices: { short: "200起", long: "300起" },
      features: ["專業去結", "毛髮護理", "皮膚保護"]
    },
    {
      name: "造型修剪",
      description: "精準修剪、造型設計",
      prices: { short: 600, long: 800 },
      features: ["精準修剪", "造型設計", "安全處理"]
    },
    {
      name: "指甲修剪",
      description: "溫柔安全修剪",
      prices: { short: 200, long: 200 },
      features: ["溫柔處理", "安全修剪"]
    }
  ];

  return (
    <PageWrapper>
      <div className="gradient-bg py-16 mb-12">
        <div className="salon-container">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            優化版價目表
          </h1>
          <p className="text-center text-white/90 max-w-3xl mx-auto text-lg">
            透明的價格，優質的服務 - 為您的愛寵提供最專業的美容體驗
          </p>
          
          {/* Category Toggle */}
          <div className="flex justify-center mt-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
              <button
                onClick={() => setSelectedCategory('dog')}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === 'dog'
                    ? 'bg-white text-pink-500 shadow-lg font-semibold'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                🐕 犬隻服務
              </button>
              <button
                onClick={() => setSelectedCategory('cat')}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === 'cat'
                    ? 'bg-white text-pink-500 shadow-lg font-semibold'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                🐱 貓咪服務
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-12">
        <div className="salon-container">
          {selectedCategory === 'dog' && (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">犬隻美容服務</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  根據犬隻大小量身定制的專業美容服務，讓您的愛犬煥然一新
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {dogServices.map((service, index) => (
                  <Card key={index} className={`relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${service.popular ? 'ring-2 ring-pink-400' : ''}`}>
                    {service.popular && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        熱門
                      </div>
                    )}
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">小型犬 (5kg以下)</span>
                          <span className="font-semibold text-pink-600">NT${service.prices.small}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">中型犬 (5-15kg)</span>
                          <span className="font-semibold text-pink-600">NT${service.prices.medium}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">大型犬 (15kg以上)</span>
                          <span className="font-semibold text-pink-600">NT${service.prices.large}</span>
                        </div>
                      </div>
                      
                      <div className="border-t pt-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">服務包含:</p>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <Check className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}

          {selectedCategory === 'cat' && (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">貓咪美容服務</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  專為貓咪設計的溫和美容服務，在安靜舒適的環境中進行
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {catServices.map((service, index) => (
                  <Card key={index} className={`relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${service.popular ? 'ring-2 ring-pink-400' : ''}`}>
                    {service.popular && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        熱門
                      </div>
                    )}
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">短毛貓</span>
                          <span className="font-semibold text-pink-600">NT${service.prices.short}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">長毛貓</span>
                          <span className="font-semibold text-pink-600">NT${service.prices.long}</span>
                        </div>
                      </div>
                      
                      <div className="border-t pt-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">服務包含:</p>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <Check className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}

          {/* Comparison Table for Mobile */}
          <div className="lg:hidden mb-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">快速價格對照</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 text-gray-700">服務</th>
                        {selectedCategory === 'dog' ? (
                          <>
                            <th className="text-right py-2 text-gray-700">小型</th>
                            <th className="text-right py-2 text-gray-700">中型</th>
                            <th className="text-right py-2 text-gray-700">大型</th>
                          </>
                        ) : (
                          <>
                            <th className="text-right py-2 text-gray-700">短毛</th>
                            <th className="text-right py-2 text-gray-700">長毛</th>
                          </>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {(selectedCategory === 'dog' ? dogServices : catServices).map((service, index) => (
                        <tr key={index} className="border-b last:border-b-0">
                          <td className="py-3 font-medium">{service.name}</td>
                          {selectedCategory === 'dog' ? (
                            <>
                              <td className="text-right py-3 text-pink-600 font-semibold">NT${service.prices.small}</td>
                              <td className="text-right py-3 text-pink-600 font-semibold">NT${service.prices.medium}</td>
                              <td className="text-right py-3 text-pink-600 font-semibold">NT${service.prices.large}</td>
                            </>
                          ) : (
                            <>
                              <td className="text-right py-3 text-pink-600 font-semibold">NT${service.prices.short}</td>
                              <td className="text-right py-3 text-pink-600 font-semibold">NT${service.prices.long}</td>
                            </>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Price Notes */}
      <section className="py-12 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="salon-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">價格說明</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-600">價格會依據寵物的毛髮狀況、行為配合度等因素進行調整</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-600">大型犬價格會根據實際體重和毛髮複雜度調整</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-600">所有服務均使用進口優質美容產品</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-600">取消預約請提前24小時告知</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-pink-400 to-purple-400 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">特色服務</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Star className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">專業美容師</h4>
                      <p className="text-white/90 text-sm">具備豐富經驗的專業團隊</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Star className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">安全環境</h4>
                      <p className="text-white/90 text-sm">溫馨舒適的美容空間</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Star className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">優質產品</h4>
                      <p className="text-white/90 text-sm">使用天然溫和的美容用品</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Star className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">個別關懷</h4>
                      <p className="text-white/90 text-sm">針對每隻寵物的特殊需求</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="salon-container">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              準備好為您的愛寵預約了嗎？
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              我們的專業美容師正在等候為您的寵物提供最優質的護理服務
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <Link to="/booking">
                  <PawPrint className="mr-2" size={20} />
                  立即預約美容
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg" className="rounded-full px-8 py-6 text-lg">
                <Link to="/pricing">
                  查看原版價目表
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default PricingOptimized;