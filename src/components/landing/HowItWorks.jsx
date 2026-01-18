import React from 'react';
import { Search, ShoppingCart, CreditCard, Package } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      step: "01",
      title: "Browse & Discover",
      description: "Explore our extensive collection of premium gadgets and cutting-edge technology products",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: ShoppingCart,
      step: "02",
      title: "Add to Cart",
      description: "Select your favorite items and add them to your cart with just one click",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: CreditCard,
      step: "03",
      title: "Secure Checkout",
      description: "Complete your purchase using our secure payment gateway with multiple payment options",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Package,
      step: "04",
      title: "Fast Delivery",
      description: "Receive your order at your doorstep with our express shipping and real-time tracking",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-900 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-full text-purple-300 text-sm font-semibold border border-purple-500/30">
              Simple Process
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            How It{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Get your favorite gadgets in just 4 simple steps. Fast, secure, and hassle-free shopping experience
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connecting Line - Desktop Only */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-30"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative group"
                >
                  {/* Card */}
                  <div className="relative p-8 bg-gradient-to-br from-slate-800/80 to-purple-900/40 backdrop-blur-xl rounded-3xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 h-full min-h-[380px] flex flex-col">
                    
                    {/* Step Number */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                        <span className="text-2xl font-black text-white">{step.step}</span>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mt-8 mb-6 flex justify-center">
                      <div className={`p-4 bg-gradient-to-br ${step.color} bg-opacity-20 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-purple-300 transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-center leading-relaxed flex-grow">
                      {step.description}
                    </p>

                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>

                    {/* Floating Particle */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                  </div>

                  {/* Arrow Connector - Desktop Only */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-32 -right-3 z-20">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rotate-45 shadow-lg shadow-purple-500/50"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <button className="group relative px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/60 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Get Started Now
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

export default HowItWorks;