import React from 'react';
import LayoutHeader from './components/LayoutHeader';
import HeroSection from './components/HeroSection';
import ProjectGallery from './components/ProjectGallery';
import DetailedServices from './components/DetailedServices';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <LayoutHeader />
      <main className="flex-grow">
        <HeroSection />
        <ProjectGallery />
        <DetailedServices />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;

// DONE