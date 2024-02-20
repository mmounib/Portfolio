"use client";

import Link from "next/link";
import {useEffect, useRef} from "react";
import {IoIosArrowRoundForward} from "react-icons/io";
import {motion, useInView} from "framer-motion";
import gsap from "gsap";
import ProjectCards from "@/app/Components/Projects/ProjectCards";

const Projects = () => {
    const ref = useRef(null)
    const inView = useInView(ref, {once: true})

    useEffect(() => {
        if (inView) {
            const tl = gsap.timeline();
            tl.fromTo(".projects", {
                width: "100%",
                duration: 2,
                ease: "power2.out",
            }, {
                width: 0,
                delay: 0,
                ease: "power2.out",
            })
        }
    }, [inView]);

    return (
        <section className="my-36 relative">
            <div className="flex w-fit flex-col relative">
                <h1 className="text-6xl h1__before w-[1000px] uppercase">Personal Projects</h1>
                <h1 ref={ref} className="h1__stroke w-full flex">Projects</h1>
                <motion.span className="projects h1__animate w-fit"></motion.span>
            </div>
            <div className="flex justify-center gap-16 flex-wrap mt-16">
                <ProjectCards />
            </div>
        </section>
    );
};

export default Projects;
