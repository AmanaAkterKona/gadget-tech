import React from 'react';
import { Zap, Shield, Truck, Headphones, Award, Sparkles } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Delivery",
      description: "Get your gadgets delivered within 24-48 hours with our express shipping service",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "Shop with confidence using our encrypted payment gateway and buyer protection",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders above $50 with real-time tracking",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our expert team is always ready to assist you with any queries or concerns",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "100% authentic products with manufacturer warranty and quality assurance",
      color: "from-red-400 to-rose-500"
    },
    {
      icon: Sparkles,
      title: "Latest Technology",
      description: "Stay ahead with cutting-edge gadgets and the newest tech innovations",
      color: "from-indigo-400 to-purple-500"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-md rounded-full text-purple-300 text-sm font-semibold border border-purple-500/30">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Premium{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the best online shopping with our exclusive features designed for tech enthusiasts
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
              >
                {/* Icon Container */}
                <div className={`inline-flex p-4 bg-gradient-to-br ${feature.color} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>

                {/* Floating Particles on Hover */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/60 overflow-hidden">
            <span className="relative z-10">Explore All Features</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;