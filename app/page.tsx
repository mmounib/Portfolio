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
                <div className="flex flex-col">
                    <Home/>
                </div>
            </div>
        </>
    );
};

export default Page;
