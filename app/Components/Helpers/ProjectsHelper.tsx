import Image from "next/image";

interface project {
  header: string;
  text: string;
  image: string;
}

const ProjectsHelper = () => {
  return (
    <>
      <div className="bg">
        <div className="side left-side">
          <div className="card-2">
            <h3 className="text-3xl text-center">FT_TRANSCENDENCE</h3>
            <p className="max-w-[370px] text-xl leading-[2.3rem] mt-6">
              A Full Stack Web Application based on the Mighty Pong Game, with
              social media features and a leaderboard. The web application is
              built using Typescript and React for the frontend, and NestJS for
              the backend. The database is a PostgreSQL database, and the
              application is deployed on using Docker.
            </p>
          </div>
        </div>
        <div className="side center-side">
          <div className="card">
            <Image
              src="/screenshot-transcendence.png"
              alt="ProjectImage"
              width={700}
              height={700}
              className=" bg-cover object-cover h-full w-full"
            />
          </div>
        </div>
        <div className="side right-side">
          <div className="card-small small">
            <div className="flex gap-6 mt-4 max-sm:mt-0 flex-wrap">
              <div className=" bg-secondary bg-opacity-50 rounded-[5px] py-2 px-5">
                <span className="capitalize text-xl font-light">
                  Typescript
                </span>
              </div>
              <div className="bg-secondary bg-opacity-50 rounded-[5px] py-2 px-5">
                <span className="capitalize text-xl font-light">
                  Javascript
                </span>
              </div>
              <div className="bg-secondary bg-opacity-50 rounded-[5px] py-2 px-5">
                <span className="capitalize text-xl font-light">ReactJs</span>
              </div>
              <div className="bg-secondary bg-opacity-50 rounded-[5px] py-2 px-5">
                <span className="capitalize text-xl font-light">NestJs</span>
              </div>
              <div className="bg-secondary bg-opacity-50 rounded-[5px] py-2 px-5">
                <span className="capitalize text-xl font-light">
                  PostgreSQL
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-8 gap-4">
            <div className="">
              <button
                type="submit"
                className="capitalize btn-animate text-secondary rounded-[5px] py-2 px-2 text-3xl"
              >
                <span className="">read more about it</span>
              </button>
            </div>
            <div className="">
              <a
                href="#"
                className="cta capitalize border-4 mt-6 max-sm:mt-0 border-secondary relative transition-all duration-300 rounded-[5px] py-2 px-6 text-3xl flex items-center gap-2"
              >
                <span>see repository </span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex">
        <Image
          src="/image-bg.png"
          alt="ProjectImage"
          width={700}
          height={700}
          className="w-[800px] object-cover h-[620px]"
        />
      </div>
      <div className="flex flex-col gap-24">
        <div className=" flex w-[450px] flex-col gap-6 mt-2 bg-white bg-opacity-70 backdrop-blur-lg shadow-md py-4 px-6 -ml-14 shadow-gray-500 rounded-[10px] h-[450px]">
          <h2>FT_TRANSCENDENCE</h2>
          <p className="max-w-[370px] text-lg leading-8">
            A full stack web application based on the Mighty Pong Game, with
            social media features and a leaderboard. The web application is
            built using Typescript and React for the frontend, and NestJS for
            the backend. The database is a PostgreSQL database, and the
            application is deployed on using Docker.
          </p>
          <div className="flex gap-6 mt-4 max-sm:mt-0 flex-wrap">
            <div className=" bg-secondary bg-opacity-50 rounded-[5px] py-2 px-5">
              <span className="capitalize text-base font-light">Typescript</span>
            </div>
            <div className="bg-secondary bg-opacity-50 rounded-[5px] py-2 px-5">
              <span className="capitalize text-base font-light">Javascript</span>
            </div>
            <div className="bg-secondary bg-opacity-50 rounded-[5px] py-2 px-5">
              <span className="capitalize text-base font-light">ReactJs</span>
            </div>
            <div className="bg-secondary bg-opacity-50 rounded-[5px] py-2 px-5">
              <span className="capitalize text-base font-light">NestJs</span>
            </div>
            <div className="bg-secondary bg-opacity-50 rounded-[5px] py-2 px-5">
              <span className="capitalize text-base font-light">PostgreSQL</span>
            </div>
          </div>
        </div>
        <div className="flex ml-4 justify-between">
          <button
            type="submit"
            className="capitalize btn-animate text-secondary rounded-[5px] py-2 px-2 text-lg"
          >
            <span className="">read more about it</span>
          </button>
          <div className="">
            <a
              href="#"
              className="cta capitalize border-4 border-secondary relative transition-all duration-300 rounded-[5px] py-2 px-6 text-lg flex items-center gap-2"
            >
              <span>see repository </span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ProjectsHelper;
