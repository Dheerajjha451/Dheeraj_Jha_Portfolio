import React from 'react';
import {Uichallenge} from '../../components/Uichallenge'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: '100 Days of UI Challenge',
  description:
    'Explore our 100 Days of UI Challenge featuring innovative and creative UI designs. Join the journey to enhance your UI/UX skills with daily challenges, tips, and inspiration. Perfect for designers and developers passionate about UI/UX design.',
  keywords: [
    'UI challenge',
    '100 days of UI challenge',
    'UI/UX design',
    'creative UI designs',
    'daily UI challenges',
    'UI inspiration',
    'UX tips',
    'UI/UX development',
    'design challenges',
    'user interface design',
    'frontend design',
    'UI challenges for developers',
    'UI/UX learning',
    'design trends',
    'modern UI components',
    'responsive UI designs',
    'UI ideas for designers',
  ],
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