"use client";

import { BsArrowDown } from "react-icons/bs";
import { Outfit } from "next/font/google";
import { useRef } from "react";
import ImageHelper from "./Helpers/ImageHelper";
import Link from "next/link";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "600",
});

const Home = () => {
  const contactMeRef = useRef<HTMLDivElement>(null); // add type to useRef and initialize to null

  function handleJumpToContactMe() {
    if (contactMeRef.current) {
      contactMeRef.current.scrollIntoView({ behavior: "smooth" }); // scroll to the Contact Me section
    }
  }

  return (
    <section className={` mt-32 ${outfit}`}>
      <div className="mx-auto text-black max-w-[900px] max-sm:px-4">
        <h3 className="capitalize text-2xl max-sm:text-center max-sm:w-full max-sm:border-r border-[3px] p-2 pl-6 border-r-0 w-fit border-[#71C9CE]">
          Hello, I&apos;m Mouad Mounib
        </h3>

        <div className="flex flex-col">
          <div className="flex max-sm:flex-col gap-4 mt-4 text-black">
            <h1 className="mt-6 max-sm:text-7xl">&lt;Software</h1>
            <h1 className=" max-sm:text-7xl hidden max-sm:flex">Developer /&gt;</h1>
            <ImageHelper />
          </div>
          <h1 className=" -mt-16 max-sm:mt-0 max-sm:hidden"> - Developer /&gt;</h1>
        </div>

        <div className="flex mt-16">
          <div
            className=" max-sm:hidden border-4 -mt-4 w-[170px] h-[170px] flex flex-col items-center justify-center gap-4 rounded-full border-secondary"
            onMouseEnter={handleJumpToContactMe}
          >
            <h4 className="text-2xl text-center">
              Contact <br /> Me
            </h4>
            <BsArrowDown size={25} />
          </div>
          <div className="flex flex-col max-sm:mt-0 ml-14 max-sm:ml-0 max-sm:leading-6 gap-8">
            <p className="max-w-[500px] max-sm:max-w-full leading-10 max-sm:leading-[2.7rem] text-2xl max-sm:text-3xl">
              Turning ideas into functional, user-friendly applications.
              Proficient in both front-end and back-end technologies, I&apos;m
              ready to bring your projects to life
            </p>
            <button
              type="submit"
              className="mr-auto mt-4 text-2xl relative flex items-center rounded-md px-4 py-2 text-black max-sm:bg-secondary max-sm:py-4 max-sm:px-6"
            >
              <Link href="https://drive.google.com/file/d/1P9cTRbOLPQeAc7uAAiNdF1g65jokE_oc/view?usp=sharing">
                See Resume
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
