import React from "react";

const StatsSection = () => {
  const stats = [
    { value: "150", label: "Al-Mehmood International Schools" },
    { value: "123", label: "Al-Mehmood Partner Schools" },
    { value: "400", label: "Al-Mehmood Preschools" },
    { value: "2,50,000", label: "Students" },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-purple-300"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-pink-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-purple-200"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center transform hover:scale-105 transition-all duration-300 bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl border border-white/20"
            >
              {/* Decorative star */}
              <div className="flex justify-center mb-4">
                <div className="w-8 h-8 text-orange-400">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-full h-full"
                  >
                    <path d="M12 2l2.09 6.26L20 8l-4.91 4.26L16.18 22 12 17.77 7.82 22l1.09-9.74L4 8l5.91-.74L12 2z" />
                  </svg>
                </div>
              </div>

              {/* Main stat number */}
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent leading-tight">
                {stat.value}
              </div>

              {/* Stat label */}
              <div className="text-purple-700 font-medium text-sm sm:text-base lg:text-lg leading-tight px-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom section for enquiry */}
    </section>
  );
};

export default StatsSection;
