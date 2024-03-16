"use client";

import {useRef} from "react";
import {motion, useInView} from "framer-motion";
import gsap from "gsap";
import ProjectCards from "@/app/Components/Projects/ProjectCards";
import {useGSAP} from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import {IoArrowForwardOutline} from "react-icons/io5";

const Projects = () => {
    const ref = useRef(null)
    const inView = useInView(ref, {once: true})

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

    return (
        <section className="my-36 relative">
            <div className="flex w-fit flex-col relative">
                <h1 className="text-6xl h1__before w-[1000px] uppercase">Personal Projects</h1>
                <h1 ref={ref} className="h1__stroke w-full flex">Projects</h1>
                <motion.span className="projects h1__animate w-fit"></motion.span>
            </div>
            <div className="flex mt-16">
                <div className="grid grid-flow-row grid-cols-2 w-full">
                    <h1 className="text-5xl border-t-4 border-x-4 border-black bg-secondary py-6 px-7 uppercase w-fit">ft_transcendence</h1>
                    <Image src="/about-image.jpg" alt="portfolio-screenshot" width={200} height={200}
                           className="row-start-2 rounded-none border-4 border-black object-cover h-[550px]"/>
                    <div className="flex flex-col gap-12 self-end row-start-2">
                        <p className="py-4 px-6 text-2xl font-light leading-9  border-y-4 border-r-4 border-black  h-fit">A
                            Full Stack Web Application based on the Mighty Pong Game, with social media features and a
                            leaderboard. The web application is built using Typescript and React for the frontend, and
                            NestJS for the backend. The database is a PostgreSQL database, and the application is
                            deployed
                            on using Docker.</p>
                        {/*<p>Built with: </p>*/}

                    </div>
                    <p className="row-start-3 col-start-1 border-x-4 border-b-4 border-black w-fit py-6 px-8 justify-self-end box__link">
                        <Link href={'/'} className="text-5xl uppercase font-light flex items-center gap-3">See
                            Code <IoArrowForwardOutline size={40} className="font-light"/></Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Projects;


// <ProjectCards/>
