"use client";

import Lenis from "@studio-freight/lenis";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import AnimatedCursor from "./Components/AnimatedCursor";
import {useEffect} from "react";
import Section from "./Components/Helpers/Section";
import Links from "./Components/Links";
import About from "@/app/Components/About/About";
import Experience from "@/app/Components/Experience/Experience";
import Projects from "@/app/Components/Projects/Projects";

const Page = () => {
    useEffect(() => {
        const lenis = new Lenis();

        lenis.on("scroll", () => {
        });

        function raf(time: any) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <>
            <div
                id="smoothscroller"
                className=" bg-primary h-full max-sm:overflow-hidden w-full"
            >
                <AnimatedCursor/>
                <div className="flex flex-col max-sm:w-[95%] max-sm:mx-auto">
                    <Home/>
                    <Projects/>
                    <About/>
                </div>
            </div>
        </>
    );
};

export default Page;
