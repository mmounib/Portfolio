import PageHelper from "@/app/Components/Helpers/PageHelper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const projects = {
    header: "ft_transcendence",
    subheader: "Ping Pong Website",
    text: "A Full Stack Web Application based on the Mighty Pong Game, with social media features and a leaderboard. The web application is built using Typescript and React for the frontend, and NestJS for the backend. The database is a PostgreSQL database, and the application is deployed on using Docker.",
    features: "Online Chatting between Players Using Socket.io",
    images: ["/screenshot-transcendence.png", "/screen.png"],
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
  };
  return <PageHelper projects={projects} />;
};

export default page;