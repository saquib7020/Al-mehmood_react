import React from "react";
import HeroSection from "../components/HeroCarousel";
import AnnouncementsSection from "../components/AnnouncementsSection";
import AlMehmoodEducationSection from "../components/VideoSection";
import StatsSection from "../components/Stats";
import ContactSection from "../components/ContactSection";
import SchoolInfoSection from "../components/SchoolInfoSection";
import StudentJourneySection from "../components/StudentJourneySection";
import AchievementsCarousel from "../components/AchievementsCarousel";
import SchoolHighlightsSlider from "../components/SliderCarousoul";
import StudentGallery from "../components/StudentGallery";
import SchoolFAQComponent from "../components/SchoolFAQComponent";

const HomePage = () => (
  <>
    <HeroSection />
    {/* <AnnouncementsSection /> */}
    <AlMehmoodEducationSection />
    {/* <StatsSection /> */}
    <section id="contact" className="py-20 px-4 bg-purple-50">
      <div className="max-w-4xl mx-auto">
        <ContactSection />
      </div>
    </section>
    <SchoolInfoSection />
    <StudentJourneySection />
    <AchievementsCarousel />
    <SchoolHighlightsSlider />
    <StudentGallery />
    <SchoolFAQComponent />
  </>
);

export default HomePage;
