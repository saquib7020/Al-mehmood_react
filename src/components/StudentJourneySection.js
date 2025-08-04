import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Loader2, AlertCircle } from 'lucide-react';
import BASE_URL from '../config';

const StudentJourneySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [journeyData, setJourneyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock data for demonstration
  const mockData = [
    {
      _id: '1',
      title: 'Academic Excellence',
      description: 'Students engage in rigorous academic programs designed to challenge and inspire learning.',
      imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop',
      bgColor: 'from-blue-400 to-purple-600',
      textColor: 'text-white',
      label: 'Learning'
    },
    {
      _id: '2',
      title: 'Community Building',
      description: 'Building lasting friendships and connections within our diverse student community.',
      imageUrl: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop',
      bgColor: 'from-green-400 to-blue-600',
      textColor: 'text-white',
      label: 'Community'
    },
    {
      _id: '3',
      title: 'Personal Growth',
      description: 'Developing character, leadership skills, and personal values through guided experiences.',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      bgColor: 'from-purple-400 to-pink-600',
      textColor: 'text-white',
      label: 'Growth'
    }
  ];

  // const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchJourneyData = async () => {
      try {
        setLoading(true);
        // Simulate API call - replace with actual API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setJourneyData(mockData);
        
        // Uncomment for real API call:
        const res = await fetch(`${BASE_URL}/journeys`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setJourneyData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJourneyData();
  }, []);

  useEffect(() => {
    if (journeyData.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev === journeyData.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [journeyData.length]);

  const nextSlide = () => setCurrentIndex(prev => (prev === journeyData.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex(prev => (prev === 0 ? journeyData.length - 1 : prev - 1));
  const goToSlide = (index) => setCurrentIndex(index);

  if (loading) {
    return (
      <div className="py-20 flex flex-col items-center">
        <Loader2 className="animate-spin text-purple-600 w-8 h-8 mb-2" />
        <p className="text-gray-600">Loading journey data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 flex flex-col items-center">
        <AlertCircle className="text-red-500 w-8 h-8 mb-2" />
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }

  if (journeyData.length === 0) {
    return (
      <div className="py-20 flex flex-col items-center">
        <p className="text-gray-600">No journey data available</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-normal mb-8 sm:mb-16 px-4" style={{ color: '#a855f7' }}>
          A Glimpse into a Student's Journey at Al-Mehmood
        </h2>

        {/* Mobile View */}
        <div className="block md:hidden relative">
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center"
          >
            <ChevronLeft className="text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center"
          >
            <ChevronRight className="text-gray-600" />
          </button>

          <div className="overflow-hidden mx-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {journeyData.map((item) => (
                <div key={item._id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      {item.imageUrl ? (
                        <img 
                          src={item.imageUrl} 
                          alt={item.title} 
                          className="w-full h-full object-contain bg-gray-50"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div 
                        className={`w-full h-full bg-gradient-to-br ${item.bgColor} flex items-center justify-center ${item.imageUrl ? 'hidden' : ''}`}
                        style={{ display: item.imageUrl ? 'none' : 'flex' }}
                      >
                        <div className={`${item.textColor} text-sm font-medium`}>{item.label}</div>
                      </div>
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-lg font-normal mb-3 text-purple-600">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {journeyData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-purple-600' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
          >
            <ChevronLeft className="w-5 h-5 text-gray-400" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
          >
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <div className="grid grid-cols-3 gap-6 mb-12">
            {journeyData.map((item, index) => (
              <div 
                key={item._id} 
                className="relative cursor-pointer"
                onClick={() => goToSlide(index)}
              >
                <div className={`aspect-[4/3] rounded-3xl overflow-hidden shadow-lg transition-all duration-500 ${
                  index === currentIndex ? 'ring-4 ring-purple-400 shadow-2xl scale-105' : 'hover:shadow-xl'
                }`}>
                  {item.imageUrl ? (
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="w-full h-full object-contain bg-gray-50"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div 
                    className={`w-full h-full bg-gradient-to-br ${item.bgColor} flex items-center justify-center ${item.imageUrl ? 'hidden' : ''}`}
                    style={{ display: item.imageUrl ? 'none' : 'flex' }}
                  >
                    <div className={`${item.textColor} text-sm font-medium`}>{item.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-8">
            {journeyData.map((item, index) => (
              <div 
                key={item._id} 
                className={`text-center md:text-left transition-all duration-500 ${
                  index === currentIndex ? 'scale-105' : 'opacity-70'
                }`}
              >
                <h3 className="text-xl font-normal mb-4 text-purple-600">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-3">
            {journeyData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-purple-600 scale-125' : 'bg-gray-400 hover:bg-purple-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentJourneySection;