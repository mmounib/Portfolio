"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { IoIosArrowRoundForward } from "react-icons/io";

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
  return (
    <section className="my-36 relative">
      <h1 className="h1__stroke">projects</h1>
      <div className="flex justify-center gap-16 flex-wrap mt-16">
        <div className="projects__shadow-style flex flex-col py-6 px-4">
          <Link
            href="/projects/ft_transcendence"
            className="flex flex-col max-sm:flex-col py-4 px-8 relative justify-between items-end w-full cursor-none"
          >
            <h1 className="uppercase text-3xl max-sm:text-4xl font-extralight">
              <sup className=" text-base flex">01</sup>
              ft_transcendence
            </h1>
            <h1 className="text-xl max-sm:text-xl max-sm:mt-2 font-extralight tracking-wider text-gray-600 h1-hide">
              Ping Pong Website
            </h1>
          </Link>
          <Link
            href="/projects/ft_transcendence"
            className="flex items-end justify-end mr-2 mt-10 cursor-none"
          >
            <p className="font-light text-base uppercase w-fit bg-[#71c9ce] py-2 px-3 flex items-center cursor-pointer proj__animation">
              see more{" "}
              <IoIosArrowRoundForward
                size={17}
                className=" fill-black proj__animation-icon"
              />{" "}
            </p>
          </Link>
        </div>
        <div className="projects__shadow-style flex flex-col py-6 px-4">
          <Link
            href="/projects/ft_transcendence"
            className="flex flex-col max-sm:flex-col py-4 px-8 relative justify-between items-end w-full cursor-none"
          >
            <h1 className="uppercase text-3xl max-sm:text-4xl font-extralight">
              <sup className=" text-base flex">01</sup>
              ft_transcendence
            </h1>
            <h1 className="text-xl max-sm:text-xl max-sm:mt-2 font-extralight tracking-wider text-gray-600 h1-hide">
              Ping Pong Website
            </h1>
          </Link>
          <Link
            href="/projects/ft_transcendence"
            className="flex items-end justify-end mr-2 mt-10 cursor-none"
          >
            <p className="font-light text-base uppercase w-fit bg-[#71c9ce] py-2 px-3 flex items-center cursor-pointer proj__animation">
              see more{" "}
              <IoIosArrowRoundForward
                size={17}
                className=" fill-black proj__animation-icon"
              />{" "}
            </p>
          </Link>
        </div>
        <div className="projects__shadow-style flex flex-col py-6 px-4">
          <Link
            href="/projects/ft_transcendence"
            className="flex flex-col max-sm:flex-col py-4 px-8 relative justify-between items-end w-full cursor-none"
          >
            <h1 className="uppercase text-3xl max-sm:text-4xl font-extralight">
              <sup className=" text-base flex">01</sup>
              ft_transcendence
            </h1>
            <h1 className="text-xl max-sm:text-xl max-sm:mt-2 font-extralight tracking-wider text-gray-600 h1-hide">
              Ping Pong Website
            </h1>
          </Link>
          <Link
            href="/projects/ft_transcendence"
            className="flex items-end justify-end mr-2 mt-10 cursor-none"
          >
            <p className="font-light text-base uppercase w-fit bg-[#71c9ce] py-2 px-3 flex items-center cursor-pointer proj__animation">
              see more{" "}
              <IoIosArrowRoundForward
                size={17}
                className=" fill-black proj__animation-icon"
              />{" "}
            </p>
          </Link>
        </div>
        <div className="projects__shadow-style flex flex-col py-6 px-4">
          <Link
            href="/projects/ft_transcendence"
            className="flex flex-col max-sm:flex-col py-4 px-8 relative justify-between items-end w-full cursor-none"
          >
            <h1 className="uppercase text-3xl max-sm:text-4xl font-extralight">
              <sup className=" text-base flex">01</sup>
              ft_transcendence
            </h1>
            <h1 className="text-xl max-sm:text-xl max-sm:mt-2 font-extralight tracking-wider text-gray-600 h1-hide">
              Ping Pong Website
            </h1>
          </Link>
          <Link
            href="/projects/ft_transcendence"
            className="flex items-end justify-end mr-2 mt-10 cursor-none"
          >
            <p className="font-light text-base uppercase w-fit bg-[#71c9ce] py-2 px-3 flex items-center cursor-pointer proj__animation">
              see more{" "}
              <IoIosArrowRoundForward
                size={17}
                className=" fill-black proj__animation-icon"
              />{" "}
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;

// const [ref1, inView1] = useInView({
//   triggerOnce: true,
// });

// const [ref2, inView2] = useInView({
//   triggerOnce: true,
// });

// const [ref3, inView3] = useInView({
//   triggerOnce: true,
// });

// return (
//   <motion.section
//   id="projects-section"
//     className="text-black mt-24 w-full max-sm:overflow-hidden"
//     initial="offscreen"
//     whileInView="onscreen"
//     viewport={{ once: true }}
//   >
//     <div className="flex flex-col w-full h-full">
//       <motion.div
//         ref={ref1}
//         variants={cardVariants}
//         animate={inView1 ? "onscreen" : "offscreen"}
//         className="flex pr__animate"
//       >
//         <Link
//           href="/projects/ft_transcendence"
//           className="flex max-sm:flex-col project-section relative padding-animate justify-between items-center w-full py-14 px-6 border-b-[1px] border-b-gray-700"
//         >
//           <h1 className="uppercase text-5xl max-sm:text-4xl js-title font-extralight">
//             <sup className=" text-base flex">01</sup>
//             ft_transcendence
//           </h1>
//           <h1 className="text-3xl max-sm:text-xl max-sm:mt-2 font-extralight js-title text-gray-600 h1-hide">
//             Ping Pong Website
//           </h1>
//         </Link>
//         <Link href="/projects/ft_transcendence">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="currentColor"
//             className="w-8 h-8 text__icon font-extralight"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
//             />
//           </svg>
//         </Link>
//       </motion.div>
//       <motion.div
//         ref={ref2}
//         variants={cardVariants2}
//         animate={inView2 ? "onscreen" : "offscreen"}
//         className="flex pr__animate"
//       >
//         <Link
//           href="/projects/carhub"
//           className="flex max-sm:flex-col relative project-section padding-animate justify-between items-center w-full py-14 px-6 border-b-[1px] border-b-gray-700"
//         >
//           <h1 className="uppercase text-5xl js-title font-extralight">
//             <sup className=" text-base flex">02</sup>
//             carhub
//           </h1>
//           <h1 className="text-3xl max-sm:text-xl max-sm:mt-2 font-extralight js-title text-gray-600 h1-hide">
//             Car Showcasing Website
//           </h1>
//         </Link>
//         <Link href="/projects/carhub">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="currentColor"
//             className="w-8 h-8 text__icon font-extralight"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
//             />
//           </svg>
//         </Link>
//       </motion.div>
//       <motion.div
//         ref={ref3}
//         variants={cardVariants3}
//         animate={inView3 ? "onscreen" : "offscreen"}
//         className="flex pr__animate"
//       >
//         <Link
//           href="/projects/bookme"
//           className="flex max-sm:flex-col relative project-section padding-animate justify-between items-center w-full py-14 px-6 border-b-[1px] border-b-gray-700"
//         >
//           <h1 className="uppercase text-5xl js-title font-extralight">
//             <sup className=" text-base flex">03</sup>
//             MarketHub
//           </h1>
//           <h1 className="text-3xl max-sm:mt-2 max-sm:text-xl font-extralight js-title text-gray-600 h1-hide">
//             Ecommerce Website
//           </h1>
//         </Link>
//         <Link href="/projects/bookme">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="currentColor"
//             className="w-8 h-8 text__icon font-extralight"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
//             />
//           </svg>
//         </Link>
//       </motion.div>
//     </div>
//   </motion.section>
// );
