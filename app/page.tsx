"use client";

import Home from "./Components/Home";
import DOMTarget = gsap.DOMTarget;
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Skills from "./Components/Skills/Skills";

const Page = () => {
  return (
    <div className=" bg-primary h-full">
      <div className="flex max-w-[1300px] flex-col mx-auto">
        <Navbar />
        <Home />
        <Section />
        <Skills/>

        {/* <Projects/> */}
        {/* <Contact/> */}
      </div>
    </div>
  );
};
export default Page;
