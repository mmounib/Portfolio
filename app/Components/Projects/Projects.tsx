"use client";

import Carousel from "./Carousel";

const Projects = () => {
  const projects = [
    {
      header: "ft_transcendence",
      text: "A Full Stack Web Application based on the Mighty Pong Game, with social media features and a leaderboard. The web application is built using Typescript and React for the frontend, and NestJS for the backend. The database is a PostgreSQL database, and the application is deployed on using Docker.",
      image: "/screenshot-transcendence.png",
      technologies: [
        "JavaScript",
        "Typescript",
        "ThreeJs",
        "ReactJs",
        "NodeJs",
        "NestJs",
        "PostgreSQL",
      ],
      repositoryUrl: "https://github.com/mmounib/ft_transendence",
      pageUrl: "/projects/ft_transcendence",
    },
    {
      header: "car hub",
      text: "A web application for showcasing cars, built with Typescript and NextAuth.js by using Next, Tailwind CSS, Headless UI, and integrated with an existing Cars API.",
      image: "/car-screenshot.png",
      technologies: ["TypeScript", "NextJs", "NextAuth.js", "TailwindCSS"],
      repositoryUrl: "https://github.com/mmounib/Car-Showcasing-App",
      pageUrl: "/projects/carhub",
    },
    {
      header: "market hub",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/project3.jpg",
      technologies: [
        "Typescript",
        "ReactJs",
        "NestJs",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
      ],
      repositoryUrl: "https://github.com/example/project3",
      pageUrl: "/projects/carhub",
    },
  ];

  return (
    <section className="text-black mt-14">
      <Carousel projects={projects} />
    </section>
  );
};

export default Projects;
