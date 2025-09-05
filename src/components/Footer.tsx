import { Facebook, Instagram, Twitter, Youtube, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-400 to-orange-500 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Our Address */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Address</h3>
            <div className="space-y-2 text-sm">
              <p>📞 +977-123-456-789</p>
              <p>✉️ info@bluedogtreats.com</p>
              <p>📍 Bhimdatta, Sudurpashchim Province</p>
              <p>Nepal</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block hover:text-yellow-200 transition-colors">About Us</Link>
              <Link to="/bundles" className="block hover:text-yellow-200 transition-colors">Bundle Treat Deals</Link>
              <Link to="/faq" className="block hover:text-yellow-200 transition-colors">FAQs</Link>
              <Link to="/breeds" className="block hover:text-yellow-200 transition-colors">Breeds</Link>
              <Link to="/giveaway" className="block hover:text-yellow-200 transition-colors">Give Away</Link>
              <Link to="/chew-selector" className="block hover:text-yellow-200 transition-colors">Chew Selector</Link>
            </div>
          </div>

          {/* Best Savings */}
          <div>
            <h3 className="font-bold text-lg mb-4">Best Savings</h3>
            <div className="space-y-2 text-sm">
              <p className="hover:text-yellow-200 transition-colors cursor-pointer">Subscribe & Save 20%</p>
              <p className="hover:text-yellow-200 transition-colors cursor-pointer">Referral Points</p>
              <p className="hover:text-yellow-200 transition-colors cursor-pointer">Smile Referral Points</p>
            </div>
          </div>

          {/* Our Policies */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Policies</h3>
            <div className="space-y-2 text-sm">
              <Link to="/terms" className="block hover:text-yellow-200 transition-colors">Terms & Conditions</Link>
              <Link to="/privacy" className="block hover:text-yellow-200 transition-colors">Privacy Policy</Link>
              <Link to="/refund" className="block hover:text-yellow-200 transition-colors">Refund Policy</Link>
              <Link to="/cancellation" className="block hover:text-yellow-200 transition-colors">Cancellation Policy</Link>
              <Link to="/consumer-privacy" className="block hover:text-yellow-200 transition-colors">Consumer Privacy Act</Link>
            </div>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Instagram className="w-6 h-6 hover:text-yellow-200 transition-colors cursor-pointer" />
              <Youtube className="w-6 h-6 hover:text-yellow-200 transition-colors cursor-pointer" />
              <Twitter className="w-6 h-6 hover:text-yellow-200 transition-colors cursor-pointer" />
              <Facebook className="w-6 h-6 hover:text-yellow-200 transition-colors cursor-pointer" />
              <Sparkles className="w-6 h-6 hover:text-yellow-200 transition-colors cursor-pointer" />
            </div>
            <p className="text-sm text-white/80">
              © 2023 BlueDogTreats. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;