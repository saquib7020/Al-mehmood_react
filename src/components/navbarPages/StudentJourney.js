import React, { useState } from 'react';
import { MapPin, Clock, BookOpen, Trophy, Calendar, Users, Star, CheckCircle } from 'lucide-react';

const StudentJourney = () => {
  const [activeYear, setActiveYear] = useState('primary');
  
  const journeyStages = [
    {
      id: 'admission',
      title: 'Admission Process',
      description: 'Welcome to Al-Mahmood family',
      icon: <MapPin className="w-6 h-6" />,
      color: 'bg-purple-500'
    },
    {
      id: 'primary',
      title: 'Primary Education',
      description: 'Foundation building years',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'bg-purple-600'
    },
    {
      id: 'activities',
      title: 'Co-curricular Activities',
      description: 'Holistic development',
      icon: <Trophy className="w-6 h-6" />,
      color: 'bg-purple-700'
    },
    {
      id: 'graduation',
      title: 'Graduation',
      description: 'Ready for the future',
      icon: <Star className="w-6 h-6" />,
      color: 'bg-purple-800'
    }
  ];
  
  const dailySchedule = [
    { time: '7:55 AM', activity: 'Morning Assembly with Prayers' },
    { time: '8:25 AM', activity: 'Classes Begin' },
    { time: '10:00 AM', activity: 'First Break' },
    { time: '12:00 PM', activity: 'Lunch & Namaz Time' },
    { time: '1:00 PM', activity: 'Afternoon Classes' },
    { time: '3:00 PM', activity: 'Co-curricular Activities' },
    { time: '4:00 PM', activity: 'School Dismissal' }
  ];
  
  const monthlyActivities = [
    { month: 'July', activities: ['Clay Modeling', 'Qiraath Competition'] },
    { month: 'August', activities: ['Medical Checkup', 'Drawing Competition'] },
    { month: 'September', activities: ['Handwriting Competition', 'Elocution Competition'] },
    { month: 'October', activities: ['I-Term Exam', 'Diwali Celebration'] },
    { month: 'November', activities: ['Art & Craft', 'Debate Competition'] },
    { month: 'December', activities: ['Quiz Competition', 'Annual Sports'] }
  ];

  const admissionProcess = [
    { step: 1, title: 'Application Form', description: 'Complete the online application form with required documents' },
    { step: 2, title: 'Document Verification', description: 'Submit birth certificate, previous school records, and photographs' },
    { step: 3, title: 'Interaction Session', description: 'Meet with faculty for assessment and orientation' },
    { step: 4, title: 'Admission Confirmation', description: 'Pay fees and receive welcome kit' }
  ];

  const primaryEducation = [
    { grade: 'Pre-KG', subjects: ['Arabic', 'English', 'Mathematics', 'Environmental Studies', 'Islamic Studies'] },
    { grade: 'KG', subjects: ['Arabic', 'English', 'Mathematics', 'General Knowledge', 'Islamic Studies'] },
    { grade: 'Grade 1-5', subjects: ['Arabic', 'English', 'Mathematics', 'Science', 'Social Studies', 'Islamic Studies', 'Computer Science'] }
  ];

  const activities = [
    { category: 'Sports', items: ['Cricket', 'Football', 'Basketball', 'Athletics', 'Table Tennis'] },
    { category: 'Arts', items: ['Drawing', 'Painting', 'Calligraphy', 'Craft Work', 'Photography'] },
    { category: 'Academic', items: ['Debate', 'Quiz', 'Elocution', 'Essay Writing', 'Science Exhibition'] },
    { category: 'Cultural', items: ['Annual Day', 'Cultural Programs', 'Festival Celebrations', 'Drama'] }
  ];

  const graduationAchievements = [
    { title: 'Academic Excellence', description: 'Strong foundation in core subjects with Islamic values' },
    { title: 'Character Development', description: 'Moral and ethical values deeply embedded' },
    { title: 'Leadership Skills', description: 'Confidence to lead and make positive changes' },
    { title: 'Future Ready', description: 'Prepared for higher education and life challenges' }
  ];

  const getStageContent = () => {
    switch(activeYear) {
      case 'admission':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">Admission Process</h3>
            <div className="grid gap-4">
              {admissionProcess.map((step, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white rounded-lg p-4 shadow-sm">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'primary':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">Primary Education</h3>
            <div className="grid gap-4">
              {primaryEducation.map((level, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-purple-800 mb-3">{level.grade}</h4>
                  <div className="flex flex-wrap gap-2">
                    {level.subjects.map((subject, idx) => (
                      <span key={idx} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'activities':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">Co-curricular Activities</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {activities.map((category, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-purple-800 mb-3">{category.category}</h4>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      case 'graduation':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">Graduation Achievements</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {graduationAchievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <Star className="w-6 h-6 text-yellow-500" />
                    <h4 className="font-semibold text-purple-800">{achievement.title}</h4>
                  </div>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      {/* Hero Section */}
      {/* <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Student Journey</h1>
            <p className="text-xl mb-8 opacity-90">
              Experience the comprehensive educational journey at Al-Mahmood International School
            </p>
            <div className="flex justify-center gap-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <Calendar className="w-8 h-8 mx-auto mb-2" />
                <div className="text-lg font-bold">12 Months</div>
                <div className="text-sm">Academic Year</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="text-lg font-bold">500+</div>
                <div className="text-sm">Students</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <Trophy className="w-8 h-8 mx-auto mb-2" />
                <div className="text-lg font-bold">50+</div>
                <div className="text-sm">Activities</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Journey Timeline */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-purple-800 mb-4">Educational Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow the complete educational journey from admission to graduation, designed to nurture both academic excellence and Islamic values.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 bg-white rounded-lg p-2 shadow-lg">
            {journeyStages.map((stage, index) => (
              <button
                key={stage.id}
                onClick={() => setActiveYear(stage.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeYear === stage.id 
                    ? `${stage.color} text-white shadow-lg` 
                    : 'text-gray-600 hover:bg-purple-50'
                }`}
              >
                {stage.icon}
                <span className="font-medium">{stage.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Stage Content */}
        <div className="mb-12">
          {getStageContent()}
        </div>

        {/* Daily Schedule */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Clock className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-bold text-purple-800">Daily Schedule</h3>
            </div>
            <div className="space-y-3">
              {dailySchedule.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium text-purple-800">{item.time}</span>
                  <span className="text-gray-700">{item.activity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Activities */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Calendar className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-bold text-purple-800">Monthly Activities</h3>
            </div>
            <div className="space-y-4">
              {monthlyActivities.map((month, index) => (
                <div key={index} className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-purple-800 mb-2">{month.month}</h4>
                  <ul className="space-y-1">
                    {month.activities.map((activity, idx) => (
                      <li key={idx} className="text-gray-600 text-sm">• {activity}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Journey?</h3>
          <p className="text-lg mb-6 opacity-90">
            Join Al-Mahmood International School and be part of an educational experience that combines academic excellence with Islamic values.
          </p>
          <button className="bg-white text-purple-800 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
            Apply for Admission
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentJourney;