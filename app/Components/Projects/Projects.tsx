"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const cardVariants = {
  offscreen: {
    y: 200,
    opacity: 0,
    transition: {
      type: "spring",
      duration: 1.2,
    },
  },
  onscreen: {
    y: 0,
    opacity: 100,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.2,
      delay: 0.2,
    },
  },
};

const cardVariants2 = {
  offscreen: {
    y: 200,
    opacity: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.2,
    },
  },
  onscreen: {
    y: 0,
    opacity: 100,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.2,
      delay: 0.3,
    },
  },
};

const cardVariants3 = {
  offscreen: {
    y: 200,
    opacity: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.9,
    },
  },
  onscreen: {
    y: 0,
    opacity: 100,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.2,
      delay: 0.3,
    },
  },
};
const Projects = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
  });
  return (
    <motion.section
    id="projects-section"
      className="text-black mt-24 w-full max-sm:overflow-hidden"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <div className="flex flex-col w-full h-full">
        <motion.div
          ref={ref1}
          variants={cardVariants}
          animate={inView1 ? "onscreen" : "offscreen"}
          className="flex pr__animate"
        >
          <Link
            href="/projects/ft_transcendence"
            className="flex max-sm:flex-col project-section relative padding-animate justify-between items-center w-full py-14 px-6 border-b-[1px] border-b-gray-700"
          >
            <h1 className="uppercase text-5xl max-sm:text-4xl js-title font-extralight">
              <sup className=" text-base flex">01</sup>
              ft_transcendence
            </h1>
            <h1 className="text-3xl max-sm:text-xl max-sm:mt-2 font-extralight js-title text-gray-600 h1-hide">
              Ping Pong Website
            </h1>
          </Link>
          <Link href="/projects/ft_transcendence">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8 text__icon font-extralight"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
        </motion.div>
        <motion.div
          ref={ref2}
          variants={cardVariants2}
          animate={inView2 ? "onscreen" : "offscreen"}
          className="flex pr__animate"
        >
          <Link
            href="/projects/carhub"
            className="flex max-sm:flex-col relative project-section padding-animate justify-between items-center w-full py-14 px-6 border-b-[1px] border-b-gray-700"
          >
            <h1 className="uppercase text-5xl js-title font-extralight">
              <sup className=" text-base flex">02</sup>
              carhub
            </h1>
            <h1 className="text-3xl max-sm:text-xl max-sm:mt-2 font-extralight js-title text-gray-600 h1-hide">
              Car Showcasing Website
            </h1>
          </Link>
          <Link href="/projects/carhub">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8 text__icon font-extralight"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
        </motion.div>
        <motion.div
          ref={ref3}
          variants={cardVariants3}
          animate={inView3 ? "onscreen" : "offscreen"}
          className="flex pr__animate"
        >
          <Link
            href="/projects/bookme"
            className="flex max-sm:flex-col relative project-section padding-animate justify-between items-center w-full py-14 px-6 border-b-[1px] border-b-gray-700"
          >
            <h1 className="uppercase text-5xl js-title font-extralight">
              <sup className=" text-base flex">03</sup>
              MarketHub
            </h1>
            <h1 className="text-3xl max-sm:mt-2 max-sm:text-xl font-extralight js-title text-gray-600 h1-hide">
              Ecommerce Website
            </h1>
          </Link>
          <Link href="/projects/bookme">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8 text__icon font-extralight"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
