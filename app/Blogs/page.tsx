import React from 'react';
import Blogs from '@/components/Blogs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-black mx-2">
      <div className="dark:bg-black bg-white dark:bg-grid-white/[0.05]">
        <div className="max-w-7xl mx-auto overflow-hidden">
          <Navbar />
        </div>
        <div className='py-20'>
        <Blogs />
        </div>
        <Footer/>

      </div>
    </div>
  );
}