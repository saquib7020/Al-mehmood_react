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
 
 
 const FeeStructurePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 md:p-8">
            <div className="flex items-center mb-4">
              <DollarSign className="h-12 w-12 mr-4" />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Fee Structure</h1>
                <p className="text-purple-100 mt-2">Academic Year 2025-2026</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                  <CreditCard className="h-6 w-6 mr-2" />
                  Payment Schedule
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">First Installment</span>
                    <span className="text-purple-600 font-bold">At Admission</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Second Installment</span>
                    <span className="text-purple-600 font-bold">Till 10th October 2025</span>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                  <AlertCircle className="h-6 w-6 mr-2" />
                  Important Notes
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    Fee payment is mandatory before the due date
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    Late payment may result in additional charges
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    Fee is non-refundable after admission
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    Multiple payment options available
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Fee Categories</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { category: "Admission Fee", desc: "One-time payment", icon: <GraduationCap className="h-6 w-6" /> },
                  { category: "Tuition Fee", desc: "Academic instruction", icon: <BookOpen className="h-6 w-6" /> },
                  { category: "Development Fee", desc: "Infrastructure & facilities", icon: <Shield className="h-6 w-6" /> },
                  { category: "Transport Fee", desc: "School bus service", icon: <MapPin className="h-6 w-6" /> },
                  { category: "Activity Fee", desc: "Sports & extra-curricular", icon: <Star className="h-6 w-6" /> },
                  { category: "Exam Fee", desc: "Evaluation & assessment", icon: <FileText className="h-6 w-6" /> }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow">
                    <div className="flex items-center mb-2">
                      <div className="text-purple-600 mr-2">{item.icon}</div>
                      <h4 className="font-semibold text-purple-800">{item.category}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  export default FeeStructurePage;
