"use client";

import { BsArrowRightShort, BsArrowDown } from "react-icons/bs";
import Image from "next/image";
import { Outfit } from "next/font/google";
import { useRef } from "react";

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
        <h3 className="capitalize text-xl border-[3px] p-2 pl-6 border-r-0 w-fit border-[#71C9CE]">
          Hello, I&apos;m Mouad Mounib
        </h3>

        <div className="flex flex-col gap-2">
          <div className="flex gap-8 mt-8 text-black">
            <h1 className=" mt-4">Software</h1>
            <Image
              src="/resume-image.jpg"
              alt="Image"
              width={250}
              height={100}
              className="rounded-full w-[110px] h-[110px] object-cover"
            />
          </div>
          <h1> - Developer </h1>
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
            <p className="max-w-[400px] max-sm:max-w-[90%] leading-8">
              Turning ideas into functional, user-friendly applications.
              Proficient in both front-end and back-end technologies, I&apos;m
              ready to bring your projects to life
            </p>
            <button
              type="submit"
              className="mr-auto  relative flex items-center rounded-md px-4 py-2 text-black"
            >
              See Resume <BsArrowRightShort size={30} />
              <span className="btn-line"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
