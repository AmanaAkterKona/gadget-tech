import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Tech Enthusiast",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
      rating: 5,
      review: "Absolutely amazing experience! The quality of products is outstanding and the delivery was super fast. I've recommended Gadget Tech to all my friends and family.",
      product: "iPhone 15 Pro Max",
      verified: true
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Software Developer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
      rating: 5,
      review: "Best online tech store I've ever used! The MacBook Pro arrived perfectly packaged and the customer service team was incredibly helpful throughout the process.",
      product: "MacBook Pro M3",
      verified: true
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Content Creator",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
      rating: 5,
      review: "The shopping experience was seamless from start to finish. Great prices, authentic products, and excellent customer support. Will definitely shop here again!",
      product: "Sony WH-1000XM5",
      verified: true
    },
    {
      id: 4,
      name: "David Kim",
      role: "Photographer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
      rating: 5,
      review: "I'm impressed by the attention to detail and quality assurance. Every product I've purchased has exceeded my expectations. Highly recommend this store!",
      product: "iPad Air 2024",
      verified: true
    },
    {
      id: 5,
      name: "Jessica Taylor",
      role: "Fitness Coach",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80",
      rating: 5,
      review: "The Apple Watch Ultra 2 I ordered arrived the next day! Amazing service and the product quality is top-notch. Best tech shopping experience ever.",
      product: "Apple Watch Ultra 2",
      verified: true
    },
    {
      id: 6,
      name: "Alex Thompson",
      role: "Music Producer",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&q=80",
      rating: 5,
      review: "Outstanding quality and unbeatable prices! The AirPods Pro sound incredible and the whole purchasing process was smooth and hassle-free. Five stars!",
      product: "AirPods Pro 2",
      verified: true
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-purple-900/20 via-slate-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-full text-purple-300 text-sm font-semibold border border-purple-500/30">
              Customer Reviews
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            What Our{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their tech needs
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-gradient-to-br from-slate-800/80 to-purple-900/30 backdrop-blur-xl rounded-3xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 p-8 h-full min-h-[400px] flex flex-col"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-purple-400" />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                "{testimonial.review}"
              </p>

              {/* Product Tag */}
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-semibold rounded-full border border-purple-500/30">
                  {testimonial.product}
                </span>
              </div>

              {/* Customer Info */}
              <div className="flex items-center gap-4 mt-auto">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-purple-500/50 group-hover:ring-purple-400 transition-all duration-300">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Verified Badge */}
                  {testimonial.verified && (
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center border-2 border-slate-800">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Name & Role */}
                <div>
                  <h4 className="text-white font-bold text-lg group-hover:text-purple-300 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 pointer-events-none"></div>

              {/* Floating Particle */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              50K+
            </div>
            <p className="text-gray-400 font-semibold">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              4.9
            </div>
            <p className="text-gray-400 font-semibold">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              100K+
            </div>
            <p className="text-gray-400 font-semibold">Products Sold</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <p className="text-gray-400 font-semibold">Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;