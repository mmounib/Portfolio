"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import AnimatedCursor from "./Components/AnimatedCursor";


const Page = () => {
  return (
    <div id="smoothscroller" className=" bg-primary h-full">
      <AnimatedCursor />
      <div className="flex max-w-[1300px] flex-col mx-auto">
        <Navbar />
        <Home />
        <Section />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default Page;
