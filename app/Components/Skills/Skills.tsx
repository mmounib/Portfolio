"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { gsap, ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
const Skills = () => {
  const technologies = [
    "JavaScript",
    "Typescript",
    "NextJs",
    "ReactJs",
    "NodeJs",
    "NestJs",
    "SQL",
    "MongoDB",
    "RestAPI",
    "ExpressJs",
    "TailwindCSS",
  ];
  return (
    <section className="my-24">
      <h1 className="w-full flex items-center justify-center h1-skill text-6xl">
        My Skillset
      </h1>
      <div className="flex flex-wrap gap-[1.75rem] w-full mt-24">
        {technologies.map((technology, index) => (
          <span
            className=" span-skill py-5 px-9 text-4xl capitalize"
            key={index}
          >
            {technology}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
