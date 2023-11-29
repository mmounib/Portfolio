"use client";

const Skills = () => {
  const technologies = [
    "JavaScript",
    "Typescript",
    "NextJs",
    "ReactJs",
    "NodeJs",
    "NestJs",
    "SQL",
    "MongoDB",
    "RestAPI",
    "ExpressJs",
    "TailwindCSS",
  ];
  return (
    <section className="my-32 relative">
      <div className="right-light max-sm:hidden"></div>
      <h1 className="w-full flex items-center justify-center h1-skill text-6xl max-sm:text-4xl max-sm:w-[95%] max-sm:mx-auto">
        My Skillset
      </h1>
      <div className="flex flex-wrap gap-[1.75rem] max-sm:justify-center max-sm:gap-8 w-full mt-24">
        {technologies.map((technology, index) => (
          <span
            className=" span-skill py-5 px-9 max-sm:px-6 max-sm:py-3 text-4xl max-sm:text-2xl capitalize"
            key={index}
          >
            {technology}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
