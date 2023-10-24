
import Image from "next/image";

interface project {
  header: string,
  text: string,
  image: string
}

const ProjectsHelper = () => {
  return (
    <>
      <div className="flex">
        <Image
          src="/random-image.jpg"
          alt="ProjectImage"
          width={400}
          height={400}
          className="w-[800px] object-cover h-[620px]"
        />
      </div>
      <div className="flex flex-col gap-24">
        <div className=" flex w-[450px] flex-col gap-6 mt-2 bg-white bg-opacity-70 backdrop-blur-lg shadow-md py-4 px-6 -ml-14 shadow-gray-500 rounded-[10px] h-[450px]">
          <h2>FT_TRANSCENDENCE</h2>
          <p className="max-w-[350px] leading-7">
            A full stack web application based on the Mighty Pong Game, with
            social media features and a leaderboard. The web application is
            built using Typescript and React for the frontend, and NestJS for
            the backend. The database is a PostgreSQL database, and the
            application is deployed on using Docker.
          </p>
          <div className="flex gap-6 mt-4 max-sm:mt-0 flex-wrap">
            <div className=" bg-secondary bg-opacity-50 rounded-[5px] py-2 px-5">
              <span className="capitalize text-lg font-light">Typescript</span>
            </div>
            <div className="bg-secondary bg-opacity-50 rounded-[5px] py-2 px-5">
              <span className="capitalize text-lg font-light">Javascript</span>
            </div>
            <div className="bg-secondary bg-opacity-50 rounded-[5px] py-2 px-5">
              <span className="capitalize text-lg font-light">ReactJs</span>
            </div>
            <div className="bg-secondary bg-opacity-50 rounded-[5px] py-2 px-5">
              <span className="capitalize text-lg font-light">NestJs</span>
            </div>
            <div className="bg-secondary bg-opacity-50 rounded-[5px] py-2 px-5">
              <span className="capitalize text-lg font-light">PostgreSQL</span>
            </div>
          </div>
        </div>
        <div className="flex ml-6 justify-between">
          <button
            type="submit"
            className="capitalize border-4 border-secondary rounded-[5px] py-2 px-2 text-lg"
          >
            <span>read more about it</span>
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
      </div>
    </>
  );
};

export default ProjectsHelper;
