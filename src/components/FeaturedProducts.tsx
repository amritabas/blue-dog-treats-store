import ProductCard from "./ProductCard";
import dogBones from "@/assets/dog-bones.jpg";
import dogChews from "@/assets/dog-chews.jpg";
import dogDress from "@/assets/dog-dress.jpg";
import puppyChicken from "@/assets/puppy-chicken.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      image: dogBones,
      name: "Gourmet Dog Bone Treats",
      currentPrice: 12.99,
      originalPrice: 22.50,
      discount: 42,
    },
    {
      id: 2,
      image: dogDress,
      name: "Colorful Dog Dress",
      currentPrice: 18.99,
      originalPrice: 18.99,
      discount: 0,
    },
    {
      id: 3,
      image: dogChews,
      name: "Premium Dog Chew Sticks",
      currentPrice: 15.75,
      originalPrice: 21.00,
      discount: 25,
    },
    {
      id: 4,
      image: puppyChicken,
      name: "Puppy Chicken Treats",
      currentPrice: 14.00,
      originalPrice: 20.00,
      discount: 30,
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Products</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our most popular treats and accessories, loved by dogs and their owners worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              currentPrice={product.currentPrice}
              originalPrice={product.originalPrice}
              discount={product.discount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;