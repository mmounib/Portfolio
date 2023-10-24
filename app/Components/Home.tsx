"use client";

import { BsArrowRightShort, BsArrowDown } from "react-icons/bs";
import { Outfit } from "next/font/google";
import { useRef } from "react";
import ImageHelper from "./Helpers/ImageHelper";

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
      <div className="mx-auto text-black max-w-[900px]">
        <h3 className="capitalize text-2xl border-[3px] p-2 pl-6 border-r-0 w-fit border-[#71C9CE]">
          Hello, I&apos;m Mouad Mounib
        </h3>

        <div className="flex flex-col">
          <div className="flex gap-4 mt-4 text-black">
            <h1 className="mt-6">&lt;Software</h1>
            <ImageHelper />
            {/* <Image
              src="/resume-image.jpg"
              alt="Image"
              width={250}
              height={100}
              className="rounded-full w-[150px] h-[150px] object-cover"
            /> */}
          </div>
          <h1 className=" -mt-16"> - Developer /&gt;</h1>
        </div>

        <div className="flex mt-16">
          <div
            className=" border-4 -mt-4 w-[170px] h-[170px] flex flex-col items-center justify-center gap-4 rounded-full border-secondary"
            onMouseEnter={handleJumpToContactMe}
          >
            <h4 className="text-2xl text-center">
              Contact <br /> Me
            </h4>
            <BsArrowDown size={25} />
          </div>
          <div className="flex flex-col max-sm:mt-8 ml-14 max-sm:ml-0 max-sm:leading-6 max-sm:text-sm gap-8 text-xl">
            <p className="max-w-[500px] max-sm:max-w-[90%] leading-10 text-2xl">
              Turning ideas into functional, user-friendly applications.
              Proficient in both front-end and back-end technologies, I&apos;m
              ready to bring your projects to life
            </p>
            <button
              type="submit"
              className="mr-auto mt-4 text-2xl relative flex items-center rounded-md px-4 py-2 text-black"
            >
              <span>See Resume</span>
              <svg
                width="13px"
                height="12px"
                viewBox="0 0 13 10"
                className="ml-4"
              >
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
              <span className="btn-line"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
