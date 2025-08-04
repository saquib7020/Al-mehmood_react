import React from 'react';

const SchoolInfoSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 relative">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2
          className="text-center text-xl sm:text-2xl font-normal mb-8 sm:mb-12 lg:mb-16 px-2"
          style={{ color: '#8b7355' }}
        >
          Information on Al-Mehmood International School
        </h2>

        {/* Cards Grid (2-column on all screen sizes) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6">
          {/* Admission Process Card */}
          <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="mb-3 sm:mb-4 lg:mb-6 flex justify-center">
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#f8f4ff' }}
              >
                <svg width="16" height="16" className="sm:w-6 sm:h-6 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="8" stroke="#8b5cf6" strokeWidth="2" />
                  <path d="m21 21-4.35-4.35" stroke="#8b5cf6" strokeWidth="2" />
                  <path d="M11 8v6" stroke="#8b5cf6" strokeWidth="2" />
                  <path d="M8 11h6" stroke="#8b5cf6" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <h3 className="text-sm sm:text-base lg:text-lg font-normal leading-relaxed" style={{ color: '#6b7280' }}>
              Admission Process
            </h3>
          </div>

          {/* Fee Structure Card */}
          {/* <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="mb-3 sm:mb-4 lg:mb-6 flex justify-center">
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#f8f4ff' }}
              >
                <svg width="16" height="16" className="sm:w-6 sm:h-6 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="16" rx="2" stroke="#8b5cf6" strokeWidth="2" />
                  <path d="M7 8h10" stroke="#8b5cf6" strokeWidth="2" />
                  <path d="M7 12h4" stroke="#8b5cf6" strokeWidth="2" />
                  <text x="16" y="14" fontSize="8" fill="#8b5cf6" fontWeight="600">₹</text>
                </svg>
              </div>
            </div>
            <h3 className="text-sm sm:text-base lg:text-lg font-normal leading-relaxed" style={{ color: '#6b7280' }}>
              Fee Structure
            </h3>
          </div> */}

          {/* Locations Card */}
          <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="mb-3 sm:mb-4 lg:mb-6 flex justify-center">
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#f8f4ff' }}
              >
                <svg width="16" height="16" className="sm:w-6 sm:h-6 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" stroke="#8b5cf6" strokeWidth="2" />
                  <circle cx="12" cy="10" r="3" stroke="#8b5cf6" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <h3 className="text-sm sm:text-base lg:text-lg font-normal leading-relaxed" style={{ color: '#6b7280' }}>
              Locations
            </h3>
          </div>

          {/* Enquiry Form Card */}
          {/* <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="mb-3 sm:mb-4 lg:mb-6 flex justify-center">
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#f8f4ff' }}
              >
                <svg width="16" height="16" className="sm:w-6 sm:h-6 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#8b5cf6" strokeWidth="2" />
                  <polyline points="14,2 14,8 20,8" stroke="#8b5cf6" strokeWidth="2" />
                  <line x1="16" y1="13" x2="8" y2="13" stroke="#8b5cf6" strokeWidth="2" />
                  <line x1="16" y1="17" x2="8" y2="17" stroke="#8b5cf6" strokeWidth="2" />
                  <polyline points="10,9 9,9 8,9" stroke="#8b5cf6" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <h3 className="text-sm sm:text-base lg:text-lg font-normal leading-relaxed" style={{ color: '#6b7280' }}>
              Enquiry Form
            </h3>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SchoolInfoSection;