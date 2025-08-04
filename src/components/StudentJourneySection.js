import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Loader2, AlertCircle, Sparkles } from 'lucide-react';
import BASE_URL from '../config';

const StudentJourneySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [journeyData, setJourneyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  // Enhanced mock data with Al-Mahmood brand colors
  const mockData = [
    {
      _id: '1',
      title: 'Academic Excellence',
      description: 'Students engage in rigorous academic programs designed to challenge and inspire learning through innovative teaching methods and personalized attention.',
      imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=400&fit=crop&auto=format',
      bgColor: 'from-[#361E4B] via-[#8F59A0] to-[#E1C2DD]',
      textColor: 'text-white',
      label: 'Learning',
      icon: '📚'
    },
    {
      _id: '2',
      title: 'Community Building',
      description: 'Building lasting friendships and connections within our diverse student community through collaborative projects and cultural exchanges.',
      imageUrl: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=500&h=400&fit=crop&auto=format',
      bgColor: 'from-[#8F59A0] via-[#E1C2DD] to-[#FFFFFF]',
      textColor: 'text-[#361E4B]',
      label: 'Community',
      icon: '🤝'
    },
    {
      _id: '3',
      title: 'Personal Growth',
      description: 'Developing character, leadership skills, and personal values through guided experiences and mentorship programs.',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop&auto=format',
      bgColor: 'from-[#E1C2DD] via-[#8F59A0] to-[#361E4B]',
      textColor: 'text-white',
      label: 'Growth',
      icon: '🌱'
    }
  ];

  useEffect(() => {
    const fetchJourneyData = async () => {
      try {
        setLoading(true);
        
        // Real API call - this will attempt to fetch from your backend
        const res = await fetch(`${BASE_URL}/journeys`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setJourneyData(data);
        
      } catch (err) {
        console.warn('API call failed, falling back to mock data:', err.message);
        // Fallback to mock data if API fails
        setJourneyData(mockData);
        // Only set error if mock data is also unavailable
        if (mockData.length === 0) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchJourneyData();
  }, []);

  useEffect(() => {
    if (journeyData.length === 0 || isHovering) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev === journeyData.length - 1 ? 0 : prev + 1));
    }, 6000);
    
    return () => clearInterval(interval);
  }, [journeyData.length, isHovering]);

  const nextSlide = () => setCurrentIndex(prev => (prev === journeyData.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex(prev => (prev === 0 ? journeyData.length - 1 : prev - 1));
  const goToSlide = (index) => setCurrentIndex(index);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col items-center justify-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-purple-200 rounded-full animate-spin"></div>
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0" style={{ animationDuration: '0.8s' }}></div>
        </div>
        <p className="text-gray-600 mt-6 text-lg font-medium">Loading your journey...</p>
        <div className="flex space-x-1 mt-3">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-red-100">
          <AlertCircle className="text-red-500 w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Oops! Something went wrong</h3>
          <p className="text-red-600 text-center">Error: {error}</p>
          <button 
            className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors mx-auto block"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (journeyData.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📚</div>
          <p className="text-gray-600 text-lg">No journey data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] via-[#E1C2DD] to-[#8F59A0] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#E1C2DD] rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#8F59A0] rounded-full opacity-20 animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-[#361E4B] rounded-full opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 py-12">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-xl mb-8 border-2 border-[#E1C2DD]">
            <Sparkles className="w-6 h-6 text-[#8F59A0] animate-pulse" />
            <span className="text-[#361E4B] font-semibold text-lg">Al-Mahmood Student Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#361E4B] via-[#8F59A0] to-[#E1C2DD] bg-clip-text text-transparent mb-6 leading-tight">
            A Glimpse into Student Life
          </h2>
          <p className="text-xl text-[#361E4B] font-medium max-w-2xl mx-auto opacity-80">
            Discover the transformative journey at Al-Mahmood International School & Junior College
          </p>
        </div>

        {/* Mobile View */}
        <div className="block lg:hidden relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm w-12 h-12 rounded-full shadow-xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 border border-gray-100"
          >
            <ChevronLeft className="text-gray-700 w-5 h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm w-12 h-12 rounded-full shadow-xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 border border-gray-100"
          >
            <ChevronRight className="text-gray-700 w-5 h-5" />
          </button>

          <div className="overflow-hidden mx-16">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {journeyData.map((item, index) => (
                <div key={item._id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border-2 border-[#E1C2DD] hover:shadow-3xl transition-all duration-500 hover:border-[#8F59A0]">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      {item.imageUrl ? (
                        <img 
                          src={item.imageUrl} 
                          alt={item.title} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div 
                        className={`w-full h-full bg-gradient-to-br ${item.bgColor} flex flex-col items-center justify-center ${item.imageUrl ? 'hidden' : ''}`}
                        style={{ display: item.imageUrl ? 'none' : 'flex' }}
                      >
                        <div className="text-4xl mb-2">{item.icon}</div>
                        <div className={`${item.textColor} text-lg font-semibold`}>{item.label}</div>
                      </div>
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-[#361E4B] shadow-lg border border-[#E1C2DD]">
                        {item.icon} {item.label}
                      </div>
                    </div>
                    <div className="p-8 text-center bg-gradient-to-b from-white to-[#E1C2DD]/10">
                      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#361E4B] to-[#8F59A0] bg-clip-text text-transparent">{item.title}</h3>
                      <p className="text-[#361E4B] leading-relaxed font-medium opacity-90">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-3">
            {journeyData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-500 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-[#361E4B] to-[#8F59A0] w-8 shadow-lg' 
                    : 'bg-[#E1C2DD] w-3 hover:bg-[#8F59A0]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 border border-gray-100"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 border border-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          <div className="grid grid-cols-3 gap-8">
            {journeyData.map((item, index) => (
              <div 
                key={item._id} 
                className="relative cursor-pointer group"
                onClick={() => goToSlide(index)}
              >
                <div className={`bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden transition-all duration-700 ${
                  index === currentIndex 
                    ? 'ring-4 ring-[#8F59A0]/60 shadow-2xl scale-105 ring-offset-4' 
                    : 'hover:shadow-xl hover:scale-102 shadow-lg'
                } border-2 border-[#E1C2DD] hover:border-[#8F59A0]`}>
                  
                  {/* Image Section */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    {item.imageUrl ? (
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div 
                      className={`w-full h-full bg-gradient-to-br ${item.bgColor} flex flex-col items-center justify-center ${item.imageUrl ? 'hidden' : ''}`}
                      style={{ display: item.imageUrl ? 'none' : 'flex' }}
                    >
                      <div className="text-6xl mb-4 animate-bounce">{item.icon}</div>
                      <div className={`${item.textColor} text-xl font-bold`}>{item.label}</div>
                    </div>
                    
                    {/* Overlay badge */}
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-full px-5 py-3 flex items-center gap-3 shadow-xl border-2 border-[#E1C2DD]">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="font-bold text-[#361E4B] text-lg">{item.label}</span>
                    </div>
                    
                    {/* Current slide overlay */}
                    {index === currentIndex && (
                      <div className="absolute inset-0 bg-gradient-to-t from-[#361E4B]/20 via-transparent to-[#8F59A0]/10"></div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-8 bg-gradient-to-b from-white to-[#E1C2DD]/10">
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#361E4B] to-[#8F59A0] bg-clip-text text-transparent text-center">
                      {item.title}
                    </h3>
                    <p className="text-[#361E4B] leading-relaxed text-center font-medium opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12 space-x-4">
            {journeyData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-4 rounded-full transition-all duration-500 hover:scale-110 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-[#361E4B] to-[#8F59A0] w-12 shadow-lg' 
                    : 'bg-[#E1C2DD] w-4 hover:bg-[#8F59A0]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="bg-white/50 rounded-full h-2 overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-[#361E4B] to-[#8F59A0] transition-all duration-700 ease-out shadow-lg"
              style={{ width: `${((currentIndex + 1) / journeyData.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentJourneySection;