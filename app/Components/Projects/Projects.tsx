"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
  return (
    <section id="projects-section" className="mt-36 max-sm:mt-20">
      <h1 className="text-4xl max-sm:text-2xl max-sm:text-center font-extralight uppercase">
        Selected Projects
      </h1>

      <div className="mt-8 flex flex-col gap-12">
        <div className="flex bg-secondary h-[450px] gap-5 rounded-xl">
          <div className="flex py-10 px-12 gap-8">
            <div className="flex flex-col justify-between gap-3">
              <span className="text-gray-100 projects__description !font-extrabold bg-accent w-fit rounded-full p-4 text-sm uppercase">
                Car Showcase Website
              </span>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl border-b border-white pb-3 projects__headers text-white">
                  CARHUB
                </h3>
                <p className="text-white projects__description text-3xl">
                  Showcase your car collection with this sleek and modern
                  website where you will find latest cars and their details.
                </p>
              </div>
            </div>
            <Image
              src={"/laptop-1.jpg"}
              alt={"laptop-1"}
              width={450}
              height={30}
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex bg-[#383B53] h-[450px] gap-5 rounded-xl">
          <div className="flex py-10 px-12 gap-8">
            <div className="flex flex-col justify-between gap-3">
              <span className="text-gray-100 projects__description !font-extrabold bg-gray-800 w-fit rounded-full p-4 text-sm uppercase">
                Ping Pong Website
              </span>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl border-b border-white pb-3 projects__headers text-white">
                  PONG
                </h3>
                <p className="text-white projects__description text-3xl">
                  A full-stack online ping pong site with React, NestJS, and
                  PostgreSQL, ensuring cross-browser compatibility and team
                  collaboration.
                </p>
              </div>
            </div>
            <Image
              src={"/laptop-3.jpg"}
              alt={"Pong Website Screenshot"}
              width={450}
              height={30}
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex bg-[#172A3A] h-[450px] gap-5 rounded-xl">
          <div className="flex py-10 px-12 gap-8">
            <div className="flex flex-col justify-between gap-3">
              <span className="text-gray-100 projects__description !font-extrabold bg-[#223E58] w-fit rounded-full p-4 text-sm uppercase">
                Finance manager website
              </span>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl border-b border-white pb-3 projects__headers text-white">
                  YourFinanceTracker
                </h3>
                <p className="text-white projects__description text-3xl">
                  Developing a finance tracker with .NET and Next.js, featuring
                  JWT authentication and RESTful APIs for budget management.
                </p>
              </div>
            </div>
            <Image
              src={"/cashflow.webp"}
              alt={"laptop-1"}
              width={450}
              height={30}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
