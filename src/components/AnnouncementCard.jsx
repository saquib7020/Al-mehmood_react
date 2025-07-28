import React from 'react';
import { Calendar, Star } from 'lucide-react';

const iconMap = {
  Calendar: <Calendar className="text-purple-600 mb-4" size={32} />,
  Star: <Star className="text-purple-600 mb-4" size={32} />,
};

const AnnouncementCard = ({ icon, title, description, buttonText }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
      {iconMap[icon]}
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors duration-200">
        {buttonText} →
      </button>
    </div>
  );
};

export default AnnouncementCard;
