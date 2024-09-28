import React from 'react';
import Blogs from '@/components/Blogs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
