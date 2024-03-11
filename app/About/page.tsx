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
            <section className="max-w-[1300px] mx-auto">
                <Navbar/>
                <About/>
                <Skills/>
                <Experience/>
                <Projects/>
                <div className="box">
                    <Link
                        href="https://drive.google.com/file/d/1iihuC8rg_6uw5lAM65lM7SaZxlQS1npn/view?usp=sharing"
                        target="_blank">
                        See Resume
                    </Link>
                </div>
            </section>
        </>
    );
}

export default Page;
