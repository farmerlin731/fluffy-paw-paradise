
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "首頁", path: "/" },
    { name: "服務項目", path: "/services" },
    { name: "價目表", path: "/pricing" },
    { name: "預約服務", path: "/booking" },
    { name: "聯絡我們", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm w-full z-10 sticky top-0">
      <div className="salon-container">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">毛茸茸天堂</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-gray-600 hover:text-primary transition-colors duration-300",
                  location.pathname === item.path && "text-primary font-medium"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild>
              <Link to="/booking" className="font-medium">立即預約</Link>
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-gray-600 hover:text-primary"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "text-gray-600 hover:text-primary transition-colors duration-300 py-2",
                    location.pathname === item.path && "text-primary font-medium"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                asChild 
                className="w-full mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to="/booking">立即預約</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
