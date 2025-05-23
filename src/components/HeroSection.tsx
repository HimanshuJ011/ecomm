"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Sparkles, ShoppingCart, Zap, TrendingUp, Clock } from "lucide-react";

interface Product {
  id: number;
  name: string;
  image: string;
  originalPrice: string;
  salePrice: string;
  discount: string;
  savings: number;
}

interface ProductCategory {
  name: string;
  icon: string;
  color: string;
  isNew?: boolean;
}

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "Premium Mustard Oil",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop",
      originalPrice: "₹520",
      salePrice: "₹395",
      discount: "24%",
      savings: 125,
    },
    {
      id: 2,
      name: "Cold-Pressed Sunflower Oil",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      originalPrice: "₹556",
      salePrice: "₹445",
      discount: "20%",
      savings: 111,
    },
    {
      id: 3,
      name: "Pure Groundnut Oil",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop",
      originalPrice: "₹607",
      salePrice: "₹425",
      discount: "30%",
      savings: 182,
    },
    {
      id: 4,
      name: "Organic Coconut Oil",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
      originalPrice: "₹650",
      salePrice: "₹485",
      discount: "25%",
      savings: 165,
    },
    {
      id: 5,
      name: "Premium Olive Oil",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop",
      originalPrice: "₹890",
      salePrice: "₹695",
      discount: "22%",
      savings: 195,
    },
  ];

  const productCategories: ProductCategory[] = [
    { name: "Ghee", icon: "🥛", color: "bg-amber-100 text-amber-800 hover:bg-amber-200" },
    { name: "Atta", icon: "🌾", color: "bg-orange-100 text-orange-800 hover:bg-orange-200" },
    { name: "Oil", icon: "🫒", color: "bg-green-100 text-green-800 hover:bg-green-200" },
    { name: "Sweeteners", icon: "🍯", color: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200" },
    { name: "New Launch", icon: "✨", color: "bg-purple-100 text-purple-800 hover:bg-purple-200", isNew: true },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % products.length);
      setTimeout(() => setIsAnimating(false), 300);
    }
  }, [isAnimating, products.length]);

  const prevSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
      setTimeout(() => setIsAnimating(false), 300);
    }
  }, [isAnimating, products.length]);

  useEffect(() => {
    if (!isClient) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide, isClient]);

  if (!isClient) {
    return (
      <div className="bg-gradient-to-br from-red-600 to-red-700 min-h-[600px]">
        <div className="animate-pulse">
          <div className="h-20 bg-white/10"></div>
          <div className="h-96 bg-white/5"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Categories Bar */}
       {/* Product Categories Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Farm-fresh, organic products delivered to your doorstep
            </p>
          </div> */}

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {productCategories.map((category) => (
              <div
                key={category.name}
                className="flex flex-col items-center group cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div
                  className={`relative w-24 h-24 ${category.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  {category.isNew && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse shadow-lg">
                      NEW
                    </div>
                  )}
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-green-600 transition-colors duration-200">
                  {category.name}
                </span>
                <div className="w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300 mt-2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-red-500 to-red-600 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              {/* Headline */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h1 className="text-5xl lg:text-6xl font-black">BIG PRICE</h1>
                  <Star className="w-8 h-8 text-yellow-300 fill-current animate-spin" style={{ animationDuration: '3s' }} />
                </div>
                <h1 className="text-5xl lg:text-6xl font-black text-yellow-300">DROP</h1>
              </div>

              {/* Subtitle */}
              <div className="space-y-1">
                <p className="text-xl text-red-100">The World Of Cold-pressed Oils</p>
                <p className="text-2xl lg:text-3xl font-bold">IS ABOUT TO CHANGE FOREVER!</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Shop Now
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold py-3 px-6 rounded-full transition-all duration-300">
                  View Offers
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">500+</div>
                  <div className="text-xs text-red-100">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">100%</div>
                  <div className="text-xs text-red-100">Pure & Natural</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">24/7</div>
                  <div className="text-xs text-red-100">Support</div>
                </div>
              </div>
            </div>

            {/* Right Content - Product Carousel */}
            <div className="relative">
              {/* Main Product Display */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl max-w-sm mx-auto">
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-black text-sm font-bold px-4 py-2 rounded-full shadow-lg animate-bounce">
                  Limited Time!
                </div>

                {/* Product Image */}
                <div className="relative mb-6">
                  <img
                    src={products[currentSlide].image}
                    alt={products[currentSlide].name}
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    -{products[currentSlide].discount}
                  </div>
                </div>

                {/* Product Info */}
                <div className="text-center space-y-3">
                  <h3 className="font-bold text-gray-800 text-lg">
                    {products[currentSlide].name}
                  </h3>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-gray-500 line-through text-sm">
                      {products[currentSlide].originalPrice}
                    </span>
                    <span className="text-2xl font-bold text-green-600">
                      {products[currentSlide].salePrice}
                    </span>
                  </div>
                  <div className="bg-green-100 text-green-700 text-sm font-semibold py-2 px-4 rounded-full inline-block">
                    You Save ₹{products[currentSlide].savings}
                  </div>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-6">
                  <button
                    onClick={prevSlide}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <div className="flex gap-2">
                    {products.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentSlide ? "bg-green-600 w-6" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextSlide}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 text-4xl animate-bounce delay-500">🎉</div>
              <div className="absolute -bottom-4 -right-4 text-4xl animate-pulse">💫</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features Bar */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Zap, text: "Express Delivery", color: "text-blue-600" },
              { icon: ShoppingCart, text: "Secure Payment", color: "text-green-600" },
              { icon: Star, text: "Premium Quality", color: "text-yellow-600" },
              { icon: TrendingUp, text: "Best Prices", color: "text-purple-600" },
            ].map((feature, index) => (
              <div key={index} className="flex items-center justify-center gap-2 text-sm">
                <feature.icon className={`w-4 h-4 ${feature.color}`} />
                <span className="font-medium text-gray-700">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;