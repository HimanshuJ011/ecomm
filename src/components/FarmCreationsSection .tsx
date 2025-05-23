import React from 'react';

const FarmCreationsSection = () => {
  const categories = [
    {
      title: "GHEE",
      image: "/ghee.webp",
      alt: "Ghee being poured from a spoon"
    },
    {
      title: "BREAKFAST & SNACKS",
      image: "/gudd.webp", 
      alt: "Breakfast spreads and snacks"
    },
    {
      title: "KITCHEN ESSENTIALS",
      image: "/ladduu.webp",
      alt: "Kitchen essentials and spices"
    },
    {
      title: "HEALTHY SNACKING",
      image: "/roti.webp",
      alt: "Healthy snacks and nuts"
    },
    {
      title: "NATURAL SWEETENERS",
      image: "/dough.webp",
      alt: "Natural sweeteners and honey"
    }
  ];

  return (
    <div className="w-full">
      {/* Main Section */}
      <div className="bg-gradient-to-b from-blue-100 to-blue-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-orange-300 rounded-full"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-wider">
                YOUR FARM CREATIONS
              </h2>
            </div>
          </div>

          {/* Product Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  {/* Image Container */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  {/* Title */}
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-gray-800 text-sm tracking-wide">
                      {category.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative wheat stalks */}
        <div className="absolute right-0 bottom-0 opacity-20">
          <svg width="200" height="300" viewBox="0 0 200 300" className="text-yellow-500">
            <path d="M50 250 Q60 200 70 150 Q80 100 90 50" stroke="currentColor" strokeWidth="3" fill="none"/>
            <path d="M70 250 Q80 200 90 150 Q100 100 110 50" stroke="currentColor" strokeWidth="3" fill="none"/>
            <path d="M90 250 Q100 200 110 150 Q120 100 130 50" stroke="currentColor" strokeWidth="3" fill="none"/>
            <path d="M110 250 Q120 200 130 150 Q140 100 150 50" stroke="currentColor" strokeWidth="3" fill="none"/>
          </svg>
        </div>
      </div>

      {/* Bottom Decorative Section with Buffalo */}
      <div className="relative bg-gradient-to-r from-green-400 to-green-500 h-32 overflow-hidden">
        {/* Buffalo Silhouettes */}
        <div className="absolute left-8 bottom-4">
          <svg width="120" height="60" viewBox="0 0 120 60" className="text-gray-700 opacity-70">
            <ellipse cx="20" cy="50" rx="15" ry="8" fill="currentColor"/>
            <path d="M5 45 Q10 35 20 35 Q35 35 45 40 Q50 42 55 45 Q60 48 65 50 Q60 55 50 55 Q35 55 20 52 Q10 50 5 45Z" fill="currentColor"/>
            <circle cx="15" cy="42" r="2" fill="currentColor"/>
            <path d="M12 38 Q14 36 16 38" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M18 38 Q20 36 22 38" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>

        <div className="absolute right-8 bottom-4">
          <svg width="100" height="50" viewBox="0 0 100 50" className="text-gray-700 opacity-70">
            <ellipse cx="15" cy="42" rx="12" ry="6" fill="currentColor"/>
            <path d="M3 38 Q8 30 15 30 Q28 30 38 34 Q42 36 46 38 Q50 40 54 42 Q50 46 42 46 Q28 46 15 44 Q8 42 3 38Z" fill="currentColor"/>
            <circle cx="12" cy="35" r="1.5" fill="currentColor"/>
            <path d="M9 32 Q11 30 13 32" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M15 32 Q17 30 19 32" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>

        {/* Grass/Ground texture */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-green-600 opacity-30"></div>
    
      </div>
    </div>
  );
};

export default FarmCreationsSection;