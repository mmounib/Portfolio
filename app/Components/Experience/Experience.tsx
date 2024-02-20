'use client'

import {useEffect, useRef} from "react";
import {motion, useInView} from 'framer-motion';
import gsap from "gsap";

const Experience = () => {
    const ref = useRef(null)
    const inView = useInView(ref, {once: true})

    useEffect(() => {
        if (inView) {
            const tl = gsap.timeline();

            tl.fromTo(".experience", {
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
            <div className="flex flex-col w-fit relative">
                <h1 className="text-6xl w-full h1__before uppercase">Years Walkthrough</h1>
                <h1 ref={ref} className="h1__stroke w-fit flex">Curriculum vitae</h1>
                <motion.span className="experience h1__animate w-auto"></motion.span>
            </div>
            <h1 className="h1__stroke"></h1>
            <div className="mt-20 flex flex-col w-full">
                <div className="experience__style">
                    <p className="uppercase flex-[0.5] font-light">December 2023 - now</p>
                    <div className="flex flex-col flex-1  gap-2">
                        <p className="experience__paragraph-style">full stack developer intern</p>
                        <p className="font-light text-4xl">MLNetworks</p>
                    </div>
                </div>
                <div className="experience__style">
                    <p className="uppercase flex-[0.5] font-light">october 2021 - december 2023</p>
                    <div className="flex flex-col flex-1 gap-2">
                        <p className="experience__paragraph-style">software development student</p>
                        <p className="font-light text-4xl uppercase">1337 - 42 network</p>
                    </div>
                </div>
                <div className="experience__style border-b border-black">
                    <p className="uppercase flex-[0.5] font-light">september 2018 - juin 2021</p>
                    <div className="flex flex-col flex-1 items-start gap-2">
                        <p className="experience__paragraph-style">BS Degree - English studies</p>
                        <p className="font-light text-4xl">Hassan II University - Morocco</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;