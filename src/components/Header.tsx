import { Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-pink-400 to-orange-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-brand-blue rounded-full w-12 h-12 flex items-center justify-center">
              <div className="text-white font-bold text-lg">BD</div>
            </div>
            <span className="text-xl font-bold">BlueDogTreats</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search for products..."
                className="pl-10 bg-white/90 border-0 focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Link to="/" className="hover:text-yellow-200 transition-colors font-medium">
              Home
            </Link>
            <Button variant="ghost" size="sm" className="text-white hover:text-yellow-200 hover:bg-white/10">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Cart
            </Button>
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-white hover:text-yellow-200 hover:bg-white/10">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;