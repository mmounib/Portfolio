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
    <section className="w-full flex flex-col items-center justify-center mt-36">
      <div className="flex w-full items-center justify-center gap-8">
        <div className="px-8">
          <button
            type="submit"
            className={`h1-skill ${
              selectedButton === "Projects" ? "text-5xl" : "text-2xl"
            }`}
            onClick={() => changeColor("Projects")}
          >
            Projects
          </button>
        </div>
        <div className="">
          <button
            type="submit"
            className={`px-8 py-4 span-skill ${
              selectedButton === "About Me" ? "text-4xl" : "text-2xl"
            }`}
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
