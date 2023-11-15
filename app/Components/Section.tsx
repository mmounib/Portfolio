import { useState } from "react";
import Projects from "./Projects/Projects";
import About from "./About/About";

const Section = () => {
  const [open, setOpen] = useState(true);
  const [selectedButton, setSelectedButton] = useState<string>("Projects");

  const changeColor = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  return (
    <section className="w-full z-0 flex flex-col items-center justify-center mt-36">
      <div className="flex w-full items-center justify-center">
        <div
          className={` w-full flex border-y-2 py-6 border-black justify-center items-center max-sm:w-full ${
            selectedButton == "Projects" && "bg-secondary text-black"
          }`}
          onClick={() => changeColor("Projects")}
        >
          <button type="submit" className={`text-5xl`}>
            Projects
          </button>
        </div>
        <span className="border-l-2 flex h-[6.3rem]  border-black"></span>
        <div
          className={`w-full flex border-y-2 border-black py-6 justify-center items-center max-sm:w-full ${
            selectedButton == "About Me" && "bg-secondary text-black"
          } `}
          onClick={() => changeColor("About Me")}
        >
          <button type="submit" className={`text-5xl`}>
            About Me
          </button>
        </div>
      </div>
      {open && selectedButton === "Projects" && <Projects />}
      {open && selectedButton === "About Me" && <About />}
    </section>
  );
};

export default Section;
