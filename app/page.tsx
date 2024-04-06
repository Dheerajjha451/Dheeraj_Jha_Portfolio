import React from 'react';
import HeroSection from '@/components/HeroSection';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="dark:bg-black bg-white dark:bg-grid-white/[0.05]">
        <div className="max-w-7xl mx-auto">
          <HeroSection />
        </div>
        <div className="max-w-7xl mx-auto">
          <Skills />
        </div>
        <div className="max-w-7xl mx-auto">
          <Projects />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
