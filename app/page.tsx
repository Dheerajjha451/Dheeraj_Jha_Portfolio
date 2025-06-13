import React from 'react';
import HeroSection from '@/components/HeroSection';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';
import { Work } from '@/components/Work';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Home',
  description:
    'Welcome to Dheeraj Jha\'s portfolio - showcasing innovative projects in full stack development, UI/UX design, and cutting-edge technology solutions. Explore responsive web applications, AI/ML integrations, and award-winning designs.',
  keywords: [
    'portfolio',
    'full stack projects',
    'responsive web design',
    'UI/UX portfolio',
    'web development projects',
    'React applications',
    'Next.js projects',
    'modern web development',
    'frontend development',
    'backend solutions',
    'innovative design',
    'user experience',
    'professional portfolio',
    'software projects',
    'technology showcase'
  ],
  openGraph: {
    title: 'Dheeraj Jha - Portfolio & Projects',
    description: 'Discover innovative projects and professional work by Dheeraj Jha - Full Stack Developer and UI/UX Designer',
    images: ['/assets/Dheeraj.jpeg'],
  },
};
export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="dark:bg-black bg-white dark:bg-grid-white/[0.05]">
        <div className="max-w-7xl mx-auto">
          <HeroSection />
        </div>
        <div className="max-w-7xl mx-auto my-20 sm:my-20">      
        <Work/>
        </div>
        <div className="max-w-7xl mx-auto my-20 sm:my-20">      
        <Projects />
        </div>
        <div className="max-w-7xl mx-auto">
          <Skills />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
