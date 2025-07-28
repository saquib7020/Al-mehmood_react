import React, { useState } from 'react';
import { ChevronRight, Star, Trophy, Users, Camera, Music, Palette, Calculator, Globe, BookOpen, Award, Heart } from 'lucide-react';

const ExtracurricularActivities = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredActivity, setHoveredActivity] = useState(null);

  const activities = [
    {
      id: 1,
      title: "Clay Modeling",
      category: "arts",
      description: "Creative clay modeling sessions to enhance artistic skills and imagination",
      icon: <Palette className="w-6 h-6" />,
      schedule: "July 2nd Week",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Qiraath Competition",
      category: "islamic",
      description: "Beautiful recitation of the Holy Quran with proper pronunciation and melody",
      icon: <BookOpen className="w-6 h-6" />,
      schedule: "July 4th Week",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Drawing Competition",
      category: "arts",
      description: "Showcase artistic talents through various drawing techniques and themes",
      icon: <Palette className="w-6 h-6" />,
      schedule: "August 4th Week",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Handwriting Competition",
      category: "academic",
      description: "Develop beautiful handwriting skills in multiple languages",
      icon: <BookOpen className="w-6 h-6" />,
      schedule: "September 1st Week",
      image: "/api/placeholder/400/300"
    },
    {
      id: 5,
      title: "Elocution Competition",
      category: "academic",
      description: "Public speaking and presentation skills development",
      icon: <Users className="w-6 h-6" />,
      schedule: "September 3rd Week",
      image: "/api/placeholder/400/300"
    },
    {
      id: 6,
      title: "Art & Craft Competition",
      category: "arts",
      description: "Creative handicrafts and artistic expression through various mediums",
      icon: <Palette className="w-6 h-6" />,
      schedule: "November 2nd Week",
      image: "/api/placeholder/400/300"
    },
    {
      id: 7,
      title: "Debate Competition",
      category: "academic",
      description: "Develop critical thinking and argumentation skills (Classes IV-VII)",
      icon: <Users className="w-6 h-6" />,
      schedule: "November 3rd Week",
      image: "/api/placeholder/400/300"
    },
    {
      id: 8,
      title: "Story Telling Competition",
      category: "academic",
      description: "Enhance narrative skills and creativity (Classes I-III)",
      icon: <BookOpen className="w-6 h-6" />,
      schedule: "November 3rd Week",
      image: "/api/placeholder/400/300"
    },
    {
      id: 9,
      title: "Quiz & Vocabulary Competition",
      category: "academic",
      description: "Test knowledge and expand vocabulary across subjects",
      icon: <Calculator className="w-6 h-6" />,
      schedule: "December 1st Week",
      image: "/api/placeholder/400/300"
    },
    {
      id: 10,
      title: "Annual Sports & Games",
      category: "sports",
      description: "Physical fitness and sportsmanship through various athletic events",
      icon: <Trophy className="w-6 h-6" />,
      schedule: "December 3rd Week",
      image: "/api/placeholder/400/300"
    },
    {
      id: 11,
      title: "Pick & Speak Competition",
      category: "academic",
      description: "Impromptu speaking skills and quick thinking development",
      icon: <Users className="w-6 h-6" />,
      schedule: "January 2nd Week",
      image: "/api/placeholder/400/300"
    },
    {
      id: 12,
      title: "Science Exhibition",
      category: "academic",
      description: "Showcase scientific projects and innovative experiments",
      icon: <Globe className="w-6 h-6" />,
      schedule: "January 4th Week",
      image: "/api/placeholder/400/300"
    },
    {
      id: 13,
      title: "Annual Day / Convocation",
      category: "special",
      description: "Celebrate achievements and showcase student talents",
      icon: <Award className="w-6 h-6" />,
      schedule: "February 2nd Week",
      image: "/api/placeholder/400/300"
    },
    {
      id: 14,
      title: "Excursion / Picnic",
      category: "special",
      description: "Educational trips and recreational activities for holistic development",
      icon: <Camera className="w-6 h-6" />,
      schedule: "February 4th Week",
      image: "/api/placeholder/400/300"
    },
    {
      id: 15,
      title: "Food Festival",
      category: "special",
      description: "Cultural celebration through diverse cuisines and culinary arts",
      icon: <Heart className="w-6 h-6" />,
      schedule: "March 2nd Week",
      image: "/api/placeholder/400/300"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Activities', icon: <Star className="w-5 h-5" /> },
    { id: 'islamic', name: 'Islamic Activities', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'academic', name: 'Academic', icon: <Calculator className="w-5 h-5" /> },
    { id: 'arts', name: 'Arts & Crafts', icon: <Palette className="w-5 h-5" /> },
    { id: 'sports', name: 'Sports', icon: <Trophy className="w-5 h-5" /> },
    { id: 'special', name: 'Special Events', icon: <Award className="w-5 h-5" /> }
  ];

  const filteredActivities = activeCategory === 'all' 
    ? activities 
    : activities.filter(activity => activity.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      {/* Header */}
      {/* <header className="bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <Star className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Al Mehmood International School</h1>
                <p className="text-purple-200">Excellence in Education</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="hover:text-purple-200 transition-colors">Home</a>
              <a href="/about" className="hover:text-purple-200 transition-colors">About</a>
              <a href="/activities" className="text-purple-200 font-semibold">Activities</a>
              <a href="/global" className="hover:text-purple-200 transition-colors">Global</a>
            </nav>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      {/* <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Extracurricular Activities
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Nurturing talents, building character, and creating well-rounded individuals through diverse activities and competitions
          </p>
          <div className="flex items-center justify-center space-x-2 text-purple-200">
            <span>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span>Activities</span>
          </div>
        </div>
      </section> */}

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-md">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                }`}
              >
                {category.icon}
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity) => (
              <div
                key={activity.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onMouseEnter={() => setHoveredActivity(activity.id)}
                onMouseLeave={() => setHoveredActivity(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {activity.schedule}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <div className="absolute bottom-4 left-4 text-white">
                      <button className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-30 transition-all">
                        View Gallery
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-purple-100 p-2 rounded-full text-purple-600">
                      {activity.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{activity.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-600 font-medium bg-purple-50 px-3 py-1 rounded-full">
                      {activity.category.charAt(0).toUpperCase() + activity.category.slice(1)}
                    </span>
                    <button className="text-purple-600 hover:text-purple-700 font-medium flex items-center space-x-1 transition-colors">
                      <span>Learn More</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-purple-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Academic Clubs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our specialized clubs for deeper learning and skill development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Maths Club', icon: <Calculator className="w-8 h-8" />, color: 'from-blue-500 to-blue-600' },
              { name: 'Science Club', icon: <Globe className="w-8 h-8" />, color: 'from-green-500 to-green-600' },
              { name: 'Eco Club', icon: <Heart className="w-8 h-8" />, color: 'from-emerald-500 to-emerald-600' },
              { name: 'Language Club', icon: <BookOpen className="w-8 h-8" />, color: 'from-purple-500 to-purple-600' }
            ].map((club, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className={`bg-gradient-to-r ${club.color} text-white p-4 rounded-full inline-flex mb-4`}>
                  {club.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{club.name}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Specialized activities and projects for enhanced learning
                </p>
                <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
                  Join Club
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Your Talents?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join Al Mehmood International School and discover your potential through our comprehensive extracurricular program
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Schedule Visit
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Al Mehmood International School</h3>
              <p className="text-gray-400">Excellence in education with Islamic values and modern approach</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/activities" className="hover:text-white transition-colors">Activities</a></li>
                <li><a href="/global" className="hover:text-white transition-colors">Global</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Pre-Primary</li>
                <li>Primary Education</li>
                <li>Islamic Studies</li>
                <li>Hifz Classes</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">Get in touch with us for admissions and inquiries</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Al Mehmood International School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ExtracurricularActivities;