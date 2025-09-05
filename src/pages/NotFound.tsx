import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 to-orange-500">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Oops! Page not found</p>
        <p className="text-lg mb-8 opacity-90">The page you're looking for doesn't exist.</p>
        <Link to="/">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-medium">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
