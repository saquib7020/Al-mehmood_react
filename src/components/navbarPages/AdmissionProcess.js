import React, { useState } from 'react';
import { 
  Target,
  Heart
} from 'lucide-react';

const AdmissionProcessPage = () => {
  const [currentPage, setCurrentPage] = useState(''); // Define currentPage state

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                    <Target className="h-6 w-6 mr-2" />
                    Our Vision
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    To be a well renowned Islamic International Campus ensuring 'academic excellence' 
                    by fostering the younger generation with real values of faith which makes them 
                    pious and helps to serve the humanity at their best level.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                    <Heart className="h-6 w-6 mr-2" />
                    Our Mission
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    To provide excellence in teaching with dedicated tutors to bring out the creative 
                    ideas and practical knowledge from the younger minds, fostering Islamic values 
                    and creating a healthy learning environment.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Admission Steps</h3>
                <div className="space-y-4">
                  {[
                    { step: 1, title: "Submit Application", desc: "Complete the online application form" },
                    { step: 2, title: "Document Verification", desc: "Submit required documents" },
                    { step: 3, title: "Assessment", desc: "Student assessment and interview" },
                    { step: 4, title: "Fee Payment", desc: "Complete admission fee payment" },
                    { step: 5, title: "Enrollment", desc: "Complete enrollment process" }
                  ].map((item) => (
                    <div key={item.step} className="flex items-start space-x-3">
                      <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-800">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Start Your Journey Today</h3>
              <p className="mb-4">Join Al-Mahmood International School for quality education with Islamic values</p>
              <button 
                onClick={() => setCurrentPage('apply')}
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200"
              >
                Apply Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdmissionProcessPage;
