import React, { useState } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Users, Award, Building, Target, Eye, Heart, BookOpen, Calendar, Star, Menu, X } from 'lucide-react';

  
  const LeadershipPage = () => (
    <div className="pt-24">
      <section className="py-20 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center text-purple-800 mb-16">Leadership Team</h1>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Principal",
                role: "Academic Leadership",
                description: "Leading the school with vision and dedication to provide quality Islamic education."
              },
              {
                name: "Vice Principal",
                role: "Administrative Head",
                description: "Managing daily operations and ensuring smooth functioning of all school activities."
              },
              {
                name: "Academic Coordinator",
                role: "Curriculum Development",
                description: "Overseeing academic programs and ensuring excellence in teaching methodology."
              }
            ].map((leader, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-xl text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-purple-800 mb-2">{leader.name}</h3>
                <p className="text-purple-600 font-semibold mb-4">{leader.role}</p>
                <p className="text-purple-700">{leader.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-purple-800 mb-8 text-center">Expected School Wide Learning Results</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-purple-800 mb-3">Leadership Qualities</h3>
                  <ul className="space-y-2">
                    {['Self-confidence and Self-esteem', 'Independent thinking', 'Effective decision-making', 'Good management of human resources'].map((item) => (
                      <li key={item} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="text-purple-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-800 mb-3">Critical Thinking</h3>
                  <ul className="space-y-2">
                    {['Investigation of problems', 'Deduction of reasoning', 'Analyzing and visualizing problems', 'Reaching conclusions'].map((item) => (
                      <li key={item} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="text-purple-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-purple-800 mb-3">Communication Skills</h3>
                  <ul className="space-y-2">
                    {['Effective vocabulary skills', 'Clarity of thought', 'Good listening abilities', 'Confident speaking'].map((item) => (
                      <li key={item} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="text-purple-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-800 mb-3">Islamic Character</h3>
                  <ul className="space-y-2">
                    {['Clear knowledge of Islam basics', 'Application of Islamic values', 'Pride in Islamic identity', 'Community awareness'].map((item) => (
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
        </div>
      </section>
    </div>
  );
export default LeadershipPage;