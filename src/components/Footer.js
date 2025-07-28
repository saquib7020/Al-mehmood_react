// import React, { useState, useEffect } from 'react';
// import {
//   MapPin,
//   Mail,
//   Phone,
//   ExternalLink,
//   ChevronRight,
//   Facebook,
//   Twitter,
//   Linkedin,
//   Instagram,
//   Youtube,
//   ArrowUp
// } from 'lucide-react';

// export default function AlMehmoodFooter() {
//   const [hoveredState, setHoveredState] = useState(null);
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   const states = [
//     'Andhra Pradesh', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
//     'Karnataka', 'Madhya Pradesh', 'Maharashtra', 'Punjab', 'Telangana', 'West Bengal'
//   ];

//   const quickLinks = [
//     { name: 'About Us', href: '/about-Al-Mehmood-education-network' },
//     { name: 'Why Al-Mehmood', href: '/the-right-students-life' },
//     { name: 'Download Brochure', href: 'https://www.Al-Mehmoodeducation.org/brochure/corporate', external: true },
//     { name: 'Transport Policy', href: '/transport-policy' },
//     { name: 'Careers', href: 'http://careers.Al-Mehmoodeducation.org/', external: true },
//     { name: 'Admissions', href: '/admissions' },
//     { name: 'Locations', href: '/locations' },
//     { name: 'FAQs', href: '/faqs' },
//     { name: 'Blogs', href: '/blog', external: true }
//   ];

//   const socialLinks = [
//     { name: 'Facebook', href: 'https://www.facebook.com/Al-Mehmoodgroupofschools/', icon: Facebook, color: 'hover:bg-blue-600' },
//     { name: 'Twitter', href: 'https://twitter.com/Al-MehmoodIndia', icon: Twitter, color: 'hover:bg-sky-500' },
//     { name: 'LinkedIn', href: 'https://www.linkedin.com/company/Al-Mehmood-education-network-pvt-ltd/', icon: Linkedin, color: 'hover:bg-blue-700' },
//     { name: 'Instagram', href: 'https://www.instagram.com/Al-Mehmoodgroupofschools/', icon: Instagram, color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500' },
//     { name: 'YouTube', href: 'https://www.youtube.com/channel/UCCvN-nw89aKX95l-NC_jWRw', icon: Youtube, color: 'hover:bg-red-600' }
//   ];

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 300);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>

//       <div className="relative z-10">
//         {/* States Section */}
//         <div className="border-b border-slate-700/50 bg-slate-800/30 backdrop-blur-sm">
//           <div className="max-w-7xl mx-auto px-6 py-8">
//             <div className="text-center mb-6">
//               <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
//                 Al-Mehmood Schools Across India
//               </h3>
//               <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
//             </div>

//             <div className="flex flex-wrap justify-center gap-3">
//               {states.map((state, index) => (
//                 <a
//                   key={state}
//                   href={state === 'Maharashtra' ? '/schools-in-maharashtra' : '/locations'}
//                   className="group relative px-4 py-2 bg-slate-700/30 backdrop-blur-sm rounded-lg border border-slate-600/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
//                   onMouseEnter={() => setHoveredState(index)}
//                   onMouseLeave={() => setHoveredState(null)}
//                 >
//                   <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
//                     {state}
//                   </span>
//                   <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${hoveredState === index ? 'animate-pulse' : ''}`}></div>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Main Footer Content */}
//         <div className="max-w-7xl mx-auto px-6 py-16">
//           <div className="grid lg:grid-cols-3 gap-12">

//             {/* Contact Information */}
//             <div className="lg:col-span-1">
//               <div className="mb-8">
//                 <h3 className="text-2xl font-bold mb-6 flex items-center">
//                   <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-3 flex items-center justify-center">
//                     <MapPin className="w-4 h-4 text-white" />
//                   </div>
//                   Contact Us
//                 </h3>

//                 <div className="space-y-6">
//                   <div className="group">
//                     <div className="flex items-start space-x-3 p-4 rounded-lg bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 hover:border-blue-400/50 transition-all duration-300">
//                       <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
//                       <div>
//                         <p className="text-slate-300 leading-relaxed">
//                           Al-Mehmood Centre, 85, Chamarbaug Post Office Lane,<br />
//                           Dr. Ambedkar Road, Parel,<br />
//                           Mumbai - 400012, Maharashtra, India
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="grid gap-3">
//                     <a
//                       href="mailto:admissions@Al-Mehmood.org"
//                       className="group flex items-center space-x-3 p-4 rounded-lg bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
//                     >
//                       <Mail className="w-5 h-5 text-blue-400" />
//                       <span className="text-slate-300 group-hover:text-white transition-colors">
//                         admissions@Al-Mehmood.org
//                       </span>
//                       <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
//                     </a>

//                     <a
//                       href="tel:02243330000"
//                       className="group flex items-center space-x-3 p-4 rounded-lg bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
//                     >
//                       <Phone className="w-5 h-5 text-blue-400" />
//                       <span className="text-slate-300 group-hover:text-white transition-colors">
//                         022 43330000
//                       </span>
//                       <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div className="lg:col-span-1">
//               <h3 className="text-2xl font-bold mb-6 flex items-center">
//                 <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-3 flex items-center justify-center">
//                   <ChevronRight className="w-4 h-4 text-white" />
//                 </div>
//                 Quick Links
//               </h3>

//               <div className="grid gap-2">
//                 {quickLinks.map((link, index) => (
//                   <a
//                     key={link.name}
//                     href={link.href}
//                     target={link.external ? '_blank' : undefined}
//                     rel={link.external ? 'noopener noreferrer' : undefined}
//                     className="group flex items-center justify-between p-3 rounded-lg bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
//                     style={{ animationDelay: `${index * 50}ms` }}
//                   >
//                     <span className="text-slate-300 group-hover:text-white transition-colors font-medium">
//                       {link.name}
//                     </span>
//                     <div className="flex items-center space-x-2">
//                       {link.external && <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" />}
//                       <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Social Links & Newsletter */}
//             <div className="lg:col-span-1">
//               <h3 className="text-2xl font-bold mb-6 flex items-center">
//                 <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg mr-3 flex items-center justify-center">
//                   <Facebook className="w-4 h-4 text-white" />
//                 </div>
//                 Connect With Us
//               </h3>

//               <div className="grid grid-cols-3 gap-3 mb-8">
//                 {socialLinks.map((social, index) => {
//                   const Icon = social.icon;
//                   return (
//                     <a
//                       key={social.name}
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`group relative flex items-center justify-center p-4 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 hover:border-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} hover:shadow-2xl`}
//                       style={{ animationDelay: `${index * 100}ms` }}
//                     >
//                       <Icon className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
//                       <span className="sr-only">{social.name}</span>
//                     </a>
//                   );
//                 })}
//               </div>

//               <div className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30">
//                 <h4 className="font-semibold mb-3 text-lg">Stay Updated</h4>
//                 <p className="text-slate-300 text-sm mb-4">
//                   Get the latest news and updates from Al-Mehmood Education Network
//                 </p>
//                 <div className="flex space-x-2">
//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     className="flex-1 px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                   />
//                   <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg font-medium">
//                     Subscribe
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-slate-700/50 bg-slate-800/30 backdrop-blur-sm">
//           <div className="max-w-7xl mx-auto px-6 py-6">
//             <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
//               <div className="text-slate-400 text-sm">
//                 © 2025 Al-Mehmood Education Network. All rights reserved.
//               </div>
//               <div className="flex items-center space-x-6">
//                 <a href="/privacypolicy" className="text-slate-400 hover:text-white transition-colors text-sm">
//                   Privacy Policy
//                 </a>
//                 <a href="/terms-and-conditions" className="text-slate-400 hover:text-white transition-colors text-sm">
//                   Terms & Conditions
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll to Top Button */}
//       {showScrollTop && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
//           aria-label="Scroll to top"
//         >
//           <ArrowUp className="w-5 h-5" />
//         </button>
//       )}
//     </footer>
//   );
// }

import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Al-Mehmood Schools In Section */}
        {/* <div className="mb-12">
          <h2
            className="text-2xl font-normal mb-6"
            style={{ color: "#9333ea" }}
          >
            Al-Mehmood Schools In
          </h2>
          <p className="text-gray-600 leading-relaxed text-base">
            Ganga Nagar , Pachmori
          </p>
        </div> */}

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Us Section */}
          <div>
            <h3
              className="text-2xl font-normal mb-8"
              style={{ color: "#9333ea" }}
            >
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="text-gray-600 leading-relaxed">
                <p>Al-Mehmood International School,</p>
                <p>Sunnah Hospital, Ganga Nagar </p>
                <p>Akola ,Maharashtra. India</p>
              </div>
              <div className="text-gray-600 leading-relaxed">
                <p>Al-Mahmood Campus, Akot Road, Pachmori, Akola - 444006</p>
              </div>

              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-medium">Email Address</span>
                  <span className="text-gray-600">
                    : almahmoodschoolakl@gmail.com
                  </span>
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Telephone No</span>
                  <span className="text-gray-600">: 022 43330000</span>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <div className="space-y-4">
                <a
                  href="#"
                  className="block text-gray-600 hover:text-purple-600 transition-colors"
                >
                  About Us
                </a>
               <a
  href="/why-al-mehmood"
  className="block text-gray-600 hover:text-purple-600 transition-colors"
>
  Why Al-Mehmood
</a>

                <a
                  href="/brochure.pdf"
                  download
                  className="block text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4">
          {/* Facebook */}
          <a
            href="#"
            className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
            style={{ backgroundColor: "#9333ea" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* Twitter/X */}
          {/* <a
            href="#"
            className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
            style={{ backgroundColor: "#9333ea" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a> */}

          {/* LinkedIn */}
          {/* <a
            href="#"
            className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
            style={{ backgroundColor: "#9333ea" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a> */}

          {/* Instagram */}
          <a
            href="#"
            className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
            style={{ backgroundColor: "#9333ea" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="#"
            className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
            style={{ backgroundColor: "#9333ea" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
