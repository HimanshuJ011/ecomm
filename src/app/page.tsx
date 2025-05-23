"use client";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import TwoBrothersWebsite from "@/components/MainPage";
import Navigation from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {" "}
      <Navigation />
      <TwoBrothersWebsite />
      <Footer />
    </>
  );
}
