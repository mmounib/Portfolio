import AnimatedCursor from "@/app/Components/AnimatedCursor";
import PageHelper from "@/app/Components/Helpers/PageHelper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const projects = {
    header: "CarHub",
    subheader: "Car Showcasing Website",
    text: "A web application for showcasing cars, built with Typescript and NextAuth.js by using Next, Tailwind CSS, Headless UI, and integrated with an existing Cars API.",
    features: "Using NextAuth.js for User Authentication Purpose",
    images: ["/car-screenshot.png", "/screen.png"],
    technologies: ["TypeScript", "NextJs", "NextAuth.js", "TailwindCSS"],
    repositoryUrl: "https://github.com/mmounib/Car-Showcasing-App",
  };
  return (
    <>
      <AnimatedCursor />
      <PageHelper projects={projects} />
    </>
  );
};

export default page;
