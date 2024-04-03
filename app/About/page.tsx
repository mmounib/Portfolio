'use client'

import About from "../Components/About/About";
import AnimatedCursor from "../Components/AnimatedCursor";
import Experience from "../Components/Experience/Experience";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";
import Links from "@/app/Components/Links";
import Navbar from "@/app/Components/Navbar";
import Link from "next/link";
import {useEffect} from "react";
import Lenis from "@studio-freight/lenis";

function Page() {
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
            <AnimatedCursor/>
            <section className="">
                <About/>
                <Experience/>
                <Projects/>
            </section>
        </>
    );
}

export default Page;
