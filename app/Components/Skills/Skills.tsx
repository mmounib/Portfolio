"use client";

const Skills = () => {
  const technologies = [
    "JavaScript",
    "Typescript",
    "NextJs",
    "ReactJs",
    "TailwindCSS",
    "NodeJs",
    "ExpressJs",
    "PostgreSQL",
    "MongoDB",
    "RestAPI",
    "Git/Github",
    "Docker"
  ];
  return (
    <section className="my-32 relative">
      <div className="right-light max-sm:hidden"></div>
      <h1 className="h1__stroke">My Skills</h1>
      <div className="flex flex-wrap gap-[2rem] max-sm:justify-center max-sm:gap-8 w-full mt-20">
        {technologies.map((technology, index) => (
          <p key={index} className="text-3xl border-b-2 border-b-black duration-300 hover:scale-110">
            {technology}
          </p>
          // <span
          //   className=" span-skill py-5 px-9 max-sm:px-6 max-sm:py-3 text-4xl max-sm:text-2xl capitalize"
          //   key={index}
          // >
          //   {technology}
          // </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
