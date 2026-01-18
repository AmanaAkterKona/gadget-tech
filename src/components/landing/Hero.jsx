"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import banner1 from "../../../public/ico6.jpg"
import banner2 from "../../../public/ico2.jpg"
import banner3 from "../../../public/gadget5.jpg"
import banner4 from "../../../public/ico3.jpg"

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const slides = [
    {
      image: banner1,
      title: "Welcome to Gadget-Tech",
      subtitle: "Discover Innovation at Your Fingertips",
      description: "Experience the future of technology"
    },
    {
      image: banner2,
      title: "Premium Gadgets",
      subtitle: "Quality You Can Trust",
      description: "From smartphones to smart homes"
    },
    {
      image: banner3,
      title: "Latest Technology",
      subtitle: "Stay Ahead of the Curve",
      description: "Cutting-edge devices that redefine possibilities"
    },
    {
      image: banner4,
      title: "Exclusive Deals",
      subtitle: "Best Prices Guaranteed",
      description: "Unbeatable offers on top tech brands"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] w-full overflow-hidden bg-black">
      {/* Slides Container */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentSlide
                ? 'opacity-100 scale-100 z-10'
                : 'opacity-0 scale-110 z-0'
            }`}
          >
            {/* Background Image - Clear and Bright */}
            <div className="absolute inset-0">
              <div 
                className="relative h-full w-full"
                style={{
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                  transition: 'transform 0.3s ease-out'
                }}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover brightness-110"
                  priority={index === 0}
                  quality={100}
                />
              </div>
              
              {/* Subtle bottom gradient only */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* 3D Floating Content */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="max-w-4xl">
                  {/* Title with 3D Effect */}
                  <div
                    className={`transform transition-all duration-1000 delay-200 ${
                      index === currentSlide
                        ? 'translate-x-0 translate-y-0 opacity-100'
                        : '-translate-x-20 translate-y-10 opacity-0'
                    }`}
                    style={{
                      transform: index === currentSlide 
                        ? `perspective(1000px) rotateY(${mousePosition.x * 0.1}deg) rotateX(${-mousePosition.y * 0.1}deg)`
                        : undefined,
                      transition: 'all 0.3s ease-out'
                    }}
                  >
                    <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight drop-shadow-2xl"
                        style={{
                          textShadow: '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(59, 130, 246, 0.3), 4px 4px 8px rgba(0,0,0,0.8)'
                        }}>
                      {slide.title}
                    </h1>
                  </div>
                  
                  {/* Subtitle with Glass Effect */}
                  <div
                    className={`transform transition-all duration-1000 delay-300 ${
                      index === currentSlide
                        ? 'translate-x-0 opacity-100'
                        : '-translate-x-20 opacity-0'
                    }`}
                  >
                    <div className="inline-block px-8 py-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl mb-6">
                      <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        {slide.subtitle}
                      </h2>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div
                    className={`transform transition-all duration-1000 delay-400 ${
                      index === currentSlide
                        ? 'translate-x-0 opacity-100'
                        : '-translate-x-20 opacity-0'
                    }`}
                  >
                    <p className="text-xl md:text-2xl text-white font-medium mb-10 drop-shadow-lg"
                       style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                      {slide.description}
                    </p>
                  </div>
                  
                  {/* Buttons with 3D Effect */}
                  <div
                    className={`transform transition-all duration-1000 delay-500 ${
                      index === currentSlide
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-20 opacity-0'
                    }`}
                  >
                    <div className="flex flex-wrap gap-6">
                      <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/60 overflow-hidden">
                        <span className="relative z-10">Explore Now</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                      <button className="px-10 py-5 bg-white/10 backdrop-blur-xl border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 hover:shadow-2xl">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Particles */}
            {index === currentSlide && (
              <>
                <div className="absolute top-20 left-20 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                <div className="absolute top-40 right-32 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-32 left-40 w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows with 3D */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-white/15 hover:bg-white/25 backdrop-blur-xl rounded-full flex items-center justify-center transition-all duration-300 hover:scale-125 group z-20 shadow-2xl border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-125 transition-transform drop-shadow-lg" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-white/15 hover:bg-white/25 backdrop-blur-xl rounded-full flex items-center justify-center transition-all duration-300 hover:scale-125 group z-20 shadow-2xl border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-125 transition-transform drop-shadow-lg" />
      </button>

      {/* Enhanced Dots Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20 bg-black/20 backdrop-blur-xl px-6 py-4 rounded-full border border-white/20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentSlide
                ? 'w-16 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/50'
                : 'w-4 h-4 bg-white/40 hover:bg-white/70 hover:scale-125'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/10 z-20">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-6000 ease-linear"
          style={{ 
            width: isAnimating ? '0%' : '100%',
            transition: isAnimating ? 'none' : 'width 6000ms linear'
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;