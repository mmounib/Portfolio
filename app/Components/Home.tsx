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
        const tl = gsap.timeline();
        tl.fromTo('.header__animation', {
            y: 110,
            skewY: 10,
            skewX: 30,
            ease: "power2.out"
        }, {
            y: 0,
            skewY: 0,
            skewX: 0,
            duration: 1.3,
            ease: 'power4.out'
        })
        tl.fromTo('.button__style', {
            y: 70,
            ease: "power2.out",
        }, {
            y: 0,
            duration: .6,
            ease: 'power4.out'
        })
    })
    return (
        <main className={`mt-28 max-sm:w-[95%] max-sm:mx-auto max-sm:mt-20 ${outfit}`}>
            <h1 className="text-7xl max-sm:text-5xl custom__header-font flex flex-col uppercase overflow-hidden">Software engineer</h1>
            <div className="flex justify-start items-start max-sm:flex-col gap-10 max-sm:gap-7 mt-8 overflow-hidden">
                <Image src="/p-photo.jpg" alt="Personal Photo" width={900} height={200}
                       className="object-cover w-[250px] h-[400px] brightness-90 max-sm:w-full"/>
                <p className="mt-auto uppercase leading-9 font-light max-sm:leading-[2.2rem] text-2xl p__cover">
                    Aspiring software engineer who loves to solve complex problems and create elegant solutions through code.
                </p>
                <div className="flex flex-col max-sm:mx-auto gap-4 max-sm:gap-8 mt-auto">
                    <h1 className="uppercase text-7xl max-sm:text-4xl">mouad mounib</h1>
                    <button
                        type="submit"
                        className="rounded-xl border-[3px] border-secondary w-full text-3xl py-2 px-9 bg-secondary text-white hover:text-secondary hover:bg-transparent button__style">
                        <Link
                            href="https://drive.google.com/file/d/1YeL2dSE8W60tz1rexI7cl4MOA6puemoa/view?usp=sharing"
                            target="_blank">
                            See Resume
                        </Link>
                    </button>
                </div>
            </div>
        </main>
    )
};

export default Home;