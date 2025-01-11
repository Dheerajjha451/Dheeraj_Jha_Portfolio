import React from 'react';
import { Metadata } from 'next';
import Blogs from '@/components/Blogs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export const metadata: Metadata = {
  title: 'Blogs | Full Stack Developer - Insights on Technology, AI, and Machine Learning',
  description:
    'Discover engaging blogs about AI, machine learning, generative AI, Docker, AWS, Google Cloud, and innovative projects like StudBud and OncoSight. Explore the latest trends and insights in technology, development, and research.',
  keywords: [
    'AI blogs',
    'machine learning blogs',
    'generative AI with Google Cloud',
    'Docker tutorial',
    'AWS AI and ML Scholarship',
    'StudBud platform',
    'OncoSight brain tumor detection',
    'technology trends',
    'innovative projects',
    'high-performance workstations',
    'technical insights',
    'IgniPC blogs',
  ],
};
export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="dark:bg-black bg-white dark:bg-grid-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <Navbar />
        </div>
        <div className="py-10 px-4 sm:px-6 lg:px-8">
          <Blogs />
        </div>
        <Footer />
      </div>
    </div>
  );
}
