'use client'

import Link from "next/link";

import Image from "next/image";

interface Project {
  header: string;
  subheader: string;
  text: string;
  features: string;
  images: string[];
  technologies: string[];
  repositoryUrl: string;
}

const PageHelper = ({ projects }: { projects: Project }) => {
  return (
    <section className=" bg-image bg-blend-multiply bg-gray-600 bg-cover bg-no-repeat h-full w-screen flex flex-col py-14 gap-4 text-white">
      <div className="flex gap-4 items-center justify-center px-8">
        <Link
          href="/"
          className="flex items-center mr-auto gap-2 hover:text-gray-400 cursor-pointer text-white transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 stroke-white hover:stroke-gray-400 max-sm:bg-secondary max-sm:rounded-full max-sm:stroke-black max-sm:p-2 max-sm:h-7 max-sm:w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <span className="capitalize text-3xl max-sm:hidden">go back</span>
        </Link>
        
        <div className="flex items-center mr-auto">
          <span className="uppercase text-8xl max-sm:text-4xl">{projects.header}</span>
          <h3 className="capitalize text-4xl max-sm:hidden">
            {" "}
            &nbsp;&nbsp;|&nbsp;{" "}
            <span className="text-gray-400">{projects.subheader}</span>
          </h3>
        </div>
      </div>
      <div className="flex px-16 max-sm:flex-col max-sm:px-4">
        <div className="flex flex-col py-24 max-sm:py-14 gap-14 max-sm:gap-6 justify-center">
          <div className="flex flex-col gap-6 mt-10 max-sm:mt-4">
            <div className="flex gap-3 items-center">
              <span className="bg-secondary h-[5px] w-[15px]"></span>
              <span className="text-4xl">Github Repository</span>
            </div>
            <Link
              href={projects.repositoryUrl}
              className=" hover:scale-105 transition-all duration-500 italic ml-5 m-auto max-sm:ml-2 text-xl text-black bg-secondary inline-block rounded-[5px] py-2 px-4"
            >
              See Repository
            </Link>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex gap-3 items-center">
              <span className="bg-secondary h-[5px] w-[15px]"></span>
              <span className="text-4xl">Technologies</span>
            </div>
            <div className="flex gap-5 mt-4 ml-5 max-sm:ml-2 max-sm:mt-0 flex-wrap">
              {projects.technologies.map((technology, index) => (
                <div
                  className=" border-secondary border-2 rounded-[5px] py-3 px-4"
                  key={index}
                >
                  <span className="capitalize text-xl font-light">
                    {technology}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 w-full mt-10">
            <div className="flex gap-3 items-center">
              <span className="bg-secondary h-[5px] w-[15px]"></span>
              <span className="text-4xl">Description</span>
            </div>
            <p className="text-gray-400 text-2xl ml-4 max-w-[650px] max-sm:max-w-full leading-10">
              {projects.text}
            </p>
          </div>
          <div className="flex flex-col gap-6 w-full mt-4">
            <div className="flex gap-3 items-center">
              <span className="bg-secondary h-[5px] w-[15px]"></span>
              <span className="text-4xl">Features</span>
            </div>
            <p className="text-gray-400 text-2xl ml-4 max-w-[650px] max-sm:max-w-full leading-10">
              + {projects.features}
            </p>
          </div>
        </div>
        <video
          className="h-full w-[60%] m-auto border-2 border-gray-500 rounded-lg shadow-md"
          src="/transcendence-video.mp4"
          autoPlay
          muted
        ></video>
      </div>
      <div className="flex flex-col gap-10">
        {projects.images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="screenshottranscendence"
            width={800}
            height={800}
            className="border-2 border-gray-500 w-[85%] h-full object-cover mx-auto rounded-lg"
          />
        ))}
      </div>
    </section>
  );
};

export default PageHelper;
