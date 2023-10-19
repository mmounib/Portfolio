'use client'

import Home from "./Components/Home"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"

import Lenis from '@studio-freight/lenis'

import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger";
import TweenTarget from 'gsap';


import {Crimson_Text} from 'next/font/google'
import {useEffect, useRef} from "react"
import DOMTarget = gsap.DOMTarget;
import Navbar from "./Components/Navbar"

const crimson_Text = Crimson_Text({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    style: ['normal', 'italic'],
})

const Page = () => {

    useEffect(() => {
        const lenis = new Lenis();

        lenis.on('scroll', () => {
            // console.log(e)
        })

        function raf(time: any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        gsap.registerPlugin(ScrollTrigger);

        let textElements = gsap.utils.toArray('.h1-animate');

        textElements.forEach((text) => gsap.to(text as any, {
            backgroundSize: '100%',
            ease: 'none',
            scrollTrigger: {
                trigger: text as DOMTarget,
                start: 'center 80%',
                end: 'center 20%',
                scrub: true,
            },
        }));
    }, []);


    return (
        <div className=" bg-primary">
            <div className="flex max-w-[1300px] h-screen flex-col mx-auto overflow-hidden">
                <Navbar />
                <Home/>
                {/* <About/> */}
                {/* <Skills/> */}
                
                {/* <Projects/> */}
                {/* <Contact/> */}
            </div>
        </div>

    )
}
export default Page

