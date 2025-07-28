import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Loader2,
  CheckCircle,
  AlertCircle,
  X,
} from "lucide-react";
import BASE_URL from "../config";

const SchoolEnquiryForm = () => {
  const [formData, setFormData] = useState({
    state: "Maharashtra",
    city: "Akola",
    school: "",
    firstName: "",
    lastName: "",
    grade: "",
    email: "",
    mobile: "",
    address: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState({
    state: false,
    city: false,
    school: false,
    grade: false,
  });

  const [submissionState, setSubmissionState] = useState({
    isSubmitting: false,
    success: false,
    error: null,
  });

  const states = ["Maharashtra"];
  const cities = {
    Maharashtra: ["Akola"],
  };
  const schools = {
    Akola: ["Ganga Nagar", "Pachmori"],
  };
  const grades = [
    "Pre-KG",
    "LKG",
    "UKG",
    "Grade 1",
    "Grade 2",
    "Grade 3",
    "Grade 4",
    "Grade 5",
    "Grade 6",
    "Grade 7",
    "Grade 8",
    "Grade 9",
    "Grade 10",
    "Grade 11",
    "Grade 12",
  ];

  // Auto-hide success message after 5 seconds
  useEffect(() => {
    if (submissionState.success) {
      const timer = setTimeout(() => {
        setSubmissionState(prev => ({ ...prev, success: false }));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submissionState.success]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Reset dependent dropdowns
    if (field === "state") {
      setFormData((prev) => ({
        ...prev,
        state: value,
        city: "",
        school: "",
      }));
    } else if (field === "city") {
      setFormData((prev) => ({
        ...prev,
        city: value,
        school: "",
      }));
    }

    // Clear errors when user starts typing
    if (submissionState.error) {
      setSubmissionState(prev => ({ ...prev, error: null }));
    }
  };

  const toggleDropdown = (dropdown) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  const selectOption = (field, value) => {
    handleInputChange(field, value);
    setDropdownOpen((prev) => ({
      ...prev,
      [field]: false,
    }));
  };

  const validateForm = () => {
    const requiredFields = [
      'state', 'city', 'school', 'firstName', 'lastName', 
      'grade', 'email', 'mobile', 'address'
    ];
    
    for (let field of requiredFields) {
      if (!formData[field] || formData[field].trim() === '') {
        return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return 'Please enter a valid email address';
    }

    // Mobile validation
    if (!/^\d{10}$/.test(formData.mobile)) {
      return 'Mobile number must be exactly 10 digits';
    }

    return null;
  };

  const handleSubmit = async () => {
    const validationError = validateForm();
    if (validationError) {
      setSubmissionState({
        isSubmitting: false,
        success: false,
        error: validationError,
      });
      return;
    }

    setSubmissionState({
      isSubmitting: true,
      success: false,
      error: null,
    });

    try {
      const response = await fetch(`${BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmissionState({
          isSubmitting: false,
          success: true,
          error: null,
        });
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            state: "Maharashtra",
            city: "Akola",
            school: "",
            firstName: "",
            lastName: "",
            grade: "",
            email: "",
            mobile: "",
            address: "",
          });
        }, 3000);
      } else {
        setSubmissionState({
          isSubmitting: false,
          success: false,
          error: data.message || 'Failed to submit enquiry. Please try again.',
        });
      }
    } catch (error) {
      setSubmissionState({
        isSubmitting: false,
        success: false,
        error: 'Network error. Please check your connection and try again.',
      });
    }
  };

  const dismissError = () => {
    setSubmissionState(prev => ({ ...prev, error: null }));
  };

  const dismissSuccess = () => {
    setSubmissionState(prev => ({ ...prev, success: false }));
  };

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Fixed Notification Container */}
      <div className="fixed top-4 left-4 right-4 z-50 space-y-2">
        {/* Success Message */}
        {submissionState.success && (
          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg shadow-lg animate-pulse">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                <div>
                  <p className="text-green-800 font-semibold">Success!</p>
                  <p className="text-green-700 text-sm">
                    Enquiry submitted successfully! We'll contact you soon.
                  </p>
                </div>
              </div>
              <button
                onClick={dismissSuccess}
                className="text-green-600 hover:text-green-800 flex-shrink-0"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Error Message */}
        {submissionState.error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg shadow-lg animate-pulse">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <AlertCircle className="text-red-600 flex-shrink-0" size={24} />
                <div>
                  <p className="text-red-800 font-semibold">Error</p>
                  <p className="text-red-700 text-sm">
                    {submissionState.error}
                  </p>
                </div>
              </div>
              <button
                onClick={dismissError}
                className="text-red-600 hover:text-red-800 flex-shrink-0"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Loading Overlay */}
      {submissionState.isSubmitting && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
          <div className="bg-white rounded-lg p-8 shadow-2xl max-w-sm mx-4">
            <div className="text-center">
              <Loader2 className="animate-spin mx-auto mb-4 text-purple-600" size={48} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Submitting Enquiry
              </h3>
              <p className="text-gray-600">
                Please wait while we process your request...
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-12 pt-8 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full blur-3xl"></div>
        </div>
        <div className="relative">
          <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 mb-4 tracking-tight leading-tight">
            Enquiry Form
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 text-xl font-medium max-w-md mx-auto leading-relaxed">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="p-4 space-y-4 pb-8">
        {/* State Dropdown */}
        <div className="relative">
          <div
            className="w-full p-4 bg-white rounded-lg border border-gray-200 flex items-center justify-between cursor-pointer focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500"
            onClick={() => toggleDropdown("state")}
          >
            <span className="text-gray-700">
              {formData.state || "Select State"}
            </span>
            <ChevronDown
              className={`text-purple-500 transition-transform ${
                dropdownOpen.state ? "rotate-180" : ""
              }`}
              size={20}
            />
          </div>
          {dropdownOpen.state && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg mt-1 max-h-48 overflow-y-auto z-30 shadow-lg">
              {states.map((state) => (
                <div
                  key={state}
                  className="p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                  onClick={() => selectOption("state", state)}
                >
                  {state}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* City Dropdown */}
        <div className="relative">
          <div
            className="w-full p-4 bg-white rounded-lg border border-gray-200 flex items-center justify-between cursor-pointer focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500"
            onClick={() => toggleDropdown("city")}
          >
            <span className="text-gray-700">
              {formData.city || "Select City"}
            </span>
            <ChevronDown
              className={`text-purple-500 transition-transform ${
                dropdownOpen.city ? "rotate-180" : ""
              }`}
              size={20}
            />
          </div>
          {dropdownOpen.city && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg mt-1 max-h-48 overflow-y-auto z-30 shadow-lg">
              {(cities[formData.state] || []).map((city) => (
                <div
                  key={city}
                  className="p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                  onClick={() => selectOption("city", city)}
                >
                  {city}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* School Dropdown */}
        <div className="relative">
          <div
            className="w-full p-4 bg-white rounded-lg border border-gray-200 flex items-center justify-between cursor-pointer focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500"
            onClick={() => toggleDropdown("school")}
          >
            <span className="text-gray-700">
              {formData.school || "Select School"}
            </span>
            <ChevronDown
              className={`text-purple-500 transition-transform ${
                dropdownOpen.school ? "rotate-180" : ""
              }`}
              size={20}
            />
          </div>
          {dropdownOpen.school && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg mt-1 max-h-48 overflow-y-auto z-30 shadow-lg">
              {(schools[formData.city] || []).map((school) => (
                <div
                  key={school}
                  className="p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                  onClick={() => selectOption("school", school)}
                >
                  {school}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Student's First Name */}
        <div>
          <input
            type="text"
            placeholder="Student's First Name"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            className="w-full p-4 bg-white rounded-lg border border-gray-200 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
          />
        </div>

        {/* Student's Last Name */}
        <div>
          <input
            type="text"
            placeholder="Student's Last Name"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className="w-full p-4 bg-white rounded-lg border border-gray-200 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
          />
        </div>

        {/* Grade Dropdown */}
        <div className="relative">
          <div
            className="w-full p-4 bg-white rounded-lg border border-gray-200 flex items-center justify-between cursor-pointer focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500"
            onClick={() => toggleDropdown("grade")}
          >
            <span
              className={formData.grade ? "text-gray-700" : "text-gray-400"}
            >
              {formData.grade || "Grade"}
            </span>
            <ChevronDown
              className={`text-purple-500 transition-transform ${
                dropdownOpen.grade ? "rotate-180" : ""
              }`}
              size={20}
            />
          </div>
          {dropdownOpen.grade && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg mt-1 max-h-48 overflow-y-auto z-30 shadow-lg">
              {grades.map((grade) => (
                <div
                  key={grade}
                  className="p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                  onClick={() => selectOption("grade", grade)}
                >
                  {grade}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="w-full p-4 bg-white rounded-lg border border-gray-200 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
          />
        </div>

        {/* Mobile Number */}
        <div>
          <input
            type="tel"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value) && value.length <= 10) {
                handleInputChange("mobile", value);
              }
            }}
            className="w-full p-4 bg-white rounded-lg border border-gray-200 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
          />
          {formData.mobile && formData.mobile.length !== 10 && formData.mobile.length > 0 && (
            <p className="text-red-500 text-sm mt-2 flex items-center space-x-1">
              <AlertCircle size={16} />
              <span>Mobile number must be exactly 10 digits</span>
            </p>
          )}
        </div>

        {/* Address */}
        <div>
          <input
            type="text"
            placeholder="Address"
            value={formData.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
            className="w-full p-4 bg-white rounded-lg border border-gray-200 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
          />
        </div>

        {/* Send Enquiry Button */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={submissionState.isSubmitting}
          className={`w-full py-4 text-white font-semibold rounded-lg text-lg transition-all duration-200 transform ${
            submissionState.isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-orange-300 via-pink-300 to-purple-400 hover:from-orange-400 hover:via-pink-400 hover:to-purple-500 hover:scale-105 active:scale-95'
          } shadow-lg hover:shadow-xl`}
        >
          {submissionState.isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <Loader2 className="animate-spin" size={20} />
              <span>SENDING...</span>
            </div>
          ) : (
            'SEND ENQUIRY'
          )}
        </button>
      </div>
    </div>
  );
};

export default SchoolEnquiryForm;