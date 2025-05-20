
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PawPrint } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <PawPrint className="h-24 w-24 mx-auto text-primary mb-6" />
        <h1 className="text-4xl font-bold mb-4">找不到頁面</h1>
        <p className="text-xl text-gray-600 mb-8">很抱歉，您要找的頁面不存在或已被移除。</p>
        <Button asChild size="lg" className="rounded-full px-6">
          <Link to="/">
            回到首頁
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
