"use client";
import Blog from "./Blog";
import BlogSection from "./blogPost";
import FarmCreationsSection from "./FarmCreationsSection ";
import FarmSection from "./FarmSection";
import HeroSection from "./HeroSection";
import ProductGrid from "./ProductGrid";

export default function TwoBrothersWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navigation /> */}
      {/* <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="text-2xl font-bold text-green-800">
                  TWO<br />BROTHERS
                </div>
                <div className="ml-2 text-xs text-gray-600">
                  ORGANIC FARMS
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">Shop</a>
                <a href="#" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">Philosophy</a>
                <a href="#" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">Farmer's Movement</a>
                <a href="#" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">Engage</a>
                <a href="#" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">Connect</a>
                <a href="#" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">Traceability</a>
                <a href="#" className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700">
                  JOIN COLLECTIVE
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
              
              <button className="p-2 text-gray-600 hover:text-green-600">
                <User className="h-5 w-5" />
              </button>
              
              <button className="relative p-2 text-gray-600 hover:text-green-600">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mb-2 group-hover:bg-green-600 transition-colors">
                <div className="text-white text-2xl">🥛</div>
              </div>
              <span className="text-sm font-medium text-gray-700">Ghee</span>
            </div>

        
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mb-2 group-hover:bg-green-600 transition-colors">
                <div className="text-white text-2xl">🏺</div>
              </div>
              <span className="text-sm font-medium text-gray-700">Atta</span>
            </div>

  
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mb-2 group-hover:bg-green-600 transition-colors">
                <div className="text-white text-2xl">🫗</div>
              </div>
              <span className="text-sm font-medium text-gray-700">Oil</span>
            </div>

       
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mb-2 group-hover:bg-green-600 transition-colors">
                <div className="text-white text-2xl">🍯</div>
              </div>
              <span className="text-sm font-medium text-gray-700">Sweetners</span>
            </div>

            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center mb-2 group-hover:bg-yellow-300 transition-colors">
                <div className="text-yellow-800 text-2xl">✨</div>
              </div>
              <span className="text-sm font-medium text-gray-700">New Launch</span>
            </div>
          </div>
        </div>
      </div> */}
      {/* Hero Section */}
      {/* <div className="bg-gradient-to-br from-red-600 via-red-500 to-red-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-400 rounded-full transform translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-400 rounded-full transform -translate-x-32 translate-y-32"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <h1 className="text-6xl font-bold mr-4">BIG</h1>
                  <div className="text-yellow-300">
                    <svg
                      className="w-12 h-12"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h1 className="text-6xl font-bold">PRICE</h1>
                </div>
                <h1 className="text-6xl font-bold text-yellow-300 mb-6">
                  DROP
                </h1>
              </div>

              <div className="mb-8">
                <p className="text-xl mb-2">
                  The World Of Cold-pressed Oils Is
                </p>
                <p className="text-3xl font-bold mb-2">ABOUT TO CHANGE</p>
                <p className="text-3xl font-bold">FOREVER!</p>
              </div>
            </div>

            <div className="relative">
              <div className="flex justify-center space-x-4">
                <div className="relative">
                  <div className="bg-white rounded-lg p-4 shadow-lg transform hover:scale-105 transition-transform">
                    <div className="w-32 h-48 bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-lg mb-2 relative overflow-hidden">
                      <div className="absolute top-2 left-2 w-6 h-6 bg-yellow-600 rounded-full"></div>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700">
                        MUSTARD OIL
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full transform rotate-12">
                    SAVE 24%
                    <br />
                    NOW AT
                    <br />
                    ₹395
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-white rounded-lg p-4 shadow-lg transform hover:scale-105 transition-transform">
                    <div className="w-32 h-48 bg-gradient-to-b from-yellow-200 to-yellow-300 rounded-lg mb-2 relative overflow-hidden">
                      <div className="absolute top-2 left-2 w-6 h-6 bg-yellow-700 rounded-full"></div>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700">
                        SUNFLOWER OIL
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full transform rotate-12">
                    SAVE 20%
                    <br />
                    NOW AT
                    <br />
                    ₹445
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-white rounded-lg p-4 shadow-lg transform hover:scale-105 transition-transform">
                    <div className="w-32 h-48 bg-gradient-to-b from-orange-100 to-orange-200 rounded-lg mb-2 relative overflow-hidden">
                      <div className="absolute top-2 left-2 w-6 h-6 bg-orange-600 rounded-full"></div>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700">
                        GROUNDNUT OIL
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full transform rotate-12">
                    SAVE 30%
                    <br />
                    NOW AT
                    <br />
                    ₹425
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 text-yellow-300 text-6xl opacity-50">
                🎉
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Top Banner */}
   
      <HeroSection />
      <ProductGrid /> <Blog />
      {/* <FarmCreationsSection /> */}
      {/* <BlogSection /> */}
      <FarmSection />
    </div>
  );
}
