"use client";
import { BsArrowRightShort } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

import Link from "next/link";

import { motion } from "framer-motion";
import ProjectsHelper from "../Helpers/ProjectsHelper";

const Projects = () => {
  return (
    <section className="text-black w-full mt-14">
      <div className="flex mb-12 ">
        <ProjectsHelper />
      </div>
    </section>
  );
};

export default Projects;
