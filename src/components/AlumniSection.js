import React, { useState, useEffect } from "react";

const AlumniSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const alumniData = [
    {
      image:
        "https://res.cloudinary.com/dgroglqvq/image/upload/v1749532982/edf7d759-5081-483d-a59c-195e58d17a04_hykfih.jpg",
      title: "Global Network",
      subtitle: "10,000+ alumni worldwide",
      description:
        "Connect with our distinguished alumni making a difference across industries globally. From tech innovators to healthcare heroes.",
      buttonText: "Join Network",
    },
    {
      image:
        "https://res.cloudinary.com/dgroglqvq/image/upload/v1749532982/59716579-bbd6-45bb-ab47-94b582bc2443_iezwvt.jpg",
      title: "Success Stories",
      subtitle: "Inspiring achievements",
      description:
        "Discover inspiring stories of our graduates who have become leaders, entrepreneurs, and change-makers in their respective fields.",
      buttonText: "Read Stories",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % alumniData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f8e6fa] to-[#f0d8f3]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#430c4d] to-[#722d7c]">
            Alumni Network
          </h2>
          <p className="text-[#430c4d] text-base md:text-xl max-w-2xl mx-auto">
            Join our global community of successful graduates making an impact worldwide
          </p>
        </div>

        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
          {alumniData.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-in-out ${
                index === currentIndex
                  ? "opacity-100 relative"
                  : "opacity-0 absolute inset-0"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
                {/* Text Section */}
                <div className="p-6 sm:p-10 md:p-12 flex flex-col justify-center bg-gradient-to-br from-[#430c4d] to-[#722d7c] text-white">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{item.title}</h3>
                  <p className="text-sm sm:text-lg mb-4 text-purple-200">{item.subtitle}</p>
                  <p className="text-sm sm:text-base mb-6 text-purple-100 leading-relaxed">
                    {item.description}
                  </p>
                  {/* <button className="bg-white text-[#430c4d] px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 w-fit">
                    {item.buttonText} →
                  </button> */}
                </div>

                {/* Image Section */}
                <div className="relative min-h-[250px] sm:min-h-[300px] lg:min-h-[unset]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {alumniData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#430c4d] scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniSection;
