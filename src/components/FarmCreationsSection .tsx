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

  
    </div>
  );
};

export default FarmCreationsSection;