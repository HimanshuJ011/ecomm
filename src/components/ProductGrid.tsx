"use client";
import React, { useState, useEffect } from "react";
import {
  Heart,
  ChevronDown,
  Star,
  ShoppingCart,
  Eye,
  Zap,
  Award,
  TrendingUp,
  Sparkles,
  Shield,
  Truck,
  Package,
} from "lucide-react";

interface Variant {
  size: string;
  price: string;
  originalPrice: string;
  savings: string;
}

interface Product {
  id: number;
  image: string;
  badge: string;
  badgeType: "save" | "mustTry" | "limited";
  bestSeller: boolean;
  title: string;
  subtitle: string;
  price: string;
  originalPrice: string;
  description: string;
  rating: number;
  reviews: string;
  reviewCount: number;
  variants: string[];
  savings: string;
  backgroundColor: string;
  category: string;
  inStock: boolean;
  fastDelivery: boolean;
  highlights?: string[];
}

const ProductGrid: React.FC = () => {
  const [selectedVariants, setSelectedVariants] = useState<Record<number, string>>({});
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [cartAnimation, setCartAnimation] = useState<Record<number, boolean>>({});

  const products: Product[] = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=400&fit=crop&crop=center",
      badge: "Save ₹279",
      badgeType: "save",
      bestSeller: true,
      title: "Khapli Wheat Flour (Emmer Wheat)",
      subtitle: "Premium Stone Ground",
      price: "₹1,999",
      originalPrice: "₹2,278",
      description: "Low GI | Stoneground | Ancient Grain",
      rating: 4.9,
      reviews: "2k+ Reviews",
      reviewCount: 2156,
      variants: ["5 kg", "10 kg", "25 kg"],
      savings: "279",
      backgroundColor: "bg-gradient-to-br from-orange-50 via-orange-100 to-amber-50",
      category: "Grains & Flour",
      inStock: true,
      fastDelivery: true,
      highlights: ["100% Natural", "No Preservatives", "Farm Fresh"],
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=400&h=400&fit=crop&crop=center",
      badge: "Save ₹350",
      badgeType: "save",
      bestSeller: true,
      title: "A2 Cow Ghee - Desi Gir Cow",
      subtitle: "Pure & Traditional",
      price: "₹3,199",
      originalPrice: "₹3,509",
      description: "Bilona-made | Small batches | Premium Quality",
      rating: 4.9,
      reviews: "2k+ Reviews",
      reviewCount: 2045,
      variants: [
        "500 ml (Glass Bottle)",
        "1000 ml (Glass Bottle)",
        "1500 ml (Glass Bottle)",
      ],
      savings: "350",
      backgroundColor: "bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100",
      category: "Dairy Products",
      inStock: true,
      fastDelivery: true,
      highlights: ["Traditional Method", "Pure A2 Milk", "Glass Packaging"],
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?w=400&h=400&fit=crop&crop=center",
      badge: "Save ₹34",
      badgeType: "save",
      bestSeller: true,
      title: "Sugarcane Jaggery, Crushed Granular",
      subtitle: "Natural Sweetener",
      price: "₹541",
      originalPrice: "₹575",
      description: "Sulfur-free | Heirloom variety | Pure & Natural",
      rating: 4.8,
      reviews: "1.8k+ Reviews",
      reviewCount: 1823,
      variants: ["1kg", "2kg", "5kg"],
      savings: "34",
      backgroundColor: "bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100",
      category: "Sweeteners",
      inStock: true,
      fastDelivery: false,
      highlights: ["Chemical Free", "Traditional Process", "Rich in Iron"],
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1609501676725-7186f425f293?w=400&h=400&fit=crop&crop=center",
      badge: "Limited Edition",
      badgeType: "limited",
      bestSeller: false,
      title: "Amlaprash (Limited Edition)",
      subtitle: "Ayurvedic Health Booster",
      price: "₹1,969",
      originalPrice: "₹2,095",
      description: "40+ herbs | 52% Amlas | Immunity Booster",
      rating: 4.7,
      reviews: "805 Reviews",
      reviewCount: 805,
      variants: ["500g", "1 kg", "2 kg"],
      savings: "126",
      backgroundColor: "bg-gradient-to-br from-green-50 via-emerald-50 to-green-100",
      category: "Health & Wellness",
      inStock: true,
      fastDelivery: true,
      highlights: ["Immunity Boost", "40+ Herbs", "Ayurvedic Recipe"],
    },
  ];

  useEffect(() => {
    setIsClient(true);
    const initialVariants: Record<number, string> = {};
    products.forEach((product) => {
      initialVariants[product.id] = product.variants[0];
    });
    setSelectedVariants(initialVariants);
  }, []);

  const handleVariantChange = (productId: number, variant: string) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [productId]: variant,
    }));
  };

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const handleAddToCart = (productId: number) => {
    setCartAnimation((prev) => ({ ...prev, [productId]: true }));
    setTimeout(() => {
      setCartAnimation((prev) => ({ ...prev, [productId]: false }));
    }, 600);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-4 h-4 text-gray-300 fill-current" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
          </div>
        </div>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star
          key={`empty-${i}`}
          className="w-4 h-4 text-gray-300 fill-current"
        />
      );
    }

    return stars;
  };

  const getBadgeStyles = (badgeType: string) => {
    switch (badgeType) {
      case "save":
        return "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-emerald-200";
      case "limited":
        return "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-purple-200";
      case "mustTry":
        return "bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-pink-200";
      default:
        return "bg-gradient-to-r from-gray-600 to-gray-700 text-white";
    }
  };

  if (!isClient) {
    return (
      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Premium Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked collection of natural, organic, and
              traditional products
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden animate-pulse"
              >
                <div className={`${product.backgroundColor} p-6 h-64`}></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-yellow-500 mr-2" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              Premium Products
            </h2>
            <Sparkles className="w-8 h-8 text-yellow-500 ml-2" />
          </div>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked collection of natural, organic, and
            traditional products from trusted farmers
          </p>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">100% Authentic</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Truck className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Free Delivery</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Package className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">Secure Packaging</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image Container */}
              <div
                className={`relative ${product.backgroundColor} p-6 overflow-hidden`}
              >
                {/* Top Badges */}
                <div className="absolute top-4 left-4 z-20 flex flex-col space-y-2">
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-bold shadow-lg ${getBadgeStyles(
                      product.badgeType
                    )}`}
                  >
                    {product.badge}
                  </span>
                  {product.fastDelivery && (
                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center shadow-lg shadow-blue-200">
                      <Zap className="w-3 h-3 mr-1" />
                      Express
                    </span>
                  )}
                </div>

                {/* Top Right Badges */}
                <div className="absolute top-4 right-4 z-20 flex flex-col space-y-2">
                  {product.bestSeller && (
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center shadow-lg shadow-orange-200">
                      <Award className="w-3 h-3 mr-1" />
                      Best Seller
                    </span>
                  )}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className={`p-2.5 rounded-full transition-all duration-300 shadow-lg ${
                      favorites.has(product.id)
                        ? "bg-red-500 text-white shadow-red-200"
                        : "bg-white/90 text-gray-600 hover:bg-red-500 hover:text-white hover:shadow-red-200"
                    }`}
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        favorites.has(product.id) ? "fill-current" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Product Image */}
                <div className="relative h-48 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Quick Actions Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl flex items-center justify-center space-x-3 transition-opacity duration-300 ${
                      hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <button className="bg-white/95 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => handleAddToCart(product.id)}
                      className={`bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg ${
                        cartAnimation[product.id] ? "animate-bounce" : ""
                      }`}
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Category Tag */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/95 backdrop-blur-sm text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6 space-y-4">
                {/* Title and Subtitle */}
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1 line-clamp-2 group-hover:text-green-600 transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">
                    {product.subtitle}
                  </p>
                </div>

                {/* Price Section */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">
                      {product.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  <div className="bg-green-100 px-3 py-1 rounded-full">
                    <span className="text-sm font-bold text-green-700">
                      Save ₹{product.savings}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                {product.highlights && (
                  <div className="flex flex-wrap gap-2">
                    {product.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}

                {/* Rating and Reviews */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      {product.rating}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">
                      {product.reviewCount.toLocaleString()} reviews
                    </div>
                    {product.reviewCount > 1000 && (
                      <div className="flex items-center text-xs text-green-600">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </div>
                    )}
                  </div>
                </div>

                {/* Variant Selector */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-gray-700">
                      Select Size:
                    </span>
                  </div>
                  <div className="relative">
                    <select
                      className="w-full appearance-none bg-white border-2 text-gray-800 border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 cursor-pointer"
                      value={selectedVariants[product.id] || product.variants[0]}
                      onChange={(e) =>
                        handleVariantChange(product.id, e.target.value)
                      }
                    >
                      {product.variants.map((variant) => (
                        <option key={variant} value={variant}>
                          {variant}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Stock Status */}
                <div className="flex items-center justify-between">
                  <div
                    className={`flex items-center text-sm font-medium ${
                      product.inStock ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full mr-2 animate-pulse ${
                        product.inStock ? "bg-green-500" : "bg-red-500"
                      }`}
                    ></div>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </div>
                  {product.fastDelivery && (
                    <div className="flex items-center text-sm text-blue-600 font-medium">
                      <Truck className="w-4 h-4 mr-1" />
                      Express Delivery
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-2">
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className={`w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-green-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none ${
                      cartAnimation[product.id] ? "animate-pulse" : ""
                    }`}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>
                      {product.inStock ? "ADD TO CART" : "OUT OF STOCK"}
                    </span>
                  </button>

                  <button className="w-full border-2 border-gray-200 hover:border-green-500 text-gray-700 hover:text-green-600 font-semibold py-3 px-6 rounded-2xl transition-all duration-300 hover:bg-green-50 hover:shadow-md">
                    ADD TO WISHLIST
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16 sm:mt-20">
          <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-green-200 flex items-center mx-auto space-x-2">
            <Package className="w-5 h-5" />
            <span>Load More Products</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;