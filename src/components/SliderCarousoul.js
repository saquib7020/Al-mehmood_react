import React, { useState, useEffect, useRef } from 'react';
import { Menu, MessageCircle, HelpCircle, Home, ChevronLeft, ChevronRight, Star, Users, Award, Zap, RefreshCw, AlertCircle } from 'lucide-react';
import BASE_URL from '../config';

export default function EnhancedSchoolHighlightsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const sliderRef = useRef(null);

  // Default slides as fallback
  // const defaultSlides = [
  //   {
  //     title: "Sensory Spa",
  //     description: "A tranquil space for preschool students where they embark on a journey of self-discovery, nurturing emotional and sensory development in a serene, safe environment.",
  //     bgColor: "from-blue-900 via-cyan-800 to-teal-900",
  //     accentColor: "from-cyan-400 to-blue-500",
  //     icon: "🧘‍♀️",
  //     stats: "Ages 3-6",
  //     features: ["Sensory Play", "Mindfulness", "Safe Space"]
  //   },
  //   {
  //     title: "Science Laboratory",
  //     description: "State-of-the-art labs equipped with modern instruments where students explore physics, chemistry, and biology through hands-on experiments and interactive learning.",
  //     bgColor: "from-green-900 via-emerald-800 to-forest-900",
  //     accentColor: "from-emerald-400 to-green-500",
  //     icon: "🔬",
  //     stats: "Grades 6-12",
  //     features: ["Modern Equipment", "Interactive Learning", "Research Projects"]
  //   },
  //   {
  //     title: "Art Studio",
  //     description: "A creative haven where young artists express themselves through various mediums, nurturing creativity and imagination with professional-grade tools and guidance.",
  //     bgColor: "from-purple-900 via-pink-800 to-rose-900",
  //     accentColor: "from-pink-400 to-purple-500",
  //     icon: "🎨",
  //     stats: "All Ages",
  //     features: ["Digital Art", "Traditional Media", "Gallery Exhibitions"]
  //   },
  //   {
  //     title: "Sports Complex",
  //     description: "Comprehensive sports facilities promoting physical fitness and team spirit, where students develop discipline, leadership skills, and healthy competitive spirit.",
  //     bgColor: "from-orange-900 via-red-800 to-amber-900",
  //     accentColor: "from-orange-400 to-red-500",
  //     icon: "⚽",
  //     stats: "All Grades",
  //     features: ["Multi-Sports", "Team Building", "Fitness Programs"]
  //   }
  // ];

  // API configuration
  // const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  // Fetch slides from API
  const fetchSlides = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`${BASE_URL}/slides`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // if (data && data.length > 0) {
        setSlides(data);
      // } else {
      //   // Use default slides if no data from API
      //   setSlides(defaultSlides);
      // }
    } catch (err) {
      console.error('Error fetching slides:', err);
      setError(err.message);
      // Use default slides as fallback
      // setSlides(defaultSlides);
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchSlides();
    setIsLoaded(true);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying && slides.length > 0) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Touch handling
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  // Navigation functions
  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  // Render slide image
  const renderSlideImage = (slide) => {
    return (
      <div className={`relative h-48 sm:h-56 md:h-64 bg-gradient-to-br ${slide.bgColor} overflow-hidden`}>
        {/* If there's an uploaded image, show it */}
        {slide.image && (
          <img 
            src={slide.image} 
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        
        {/* Gradient overlay (reduced opacity) */}
        <div className={`absolute inset-0 bg-gradient-to-t ${slide.accentColor} opacity-10`}></div>
        
        {/* Feature badges */}
        <div className="absolute bottom-3 left-3 right-3 flex justify-center space-x-1">
          {slide.features && slide.features.slice(0, 2).map((feature, idx) => (
            <span key={idx} className="px-2 py-1 bg-black/30 backdrop-blur-sm text-white text-xs rounded-full">
              {feature}
            </span>
          ))}
        </div>
      </div>
    );
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 text-purple-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading school highlights...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error && slides.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Unable to load slides</h3>
          <p className="text-gray-600 mb-4">There was an error loading the school highlights. Please try again later.</p>
          <button 
            onClick={fetchSlides}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Error notification */}
      {error && (
        <div className="absolute top-4 left-4 right-4 z-50 bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded-lg shadow-lg">
          <div className="flex items-center">
            <AlertCircle className="w-4 h-4 mr-2" />
            <span className="text-sm">Using default slides due to API error: {error}</span>
            <button 
              onClick={fetchSlides}
              className="ml-auto px-2 py-1 bg-yellow-200 hover:bg-yellow-300 rounded text-xs"
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {/* Enhanced Title Section */}
      <div className="px-4 py-8 text-center">
        <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-light text-gray-800 leading-relaxed mb-2">
            Key Highlights of our
          </h2>
          <h3 className="text-3xl sm:text-4xl font-light bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            School
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-4"></div>
        </div>
      </div>

      {/* Enhanced Slider Container */}
      <div 
        className="relative py-6 px-4"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        ref={sliderRef}
      >
        <div className="flex justify-center items-center min-h-[400px] sm:min-h-[450px]">
          {slides.map((slide, index) => {
            const offset = index - currentSlide;
            const isActive = index === currentSlide;
            const isVisible = Math.abs(offset) <= 2;
            
            if (!isVisible) return null;
            
            return (
              <div
                key={slide._id || index}
                className={`absolute transition-all duration-700 ease-out cursor-pointer ${
                  isActive 
                    ? 'z-30 scale-100 opacity-100' 
                    : Math.abs(offset) === 1
                      ? 'z-20 scale-90 opacity-70'
                      : 'z-10 scale-75 opacity-40'
                }`}
                style={{
                  transform: `translateX(${offset * (window.innerWidth > 640 ? 300 : 280)}px) scale(${isActive ? 1 : Math.abs(offset) === 1 ? 0.9 : 0.75})`,
                }}
                onClick={() => !isActive && goToSlide(index)}
              >
                <div className={`bg-white rounded-3xl shadow-xl overflow-hidden w-72 sm:w-80 transform transition-all duration-300 hover:shadow-2xl ${
                  isActive ? 'hover:scale-105' : 'hover:scale-95'
                } border border-gray-100`}>
                  {renderSlideImage(slide)}
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">{slide.title}</h3>
                      <span className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-xs font-medium text-gray-700">
                        {slide.stats}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed text-sm mb-4 line-clamp-3">
                      {slide.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {slide.features && slide.features.map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 rounded-lg text-xs text-gray-600">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    {isActive && (
<button className={`w-full py-2 px-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 transform hover:scale-105`}>
                      Learn More
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Enhanced Slide Indicators */}
      <div className="flex justify-center space-x-3 py-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? 'w-8 h-3 bg-gradient-to-r from-purple-500 to-pink-500' 
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Refresh button */}
      <button
        onClick={fetchSlides}
        className="fixed bottom-4 right-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-3 shadow-lg transition-all duration-200 z-40"
        aria-label="Refresh slides"
      >
        <RefreshCw className="w-5 h-5" />
      </button>
    </div>
  );
}