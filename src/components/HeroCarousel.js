// import React, { useEffect, useState, useCallback, useRef } from "react";
// import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
// import BASE_URL from "../config";

// const HeroSection = () => {
//   const [slides, setSlides] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isLoading, setIsLoading] = useState(true);
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);
//   const intervalRef = useRef(null);
//   const slideRef = useRef(null);

//   // Fetch slides from API
//   useEffect(() => {
//     const fetchSlides = async () => {
//       try {
//         setIsLoading(true);
//         const res = await fetch(`${BASE_URL}/slides`);
//         const data = await res.json();
//         setSlides(data);
//       } catch (err) {
//         console.error("Failed to fetch slides:", err);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchSlides();
//   }, []);

//   // Auto-slide functionality
//   useEffect(() => {
//     if (isPlaying && slides.length > 1) {
//       intervalRef.current = setInterval(() => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//       }, 5000); // Change slide every 5 seconds
//     } else {
//       clearInterval(intervalRef.current);
//     }

//     return () => clearInterval(intervalRef.current);
//   }, [isPlaying, slides.length]);

//   // Navigation functions
//   const goToSlide = useCallback((index) => {
//     setCurrentSlide(index);
//   }, []);

//   const prevSlide = useCallback(() => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   }, [slides.length]);

//   const nextSlide = useCallback(() => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   }, [slides.length]);

//   const togglePlayPause = () => {
//     setIsPlaying(!isPlaying);
//   };

//   // Touch handlers for mobile swipe
//   const handleTouchStart = (e) => {
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (!touchStart || !touchEnd) return;
    
//     const distance = touchStart - touchEnd;
//     const isLeftSwipe = distance > 50;
//     const isRightSwipe = distance < -50;

//     if (isLeftSwipe) {
//       nextSlide();
//     } else if (isRightSwipe) {
//       prevSlide();
//     }
//   };

//   // Keyboard navigation
//   useEffect(() => {
//     const handleKeyPress = (e) => {
//       if (e.key === 'ArrowLeft') prevSlide();
//       if (e.key === 'ArrowRight') nextSlide();
//       if (e.key === ' ') {
//         e.preventDefault();
//         togglePlayPause();
//       }
//     };

//     window.addEventListener('keydown', handleKeyPress);
//     return () => window.removeEventListener('keydown', handleKeyPress);
//   }, [prevSlide, nextSlide]);

//   // Loading state
//   if (isLoading) {
//     return (
//       <div className="h-[60vh] sm:h-[70vh] md:h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
//         <div className="text-center">
//           <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4"></div>
//           <p className="text-white text-lg font-medium">Loading slides...</p>
//         </div>
//       </div>
//     );
//   }

//   if (slides.length === 0) {
//     return (
//       <div className="h-[60vh] sm:h-[70vh] md:h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
//         <p className="text-white text-lg">No slides available</p>
//       </div>
//     );
//   }

//   return (
//     <section
//       id="home"
//       className="relative h-[60vh] sm:h-[70vh] md:h-screen overflow-hidden bg-black"
//       ref={slideRef}
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//     >
//       {/* Slide Container */}
//       <div className="relative h-full">
//         {slides.map((slide, index) => (
//           <div
//             key={slide.id || index}
//             className={`absolute inset-0 transition-all duration-700 ease-out ${
//               index === currentSlide
//                 ? "opacity-100 scale-100 z-10"
//                 : index === (currentSlide - 1 + slides.length) % slides.length
//                 ? "opacity-0 scale-110 z-5 -translate-x-full"
//                 : index === (currentSlide + 1) % slides.length
//                 ? "opacity-0 scale-110 z-5 translate-x-full"
//                 : "opacity-0 scale-105 z-0"
//             }`}
//           >
//             {/* Background Image */}
//             <div className="absolute inset-0 bg-black">
//               <img
//                 src={slide.image}
//                 alt={slide.title || `Slide ${index + 1}`}
//                 className="w-full h-full object-cover sm:object-center object-center"
//                 style={{
//                   objectPosition: window.innerWidth < 768 ? 'center center' : 'center center'
//                 }}
//                 loading={index === 0 ? "eager" : "lazy"}
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
//             </div>

//             {/* Content Overlay */}
//             {(slide.title || slide.subtitle) && (
//               <div className="absolute inset-0 flex items-center justify-center z-20">
//                 <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
//                   {slide.title && (
//                     <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 animate-fade-in-up leading-tight">
//                       {slide.title}
//                     </h1>
//                   )}
//                   {slide.subtitle && (
//                     <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 animate-fade-in-up animation-delay-200">
//                       {slide.subtitle}
//                     </p>
//                   )}
//                   {slide.ctaText && (
//                     <button className="bg-white text-black px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-400">
//                       {slide.ctaText}
//                     </button>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Navigation Controls */}
//       <div className="absolute top-4 right-4 z-30 flex items-center space-x-2">
//         {/* Play/Pause Button */}
//         <button
//           onClick={togglePlayPause}
//           className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
//           aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
//         >
//           {isPlaying ? (
//             <Pause className="text-white" size={16} />
//           ) : (
//             <Play className="text-white" size={16} />
//           )}
//         </button>

//         {/* Slide Counter */}
//         <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-sm border border-white/20">
//           {currentSlide + 1} / {slides.length}
//         </div>
//       </div>

//       {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
//       <div className="hidden md:block">
//         <button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-110"
//           aria-label="Previous slide"
//         >
//           <ChevronLeft className="text-white" size={24} />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-110"
//           aria-label="Next slide"
//         >
//           <ChevronRight className="text-white" size={24} />
//         </button>
//       </div>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
//         <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`transition-all duration-300 rounded-full ${
//                 index === currentSlide
//                   ? "w-8 h-2 bg-white"
//                   : "w-2 h-2 bg-white/50 hover:bg-white/70"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Progress Bar */}
//       <div className="absolute bottom-0 left-0 right-0 z-30">
//         <div className="h-1 bg-white/20">
//           <div
//             className="h-full bg-white transition-all duration-300 ease-linear"
//             style={{
//               width: `${((currentSlide + 1) / slides.length) * 100}%`,
//             }}
//           />
//         </div>
//       </div>

//       {/* Swipe Indicator for Mobile */}
//       <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 md:hidden">
//         <div className="flex items-center space-x-2 text-white/70 text-sm">
//           <div className="flex space-x-1">
//             <div className="w-1 h-1 bg-white/50 rounded-full animate-pulse"></div>
//             <div className="w-1 h-1 bg-white/50 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
//             <div className="w-1 h-1 bg-white/50 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
//           </div>
//           <span>Swipe to navigate</span>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out forwards;
//         }
        
//         .animation-delay-200 {
//           animation-delay: 0.2s;
//         }
        
//         .animation-delay-400 {
//           animation-delay: 0.4s;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HeroSection;




import React from 'react';

const HeroBanner = () => {
  return (
    <div className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(135deg, #c299d1 0%, #b794c7 30%, #d4a574 70%, #e6b566 100%)'
        }}
      />
        
      {/* Content Container */}
      <div className="relative z-20 w-full h-full flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 lg:py-16">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 lg:pr-8">
          
          {/* Main Heading */}
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 md:mb-12 drop-shadow-lg lg:drop-shadow-none">
            <span className="block">Nurturing The</span>
            <span className="block">Uniqueness Of Every</span>
            <span className="block">Student</span>
          </h1>
          
          {/* CTA Button */}
          <div className="flex justify-center lg:justify-start">
            <button 
              className="bg-white text-orange-500 px-8 py-4 rounded-full text-lg md:text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-orange-50 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30 relative z-30"
              onClick={() => console.log('Admissions clicked')}
            >
              Admissions Open For AY 2025-26
            </button>
          </div>
        </div>
        
        {/* Right Content - Students Image (All Screen Sizes) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
            {/* Student Image */}
            <img
              src="/student.png"
              alt="Student"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
        
            {/* Fallback if image fails */}
            <div className="w-full h-full bg-gradient-to-b from-gray-100 to-gray-300 rounded-xl shadow-xl hidden items-center justify-center">
              <div className="text-center text-gray-600 font-medium">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2"></div>
                <p className="text-sm">Student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-6 h-6 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-4 h-4 bg-white bg-opacity-30 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-8 h-8 bg-white bg-opacity-10 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-32 right-10 w-5 h-5 bg-white bg-opacity-25 rounded-full animate-pulse delay-500"></div>
      
      {/* Optional: Subtle Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
};

export default HeroBanner;