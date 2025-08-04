import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Download, Search, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; // Add these imports

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRefs = useRef({});
  const mobileMenuRef = useRef(null);
  const navigate = useNavigate(); // Add this hook

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close desktop dropdowns
      if (
        activeDropdown &&
        !Object.values(dropdownRefs.current).some((ref) =>
          ref?.contains(event.target)
        )
      ) {
        setActiveDropdown(null);
      }

      // Close mobile menu
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
        setActiveMobileDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown, isMobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
          setActiveMobileDropdown(null);
        }
        if (activeDropdown) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen, activeDropdown]);

  // Close mobile menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setActiveMobileDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (dropdown) => {
    setActiveMobileDropdown(
      activeMobileDropdown === dropdown ? null : dropdown
    );
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery.trim());
      // Add actual search functionality here
    }
  };

  const handleSearchClear = () => {
    setSearchQuery("");
  };

  const handleEnquireNow = () => {
    // Navigate to contact page or open enquiry form
    navigate("/contact");
  };

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "About Al-Mehmood",
      href: "/about",
      hasDropdown: true,
      dropdownItems: [
        { name: "About Us", href: "/about" },
        { name: "Vision & Mission", href: "/VisionMissionPage" },
        { name: "Leadership Team", href: "/LeadershipPage" },
        { name: "Awards & Recognition", href: "/AwardsPage" },
        { name: "Infrastructure", href: "/InfrastructurePage" },
                { name: "Activities", href: "/ActivitiesPage" }, // Updated to match your route
 // Updated to match your route
      ],
    },
    {
      name: "Why Al-Mehmood",
      href: "/why-al-mehmood",
      hasDropdown: true,
      dropdownItems: [
        { name: "Academic Excellence", href: "/academics" },
        { name: "Teaching Methodology", href: "/teaching" },
        { name: "Student Journey", href: "/StudentsJourney" },
        { name: "Extracurricular Activities", href: "/activities" },
        { name: "Global Exposure", href: "/global" },
      ],
    },
    {
      name: "Admissions",
      href: "/admissions",
      hasDropdown: true,
      dropdownItems: [
        { name: "Admission Process", href: "/admission-process" },
        { name: "Fee Structure", href: "/fees" },
        { name: "Eligibility Criteria", href: "/eligibility" },
        { name: "Important Dates", href: "/important-dates" },
        // { name: "Online Application", href: "/apply" },
      ],
    },
    { name: "Alumni", href: "/alumni" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div
        className="w-full px-4 md:px-8 py-3"
        style={{ backgroundColor: "#361E4B" }}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Left - Download Brochure */}
          <button
            className="flex items-center space-x-2 text-white hover:text-purple-100 transition-colors cursor-pointer group"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/brochure.pdf"; // path relative to public/
              link.download = "Al-Mehmood-Brochure.pdf"; // filename when downloaded
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            aria-label="Download Brochure"
          >
            <Download
              size={18}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="text-base font-medium hidden sm:inline">
              Download Brochure
            </span>
          </button>

          {/* Center - Search Bar */}
          {/* <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearchSubmit(e);
                  }
                }}
                placeholder="Search Al-Mehmood school near you"
                className="w-full px-4 py-2.5 pr-12 text-gray-700 bg-white rounded-full text-base font-medium placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all"
                aria-label="Search schools"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={handleSearchClear}
                  className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
              <button
                type="button"
                onClick={handleSearchSubmit}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </div>
          </div> */}

          {/* Right - Enquire Now Button */}
          <button
            className="text-white px-4 md:px-6 py-2.5 rounded-full text-base font-semibold transition-all hover:shadow-lg transform hover:scale-105"
            style={{ 
              backgroundColor: '#8F59A0',
              ':hover': { backgroundColor: '#2D1B3D' }
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#2D1B3D';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#361E4B';
            }}
            onClick={handleEnquireNow}
          >
            Enquire Now
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className="w-full shadow-lg sticky top-0 z-40"
        style={{ backgroundColor: "#361E4B" }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center">
            {/* Logo */}
            <Link to="/" className="bg-white rounded-sm p-3 mr-8 flex-shrink-0 shadow-sm">
              <div className="flex items-center">
                <div className="w-7 h-7 bg-blue-800 rounded-sm flex items-center justify-center mr-2">
                  <img
                    src="/almehmudlogo.png"
                    alt="Al-Mehmood Logo"
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <div>
                  <div className="text-blue-800 font-bold text-base leading-tight tracking-wide">
                    Al-Mehmood
                  </div>
                  <div className="text-blue-800 text-xs leading-tight tracking-wider font-medium">
                    EDUCATION NETWORK
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 flex-1">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  ref={(el) => (dropdownRefs.current[item.name] = el)}
                  onMouseEnter={() =>
                    item.hasDropdown && handleMouseEnter(item.name)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  {item.hasDropdown ? (
                    <button
                      className="flex items-center space-x-1 text-white hover:text-purple-200 text-base font-medium transition-colors py-6 group"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span className="whitespace-nowrap">{item.name}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform group-hover:scale-110 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center space-x-1 text-white hover:text-purple-200 text-base font-medium transition-colors py-6 group"
                    >
                      <span className="whitespace-nowrap">{item.name}</span>
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          to={dropdownItem.href}
                          className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-purple-600 transition-colors border-b border-gray-50 last:border-b-0"
                          style={{
                            ':hover': {
                              backgroundColor: '#F3E8FF',
                              color: '#8F59A0'
                            }
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#F3E8FF';
                            e.target.style.color = '#8F59A0';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '';
                            e.target.style.color = '#374151';
                          }}
                          onClick={() => setActiveDropdown(null)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                setActiveMobileDropdown(null);
              }}
              className="lg:hidden text-white p-2 ml-auto rounded-md transition-colors"
              style={{
                ':hover': { backgroundColor: '#8F59A0' }
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#8F59A0';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '';
              }}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="lg:hidden bg-white border-t border-gray-200 shadow-lg animate-in slide-in-from-top duration-300"
          >
            <div className="px-4 py-3 max-h-96 overflow-y-auto">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-center justify-between py-4">
                    {item.hasDropdown ? (
                      <button
                        className="text-gray-700 font-medium text-base flex-1 transition-colors text-left"
                        style={{
                          ':hover': { color: '#8F59A0' }
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = '#8F59A0';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = '#374151';
                        }}
                        onClick={() => toggleMobileDropdown(item.name)}
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        className="text-gray-700 font-medium text-base flex-1 transition-colors"
                        style={{
                          ':hover': { color: '#8F59A0' }
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = '#8F59A0';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = '#374151';
                        }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                    {item.hasDropdown && (
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className="text-gray-500 p-2 rounded-md transition-colors"
                        style={{
                          ':hover': { 
                            color: '#8F59A0',
                            backgroundColor: '#F3E8FF'
                          }
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = '#8F59A0';
                          e.target.style.backgroundColor = '#F3E8FF';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = '#6B7280';
                          e.target.style.backgroundColor = '';
                        }}
                        aria-label={`Toggle ${item.name} menu`}
                        aria-expanded={activeMobileDropdown === item.name}
                      >
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${
                            activeMobileDropdown === item.name
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile Dropdown Items */}
                  {item.hasDropdown && activeMobileDropdown === item.name && (
                    <div className="pb-3 pl-4 animate-in slide-in-from-top duration-200">
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          to={dropdownItem.href}
                          className="block px-4 py-3 text-base text-gray-600 rounded-md transition-colors"
                          style={{
                            ':hover': {
                              color: '#8F59A0',
                              backgroundColor: '#F3E8FF'
                            }
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.color = '#8F59A0';
                            e.target.style.backgroundColor = '#F3E8FF';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.color = '#4B5563';
                            e.target.style.backgroundColor = '';
                          }}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setActiveMobileDropdown(null);
                          }}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;