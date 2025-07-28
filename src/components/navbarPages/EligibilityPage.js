import React, { useState } from 'react';
import { 
  ChevronRight, 
  Calendar, 
  DollarSign, 
  CheckCircle, 
  Users, 
  GraduationCap, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star, 
  Award, 
  BookOpen, 
  FileText,
  User,
  Heart,
  Shield,
  Target,
  Download,
  Upload,
  CreditCard,
  AlertCircle,
  CheckSquare
} from 'lucide-react';
 
 const EligibilityPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 md:p-8">
            <div className="flex items-center mb-4">
              <CheckSquare className="h-12 w-12 mr-4" />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Eligibility Criteria</h1>
                <p className="text-purple-100 mt-2">Admission Requirements</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                  <User className="h-6 w-6 mr-2" />
                  General Requirements
                </h3>
                <ul className="space-y-3">
                  {[
                    "Age appropriate for the class applying",
                    "Previous academic records",
                    "Birth certificate",
                    "Medical fitness certificate",
                    "Passport size photographs",
                    "Transfer certificate (if applicable)"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                  <BookOpen className="h-6 w-6 mr-2" />
                  Academic Requirements
                </h3>
                <ul className="space-y-3">
                  {[
                    "Minimum 60% marks in previous class",
                    "Good conduct certificate",
                    "English proficiency assessment",
                    "Basic Islamic knowledge (preferred)",
                    "Interview with parents",
                    "Entrance test (for higher classes)"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Age Requirements by Class</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { class: "Nursery", age: "3-4 years" },
                  { class: "LKG", age: "4-5 years" },
                  { class: "UKG", age: "5-6 years" },
                  { class: "Class I", age: "6-7 years" },
                  { class: "Class II", age: "7-8 years" },
                  { class: "Class III", age: "8-9 years" }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow">
                    <div className="font-semibold text-purple-800">{item.class}</div>
                    <div className="text-gray-600">{item.age}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expected School Wide Learning Results</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Academic Excellence</h4>
                  <ul className="space-y-1">
                    <li>• Leadership qualities</li>
                    <li>• Critical thinking skills</li>
                    <li>• Language proficiency</li>
                    <li>• Effective communication</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Character Development</h4>
                  <ul className="space-y-1">
                    <li>• Islamic values</li>
                    <li>• Interpersonal skills</li>
                    <li>• Health awareness</li>
                    <li>• World awareness</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
export default EligibilityPage;
