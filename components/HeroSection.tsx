"use client"
import React from 'react';
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from 'next/image';
import { SiInstagram, SiMedium, SiYoutube, SiLinkedin, SiTwitter, SiBehance, SiGithub } from 'react-icons/si';

import img from '../public/assets/Dheeraj.jpeg';

export default function HeroSection() {
  const words = `UI/UX Designer and Full Stack Developer with a passion for creating beautiful and intuitive digital experiences.`;

  const handleContactMe = () => {
    window.location.href = 'mailto:dheerajjha451@gmail.com';
  };

  const handleDownloadCV = () => {
    const downloadUrl = '/Dheeraj Jha Resume.pdf';
    fetch(downloadUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement('a');
        a.href = url;
        a.setAttribute('download', 'Dheeraj Jha Resume.pdf');
        document.body.appendChild(a);
        a.click();
        a.remove();
      });
  };

  return (
    <div className='min-h-[60vh] top-10 flex flex-col lg:flex-row items-center justify-between relative animate-move-up px-4 lg:px-0'>
      <div className='w-full lg:w-1/2 lg:mr-8 mx-4'>
        <div className='space-y-6 lg:space-y-10 text-center lg:text-left'>
          <h1 className='text-2xl lg:text-4xl xl:text-5xl font-bold leading-tight '>
            Hi! Nice to meet you <br />
            <span className='underline underline-offset-8 decoration-blue-500 '>
              {"I'm Dheeraj Jha"}
            </span>
          </h1>
          <TextGenerateEffect words={words} />
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4 lg:mt-6">
            <SiInstagram size={32} className="text-pink-500 cursor-pointer hover:text-pink-700" onClick={() => window.open('https://www.instagram.com/', '_blank')} />
            <SiMedium size={32} className="text-gray-400 cursor-pointer hover:text-gray-600" onClick={() => window.open('https://medium.com/@dheerajjha451', '_blank')} />
            <SiYoutube size={32} className="text-red-600 cursor-pointer hover:text-red-800" onClick={() => window.open('https://youtube.com/@Dheeraj45136?si=wjzvEru1VVXOA4se', '_blank')} />
            <SiLinkedin size={32} className="text-blue-800 cursor-pointer hover:text-blue-900" onClick={() => window.open('https://linkedin.com/in/dheeraj-jha451/', '_blank')} />
            <SiTwitter size={32} className="text-blue-400 cursor-pointer hover:text-blue-600" onClick={() => window.open('https://twitter.com/dheerajjha451', '_blank')} />
            <SiBehance size={32} className="text-blue-600 cursor-pointer hover:text-blue-800" onClick={() => window.open('https://www.behance.net/dheerajjha2', '_blank')} />
            <SiGithub size={32} className="text-gray-700 cursor-pointer hover:text-gray-900" onClick={() => window.open('https://github.com/Dheerajjha451', '_blank')} />
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mt-6">
            <Button
              className="inline-flex h-12 w-full lg:w-auto items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium px-6 transition-all duration-300 hover:shadow-lg hover:from-blue-900 hover:to-indigo-900"
              onClick={handleContactMe}
            >
              Contact Me
            </Button>
            <Button
              className="inline-flex h-12 w-full lg:w-auto items-center justify-center rounded-md border border-gray-400 bg-white text-gray-700 font-medium px-6 transition-all duration-300 hover:bg-gray-800 hover:text-white mt-4 lg:mt-0"
              onClick={handleDownloadCV}
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>

      <div className='w-full lg:w-1/2 mt-6 lg:mt-0'>
        <div className='w-full lg:max-w-md mx-auto'>
          <Image
            className="rounded-full"
            src={img}
            alt="Profile"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
