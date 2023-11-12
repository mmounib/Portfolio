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
import { useEffect, useRef, useState } from "react";

const Page = () => {
  const isMounted = useRef(false);
  useEffect(() => {
    if (!isMounted.current) {
      const tl = gsap.timeline();

      tl.to(".landing-page", { x: screen.width, delay: 4, duration: 2 });
      let typeSplit = new SplitType(".landing-text h1", {
        types: "lines, words, chars",
        tagName: "span",
      });

      gsap.to(".char", {
        y: 0,
        delay: 0.2,
        duration: 0.1,
        ease: "power3.out",
        stagger: 0.025,
      });
      isMounted.current = true;
    } 
  }, []);

  const lenis = new Lenis();

  lenis.on("scroll", () => {});

  function raf(time: any) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      <div className="landing-page absolute inset-0 z-[1000] w-screen h-screen bg-secondary">
        <div className="landing-text w-full h-screen">
          <h1 className="text-black text-6xl">Welcome to my portfolio</h1>
        </div>
      </div>
      <div
        id="smoothscroller"
        className=" bg-primary h-full max-sm:overflow-hidden"
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
    </>
  );
};

export default Page;
