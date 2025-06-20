
import PageWrapper from "@/components/layout/PageWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { User, Calendar, DollarSign, Scissors } from "lucide-react";

const Profile = () => {
  // Mock user data
  const userData = {
    name: "王小明",
    email: "wang@example.com",
    phone: "0912-345-678",
    memberSince: "2023年3月"
  };

  // Mock booking history data
  const bookingHistory = [
    {
      id: 1,
      date: "2024年6月15日",
      service: "完整美容套餐",
      petName: "小白",
      cost: 1500,
      status: "已完成"
    },
    {
      id: 2,
      date: "2024年5月20日",
      service: "基礎洗澡",
      petName: "小花",
      cost: 800,
      status: "已完成"
    },
    {
      id: 3,
      date: "2024年4月10日",
      service: "指甲修剪",
      petName: "小白",
      cost: 300,
      status: "已完成"
    },
    {
      id: 4,
      date: "2024年3月25日",
      service: "完整美容套餐",
      petName: "小花",
      cost: 1500,
      status: "已完成"
    }
  ];

  const totalSpent = bookingHistory.reduce((total, booking) => total + booking.cost, 0);

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center mb-8">
          <h1 className="page-title">個人資料</h1>
          <p className="text-gray-600">查看您的個人資訊和預約紀錄</p>
        </div>

        {/* User Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-1 bg-gradient-to-br from-lavender-50 to-pink-50 border-0 shadow-lg">
            <CardHeader className="text-center pb-4">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src="/placeholder-user.jpg" alt="用戶頭像" />
                <AvatarFallback className="bg-lavender-200 text-gray-700 text-2xl">
                  <User className="h-12 w-12" />
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-gray-800">{userData.name}</CardTitle>
              <p className="text-gray-600">會員自 {userData.memberSince}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-700">
                <User className="h-5 w-5 text-primary" />
                <span>{userData.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <Calendar className="h-5 w-5 text-primary" />
                <span>{userData.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <DollarSign className="h-5 w-5 text-primary" />
                <span>總消費：NT$ {totalSpent.toLocaleString()}</span>
              </div>
              <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                編輯個人資料
              </Button>
            </CardContent>
          </Card>

          {/* Booking History Section */}
          <Card className="lg:col-span-2 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-800">
                <Scissors className="h-6 w-6 text-primary mr-2" />
                預約紀錄
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-gray-700">日期</TableHead>
                      <TableHead className="text-gray-700">服務項目</TableHead>
                      <TableHead className="text-gray-700">寵物名稱</TableHead>
                      <TableHead className="text-gray-700">費用</TableHead>
                      <TableHead className="text-gray-700">狀態</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookingHistory.map((booking) => (
                      <TableRow key={booking.id} className="hover:bg-lavender-50">
                        <TableCell className="text-gray-700">{booking.date}</TableCell>
                        <TableCell className="text-gray-700">{booking.service}</TableCell>
                        <TableCell className="text-gray-700">{booking.petName}</TableCell>
                        <TableCell className="text-gray-700">NT$ {booking.cost.toLocaleString()}</TableCell>
                        <TableCell>
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                            {booking.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              {bookingHistory.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  <Scissors className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>尚無預約紀錄</p>
                  <Button asChild className="mt-4 bg-primary hover:bg-primary/90">
                    <a href="/booking">立即預約</a>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-gray-800">快速操作</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button 
                asChild 
                variant="outline" 
                className="h-16 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <a href="/booking" className="flex flex-col items-center">
                  <Calendar className="h-6 w-6 mb-1" />
                  新增預約
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="h-16 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <a href="/services" className="flex flex-col items-center">
                  <Scissors className="h-6 w-6 mb-1" />
                  查看服務
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="h-16 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <a href="/contact" className="flex flex-col items-center">
                  <User className="h-6 w-6 mb-1" />
                  聯絡我們
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageWrapper>
  );
};

export default Profile;
