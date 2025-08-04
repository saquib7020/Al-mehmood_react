import React from 'react';

const AlMehmoodEducationSection = () => {
  // Replace this with your actual YouTube video ID
  const youtubeVideoId = "dqz90H_kGp0"; // Placeholder - replace with actual video ID
  
  return (
    <div className="w-full py-8 px-4 md:py-16 md:px-8" style={{backgroundColor: '#F8F4FF'}}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Video Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0&modestbranding=1`}
                title="Al-Mehmood Education Network Video"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          
          {/* Content Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-normal leading-relaxed mb-6" style={{color: '#361E4B'}}>
              Educating{' '}
              <span className="font-medium" style={{color: '#361E4B'}}>2,50,000 students</span>
              {' '}through{' '}
              <span className="font-medium" style={{color: '#361E4B'}}>150 Al-Mehmood International Schools</span>
              {' '}+{' '}
              <span className="font-medium" style={{color: '#361E4B'}}>123 Al-Mehmood Partner Schools</span>
              , Al-Mehmood Education Network has established itself as a leader in the education sector.
            </h2>
            
            <p className="text-base md:text-lg font-normal leading-relaxed" style={{color: '#8F59A0', opacity: '0.9'}}>
              Established in{' '}
              <span className="font-medium" style={{color: '#361E4B', opacity: '1'}}>1927</span>
              , Al-Mehmood Education Network's aim is not just to impart knowledge but to foster the growth of responsible, well-rounded, and lifelong learners who can contribute positively to society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlMehmoodEducationSection;