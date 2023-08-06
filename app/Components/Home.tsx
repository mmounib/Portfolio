"use client";

import Navbar from "./Navbar";
import Image from "next/image";
import { use, useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "gsap/all";

import { Patua_One } from "next/font/google";

const patua_One = Patua_One({
  subsets: ["latin"],
  weight: "400",
});

const Home = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const whiteBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (whiteBgRef.current) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(whiteBgRef.current, {
        width: "50%",
        duration: 4,
        ease: "power2.inOut",
        onComplete: () => {
          tl.reverse();
        },
      }).to(whiteBgRef.current, {
        width: 0,
        duration: 5,
        ease: "power2.inOut",
        onComplete: () => {
          tl.kill();
        },
      });
    }
  }, []);

  useEffect(() => {
    if (textRef.current && imageRef.current) {
      gsap.registerPlugin(ScrollTrigger);

      if (window.innerWidth > 768) {
        gsap.fromTo(
          textRef.current,
          { x: -1000, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 2.5,
            delay: 2.5,
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
            },
          }
        );

        gsap.fromTo(
          imageRef.current,
          { y: 500, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 100%",
            },
          }
        );
      }
    }
  }, []);

  return (
    <section className="bg-black relative">
      <div className="flex max-md:gap-16 flex-col w-[60%] max-w-[1600px] max-md:w-full min-h-[800px] mx-auto max-custom:w-[80%]">
        <div className="el_effect"></div>
        <div className="el_effect1"></div>
        <Navbar />

        <div
          ref={whiteBgRef}
          className="max-sm:hidden bg-gray-950 h-full w-0 absolute left-0 top-0"
        ></div>

        <div className="flex max-md:flex-col justify-between h-full my-auto items-center gap-12 max-md:gap-24 max-md:mb-4 max-sm:px-6 ">
          <div ref={textRef} className="text-white max-sm:ml-6">
            <h1 className="text-3xl max-sm:text-xl text-[#E7B10A]">
              Hi There, I&rsquo;m Mouad,
            </h1>
            <h2 className="text-6xl max-sm:text-5xl max-sm:mt-2 leading-relaxed">
              A FRONTEND DEVELOPER
            </h2>
            <p className="text-xl text-gray-400 mt-4 w-[400px]">
              I&rsquo;m a self-taught developer based in Morocco, I love to
              build things for the web.
            </p>

            <a
              href="/home/mmounib/Desktop/Resume.pdf"
              className=" btn uppercase max-sm:after:hidden text-black max-sm:bg-[#E7B10A] max-sm:border-0 max-sm:w-[40%] max-sm:text-center max-sm:inline-block "
            >
              Resume
            </a>
          </div>

          <div ref={imageRef} className="relative h-full hover:rotate-6 ">
            <div className="border-4 z-10 border-[#E7B10A] border-collapse h-[400px] w-full absolute -top-12 -right-7"></div>
            <Image
              src="/my_image.jpg"
              alt="Portfolio Image"
              width={400}
              height={400}
              className="image w-[400px] h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
