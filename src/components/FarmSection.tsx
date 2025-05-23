import React from 'react';
import { Leaf, Star, Sparkles, Award } from 'lucide-react';

const FarmSection = () => {
  const categories = [
    {
      title: "Premium Ghee",
      subtitle: "Pure & Traditional",
      image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=400&h=300&fit=crop&crop=center",
      alt: "Golden ghee in traditional pot",
      badge: "Best Seller",
      color: "from-yellow-400 to-orange-400"
    },
    {
      title: "Breakfast & Snacks",
      subtitle: "Start Your Day Right",
      image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&h=300&fit=crop&crop=center",
      alt: "Healthy breakfast spread",
      badge: "Popular",
      color: "from-orange-400 to-red-400"
    },
    {
      title: "Kitchen Essentials",
      subtitle: "Authentic Spices & More",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop&crop=center",
      alt: "Traditional spices and essentials",
      badge: "Premium",
      color: "from-red-400 to-pink-400"
    },
    {
      title: "Healthy Snacking",
      subtitle: "Guilt-Free Goodness",
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop&crop=center",
      alt: "Assorted healthy nuts and snacks",
      badge: "Trending",
      color: "from-green-400 to-teal-400"
    },
    {
      title: "Natural Sweeteners",
      subtitle: "Pure & Unprocessed",
      image: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?w=400&h=300&fit=crop&crop=center",
      alt: "Honey and natural sweeteners",
      badge: "Organic",
      color: "from-amber-400 to-yellow-400"
    }
  ];

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case "Best Seller":
        return <Award className="w-3 h-3" />;
      case "Trending":
        return <Sparkles className="w-3 h-3" />;
      case "Premium":
      case "Organic":
        return <Star className="w-3 h-3" />;
      default:
        return <Leaf className="w-3 h-3" />;
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 px-4 relative overflow-hidden">
      <style jsx>{`
        @keyframes bounce-delayed {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0, 0, 0);
          }
          40%, 43% {
            transform: translate3d(0, -30px, 0);
          }
          70% {
            transform: translate3d(0, -15px, 0);
          }
          90% {
            transform: translate3d(0, -4px, 0);
          }
        }
        .animate-bounce-delayed {
          animation: bounce-delayed 2s infinite;
          animation-delay: 1s;
        }
      `}</style>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-green-400 to-blue-400 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent tracking-tight">
                FARM CREATIONS
              </h2>
              <p className="text-lg text-gray-600 font-medium mt-2">
                Handpicked from nature, crafted with love
              </p>
            </div>
          </div>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="group cursor-pointer transform transition-all duration-500 hover:-translate-y-4"
            >
              <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-orange-200/50">
                {/* Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div className={`bg-gradient-to-r ${category.color} text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg`}>
                    {getBadgeIcon(category.badge)}
                    {category.badge}
                  </div>
                </div>

                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.alt}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Hover Content */}
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-sm font-medium opacity-90">
                      Explore our premium collection
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center relative">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium mb-4">
                    {category.subtitle}
                  </p>
                  
                  {/* Action Button */}
                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                    Shop Now
                  </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-green-500/20 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Experience the Difference of Farm-Fresh Quality
            </h3>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              Every product is carefully sourced from trusted farmers and crafted using traditional methods to bring you the purest taste of nature.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
                <Leaf className="w-5 h-5" />
                Explore All Products
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300">
                Learn Our Story
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 animate-bounce opacity-20">
        <Leaf className="w-8 h-8 text-green-500" />
      </div>
      <div className="absolute bottom-40 left-20 animate-pulse opacity-20">
        <Star className="w-6 h-6 text-yellow-500" />
      </div>
      <div className="absolute top-1/2 right-20 animate-bounce-delayed opacity-20">
        <Sparkles className="w-7 h-7 text-purple-500" />
      </div>
    </div>
  );
};

export default FarmSection;