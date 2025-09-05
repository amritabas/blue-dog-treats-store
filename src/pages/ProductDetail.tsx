import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight, ArrowLeft, Minus, Plus } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

// Import product images
import dogBones from "@/assets/dog-bones.jpg";
import dogChews from "@/assets/dog-chews.jpg";
import dogDress from "@/assets/dog-dress.jpg";
import puppyChicken from "@/assets/puppy-chicken.jpg";

// Mock product data
const products = {
  1: {
    id: 1,
    name: "Gourmet Dog Bone Treats",
    images: [dogBones],
    currentPrice: 700,
    originalPrice: 1200,
    inStock: true,
    weight: "250 gm",
    rating: 4,
    reviews: 12,
    description: "Premium quality bone-shaped treats made with natural ingredients. Perfect for training and rewarding your furry friend."
  },
  2: {
    id: 2,
    name: "Colorful Dog Dress",
    images: [dogDress],
    currentPrice: 950,
    originalPrice: 950,
    inStock: true,
    weight: "100 gm",
    rating: 5,
    reviews: 8,
    description: "Stylish and comfortable dog dress in vibrant colors. Made with soft, breathable fabric for your pet's comfort."
  },
  3: {
    id: 3,
    name: "Premium Dog Chew Sticks",
    images: [dogChews],
    currentPrice: 825,
    originalPrice: 1100,
    inStock: true,
    weight: "300 gm",
    rating: 4,
    reviews: 15,
    description: "Natural chew sticks that help maintain dental health while providing hours of entertainment for your dog."
  },
  4: {
    id: 4,
    name: "Puppy Chicken Treats",
    images: [puppyChicken],
    currentPrice: 600,
    originalPrice: 800,
    inStock: true,
    weight: "200 gm",
    rating: 5,
    reviews: 20,
    description: "Delicious chicken-flavored treats specially formulated for puppies. Rich in protein and essential nutrients."
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [review, setReview] = useState("");
  const [userRating, setUserRating] = useState(0);

  const product = products[parseInt(id || "0") as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    toast.success(`Added ${quantity} ${product.name} to cart!`);
  };

  const handleBuyNow = () => {
    toast.success(`Proceeding to checkout with ${quantity} ${product.name}!`);
  };

  const handleSubmitReview = () => {
    if (review.trim() && userRating > 0) {
      toast.success("Review submitted successfully!");
      setReview("");
      setUserRating(0);
    } else {
      toast.error("Please add a rating and review before submitting.");
    }
  };

  const renderStars = (rating: number, interactive = false, onStarClick?: (rating: number) => void) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 cursor-pointer ${
              star <= rating 
                ? "text-yellow-400 fill-yellow-400" 
                : "text-gray-300"
            }`}
            onClick={() => interactive && onStarClick?.(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-6">
          <Link to="/" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              {product.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={() => setCurrentImageIndex(Math.max(0, currentImageIndex - 1))}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={() => setCurrentImageIndex(Math.min(product.images.length - 1, currentImageIndex + 1))}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-primary">Rs. {product.currentPrice}</span>
              {product.originalPrice > product.currentPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  Rs. {product.originalPrice}
                </span>
              )}
            </div>

            {/* Availability */}
            <div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                {product.inStock ? "In Stock" : "Out of Stock"}
              </Badge>
            </div>

            {/* Weight */}
            <div>
              <span className="text-sm text-muted-foreground">Gross Wt: {product.weight}</span>
            </div>

            {/* Ratings */}
            <div className="flex items-center space-x-4">
              {renderStars(product.rating)}
              <span className="text-sm text-muted-foreground">
                {product.rating}/5 ({product.reviews} reviews)
              </span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <span className="font-medium">Quantity:</span>
              <div className="flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <Input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                  className="w-16 text-center border-0 focus:ring-0"
                  min="1"
                  max="10"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= 10}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <Button
                size="lg"
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button
                size="lg"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                onClick={handleBuyNow}
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>

        {/* Write a Review Section */}
        <Card className="mt-12 max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Write a Review</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Your Rating</label>
                {renderStars(userRating, true, setUserRating)}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Your Review</label>
                <Textarea
                  placeholder="Share your experience with this product..."
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  rows={4}
                />
              </div>
              <Button
                onClick={handleSubmitReview}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Send Review
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;