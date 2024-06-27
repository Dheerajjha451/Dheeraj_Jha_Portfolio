"use client"
import React from 'react';
import Title from './Title';
import Link from 'next/link';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { SiMedium } from 'react-icons/si'; 

import blog1 from '../public/assets/StudBud.png'
import blog2 from '../public/assets/Prompt.jpg';
import blog3 from '../public/assets/G.png';
import blog4 from '../public/assets/robohand.jpg';
import blog5 from '../public/assets/OncoScout.png';
import blog6 from '../public/assets/docker.webp';
import { title } from 'process';

export default function Blogs() {
    const blogs = [
        {
            title: 'The Idea behind StudBud',
            content: 'A Student Buddy which provides the latest news, articles, and research-related information to the students.',
            cover: blog1,
            link: 'https://medium.com/@dheerajjha451/the-idea-behind-studbud-a-student-buddy-which-provide-the-latest-news-articles-and-research-fc8d7802e9be',
            mediumLink: 'https://medium.com/@dheerajjha451',
        },
        {
            title: 'Empowering Language Models',
            content: 'A Journey of Hands-On Prompt Engineering. Understanding the Two Types of LLMs. Crafting Effective Prompts',
            cover: blog2,
            link: 'https://medium.com/@dheerajjha451/empowering-language-models-a-journey-of-hands-on-prompt-engineering-cda34a72e48d',
            mediumLink: 'https://medium.com/@dheerajjha451',
        },
        {
            title: 'Power of Generative AI with Google Cloud',
            content: 'Fueling Innovation and Igniting Creative Potential with generative ai and google cloud.',
            cover: blog3,
            link: 'https://medium.com/@dheerajjha451/harnessing-the-power-of-generative-ai-with-google-cloud-fueling-innovation-and-igniting-creative-cffe980b4c10',
            mediumLink: 'https://medium.com/@dheerajjha451',
        },
        {
            title: 'Embarking on a Journey of Discovery',
            content: 'Exploring the Fundamentals of Machine Learning with the AWS AI and ML Scholarship.',
            cover: blog4,
            link: 'https://medium.com/@dheerajjha451/embarking-on-a-journey-of-discovery-exploring-the-fundamentals-of-machine-learning-with-the-aws-ai-222220e5abf1',
            mediumLink: 'https://medium.com/@dheerajjha451',
        },
        {
            title: 'OncoSight for accurate and speedy detection of Brain tumor.',
            content: 'Our platform is dedicated to advancing medical image segmentation, with a special focus on accurately detecting brain tumors from MRI scans.​',
            cover: blog5,
            link: 'https://medium.com/@dheerajjha451/oncosight-for-accurate-and-speedy-detection-of-brain-tumor-34455d5e5a26',
            mediumLink: 'https://medium.com/@dheerajjha451',
        },
        {
            title:'Docker 0 to 1',
            content:'Whether you’re a beginner or an advanced web developer, Docker is a powerful tool that can transform your development.',
            cover:blog6,
            link:'https://medium.com/@dheerajjha451/docker-0-to-1-part-1-7647c18d177b',
            mediumLink: 'https://medium.com/@dheerajjha451',
        }
    ];

    return (
      <div className='py-20 p-5 sm:py-25 sm:p-0 overflow-hidden'>
      <Title text='Blogs' className='grid items-center justify-center -right-6' />
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, idx) => (
              <CardContainer key={idx} className="inter-var w-full mb-1">
                  <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                      <div className="h-48 sm:h-56 md:h-64 mb-4 relative overflow-hidden rounded-xl">
                          <Link href={blog.link}>
                              <CardItem translateZ="100" className="w-full h-full relative">
                                  <Image
                                      src={blog.cover}
                                      alt={blog.title}
                                      layout="fill"
                                      objectFit="cover"
                                      className="rounded-xl"
                                  />
                              </CardItem>
                          </Link>
                      </div>
                      <CardItem
                          translateZ="50"
                          className="text-xl font-bold text-neutral-600 dark:text-white"
                      >
                          {blog.title}
                      </CardItem>
                      <CardItem
                          as="p"
                          translateZ="60"
                          className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
                      >
                          {blog.content}
                      </CardItem>
                      <div className="flex justify-between items-center mt-4">
                          <div>
                              <Link href={blog.link}>
                                  <CardItem
                                      translateZ={20}
                                      as="button"
                                      className="px-4 py-2 rounded-xl text-xs font-bold dark:text-black bg-white hover:bg-grey- transition-colors duration-300"
                                  >
                                      Read More
                                  </CardItem>
                              </Link>
                          </div>
                          <div>
                    <Link href={blog.mediumLink}>
                      {/* Medium icon on the right side of Read More button */}
                      <SiMedium size={24} className="text-blue-500 hover:text-blue-900 cursor-pointer" onClick={() => window.open(blog.mediumLink, '_blank')} />
                    </Link>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    );
}
