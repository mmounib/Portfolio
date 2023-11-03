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
      <div className="flex flex-col gap-4 w-screen">
        {technologies.map((technology, index) => (
          <span
            className="border-black border-[1px] py-5 px-9 text-3xl capitalize"
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
