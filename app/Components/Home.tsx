"use client";

import Image from "next/image";

import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "600",
});

const Home = () => {
  return (
    <section className={` mt-32 ${outfit}`}>
      <div className="mx-auto text-black max-w-[900px]">
        <h3 className="capitalize text-xl">Hello, I&apos;m Mouad Mounib</h3>
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
        <div className="flex flex-col mt-16 max-sm:mt-8 ml-36 max-sm:ml-0 max-sm:leading-6 max-sm:text-sm gap-8 text-xl">
          <p className="max-w-[400px] max-sm:max-w-[90%] leading-8">
            Turning ideas into functional, user-friendly applications.
            Proficient in both front-end and back-end technologies, I&apos;m
            ready to bring your projects to life
          </p>
          <button
            type="submit"
            className="mr-auto  relative rounded-md px-6 py-2 text-black"
          >
            See Resume
            <span className="btn-line"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
