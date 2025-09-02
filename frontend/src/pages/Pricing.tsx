
import PageWrapper from "@/components/layout/PageWrapper";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PawPrint } from "lucide-react";

const Pricing = () => {
  return (
    <PageWrapper>
      <div className="gradient-bg py-12 mb-8">
        <div className="salon-container">
          <h1 className="page-title text-white">價目表</h1>
          <p className="text-center text-white/90 max-w-2xl mx-auto">
            我們的價格根據寵物大小和服務類型而定，完全透明且無隱藏費用。
          </p>
        </div>
      </div>

      <section className="py-8">
        <div className="salon-container">
          <Card className="card-shadow border-0 overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-6">犬隻服務價格</h2>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[150px]">服務項目</TableHead>
                      <TableHead>小型犬 (5kg以下)</TableHead>
                      <TableHead>中型犬 (5-15kg)</TableHead>
                      <TableHead>大型犬 (15kg以上)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">基礎洗澡</TableCell>
                      <TableCell>NT$600</TableCell>
                      <TableCell>NT$800</TableCell>
                      <TableCell>NT$1,000起</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">造型剪剪</TableCell>
                      <TableCell>NT$900</TableCell>
                      <TableCell>NT$1,200</TableCell>
                      <TableCell>NT$1,500起</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">精緻護理</TableCell>
                      <TableCell>NT$1,200</TableCell>
                      <TableCell>NT$1,500</TableCell>
                      <TableCell>NT$1,800起</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">指甲修剪</TableCell>
                      <TableCell>NT$200</TableCell>
                      <TableCell>NT$200</TableCell>
                      <TableCell>NT$250</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">耳朵清潔</TableCell>
                      <TableCell>NT$200</TableCell>
                      <TableCell>NT$250</TableCell>
                      <TableCell>NT$300</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <h2 className="text-2xl font-semibold my-6">貓咪服務價格</h2>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[150px]">服務項目</TableHead>
                      <TableHead>短毛貓</TableHead>
                      <TableHead>長毛貓</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">基礎洗澡</TableCell>
                      <TableCell>NT$800</TableCell>
                      <TableCell>NT$1,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">去毛結</TableCell>
                      <TableCell>NT$200起</TableCell>
                      <TableCell>NT$300起</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">造型修剪</TableCell>
                      <TableCell>NT$600</TableCell>
                      <TableCell>NT$800</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">指甲修剪</TableCell>
                      <TableCell>NT$200</TableCell>
                      <TableCell>NT$200</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-8">
        <div className="salon-container">
          <Card className="bg-salon-gray border-0">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">價格說明</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>價格可能因特殊情況而有所調整，如毛髮打結嚴重、特殊品種等。</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>大型犬的價格會根據具體重量和毛髮狀況有所不同，請諮詢我們的服務人員。</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>所有價格均包含使用的優質產品和材料。</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>如需取消預約，請提前24小時通知，否則可能需支付取消費用。</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-8">
        <div className="salon-container">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">立即為您的寵物預約美容服務</h2>
            <p className="text-gray-600 mb-6">選擇最適合您寵物的服務，讓我們的專業美容師精心護理。</p>
            <Button asChild size="lg" className="rounded-full px-8 py-6">
              <Link to="/booking">
                <PawPrint className="mr-2" size={18} />
                立即預約
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Pricing;
