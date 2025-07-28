// import React, { useState, useEffect } from 'react';
// import { Search, ChevronDown, ChevronUp, GraduationCap, Users, Calendar, BookOpen, DollarSign, MapPin, Phone, Mail } from 'lucide-react';

// const SchoolFAQComponent = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [activeCategory, setActiveCategory] = useState('all');
//   const [openItems, setOpenItems] = useState(new Set());
//   const [filteredFAQs, setFilteredFAQs] = useState([]);

//   const categories = [
//     { id: 'all', label: 'All Questions', icon: GraduationCap, color: 'bg-purple-500' },
//     { id: 'admission', label: 'Admissions', icon: Users, color: 'bg-blue-500' },
//     { id: 'academic', label: 'Academics', icon: BookOpen, color: 'bg-green-500' },
//     { id: 'fees', label: 'Fees & Payment', icon: DollarSign, color: 'bg-orange-500' },
//     { id: 'facilities', label: 'Facilities', icon: MapPin, color: 'bg-red-500' },
//     { id: 'general', label: 'General Info', icon: Phone, color: 'bg-indigo-500' }
//   ];

//   const faqData = [
//     {
//       id: 1,
//       category: 'admission',
//       question: 'What is the admission process for new students?',
//       answer: 'Our admission process involves: 1) Online application submission with required documents, 2) Entrance assessment (for applicable grades), 3) Parent-student interaction session, 4) Document verification, and 5) Fee payment and confirmation. The entire process typically takes 2-3 weeks from application to confirmation.',
//       tags: ['admission', 'process', 'new students', 'enrollment'],
//       popularity: 98
//     },
//     {
//       id: 2,
//       category: 'admission',
//       question: 'What documents are required for admission?',
//       answer: 'Required documents include: Birth certificate, Previous school transfer certificate, Last 2 years\' report cards, Passport-size photographs (4 copies), Aadhar card copy of student and parents, Income certificate (if applicable), Caste certificate (if applicable), and Medical fitness certificate.',
//       tags: ['documents', 'admission', 'requirements'],
//       popularity: 92
//     },
//     {
//       id: 3,
//       category: 'admission',
//       question: 'What is the minimum age requirement for different grades?',
//       answer: 'Age requirements: Pre-KG (2.5-3.5 years), LKG (3.5-4.5 years), UKG (4.5-5.5 years), Grade 1 (5.5-6.5 years). For higher grades, age is calculated as of March 31st of the academic year. Age relaxation of 6 months may be considered in exceptional cases.',
//       tags: ['age', 'requirement', 'grades', 'eligibility'],
//       popularity: 89
//     },
//     {
//       id: 4,
//       category: 'academic',
//       question: 'Which curriculum does the school follow?',
//       answer: 'We follow the CBSE (Central Board of Secondary Education) curriculum, which provides a strong foundation in academics while encouraging holistic development. Our curriculum is designed to prepare students for competitive exams and higher education while fostering creativity and critical thinking.',
//       tags: ['curriculum', 'CBSE', 'academics', 'education'],
//       popularity: 94
//     },
//     {
//       id: 5,
//       category: 'academic',
//       question: 'What are the school timings?',
//       answer: 'School timings are: Pre-Primary (Pre-KG to UKG): 8:30 AM - 12:30 PM, Primary (Grades 1-5): 8:00 AM - 2:30 PM, Secondary & Sr. Secondary (Grades 6-12): 7:45 AM - 2:45 PM. Extended care is available until 5:00 PM for working parents.',
//       tags: ['timings', 'schedule', 'hours', 'extended care'],
//       popularity: 87
//     },
//     {
//       id: 6,
//       category: 'academic',
//       question: 'What extracurricular activities are offered?',
//       answer: 'We offer diverse activities including: Sports (Cricket, Football, Basketball, Swimming, Athletics), Arts (Music, Dance, Drama, Painting), Technology (Robotics, Coding, AI workshops), Clubs (Debate, Quiz, Environment, Literary), and Leadership programs (Student Council, House System).',
//       tags: ['extracurricular', 'activities', 'sports', 'arts', 'clubs'],
//       popularity: 85
//     },
//     {
//       id: 7,
//       category: 'fees',
//       question: 'What is the fee structure?',
//       answer: 'Our fee structure varies by grade: Pre-Primary: ₹45,000/year, Primary (1-5): ₹55,000/year, Middle (6-8): ₹65,000/year, Secondary (9-10): ₹75,000/year, Sr. Secondary (11-12): ₹85,000/year. This includes tuition, books, and most activities. Additional charges apply for transport and meals.',
//       tags: ['fees', 'structure', 'cost', 'payment'],
//       popularity: 96
//     },
//     {
//       id: 8,
//       category: 'fees',
//       question: 'What payment methods are accepted?',
//       answer: 'We accept multiple payment methods: Online transfer, UPI payments, Credit/Debit cards, Cash payments at school office, Cheques/Demand drafts, and EMI options through partner banks. Online payment portal is available 24/7 for your convenience.',
//       tags: ['payment', 'methods', 'online', 'EMI', 'fees'],
//       popularity: 78
//     },
//     {
//       id: 9,
//       category: 'fees',
//       question: 'Are there any scholarship programs available?',
//       answer: 'Yes, we offer merit-based scholarships (up to 50% fee waiver for academic excellence), need-based financial assistance for economically disadvantaged students, sports scholarships for talented athletes, and sibling discounts (10% for second child, 15% for third child onwards).',
//       tags: ['scholarship', 'financial aid', 'merit', 'sports', 'sibling discount'],
//       popularity: 91
//     },
//     {
//       id: 10,
//       category: 'facilities',
//       question: 'What facilities does the school provide?',
//       answer: 'Our facilities include: Smart classrooms with projectors, Well-equipped science and computer labs, Library with 10,000+ books, Sports complex with swimming pool, Auditorium for 500+ capacity, Medical room with qualified nurse, Cafeteria with nutritious meals, and 24/7 CCTV security.',
//       tags: ['facilities', 'infrastructure', 'labs', 'library', 'sports'],
//       popularity: 93
//     },
//     {
//       id: 11,
//       category: 'facilities',
//       question: 'Is transportation facility available?',
//       answer: 'Yes, we provide safe and reliable bus transportation covering major areas of the city. Our buses are equipped with GPS tracking, CCTV cameras, first aid kits, and trained drivers. Parents can track bus location through our mobile app. Transportation fee is ₹8,000-12,000 per year based on distance.',
//       tags: ['transportation', 'bus', 'GPS', 'safety', 'tracking'],
//       popularity: 86
//     },
//     {
//       id: 12,
//       category: 'general',
//       question: 'What is the student-teacher ratio?',
//       answer: 'We maintain an optimal student-teacher ratio: Pre-Primary: 1:15, Primary: 1:20, Secondary: 1:25. This ensures personalized attention for each student and creates an conducive learning environment where teachers can focus on individual student needs and progress.',
//       tags: ['student-teacher ratio', 'class size', 'personalized attention'],
//       popularity: 82
//     },
//     {
//       id: 13,
//       category: 'general',
//       question: 'How can parents stay updated about their child\'s progress?',
//       answer: 'We provide multiple communication channels: Parent-teacher meetings (monthly), Digital report cards and progress reports, Parent portal and mobile app access, SMS and email notifications, Regular homework diary updates, and 24/7 helpline for queries. Parents are our partners in education.',
//       tags: ['parent communication', 'progress', 'app', 'meetings', 'updates'],
//       popularity: 88
//     },
//     {
//       id: 14,
//       category: 'general',
//       question: 'What safety measures are in place?',
//       answer: 'Safety is our top priority: 24/7 CCTV surveillance, Trained security guards, Visitor management system, Fire safety equipment and regular drills, Medical room with qualified staff, Safe drinking water systems, Anti-bullying policies, and Emergency response procedures with parent notification.',
//       tags: ['safety', 'security', 'CCTV', 'emergency', 'medical'],
//       popularity: 95
//     },
//     {
//       id: 15,
//       category: 'academic',
//       question: 'How do you handle students with learning difficulties?',
//       answer: 'We have a dedicated special education team and inclusive education policies: Individual learning plans, Specialized teaching methods, Counseling support, Regular progress monitoring, Parent guidance sessions, Collaboration with external specialists when needed, and Modified assessment methods to ensure every child succeeds.',
//       tags: ['special education', 'learning difficulties', 'inclusive', 'support'],
//       popularity: 79
//     }
//   ];

//   useEffect(() => {
//     let filtered = faqData;

//     // Filter by category
//     if (activeCategory !== 'all') {
//       filtered = filtered.filter(faq => faq.category === activeCategory);
//     }

//     // Filter by search term
//     if (searchTerm) {
//       filtered = filtered.filter(faq =>
//         faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
//       );
//     }

//     // Sort by popularity
//     filtered.sort((a, b) => b.popularity - a.popularity);

//     setFilteredFAQs(filtered);
//   }, [searchTerm, activeCategory]);

//   const toggleItem = (id) => {
//     const newOpenItems = new Set(openItems);
//     if (newOpenItems.has(id)) {
//       newOpenItems.delete(id);
//     } else {
//       newOpenItems.add(id);
//     }
//     setOpenItems(newOpenItems);
//   };

//   const handleCategoryChange = (categoryId) => {
//     setActiveCategory(categoryId);
//     setOpenItems(new Set()); // Close all open items when changing category
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
//       {/* Header Section */}
//       <div className="bg-white py-16 px-4">
//       <div className="max-w-4xl mx-auto text-center">
//         <div className="flex justify-center mb-6">
//           <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 p-4 rounded-full shadow-lg">
//             <GraduationCap size={48} className="text-white" />
//           </div>
//         </div>
//         <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
//           Frequently Asked Questions
//         </h1>
//         <p className="text-xl text-purple-400 max-w-2xl mx-auto">
//           Find answers to common questions about our school, admissions, academics, and more
//         </p>
//       </div>
//     </div>

//       <div className="max-w-6xl mx-auto px-4 py-12">
      

//         {/* FAQ Items */}
//         <div className="space-y-4">
//           {filteredFAQs.length > 0 ? (
//             filteredFAQs.map((faq) => (
//               <div
//                 key={faq.id}
//                 className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
//               >
//                 <button
//                   onClick={() => toggleItem(faq.id)}
//                   className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
//                 >
//                   <div className="flex items-center justify-between">
//                     <div className="flex-1">
//                       <div className="flex items-center mb-2">
//                         <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mr-3 ${
//                           categories.find(cat => cat.id === faq.category)?.color || 'bg-gray-500'
//                         } text-white`}>
//                           {categories.find(cat => cat.id === faq.category)?.label}
//                         </span>
//                         <div className="flex items-center text-amber-500">
//                           {/* <Star size={14} className="fill-current" /> */}
//                           <span className="text-xs ml-1 text-gray-500">{faq.popularity}% helpful</span>
//                         </div>
//                       </div>
//                       <h3 className="text-lg font-semibold text-gray-800 pr-4">
//                         {faq.question}
//                       </h3>
//                     </div>
//                     <div className={`transform transition-transform duration-300 ${
//                       openItems.has(faq.id) ? 'rotate-180' : ''
//                     }`}>
//                       <ChevronDown className="text-purple-500 flex-shrink-0" size={24} />
//                     </div>
//                   </div>
//                 </button>
                
//                 <div className={`transition-all duration-300 ease-in-out ${
//                   openItems.has(faq.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//                 } overflow-hidden`}>
//                   <div className="px-6 pb-6">
//                     <div className="pt-2 border-t border-gray-100">
//                       <p className="text-gray-700 leading-relaxed text-base">
//                         {faq.answer}
//                       </p>
//                       <div className="flex flex-wrap gap-2 mt-4">
//                         {faq.tags.map((tag) => (
//                           <span
//                             key={tag}
//                             className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-medium"
//                           >
//                             #{tag}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="text-center py-16">
//               <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
//                 <Search className="text-gray-400" size={32} />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-600 mb-2">No results found</h3>
//               <p className="text-gray-500">
//                 Try adjusting your search terms or selecting a different category
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SchoolFAQComponent;



import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, GraduationCap, Users, BookOpen, DollarSign, MapPin, Phone } from 'lucide-react';

const SchoolFAQComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState(new Set());
  const [filteredFAQs, setFilteredFAQs] = useState([]);

  const categories = [
    { id: 'all', label: 'All', icon: GraduationCap },
    { id: 'admission', label: 'Admissions', icon: Users },
    { id: 'academic', label: 'Academics & Hifz', icon: BookOpen },
    { id: 'fees', label: 'Fees', icon: DollarSign },
    { id: 'facilities', label: 'Facilities', icon: MapPin },
    { id: 'general', label: 'General', icon: Phone }
  ];

  const faqData = [
    // Al Mahmood International School General FAQs
    {
      id: 1,
      category: 'academic',
      question: 'What curriculum does Al Mahmood International School follow?',
      answer: 'We follow the CBSE (Central Board of Secondary Education) pattern integrated with Islamic studies and values-based education to ensure holistic development.',
      popularity: 98
    },
    {
      id: 2,
      category: 'academic',
      question: 'Which grades are offered?',
      answer: 'We currently offer education from Nursery to Grade 12.',
      popularity: 95
    },
    {
      id: 3,
      category: 'academic',
      question: 'Is Islamic education part of the daily schedule?',
      answer: 'Yes, Islamic studies, Qur\'an recitation, Tajweed, and Hadith are integrated into the daily routine along with regular academics.',
      popularity: 92
    },
    {
      id: 4,
      category: 'general',
      question: 'Are girls and boys taught separately?',
      answer: 'From Grade 1 onward, gender-sensitive arrangements are made in line with Islamic guidelines.',
      popularity: 88
    },
    {
      id: 5,
      category: 'general',
      question: 'What makes Al Mahmood different from other schools?',
      answer: 'Strong integration of Islamic character building, focus on environmentally responsible practices, blend of modern academics with spiritual grounding, and personal attention through low teacher-student ratio.',
      popularity: 94
    },
    
    // Hifz Program FAQs
    {
      id: 6,
      category: 'academic',
      question: 'What is the duration of the Hifz program?',
      answer: 'It varies by student, but our structured badge-based program allows steady progress at each child\'s pace — full Hifz can take 2–4 years depending on consistency.',
      popularity: 89
    },
    {
      id: 7,
      category: 'academic',
      question: 'Can students do Hifz and school academics together?',
      answer: 'Yes. Our dual-track program ensures students can complete school education and Hifz side by side through careful scheduling.',
      popularity: 91
    },
    {
      id: 8,
      category: 'academic',
      question: 'Do you offer Nazera classes for beginners?',
      answer: 'Yes. Students begin with Noorani Qaida, move to fluent Nazera reading, and then transition to Hifz memorization.',
      popularity: 86
    },
    {
      id: 9,
      category: 'facilities',
      question: 'Is there a hostel or boarding facility for Hifz students?',
      answer: 'Currently not available. Please contact the school administration for future plans regarding boarding facilities.',
      popularity: 75
    },
    
    // Admissions & Administration FAQs
    {
      id: 10,
      category: 'admission',
      question: 'When do admissions open?',
      answer: 'Admissions for the 2025–26 academic year are now closed. Early registration is advised due to limited seats.',
      popularity: 96
    },
    {
      id: 11,
      category: 'admission',
      question: 'What documents are required for admission?',
      answer: 'Required documents include: Birth certificate, Previous school report card (if applicable), Passport-size photos, Aadhaar (if in India), and Transfer Certificate (if transferring).',
      popularity: 93
    },
    {
      id: 12,
      category: 'academic',
      question: 'What are the school timings?',
      answer: 'School runs from 8:00 AM to 2:00 PM for students of class 1st to 12th and pre-primary 9:00 AM to 1:00 PM. Hifz students may have adjusted or extended hours in the morning or after class.',
      popularity: 90
    },
    {
      id: 13,
      category: 'general',
      question: 'How do you communicate with parents?',
      answer: 'We use regular PTMs (Parent-Teacher Meetings), WhatsApp groups, and school diary/app updates to keep parents informed and involved.',
      popularity: 87
    },
    
    // Additional General FAQs to complement the new ones
    {
      id: 14,
      category: 'general',
      question: 'What is the student-teacher ratio?',
      answer: 'We maintain an optimal low student-teacher ratio to ensure personal attention for each student and create a conducive learning environment where teachers can focus on individual student needs and progress.',
      popularity: 82
    },
    {
      id: 15,
      category: 'general',
      question: 'What safety measures are in place?',
      answer: 'Safety is our top priority: 24/7 CCTV surveillance, Trained security guards, Visitor management system, Fire safety equipment and regular drills, Medical room with qualified staff, Safe drinking water systems, Anti-bullying policies, and Emergency response procedures with parent notification.',
      popularity: 85
    },
    {
      id: 16,
      category: 'facilities',
      question: 'What facilities does the school provide?',
      answer: 'Our facilities include: Smart classrooms, Well-equipped science and computer labs, Library, Sports facilities, Prayer hall for Islamic activities, Medical room with qualified nurse, Cafeteria with halal meals, and comprehensive security systems.',
      popularity: 84
    },
    {
      id: 17,
      category: 'academic',
      question: 'How do you balance Islamic education with modern academics?',
      answer: 'We integrate Islamic values and teachings seamlessly with modern CBSE curriculum, ensuring students excel academically while developing strong Islamic character and moral values.',
      popularity: 88
    }
  ];

  useEffect(() => {
    let filtered = faqData;

    if (activeCategory !== 'all') {
      filtered = filtered.filter(faq => faq.category === activeCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    filtered.sort((a, b) => b.popularity - a.popularity);
    setFilteredFAQs(filtered);
  }, [searchTerm, activeCategory]);

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-800 via-purple-600 to-purple-900 bg-clip-text text-transparent mb-4">
            Al Mahmood International School - FAQ
          </h1>
          <p className="text-lg bg-gradient-to-r from-purple-700 via-purple-500 to-purple-800 bg-clip-text text-transparent max-w-2xl mx-auto">
            Find answers to common questions about our Islamic integrated education
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Search Bar */}
        {/* <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search questions..."
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div> */}

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transform transition-transform ${
                        openItems.has(faq.id) ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>
                
                {openItems.has(faq.id) && (
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms or selecting a different category
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchoolFAQComponent;