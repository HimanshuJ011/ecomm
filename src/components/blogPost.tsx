import React, { useState } from "react";
import {
  Calendar,
  Clock,
  ArrowRight,
  Leaf,
  Heart,
  Zap,
  Star,
  TrendingUp,
} from "lucide-react";

const BlogSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title:
        "Is Ragi Good for Weight Loss? How This Ancient Grain Helps Burn Fat",
      excerpt:
        "Discover the powerful weight loss benefits of ragi, an ancient superfood that's revolutionizing modern nutrition. Learn how this nutrient-dense grain can boost metabolism and support healthy weight management.",
      category: "Weight Loss",
      readTime: "5 min read",
      date: "May 20, 2025",
      featured: true,
      tags: ["Ancient Grains", "Weight Loss", "Nutrition"],
      views: "2.4k",
      trending: true,
    },
    {
      id: 2,
      title: "How to Cook with Coconut Oil for Maximum Health Benefits",
      excerpt:
        "Master the art of cooking with coconut oil to unlock its full potential. From smoke points to storage tips, everything you need to know.",
      category: "Cooking Tips",
      readTime: "4 min read",
      date: "May 18, 2025",
      tags: ["Coconut Oil", "Healthy Cooking"],
      views: "1.8k",
    },
    {
      id: 3,
      title: "Why Khapli Atta is Better for Diabetics Than Regular Wheat Flour",
      excerpt:
        "Explore the science behind khapli wheat and its superior nutritional profile for diabetes management and blood sugar control.",
      category: "Diabetes",
      readTime: "6 min read",
      date: "May 16, 2025",
      tags: ["Diabetes", "Wheat Flour", "Health"],
      views: "3.1k",
    },
    {
      id: 4,
      title: "5 Creative Ways to Add Moringa Powder to Your Daily Diet",
      excerpt:
        "Transform your meals with the superfood power of moringa. Creative recipes and tips to incorporate this nutrient powerhouse effortlessly.",
      category: "Superfoods",
      readTime: "3 min read",
      date: "May 14, 2025",
      tags: ["Moringa", "Superfoods", "Nutrition"],
      views: "1.5k",
    },
  ];

  const categoryConfig = {
    "Weight Loss": {
      icon: Zap,
      gradient: "from-orange-500 to-red-500",
      bg: "bg-orange-50",
      text: "text-orange-700",
      border: "border-orange-200",
    },
    "Cooking Tips": {
      icon: Heart,
      gradient: "from-pink-500 to-rose-500",
      bg: "bg-pink-50",
      text: "text-pink-700",
      border: "border-pink-200",
    },
    Diabetes: {
      icon: Heart,
      gradient: "from-blue-500 to-indigo-500",
      bg: "bg-blue-50",
      text: "text-blue-700",
      border: "border-blue-200",
    },
    Superfoods: {
      icon: Leaf,
      gradient: "from-green-500 to-emerald-500",
      bg: "bg-green-50",
      text: "text-green-700",
      border: "border-green-200",
    },
  };

  const FeaturedCard = ({ post }: any) => {
    const config = categoryConfig[post.category];
    const IconComponent = config.icon;

    return (
      <div
        className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-emerald-500/10"
        onMouseEnter={() => setHoveredCard(post.id)}
        onMouseLeave={() => setHoveredCard(null)}
        style={{
          boxShadow:
            "0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.1)",
          transform:
            hoveredCard === post.id
              ? "translateY(-8px) scale(1.02)"
              : "translateY(0) scale(1)",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 via-transparent to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        {/* Hero Image Section */}
        <div className="relative h-80 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden">
          {/* Floating Orbs */}
          <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-60 animate-bounce"></div>
          <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-40 animate-pulse"></div>

          {/* Ragi Package Illustration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-40 h-52 bg-gradient-to-br from-amber-800 to-amber-900 rounded-2xl shadow-2xl transform rotate-3 flex flex-col items-center justify-center border-4 border-amber-700">
                <div className="text-white text-center space-y-2">
                  <div className="text-sm font-bold tracking-wider">
                    ORGANIC
                  </div>
                  <div className="text-3xl font-black tracking-wide">RAGI</div>
                  <div className="text-lg font-semibold">FLOUR</div>
                  <div className="w-16 h-0.5 bg-white/60 mx-auto mt-2"></div>
                  <div className="text-xs opacity-80">500g</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Status Badges */}
          <div className="absolute top-6 left-6 flex flex-col space-y-2">
            <div className="flex items-center px-3 py-1 bg-white/95 backdrop-blur-sm text-emerald-700 text-sm font-bold rounded-full shadow-lg">
              <Star className="w-4 h-4 mr-1 fill-current" />
              Featured
            </div>
            {post.trending && (
              <div className="flex items-center px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold rounded-full shadow-lg">
                <TrendingUp className="w-4 h-4 mr-1" />
                Trending
              </div>
            )}
          </div>
        </div>

        <div className="p-8 space-y-6">
          {/* Meta Information */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div
                className={`flex items-center px-4 py-2 ${config.bg} ${config.text} rounded-xl font-semibold text-sm border ${config.border}`}
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {post.category}
              </div>
              <div className="text-gray-500 text-sm">{post.views} views</div>
            </div>
            <div className="flex items-center text-gray-500 text-sm space-x-4">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date.split(",")[0]}
              </div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-black text-gray-900 leading-tight group-hover:text-emerald-600 transition-colors duration-500">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-gray-600 text-lg leading-relaxed">
            {post.excerpt}
          </p>

          {/* Tags and CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-lg font-medium transition-colors duration-200"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <button className="flex items-center space-x-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-emerald-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
              <span>Read Article</span>
              <ArrowRight
                className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1`}
              />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const RegularCard = ({ post }:any) => {
    const config = categoryConfig[post.category];
    const IconComponent = config.icon;

    return (
      <div
        className="group bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl border border-gray-100"
        onMouseEnter={() => setHoveredCard(post.id)}
        onMouseLeave={() => setHoveredCard(null)}
        style={{
          transform:
            hoveredCard === post.id ? "translateY(-4px)" : "translateY(0)",
          boxShadow:
            hoveredCard === post.id
              ? "0 20px 40px rgba(0,0,0,0.15)"
              : "0 4px 20px rgba(0,0,0,0.08)",
        }}
      >
        <div
          className={`relative h-48 bg-gradient-to-br ${config.gradient} overflow-hidden`}
        >
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <IconComponent className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="absolute top-4 left-4">
            <span
              className={`px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full`}
            >
              {post.category}
            </span>
          </div>
          <div className="absolute bottom-4 right-4 text-white/80 text-sm">
            {post.views} views
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{post.readTime}</span>
            <span>{post.date.split(",")[0]}</span>
          </div>

          <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-emerald-600 transition-colors duration-300">
            {post.title}
          </h3>

          <p className="text-gray-600 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>

          <button className="flex items-center space-x-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300 group">
            <span>Read More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-green-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-48 h-48 bg-gradient-to-br from-orange-400/10 to-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-400/5 to-indigo-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 rounded-full text-sm font-bold mb-6 shadow-lg border border-emerald-200">
            <Leaf className="w-5 h-5 mr-2" />
            FOOD & HEALTH INSIGHTS
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
              Health
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Blogs
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Discover evidence-based insights on nutrition, wellness, and healthy
            living. Expert-crafted articles to transform your health journey.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Featured Post */}
          <div className="lg:col-span-2">
            <FeaturedCard post={blogPosts[0]} />
          </div>

          {/* Regular Posts */}
          <div className="space-y-8">
            {blogPosts.slice(1).map((post) => (
              <RegularCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:from-emerald-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-emerald-500/20">
            Explore All Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
