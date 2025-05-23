"use client";

import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Star,
  Smartphone,
  Send,
  Heart,
  Leaf,
  Award,
  ShieldCheck,
  Clock,
  Truck,
  Apple,
} from "lucide-react";

interface LinkItem {
  text?: string;
  special?: boolean;
  href?: string;
}

interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
  color: string;
}

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleEmailSubmit = () => {
    if (!email || !email.includes('@')) return;
    
    setIsSubmitting(true);
    console.log("Email submitted:", email);

    // Simulate API call
    setTimeout(() => {
      setEmail("");
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  const socialLinks: SocialLink[] = [
    { 
      icon: Facebook, 
      href: "#", 
      label: "Facebook",
      color: "hover:bg-blue-600"
    },
    { 
      icon: Twitter, 
      href: "#", 
      label: "Twitter",
      color: "hover:bg-sky-500"
    },
    { 
      icon: Instagram, 
      href: "#", 
      label: "Instagram",
      color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600"
    },
    { 
      icon: Youtube, 
      href: "#", 
      label: "YouTube",
      color: "hover:bg-red-600"
    },
    { 
      icon: Linkedin, 
      href: "#", 
      label: "LinkedIn",
      color: "hover:bg-blue-700"
    },
  ];

  const categories = [
    { name: "Bilona A2 Ghee", href: "#", hot: true },
    { name: "Breakfast & Snacks", href: "#" },
    { name: "Kitchen Essentials", href: "#" },
    { name: "Natural Sweeteners", href: "#" },
    { name: "Healthy Snacking", href: "#", new: true },
  ];

  const generalLinks: (string | LinkItem)[] = [
    "Sitemap",
    "Terms Of Service",
    "Refund & Cancellation Policy",
    "Privacy Policy",
    "Shipping & Delivery Policy",
    "Mobile App",
    "Contact Us",
    "Whatsapp Us",
    "Our Team",
    "Corporate Information",
    { text: "We are hiring!", special: true },
    "Track Order",
  ];

  const trustBadges = [
    { icon: ShieldCheck, text: "100% Organic", color: "text-green-400" },
    { icon: Truck, text: "Free Delivery", color: "text-blue-400" },
    { icon: Award, text: "Premium Quality", color: "text-yellow-400" },
    { icon: Clock, text: "24/7 Support", color: "text-purple-400" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Trust Badges Section */}
      <div className="relative border-b border-gray-800 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center space-x-3 group cursor-pointer"
              >
                <badge.icon className={`w-6 h-6 ${badge.color} group-hover:scale-110 transition-transform duration-300`} />
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-8">
            {/* Logo */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-green-500/20 rounded-2xl">
                  <Leaf className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <div className="text-3xl font-black text-white leading-tight">
                    BANYAN<sup className="text-sm text-green-400">®</sup>
                  </div>
                  <div className="text-3xl font-black text-green-400 leading-tight">
                ROOTS
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Bringing you the finest organic products straight from our
                farms to your table. Pure, natural, and sustainable.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white flex items-center space-x-2">
                <span>Follow Us</span>
                <div className="flex-1 h-px bg-gradient-to-r from-green-500/50 to-transparent"></div>
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className={`w-12 h-12 bg-gray-800/50 ${social.color} rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-green-500/20 border border-gray-700 hover:border-green-500/50`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Stay Updated
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Subscribe for exclusive offers and healthy living tips
              </p>

              <div className="space-y-3">
                <div className="relative">
                  <div className="flex rounded-2xl overflow-cihidden bg-gray-800/50 border border-gray-700 focus-within:border-green-500 transition-all duration-300 backdrop-blur-sm">
                    <div className="flex items-center pl-4">
                      <Mail className="w-5 h-5 text-gray-500" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-4 bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleEmailSubmit();
                        }
                      }}
                    />
                    <button
                      type="button"
                      onClick={handleEmailSubmit}
                      disabled={isSubmitting || !email}
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-6 py-4 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <Send className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {showSuccess && (
                    <div className="absolute -bottom-8 left-0 text-green-400 text-sm animate-fade-in">
                      ✓ Successfully subscribed!
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* App Download Buttons */}
            {/* <div className="space-y-4">
              <h4 className="text-lg font-bold text-white">Download Our App</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#" className="group">
                  <div className="bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 rounded-2xl p-4 transition-all duration-300 border border-gray-700 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/20">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-green-500/20 rounded-xl group-hover:bg-green-500/30 transition-colors duration-300">
                        <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Get it on</div>
                        <div className="text-sm font-bold text-white">Google Play</div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 rounded-2xl p-4 transition-all duration-300 border border-gray-700 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/20">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-green-500/20 rounded-xl group-hover:bg-green-500/30 transition-colors duration-300">
                        <Apple className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Download on</div>
                        <div className="text-sm font-bold text-white">App Store</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div> */}
          </div>

          {/* Categories Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center space-x-3">
              <span>CATEGORIES</span>
              <div className="flex-1 h-px bg-gradient-to-r from-green-500/50 to-transparent"></div>
            </h3>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href={category.href}
                    className="text-gray-400 hover:text-green-400 transition-all duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-green-400" />
                    <span>{category.name}</span>
                    {category.hot && (
                      <span className="ml-2 px-2 py-0.5 bg-red-500/20 text-red-400 text-xs rounded-full font-medium">
                        HOT
                      </span>
                    )}
                    {category.new && (
                      <span className="ml-2 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full font-medium">
                        NEW
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* General Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center space-x-3">
              <span>GENERAL</span>
              <div className="flex-1 h-px bg-gradient-to-r from-green-500/50 to-transparent"></div>
            </h3>
            <ul className="space-y-3">
              {generalLinks.map((link, index) => {
                const isSpecial = typeof link === 'object' && link.special;
                const text = typeof link === 'string' ? link : link.text;
                
                return (
                  <li key={index}>
                    <a
                      href="#"
                      className={`text-sm flex items-center group transition-all duration-300 ${
                        isSpecial
                          ? "text-yellow-400 hover:text-yellow-300"
                          : "text-gray-400 hover:text-green-400"
                      }`}
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span>{text}</span>
                      {isSpecial && (
                        <Star className="w-4 h-4 ml-2 fill-current animate-pulse" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Company Information Section */}
          {/* <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center space-x-3">
              <span>CONTACT</span>
              <div className="flex-1 h-px bg-gradient-to-r from-green-500/50 to-transparent"></div>
            </h3>
            <div className="space-y-6">
              <div className="p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300">
                <h4 className="font-bold text-white mb-2">
                  TBOF FOODS PRIVATE LIMITED
                </h4>
                <p className="text-gray-400 text-sm">
                  Banyan Roots Organic Farms India
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  CIN: U01110PN2019PTC182942
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3 group">
                  <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-green-400" />
                  </div>
                  <p className="text-gray-400 leading-relaxed flex-1">
                    11th Floor, N-1104, Jasminium Building, Magarpatta City,
                    Hadapsar, Pune, Maharashtra, 411028
                  </p>
                </div>

                <div className="flex items-center space-x-3 group">
                  <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors duration-300">
                    <Mail className="w-4 h-4 text-green-400" />
                  </div>
                  <a
                    href="mailto:info@twobrothersindia.com"
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex-1"
                  >
                    info@twobrothersindia.com
                  </a>
                </div>

                <div className="flex items-center space-x-3 group">
                  <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors duration-300">
                    <Phone className="w-4 h-4 text-green-400" />
                  </div>
                  <a
                    href="tel:7406753753"
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex-1"
                  >
                    +91 7406753753
                  </a>
                </div>

                <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-red-400" />
                    <div>
                      <span className="text-red-400 text-xs font-semibold uppercase tracking-wider">
                        Grievances:
                      </span>
                      <a
                        href="tel:7406753753"
                        className="text-gray-300 hover:text-red-400 transition-colors duration-300 ml-2"
                      >
                        +91 7406753753
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Banyan Roots Organic Farms. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-500 hover:text-green-400 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-green-400 text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-green-400 text-sm transition-colors duration-300">
                Sitemap
              </a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-500 text-sm flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                <span>for a healthier world</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
    </footer>
  );
};

export default Footer;