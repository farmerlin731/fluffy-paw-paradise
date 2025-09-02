
import PageWrapper from "@/components/layout/PageWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formValues = Object.fromEntries(formData.entries());
    
    console.log("聯絡表單:", formValues);
    
    toast({
      title: "訊息已送出！",
      description: "感謝您的留言，我們將會盡快回覆您。",
    });

    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <PageWrapper>
      <div className="gradient-bg py-12 mb-8">
        <div className="salon-container">
          <h1 className="page-title text-white">聯絡我們</h1>
          <p className="text-center text-white/90 max-w-2xl mx-auto">
            有任何問題或需要更多資訊？歡迎隨時聯絡我們，我們很樂意為您提供協助。
          </p>
        </div>
      </div>

      <section className="py-8">
        <div className="salon-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card className="card-shadow border-0">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-6">聯絡資訊</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">電話</p>
                        <p className="text-gray-600">+886 2 1234 5678</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">電子郵件</p>
                        <p className="text-gray-600">info@fluffypawparadise.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">地址</p>
                        <p className="text-gray-600">台北市信義區松智路1號</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">營業時間</p>
                        <div className="text-gray-600">
                          <p>週二至週五: 10:00 - 19:00</p>
                          <p>週六至週日: 10:00 - 18:00</p>
                          <p>週一: 公休</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-shadow border-0 bg-salon-gray">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">交通資訊</h2>
                  <ul className="space-y-2">
                    <li>
                      <span className="font-medium">捷運：</span>捷運板南線「市政府站」2號出口，步行約5分鐘
                    </li>
                    <li>
                      <span className="font-medium">公車：</span>搭乘藍22、藍25至「市政府站」下車
                    </li>
                    <li>
                      <span className="font-medium">停車場：</span>附近有收費停車場
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-3 space-y-6">
              <Card className="card-shadow border-0">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-6">在線留言</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">姓名</Label>
                        <Input id="name" name="name" placeholder="請輸入您的姓名" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">電話</Label>
                        <Input id="phone" name="phone" placeholder="請輸入您的電話" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">電子郵件</Label>
                      <Input id="email" name="email" type="email" placeholder="請輸入您的電子郵件" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">主旨</Label>
                      <Input id="subject" name="subject" placeholder="請輸入主旨" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">訊息</Label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full min-h-[150px] p-3 rounded-md border border-input bg-background"
                        placeholder="請輸入您的訊息"
                        required
                      ></textarea>
                    </div>
                    
                    <Button type="submit">送出訊息</Button>
                  </form>
                </CardContent>
              </Card>
              
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7410765849!2d121.56289907600353!3d25.03651177781365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6e9d7f13f%3A0xb2d208be24c7856e!2z5Y-w5YyX5biC5pS_576p5Y2A!5e0!3m2!1szh-TW!2stw!4v1716209419077!5m2!1szh-TW!2stw"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;
