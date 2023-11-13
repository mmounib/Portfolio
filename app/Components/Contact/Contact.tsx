"use client";

import { Space_Grotesk } from "next/font/google";
import { motion } from "framer-motion";

import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { useInView } from "react-intersection-observer";

const Space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600"],
});

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
      duration: 1.2,
    },
  },
};

const cardVariants2 = {
  offscreen: {
    x: 100,
    opacity: 0,
    transition: {
      type: "spring",
      duration: 1.2,
    },
  },
  onscreen: {
    x: 0,
    opacity: 100,
    transition: {
      type: "spring",
      duration: 1.2,
      delay: 0.4,
    },
  },
};

const cardVariants3 = {
  offscreen: {
    x: -200,
    opacity: 0,
    transition: {
      type: "spring",
      duration: 1.2,
    },
  },
  onscreen: {
    x: 0,
    opacity: 100,
    transition: {
      type: "spring",
      duration: 1.2,
      delay: 1,
    },
  },
};


const Contact = (): JSX.Element => {
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
    <footer className="mt-16 max-sm:mt-8 h-full">
      <div className="flex max-sm:mx-2 max-sm:flex-col max-sm:gap-6 gap-16">
        <div className="max-w-[55%] max-sm:max-w-full">
          <p
            className={`${Space.className} transition-all duration-300 text-6xl js-splittext-lines leading-[4.5rem] max-sm:leading-[4.6rem] max-sm:text-4xl`}
          >
            Have A Project In Mind, Want a Motivated Developer To Work With You
            ! <br />{" "}
            <span
              className={`${Space.className} italic font-bold bg-black text-secondary py-6 px-4 max-sm:py-4 max-sm:px-2 mt-4 inline-block`}
            >
              Let&apos;s Work Together By
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-14 max-sm:gap-6">
          <motion.div
            ref={ref1}
            className="flex flex-col overflow-hidden max-sm:flex-row gap-2 max-sm:justify-center items-center"
            variants={cardVariants}
            animate={inView1 ? "onscreen" : "offscreen"}
          >
            <span className="italic text-3xl max-w-[170px]">
              Sending Me an Email
            </span>
            <Link
              href="mailto:mouadmounib00@gmail.com"
              className="mt-1 text-3xl link-mail bg-secondary p-12 -rotate-[15deg]"
            >
              Here
            </Link>
          </motion.div>
          <motion.div
            ref={ref2}
            className="flex flex-col overflow-hidden max-sm:flex-row gap-2 max-sm:justify-center items-center"
            variants={cardVariants2}
            animate={inView2 ? "onscreen" : "offscreen"}
          >
            <span className="italic text-3xl max-w-[170px]">
              Checking My Projects On
            </span>
            <Link
              href="https://github.com/mmounib"
              className="mt-3 text-3xl py-2 px-4 border-secondary hover:rotate-3 translate-all duration-300 border-4 flex gap-1 max-sm:ml-auto"
            >
              {" "}
              <FiGithub size={30} /> Github
            </Link>
          </motion.div>
        </div>
        <motion.div
          ref={ref3}
          className="flex flex-col overflow-hidden max-sm:flex-row h-full mt-24 max-sm:mt-12 ml-auto"
          variants={cardVariants3}
          animate={inView3 ? "onscreen" : "offscreen"}
        >
          <span className="italic text-3xl max-w-[200px]">
            Connecting With Me On
          </span>
          <Link
            href="https://www.linkedin.com/in/mouad-mounib-954418193/"
            className="mt-4 max-sm:mt-0 text-3xl py-2 px-4 flex gap-1 bg-black -rotate-3 hover:rotate-0 translate-all duration-300 max-sm:rotate-0 rounded-full text-secondary items-center"
          >
            {" "}
            <AiFillLinkedin size={30} className=" fill-secondary" /> Linkedin
          </Link>
        </motion.div>
      </div>
      <div className="flex max-sm:flex-col justify-center items-center mt-44 text-gray-700 mb-6 max-sm:mb-4">
        <span className="mr-auto max-sm:m-auto text-2xl max-sm:text-xl flex gap-3">
          Designed and Developed by <h2>Mouad Mounib</h2>
        </span>
        <span className="text-2xl max-sm:text-xl max-sm:mt-4">
          Copyright &copy; 2023
        </span>
      </div>
    </footer>
  );
};

export default Contact;
