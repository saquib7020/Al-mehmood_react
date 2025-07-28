import React, { useState } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Users, Award, Building, Target, Eye, Heart, BookOpen, Calendar, Star, Menu, X } from 'lucide-react';
 

const VisionMissionPage = () => (
    <div className="pt-24">
      <section className="py-20 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center text-purple-800 mb-16">Vision & Mission</h1>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center mb-6">
                <Eye className="w-10 h-10 text-purple-600 mr-4" />
                <h2 className="text-3xl font-bold text-purple-800">Our Vision</h2>
              </div>
              <p className="text-lg text-purple-700 leading-relaxed">
                To be a well renowned Islamic International Campus ensuring 'academic excellence' 
                by fostering the younger generation with real values of faith which makes them pious 
                and helps to serve the humanity at their best level.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-purple-600 mr-4" />
                <h2 className="text-3xl font-bold text-purple-800">Our Mission</h2>
              </div>
              <p className="text-lg text-purple-700 leading-relaxed">
                To provide excellence in teaching with dedicated tutors to bring out the creative ideas 
                and practical knowledge from the younger minds. Making students understand the values 
                of piety (Taqwa) and creating a learning environment among our students.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">Our Concept</h2>
            <p className="text-lg text-purple-700 leading-relaxed mb-6">
              An up to date, comprehensive and future oriented International Learning Education. 
              It establishes a sound foundation of early life skills which are necessary to be 
              suitably equipped for quality education with modern technology.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-purple-800 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    'Highly Qualified Dedicated Staff',
                    'Creative & Caring Environment',
                    'Well Equipped Modern Infrastructure',
                    'Islamic Environment',
                    'Hifz Classes',
                    'NEET Classes for HSC students'
                  ].map((item) => (
                    <li key={item} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-purple-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-800 mb-4">Academic Support</h3>
                <ul className="space-y-3">
                  {[
                    'Daily Speech Sessions',
                    'Quiz Competitions',
                    'Counseling Services',
                    'Leadership Development',
                    'Language Development',
                    'Pre-Math Programs'
                  ].map((item) => (
                    <li key={item} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-purple-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

export default VisionMissionPage;