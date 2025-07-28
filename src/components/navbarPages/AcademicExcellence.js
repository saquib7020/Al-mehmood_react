import React, { useState } from 'react';
import { BookOpen, Award, Users, Target, Calendar, TrendingUp } from 'lucide-react';

const AcademicExcellence = () => {
  const [activeTab, setActiveTab] = useState('curriculum');

  const examSchedule = [
    { exam: 'I-Evaluation Test', date: 'August 1st & 2nd Week', result: 'Result on 16-08-2025' },
    { exam: 'I-Term Exam', date: 'October 2nd & 3rd Week', result: 'Result on 15-11-2025' },
    { exam: 'II-Evaluation Test', date: 'January 1st & 2nd Week', result: 'Result on 17-01-2026' },
    { exam: 'II-Term Exam', date: 'March 4th & April 1st Week', result: 'Result on 01-05-2026' }
  ];

  const subjects = [
    'Deeniyat', 'English', 'Urdu', 'Hindi', 'Marathi', 'Maths', 
    'Science', 'Social Science', 'G.K.', 'Computer', 'Physical Education'
  ];

  const gradingSystem = [
    { grade: 'A1', desc: 'Outstanding', range: '91% to 100%' },
    { grade: 'A2', desc: 'Excellent', range: '81% to 90%' },
    { grade: 'B1', desc: 'Very Good', range: '71% to 80%' },
    { grade: 'B2', desc: 'Good', range: '61% to 70%' },
    { grade: 'C1', desc: 'Average', range: '51% to 60%' },
    { grade: 'C2', desc: 'Not Fair', range: '41% to 50%' },
    { grade: 'D1', desc: 'Poor', range: '40% & Below' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      {/* Hero Section */}
      {/* <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Academic Excellence</h1>
            <p className="text-xl mb-8 opacity-90">
              Fostering academic excellence through comprehensive education with Islamic values
            </p>
            <div className="flex justify-center gap-8 text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <BookOpen className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">11+</div>
                <div className="text-sm">Subjects</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <Award className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">A1-D1</div>
                <div className="text-sm">Grading System</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">4</div>
                <div className="text-sm">Evaluations</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Interactive Image Gallery Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Academic Activities Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center">
                  <div className="text-purple-600 text-center">
                    <BookOpen className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm font-medium">Academic Activity {item}</p>
                    <p className="text-xs opacity-70">Click to add image</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-purple-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-sm font-medium">Add Image Here</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Curriculum Tabs */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['curriculum', 'grading', 'schedule'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-purple-600 hover:bg-purple-50'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Curriculum Content */}
          {activeTab === 'curriculum' && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-purple-800">Comprehensive Curriculum</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {subjects.map((subject, index) => (
                  <div key={index} className="bg-purple-50 p-4 rounded-lg hover:bg-purple-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-purple-600" />
                      <span className="font-medium">{subject}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-purple-50 rounded-lg">
                <h4 className="text-lg font-semibold mb-4 text-purple-800">Special Features</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Islamic studies integrated with modern curriculum</li>
                  <li>• Qualified and dedicated teaching staff</li>
                  <li>• Modern technology integration</li>
                  <li>• Hifz classes available</li>
                  <li>• NEET preparation for HSC students</li>
                </ul>
              </div>
            </div>
          )}

          {/* Grading System */}
          {activeTab === 'grading' && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-purple-800">Grading System</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {gradingSystem.map((grade, index) => (
                  <div key={index} className="border border-purple-200 rounded-lg p-4 hover:bg-purple-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-purple-600">{grade.grade}</span>
                        <span className="ml-3 text-lg font-medium">{grade.desc}</span>
                      </div>
                      <span className="text-sm text-gray-600">{grade.range}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-purple-50 rounded-lg">
                <h4 className="text-lg font-semibold mb-4 text-purple-800">Promotion Criteria</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Students must maintain equilibrium in written tests and assignments</li>
                  <li>• Minimum 75% attendance required for promotion</li>
                  <li>• Re-examination available for students failing in 3 subjects</li>
                  <li>• Students failing in more than 3 subjects are automatically detained</li>
                </ul>
              </div>
            </div>
          )}

          {/* Exam Schedule */}
          {activeTab === 'schedule' && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-purple-800">Examination Schedule 2025-26</h3>
              <div className="space-y-4">
                {examSchedule.map((exam, index) => (
                  <div key={index} className="border border-purple-200 rounded-lg p-6 hover:bg-purple-50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex items-center gap-3 mb-2 md:mb-0">
                        <Calendar className="w-5 h-5 text-purple-600" />
                        <span className="font-semibold text-lg">{exam.exam}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">{exam.date}</div>
                        <div className="text-sm font-medium text-purple-600">{exam.result}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-purple-50 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl font-bold text-purple-800">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be a well renowned Islamic International Campus ensuring 'academic excellence' by fostering the younger generation with real values of faith which makes them pious and helps to serve the humanity at their best level.
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl font-bold text-purple-800">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To provide excellence in teaching with dedicated tutors to bring out the creative ideas and practical knowledge from the younger minds while instilling values of piety (Taqwa) and Islamic principles for serving society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicExcellence;