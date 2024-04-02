"use client";

import {useRef} from "react";
import {motion, useInView} from "framer-motion";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
    const ref = useRef(null)
    const inView = useInView(ref, {once: true})

    const technologies = [
        "JavaScript",
        "Typescript",
        "ThreeJs",
        "ReactJs",
        "NodeJs",
        "NestJs",
        "PostgreSQL",
    ];
    const technologiesCar = [
        "Typescript",
        "NextJs",
        "NextAuth.js",
        "TailwindCSS",
    ];

    useGSAP(() => {
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

    const hoveringText = (event: any) => {
        let div = event.currentTarget;
        let el = document.querySelector(".hoveringText")! as HTMLElement;
        let offsetX =
            event.clientX - div.getBoundingClientRect().left - el.offsetWidth / 2;
        let offsetY =
            event.clientY - div.getBoundingClientRect().top - el.offsetHeight / 2;
        el!.style.top = offsetY + "px";
        el!.style.left = offsetX + "px";
    }
    return (
        <section className="my-36 relative">
            <div className="flex w-fit flex-col relative">
                <h1 className="text-6xl h1__before w-[1000px] uppercase">Personal Projects</h1>
                <h1 ref={ref} className="h1__stroke w-full flex">Projects</h1>
                <motion.span className="projects h1__animate w-fit"></motion.span>
            </div>
            <div className="mt-16 grid grid-rows-2 grid-cols-2 gap-10">
                <Link href={'https://github.com/mmounib/ft_transendence'} target="_blank"
                      className="h-[750px] row-start-1 col-start-1 relative overflow-hidden over__container grid"
                      onMouseMove={hoveringText}>
                    <div className="bg__project"></div>
                    <h1 className="hoveringText">view repo</h1>
                    <article className="h-fit self-end px-4 pb-6">
                        <div className="flex justify-between items-center ">
                            <h1 className="text-2xl text-white capitalize">ft_transcendence</h1>
                            <div className="flex gap-2">
                                <p className="text-white text-md bg-white bg-opacity-30 rounded-full py-2 px-6">Typescript</p>
                                <p className="text-white text-md bg-white bg-opacity-30 rounded-full py-2 px-6">ReactJs</p>
                            </div>
                        </div>
                        <p className="para__hidden text-white pt-4">A Full Stack Web Application based on the Mighty
                            Pong Game, with social media features and a
                            leaderboard. The web application is built using Typescript and React for the frontend,
                            and
                            NestJS for the backend. The database is a PostgreSQL database, and the application is
                            deployed on using Docker.</p>
                    </article>
                </Link>
            </div>
        </section>
    );
};

export default Projects;


// <ProjectCards/>
