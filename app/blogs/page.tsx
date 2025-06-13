import React from 'react';
import { Metadata } from 'next';
import Blogs from '@/components/Blogs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export const metadata: Metadata = {
  title: 'Tech Blogs & Insights',
  description:
    'Read Dheeraj Jha\'s technical blogs covering AI, machine learning, web development, cloud technologies, and innovative project insights. Stay updated with latest trends in technology and software development.',
  keywords: [
    'tech blog',
    'AI articles',
    'machine learning tutorials',
    'web development blog',
    'React tutorials',
    'Next.js insights',
    'cloud computing',
    'AWS tutorials',
    'Google Cloud Platform',
    'Docker containerization',
    'full stack development',
    'programming tutorials',
    'software engineering',
    'technology trends',
    'development best practices',
    'code tutorials'
  ],
  openGraph: {
    title: 'Tech Blogs by Dheeraj Jha',
    description: 'Technical insights and tutorials on AI, web development, cloud technologies, and modern programming practices',
    images: ['/assets/Dheeraj.jpeg'],
  },
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
