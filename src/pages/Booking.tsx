
import { useState } from "react";
import PageWrapper from "@/components/layout/PageWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Booking = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formValues = Object.fromEntries(formData.entries());
    
    console.log("預約資訊:", formValues);
    
    toast({
      title: "預約成功！",
      description: "我們已收到您的預約請求，將會盡快與您聯繫確認。",
    });

    // Reset form
    (e.target as HTMLFormElement).reset();
    setDate(undefined);
  };

  return (
    <PageWrapper>
      <div className="gradient-bg py-12 mb-8">
        <div className="salon-container">
          <h1 className="page-title text-white">預約服務</h1>
          <p className="text-center text-white/90 max-w-2xl mx-auto">
            填寫下方表單預約您的寵物美容服務。我們會盡快與您聯繫確認詳情。
          </p>
        </div>
      </div>

      <section className="py-8">
        <div className="salon-container max-w-3xl">
          <Card className="card-shadow border-0">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">您的聯絡資訊</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">您的姓名</Label>
                      <Input id="name" name="name" placeholder="請輸入您的姓名" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">電話號碼</Label>
                      <Input id="phone" name="phone" placeholder="請輸入您的電話號碼" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">電子郵件 (選填)</Label>
                    <Input id="email" name="email" type="email" placeholder="請輸入您的電子郵件" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">寵物資訊</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="petName">寵物名稱</Label>
                      <Input id="petName" name="petName" placeholder="請輸入您寵物的名稱" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>寵物類型</Label>
                      <RadioGroup defaultValue="dog" name="petType" className="flex space-x-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="dog" id="dog" />
                          <Label htmlFor="dog">狗狗</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="cat" id="cat" />
                          <Label htmlFor="cat">貓咪</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="petBreed">品種</Label>
                    <Input id="petBreed" name="petBreed" placeholder="請輸入您寵物的品種" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="petSize">寵物大小</Label>
                    <Select name="petSize" required>
                      <SelectTrigger>
                        <SelectValue placeholder="選擇寵物大小" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">小型 (5kg以下)</SelectItem>
                        <SelectItem value="medium">中型 (5-15kg)</SelectItem>
                        <SelectItem value="large">大型 (15kg以上)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">服務資訊</h2>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service">服務項目</Label>
                    <Select name="service" required>
                      <SelectTrigger>
                        <SelectValue placeholder="選擇服務項目" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic-bath">基礎洗澡</SelectItem>
                        <SelectItem value="styling">造型剪剪</SelectItem>
                        <SelectItem value="premium">精緻護理</SelectItem>
                        <SelectItem value="nail-trim">指甲修剪</SelectItem>
                        <SelectItem value="ear-cleaning">耳朵清潔</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>預約日期</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "yyyy-MM-dd") : "選擇日期"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                    <Input
                      type="hidden"
                      name="date"
                      value={date ? format(date, "yyyy-MM-dd") : ""}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="time">預約時間</Label>
                    <Select name="time" required>
                      <SelectTrigger>
                        <SelectValue placeholder="選擇時間" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10:00">10:00</SelectItem>
                        <SelectItem value="11:00">11:00</SelectItem>
                        <SelectItem value="12:00">12:00</SelectItem>
                        <SelectItem value="13:00">13:00</SelectItem>
                        <SelectItem value="14:00">14:00</SelectItem>
                        <SelectItem value="15:00">15:00</SelectItem>
                        <SelectItem value="16:00">16:00</SelectItem>
                        <SelectItem value="17:00">17:00</SelectItem>
                        <SelectItem value="18:00">18:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="notes">備註 (選填)</Label>
                    <textarea
                      id="notes"
                      name="notes"
                      className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background"
                      placeholder="如有特殊需求，請在此說明"
                    ></textarea>
                  </div>
                </div>
                
                <Button type="submit" className="w-full">送出預約</Button>
                
                <p className="text-xs text-gray-500 text-center">
                  完成預約後，我們的服務人員將與您聯繫確認詳情。如需取消或更改預約，請至少提前24小時通知。
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Booking;
