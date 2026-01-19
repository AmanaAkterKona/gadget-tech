import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Heart, Github } from 'lucide-react';
import Link from 'next/link';
import logo from "../../public/images (8).jpg"
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-purple-900/30 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <Link href="/" className="inline-flex items-center gap-2 md:gap-3 group mb-6">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 flex-shrink-0">
                <Image
                  src={logo}
                  alt="Gadget-Tech Logo"
                  fill
                  className="object-contain drop-shadow-2xl rounded-full"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl md:text-2xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent tracking-tight">
                  Gadget Tech
                </span>
                <span className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold text-purple-300 tracking-widest -mt-0.5 md:-mt-1">
                  INNOVATION HUB
                </span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
              Your trusted destination for premium gadgets and cutting-edge technology. Experience innovation at your fingertips.
            </p>
            
            {/* Social Links - Updated with real links */}
            <div className="flex gap-3 justify-center sm:justify-start">
              <a 
                href="https://github.com/AmanaAkterKona" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-slate-800 to-purple-900/50 backdrop-blur-xl rounded-xl flex items-center justify-center border border-purple-500/30 hover:border-purple-500 hover:scale-110 transition-all duration-300 group"
              >
                <Github className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
              </a>
              <a 
                href="https://www.linkedin.com/in/amena-akter-kona/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-slate-800 to-purple-900/50 backdrop-blur-xl rounded-xl flex items-center justify-center border border-purple-500/30 hover:border-purple-500 hover:scale-110 transition-all duration-300 group"
              >
                <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
              </a>
              <a 
                href="mailto:proff.kona@gmail.com"
                className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-slate-800 to-purple-900/50 backdrop-blur-xl rounded-xl flex items-center justify-center border border-purple-500/30 hover:border-purple-500 hover:scale-110 transition-all duration-300 group"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 inline-flex items-center gap-2 group text-sm md:text-base">
                  <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/items" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 inline-flex items-center gap-2 group text-sm md:text-base">
                  <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/add-item" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 inline-flex items-center gap-2 group text-sm md:text-base">
                  <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                  Add Item
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 inline-flex items-center gap-2 group text-sm md:text-base">
                  <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 inline-flex items-center gap-2 group text-sm md:text-base">
                  <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">Customer Service</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="/shipping" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 inline-flex items-center gap-2 group text-sm md:text-base">
                  <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 inline-flex items-center gap-2 group text-sm md:text-base">
                  <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 inline-flex items-center gap-2 group text-sm md:text-base">
                  <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                  Warranty Policy
                </Link>
              </li>
              <li>
                              <li>
                <Link href="/#faq" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 inline-flex items-center gap-2 group text-sm md:text-base">
                  <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                  FAQ
                </Link>
              </li>

              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 inline-flex items-center gap-2 group text-sm md:text-base">
                  <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">Get in Touch</h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-3 text-gray-400 justify-center sm:justify-start text-sm md:text-base">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-purple-400 mt-0.5 md:mt-1 flex-shrink-0" />
                <span className="text-left">123 Tech Street, Silicon Valley, CA 94025</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors duration-300 justify-center sm:justify-start text-sm md:text-base">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-purple-400 flex-shrink-0" />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors duration-300 justify-center sm:justify-start text-sm md:text-base">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-purple-400 flex-shrink-0" />
                <a href="mailto:proff.kona@gmail.com">proff.kona@gmail.com</a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-gray-400 text-xs md:text-sm mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2 max-w-md mx-auto sm:mx-0">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 md:px-4 py-2 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-300 text-sm md:text-base"
                />
                <button className="px-3 md:px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-105 flex-shrink-0">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/20 py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-gray-400 text-xs md:text-sm text-center md:text-left order-2 md:order-1">
              © {new Date().getFullYear()} Gadget Tech. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm order-1 md:order-2">
              <span>Made with</span>
              <Heart className="w-3 h-3 md:w-4 md:h-4 text-pink-500 fill-pink-500 animate-pulse" />
              <span>by Amena Akter Kona</span>
            </div>

            <div className="flex gap-4 md:gap-6 text-xs md:text-sm order-3">
              <Link href="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}