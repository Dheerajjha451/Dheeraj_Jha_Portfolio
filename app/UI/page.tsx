import React from 'react';
import {Uichallenge} from '../../components/Uichallenge'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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