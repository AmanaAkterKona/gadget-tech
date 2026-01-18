"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import logo from "../../public/images (8).jpg";

export default function Navbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = () => {
      const authCookie = document.cookie.includes("auth=true");
      setIsLoggedIn(authCookie);
    };
    
    checkAuth();
    
    // Check auth status on route change
    window.addEventListener("focus", checkAuth);
    return () => window.removeEventListener("focus", checkAuth);
  }, []);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      // Clear cookie
      document.cookie = "auth=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
      // Clear localStorage
      localStorage.removeItem("user");
      setIsLoggedIn(false);
      alert("✅ Logged out successfully!");
      router.push("/");
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-12 lg:px-20 py-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white shadow-2xl border-b border-purple-500/20 backdrop-blur-md">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
          <Image
            src={logo}
            alt="Gadget-Tech Logo"
            fill
            className="object-contain drop-shadow-2xl rounded-full"
            priority
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent tracking-tight">
            Gadget Tech
          </span>
          <span className="text-[8px] md:text-[10px] font-semibold text-purple-300 tracking-widest -mt-1">
            INNOVATION HUB
          </span>
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6 md:space-x-8">
        <Link 
          href="/" 
          className="relative text-sm md:text-base font-semibold hover:text-purple-400 transition-colors duration-300 group"
        >
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
        </Link>
        
        <Link 
          href="/items" 
          className="relative text-sm md:text-base font-semibold hover:text-purple-400 transition-colors duration-300 group"
        >
          Items
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
        </Link>
        
        {/* Show Add Item link only when logged in */}
        {isLoggedIn && (
          <Link
            href="/add-item"
            className="relative text-sm md:text-base font-semibold text-white hover:text-purple-400 transition-colors duration-300 group"
          >
            Add Item
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
        )}
        
        {/* Conditional Login/Logout Button */}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="px-6 py-2 text-sm md:text-base font-bold bg-gradient-to-r from-red-600 to-red-700 rounded-full hover:from-red-500 hover:to-red-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/50 flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout
          </button>
        ) : (
          <Link 
            href="/login" 
            className="px-6 py-2 text-sm md:text-base font-bold bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/50 flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}