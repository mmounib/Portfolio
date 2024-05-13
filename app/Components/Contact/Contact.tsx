'use client'

import Link from "next/link";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    useGSAP(() => {
        gsap.fromTo('.little__text', {
            y: 150,
            ease: 'power2.out',
        }, {
            y: 0,
            stagger: 0.3,
            duration: .3,
            scrollTrigger: {
                trigger: '.little__text',
                start: 'top 80%',
                end: 'bottom 80%',
            }
        })
    })
    return (
        <footer id="contact-section" className="mt-20 max-sm:mt-8 h-full relative">
            <div className="flex flex-col gap-14 max-sm:gap-8 items-center justify-center w-full overflow-hidden py-6">
                <div className="flex flex-col items-center gap-2 overflow-hidden">
                    <h1 className="uppercase text-lg max-sm:text-base italic tracking-wide font-light little__text overflow-hidden">want
                        to work together?</h1>
                    <h1 className="uppercase text-8xl max-sm:text-5xl little__text overflow-hidden">say hi!</h1>
                </div>

                <Link
                    href="mailto:mouadmounib00@gmail.com"
                    className="text-6xl max-sm:text-2xl max-sm:w-fit uppercase effect__underline little__text"
                >
                    mouadmounib00@gmail.com
                </Link>
            </div>
        </footer>
    );
};

export default Contact;
