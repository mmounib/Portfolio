'use client'

import Link from "next/link";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {useGSAP} from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

// const Space = Space_Grotesk({
//     subsets: ["latin"],
//     weight: ["400", "600"],
// });


const Contact = () => {
    useGSAP(() => {
        gsap.fromTo('.little__text', {
            y: 150,
            ease: 'power2.out',
        }, {
            y: 0,
            stagger: 0.455,
            duration: .7,
            scrollTrigger: {
                trigger: '.little__text',
                start: 'top 80%',
                end: 'bottom 80%',
            }
        })
    })
    return (
        <footer id="contact-section" className="mt-32 max-sm:mt-8 h-full relative">
            <div className="flex flex-col gap-14 items-center justify-center w-full overflow-hidden">
                <div className="flex flex-col items-center gap-2 overflow-hidden">
                    <h1 className="uppercase text-lg italic tracking-wide font-light little__text overflow-hidden">want to work together?</h1>
                    <h1 className="uppercase text-8xl little__text overflow-hidden">say hi!</h1>
                </div>

                <Link
                    href="mailto:mouadmounib00@gmail.com"
                    className="text-6xl uppercase effect__underline little__text overflow-hidden"
                >
                    mouadmounib00@gmail.com
                </Link>
            </div>
        </footer>
    );
};

export default Contact;
