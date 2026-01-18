import React from "react";
import Link from "next/link";
import { ArrowRight, Shield, Zap, Award } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1920&q=80"
          alt="Tech Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/70 to-black/80"></div>
      </div>

      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-pink-500 rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 text-center z-10">
        {/* Glowing Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-500/30 shadow-2xl shadow-purple-500/20">
          <span className="text-purple-300 text-sm md:text-base font-bold tracking-wide">
            🔥 Limited Time Offer - Save Up to 30%
          </span>
        </div>

        {/* Main Heading with Gradient */}
        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight drop-shadow-2xl">
          Ready to Upgrade Your{" "}
          <span className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
            Tech Experience?
          </span>
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed drop-shadow-lg">
          Join thousands of satisfied customers and discover premium gadgets that redefine innovation. 
          Your perfect tech companion awaits.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <Link
            href="/items"
            className="group relative px-12 py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg
            hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/60 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Browse Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <Link
            href="/contact"
            className="px-12 py-5 rounded-2xl border-2 border-purple-500 text-white font-bold text-lg
            hover:bg-purple-500 hover:border-purple-400 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/40 backdrop-blur-xl"
          >
            Contact Us
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-slate-800/60 to-purple-900/40 backdrop-blur-xl rounded-2xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:scale-105 shadow-xl">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <p className="text-white font-semibold drop-shadow-lg">Secure Checkout</p>
          </div>

          <div className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-slate-800/60 to-purple-900/40 backdrop-blur-xl rounded-2xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:scale-105 shadow-xl">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <p className="text-white font-semibold drop-shadow-lg">Fast Delivery</p>
          </div>

          <div className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-slate-800/60 to-purple-900/40 backdrop-blur-xl rounded-2xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:scale-105 shadow-xl">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            <p className="text-white font-semibold drop-shadow-lg">Trusted by 50K+</p>
          </div>
        </div>

        {/* Additional Trust Line */}
        <div className="mt-12 flex items-center justify-center gap-3 text-purple-200 text-sm md:text-base drop-shadow-lg">
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
          <p>100% Money-Back Guarantee • Free Returns • 24/7 Support</p>
          <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></span>
        </div>
      </div>

      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
    </section>
  );
};

export default CTA;