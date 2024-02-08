import About from "../Components/About/About";
import AnimatedCursor from "../Components/AnimatedCursor";
import Experience from "../Components/Experience/Experience";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";
import Links from "@/app/Components/Links";

function page() {
  return (
    <>
      <AnimatedCursor />
      <section className="max-w-[1300px] mx-auto">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Links />
      </section>
    </>
  );
}

export default page;
