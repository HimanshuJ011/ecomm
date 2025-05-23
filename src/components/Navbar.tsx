"use client";
import { useState } from "react";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation"; // or "next/router" for older Next.js

export default function Navigation() {
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(3);

  const navLinks = [
    { name: "Shop", href: "products" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "Farmer's Movement", href: "#movement" },
    { name: "Engage", href: "#engage" },
    { name: "Connect", href: "#connect" },
    { name: "Traceability", href: "#traceability" },
  ];

  return (
    <div className="bg-white overflow-x-hidden w-full">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-2 px-4 text-center text-sm">
        <span className="font-medium">
          🌱 Free shipping on orders above ₹999 | Farm-fresh delivery within
          24hrs
        </span>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 group cursor-pointer">
              <div className="flex items-center space-x-3">
                {/* <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <span className="text-white text-xl font-bold">TB</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                </div> */}
                <div>
                  <div className="text-xl font-bold text-green-800 leading-tight">
                    TWO BROTHERS
                  </div>
                  <div className="text-xs text-green-600 font-medium tracking-wider">
                    ORGANIC FARMS
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-gray-700 hover:text-green-600 font-medium text-sm transition-all duration-200 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden md:block relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search organic products..."
                  className="w-72 pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent focus:bg-white transition-all duration-200 text-sm"
                />
                <Search className="absolute left-4 top-3.5 h-4 w-4 text-gray-400" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* User Account */}
              <button className="p-2.5 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-full transition-all duration-200">
                <User className="h-5 w-5" />
              </button>

              {/* Shopping Cart */}
              <button
                onClick={() => router.push("/cart")}
                className="relative p-2.5 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-full transition-all duration-200 group"
              >
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-medium animate-pulse group-hover:animate-none">
                    {cartCount}
                  </span>
                )}
              </button>
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 z-40">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <div className="relative mb-6">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search organic products..."
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                />
                <Search className="absolute left-4 top-3.5 h-4 w-4 text-gray-400" />
              </div>

              {/* Mobile Nav Links */}
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg font-medium transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
