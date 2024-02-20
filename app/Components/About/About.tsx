
"use client";
import Image from "next/image";
import "../../Components/About.css";
import {useEffect} from "react";
import gsap from "gsap";
import {motion} from "framer-motion";

const About = () => {
    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            ".animated__image",
            {
                x: 0,
                duration: 20,
                ease: "power2.out",
            },
            {
                x: 1000,
                ease: "power4.inOut"
            }
        );
    }, []);

    return (
        <section
            className="flex max-sm:flex-col justify-between gap-12 mt-16 overflow-hidden h-full"
        >
            <div className="bg-gradient"></div>
            <div className="flex flex-col overflow-hidden justify-center max-sm:px-3 items-center gap-6 max-w-[750px]">
                <div className="overflow-hidden">
                    <h1 className="text-2xl max-sm:text-lg first__animation mt-4 tracking-wider font-light capitalize leading-9">
                        Based in Casablanca, Morocco. I am A dedicated{" "}
                        <span>Full Stack developer</span> with a passion for creating
                        innovative solutions that can meet the needs of the clients and
                        companies. With a strong foundation in both front-end and back-end
                        development. With this varied experience, I have developed solid
                        skills to provide solutions to your digital needs.
                    </h1>
                </div>
                <div className="flex flex-col mt-4 max-sm:mt-2 overflow-hidden">
                    <h1 className="text-2xl max-sm:text-lg second__animation tracking-wider font-light capitalize">
                        I&apos;m self-motivated, passionate, and hardworking coder.
                    </h1>
                    <h1 className="text-2xl max-sm:text-lg mt-4 third__animation tracking-wider font-light capitalize">
                        I&apos;m here to build positive relationships, and find creative
                        solutions to complex problems.
                    </h1>
                </div>
            </div>
            <motion.div initial={{opacity: 0, scale: 0.7}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{
                            duration: 2.8,

                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className="relative overflow-hidden rounded-full">
                <Image
                    src="/animated_image.png"
                    alt="AboutMEImage"
                    width={450}
                    height={450}
                    className="object-cover bg-cover rounded-full bg-clip-border w-[400px] h-[400px] brightness-95 border-opacity-40"
                />
                <div className="animated__image"></div>
            </motion.div>
        </section>
    );
};

export default About;
