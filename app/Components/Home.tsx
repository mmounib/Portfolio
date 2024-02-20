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
                        data-text="Resume"
                        className="relative border-2 border-black w-full text-3xl py-2 px-9 duration-300 btn__effect">
                        <Link
                            href="https://drive.google.com/file/d/1iihuC8rg_6uw5lAM65lM7SaZxlQS1npn/view?usp=sharing"
                            target="_blank" className="btn__link-effect">
                            Download CV
                        </Link>
                    </button>
                </div>
            </div>
        </main>
    )
};

export default Home;
// useEffect(() => {
//     const tl = gsap.timeline();
//
//     tl.to(".text__bg", {duration: 1.3, scaleX: 1});
//     tl.to(".text__bg", {duration: 1.3, scaleX: 0});
//     tl.to(".text__animate", {delay: 2.5});
//     gsap.fromTo(
//         ".h1__text",
//         {
//             y: 200,
//             duration: 1.3,
//             ease: "power3.out",
//         },
//         {
//             y: 0,
//             duration: 1.3,
//             ease: "power3.out",
//         }
//     );
//     gsap.fromTo(
//         ".h1__text1",
//         {
//             y: 300,
//             delay: 1.4,
//             duration: 1.6,
//             ease: "power3.out",
//         },
//         {
//             y: 0,
//             duration: 1.6,
//             ease: "power3.out",
//         }
//     );
//     gsap.fromTo(
//         ".h1__gsap",
//         {
//             x: -200,
//             delay: 1.6,
//             duration: 2,
//             ease: "power3.out",
//         },
//         {
//             x: 0,
//             delay: 1.8,
//             ease: "power3.out",
//         }
//     );
// }, []);
//
// function handleJumpToContactMe() {
//     const contactSection = document.getElementById("contact-section");
//     if (contactSection) {
//         contactSection.scrollIntoView({behavior: "smooth"});
//     }
// }
//
// return (
//     <section id="home-section" className={` mt-32 ${outfit}`}>
//         <div className="mx-auto text-black relative max-w-[970px] max-sm:px-4">
//             <div className="relative w-fit h-fit">
//                 <div
//                     className="capitalize text-2xl max-sm:text-center max-sm:w-full max-sm:border-r-[3px] border-[3px] p-2 pl-5 border-r-0 w-[16ch] line__thin">
//                     <h3 className="text__animate">Hello, I&apos;m Mouad</h3>
//                 </div>
//             </div>
//
//             <div className="flex flex-col">
//                 <div className="flex max-sm:flex-col mt-4 h-[185px] text-black">
//                     <div className="overflow-hidden">
//                         <h1 className="mt-6 max-sm:capitalize overflow-hidden max-sm:text-7xl text-8xl h1__text custom__header-font uppercase ">
//                             &lt;Software{" "}
//                         </h1>
//                         <h1 className=" max-sm:text-7xl hidden max-sm:flex custom__header-font">
//                             Developer /&gt;
//                         </h1>
//                     </div>
//                     <ImageHelper/>
//                 </div>
//                 <div className="h-[100px] overflow-hidden">
//                     <h1 className=" uppercase text-8xl custom__header-font max-sm:mt-0 max-sm:hidden">
//                         {" "}
//                         - Developer /&gt;
//                     </h1>
//                 </div>
//             </div>
//
//             <div className="flex mt-16 overflow-hidden">
//                 <div
//                     className=" max-sm:hidden overflow-hidden border-4 -mt-4 w-[170px] h-[170px] flex flex-col items-center justify-center gap-4 h1__gsap rounded-full border-secondary"
//                     onMouseEnter={handleJumpToContactMe}
//                 >
//                     <h4 className="text-2xl text-center ">
//                         Contact <br/> Me
//                     </h4>
//                     <BsArrowDown size={25} className=" animate-bounce mx-auto"/>
//                 </div>
//                 <div className="flex flex-col max-sm:mt-0 ml-14 max-sm:ml-0 max-sm:leading-6 gap-8">
//                     <p className="max-w-[500px] overflow-hidden max-sm:max-w-full leading-10 max-sm:leading-[2.7rem] text-2xl max-sm:text-3xl global__p">
//                         Turning ideas into functional, user-friendly applications.
//                         Proficient in both front-end and back-end technologies, I&apos;m
//                         ready to bring your projects to life.
//                     </p>
//                     <button
//                         type="submit"
//                         className="flex border-2 border-black w-fit text-3xl py-2 px-9 hover:shadow-gray-400 hover:shadow-lg hover:mb-4 duration-300"
//                     >
//                         <Link
//                             href="https://drive.google.com/file/d/1iihuC8rg_6uw5lAM65lM7SaZxlQS1npn/view?usp=sharing"
//                             target="_blank">
//                             Resume
//                         </Link>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     </section>