import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface Project {
  header: string;
  text: string;
  image: string;
  technologies: string[];
  repositoryUrl: string;
  pageUrl: string;
}

interface Props {
  projects: Project;
}

const ProjectsHelper = ({ projects }: Props) => {
  return (
    <>
        <div className="bg">
          <div className="side left-side">
            <div className="card-2 ">
              <h3 className="text-3xl uppercase text-center">{projects.header}</h3>
              <p className="max-w-[370px] text-xl leading-[2.3rem] mt-6">
                {projects.text}
              </p>
            </div>
          </div>
          <div className="side center-side">
            <div className="card">
              <Image
                src={projects.image}
                alt="ProjectsImage"
                width={700}
                height={700}
                className=" h-full w-full"
              />
            </div>
          </div>
          <div className="side right-side">
            <div className="card-small small">
              <div className="flex gap-5 mt-4 max-sm:mt-0 flex-wrap">
                {projects.technologies.map((technology, index) => (
                  <div
                    className="bg-secondary bg-opacity-50 rounded-[10px] py-3 px-4"
                    key={index}
                  >
                    <span className="capitalize text-xl font-light">
                      {technology}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center mt-16 max-sm:mt-6 gap-6">
              <div className="">
                <button
                  type="submit"
                  className="capitalize btn-animate from-top text-secondary rounded-[5px] py-4 px-3 text-3xl"
                >
                  <Link href={projects.pageUrl}><span className="">read more about it</span></Link>
                </button>
              </div>
              <div className="">
                <a
                  href={projects.repositoryUrl}
                  className="cta capitalize border-4 mt-6 max-sm:mt-0 border-secondary relative transition-all duration-300 rounded-[5px] py-2 px-6 text-3xl flex items-center gap-2"
                >
                  <span>see repository </span>
                  <svg width="15px" height="15px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default ProjectsHelper;
