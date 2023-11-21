"use client";

import Lenis from "@studio-freight/lenis";
import SplitType from "split-type";
import gsap from "gsap";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import AnimatedCursor from "./Components/AnimatedCursor";
import { useEffect, useState } from "react";

const Page = () => {
  const [showStarter, setShowStarter] = useState(true);

  useEffect(() => {
    if (showStarter) {
      let t1 = gsap.timeline();

      t1.fromTo(
        ".imsrk",
        {
          opacity: 0,
          yPercent: -100,
          delay: 0.5,
          duration: 1,
          ease: "power1.out",
          yoyo: true,
        },
        {
          opacity: 1,
          yPercent: 0,
          duration: 1,
          ease: "power1.out",
          yoyo: true,
        }
      );
      t1.fromTo(
        ".imsrk1",
        {
          opacity: 0,
          yPercent: 100,
          delay: 0.7,
          duration: 1,
          ease: "power1.out",
          yoyo: true,
        },
        {
          opacity: 1,
          yPercent: 0,
          duration: 1,
          ease: "power1.out",
          yoyo: true,
        }
      );
      t1.from(
        ".dot",
        {
          opacity: 0,
          yPercent: 100,
          delay: 0.5,
          repeatDelay: 1,
          duration: 1,
          ease: "power1.out",
        },
        0.01
      );

      t1.to(".dot", {
        opacity: 1,
        x: 20,
        duration: 1,
        ease: "power1.out",
      });

      t1.to(".dot", {
        opacity: 1,
        x: -10,
        duration: 0.5,
        ease: "power1.out",
      }); // const lenis = new Lenis();

      // lenis.on("scroll", () => {});

      // function raf(time: any) {
      //   lenis.raf(time);
      //   requestAnimationFrame(raf);
      // }

      // requestAnimationFrame(raf);

      t1.to(
        ".dot",
        {
          opacity: 1,
          duration: 1,
          ease: "expo.out",
        },
        3
      );

      t1.to(
        ".cover",
        {
          xPercent: -100,
          duration: 1,
          ease: "power1.out",
        },
        3
      );

      t1.to(
        ".cover-2",
        {
          xPercent: -100,
          duration: 1,
          ease: "power1.out",
        },
        3.2
      );

      t1.to(
        ".cover-3",
        {
          xPercent: -100,
          duration: 1,
          ease: "power1.out",
        },
        3.4
      );

      t1.to(
        ".cover-4",
        {
          xPercent: -100,
          duration: 1,
          ease: "power1.out",
        },
        3.6
      );

      setTimeout(() => {
        setShowStarter(false);
      }, 4700);
    }

    const lenis = new Lenis();

    lenis.on("scroll", () => {});

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [showStarter]);

  return (
    <>
      {showStarter && (
        <>
          <div className="cover-4"></div>
          <div className="cover-3"></div>
          <div className="cover-2"></div>
          <div className="cover">
            <div className="cover-heading">
              <div className="flex w-full gap-1 items-center justify-center">
                <h1 className="imsrk">Welcome To My </h1>
                <h1 className="imsrk1">Portfolio</h1>
              </div>
              {/* <h6 className="dot">.</h6> */}
            </div>
          </div>
        </>
      )}

      {!showStarter && (
        <div
          id="smoothscroller"
          className=" bg-primary h-full max-sm:overflow-hidden w-full"
        >
          <AnimatedCursor />
          <div className="flex max-w-[1300px] flex-col mx-auto">
            <Navbar />
            <Home />
            <Section />
            <Skills />
            <Contact />
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
