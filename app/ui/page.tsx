import React from 'react';
import {Uichallenge} from '../../components/Uichallenge'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: '100 Days UI Challenge - Design Portfolio',
  description:
    'Explore Dheeraj Jha\'s 100 Days of UI Challenge featuring innovative and creative user interface designs. Daily UI challenges showcasing modern design principles, responsive layouts, and exceptional user experiences.',
  keywords: [
    '100 days UI challenge',
    'UI design portfolio',
    'daily UI designs',
    'creative interfaces',
    'user interface design',
    'UX design showcase',
    'modern UI components',
    'responsive design',
    'design inspiration',
    'UI/UX portfolio',
    'interface design',
    'visual design',
    'design challenges',
    'frontend design',
    'web design portfolio',
    'mobile UI design',
    'design system',
    'user experience'
  ],
  openGraph: {
    title: '100 Days UI Challenge by Dheeraj Jha',
    description: 'Creative UI designs and daily design challenges showcasing modern interface design and user experience principles',
    images: ['/assets/billybeta.png'], 
  },
};
export default function UI() {
  return (
    <div className="min-h-screen bg-black">
      <div className="dark:bg-black bg-white dark:bg-grid-white/[0.05]">
        <div className="max-w-7xl mx-auto overflow-hidden">
          <Navbar />
        </div>
        <div className='py-20'>
        <Uichallenge />
        </div>
        <Footer/>

      </div>
    </div>
  );
}