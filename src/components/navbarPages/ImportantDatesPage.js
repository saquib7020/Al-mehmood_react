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
 

 const ImportantDatesPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 md:p-8">
            <div className="flex items-center mb-4">
              <Calendar className="h-12 w-12 mr-4" />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Important Dates</h1>
                <p className="text-purple-100 mt-2">Academic Year 2025-2026</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                  <FileText className="h-6 w-6 mr-2" />
                  Examination Schedule
                </h3>
                <div className="space-y-4">
                  {[
                    { exam: "I-Evaluation Test", date: "August 1st & 2nd Week", result: "16-08-2025 (Sat)" },
                    { exam: "I-Term Exam", date: "October 2nd & 3rd Week", result: "15-11-2025 (Sat)" },
                    { exam: "II-Evaluation Test", date: "January 1st & 2nd Week", result: "17-01-2026 (Sat)" },
                    { exam: "II-Term Exam", date: "March 4th & April 1st Week", result: "01-05-2026 (Sat)" }
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow">
                      <h4 className="font-semibold text-purple-800">{item.exam}</h4>
                      <p className="text-gray-600 text-sm">Exam: {item.date}</p>
                      <p className="text-gray-600 text-sm">Result: {item.result}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                  <Clock className="h-6 w-6 mr-2" />
                  Fee Payment Dates
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-semibold text-purple-800">First Installment</h4>
                    <p className="text-gray-600">At the time of admission</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-semibold text-purple-800">Second Installment</h4>
                    <p className="text-gray-600">Till 10th of October 2025</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-purple-800 mb-4 mt-6 flex items-center">
                  <Users className="h-6 w-6 mr-2" />
                  Parent-Teacher Meetings
                </h3>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-purple-800">Monthly PTM</h4>
                  <p className="text-gray-600">Every third Saturday</p>
                  <p className="text-gray-600">Time: 12:00 PM - 2:00 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">List of Holidays 2025-2026</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { date: "06-07-2025", holiday: "Youm-e Ashura" },
                  { date: "15-08-2025", holiday: "Independence Day" },
                  { date: "27-08-2025", holiday: "Ganesh Chaturthi" },
                  { date: "05-09-2025", holiday: "Eid-e-Milad Un Nabi" },
                  { date: "02-10-2025", holiday: "Gandhi Jayanti" },
                  { date: "20-25-10-2025", holiday: "Diwali Vacation" },
                  { date: "25-12-2025", holiday: "Christmas Day" },
                  { date: "26-01-2026", holiday: "Republic Day" },
                  { date: "19-02-2026", holiday: "Shiv Jayanti" },
                  { date: "16-21-03-2026", holiday: "Eid-ul-Fitr" },
                  { date: "14-04-2026", holiday: "Ambedkar Jayanti" },
                  { date: "03-04-2026", holiday: "Good Friday" }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg shadow">
                    <div className="font-semibold text-purple-800 text-sm">{item.date}</div>
                    <div className="text-gray-600 text-sm">{item.holiday}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  export default ImportantDatesPage;
