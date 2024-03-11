"use client";

import {BsArrowDown} from "react-icons/bs";
import {Outfit} from "next/font/google";
import {useEffect} from "react";
import ImageHelper from "./Helpers/ImageHelper";
import Link from "next/link";
import gsap from "gsap";
import Image from "next/image";

const outfit = Outfit({
    subsets: ["latin"],
    weight: "600",
});

const Home = () => {
    return (
        <main className={`mt-32 ${outfit}`}>
            <h1 className="text-7xl custom__header-font uppercase">creative <h5
                className="text-purple-700 mt-3">software developer</h5></h1>
            <div className="flex justify-start items-start gap-14 mt-8">
                <Image src="/my_image.jpg" alt="Personal Photo" width={900} height={200}
                       className="object-cover w-[250px] h-[400px]"/>
                <p className="mt-auto uppercase leading-8 font-light max-sm:leading-[2.7rem] text-2xl max-sm:text-3xl">
                    Turning ideas into functional, user-friendly applications.
                    Proficient in both front-end and back-end technologies, I&apos;m
                    ready to bring your projects to life.
                </p>
                <div className="flex flex-col gap-4 mt-auto">
                    <h1 className="uppercase text-7xl">mouad mounib</h1>
                    <button
                        type="submit"
                        className="relative border-2 border-black rounded-lg w-full text-3xl py-2 px-9 duration-300 hover:shadow-lg hover:shadow-gray-500">
                        <Link
                            href="https://drive.google.com/file/d/1iihuC8rg_6uw5lAM65lM7SaZxlQS1npn/view?usp=sharing"
                            target="_blank">
                            Download CV
                        </Link>
                    </button>
                </div>
            </div>
        </main>
    )
};

export default Home;