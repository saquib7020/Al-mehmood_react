// import React, { useState, useEffect } from 'react';

// const AutoSlidingSection = ({ title, items, sectionId, delay = 0 }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % items.length);
//     }, 3500 + delay); // Different timing for each section

//     return () => clearInterval(interval);
//   }, [items.length, delay]);

//   return (
//     <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
//       <div className="relative h-64 overflow-hidden">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
//               index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
//             }`}
//           >
//             <img
//               src={item.image}
//               alt={item.alt}
//               className="w-full h-full object-cover"
//             />
//             <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-70`}></div>
//             <div className="absolute bottom-4 left-4 right-4 text-white">
//               <h4 className="text-lg font-bold mb-1">{item.subtitle}</h4>
//               <p className="text-sm opacity-90">{item.caption}</p>
//             </div>
//           </div>
//         ))}

//         {/* Section indicator */}
//         <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
//           <span className="text-white text-sm font-medium">
//             {currentIndex + 1}/{items.length}
//           </span>
//         </div>
//       </div>

//       <div className="p-8">
//         <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
//         <p className="text-gray-600 mb-6 leading-relaxed">
//           {items[currentIndex].description}
//         </p>

//         {/* Progress indicators */}
//         <div className="flex space-x-2 mb-6">
//           {items.map((_, index) => (
//             <div
//               key={index}
//               className={`h-1 flex-1 rounded transition-all duration-500 ${
//                 index === currentIndex ? 'bg-purple-500' : 'bg-gray-200'
//               }`}
//             >
//               {index === currentIndex && (
//                 <div className="h-full bg-purple-600 rounded animate-pulse"></div>
//               )}
//             </div>
//           ))}
//         </div>

//         <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-2xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
//           {items[currentIndex].buttonText} →
//         </button>
//       </div>
//     </div>
//   );
// };

// const ThreeAutoSlidingSections = () => {
//   const alumniData = [
//     {
//       image: 'https:://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop',
//       alt: 'Alumni Network',
//       subtitle: 'Global Network',
//       caption: '10,000+ alumni worldwide',
//       description: 'Connect with our distinguished alumni making a difference across industries globally. From tech innovators to healthcare heroes.',
//       buttonText: 'Join Network',
//       gradient: 'from-blue-900/50 to-purple-900/50'
//     },
//     {
//       image: 'https:://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop',
//       alt: 'Success Stories',
//       subtitle: 'Success Stories',
//       caption: 'Inspiring achievements',
//       description: 'Discover inspiring stories of our graduates who have become leaders, entrepreneurs, and change-makers in their respective fields.',
//       buttonText: 'Read Stories',
//       gradient: 'from-indigo-900/50 to-blue-900/50'
//     },
//     {
//       image: 'https:://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop',
//       alt: 'Mentorship',
//       subtitle: 'Mentorship Program',
//       caption: 'Guidance for growth',
//       description: 'Our alumni mentorship program connects current students with experienced professionals for career guidance and personal development.',
//       buttonText: 'Find Mentor',
//       gradient: 'from-purple-900/50 to-pink-900/50'
//     }
//   ];

//   const galleryData = [
//     {
//       image: 'https:://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop',
//       alt: 'Campus Events',
//       subtitle: 'Campus Life',
//       caption: 'Vibrant student activities',
//       description: 'Explore memorable moments from our campus events, festivals, and celebrations that make our institution a home away from home.',
//       buttonText: 'View Gallery',
//       gradient: 'from-emerald-900/50 to-teal-900/50'
//     },
//     {
//       image: 'https:://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
//       alt: 'Graduation Ceremony',
//       subtitle: 'Graduation Day',
//       caption: 'Moments of achievement',
//       description: 'Witness the joy and pride of our graduation ceremonies where dreams become reality and new journeys begin.',
//       buttonText: 'See Moments',
//       gradient: 'from-orange-900/50 to-red-900/50'
//     },
//     {
//       image: 'https:://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop',
//       alt: 'Sports Events',
//       subtitle: 'Sports & Athletics',
//       caption: 'Champions in action',
//       description: 'Celebrate our athletic achievements and sporting events that showcase the competitive spirit and teamwork of our students.',
//       buttonText: 'Sports Gallery',
//       gradient: 'from-green-900/50 to-emerald-900/50'
//     }
//   ];

//   const resultsData = [
//     {
//       image: 'https:://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
//       alt: 'Academic Excellence',
//       subtitle: '2025 Board Results',
//       caption: '95% distinction rate',
//       description: 'Celebrating our outstanding 2025 board exam results with record-breaking scores and the highest distinction rate in our history.',
//       buttonText: 'View Results',
//       gradient: 'from-yellow-900/50 to-orange-900/50'
//     },
//     {
//       image: 'https:://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
//       alt: 'Top Performers',
//       subtitle: 'Top Performers',
//       caption: 'Excellence recognized',
//       description: 'Meet our top performers who have set new benchmarks in academic excellence and brought glory to our institution.',
//       buttonText: 'Meet Toppers',
//       gradient: 'from-red-900/50 to-pink-900/50'
//     },
//     {
//       image: 'https:://images.unsplash.com/photo-1427751840561-9852520f8ce8?w=600&h=400&fit=crop',
//       alt: 'Awards Ceremony',
//       subtitle: 'Awards & Recognition',
//       caption: 'Honoring achievements',
//       description: 'Recognition ceremonies celebrating academic achievements, perfect attendance, and outstanding contributions to school community.',
//       buttonText: 'See Awards',
//       gradient: 'from-violet-900/50 to-purple-900/50'
//     }
//   ];

//   return (
//     <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
//             Our Departments
//           </h2>
//           <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
//             Discover the excellence across our institution through our achievements, memories, and vibrant community
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Alumni Network Section */}
//           <AutoSlidingSection
//             title="Alumni Network"
//             items={alumniData}
//             sectionId="alumni"
//             delay={0}
//           />

//           {/* Photo Gallery Section */}
//           <AutoSlidingSection
//             title="Photo Gallery"
//             items={galleryData}
//             sectionId="gallery"
//             delay={1000}
//           />

//           {/* Recent Results Section */}
//           <AutoSlidingSection
//             title="Recent Results"
//             items={resultsData}
//             sectionId="results"
//             delay={2000}
//           />
//         </div>

//         {/* Bottom Statistics */}
//         <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//           <div className="bg-white rounded-2xl p-6 shadow-lg">
//             <div className="text-3xl font-bold text-purple-600 mb-2">10,000+</div>
//             <div className="text-gray-600">Alumni Worldwide</div>
//           </div>
//           <div className="bg-white rounded-2xl p-6 shadow-lg">
//             <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
//             <div className="text-gray-600">Memorable Moments</div>
//           </div>
//           <div className="bg-white rounded-2xl p-6 shadow-lg">
//             <div className="text-3xl font-bold text-emerald-600 mb-2">95%</div>
//             <div className="text-gray-600">Success Rate</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ThreeAutoSlidingSections;
