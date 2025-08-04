import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-purple-50 to-purple-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Us Section */}
          <div>
            <h3
              className="text-2xl font-normal mb-8"
              style={{ color: "#7c3aed" }}
            >
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="text-purple-600 leading-relaxed">
                <p>Al-Mahmood International School,</p>
                <p>Sunnah Hospital, Ganga Nagar </p>
                <p>Akola ,Maharashtra. India</p>
              </div>
              <div className="text-purple-600 leading-relaxed">
                <p>Al-Mahmood Campus, Akot Road, Pachmori, Akola - 444006</p>
              </div>

              <div className="space-y-2">
                <p className="text-purple-700">
                  <span className="font-medium">Email Address</span>
                  <span className="text-purple-600">
                    : almahmoodschoolakl@gmail.com
                  </span>
                </p>
                <p className="text-purple-700">
                  <span className="font-medium">Telephone No</span>
                  <span className="text-purple-600">: 022 43330000</span>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <div className="space-y-4">
                <a
                  href="#"
                  className="block text-purple-600 hover:text-purple-800 transition-colors"
                >
                  About Us
                </a>
               <a
  href="/why-al-mehmood"
  className="block text-purple-600 hover:text-purple-800 transition-colors"
>
  Why Al-Mahmood
</a>

                <a
                  href="/brochure.pdf"
                  download
                  className="block text-purple-600 hover:text-purple-800 transition-colors"
                >
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4">
          {/* Facebook */}
          <a
            href="#"
            className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
            style={{ backgroundColor: "#7c3aed" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="#"
            className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
            style={{ backgroundColor: "#7c3aed" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="#"
            className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
            style={{ backgroundColor: "#7c3aed" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;