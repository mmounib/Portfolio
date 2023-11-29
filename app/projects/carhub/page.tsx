import AnimatedCursor from "@/app/Components/AnimatedCursor";
import PageHelper from "@/app/Components/Helpers/PageHelper";
import React from "react";

const page = () => {
  const projects = {
    header: "CarHub",
    subheader: "Car Showcasing Website",
    text: "A web application for showcasing cars, built with Typescript and NextAuth.js by using Next, Tailwind CSS, Headless UI, and integrated with an existing Cars API.",
    features: "Using NextAuth.js for User Authentication Purpose",
    images: ["/car-home.png", "/car-cards.png", "/car-footer.png"],
    technologies: ["TypeScript", "NextJs", "NextAuth.js", "TailwindCSS"],
    repositoryUrl: "https://github.com/mmounib/Car-Showcasing-App",
    videoPlayer: "",
  };
  return (
    <>
      <AnimatedCursor />
      <PageHelper projects={projects} />
    </>
  );
};

export default page;
