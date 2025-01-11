import React from 'react';
import HeroSection from '@/components/HeroSection';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';
import { Work } from '@/components/Work';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Portfolio - Build Projects with Responsive Design & Enhanced User Experience',
  description:
    'Explore the portfolio of a skilled freelancer. Discover top projects, UI/UX design, and the best practices for building responsive websites and applications. Get inspired by the "Product of the Day" and "Product of the Week" showcasing innovative design and development.',
  keywords: [
    'freelancer portfolio',
    'product of the day',
    'product of the week',
    'build responsive projects',
    'enhanced user experience',
    'UI/UX design',
    'web development portfolio',
    'front-end development',
    'build projects',
    'responsive design',
    'web application development',
    'top projects',
    'UI/UX best practices',
    'user-centered design',
    'mobile-first design',
    'modern web development',
    'frontend freelancer',
    'portfolio website',
    'website layout',
    'innovative design',
    'freelance developer',
    'freelance portfolio',
  ],
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
