import React, { useState } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Users, Award, Building, Target, Eye, Heart, BookOpen, Calendar, Star, Menu, X } from 'lucide-react';


const AwardsPage = () => (
    <div className="pt-24">
      <section className="py-20 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center text-purple-800 mb-16">Awards & Recognition</h1>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center mb-6">
                <Award className="w-10 h-10 text-purple-600 mr-4" />
                <h2 className="text-3xl font-bold text-purple-800">Academic Excellence</h2>
              </div>
              <p className="text-lg text-purple-700 mb-6">
                Our school has been recognized for maintaining high academic standards and 
                providing quality education that prepares students for future success.
              </p>
              <div className="space-y-4">
                {[
                  'Outstanding Performance in Board Examinations',
                  'Excellence in Science and Mathematics',
                  'Recognition for Islamic Studies Program',
                  'Award for Best Teaching Methodology'
                ].map((award) => (
                  <div key={award} className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-purple-600" />
                    <span className="text-purple-700">{award}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center mb-6">
                <Users className="w-10 h-10 text-purple-600 mr-4" />
                <h2 className="text-3xl font-bold text-purple-800">Student Achievements</h2>
              </div>
              <p className="text-lg text-purple-700 mb-6">
                Our students consistently excel in various competitions and examinations, 
                bringing honor to the school and community.
              </p>
              <div className="space-y-4">
                {[
                  'Inter-School Competition Winners',
                  'National Level Science Fair Participants',
                  'Quran Recitation Competition Champions',
                  'Sports and Games Achievements'
                ].map((achievement) => (
                  <div key={achievement} className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-purple-600" />
                    <span className="text-purple-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-purple-800 mb-8 text-center">Recognition Gallery</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-lg text-center">
                  <div className="w-full h-32 bg-gradient-to-br from-purple-200 to-purple-300 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Award {item}</h3>
                  <p className="text-purple-600 text-sm">Recognition for excellence in education and character building</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  export default AwardsPage;