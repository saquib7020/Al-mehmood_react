import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight, Home, Users, BookOpen, Target } from 'lucide-react';

const StudentsJourney = () => {
  const [expandedContent, setExpandedContent] = useState({});

  const programs = [
    {
      id: 'symphonics',
      title: 'Symphonics',
      description: 'An in-house phonics program for students from Pre-school to Std. V that aims to develop a strong foundation in the English language by integrating pho',
      fullDescription: 'nics into learning, reading, and writing with the use of colourful flashcards, interesting stories and melodic rhymes to make learning joyful!',
      image: '/api/placeholder/800/400',
      mobileImage: '/api/placeholder/400/300'
    },
    {
      id: 'remedial-learning',
      title: 'Remedial Learning',
      description: 'As every child learns at their own pace, Podar Innovation Center provides resources that aid school teachers in providing additional support for stude',
      fullDescription: 'nts who require remediation. Using productive worksheets on Literacy and Numeracy, we aim to strengthen each child\'s core academic skills and assist students in accomplishing expected proficiency in school.',
      image: '/api/placeholder/800/400',
      mobileImage: '/api/placeholder/400/300'
    },
    {
      id: 'spell-the-beans',
      title: 'Spell the Beans',
      description: 'While spellings form an integral part of Languages and other subjects, learning spellings can be a dull activity for learners. Keeping this in mind, P',
      fullDescription: 'odar Innovation Center introduces the \'Spell the Beans\' programme, targeting students from Grade III to Grade IX, which incorporates fun & engaging activities into the curriculum to help retain spellings.',
      image: '/api/placeholder/800/400',
      mobileImage: '/api/placeholder/400/300'
    },
    {
      id: 'theatre-in-education',
      title: 'Theatre in Education',
      description: 'Students learn best by doing. Taking a step beyond academics, Podar Innovation Center introduces a Theatre in Education program that integrates intera',
      fullDescription: 'ctive theatre practices and drama activities to aid the educational process. Our Theatre in Education program provides the perfect opportunities for students to experience and perceive concepts, refine communication skills, enhance performance, and boost self-confidence.',
      image: '/api/placeholder/800/400',
      mobileImage: '/api/placeholder/400/300'
    },
    {
      id: 'academic-guidance',
      title: 'Academic Guidance for Std IX & X',
      description: 'Std IX & X are the most crucial years in a student\'s life. To ensure that students are prepared to ace all crucial tests and Board examinations, our t',
      fullDescription: 'eachers are diligently trained to provide the best academic guidance to all students.',
      image: '/api/placeholder/800/400',
      mobileImage: '/api/placeholder/400/300'
    },
    {
      id: 'beanstalk-olympiads',
      title: 'Beanstalk Olympiads',
      description: 'A benchmark test in English, Mathematics and Science, Beanstalk Olympiad strives to measure students\' strengths and work on improvisation by taking th',
      fullDescription: 'e academic competition to a level of excellence. By providing a competitive platform, we aim to enhance the student\'s learning and application skills as well as the teaching-learning process.',
      image: '/api/placeholder/800/400',
      mobileImage: '/api/placeholder/400/300'
    },
    {
      id: 'integrated-english',
      title: 'Integrated English',
      description: 'As an extension of academic and co-curricular work at Podar, our Integrated English program moulds self-initiated learners to showcase independent thi',
      fullDescription: 'nking, self-confidence, teamwork, and efficient communication skills by developing 21st-century skills of Critical Thinking, Communication, Collaboration and Creativity through theme-based modules which introduce experiential and project-based learning techniques as their basis for learning.',
      image: '/api/placeholder/800/400',
      mobileImage: '/api/placeholder/400/300'
    }
  ];

  const exploreLinks = [
    { title: 'Our Curriculum', href: '/curriculum-and-content' },
    { title: 'Our Approach', href: '/the-right-approach' },
    { title: 'Our Faculty', href: '/the-right-faculty' },
    { title: 'Classroom Technology', href: '/classroom-technology' }
  ];

  const toggleContent = (id) => {
    setExpandedContent(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen bg-purple-50">
      {/* Breadcrumb */}
      <div className="bg-white shadow-sm border-b border-purple-100">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm text-purple-600">
            <Home className="w-4 h-4" />
            <span>Home</span>
            <ArrowRight className="w-3 h-3" />
            <span>Why Al-Mehmood</span>
            <ArrowRight className="w-3 h-3" />
            <span>The Right Curriculum</span>
            <ArrowRight className="w-3 h-3" />
            <span className="text-purple-800 font-medium">Student's Journey</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
            Student's Journey
          </h1>
          <div className="w-20 h-1 bg-white mx-auto mb-8 rounded-full"></div>
          <div className="max-w-4xl mx-auto">
            <img 
              src="/api/placeholder/800/400" 
              alt="Student Journey Banner"
              className="w-full rounded-lg shadow-2xl hidden md:block border-4 border-white/20"
            />
            <img 
              src="/api/placeholder/400/300" 
              alt="Student Journey Banner - Mobile"
              className="w-full rounded-lg shadow-2xl md:hidden border-4 border-white/20"
            />
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-12">
        <p className="text-lg md:text-xl text-purple-700 text-center leading-relaxed max-w-5xl mx-auto">
          At Podar International School, our aim is not just to impart knowledge but to foster the growth of responsible, well-rounded, and lifelong learners who can contribute positively to society. We have developed a number of initiatives and programs to help achieve this goal.
        </p>
      </div>

      {/* Programs Section */}
      <div className="space-y-16">
        {programs.map((program, index) => (
          <div key={program.id} className="bg-white shadow-sm">
            {/* Program Header */}
            <div className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 text-white py-12">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 capitalize">
                  {program.title}
                </h2>
                <div className="max-w-5xl mx-auto">
                  <img 
                    src={program.image} 
                    alt={`${program.title} program`}
                    className="w-full rounded-lg shadow-xl hidden md:block border-4 border-white/30"
                  />
                  <img 
                    src={program.mobileImage} 
                    alt={`${program.title} program - Mobile`}
                    className="w-full rounded-lg shadow-xl md:hidden border-4 border-white/30"
                  />
                </div>
              </div>
            </div>

            {/* Program Content */}
            <div className="container mx-auto px-4 py-8 bg-purple-25">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-purple-100">
                  <p className="text-lg md:text-xl text-purple-800 leading-relaxed">
                    <span>{program.description}</span>
                    {!expandedContent[program.id] && (
                      <span className="text-purple-400">...</span>
                    )}
                    {expandedContent[program.id] && (
                      <span>{program.fullDescription}</span>
                    )}
                  </p>
                  <button
                    onClick={() => toggleContent(program.id)}
                    className="mt-4 flex items-center space-x-2 text-purple-600 hover:text-purple-800 font-medium transition-colors"
                  >
                    <span>{expandedContent[program.id] ? 'Read Less' : 'Read More'}</span>
                    {expandedContent[program.id] ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Explore More Section */}
      <div className="bg-purple-100 py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-purple-700 mb-8">
            Explore more about
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {exploreLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="bg-white hover:bg-purple-50 text-purple-800 px-6 py-3 rounded-full border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 font-medium shadow-sm hover:shadow-md"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsJourney;