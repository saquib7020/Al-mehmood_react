 import React, { useState } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Users, Award, Building, Target, Eye, Heart, BookOpen, Calendar, Star, Menu, X } from 'lucide-react';

 
 const InfrastructurePage = () => (
    <div className="pt-24">
      <section className="py-20 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center text-purple-800 mb-16">Infrastructure</h1>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center mb-6">
                <Building className="w-10 h-10 text-purple-600 mr-4" />
                <h2 className="text-3xl font-bold text-purple-800">Modern Facilities</h2>
              </div>
              <p className="text-lg text-purple-700 mb-6">
                Our school is equipped with state-of-the-art facilities that provide 
                an optimal learning environment for students.
              </p>
              <div className="space-y-4">
                {[
                  'Well-equipped Modern Classrooms',
                  'Science and Computer Laboratories',
                  'Library with extensive collection',
                  'Prayer Hall and Islamic Center',
                  'Sports and Recreation Facilities',
                  'Medical Room and Health Services'
                ].map((facility) => (
                  <div key={facility} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-purple-700">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-purple-800 mb-6">Safety & Security</h2>
              <p className="text-lg text-purple-700 mb-6">
                We maintain a closed campus policy for the protection and safety of all students.
              </p>
              <div className="space-y-4">
                {[
                  'Closed Campus Security System',
                  'CCTV Surveillance',
                  'Trained Security Personnel',
                  'Emergency Response Protocols',
                  'Safe Transportation Services',
                  'Regular Safety Drills'
                ].map((safety) => (
                  <div key={safety} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-purple-700">{safety}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-purple-800 mb-8 text-center">Campus Gallery</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Classrooms', desc: 'Modern, well-lit classrooms with latest technology' },
                { name: 'Library', desc: 'Extensive collection of books and digital resources' },
                { name: 'Science Lab', desc: 'Fully equipped laboratory for practical learning' },
                { name: 'Computer Lab', desc: 'Latest computers and software for digital literacy' },
                { name: 'Prayer Hall', desc: 'Peaceful space for daily prayers and Islamic activities' },
                { name: 'Sports Ground', desc: 'Spacious playground for physical activities' }
              ].map((facility, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-lg">
                  <div className="w-full h-32 bg-gradient-to-br from-purple-200 to-purple-300 rounded-lg flex items-center justify-center mb-4">
                    <Building className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">{facility.name}</h3>
                  <p className="text-purple-600 text-sm">{facility.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );  

  export default InfrastructurePage;