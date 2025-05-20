import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

function Navbar() {
  const navItems = [
    { label: "首頁", href: "/" },
    { label: "服務項目", href: "/services" },
    { label: "價目表", href: "/pricing" },
    { label: "預約", href: "/booking" },
    { label: "聯絡我們", href: "/contact" },
  ];

  return (
    <header className="w-full border-b shadow-sm bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo + 店名 */}
        <Link
          to="/"
          className="flex items-center space-x-2 font-bold text-lg text-pink-600"
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
                      className="text-sm font-medium hover:text-pink-500 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button asChild className="bg-pink-500 hover:bg-pink-600 text-white">
            <Link to="/booking">立即預約</Link>
          </Button>
        </nav>

        {/* 漢堡選單 (行動版) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[250px] p-6 flex flex-col gap-4"
            >
              <div className="text-lg font-bold mb-2 text-pink-600">
                寵物有珈
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-pink-500"
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                className="mt-4 bg-pink-500 hover:bg-pink-600 text-white"
              >
                <Link to="/booking">立即預約</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
