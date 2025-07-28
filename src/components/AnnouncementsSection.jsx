import React, { useEffect, useState } from "react";
import BASE_URL from "../config";
const AnnouncementTicker = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetch(
      `${BASE_URL}/announcements`
    )
      .then((res) => res.json())
      .then((data) => setAnnouncements(data));
  }, []);

  return (
    <div className="bg-purple-100 overflow-hidden whitespace-nowrap py-3 border-y-2 border-purple-300">
      <div className="animate-marquee inline-block">
        {announcements.map((item, index) => (
          <span
            key={index}
            className="mx-6 text-purple-800 font-semibold text-base"
          >
            📢 {item.title}: {item.description}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementTicker;
