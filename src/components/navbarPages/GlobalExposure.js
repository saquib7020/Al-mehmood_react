import React, { useState } from 'react';
import { ChevronRight, Globe, Users, BookOpen, Award, Languages, MapPin, Video, Calendar, ArrowRight, Star, Trophy, Heart, Camera, Monitor, Wifi, Smartphone } from 'lucide-react';

const GlobalExposure = () => {
  const [activeTab, setActiveTab] = useState('international');
  const [hoveredCard, setHoveredCard] = useState(null);

  const globalPrograms = [
    {
      id: 1,
      title: "International Curriculum Integration",
      description: "Globally recognized curriculum standards with local Islamic values",
      icon: <BookOpen className="w-6 h-6" />,
      features: ["Cambridge Standards", "Islamic Integration", "Modern Teaching Methods"],
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Global Language Program",
      description: "Multi-language education to prepare students for international communication",
      icon: <Languages className="w-6 h-6" />,
      features: ["English Proficiency", "Arabic Excellence", "Local Languages"],
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Cultural Exchange Programs",
      description: "Virtual and physical exchanges with international Islamic schools",
      icon: <Users className="w-6 h-6" />,
      features: ["Sister School Partnerships", "Cultural Projects", "International Competitions"],
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Technology Integration",
      description: "Modern technology tools for global classroom experiences",
      icon: <Monitor className="w-6 h-6" />,
      features: ["Smart Classrooms", "Online Learning", "Digital Resources"],
      image: "/api/placeholder/400/300"
    }
  ];

  const achievements = [
    {
      title: "International Recognition",
      description: "Recognized by global Islamic education bodies",
      icon: <Award className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Global Partnerships",
      description: "Partnerships with 15+ international schools",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Student Exchange",
      description: "Active student exchange programs",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Digital Learning",
      description: "100% digitally integrated classrooms",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const globalActivities = [
    {
      title: "International Science Fair",
      date: "March 2026",
      type: "Competition",
      description: "Students participate in global science competitions",
      participants: "50+ Countries",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Model United Nations",
      date: "January 2026",
      type: "Conference",
      description: "Global diplomacy and international relations simulation",
      participants: "200+ Schools",
      image: "/api/placeholder/300/200"
    },
    {
      title: "International Quranic Competition",
      date: "December 2025",
      type: "Islamic Event",
      description: "Global Quranic recitation and memorization competition",
      participants: "30+ Countries",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Global Arts Festival",
      date: "February 2026",
      type: "Cultural",
      description: "International showcase of Islamic arts and culture",
      participants: "100+ Schools",
      image: "/api/placeholder/300/200"
    }
  ];

  const partnerSchools = [
    {
      name: "Al-Azhar International School",
      location: "Cairo, Egypt",
      flag: "🇪🇬",
      partnership: "Sister School Program"
    },
    {
      name: "Islamic International School",
      location: "Kuala Lumpur, Malaysia",
      flag: "🇲🇾",
      partnership: "Student Exchange"
    },
    {
      name: "Madina Education Center",
      location: "Riyadh, Saudi Arabia",
      flag: "🇸🇦",
      partnership: "Academic Collaboration"
    },
    {
      name: "Istanbul International Academy",
      location: "Istanbul, Turkey",
      flag: "🇹🇷",
      partnership: "Cultural Exchange"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      {/* Header */}
      {/* <header className="bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <Globe className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Al Mehmood International School</h1>
                <p className="text-purple-200">Global Excellence, Islamic Values</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="hover:text-purple-200 transition-colors">Home</a>
              <a href="/about" className="hover:text-purple-200 transition-colors">About</a>
              <a href="/activities" className="hover:text-purple-200 transition-colors">Activities</a>
              <a href="/global" className="text-purple-200 font-semibold">Global</a>
            </nav>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      {/* <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Global Exposure & International Programs
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Preparing students for a connected world while maintaining strong Islamic values and cultural identity
          </p>
          <div className="flex items-center justify-center space-x-2 text-purple-200">
            <span>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span>Global Exposure</span>
          </div>
        </div>
      </section> */}

      {/* Global Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Global Vision</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              To create globally competent Muslim leaders who can navigate the modern world while staying true to their Islamic values
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/api/placeholder/600/400" 
                alt="Global Education"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Globe className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">International Standards</h3>
                    <p className="text-gray-600">World-class education standards integrated with Islamic teachings</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Global Community</h3>
                    <p className="text-gray-600">Connected with international Islamic schools and institutions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Cultural Integration</h3>
                    <p className="text-gray-600">Balanced approach to global awareness and Islamic identity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Programs */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-purple-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">International Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive programs designed to give students global exposure and international competence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {globalPrograms.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onMouseEnter={() => setHoveredCard(program.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="bg-purple-600 p-2 rounded-full inline-block mb-2">
                        {program.icon}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {program.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="text-purple-600 hover:text-purple-700 font-medium flex items-center space-x-1 transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

                  </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Global Achievements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proud milestones showcasing our commitment to global excellence in Islamic education
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 text-white shadow-md bg-gradient-to-br ${item.color}`}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Activities */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Global Activities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Events that connect our students with the international academic and cultural community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {globalActivities.map((activity, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">{activity.title}</h3>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                  <div className="mt-2 text-sm text-purple-600">
                    <span className="block">{activity.date}</span>
                    <span className="block">{activity.participants}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Schools */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Global Partner Schools</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Building lasting relationships with prestigious Islamic institutions around the world
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerSchools.map((school, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-6 shadow-md text-gray-800"
              >
                <div className="text-3xl mb-2">{school.flag}</div>
                <h3 className="text-lg font-bold">{school.name}</h3>
                <p className="text-sm">{school.location}</p>
                <p className="text-sm text-purple-600 mt-1">{school.partnership}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-700 text-white py-6 mt-10">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Al Mehmood International School. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default GlobalExposure;
