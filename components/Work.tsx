"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/ui/tracing-beam";
import Image1 from "../public/assets/kioskkarte.png"; 
import Image2 from "../public/assets/testimonial.png";

export function Work() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4")}>{item.title}</p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height={1000}
                  width={1000}
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
              <div className="mt-6">
                <h3 className="font-semibold text-lg">Testimonial</h3>
                <Image
                  src={Image2}
                  alt="testimonial"
                  height={1000}
                  width={1000}
                  className="mt-2"
                />
              </div>
            </div>
            <div className="mt-6">
              <h3 className="font-semibold text-lg">Tech Stack</h3>
              <ul className="list-disc pl-5">
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Prisma</li>
                <li>MongoDB</li>
                <li>Express.js</li>
                <li>Leaflet</li>
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
    title: "Full Stack developer",
    description: (
      <>
        <p>
          Kioskkarte leverages advanced technologies to create a seamless experience for users looking to find vending machines and check their inventory in real-time.
        </p>
      </>
    ),
    badge: "kioskkarte",
    image: Image1,
  },
];
