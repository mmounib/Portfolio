import {Outfit} from "next/font/google";
import Link from "next/link";
import gsap from "gsap";
import Image from "next/image";
import {useGSAP} from "@gsap/react";

const outfit = Outfit({
    subsets: ["latin"],
    weight: "600",
});

const Home = () => {
    useGSAP(() => {
        gsap.fromTo('.first__name', {
            y: 100,
            ease: "power2.out"
        }, {
            y: 0,
            stagger: .5,
            duration: 1.5,
            ease: 'power4.out'
        })
        gsap.fromTo('.header__animation', {
            y: 100,
            ease: "power2.out"
        }, {
            y: 0,
            stagger: .5,
            duration: 1.5,
            ease: 'power4.out'
        })
        gsap.fromTo('.image__cover', {
            x: -250,
            ease: "power2.out",
        }, {
            x: 0,
            delay: 1,
            duration: 1,
            ease: "power4.out"
        })
        gsap.fromTo('.p__cover', {
            y: 170,
            ease: "power2.out",
        }, {
            y: 0,
            delay: 1.1,
            duration: 2,
            ease: "power4.out",
        })
        gsap.fromTo('.button__style', {
            x: 350,
            ease: "power2.out",
        }, {
            x: 0,
            delay: 1.2,
            duration: 1,
            ease: "power4.out",
        })
    })
    return (
        <main className={`mt-32 ${outfit}`}>
            <h1 className="text-7xl custom__header-font header__animation uppercase overflow-hidden">creative <h1
                className="text-blue-800 text-7xl mt-3 header__animation">software developer</h1></h1>
            <div className="flex justify-start items-start gap-14 mt-8 overflow-hidden">
                <Image src="/my_image.jpg" alt="Personal Photo" width={900} height={200}
                       className="object-cover w-[250px] h-[400px] image__cover"/>
                <p className="mt-auto uppercase leading-8 font-light max-sm:leading-[2.7rem] text-2xl max-sm:text-3xl p__cover">
                    Turning ideas into functional, user-friendly applications.
                    Proficient in both front-end and back-end technologies, I&apos;m
                    ready to bring your projects to life.
                </p>
                <div className="flex flex-col gap-4 mt-auto">
                    <h1 className="uppercase text-7xl">mouad mounib</h1>
                    <button
                        type="submit"
                        className="relative rounded-xl border-[3px] border-blue-700 w-full text-3xl py-2 px-9 bg-blue-700 text-white hover:text-blue-700 hover:bg-white button__style">
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