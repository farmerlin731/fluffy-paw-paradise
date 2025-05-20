
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8 mt-16">
      <div className="salon-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">毛茸茸天堂</h3>
            <p className="text-gray-600">讓您的寵物體驗最專業的美容服務</p>
            <div className="flex space-x-4">
              {/* Social Icons could go here */}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800">快速連結</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                  首頁
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-primary transition-colors">
                  服務項目
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-primary transition-colors">
                  價目表
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-600 hover:text-primary transition-colors">
                  預約服務
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  聯絡我們
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800">營業資訊</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone size={18} className="flex-shrink-0" />
                <span>+886 2 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail size={18} className="flex-shrink-0" />
                <span>info@fluffypawparadise.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin size={18} className="flex-shrink-0" />
                <span>台北市信義區松智路1號</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock size={18} className="flex-shrink-0" />
                <span>週二至週日: 10:00 - 19:00</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} 毛茸茸天堂. 版權所有.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
