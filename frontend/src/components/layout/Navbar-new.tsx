import { Menu, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useState } from "react";

function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "首頁", href: "/" },
    { label: "服務項目", href: "/services" },
    { label: "價目表", href: "/pricing" },
    { label: "價目表claude", href: "/pricing-optimized" },
    { label: "test價目", href: "/testpricing" },
    { label: "預約", href: "/booking" },
    { label: "客戶評價", href: "/reviews" },
    { label: "聯絡我們", href: "/contact" },
  ];

  return (
    <header className="w-full border-b shadow-sm bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo + 店名 */}
        <Link
          to="/"
          className="flex items-center space-x-2 font-bold text-lg text-primary hover:text-primary/80 transition-colors"
        >
          <img src="/logo.svg" alt="logo" className="h-8 w-8" />
          <span>寵物有珈</span>
        </Link>

        {/* 桌面版選單 */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-4">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.href}
                      className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button asChild className="bg-primary hover:bg-primary/90 text-white">
            <Link to="/booking">立即預約</Link>
          </Button>

          {/* User Avatar */}
          <Link to="/profile" className="ml-2">
            <Avatar className="h-8 w-8 hover:ring-2 hover:ring-primary hover:ring-offset-2 transition-all">
              <AvatarImage src="/placeholder-user.jpg" alt="用戶頭像" />
              <AvatarFallback className="bg-lavender-200 text-gray-700">
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          </Link>
        </nav>

        {/* 漢堡選單 (行動版) */}
        <div className="md:hidden flex items-center space-x-2">
          <Link to="/profile">
            <Avatar className="h-8 w-8 hover:ring-2 hover:ring-primary hover:ring-offset-2 transition-all">
              <AvatarImage src="/placeholder-user.jpg" alt="用戶頭像" />
              <AvatarFallback className="bg-lavender-200 text-gray-700">
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          </Link>

          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[250px] p-6 flex flex-col gap-4"
            >
              <div className="text-lg font-bold mb-2 text-primary">
                寵物有珈
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsSheetOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                className="mt-4 bg-primary hover:bg-primary/90 text-white"
              >
                <Link to="/booking" onClick={() => setIsSheetOpen(false)}>
                  立即預約
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
