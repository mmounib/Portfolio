"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

const cardVariants: Variants = {
  offscreen: {
    y: 600,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 0.8,
    },
  },
};
const Projects = () => {
  return (
    <motion.section
      className="text-black mt-24 w-full"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <motion.div
        className="flex flex-col w-full h-full"
        variants={cardVariants}
      >
        <motiLink
          href="/projects/ft_transcendence"
          className="flex project-section relative padding-animate justify-between items-center w-full py-14 px-6 border-b-[1px] border-b-gray-700"
        >
          <h1 className="uppercase text-5xl js-title font-extralight">
            <sup className=" text-base flex">01</sup>
            ft_transcendence
          </h1>
          <h1 className="text-3xl font-extralight js-title text-gray-600 h1-hide">
            Ping Pong Website
          </h1>
        </motionLink>
        <Link
          href="/projects/carhub"
          className="flex relative project-section padding-animate justify-between items-center w-full py-14 px-6 border-b-[1px] border-b-gray-700"
        >
          <h1 className="uppercase text-5xl js-title font-extralight">
            <sup className=" text-base flex">02</sup>
            carhub
          </h1>
          <h1 className="text-3xl font-extralight js-title text-gray-600 h1-hide">
            Car Showcasing Website
          </h1>
        </Link>
        <Link
          href="/projects/bookme"
          className="flex relative project-section padding-animate justify-between items-center w-full py-14 px-6 border-b-[1px] border-b-gray-700"
        >
          <h1 className="uppercase text-5xl js-title font-extralight">
            <sup className=" text-base flex">03</sup>
            BookMe
          </h1>
          <h1 className="text-3xl font-extralight js-title text-gray-600 h1-hide">
            Booking Application
          </h1>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
