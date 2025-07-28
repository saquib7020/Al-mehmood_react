// import React, { useState } from 'react';
// import { 
//   ChevronRight, 
//   Calendar, 
//   DollarSign, 
//   CheckCircle, 
//   Users, 
//   GraduationCap, 
//   Phone, 
//   Mail, 
//   MapPin, 
//   Clock, 
//   Star, 
//   Award, 
//   BookOpen, 
//   FileText,
//   User,
//   Heart,
//   Shield,
//   Target,
//   Download,
//   Upload,
//   CreditCard,
//   AlertCircle,
//   CheckSquare
// } from 'lucide-react';

// const SchoolPages = () => {
//   const [currentPage, setCurrentPage] = useState('admission-process');

//   const AdmissionProcessPage = () => (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-4 md:p-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 md:p-8">
//             <div className="flex items-center mb-4">
//               <GraduationCap className="h-12 w-12 mr-4" />
//               <div>
//                 <h1 className="text-3xl md:text-4xl font-bold">Admission Process</h1>
//                 <p className="text-purple-100 mt-2">Al-Mahmood International School</p>
//               </div>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="p-6 md:p-8">
//             <div className="grid md:grid-cols-2 gap-8 mb-8">
//               <div className="space-y-6">
//                 <div className="bg-purple-50 rounded-lg p-6">
//                   <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
//                     <Target className="h-6 w-6 mr-2" />
//                     Our Vision
//                   </h3>
//                   <p className="text-gray-700 leading-relaxed">
//                     To be a well renowned Islamic International Campus ensuring 'academic excellence' 
//                     by fostering the younger generation with real values of faith which makes them 
//                     pious and helps to serve the humanity at their best level.
//                   </p>
//                 </div>

//                 <div className="bg-purple-50 rounded-lg p-6">
//                   <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
//                     <Heart className="h-6 w-6 mr-2" />
//                     Our Mission
//                   </h3>
//                   <p className="text-gray-700 leading-relaxed">
//                     To provide excellence in teaching with dedicated tutors to bring out the creative 
//                     ideas and practical knowledge from the younger minds, fostering Islamic values 
//                     and creating a healthy learning environment.
//                   </p>
//                 </div>
//               </div>

//               <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-6">
//                 <h3 className="text-xl font-semibold text-purple-800 mb-4">Admission Steps</h3>
//                 <div className="space-y-4">
//                   {[
//                     { step: 1, title: "Submit Application", desc: "Complete the online application form" },
//                     { step: 2, title: "Document Verification", desc: "Submit required documents" },
//                     { step: 3, title: "Assessment", desc: "Student assessment and interview" },
//                     { step: 4, title: "Fee Payment", desc: "Complete admission fee payment" },
//                     { step: 5, title: "Enrollment", desc: "Complete enrollment process" }
//                   ].map((item) => (
//                     <div key={item.step} className="flex items-start space-x-3">
//                       <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
//                         {item.step}
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-purple-800">{item.title}</h4>
//                         <p className="text-gray-600 text-sm">{item.desc}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg p-6 text-center">
//               <h3 className="text-2xl font-bold mb-2">Start Your Journey Today</h3>
//               <p className="mb-4">Join Al-Mahmood International School for quality education with Islamic values</p>
//               <button 
//                 onClick={() => setCurrentPage('apply')}
//                 className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200"
//               >
//                 Apply Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const FeeStructurePage = () => (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-4 md:p-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 md:p-8">
//             <div className="flex items-center mb-4">
//               <DollarSign className="h-12 w-12 mr-4" />
//               <div>
//                 <h1 className="text-3xl md:text-4xl font-bold">Fee Structure</h1>
//                 <p className="text-purple-100 mt-2">Academic Year 2025-2026</p>
//               </div>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="p-6 md:p-8">
//             <div className="grid md:grid-cols-2 gap-8 mb-8">
//               <div className="bg-purple-50 rounded-lg p-6">
//                 <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
//                   <CreditCard className="h-6 w-6 mr-2" />
//                   Payment Schedule
//                 </h3>
//                 <div className="space-y-4">
//                   <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
//                     <span className="font-medium">First Installment</span>
//                     <span className="text-purple-600 font-bold">At Admission</span>
//                   </div>
//                   <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
//                     <span className="font-medium">Second Installment</span>
//                     <span className="text-purple-600 font-bold">Till 10th October 2025</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-purple-50 rounded-lg p-6">
//                 <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
//                   <AlertCircle className="h-6 w-6 mr-2" />
//                   Important Notes
//                 </h3>
//                 <ul className="space-y-2 text-gray-700">
//                   <li className="flex items-start">
//                     <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                     Fee payment is mandatory before the due date
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                     Late payment may result in additional charges
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                     Fee is non-refundable after admission
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                     Multiple payment options available
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg p-6">
//               <h3 className="text-xl font-semibold text-purple-800 mb-4">Fee Categories</h3>
//               <div className="grid md:grid-cols-3 gap-4">
//                 {[
//                   { category: "Admission Fee", desc: "One-time payment", icon: <GraduationCap className="h-6 w-6" /> },
//                   { category: "Tuition Fee", desc: "Academic instruction", icon: <BookOpen className="h-6 w-6" /> },
//                   { category: "Development Fee", desc: "Infrastructure & facilities", icon: <Shield className="h-6 w-6" /> },
//                   { category: "Transport Fee", desc: "School bus service", icon: <MapPin className="h-6 w-6" /> },
//                   { category: "Activity Fee", desc: "Sports & extra-curricular", icon: <Star className="h-6 w-6" /> },
//                   { category: "Exam Fee", desc: "Evaluation & assessment", icon: <FileText className="h-6 w-6" /> }
//                 ].map((item, index) => (
//                   <div key={index} className="bg-white p-4 rounded-lg shadow">
//                     <div className="flex items-center mb-2">
//                       <div className="text-purple-600 mr-2">{item.icon}</div>
//                       <h4 className="font-semibold text-purple-800">{item.category}</h4>
//                     </div>
//                     <p className="text-gray-600 text-sm">{item.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const EligibilityPage = () => (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-4 md:p-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 md:p-8">
//             <div className="flex items-center mb-4">
//               <CheckSquare className="h-12 w-12 mr-4" />
//               <div>
//                 <h1 className="text-3xl md:text-4xl font-bold">Eligibility Criteria</h1>
//                 <p className="text-purple-100 mt-2">Admission Requirements</p>
//               </div>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="p-6 md:p-8">
//             <div className="grid md:grid-cols-2 gap-8 mb-8">
//               <div className="bg-purple-50 rounded-lg p-6">
//                 <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
//                   <User className="h-6 w-6 mr-2" />
//                   General Requirements
//                 </h3>
//                 <ul className="space-y-3">
//                   {[
//                     "Age appropriate for the class applying",
//                     "Previous academic records",
//                     "Birth certificate",
//                     "Medical fitness certificate",
//                     "Passport size photographs",
//                     "Transfer certificate (if applicable)"
//                   ].map((item, index) => (
//                     <li key={index} className="flex items-start">
//                       <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                       <span className="text-gray-700">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="bg-purple-50 rounded-lg p-6">
//                 <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
//                   <BookOpen className="h-6 w-6 mr-2" />
//                   Academic Requirements
//                 </h3>
//                 <ul className="space-y-3">
//                   {[
//                     "Minimum 60% marks in previous class",
//                     "Good conduct certificate",
//                     "English proficiency assessment",
//                     "Basic Islamic knowledge (preferred)",
//                     "Interview with parents",
//                     "Entrance test (for higher classes)"
//                   ].map((item, index) => (
//                     <li key={index} className="flex items-start">
//                       <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                       <span className="text-gray-700">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg p-6 mb-8">
//               <h3 className="text-xl font-semibold text-purple-800 mb-4">Age Requirements by Class</h3>
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {[
//                   { class: "Nursery", age: "3-4 years" },
//                   { class: "LKG", age: "4-5 years" },
//                   { class: "UKG", age: "5-6 years" },
//                   { class: "Class I", age: "6-7 years" },
//                   { class: "Class II", age: "7-8 years" },
//                   { class: "Class III", age: "8-9 years" }
//                 ].map((item, index) => (
//                   <div key={index} className="bg-white p-4 rounded-lg shadow">
//                     <div className="font-semibold text-purple-800">{item.class}</div>
//                     <div className="text-gray-600">{item.age}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg p-6">
//               <h3 className="text-xl font-semibold mb-4">Expected School Wide Learning Results</h3>
//               <div className="grid md:grid-cols-2 gap-4 text-sm">
//                 <div>
//                   <h4 className="font-semibold mb-2">Academic Excellence</h4>
//                   <ul className="space-y-1">
//                     <li>• Leadership qualities</li>
//                     <li>• Critical thinking skills</li>
//                     <li>• Language proficiency</li>
//                     <li>• Effective communication</li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold mb-2">Character Development</h4>
//                   <ul className="space-y-1">
//                     <li>• Islamic values</li>
//                     <li>• Interpersonal skills</li>
//                     <li>• Health awareness</li>
//                     <li>• World awareness</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const ImportantDatesPage = () => (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-4 md:p-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 md:p-8">
//             <div className="flex items-center mb-4">
//               <Calendar className="h-12 w-12 mr-4" />
//               <div>
//                 <h1 className="text-3xl md:text-4xl font-bold">Important Dates</h1>
//                 <p className="text-purple-100 mt-2">Academic Year 2025-2026</p>
//               </div>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="p-6 md:p-8">
//             <div className="grid md:grid-cols-2 gap-8 mb-8">
//               <div className="bg-purple-50 rounded-lg p-6">
//                 <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
//                   <FileText className="h-6 w-6 mr-2" />
//                   Examination Schedule
//                 </h3>
//                 <div className="space-y-4">
//                   {[
//                     { exam: "I-Evaluation Test", date: "August 1st & 2nd Week", result: "16-08-2025 (Sat)" },
//                     { exam: "I-Term Exam", date: "October 2nd & 3rd Week", result: "15-11-2025 (Sat)" },
//                     { exam: "II-Evaluation Test", date: "January 1st & 2nd Week", result: "17-01-2026 (Sat)" },
//                     { exam: "II-Term Exam", date: "March 4th & April 1st Week", result: "01-05-2026 (Sat)" }
//                   ].map((item, index) => (
//                     <div key={index} className="bg-white p-4 rounded-lg shadow">
//                       <h4 className="font-semibold text-purple-800">{item.exam}</h4>
//                       <p className="text-gray-600 text-sm">Exam: {item.date}</p>
//                       <p className="text-gray-600 text-sm">Result: {item.result}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-purple-50 rounded-lg p-6">
//                 <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
//                   <Clock className="h-6 w-6 mr-2" />
//                   Fee Payment Dates
//                 </h3>
//                 <div className="space-y-4">
//                   <div className="bg-white p-4 rounded-lg shadow">
//                     <h4 className="font-semibold text-purple-800">First Installment</h4>
//                     <p className="text-gray-600">At the time of admission</p>
//                   </div>
//                   <div className="bg-white p-4 rounded-lg shadow">
//                     <h4 className="font-semibold text-purple-800">Second Installment</h4>
//                     <p className="text-gray-600">Till 10th of October 2025</p>
//                   </div>
//                 </div>

//                 <h3 className="text-xl font-semibold text-purple-800 mb-4 mt-6 flex items-center">
//                   <Users className="h-6 w-6 mr-2" />
//                   Parent-Teacher Meetings
//                 </h3>
//                 <div className="bg-white p-4 rounded-lg shadow">
//                   <h4 className="font-semibold text-purple-800">Monthly PTM</h4>
//                   <p className="text-gray-600">Every third Saturday</p>
//                   <p className="text-gray-600">Time: 12:00 PM - 2:00 PM</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg p-6">
//               <h3 className="text-xl font-semibold text-purple-800 mb-4">List of Holidays 2025-2026</h3>
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {[
//                   { date: "06-07-2025", holiday: "Youm-e Ashura" },
//                   { date: "15-08-2025", holiday: "Independence Day" },
//                   { date: "27-08-2025", holiday: "Ganesh Chaturthi" },
//                   { date: "05-09-2025", holiday: "Eid-e-Milad Un Nabi" },
//                   { date: "02-10-2025", holiday: "Gandhi Jayanti" },
//                   { date: "20-25-10-2025", holiday: "Diwali Vacation" },
//                   { date: "25-12-2025", holiday: "Christmas Day" },
//                   { date: "26-01-2026", holiday: "Republic Day" },
//                   { date: "19-02-2026", holiday: "Shiv Jayanti" },
//                   { date: "16-21-03-2026", holiday: "Eid-ul-Fitr" },
//                   { date: "14-04-2026", holiday: "Ambedkar Jayanti" },
//                   { date: "03-04-2026", holiday: "Good Friday" }
//                 ].map((item, index) => (
//                   <div key={index} className="bg-white p-3 rounded-lg shadow">
//                     <div className="font-semibold text-purple-800 text-sm">{item.date}</div>
//                     <div className="text-gray-600 text-sm">{item.holiday}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const OnlineApplicationPage = () => (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-4 md:p-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 md:p-8">
//             <div className="flex items-center mb-4">
//               <Upload className="h-12 w-12 mr-4" />
//               <div>
//                 <h1 className="text-3xl md:text-4xl font-bold">Online Application</h1>
//                 <p className="text-purple-100 mt-2">Apply for Admission</p>
//               </div>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="p-6 md:p-8">
//             <div className="bg-purple-50 rounded-lg p-6 mb-8">
//               <h3 className="text-xl font-semibold text-purple-800 mb-4">Application Form</h3>
//               <form className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Student Name *</label>
//                     <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
//                     <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
//                   </div>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Class Applying For *</label>
//                     <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
//                       <option value="">Select Class</option>
//                       <option value="nursery">Nursery</option>
//                       <option value="lkg">LKG</option>
//                       <option value="ukg">UKG</option>
//                       <option value="class1">Class I</option>
//                       <option value="class2">Class II</option>
//                       <option value="class3">Class III</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
//                     <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
//                       <option value="">Select Gender</option>
//                       <option value="male">Male</option>
//                       <option value="female">Female</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Father's Name *</label>
//                   <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Mother's Name *</label>
//                   <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
//                     <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
//                     <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
//                   <textarea rows="3" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"></textarea>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Previous School</label>
//                     <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Blood Group</label>
//                     <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
//                       <option value="">Select Blood Group</option>
//                       <option value="A+">A+</option>
//                       <option value="A-">A-</option>
//                       <option value="B+">B+</option>
//                       <option value="B-">B-</option>
//                       <option value="AB+">AB+</option>
//                       <option value="AB-">AB-</option>
//                       <option value="O+">O+</option>
//                       <option value="O-">O-</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <h4 className="font-semibold text-gray-800 mb-2">Required Documents</h4>
//                   <ul className="text-sm text-gray-600 space-y-1">
//                     <li>• Birth Certificate</li>
//                     <li>• Previous School Records</li>
//                     <li>• Medical Certificate</li>
//                     <li>• Passport Size Photos</li>
//                     <li>• Address Proof</li>
//                   </ul>
//                 </div>

//                 <div className="flex items-center space-x-2">
//                   <input type="checkbox" className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500" />
//                   <label className="text-sm text-gray-700">I agree to the terms and conditions</label>
//                 </div>

//                 <div className="flex justify-center">
//                   <button 
//                     type="submit"
//                     className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-200 transform hover:scale-105"
//                   >
//                     Submit Application
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

// import React from "react";

// const AlumniPage = () => (
//   <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-4 md:p-8">
//     <div className="max-w-6xl mx-auto">
//       <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//         <div className="p-6 md:p-8">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//             {[
//               {
//                 name: "Dr. Ahmed Hassan",
//                 year: "Class of 2018",
//                 achievement: "Medical Doctor",
//                 desc: "Currently practicing at City Hospital",
//                 image: "👨‍⚕️",
//               },
//               {
//                 name: "Fatima Khan",
//                 year: "Class of 2017",
//                 achievement: "Software Engineer",
//                 desc: "Working at top tech company",
//                 image: "👩‍💻",
//               },
//               {
//                 name: "Mohammad Ali",
//                 year: "Class of 2019",
//                 achievement: "Teacher",
//                 desc: "Inspiring next generation",
//                 image: "👨‍🏫",
//               },
//               {
//                 name: "Ayesha Patel",
//                 year: "Class of 2016",
//                 achievement: "Entrepreneur",
//                 desc: "Started successful business",
//                 image: "👩‍💼",
//               },
//               {
//                 name: "Omar Sheikh",
//                 year: "Class of 2018",
//                 achievement: "Engineer",
//                 desc: "Civil Engineering graduate",
//                 image: "👨‍🔧",
//               },
//               {
//                 name: "Mariam Ahmed",
//                 year: "Class of 2017",
//                 achievement: "Lawyer",
//                 desc: "Human rights advocate",
//                 image: "👩‍⚖️",
//               },
//             ].map((alumni, index) => (
//               <div key={index} className="bg-purple-50 rounded-lg p-6 text-center shadow-md">
//                 <div className="text-4xl mb-4">{alumni.image}</div>
//                 <h3 className="text-xl font-semibold text-purple-800 mb-2">{alumni.name}</h3>
//                 <p className="text-purple-600 font-medium mb-2">{alumni.year}</p>
//                 <p className="text-gray-700 font-semibold mb-2">{alumni.achievement}</p>
//                 <p className="text-gray-600 text-sm">{alumni.desc}</p>
//               </div>
//             ))}
//           </div>

//           <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg p-6">
//             <h3 className="text-xl font-semibold text-purple-800 mb-4 text-center">Alumni Achievements</h3>
//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="bg-white p-4 rounded-lg shadow">
//                 <h4 className="font-semibold text-purple-800 mb-2">Academic Excellence</h4>
//                 <ul className="text-sm text-gray-600 space-y-1">
//                   <li>• 95% university admission rate</li>
//                   <li>• Top performers in board exams</li>
//                   <li>• Scholarship recipients</li>
//                   <li>• Research publication authors</li>
//                 </ul>
//               </div>
//               <div className="bg-white p-4 rounded-lg shadow">
//                 <h4 className="font-semibold text-purple-800 mb-2">Professional Success</h4>
//                 <ul className="text-sm text-gray-600 space-y-1">
//                   <li>• Leadership positions</li>
//                   <li>• Entrepreneurial ventures</li>
//                   <li>• Community service</li>
//                   <li>• International recognition</li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default AlumniPage;
