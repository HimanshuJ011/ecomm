"use client";

import React, { useState, useEffect } from "react";
import {
  Heart,
  Filter,
  ChevronDown,
  Star,
  ShoppingCart,
  TrendingUp,
  Award,
  X,
  Grid,
  List,
  Sparkles,
  Clock,
  Truck,
} from "lucide-react";
import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ProductSize {
  size: string;
  price: number;
  originalPrice?: number;
}

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  badgeType?: "bestseller" | "limited" | "new" | "hot";
  description: string;
  rating: number;
  reviews: number;
  sizes: ProductSize[];
  category: string;
  benefits?: string[];
  stock?: number;
}

interface Category {
  id: string;
  name: string;
  icon: string;
  active: boolean;
  count: number;
}

const ProductPage: React.FC = () => {
  const [selectedSort, setSelectedSort] = useState("featured");
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState("ghee");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: number }>(
    {}
  );
  const [isClient, setIsClient] = useState(false);
  const [cartAnimation, setCartAnimation] = useState<{
    [key: number]: boolean;
  }>({});

  useEffect(() => {
    setIsClient(true);
  }, []);

  const categories: Category[] = [
    { id: "new", name: "NEW LAUNCH", icon: "✨", active: false, count: 12 },
    { id: "ghee", name: "GHEE", icon: "🥛", active: true, count: 9 },
    { id: "atta", name: "ATTA", icon: "🌾", active: false, count: 15 },
    { id: "oil", name: "OIL", icon: "🫒", active: false, count: 18 },
    {
      id: "sweetener",
      name: "NATURAL SWEETENER",
      icon: "🍯",
      active: false,
      count: 8,
    },
    { id: "seeds", name: "SEEDS", icon: "🌱", active: false, count: 10 },
    {
      id: "snacks",
      name: "BREAKFAST & SNACKS",
      icon: "🥞",
      active: false,
      count: 22,
    },
    { id: "spices", name: "SPICES", icon: "🌿", active: false, count: 16 },
    { id: "pickles", name: "PICKLES", icon: "🥒", active: false, count: 7 },
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "A2 Cow Ghee - Desi Gir Cow",
      price: 3199,
      originalPrice: 3599,
      image:
        "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=400&h=400&fit=crop",
      badge: "Best Seller",
      badgeType: "bestseller",
      description: "Bilona-made | Small batches | Premium Quality",
      rating: 4.9,
      reviews: 2074,
      sizes: [
        { size: "500 ml", price: 1699, originalPrice: 1899 },
        { size: "1000 ml", price: 3199, originalPrice: 3599 },
        { size: "1500 ml", price: 4799, originalPrice: 5399 },
      ],
      category: "ghee",
      benefits: ["100% Pure", "Traditional Bilona", "Lab Tested"],
      stock: 45,
    },
    {
      id: 2,
      name: "Buffalo Ghee - Pure & Traditional",
      price: 1080,
      originalPrice: 1149,
      image:
        "https://images.unsplash.com/photo-1555963153-11ff60182d08?w=400&h=400&fit=crop",
      badge: "New",
      badgeType: "new",
      description: "Bilona-made | Firewood process | Rich Aroma",
      rating: 4.8,
      reviews: 873,
      sizes: [
        { size: "500 ml", price: 1080, originalPrice: 1149 },
        { size: "1000 ml", price: 2099, originalPrice: 2299 },
      ],
      category: "ghee",
      benefits: ["High Nutrition", "Authentic Taste", "Zero Preservatives"],
      stock: 23,
    },
    {
      id: 3,
      name: "Brahmi Ghee - Brain Booster",
      price: 2370,
      originalPrice: 2495,
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop",
      badge: "Limited Stock",
      badgeType: "limited",
      description: "Brahmi infused | A2 Ghee | Ayurvedic",
      rating: 4.9,
      reviews: 1738,
      sizes: [
        { size: "250 ml", price: 2370, originalPrice: 2495 },
        { size: "500 ml", price: 4599, originalPrice: 4899 },
      ],
      category: "ghee",
      benefits: ["Memory Enhancer", "Stress Relief", "Mental Clarity"],
      stock: 8,
    },
    {
      id: 4,
      name: "Ashwagandha Ghee - Immunity Booster",
      price: 2370,
      originalPrice: 2495,
      image:
        "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=400&h=400&fit=crop",
      badge: "Hot",
      badgeType: "hot",
      description: "Ashwagandha infused | A2 ghee | Stress Relief",
      rating: 4.7,
      reviews: 1189,
      sizes: [
        { size: "250 ml", price: 2370, originalPrice: 2495 },
        { size: "500 ml", price: 4599, originalPrice: 4899 },
      ],
      category: "ghee",
      benefits: ["Immunity Boost", "Better Sleep", "Energy Enhancer"],
      stock: 15,
    },
    {
      id: 5,
      name: "Turmeric Ghee - Golden Elixir",
      price: 2199,
      originalPrice: 2399,
      image:
        "https://images.unsplash.com/photo-1615485500704-8e990f9dd486?w=400&h=400&fit=crop",
      badge: "Best Seller",
      badgeType: "bestseller",
      description: "Turmeric infused | Anti-inflammatory | Healing",
      rating: 4.8,
      reviews: 956,
      sizes: [
        { size: "250 ml", price: 2199, originalPrice: 2399 },
        { size: "500 ml", price: 4299, originalPrice: 4699 },
      ],
      category: "ghee",
      benefits: ["Anti-inflammatory", "Joint Health", "Skin Glow"],
      stock: 32,
    },
    {
      id: 6,
      name: "Garlic Ghee - Heart Healthy",
      price: 1899,
      originalPrice: 2099,
      image:
        "https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=400&h=400&fit=crop",
      badge: "New",
      badgeType: "new",
      description: "Garlic infused | Heart health | Cholesterol control",
      rating: 4.6,
      reviews: 567,
      sizes: [
        { size: "250 ml", price: 1899, originalPrice: 2099 },
        { size: "500 ml", price: 3699, originalPrice: 4099 },
      ],
      category: "ghee",
      benefits: ["Heart Health", "Cholesterol Control", "Immunity"],
      stock: 28,
    },
    {
      id: 7,
      name: "Shatavari Ghee - Women's Health",
      price: 2599,
      originalPrice: 2799,
      image:
        "https://images.unsplash.com/photo-1556909172-bd5315ff1f2f?w=400&h&fit=crop",
      badge: "Limited Stock",
      badgeType: "limited",
      description: "Shatavari infused | Hormonal balance | Vitality",
      rating: 4.9,
      reviews: 423,
      sizes: [
        { size: "250 ml", price: 2599, originalPrice: 2799 },
        { size: "500 ml", price: 4999, originalPrice: 5399 },
      ],
      category: "ghee",
      benefits: ["Hormonal Balance", "Women's Health", "Vitality"],
      stock: 12,
    },
    {
      id: 8,
      name: "Plain A2 Ghee - Daily Essential",
      price: 1499,
      originalPrice: 1699,
      image:
        "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&h=400&fit=crop",
      badge: "Hot",
      badgeType: "hot",
      description: "Pure A2 ghee | Daily cooking | Versatile",
      rating: 4.8,
      reviews: 3421,
      sizes: [
        { size: "500 ml", price: 1499, originalPrice: 1699 },
        { size: "1000 ml", price: 2899, originalPrice: 3299 },
        { size: "5000 ml", price: 13999, originalPrice: 15999 },
      ],
      category: "ghee",
      benefits: ["Daily Essential", "Multi-purpose", "Family Pack"],
      stock: 67,
    },
    {
      id: 9,
      name: "Panchamrit Ghee - Divine Blend",
      price: 3299,
      originalPrice: 3599,
      image:
        "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=400&h=400&fit=crop",
      badge: "Premium",
      badgeType: "new",
      description: "5 sacred ingredients | Spiritual wellness | Premium",
      rating: 5.0,
      reviews: 234,
      sizes: [
        { size: "250 ml", price: 3299, originalPrice: 3599 },
        { size: "500 ml", price: 6299, originalPrice: 6899 },
      ],
      category: "ghee",
      benefits: ["Spiritual Wellness", "Premium Quality", "Gift Ready"],
      stock: 18,
    },
  ];

  const toggleWishlist = (productId: number) => {
    if (!isClient) return;
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = (productId: number) => {
    if (!isClient) return;
    setCartAnimation((prev) => ({ ...prev, [productId]: true }));
    setTimeout(() => {
      setCartAnimation((prev) => ({ ...prev, [productId]: false }));
    }, 600);
  };

  const handleSizeChange = (productId: number, sizeIndex: number) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: sizeIndex }));
  };

  const getBadgeStyles = (badgeType?: string) => {
    switch (badgeType) {
      case "bestseller":
        return "bg-gradient-to-r from-green-500 to-emerald-600 text-white";
      case "limited":
        return "bg-gradient-to-r from-red-500 to-pink-600 text-white";
      case "new":
        return "bg-gradient-to-r from-blue-500 to-indigo-600 text-white";
      case "hot":
        return "bg-gradient-to-r from-orange-500 to-red-600 text-white";
      default:
        return "bg-gray-600 text-white";
    }
  };

  const filteredProducts = products.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (selectedSort) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return b.id - a.id;
      default:
        return 0;
    }
  });

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="animate-pulse">
          <div className="h-16 bg-gray-200"></div>
          <div className="h-32 bg-gray-100 mt-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-200 h-96 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm  top-0 z-30">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <nav className="text-sm text-gray-500">
                <span className="hover:text-gray-700 cursor-pointer">Home</span>
                <span className="mx-2">&gt;</span>
                <span className="text-gray-900 font-medium">
                  Ghee Collection
                </span>
              </nav>
              <div className="flex items-center gap-4">
                <button
                  onClick={() =>
                    setViewMode(viewMode === "grid" ? "list" : "grid")
                  }
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {viewMode === "grid" ? (
                    <List className="w-5 h-5" />
                  ) : (
                    <Grid className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="bg-white border-b  top-16 z-20">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center gap-8 overflow-x-auto scrollbar-hide pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex flex-col items-center min-w-fit cursor-pointer group transition-all duration-300 ${
                    activeCategory === category.id
                      ? "scale-105"
                      : "hover:scale-105"
                  }`}
                >
                  <div
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl mb-3 transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg shadow-green-200"
                        : "bg-gray-100 group-hover:bg-green-100"
                    }`}
                  >
                    {category.icon}
                  </div>
                  <span
                    className={`text-xs font-semibold text-center ${
                      activeCategory === category.id
                        ? "text-green-600"
                        : "text-gray-700"
                    }`}
                  >
                    {category.name}
                  </span>
                  <span className="text-xs text-gray-500 mt-1">
                    ({category.count})
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-sm"
              >
                <Filter className="w-4 h-4" />
                <span className="font-medium">Filters</span>
                {showFilters && (
                  <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">
                    2
                  </span>
                )}
              </button>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Sparkles className="w-4 h-4 text-green-600" />
                <span className="font-medium">
                  {sortedProducts.length} Premium Products
                </span>
              </div>
            </div>

            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-xl px-5 py-2.5 pr-10 font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 shadow-sm"
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>
              <ChevronDown className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500" />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Truck, label: "Free Delivery", value: "On ₹500+" },
              { icon: Award, label: "Premium Quality", value: "Certified" },
              { icon: Clock, label: "Fresh Stock", value: "Weekly" },
              { icon: TrendingUp, label: "Best Prices", value: "Guaranteed" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-500 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <stat.icon className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                    <div className="text-sm font-semibold text-gray-800">
                      {stat.value}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Product Grid */}
          <div
            className={`grid ${
              viewMode === "grid"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "grid-cols-1"
            } gap-6`}
          >
            {sortedProducts.map((product) => {
              const selectedSizeIndex = selectedSizes[product.id] || 0;
              const selectedSize = product.sizes[selectedSizeIndex];

              return (
                <div
                  key={product.id}
                  className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                    viewMode === "list" ? "flex" : ""
                  }`}
                >
                  {/* Product Image */}
                  <div
                    className={`relative ${viewMode === "list" ? "w-48" : ""}`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                        viewMode === "list" ? "h-full" : "h-64"
                      }`}
                    />
                    {product.badge && (
                      <span
                        className={`absolute top-3 left-3 px-3 py-1.5 text-xs font-bold rounded-full shadow-lg ${getBadgeStyles(
                          product.badgeType
                        )}`}
                      >
                        {product.badge}
                      </span>
                    )}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute top-3 right-3 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                    >
                      <Heart
                        className={`w-5 h-5 transition-colors duration-300 ${
                          wishlist.includes(product.id)
                            ? "fill-red-500 text-red-500"
                            : "text-gray-400 hover:text-red-500"
                        }`}
                      />
                    </button>
                    {product.originalPrice && (
                      <div className="absolute bottom-3 left-3 bg-green-600 text-white px-3 py-1.5 text-xs font-bold rounded-full shadow-lg">
                        {Math.round(
                          ((product.originalPrice - product.price) /
                            product.originalPrice) *
                            100
                        )}
                        % OFF
                      </div>
                    )}
                    {product.stock && product.stock < 20 && (
                      <div className="absolute bottom-3 right-3 bg-red-600 text-white px-3 py-1.5 text-xs font-bold rounded-full shadow-lg animate-pulse">
                        Only {product.stock} left
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className={`p-5 ${viewMode === "list" ? "flex-1" : ""}`}>
                    <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2 group-hover:text-green-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {product.description}
                    </p>

                    {/* Benefits */}
                    {product.benefits && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {product.benefits.map((benefit, index) => (
                          <span
                            key={index}
                            className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-gray-800">
                        {product.rating}
                      </span>
                      <span className="text-sm text-gray-500">
                        ({product.reviews.toLocaleString()})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-2xl font-bold text-gray-900">
                        ₹{selectedSize.price.toLocaleString()}
                      </span>
                      {selectedSize.originalPrice && (
                        <span className="text-base text-gray-500 line-through">
                          ₹{selectedSize.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    {/* Size Selector */}
                    <div className="mb-5">
                      <label className="text-xs font-semibold text-gray-700 mb-2 block">
                        Select Size:
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {product.sizes.map((size, index) => (
                          <button
                            key={index}
                            onClick={() => handleSizeChange(product.id, index)}
                            className={`px-3 py-2 text-xs font-medium rounded-lg transition-all duration-300 ${
                              selectedSizeIndex === index
                                ? "bg-green-600 text-white shadow-lg"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {size.size}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={() => handleAddToCart(product.id)}
                      className={`w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3.5 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 ${
                        cartAnimation[product.id] ? "animate-pulse" : ""
                      }`}
                    >
                      <ShoppingCart className="w-5 h-5" />
                      ADD TO CART
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
              Load More Products
            </button>
          </div>
        </div>

        {/* Filter Sidebar */}
        {showFilters && (
          <div className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300">
            <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Filters</h3>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                {/* Filter options would go here */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Price Range
                    </h4>
                    <input type="range" className="w-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Rating</h4>
                    <div className="space-y-2">
                      {[5, 4, 3].map((rating) => (
                        <label
                          key={rating}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            className="rounded text-green-600"
                          />
                          <div className="flex items-center">
                            {[...Array(rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                            <span className="ml-2 text-sm text-gray-600">
                              & up
                            </span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
