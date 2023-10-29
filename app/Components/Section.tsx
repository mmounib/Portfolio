import { useState } from "react";
import Projects from "./Projects/Projects";
import About from "./About/About";

const Section = () => {
  const [open, setOpen] = useState(true);
  const [selectedButton, setSelectedButton] = useState("Projects");

  const changeColor = (buttonName: string) => {
    setOpen(true);
    setSelectedButton(buttonName);
  };

  return (
    <section className="w-full flex flex-col items-center justify-center mt-36">
      <div className="flex border-2 border-secondary rounded-lg p-1">
        <div
          className={`${
            selectedButton === "Projects"
              ? "bg-secondary transition-bg"
              : "bg-transparent"
          } rounded-[5px] py-2 px-6`}
        >
          <button
            type="submit"
            className="text-black text-2xl font-semibold tracking-widest"
            onClick={() => changeColor("Projects")}
          >
            Projects
          </button>
        </div>
        <div
          className={`${
            selectedButton === "About Me"
              ? "bg-secondary transition-bg"
              : "bg-transparent"
          } ml-2 rounded-[5px] py-2 px-6`}
        >
          <button
            type="submit"
            className="text-black text-2xl font-semibold tracking-widest"
            onClick={() => changeColor("About Me")}
          >
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
