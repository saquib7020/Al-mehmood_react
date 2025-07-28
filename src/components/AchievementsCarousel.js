import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, Trophy, Star } from 'lucide-react';

const AchievementsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const achievements = [
    {
      id: 1,
      title: "Almehmood International School was awarded as the Most Trusted Education Brand by Big Impact Awards 2025",
      badge: "Most Trusted Education Brand 2025",
      organization: "Big Impact Awards",
      year: "2025",
      // Replace with your image URL: imageUrl: "/path/to/your/image.jpg"
      imageUrl: null,
      category: "trust"
    },
    {
      id: 2,
      title: "Almehmood International Schools was awarded as the Most Respected Education Brand in India 2024-25 by Education World",
      badge: "Most Respected Education Brand India 2024-25",
      organization: "Education World",
      year: "2024-25",
      // Replace with your image URL: imageUrl: "/path/to/your/image.jpg"
      imageUrl: null,
      category: "respect"
    },
    {
      id: 3,
      title: "Almehmood International School was awarded the Most Trusted Brands of India 2024-25 by Marksmen Daily",
      badge: "Most Trusted Brands of India 2024-25",
      organization: "Marksmen Daily",
      year: "2024-25",
      // Replace with your image URL: imageUrl: "/path/to/your/image.jpg"
      imageUrl: null,
      category: "brand"
    },
    {
      id: 4,
      title: "Almehmood Education Network has been recognised as the Best Education Brands 2024 by The Economic Times",
      badge: "Best Education Brands 2024",
      organization: "The Economic Times",
      year: "2024",
      // Replace with your image URL: imageUrl: "/path/to/your/image.jpg"
      imageUrl: null,
      category: "excellence"
    }
  ];

  // Auto-run functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === achievements.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [achievements.length]);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === achievements.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? achievements.length - 1 : currentIndex - 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getPlaceholderIcon = (category) => {
    switch(category) {
      case "trust":
        return <Trophy className="w-16 h-16 md:w-20 md:h-20 text-yellow-500" />;
      case "respect":
        return <Award className="w-16 h-16 md:w-20 md:h-20 text-blue-500" />;
      case "brand":
        return <Star className="w-16 h-16 md:w-20 md:h-20 text-purple-500" />;
      case "excellence":
        return <Award className="w-16 h-16 md:w-20 md:h-20 text-red-500" />;
      default:
        return <Trophy className="w-16 h-16 md:w-20 md:h-20 text-gray-500" />;
    }
  };

  const getCategoryColors = (category) => {
    switch(category) {
      case "trust":
        return {
          bg: "from-yellow-50 to-amber-50",
          badge: "from-yellow-500 to-amber-600",
          text: "text-yellow-600"
        };
      case "respect":
        return {
          bg: "from-blue-50 to-indigo-50",
          badge: "from-blue-500 to-indigo-600",
          text: "text-blue-600"
        };
      case "brand":
        return {
          bg: "from-purple-50 to-pink-50",
          badge: "from-purple-500 to-pink-600",
          text: "text-purple-600"
        };
      case "excellence":
        return {
          bg: "from-red-50 to-rose-50",
          badge: "from-red-500 to-rose-600",
          text: "text-red-600"
        };
      default:
        return {
          bg: "from-gray-50 to-slate-50",
          badge: "from-gray-500 to-slate-600",
          text: "text-gray-600"
        };
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-gray-100 py-8 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3 md:mb-4">
            Our Achievements
          </h2>
          <p className="text-gray-600 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            We are honoured to be recognised for our commitment to educational excellence
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white group"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-purple-600 transition-colors" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white group"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-purple-600 transition-colors" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden mx-8 md:mx-16">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {achievements.map((achievement, index) => {
                const colors = getCategoryColors(achievement.category);
                return (
                  <div key={achievement.id} className="w-full flex-shrink-0 px-2 md:px-4">
                    <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full transform hover:scale-[1.02]">
                      {/* Badge */}
                      <div className={`bg-gradient-to-r ${colors.badge} text-white px-4 md:px-6 py-3 md:py-4`}>
                        <div className="text-center">
                          <p className="text-sm md:text-base lg:text-lg font-semibold leading-tight">
                            {achievement.badge}
                          </p>
                          <p className="text-xs md:text-sm opacity-90 mt-1">
                            {achievement.organization}
                          </p>
                        </div>
                      </div>
                      
                      {/* Image/Icon Container */}
                      <div className={`bg-gradient-to-br ${colors.bg} p-8 md:p-12 lg:p-16 min-h-[200px] md:min-h-[280px] lg:min-h-[320px] flex items-center justify-center`}>
                        {achievement.imageUrl ? (
                          <div className="relative w-full max-w-xs mx-auto">
                            <img 
                              src={achievement.imageUrl} 
                              alt={achievement.badge}
                              className="w-full h-auto object-contain rounded-lg shadow-md"
                            />
                          </div>
                        ) : (
                          <div className="text-center space-y-3 md:space-y-4">
                            <div className="flex justify-center">
                              {getPlaceholderIcon(achievement.category)}
                            </div>
                            <div className={`${colors.text} font-bold text-lg md:text-xl lg:text-2xl`}>
                              {achievement.year}
                            </div>
                            <div className="text-gray-500 text-sm md:text-base">
                              Add your certificate/trophy image here
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="p-4 md:p-6 lg:p-8">
                        <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed text-center">
                          {achievement.title}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2 md:space-x-3">
            {achievements.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 md:mt-12">
          <button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <span className="flex items-center justify-center space-x-2">
              <span>View All Achievements</span>
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AchievementsCarousel;