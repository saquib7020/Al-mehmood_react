import React from 'react';
import { MapPin, Phone, Mail, Book, Users, Award, Building } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
  

      {/* About Us Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="bg-purple-50 rounded-3xl p-8 md:p-12 mb-16 border-2 border-purple-200">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-purple-800">
            ABOUT US
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to Al-Mahmood International School, a beacon of excellence in education 
                located on the serene Akot road, Kandoli, Akola. Our institution takes pride in nurturing 
                young minds, providing a holistic and dynamic learning environment from Nursery 
                through XII.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 text-center border-2 border-purple-200">
                  <Users className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                  <h4 className="font-semibold text-purple-800">Holistic Education</h4>
                  <p className="text-sm text-gray-600">Nursery to XII</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center border-2 border-purple-200">
                  <Award className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                  <h4 className="font-semibold text-purple-800">Excellence</h4>
                  <p className="text-sm text-gray-600">Quality Education</p>
                </div>
              </div>
            </div>
            {/* Image placeholder for main school building */}
            <div className="bg-gray-100 rounded-2xl p-6 border-2 border-purple-200">
              <div className="w-full h-64 bg-gray-200 rounded-xl border-2 border-dashed border-gray-400 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Building className="w-16 h-16 mx-auto mb-2" />
                  <p className="font-medium">Main School Building Image</p>
                  <p className="text-sm">Add your school photo here</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Campus Section */}
        <div className="bg-purple-50 rounded-3xl p-8 md:p-12 mb-16 border-2 border-purple-200">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-purple-800">
            OUR CAMPUS
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
            At Al-Mahmood, we believe in fostering a nurturing environment where every 
            child's potential is recognised and harnessed. Our dedicated faculty ensures 
            individualised attention, allowing each student to flourish academically and 
            personally, preparing them to navigate an ever-evolving world, equipping them with essential skills for the future.
          </p>
          
          {/* Campus Images Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: "Main Building", desc: "School Architecture" },
              { title: "Welcome Sign", desc: "School Entrance" },
              { title: "Campus Road", desc: "School Pathway" },
              { title: "School Grounds", desc: "Campus Overview" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300">
                <div className="w-full h-32 bg-gray-200 rounded-lg mb-4 border-2 border-dashed border-gray-400 flex items-center justify-center">
                  <div className="text-center text-gray-500 text-sm">
                    <div className="w-8 h-8 bg-gray-300 rounded mx-auto mb-1"></div>
                    <p>Campus Image {index + 1}</p>
                  </div>
                </div>
                <h4 className="font-semibold text-purple-800 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Special Facilities Section */}
        <div className="bg-purple-50 rounded-3xl p-8 md:p-12 border-2 border-purple-200">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-purple-800">
            SPECIAL FACILITIES
          </h2>
          
          {/* Advanced Laboratory */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-purple-700 mb-6 flex items-center">
              <div className="w-8 h-8 bg-purple-600 rounded-full mr-3 flex items-center justify-center">
                <span className="text-white text-sm">🔬</span>
              </div>
              ADVANCE LABORATORY
            </h3>
            <p className="text-gray-700 mb-6 text-lg">
              Within our school's Advanced Science Lab, innovation thrives as students 
              explore and learn using state-of-the-art equipment.
            </p>
            
            {/* Laboratory Images Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Lab Equipment 1",
                "Lab Equipment 2", 
                "Students in Lab 1",
                "Students in Lab 2"
              ].map((title, index) => (
                <div key={index} className="bg-white rounded-xl p-4 border-2 border-purple-200">
                  <div className="w-full h-32 bg-gray-200 rounded-lg mb-3 border-2 border-dashed border-gray-400 flex items-center justify-center">
                    <div className="text-center text-gray-500 text-sm">
                      <div className="w-6 h-6 bg-blue-300 rounded mx-auto mb-1"></div>
                      <p>{title}</p>
                    </div>
                  </div>
                  <p className="text-purple-800 font-medium text-center text-sm">{title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Library Facility */}
          <div>
            <h3 className="text-2xl font-bold text-purple-700 mb-6 flex items-center">
              <div className="w-8 h-8 bg-purple-600 rounded-full mr-3 flex items-center justify-center">
                <Book className="w-4 h-4 text-white" />
              </div>
              LIBRARY FACILITY
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4">
                <p className="text-gray-700 text-lg">
                  Our comprehensive library serves as a hub of knowledge and learning, 
                  providing students with access to a vast collection of books, 
                  digital resources, and quiet study spaces.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
                    <h4 className="text-purple-800 font-semibold mb-2">Extensive Collection</h4>
                    <p className="text-gray-600 text-sm">Wide range of academic and recreational books</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
                    <h4 className="text-purple-800 font-semibold mb-2">Digital Resources</h4>
                    <p className="text-gray-600 text-sm">Modern learning materials and e-books</p>
                  </div>
                </div>
              </div>
              
              {/* Library Images */}
              <div className="space-y-4">
                {["Library Interior", "Reading Area", "Study Section"].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 border-2 border-purple-200">
                    <div className="w-full h-20 bg-gray-200 rounded-lg mb-2 border-2 border-dashed border-gray-400 flex items-center justify-center">
                      <div className="text-center text-gray-500 text-xs">
                        <div className="w-4 h-4 bg-green-300 rounded mx-auto mb-1"></div>
                        <p>{item}</p>
                      </div>
                    </div>
                    <p className="text-purple-800 text-center font-medium text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
    
      </div>
    </div>
  );
}