import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="bg-[#fcfbe6] py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-gray-600 tracking-widest uppercase">
              Food & Health
            </p>
            <h2 className="text-3xl font-bold text-green-900 mt-2">Blogs</h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Side - Featured Blog */}
            <div className="col-span-1 lg:col-span-2 flex flex-col md:flex-row gap-6 items-center lg:items-start">
              <img
                src="/ladduu.webp"
                alt="Ragi Flour"
                className="w-full md:w-1/2 object-cover rounded-md shadow-md"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Is Ragi Good for Weight Loss? How This Ancient Grain Helps
                  Burn Fat
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  When you think of weight-loss superfoods, your mind probably
                  goes straight to oats, quinoa...
                </p>
                <button className="bg-yellow-100 text-green-900 font-medium px-4 py-2 rounded-md shadow">
                  READ MORE
                </button>
              </div>
            </div>

            {/* Right Side - Other Blogs */}
            <div className="space-y-6">
              {/* Blog Card 1 */}
              <div className="flex items-start gap-4">
                <img
                  src="/roti.webp"
                  alt="Groundnut Oil"
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h4 className="font-medium text-green-900 text-sm">
                    5 Ways to Cook with Groundnut Oil for Maximum Health
                    Benefits
                  </h4>
                  <p className="text-xs text-gray-600 line-clamp-2 mt-1">
                    If you’re anything like me, you’ve probably found yourself
                    juggling between different cooking oils...
                  </p>
                  <button className="bg-yellow-100 text-green-900 text-xs font-semibold mt-2 px-3 py-1 rounded">
                    READ MORE
                  </button>
                </div>
              </div>

              {/* Blog Card 2 */}
              <div className="flex items-start gap-4">
                <img
                  src="/ghee.webp"
                  alt="Khapli Atta"
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h4 className="font-medium text-green-900 text-sm">
                    Why Khapli Atta is Better for Diabetics Than Regular Wheat
                    Flour
                  </h4>
                  <p className="text-xs text-gray-600 line-clamp-2 mt-1">
                    Introduction: Diabetes is a growing health concern
                    worldwide, with millions of people struggling...
                  </p>
                  <button className="bg-yellow-100 text-green-900 text-xs font-semibold mt-2 px-3 py-1 rounded">
                    READ MORE
                  </button>
                </div>
              </div>

              {/* Blog Card 3 */}
              <div className="flex items-start gap-4">
                <img
                  src="/dough.webp"
                  alt="Moringa Powder"
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h4 className="font-medium text-green-900 text-sm">
                    5 Creative Ways to Add Moringa Powder to Your Daily Diet
                  </h4>
                  <p className="text-xs text-gray-600 line-clamp-2 mt-1">
                    Moringa powder, derived from the leaves of the Moringa
                    oleifera tree, has garnered attention...
                  </p>
                  <button className="bg-yellow-100 text-green-900 text-xs font-semibold mt-2 px-3 py-1 rounded">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
