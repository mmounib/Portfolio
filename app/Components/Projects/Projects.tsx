"use client";

import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
    return (
        <section className="mt-36 max-sm:mt-20">
            <h1 className="text-4xl max-sm:text-2xl max-sm:text-center font-extralight uppercase">Selected Projects</h1>
            <div className="mt-8 grid grid-flow-col grid-rows-layout max-sm:grid-rows-3 gap-5">
                <div
                    className="col-span-3 max-sm:col-span-1 row-start-1 row-span-2 max-sm:row-span-1 card__hover">
                    <Image src={'/laptop-1.jpg'} alt={'laptop-1'} width={900} height={30} className="object-cover"/>
                    <div className="mt-3 flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-light">CarHub</h1>
                            <Link href="https://github.com/mmounib/Car-Showcasing-App" target="_blank"
                                  className="contact !text-xl flex items-center gap-2">
                                Github
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className="col-start-4 max-sm:row-start-2 max-sm:mt-8 max-sm:col-span-1 col-span-2 row-start-1 card__hover">
                    <Image src={'/all_screen.jpg'} alt={'laptop-1'} width={900} height={30} className=""/>
                    <div className="mt-4 flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-light">Mlnetworks</h1>
                            <Link href="https://mlnetworks.io" target="_blank"
                                  className="contact !text-xl flex items-center gap-2">
                                Website
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-start-1 mt-10 row-start-3 card__hover">
                    <Image src={'/laptop-3.jpg'} alt={'laptop-1'} width={900} height={30} className=""/>
                    <div className="mt-3 flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-light">Ft_Transcendence</h1>
                            <Link href="https://github.com/mmounib/ft_transendence" target="_blank"
                                  className="contact !text-xl flex items-center gap-2">
                                Github
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;