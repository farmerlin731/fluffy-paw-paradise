import PageWrapper from "@/components/layout/PageWrapper";
import ReviewCarousel from "@/components/home/ReviewCarousel";
import ReviewCarouselOptimize from "@/components/home/ReviewCarousel-optimize";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const ReviewCarouselComparison = () => {
  return (
    <PageWrapper>
      <div className="gradient-bg py-12 mb-8">
        <div className="salon-container">
          <h1 className="page-title text-white">ReviewCarousel 比較頁面</h1>
          <p className="text-center text-white/90 max-w-2xl mx-auto">
            比較原版與優化版 ReviewCarousel 組件的設計差異
          </p>
        </div>
      </div>

      {/* 功能對比表 */}
      <section className="py-8">
        <div className="salon-container">
          <Card className="card-shadow border-0 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-center">設計特色對比</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-700">
                    原版 ReviewCarousel
                  </h3>
                  <div className="space-y-2">
                    <Badge variant="outline">簡約設計</Badge>
                    <Badge variant="outline">基本卡片佈局</Badge>
                    <Badge variant="outline">圓形寵物頭像</Badge>
                    <Badge variant="outline">標準評分星號</Badge>
                    <Badge variant="outline">簡單懸停效果</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-pink-600">
                    優化版 ReviewCarousel
                  </h3>
                  <div className="space-y-2">
                    <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200">大尺寸美容照片</Badge>
                    <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">玻璃質感背景</Badge>
                    <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200">懸浮式寵物頭像</Badge>
                    <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">服務標籤</Badge>
                    <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200">引言裝飾</Badge>
                    <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">漸變懸停效果</Badge>
                    <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200">統計數據展示</Badge>
                    <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">雙 CTA 按鈕</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8" />

      {/* 原版展示 */}
      <section>
        <div className="salon-container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">原版 ReviewCarousel</h2>
            <p className="text-gray-600">簡潔實用的評價展示設計</p>
          </div>
        </div>
        <ReviewCarousel />
      </section>

      <Separator className="my-12" />

      {/* 優化版展示 */}
      <section>
        <div className="salon-container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">優化版 ReviewCarousel</h2>
            <p className="text-gray-600">視覺豐富的沉浸式評價體驗</p>
          </div>
        </div>
        <ReviewCarouselOptimize />
      </section>

      {/* 技術說明 */}
      <section className="py-16 bg-gray-50">
        <div className="salon-container">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">優化重點說明</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-pink-600">視覺層次提升</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 大尺寸美容成果照片</li>
                  <li>• 懸浮式寵物頭像設計</li>
                  <li>• 漸層背景和玻璃質感</li>
                  <li>• 服務標籤清晰標示</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-600">交互體驗優化</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 動態懸停效果</li>
                  <li>• 按鈕狀態變化</li>
                  <li>• 圖片縮放動畫</li>
                  <li>• 卡片立體陰影</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-pink-600">內容豐富化</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 客戶姓名展示</li>
                  <li>• 評價日期資訊</li>
                  <li>• 服務類型標示</li>
                  <li>• 統計數據呈現</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default ReviewCarouselComparison;