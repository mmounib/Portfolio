"use client";
import { BsArrowRightShort } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="text-black w-full mt-14">
      <div className="flex mb-12">
        <div className="flex">
          <Image
            src="/random-image.jpg"
            alt="ProjectImage"
            width={400}
            height={400}
            className="w-[800px] object-cover h-[650px]"
          />
        </div>

        <div className="flex flex-col gap-24">
          <div className="flex w-[450px] flex-col gap-6 mt-2 bg-white shadow-md py-4 px-6 -ml-12 shadow-gray-500 rounded-[10px] h-[450px]">
            <h2>FT_TRANSCENDENCE</h2>
            <p className="max-w-[350px] leading-7">
              A full stack web application based on the Mighty Pong Game, with
              social media features and a leaderboard. The web application is
              built using Typescript and React for the frontend, and NestJS for
              the backend. The database is a PostgreSQL database, and the
              application is deployed on using Docker.
            </p>
            <div className="flex gap-6 mt-4 max-sm:mt-0 flex-wrap">
              <div className=" bg-gray-200 rounded-[5px] py-2 px-5">
                <span className="capitalize text-lg font-light">Typescript</span>
              </div>
              <div className="bg-gray-200 rounded-[5px] py-2 px-5">
                <span className="capitalize text-lg font-light">Typescript</span>
              </div>
              <div className="bg-gray-200 rounded-[5px] py-2 px-5">
                <span className="capitalize text-lg font-light">Typescript</span>
              </div>
              <div className="bg-gray-200 rounded-[5px] py-2 px-5">
                <span className="capitalize text-lg font-light">Typescript</span>
              </div>
              <div className="bg-gray-200 rounded-[5px] py-2 px-5">
                <span className="capitalize text-lg font-light">Typescript</span>
              </div>
            </div>
          </div>
          <div className="flex ml-6 justify-between">
            <button type="submit" className="capitalize bg-secondary rounded-[5px] py-2 px-6 text-lg">read more about it</button>
            <a href="#" className="capitalize border-2 border-secondary rounded-[5px] py-2 px-6 text-lg">see repository</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
