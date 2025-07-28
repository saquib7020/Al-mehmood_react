import React, { useState, useEffect } from "react";
import { Eye, Heart, Award, ChevronLeft, ChevronRight, Play, Pause, RefreshCw } from "lucide-react";
import BASE_URL from "../config";

const StudentGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [artworks, setArtworks] = useState([]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likedArtworks, setLikedArtworks] = useState(new Set());

  // API base URL - adjust this to match your server
  // const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fetch artworks from API
  const fetchArtworks = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`${BASE_URL}/gallery`);
      if (!response.ok) {
        throw new Error('Failed to fetch artworks');
      }
      
      const data = await response.json();
      setArtworks(data);
      
      // Reset current index if needed
      if (data.length > 0 && currentIndex >= data.length) {
        setCurrentIndex(0);
      }
    } catch (err) {
      setError(err.message);
      console.error('Error fetching artworks:', err);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchArtworks();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying || artworks.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % artworks.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, artworks.length]);

  // Increment view count when artwork is viewed
  const incrementView = async (artworkId) => {
    try {
      await fetch(`${BASE_URL}/gallery/${artworkId}/view`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (err) {
      console.error('Error incrementing view:', err);
    }
  };

  // Toggle like
  const toggleLike = async (artworkId, currentLikes) => {
    try {
      const isLiked = likedArtworks.has(artworkId);
      
      const response = await fetch(`${BASE_URL}/gallery/${artworkId}/like`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ increment: !isLiked }),
      });
      
      if (response.ok) {
        const data = await response.json();
        
        // Update local state
        setArtworks(prev => prev.map(artwork => 
          artwork._id === artworkId 
            ? { ...artwork, likes: data.likes }
            : artwork
        ));
        
        // Update liked set
        setLikedArtworks(prev => {
          const newSet = new Set(prev);
          if (isLiked) {
            newSet.delete(artworkId);
          } else {
            newSet.add(artworkId);
          }
          return newSet;
        });
      }
    } catch (err) {
      console.error('Error toggling like:', err);
    }
  };

  // Increment view when current artwork changes
  useEffect(() => {
    if (artworks.length > 0 && artworks[currentIndex]) {
      incrementView(artworks[currentIndex]._id);
    }
  }, [currentIndex, artworks]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % artworks.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + artworks.length) % artworks.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const getAwardColor = (award) => {
    switch (award) {
      case "Gold":
        return "bg-yellow-100 text-yellow-800";
      case "Silver":
        return "bg-gray-100 text-gray-800";
      case "Bronze":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

const getVisibleCards = () => {
  if (isMobile) {
    return [artworks[currentIndex]];
  }
  
  const cards = [];
  const maxCards = Math.min(3, artworks.length); // Don't show more cards than artworks
  
  for (let i = 0; i < maxCards; i++) {
    const index = (currentIndex + i) % artworks.length;
    cards.push(artworks[index]);
  }
  return cards;
};

// Helper function to determine if a card should be highlighted (center card)
const isHighlightedCard = (index, visibleCards) => {
  if (isMobile) return true; // Always highlight on mobile
  return visibleCards.length === 3 ? index === 1 : index === 0; // Middle card for 3, first card for 1-2
};

  // Loading state
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <span className="ml-3 text-gray-600">Loading artworks...</span>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <div className="text-red-600 mb-4">
            <svg className="mx-auto h-12 w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-lg font-semibold">Error loading artworks</p>
            <p className="text-sm">{error}</p>
          </div>
          <button
            onClick={fetchArtworks}
            className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Empty state
  if (artworks.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="mx-auto h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-lg font-semibold text-gray-600">No artworks found</p>
            <p className="text-sm text-gray-500">Upload some student artwork to get started!</p>
          </div>
          <button
            onClick={fetchArtworks}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header with Auto-play Toggle */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Student Art Gallery</h2>
        <div className="flex items-center gap-3">
          <button
            onClick={fetchArtworks}
            className="flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span className="hidden sm:inline">Refresh</span>
          </button>
          <button
            onClick={toggleAutoPlay}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {isAutoPlaying ? (
              <>
                <Pause className="w-4 h-4" />
                <span className="hidden sm:inline">Pause</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                <span className="hidden sm:inline">Play</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="relative">
        {/* Cards Container */}
        <div className={`flex gap-4 md:gap-6 justify-center items-center ${isMobile ? 'px-8' : ''}`}>
          {getVisibleCards().map((artwork, index) => (
            <div
              key={`${artwork._id}-${currentIndex}-${index}`}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                isMobile 
                  ? 'w-full max-w-sm h-auto' 
                  : index === 1 
                    ? 'w-80 h-96 scale-105 z-10' 
                    :  'w-72 h-88 scale-95 shadow-md'
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${isMobile ? 'h-56' : 'h-48'}`}>
                <img
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop';
                  }}
                />
                {artwork.award && (
                  <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${getAwardColor(artwork.award)}`}>
                    <Award className="w-3 h-3 inline mr-1" />
                    {artwork.award}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {artwork.title}
                </h3>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-blue-600 font-medium">{artwork.artist}</p>
                    <p className="text-sm text-gray-500">Grade {artwork.grade}</p>
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {artwork.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {artwork.description}
                </p>
                {/* <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {artwork.views}
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {artwork.likes}
                    </div>
                  </div>
                  <button
                    onClick={() => toggleLike(artwork._id, artwork.likes)}
                    className={`flex items-center gap-1 px-2 py-1 rounded text-sm transition-colors ${
                      likedArtworks.has(artwork._id)
                        ? 'bg-red-100 text-red-600'
                        : 'bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${likedArtworks.has(artwork._id) ? 'fill-current' : ''}`} />
                    Like
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className={`absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-800 hover:shadow-xl transition-all z-20 ${
            isMobile ? 'left-2' : 'left-0'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button
          onClick={nextSlide}
          className={`absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-800 hover:shadow-xl transition-all z-20 ${
            isMobile ? 'right-2' : 'right-0'
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {artworks.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300 w-2'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar for Auto-play */}
      {/* {isAutoPlaying && (
        <div className="mt-4 mx-auto max-w-xs">
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div 
              className="bg-blue-600 h-1 rounded-full transition-all duration-4000 ease-linear"
              style={{
                animation: 'progress 4s linear infinite'
              }}
            />
          </div>
        </div>
      )
      
      
      } */}

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .duration-4000 {
          transition-duration: 4000ms;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default StudentGallery;