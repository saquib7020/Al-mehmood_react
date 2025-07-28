import React, { useState, useEffect, useCallback } from "react";
import { LoaderCircle } from "lucide-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FuturisticNavbar from "./components/NavBar";
import AlMehmoodFooter from "./components/Footer";
import HomePage from "./components/HomePAge";
import WhyAlMehmoodPage from "./components/WhyAlMehmood";
import AboutUsPage from "./components/AboutUs";
import StudentJourney from "./components/StudentsJourney";
import VisionMissionPage from "./components/navbarPages/VisionMissionPage";
import ActivitiesPage from "./components/navbarPages/ActivitiesPage";
import InfrastructurePage from "./components/navbarPages/InfrastructurePage";
import AwardsPage from "./components/navbarPages/AwardsPage";
import LeadershipPage from "./components/navbarPages/LeadershipPage";
import AcademicExcellence from "./components/navbarPages/AcademicExcellence";
import TeachingMethodology from "./components/navbarPages/TeachingMethodology";
import StudentJourneySection from "./components/StudentJourneySection";
import ExtracurricularActivities from "./components/navbarPages/ExtracurricularActivities";
import GlobalExposure from "./components/navbarPages/GlobalExposure";
import ImportantDatesPage from "./components/navbarPages/ImportantDatesPage";
import FeeStructurePage from "./components/navbarPages/FeeStructurePage";
import AlumniPage from "./components/navbarPages/AlumniPage";
import EligibilityPage from "./components/navbarPages/EligibilityPage";
import AdmissionProcessPage from "./components/navbarPages/AdmissionProcess";
import OnlineApplicationPage from "./components/navbarPages/OnlineApplicationPage";
import SchoolEnquiryForm from "./components/ContactSection";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // if (loading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-white">
  //       <div className="flex flex-col items-center space-y-4">
  //         <LoaderCircle className="animate-spin text-purple-600" size={48} />
  //         <p className="text-gray-700 text-lg">Loading content...</p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 text-gray-800 font-sans overflow-x-hidden">
        <FuturisticNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/why-al-mehmood" element={<WhyAlMehmoodPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/StudentsJourney" element={<StudentJourneySection />} />
          <Route path="/VisionMissionPage" element={<VisionMissionPage />} />
          <Route path="/ActivitiesPage" element={<ActivitiesPage />} />
          <Route path="/InfrastructurePage" element={<InfrastructurePage />} />
          <Route path="/AwardsPage" element={<AwardsPage />} />
          <Route path="/LeadershipPage" element={<LeadershipPage />} />
                    <Route path="/academics" element={<AcademicExcellence />} />
          <Route path="/teaching" element={<TeachingMethodology />} />
          <Route path="/activities" element={<ExtracurricularActivities />} />
          <Route path="/global" element={<GlobalExposure />} />
           <Route path="/alumni" element={<AlumniPage />} />
          <Route path="/apply" element={<OnlineApplicationPage />} />
          <Route path="/important-dates" element={<ImportantDatesPage />} />
          <Route path="/eligibility" element={<EligibilityPage />} />
          <Route path="/fees" element={<FeeStructurePage />} />
          <Route path="/admission-process" element={<AdmissionProcessPage />} />
                    <Route path="/contact" element={<SchoolEnquiryForm />} />







          {/* Add more routes here */}
        </Routes>
        <AlMehmoodFooter />
      </div>
    </Router>
  );
};

export default App;
