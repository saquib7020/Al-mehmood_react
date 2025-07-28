import React, { useState } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Users, Award, Building, Target, Eye, Heart, BookOpen, Calendar, Star, Menu, X } from 'lucide-react';
  
  
  const ActivitiesPage = () => (


    <div className="pt-24">
      <section className="py-20 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center text-purple-800 mb-16">School Activities</h1>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-purple-800 mb-6">Academic Activities</h2>
              <div className="space-y-6">
                {[
                  { name: 'Science Exhibition', month: 'January 4th Week', desc: 'Students showcase innovative science projects' },
                  { name: 'Quiz Competition', month: 'December 1st Week', desc: 'Vocabulary and general knowledge competition' },
                  { name: 'Debate Competition', month: 'November 3rd Week', desc: 'For classes IV-VII to enhance speaking skills' },
                  { name: 'Story Telling', month: 'November 3rd Week', desc: 'Creative expression for classes I-III' }
                ].map((activity, index) => (
                  <div key={index} className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-lg font-semibold text-purple-800">{activity.name}</h3>
                    <p className="text-purple-600 text-sm mb-2">{activity.month}</p>
                    <p className="text-purple-700">{activity.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-purple-800 mb-6">Cultural Activities</h2>
              <div className="space-y-6">
                {[
                  { name: 'Annual Day', month: 'February 2nd Week', desc: 'Grand celebration showcasing student talents' },
                  { name: 'Qiraath Competition', month: 'July 4th Week', desc: 'Beautiful recitation of the Holy Quran' },
                  { name: 'Food Festival', month: 'March 2nd Week', desc: 'Cultural diversity through cuisine' },
                  { name: 'Art & Craft Competition', month: 'November 2nd Week', desc: 'Creative artistic expressions' }
                ].map((activity, index) => (
                  <div key={index} className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-lg font-semibold text-purple-800">{activity.name}</h3>
                    <p className="text-purple-600 text-sm mb-2">{activity.month}</p>
                    <p className="text-purple-700">{activity.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl mb-16">
            <h2 className="text-3xl font-bold text-purple-800 mb-8 text-center">Activity Gallery</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                'Science Exhibition', 'Annual Sports Day', 'Cultural Program', 'Art Competition',
                'Debate Competition', 'Qiraath Competition', 'Drawing Contest', 'Food Festival'
              ].map((activity, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-lg text-center">
                  <div className="w-full h-24 bg-gradient-to-br from-purple-200 to-purple-300 rounded-lg flex items-center justify-center mb-3">
                    <Calendar className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-sm font-semibold text-purple-800">{activity}</h3>
                </div>
              ))}
            </div>
          </div>

<div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">Annual Calendar</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-purple-800 mb-4">First Term Events</h3>
                <div className="space-y-3">
                  {[
                    { month: 'July', event: 'Qiraath Competition' },
                    { month: 'August', event: 'Independence Day Celebration' },
                    { month: 'September', event: 'Teachers Day Program' },
                    { month: 'October', event: 'Sports Day Preparation' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-purple-600" />
                      <span className="text-purple-700"><strong>{item.month}:</strong> {item.event}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-800 mb-4">Second Term Events</h3>
                <div className="space-y-3">
                  {[
                    { month: 'November', event: 'Art & Craft Competition' },
                    { month: 'December', event: 'Quiz Competition' },
                    { month: 'January', event: 'Science Exhibition' },
                    { month: 'February', event: 'Annual Day Celebration' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-purple-600" />
                      <span className="text-purple-700"><strong>{item.month}:</strong> {item.event}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );


  export default ActivitiesPage;