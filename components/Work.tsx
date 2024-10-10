"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/ui/tracing-beam";
import Image1 from "../public/assets/vendr.png"; 
import Image2 from "../public/assets/billybeta.png"; 
import Title from "./Title";

export function Work() {
  return (
    <TracingBeam className="px-6">
      <Title text="My Experience" className="grid items-center justify-center -right-6" />
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            {/* Highlight company name */}
            <h2 className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-lg font-bold rounded-md shadow-lg px-8 py-2 mb-6 inline-block transform hover:scale-105 transition duration-300 ease-in-out">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4")}>{item.title}</p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="work thumbnail"
                  height={1000}
                  width={1000}
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>

            {/* Project Link */}
            {item.link && (
              <a
                href={item.link}
                className="text-blue-500 underline mt-2 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                View 
              </a>
            )}

            {/* Tech Stack aligned horizontally */}
            <div className="mt-6">
              <h3 className="font-semibold text-lg">Tech Stack</h3>
              <ul className="flex flex-wrap gap-4 mt-2">
                {item.techStack.map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className="bg-blue-700 text-white px-3 py-1 rounded-md"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Full Stack Web Developer",
    description: (
      <>
        <p>
          July 2024 – August 2024 <br />
          ● Developed a robust platform for listing vending machines with scalable architecture to handle thousands of listings efficiently.<br />
          ● Implemented search and filter functionality based on geographic location, reducing response time by 40%.<br />
          ● Enhanced user engagement by improving the accuracy and accessibility of vending machine information.
        </p>
      </>
    ),
    badge: "Vendr",
    image: Image1,
    link: "https://www.wendr.de/", 
    techStack: ["Next.js", "Tailwind CSS", "Prisma", "MongoDB",  "Leaflet"],
  },
  {
    title: "Full Stack Web Developer",
    description: (
      <>
        <p>
          ● Created a streamlined onboarding waitlist page for BillyBeta, enabling users to seamlessly join the platform waitlist.<br />
          ● Successfully improved user acquisition through a simplified sign-up process, resulting in an increased number of signups.
        </p>
      </>
    ),
    badge: "BillyBeta",
    image: Image2,
    link: "https://billy.designtocode.me/", 
    techStack: ["Next.js", "TailwindCSS", "MongoDB", "TypeScript"],
  },
];
