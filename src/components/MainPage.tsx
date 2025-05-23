"use client";
import Blog from "./Blog";
// import BlogSection from "./blogPost";
import FarmCreationsSection from "./FarmCreationsSection ";
import FarmSection from "./FarmSection";
import HeroSection from "./HeroSection";
import ProductGrid from "./ProductGrid";

export default function TwoBrothersWebsite() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ProductGrid />
      <FarmCreationsSection />

      <Blog />
      {/* <BlogSection /> */}
      <FarmSection />
    </div>
  );
}
