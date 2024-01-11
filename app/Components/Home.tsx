"use client";

import { BsArrowDown } from "react-icons/bs";
import { Outfit } from "next/font/google";
import { useEffect } from "react";
import ImageHelper from "./Helpers/ImageHelper";
import Link from "next/link";
import gsap from "gsap";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "600",
});

const Home = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".text__bg", { duration: 1.3, scaleX: 1 });
    tl.to(".text__bg", { duration: 1.3, scaleX: 0 });
    tl.to(".text__animate", { delay: 2.5 });
    gsap.fromTo(
      ".h1__text",
      {
        y: 200,
        duration: 1.3,
        ease: "power3.out",
      },
      {
        y: 0,
        duration: 1.3,
        ease: "power3.out",
      }
    );
    gsap.fromTo(
      ".h1__text1",
      {
        y: 300,
        delay: 1.4,
        duration: 1.6,
        ease: "power3.out",
      },
      {
        y: 0,
        duration: 1.6,
        ease: "power3.out",
      }
    );
    gsap.fromTo(
      ".h1__gsap",
      {
        x: -200,
        delay: 1.6,
        duration: 2,
        ease: "power3.out",
      },
      {
        x: 0,
        delay: 1.8,
        ease: "power3.out",
      }
    );
  }, []);

  function handleJumpToContactMe() {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section id="home-section" className={` mt-32 ${outfit}`}>
      <div className="mx-auto text-black relative max-w-[970px] max-sm:px-4">
        <div className="relative w-fit h-fit">
          <div className="capitalize text-2xl max-sm:text-center max-sm:w-full max-sm:border-r-[3px] border-[3px] p-2 pl-5 border-r-0 w-[16ch] line__thin">
            <h3 className="text__animate">Hello, I&apos;m Mouad</h3>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex max-sm:flex-col mt-4 h-[185px] text-black">
            <div className="overflow-hidden">
              <h1 className="mt-6  max-sm:capitalize overflow-hidden max-sm:text-7xl text-8xl h1__text uppercase ">
                &lt;Software{" "}
                <p className="h1__hidden tracking-normal capitalize text-9xl">
                  Full-Stack
                </p>
              </h1>
              <h1 className=" max-sm:text-7xl hidden max-sm:flex">
                Developer /&gt;
              </h1>
            </div>
            <ImageHelper />
          </div>
          <div className="h-[100px] overflow-hidden">
            <h1 className=" uppercase text-8xl h1__text1 max-sm:mt-0 max-sm:hidden">
              {" "}
              - Developer /&gt;
            </h1>
          </div>
        </div>

        <div className="flex mt-16 overflow-hidden">
          <div
            className=" max-sm:hidden overflow-hidden border-4 -mt-4 w-[170px] h-[170px] flex flex-col items-center justify-center gap-4 h1__gsap rounded-full border-secondary"
            onMouseEnter={handleJumpToContactMe}
          >
            <h4 className="text-2xl text-center ">
              Contact <br /> Me
            </h4>
            <BsArrowDown size={25} className=" animate-bounce mx-auto" />
          </div>
          <div className="flex flex-col max-sm:mt-0 ml-14 max-sm:ml-0 max-sm:leading-6 gap-8">
            <p className="max-w-[500px] overflow-hidden max-sm:max-w-full leading-10 max-sm:leading-[2.7rem] text-2xl max-sm:text-3xl global__p">
              Turning ideas into functional, user-friendly applications.
              Proficient in both front-end and back-end technologies, I&apos;m
              ready to bring your projects to life.
            </p>
            <button
              type="submit"
              className="mr-auto mt-4 text-2xl relative flex items-center rounded-md px-4 py-2 text-black max-sm:bg-secondary max-sm:py-4 max-sm:px-6"
            >
              <Link href="https://drive.google.com/file/d/1iihuC8rg_6uw5lAM65lM7SaZxlQS1npn/view?usp=sharing">
                Download Resume
              </Link>
              <svg
                width="13px"
                height="12px"
                viewBox="0 0 13 10"
                className="ml-4"
              >
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
              <span className="btn-line max-sm:hidden"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
