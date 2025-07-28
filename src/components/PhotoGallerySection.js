import React, { useEffect, useState, useCallback, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Grid,
  Maximize2,
  Download,
  Eye,
  Camera,
  Layout,
  Columns,
  AlertCircle,
  RefreshCw, 
  Calendar,
  Book,
  Users,
  Award,
  GraduationCap,
  Globe,
  Play,
  Pause,
  Share2,
  Heart,
  ZoomIn,
  Filter,
  Search
} from "lucide-react";

// You'll need to import your BASE_URL here
// import BASE_URL from "../config";

const PhotoGallerySystem = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState("masonry");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAllImages, setShowAllImages] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [favorites, setFavorites] = useState(new Set());
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const autoPlayRef = useRef(null);
  const searchRef = useRef(null);

  // Fetch gallery data from API
  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Replace with your actual API endpoint
        const baseUrl = 'https://al-mehmood-backend-production.up.railway.app';
        const response = await fetch(`${baseUrl}/api/slides`);

        if (!response.ok) {
          throw new Error('Failed to fetch gallery data');
        }

        const data = await response.json();
        setGalleryData(data);
      } catch (error) {
        console.error('Error fetching gallery data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  // Auto-play functionality for lightbox
  useEffect(() => {
    if (isAutoPlay && lightboxOpen && filteredData.length > 1) {
      autoPlayRef.current = setInterval(() => {
        navigateLightbox("next");
      }, 3000);
    } else {
      clearInterval(autoPlayRef.current);
    }

    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlay, lightboxOpen]);

  // Retry API call
  const retryFetch = () => {
    setError(null);
    setLoading(true);
    
    const fetchGalleryData = async () => {
      try {
        const baseUrl = 'https://al-mehmood-backend-production.up.railway.app';
        const response = await fetch(`${baseUrl}/api/slides`);

        if (!response.ok) {
          throw new Error('Failed to fetch gallery data');
        }

        const data = await response.json();
        setGalleryData(data);
      } catch (error) {
        console.error('Error fetching gallery data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  };

  // Get unique titles from API data for dynamic categories
  const getUniqueCategories = () => {
    const uniqueTitles = [...new Set(galleryData.map(item => item.title).filter(Boolean))];
    
    // Create categories array with "All" option first
    const categories = [
      { id: "all", name: "All", icon: Globe }
    ];
    
    // Add dynamic categories based on titles
    uniqueTitles.forEach(title => {
      let icon = Globe; // Default icon
      
      // Assign icons based on title content (you can customize these)
      if (title.toLowerCase().includes('event')) icon = Calendar;
      else if (title.toLowerCase().includes('academic') || title.toLowerCase().includes('education')) icon = Book;
      else if (title.toLowerCase().includes('activity') || title.toLowerCase().includes('activities')) icon = Users;
      else if (title.toLowerCase().includes('sport')) icon = Award;
      else if (title.toLowerCase().includes('graduation') || title.toLowerCase().includes('graduate')) icon = GraduationCap;
      else if (title.toLowerCase().includes('test')) icon = AlertCircle;
      
      categories.push({
        id: title.toLowerCase().replace(/\s+/g, '-'),
        name: title,
        icon: icon
      });
    });
    
    return categories;
  };

  const categories = getUniqueCategories();

  // Filter data based on title and search
  const filteredData = galleryData.filter(item => {
    const matchesCategory = selectedCategory === "all" || 
      item.title?.toLowerCase().replace(/\s+/g, '-') === selectedCategory;
    const matchesSearch = searchTerm === "" || 
      item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.subtitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Show limited images initially, all when expanded
  const displayedImages = showAllImages ? filteredData : filteredData.slice(0, 6);
  const hasMoreImages = filteredData.length > 6;

  const openLightbox = (image, index) => {
    setLightboxImage({ ...image, index });
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage(null);
    setIsAutoPlay(false);
    document.body.style.overflow = 'unset';
    if (isFullscreen) {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  const navigateLightbox = useCallback((direction) => {
    if (!filteredData.length) return;

    const currentIdx = lightboxImage.index;
    const newIndex = direction === "next"
      ? (currentIdx + 1) % filteredData.length
      : (currentIdx - 1 + filteredData.length) % filteredData.length;

    setLightboxImage({ ...filteredData[newIndex], index: newIndex });
  }, [filteredData, lightboxImage]);

  // Touch handlers for mobile swipe in lightbox
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      navigateLightbox("next");
    } else if (isRightSwipe) {
      navigateLightbox("prev");
    }
  };

  // Toggle favorite
  const toggleFavorite = (imageId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(imageId)) {
      newFavorites.delete(imageId);
    } else {
      newFavorites.add(imageId);
    }
    setFavorites(newFavorites);
  };

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
      if (e.key === 'ArrowRight') navigateLightbox('next');
      if (e.key === ' ') {
        e.preventDefault();
        setIsAutoPlay(!isAutoPlay);
      }
      if (e.key === 'f' || e.key === 'F') toggleFullscreen();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxOpen, isAutoPlay, navigateLightbox]);

  // Search functionality
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setShowAllImages(false);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
      clearInterval(autoPlayRef.current);
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-blue-300 border-t-blue-500 rounded-full animate-spin mb-4 sm:mb-6 mx-auto"></div>
          <p className="text-blue-100 font-medium text-base sm:text-lg">Loading Gallery...</p>
          <p className="text-blue-300 text-xs sm:text-sm mt-2">Preparing your visual journey</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      {/* Header */}
      <header className="bg-slate-900/90 backdrop-blur-sm shadow-xl border-b border-blue-300/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center space-x-2 sm:space-x-4 min-w-0 flex-1">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <Camera className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent truncate">
                  Professional Gallery
                </h1>
                <p className="text-blue-100 text-xs sm:text-sm lg:text-base hidden sm:block">Capturing Moments, Creating Memories</p>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Search photos..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="pl-10 pr-4 py-2 bg-slate-800/50 border border-blue-400/30 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 text-sm w-32 sm:w-48"
                />
              </div>
              
              {/* View Mode Toggle */}
              <div className="flex items-center space-x-1 bg-slate-800/60 rounded-lg p-1 border border-blue-400/20 hidden sm:flex">
                <button
                  onClick={() => setViewMode("masonry")}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === "masonry" 
                      ? "bg-blue-500 text-white shadow-lg" 
                      : "text-blue-300 hover:bg-slate-700 hover:text-blue-200"
                  }`}
                  title="Masonry View"
                >
                  <Layout className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === "grid" 
                      ? "bg-blue-500 text-white shadow-lg" 
                      : "text-blue-300 hover:bg-slate-700 hover:text-blue-200"
                  }`}
                  title="Grid View"
                >
                  <Grid className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <div className="bg-slate-800/60 backdrop-blur-sm border-b border-blue-300/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "bg-slate-700/50 text-blue-300 hover:bg-slate-700 border border-blue-400/30"
                  }`}
                >
                  <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
          <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-3 sm:p-4 flex items-center justify-between gap-3 backdrop-blur-sm">
            <div className="flex items-center space-x-3">
              <AlertCircle className="w-5 h-5 text-red-400" />
              <div>
                <p className="text-red-300 font-semibold text-sm">Connection Issue</p>
                <p className="text-red-400 text-xs">Error: {error}</p>
              </div>
            </div>
            <button
              onClick={retryFetch}
              className="flex items-center space-x-2 px-4 py-2 bg-red-800/30 hover:bg-red-700/40 text-red-300 rounded-lg transition-all duration-200 text-sm"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Retry</span>
            </button>
          </div>
        </div>
      )}

      {/* Results Info */}
      {(searchTerm || selectedCategory !== "all") && (
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-2">
          <p className="text-blue-300 text-sm">
            {filteredData.length} photo{filteredData.length !== 1 ? 's' : ''} found
            {searchTerm && ` for "${searchTerm}"`}
            {selectedCategory !== "all" && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
          </p>
        </div>
      )}

      {/* Gallery Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8">
        {filteredData.length > 0 ? (
          <>
            {/* Gallery Grid */}
            {viewMode === "masonry" ? (
              /* Masonry Layout */
              <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 sm:gap-4 lg:gap-6 space-y-3 sm:space-y-4 lg:space-y-6">
                {displayedImages.map((image, index) => (
                  <div
                    key={image._id || index}
                    className="break-inside-avoid bg-slate-800/40 backdrop-blur-sm rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group cursor-pointer border border-blue-400/20 hover:border-blue-300/40 transform hover:scale-[1.02]"
                    onClick={() => openLightbox(image, index)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={image.image}
                        alt={image.title}
                        className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      
                      {/* Favorite Heart */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(image._id);
                        }}
                        className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                          favorites.has(image._id)
                            ? "bg-red-500/80 text-white"
                            : "bg-black/20 text-white/70 hover:bg-black/40"
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${favorites.has(image._id) ? "fill-current" : ""}`} />
                      </button>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center p-3 sm:p-4 lg:p-6">
                        <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <ZoomIn className="w-6 h-6 sm:w-7 sm:h-7 text-blue-300 mx-auto mb-2" />
                          <span className="text-white font-semibold text-sm sm:text-base block">{image.title}</span>
                          {image.subtitle && (
                            <p className="text-blue-200 text-xs mt-1 opacity-80">{image.subtitle}</p>
                          )}
                          {image.description && (
                            <p className="text-blue-200 text-xs mt-1 opacity-80">{image.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Grid Layout */
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                {displayedImages.map((image, index) => (
                  <div
                    key={image._id || index}
                    className="bg-slate-800/40 backdrop-blur-sm rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group cursor-pointer aspect-square border border-blue-400/20 hover:border-blue-300/40 transform hover:scale-105"
                    onClick={() => openLightbox(image, index)}
                  >
                    <div className="relative w-full h-full overflow-hidden">
                      <img
                        src={image.image}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      
                      {/* Favorite Heart */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(image._id);
                        }}
                        className={`absolute top-2 right-2 p-1.5 rounded-full backdrop-blur-sm transition-all duration-300 ${
                          favorites.has(image._id)
                            ? "bg-red-500/80 text-white"
                            : "bg-black/20 text-white/70 hover:bg-black/40"
                        }`}
                      >
                        <Heart className={`w-3 h-3 ${favorites.has(image._id) ? "fill-current" : ""}`} />
                      </button>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center p-3">
                        <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <ZoomIn className="w-5 h-5 text-blue-300 mx-auto mb-1" />
                          <span className="text-white font-semibold text-xs sm:text-sm block leading-tight">{image.title}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* View All Button */}
            {hasMoreImages && !showAllImages && (
              <div className="flex justify-center mt-8 sm:mt-10">
                <button
                  onClick={() => setShowAllImages(true)}
                  className="group flex items-center space-x-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold text-base sm:text-lg rounded-full shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 transform hover:scale-105"
                >
                  <Eye className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span>View All {filteredData.length} Photos</span>
                </button>
              </div>
            )}

            {/* Show Less Button */}
            {showAllImages && hasMoreImages && (
              <div className="flex justify-center mt-8 sm:mt-10">
                <button
                  onClick={() => {
                    setShowAllImages(false);
                    document.querySelector('.max-w-7xl').scrollIntoView({ 
                      behavior: 'smooth', 
                      block: 'start' 
                    });
                  }}
                  className="group flex items-center space-x-3 px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/60 hover:bg-slate-800/80 text-blue-200 hover:text-blue-100 font-semibold text-sm sm:text-base rounded-full shadow-xl transition-all duration-500 transform hover:scale-105 border border-blue-400/30"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                  <span>Show Less</span>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12 sm:py-16 lg:py-20 px-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 border border-blue-400/30">
              <Camera className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-300" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-blue-300 mb-2 sm:mb-3">No Photos Found</h3>
            <p className="text-blue-200 text-base sm:text-lg">
              {searchTerm ? `No photos found for "${searchTerm}"` : "No photos available for the selected category."}
            </p>
            {(searchTerm || selectedCategory !== "all") && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
              >
                Clear Filters
              </button>
            )}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 backdrop-blur-sm"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 p-3 sm:p-4 lg:p-6 bg-gradient-to-b from-black/70 to-transparent z-10">
            <div className="flex items-center justify-between gap-3">
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-bold text-base sm:text-lg lg:text-xl truncate">
                  {lightboxImage.title}
                </h3>
                {lightboxImage.subtitle && (
                  <p className="text-blue-200 text-sm opacity-80 truncate">{lightboxImage.subtitle}</p>
                )}
                {lightboxImage.description && (
                  <p className="text-blue-200 text-sm opacity-80 truncate">{lightboxImage.description}</p>
                )}
              </div>
              <div className="flex items-center space-x-2 flex-shrink-0">
                <button
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-300 flex items-center justify-center border ${
                    isAutoPlay 
                      ? "bg-blue-500/30 text-blue-300 border-blue-400/30" 
                      : "bg-slate-800/50 text-slate-300 border-slate-400/30"
                  }`}
                  title={isAutoPlay ? "Pause slideshow" : "Start slideshow"}
                >
                  {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 transition-all duration-300 flex items-center justify-center border border-slate-400/30"
                  title="Toggle fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => toggleFavorite(lightboxImage._id)}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-300 flex items-center justify-center border ${
                    favorites.has(lightboxImage._id)
                      ? "bg-red-500/30 text-red-300 border-red-400/30"
                      : "bg-slate-800/50 text-slate-300 border-slate-400/30"
                  }`}
                  title="Add to favorites"
                >
                  <Heart className={`w-4 h-4 ${favorites.has(lightboxImage._id) ? "fill-current" : ""}`} />
                </button>
                <button
                  onClick={closeLightbox}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all duration-300 flex items-center justify-center border border-red-400/30"
                  title="Close (Esc)"
                  >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          {filteredData.length > 1 && (
            <>
              <button
                onClick={() => navigateLightbox("prev")}
                className="absolute left-3 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all duration-300 flex items-center justify-center z-10 border border-white/20"
                title="Previous image (←)"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              </button>
              <button
                onClick={() => navigateLightbox("next")}
                className="absolute right-3 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all duration-300 flex items-center justify-center z-10 border border-white/20"
                title="Next image (→)"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              </button>
            </>
          )}

          {/* Main Image */}
          <div className="flex items-center justify-center w-full h-full p-12 sm:p-16 lg:p-20">
            <img
              src={lightboxImage.image}
              alt={lightboxImage.title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              loading="lazy"
            />
          </div>

          {/* Bottom Info & Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 bg-gradient-to-t from-black/70 to-transparent">
            <div className="flex items-center justify-between gap-3">
              <div className="flex-1 min-w-0">
                {filteredData.length > 1 && (
                  <p className="text-white/70 text-sm mb-1">
                    {lightboxImage.index + 1} of {filteredData.length}
                  </p>
                )}
                {lightboxImage.description && (
                  <p className="text-blue-200 text-sm opacity-90">
                    {lightboxImage.description}
                  </p>
                )}
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-center space-x-2 flex-shrink-0">
                <button
                  onClick={() => {
                    // Download functionality
                    const link = document.createElement('a');
                    link.href = lightboxImage.image;
                    link.download = lightboxImage.title || 'image';
                    link.click();
                  }}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 transition-all duration-300 flex items-center justify-center border border-slate-400/30"
                  title="Download image"
                >
                  <Download className="w-4 h-4" />
                </button>
                
                <button
                  onClick={() => {
                    // Share functionality
                    if (navigator.share) {
                      navigator.share({
                        title: lightboxImage.title,
                        text: lightboxImage.description,
                        url: lightboxImage.image
                      });
                    } else {
                      // Fallback to copying URL
                      navigator.clipboard.writeText(lightboxImage.image);
                      // You could add a toast notification here
                    }
                  }}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 transition-all duration-300 flex items-center justify-center border border-slate-400/30"
                  title="Share image"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Loading Indicator for Auto-play */}
          {isAutoPlay && (
            <div className="absolute top-20 sm:top-24 left-1/2 -translate-x-1/2">
              <div className="flex items-center space-x-2 bg-black/50 rounded-full px-4 py-2 border border-blue-400/30">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-blue-200 text-sm">Auto-play active</span>
              </div>
            </div>
          )}

          {/* Keyboard Shortcuts Info */}
          <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 opacity-30 hover:opacity-90 transition-opacity duration-300">
            <div className="bg-black/50 rounded-lg px-4 py-2 border border-white/10">
              <p className="text-white text-xs text-center">
                Use ← → keys to navigate • Space to play/pause • F for fullscreen • Esc to close
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-blue-300/20 mt-12 sm:mt-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-blue-200 font-semibold text-sm sm:text-base">Professional Gallery</p>
                <p className="text-blue-300 text-xs sm:text-sm">© 2025 All rights reserved</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-xs sm:text-sm text-blue-300">
              <span>{galleryData.length} Total Photos</span>
              <span>•</span>
              <span>{favorites.size} Favorites</span>
              <span>•</span>
              <span>HD Quality</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PhotoGallerySystem;