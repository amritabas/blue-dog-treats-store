import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  image: string;
  name: string;
  currentPrice: number;
  originalPrice: number;
  discount: number;
}

const ProductCard = ({ image, name, currentPrice, originalPrice, discount }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
          />
          {discount > 0 && (
            <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground font-bold">
              -{discount}%
            </Badge>
          )}
        </div>
        <div className="p-4 space-y-3">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">${currentPrice.toFixed(2)}</span>
            {originalPrice > currentPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;