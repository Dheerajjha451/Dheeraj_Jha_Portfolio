"use client"
import React from 'react'
import Title from './Title'
import { HoverEffect } from './ui/card-hover-effect'
import { SiDocker, SiExpress, SiFigma, SiGit, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'

export default function Skills() {
  const skills=[
    {
      text: 'React',
      Icon: SiReact,
    },
    {
      text: 'Next.js',
      Icon: SiNextdotjs,
    },
    {
      text: 'Tailwind',
      Icon: SiTailwindcss,
    },
    {
      text: 'Git',
      Icon: SiGit,
    },
    {
      text: 'JavaScript',
      Icon: SiJavascript,
    },
    {
      text: 'TypeScript', // Added TypeScript
      Icon: SiTypescript,
    },
    {
      text: 'Node.js',
      Icon: SiNodedotjs,
    },
    {
      text: 'PostgreSQL',
      Icon: SiPostgresql,
    },
    
    {
      text: 'MongoDB',
      Icon: SiMongodb,
    },
    {
      text: 'Express.js',
      Icon: SiExpress,
    },
    {
      text: 'Figma',
      Icon: SiFigma,
    },
   
    {
      text: 'Docker', 
      Icon: SiDocker,
    },
   
  ]
  return (
    <div className='max-w-4xl mx-auto px-8 '>
         <Title text="Skills"
         className='flex flex-col items-center justify-center -right-6'/>
         <HoverEffect items={skills}/>

    </div>
  )
}
