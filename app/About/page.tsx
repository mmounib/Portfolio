import About from "../Components/About/About";
import AnimatedCursor from "../Components/AnimatedCursor";
import Skills from "../Components/Skills/Skills";

function page() {
  return (
    <>
      <AnimatedCursor />
      <section className="max-w-[1300px] mx-auto">
        <About />
        <Skills />
      </section>
    </>
  );
}

export default page;
