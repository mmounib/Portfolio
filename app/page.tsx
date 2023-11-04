"use client";

import Home from "./Components/Home";
import DOMTarget = gsap.DOMTarget;
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";

const Page = () => {
  return (
    <div className=" bg-primary h-full">
      <div className="flex max-w-[1300px] flex-col mx-auto">
        <Navbar />
        <Home />
        <Section />
        <Skills/>
        <Contact/>
      </div>
    </div>
  );
};
export default Page;
