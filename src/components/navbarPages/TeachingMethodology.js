import React, { useState } from 'react';
import { Users, Brain, Heart, Globe, BookOpen, Lightbulb, Target, Award } from 'lucide-react';

const TeachingMethodology = () => {
  const [activeMethod, setActiveMethod] = useState('islamic');

  const learningResults = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leadership Qualities",
      points: ["Self-confidence and Self-esteem", "Independent thinking", "Effective decision-making", "Good management of human resources"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Critical Thinking",
      points: ["Investigation of problems", "Deduction of reasoning", "Analyzing and visualizing problems", "Reaching conclusions"]
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Language Skills",
      points: ["Reading and writing proficiency", "Effective mechanics", "Comprehension and composition", "Oral response"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "World Awareness",
      points: ["Geography and History of civilization", "Current issues and events", "Social problems", "Cultural understanding"]
    }
  ];

  const teachingApproaches = [
    {
      id: 'islamic',
      title: 'Islamic Integration',
      description: 'Incorporating Islamic values and teachings into modern curriculum',
      features: ['Daily Duas and Prayers', 'Islamic Character Building', 'Moral Education', 'Namaz Record Keeping']
    },
    {
      id: 'modern',
      title: 'Modern Technology',
      description: 'Using contemporary tools and methods for effective learning',
      features: ['Computer Education', 'Interactive Learning', 'Digital Resources', 'Online Assessments']
    },
    {
      id: 'practical',
      title: 'Practical Learning',
      description: 'Hands-on approach to make learning more engaging and effective',
      features: ['Science Experiments', 'Project-Based Learning', 'Field Trips', 'Practical Applications']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      {/* Hero Section */}
      {/* <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Teaching Methodology</h1>
            <p className="text-xl mb-8 opacity-90">
              Innovative teaching methods that blend Islamic values with modern educational practices
            </p>
            <div className="flex justify-center gap-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <Heart className="w-8 h-8 mx-auto mb-2" />
                <div className="text-lg font-bold">Value-Based</div>
                <div className="text-sm">Education</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <Lightbulb className="w-8 h-8 mx-auto mb-2" />
                <div className="text-lg font-bold">Creative</div>
                <div className="text-sm">Approach</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <Target className="w-8 h-8 mx-auto mb-2" />
                <div className="text-lg font-bold">Result</div>
                <div className="text-sm">Oriented</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Interactive Teaching Gallery */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Teaching Methods Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Interactive Classroom',
              'Islamic Studies',
              'Science Laboratory',
              'Computer Lab',
              'Art & Craft',
              'Physical Education'
            ].map((method, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center">
                  <div className="text-purple-600 text-center">
                    <BookOpen className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm font-medium">{method}</p>
                    <p className="text-xs opacity-70">Click to add image</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-purple-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-sm font-medium">Add Teaching Image</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Teaching Approaches */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Our Teaching Approaches</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {teachingApproaches.map((approach) => (
              <button
                key={approach.id}
                onClick={() => setActiveMethod(approach.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeMethod === approach.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-purple-600 hover:bg-purple-50'
                }`}
              >
                {approach.title}
              </button>
            ))}
          </div>

          {teachingApproaches.map((approach) => (
            <div
              key={approach.id}
              className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-300 ${
                activeMethod === approach.id ? 'block' : 'hidden'
              }`}
            >
              <h3 className="text-2xl font-bold mb-4 text-purple-800">{approach.title}</h3>
              <p className="text-gray-700 mb-6 text-lg">{approach.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {approach.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                    <Award className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expected Learning Results */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Expected School-Wide Learning Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningResults.map((result, index) => (
              <div key={index} className="bg-purple-50 rounded-lg p-6 hover:bg-purple-100 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-600 text-white rounded-lg">
                    {result.icon}
                  </div>
                  <h3 className="text-xl font-bold text-purple-800">{result.title}</h3>
                </div>
                <ul className="space-y-2">
                  {result.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2 text-gray-700">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Islamic Character Development */}
      <div className="py-16 bg-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Islamic Character Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Islamic Knowledge",
                description: "Clear knowledge of Islam basics",
                icon: <BookOpen className="w-8 h-8" />
              },
              {
                title: "Islamic Values",
                description: "Application of Islamic principles",
                icon: <Heart className="w-8 h-8" />
              },
              {
                title: "Islamic Identity",
                description: "Pride in Islamic heritage",
                icon: <Award className="w-8 h-8" />
              },
              {
                title: "Community Service",
                description: "Duties towards fellow humans",
                icon: <Users className="w-8 h-8" />
              }
            ].map((item, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Daily Duas Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Daily Islamic Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Morning Assembly", desc: "Begins at 7:55 AM with prayers" },
              { title: "Before Studies", desc: "Rabbi zidni Ilma - Increase my knowledge" },
              { title: "Before Meals", desc: "Bismillahi wa-alaa barakatillaah" },
              { title: "After Meals", desc: "Al-hamdulillahillazi at-amana" },
              { title: "Before Sleep", desc: "Allahumma bismika amootu wa-ahya" },
              { title: "Upon Waking", desc: "Alhamdulillaahillazi ah-yaana" }
            ].map((dua, index) => (
              <div key={index} className="bg-purple-50 rounded-lg p-6 hover:bg-purple-100 transition-colors">
                <h3 className="text-lg font-bold mb-3 text-purple-800">{dua.title}</h3>
                <p className="text-gray-700 text-sm">{dua.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Teaching Staff Excellence */}
      <div className="py-16 bg-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Our Teaching Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <Users className="w-16 h-16 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-bold mb-4 text-purple-800">Qualified Teachers</h3>
              <p className="text-gray-700">Highly qualified and dedicated staff committed to student success</p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <Brain className="w-16 h-16 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-bold mb-4 text-purple-800">Creative Environment</h3>
              <p className="text-gray-700">Nurturing and caring atmosphere that promotes creative learning</p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <Target className="w-16 h-16 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-bold mb-4 text-purple-800">Individual Focus</h3>
              <p className="text-gray-700">Personalized attention to ensure each child's optimal development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachingMethodology;