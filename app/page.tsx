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

const Page = () => {
  const lenis = new Lenis();

  lenis.on("scroll", () => {});

  function raf(time: any) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
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
