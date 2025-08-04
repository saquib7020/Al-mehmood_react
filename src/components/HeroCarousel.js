import React from 'react';

const HeroBanner = () => {
  return (
    <div className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(135deg, #361E4B 0%, #8F59A0 50%, #E1C2DD 100%)'
        }}
      />
      
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        
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
              className="bg-white px-8 py-4 rounded-full text-lg md:text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-orange-50 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30 relative z-30"
              style={{ color: '#361E4B' }}
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