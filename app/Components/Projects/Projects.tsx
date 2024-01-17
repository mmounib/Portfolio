"use client";

import Image from "next/image";
import Link from "next/link";
import {useEffect, useRef} from "react";
import {IoIosArrowRoundForward} from "react-icons/io";

const Projects = () => {
    const cursor = useRef<HTMLDivElement| null>(null)
    let curs = cursor!.current;
    let attached = false;

    if (curs) {

    document.addEventListener("mousemove", (e) => {
        let x = e.clientX;
        let y = e.clientY;
        curs!.style.left = x - 25 + "px";
        curs!.style.top = y - 25 + "px";
    });
    }

    let servicesImages = [
        "url('https://assets.codepen.io/1651485/springNew.jpg')",
        "url('https://assets.codepen.io/1651485/summerNew.jpg')",
        "url('https://assets.codepen.io/1651485/autumnNew.png')",
        "url('https://assets.codepen.io/1651485/winterNew.jpg')"
    ];
    const showImage = () => {
        if (!attached) {
           attached = true;
        document.addEventListener("mouseover", (e) => {
            curs!.classList.add("cursor-image-show");
            curs!.style.backgroundImage = servicesImages[0];
        });
        }
    }
    const hideImage = () => {
        attached = false;
        document.addEventListener("mouseleave", (e) => {
            curs!.classList.remove("cursor-image-show");
            curs!.style.backgroundImage = "none";
        });
    }
    return (
        <section className="my-36 relative">
            <h1 className="h1__stroke">projects</h1>
            <div className="flex justify-center gap-16 flex-wrap mt-16">
                <div
                    onPointerEnter={showImage}
                    onPointerLeave={hideImage}
                    className="projects__shadow-style flex flex-col py-6 w-[450px]"
                >
                    <Link
                        href="/projects/ft_transcendence"
                        className="flex flex-col max-sm:flex-col py-4 px-8 relative justify-between items-end w-full cursor-none"
                    >
                        <h1 className="uppercase text-3xl max-sm:text-4xl font-extralight mr-auto">
                            <sup className=" text-base flex">01</sup>
                            ft_transcendence
                        </h1>
                        <h1 className="text-xl max-sm:text-xl max-sm:mt-2 font-extralight tracking-wider text-gray-600 h1-hide">
                            Ping Pong Website
                        </h1>
                    </Link>
                    <Link
                        href="/projects/ft_transcendence"
                        className="flex items-end justify-end mr-2 mt-10 cursor-none"
                    >
                        <p className="font-light text-base uppercase w-fit bg-[#71c9ce] py-2 px-3 flex items-center cursor-pointer proj__animation">
                            see more{" "}
                            <IoIosArrowRoundForward
                                size={17}
                                className=" fill-black proj__animation-icon"
                            />{" "}
                        </p>
                    </Link>
                    <div ref={cursor} className="cursor">
                        {/*<Image*/}
                        {/*    src={"/ft_transcendence.png"}*/}
                        {/*    alt="Image_ss"*/}
                        {/*    width={250}*/}
                        {/*    height={250}*/}
                        {/*    className="rounded-none"*/}
                        {/*/>*/}
                    </div>
                </div>
                <div className="projects__shadow-style flex flex-col w-[450px] py-6">
                    <Link
                        href="/projects/ft_transcendence"
                        className="flex flex-col max-sm:flex-col py-4 px-8 relative justify-between items-end w-full cursor-none"
                    >
                        <h1 className="uppercase text-3xl max-sm:text-4xl font-extralight mr-auto">
                            <sup className=" text-base flex">02</sup>
                            CarHub
                        </h1>
                        <h1 className="text-xl max-sm:text-xl max-sm:mt-2 font-extralight tracking-wider text-gray-600 h1-hide">
                            Car Showcasing Website
                        </h1>
                    </Link>
                    <Link
                        href="/projects/ft_transcendence"
                        className="flex items-end justify-end mr-2 mt-10 cursor-none"
                    >
                        <p className="font-light text-base uppercase w-fit bg-[#71c9ce] py-2 px-3 flex items-center cursor-pointer proj__animation">
                            see more{" "}
                            <IoIosArrowRoundForward
                                size={17}
                                className=" fill-black proj__animation-icon"
                            />{" "}
                        </p>
                    </Link>
                </div>
                <div className="projects__shadow-style flex flex-col py-6 w-[450px]">
                    <Link
                        href="/projects/ft_transcendence"
                        className="flex flex-col max-sm:flex-col py-4 px-8 relative justify-between items-end w-full cursor-none"
                    >
                        <h1 className="uppercase text-3xl max-sm:text-4xl font-extralight mr-auto">
                            <sup className=" text-base flex">03</sup>
                            markethub
                        </h1>
                        <h1 className="text-xl max-sm:text-xl max-sm:mt-2 font-extralight tracking-wider text-gray-600 h1-hide">
                            Ping Pong Website
                        </h1>
                    </Link>
                    <Link
                        href="/projects/ft_transcendence"
                        className="flex items-end justify-end mr-2 mt-10 cursor-none"
                    >
                        <p className="font-light text-base uppercase w-fit bg-[#71c9ce] py-2 px-3 flex items-center cursor-pointer proj__animation">
                            see more{" "}
                            <IoIosArrowRoundForward
                                size={17}
                                className=" fill-black proj__animation-icon"
                            />{" "}
                        </p>
                    </Link>
                </div>
                <div className="projects__shadow-style flex flex-col py-6 w-[450px]">
                    <Link
                        href="/projects/ft_transcendence"
                        className="flex flex-col max-sm:flex-col py-4 px-8 relative justify-between items-end w-full cursor-none"
                    >
                        <h1 className="uppercase text-3xl max-sm:text-4xl font-extralight mr-auto">
                            <sup className=" text-base flex">04</sup>
                            portfolio
                        </h1>
                        <h1 className="text-xl max-sm:text-xl max-sm:mt-2 font-extralight tracking-wider text-gray-600 h1-hide">
                            Personal Portfolio Website
                        </h1>
                    </Link>
                    <Link
                        href="/projects/ft_transcendence"
                        className="flex items-end justify-end mr-2 mt-10 cursor-none"
                    >
                        <p className="font-light text-base uppercase w-fit bg-[#71c9ce] py-2 px-3 flex items-center cursor-pointer proj__animation">
                            see more{" "}
                            <IoIosArrowRoundForward
                                size={17}
                                className=" fill-black proj__animation-icon"
                            />{" "}
                        </p>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;
