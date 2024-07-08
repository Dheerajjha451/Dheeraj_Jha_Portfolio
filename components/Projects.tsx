import React from 'react';
import { LiaNodeJs } from 'react-icons/lia';
import { SiBootstrap, SiCss3, SiDjango, SiFlask, SiHtml5, SiJavascript, SiNextdotjs, SiPhp, SiReact, SiReactquery, SiTailwindcss, SiTensorflow } from 'react-icons/si';
import Title from './Title';
import Link from 'next/link';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { cn } from '@/lib/utils';
import project1Image from '../public/assets/StudBud1.jpeg';
import project2Image from '../public/assets/QR.png';
import project3Image from '../public/assets/wordlist.png';
import project4Image from '../public/assets/OncoScout.png';
import project7Image from '../public/assets/Desktop2.png';
import project5Image from '../public/assets/2.jpeg';
import project6Image from '../public/assets/news.png';
import project8Image from '../public/assets/Design.png';
import project9Image from '../public/assets/Briantumor1.png';

export default function Project() {
  const projects = [
    {
      title: 'Design2Code',
      tech: [SiNextdotjs, SiTailwindcss, SiJavascript, LiaNodeJs],
      link: 'https://github.com/Dheerajjha451/Design2Code',
      cover: project8Image,
      LivePreview: 'https://www.designtocode.me/',
      description: 'Design2Code is a platform where developers can share their projects with other developers.',
    },
    {
      title: 'Brain Tumor',
      tech: [SiReact, SiTensorflow, SiTailwindcss],
      link: 'https://github.com/Dheerajjha451/BrainTumor',
      cover: project9Image,
      LivePreview: 'https://braintumor.designtocode.me/',
      description: 'Our project utilizes advanced machine learning algorithms to predict brain tumors. It can detect various types of brain tumors, including glioma, pituitary tumors, and more.',
    },
    {
      title: 'Help a Pet',
      tech: [SiReact, SiTailwindcss, SiFlask],
      link: 'https://github.com/Dheerajjha451/Meet_Your_Pet',
      cover: project7Image,
      LivePreview: 'https://meet-pet.vercel.app/',
      description: 'Connecting stray animals with loving homes through innovative technology.',
    },
    {
      title: 'OncoScout',
      tech: [SiNextdotjs, SiTailwindcss, SiFlask],
      link: 'https://github.com/Dheerajjha451/OncoScout',
      cover: project4Image,
      description: 'Our project utilizes advanced machine learning algorithms to predict brain tumors. It can detect various types of brain tumors.',
    },
    {
      title: 'QR Attendance System',
      tech: [SiHtml5, SiCss3, SiDjango],
      link: 'https://github.com/Dheerajjha451/QR-Attendance-System',
      cover: project2Image,
      description: 'A QR code-based attendance system built using Next.js, React Query, and Tailwind CSS.',
    },
    {
      title: 'StudBud',
      tech: [SiReactquery, SiTailwindcss],
      link: 'https://github.com/Dheerajjha451/StudBud',
      cover: project1Image,
      description: 'An application for students to organize their study schedules and manage academic tasks.',
    },
    {
      title: 'Wordlist Generator',
      tech: [SiPhp, SiHtml5, SiCss3, SiJavascript],
      link: 'https://github.com/Dheerajjha451/wordlist.github.io',
      cover: project3Image,
      description: 'A tool to generate custom wordlists for password cracking and security testing purposes.',
    },
    {
      title: 'NewsSD',
      tech: [SiReact, SiTailwindcss],
      link: 'https://github.com/Dheerajjha451/News',
      cover: project5Image,
      description: 'A news aggregation platform with social media features and customizable user profiles.',
    },
    {
      title: 'News-Mental-health',
      tech: [SiHtml5, SiDjango],
      link: 'https://github.com/Dheerajjha451/News-Mental-health',
      cover: project6Image,
      description: 'A news portal focusing on mental health topics, including articles and resources.',
    },
  ];

  return (
    <div className='py-10 p-5 sm:p-0 '>
      <Title text='Projects' className='grid  items-center justify-center -right-6' />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <CardContainer key={idx} className="inter-var w-full mb-4 sm:mb-0">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full rounded-xl p-6 border">
              <div className="h-52 sm:h-[350px] mb-4">
                <Link href={project.link}>
                  <CardItem translateZ="100" className="w-full h-full relative">
                    <Image
                      src={project.cover}
                      alt={project.title}
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
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm mt-2 dark:text-neutral-300 overflow-hidden overflow-ellipsis"
              >
                {project.description}
              </CardItem>
              <div className="flex items-center mt-4">
                {project.tech.map((Icon, idx) => (
                  <Icon key={idx} className='w-4 h-4 mr-2' />
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <Link href={project.link}>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-bold dark:text-black bg-white hover:bg-grey- transition-colors duration-300"
                    >
                      GitHub
                    </CardItem>
                  </Link>
                </div>
                {project.LivePreview && (
                  <div>
                    <Link href={project.LivePreview}>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl text-xs font-bold dark:text-white bg-blue-700 hover:bg-grey- transition-colors duration-300"
                      >
                        Live Preview
                      </CardItem>
                    </Link>
                  </div>
                )}
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
