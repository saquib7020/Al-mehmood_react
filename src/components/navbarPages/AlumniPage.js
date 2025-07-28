import React from "react";

const AlumniPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-purple-100 p-4 md:p-8">
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-4">
          Our Alumni's
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Meet our exceptional graduates who are making their mark across various industries and contributing to society
        </p>
      </div>

      {/* Alumni Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {[
          {
            name: "Dr. Ahmed Hassan",
            year: "Class of 2018",
            achievement: "Chief Medical Officer",
            desc: "Leading healthcare innovations at City Hospital with 6+ years of experience in cardiology",
            image: null, // Ready for actual image
            category: "Healthcare",
            location: "New York, USA"
          },
          {
            name: "Fatima Khan",
            year: "Class of 2017",
            achievement: "Senior Software Architect",
            desc: "Tech lead at Fortune 500 company, specializing in AI and machine learning solutions",
            image: null,
            category: "Technology",
            location: "San Francisco, USA"
          },
          {
            name: "Mohammad Ali",
            year: "Class of 2019",
            achievement: "Education Director",
            desc: "Transforming education through innovative teaching methods and curriculum development",
            image: null,
            category: "Education",
            location: "London, UK"
          },
          {
            name: "Ayesha Patel",
            year: "Class of 2016",
            achievement: "CEO & Founder",
            desc: "Built a multi-million dollar EdTech startup serving over 100,000 students globally",
            image: null,
            category: "Business",
            location: "Mumbai, India"
          },
          {
            name: "Omar Sheikh",
            year: "Class of 2018",
            achievement: "Principal Engineer",
            desc: "Leading sustainable infrastructure projects across the Middle East region",
            image: null,
            category: "Engineering",
            location: "Dubai, UAE"
          },
          {
            name: "Mariam Ahmed",
            year: "Class of 2017",
            achievement: "Human Rights Advocate",
            desc: "International lawyer fighting for justice and equality at the United Nations",
            image: null,
            category: "Law & Advocacy",
            location: "Geneva, Switzerland"
          },
        ].map((alumni, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
          >
            {/* Image Container - Ready for actual images */}
            <div className="relative mb-6">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-violet-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                {alumni.image ? (
                  <img 
                    src={alumni.image} 
                    alt={alumni.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  alumni.name.split(' ').map(n => n[0]).join('')
                )}
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-violet-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {alumni.category}
                </span>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{alumni.name}</h3>
              <p className="text-purple-600 font-semibold mb-1">{alumni.achievement}</p>
              <p className="text-sm text-gray-500 mb-3 flex items-center justify-center">
                <span className="mr-1">📍</span>
                {alumni.location}
              </p>
              <p className="text-violet-600 font-medium text-sm mb-3">{alumni.year}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{alumni.desc}</p>
            </div>

            {/* Connect Button */}
            {/* <div className="mt-6 pt-4 border-t border-gray-100">
              <button className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 transform hover:scale-105">
                Connect on LinkedIn
              </button>
            </div> */}
          </div>
        ))
        }
      </div>

      {/* Stats & Achievements Section */}
      

      {/* Call to Action */}
      {/* <div className="bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">Join Our Alumni Network</h3>
        <p className="mb-6 opacity-90">Stay connected with fellow graduates and continue growing together</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
            Register as Alumni
          </button>
          <button className="bg-purple-500 bg-opacity-30 backdrop-blur-sm border border-white border-opacity-30 px-6 py-3 rounded-xl font-semibold hover:bg-opacity-40 transition-all">
            Alumni Directory
          </button>
        </div>
      </div> */}
    </div>
  </div>
);

export default AlumniPage;