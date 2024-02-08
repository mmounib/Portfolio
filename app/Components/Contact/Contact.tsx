"use client";

import {Space_Grotesk} from "next/font/google";
import {motion} from "framer-motion";

import Link from "next/link";
import {FiGithub} from "react-icons/fi";
import {AiFillLinkedin} from "react-icons/ai";
import {useInView} from "react-intersection-observer";

const Space = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "600"],
});


const Contact = () => {
    return (
        <footer id="contact-section" className="mt-32 max-sm:mt-8 h-full relative">
            <div className="flex flex-col gap-14 items-center justify-center w-full">
                <div className="flex flex-col items-center gap-2">
                    <h1 className="uppercase text-lg italic tracking-wide font-light">want to work together?</h1>
                    <h1 className="uppercase text-8xl">say hi!</h1>
                </div>

                <Link
                    href="mailto:mouadmounib00@gmail.com"
                    className="text-6xl uppercase effect__underline"
                >
                    mouadmounib00@gmail.com
                </Link>
            </div>
        </footer>
    );
};

export default Contact;
