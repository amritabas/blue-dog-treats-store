import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroDog from "@/assets/hero-dog.jpg";

const Hero = () => {
  return (
    <section className="bg-hero-yellow py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          {/* Left side - CTA */}
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl font-bold text-hero-yellow-foreground leading-tight">
              Premium Treats
              <br />
              <span className="text-primary">For Your Best Friend</span>
            </h1>
            <p className="text-xl text-hero-yellow-foreground/80 max-w-md">
              Discover our carefully crafted selection of healthy, delicious treats that your dog will absolutely love.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-3 text-lg">
              Grab now
            </Button>
          </div>

          {/* Right side - Hero Image */}
          <div className="flex-1 flex justify-center relative">
            <img
              src={heroDog}
              alt="Happy bulldog wearing sunglasses"
              className="w-96 h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <Button variant="ghost" size="sm" className="text-hero-yellow-foreground hover:bg-white/20">
            <ChevronLeft className="w-6 h-6" />
          </Button>
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <Button variant="ghost" size="sm" className="text-hero-yellow-foreground hover:bg-white/20">
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-3 h-3 bg-hero-yellow-foreground rounded-full"></div>
          <div className="w-3 h-3 bg-hero-yellow-foreground/30 rounded-full"></div>
          <div className="w-3 h-3 bg-hero-yellow-foreground/30 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;