import React from 'react';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';

const PopularItems = () => {
  const items = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      category: "Smartphone",
      price: 1299,
      originalPrice: 1499,
      rating: 4.9,
      reviews: 2847,
      image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=500&q=80",
      badge: "Best Seller",
      discount: "13% OFF"
    },
    {
      id: 2,
      name: "MacBook Pro M3",
      category: "Laptop",
      price: 2499,
      originalPrice: 2899,
      rating: 4.8,
      reviews: 1923,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80",
      badge: "New Arrival",
      discount: "14% OFF"
    },
    {
      id: 3,
      name: "Sony WH-1000XM5",
      category: "Headphones",
      price: 399,
      originalPrice: 449,
      rating: 4.7,
      reviews: 3421,
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&q=80",
      badge: "Trending",
      discount: "11% OFF"
    },
    {
      id: 4,
      name: "iPad Air 2024",
      category: "Tablet",
      price: 799,
      originalPrice: 899,
      rating: 4.8,
      reviews: 1654,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80",
      badge: "Hot Deal",
      discount: "11% OFF"
    },
    {
      id: 5,
      name: "Apple Watch Ultra 2",
      category: "Smartwatch",
      price: 849,
      originalPrice: 949,
      rating: 4.9,
      reviews: 2156,
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80",
      badge: "Premium",
      discount: "11% OFF"
    },
    {
      id: 6,
      name: "AirPods Pro 2",
      category: "Earbuds",
      price: 249,
      originalPrice: 279,
      rating: 4.8,
      reviews: 4532,
      image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&q=80",
      badge: "Best Value",
      discount: "11% OFF"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-slate-900 to-purple-900/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-full text-purple-300 text-sm font-semibold border border-purple-500/30">
              Customer Favorites
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Popular{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our most loved gadgets, handpicked by tech enthusiasts worldwide
          </p>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative bg-gradient-to-br from-slate-800/80 to-purple-900/30 backdrop-blur-xl rounded-3xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 overflow-hidden"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full shadow-lg">
                  {item.badge}
                </span>
              </div>

              {/* Discount Badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg">
                  {item.discount}
                </span>
              </div>

              {/* Quick Actions */}
              <div className="absolute top-16 right-4 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-purple-500 transition-colors duration-300">
                  <Heart className="w-5 h-5 text-white" />
                </button>
                <button className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-purple-500 transition-colors duration-300">
                  <Eye className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden rounded-t-3xl bg-gradient-to-br from-purple-900/20 to-pink-900/20">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <span className="text-purple-400 text-sm font-semibold uppercase tracking-wider">
                  {item.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {item.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(item.rating)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">
                    {item.rating} ({item.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    ${item.price}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    ${item.originalPrice}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2 group/btn">
                  <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" />
                  Add to Cart
                </button>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="group relative px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/60 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              View All Products
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularItems;