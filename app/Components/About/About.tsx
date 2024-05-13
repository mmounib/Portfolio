import Image from "next/image";
import {useGSAP} from "@gsap/react";
import {technologies} from "@/app/types";

const About = () => {
    useGSAP(() => {
    }, []);

    return (
        <section className="mt-36">
            <h1 className="text-4xl max-sm:text-2xl max-sm:text-center font-extralight uppercase">About Me</h1>
            <div
                className="mt-8 grid grid-cols-4 max-sm:grid-cols-0 grid-flow-row max-sm:px-2 w-full gap-6 overflow-hidden"
            >
                <div
                    className="flex flex-col col-span-3 max-sm:col-span-4 max-sm:row-start-2 overflow-hidden justify-center items-center gap-6">
                    <div className="overflow-hidden bg-bento-gradient py-14 px-12 max-sm:p-6 rounded-3xl">
                        <h1 className="text-2xl text-gray-300 max-sm:text-lg tracking-wider font-light capitalize leading-9">
                            Based in Casablanca, Morocco. I am A dedicated{" "}
                            <span>Full Stack developer</span> with a passion for creating
                            innovative solutions that can meet the needs of the clients and
                            companies. With a strong foundation in both front-end and back-end
                            development. I have developed solid
                            skills to provide solutions to your digital needs.
                        </h1>
                    </div>
                </div>
                <div
                    className="col-start-3 col-span-2 max-sm:row-start-3 max-sm:col-span-4 py-8 px-10 max-sm:p-6 bg-bento-gradient rounded-3xl">
                    <h1 className="text-2xl text-gray-300 font-light tracking-wide text-center">Curriculum vitae</h1>
                    <div className="mt-10 flex gap-7 w-full">
                        <p className="uppercase text-gray-300 flex-1 font-light">December 2023 - now</p>
                        <span className="w-[1px] h-[70px] bg-gray-300"></span>
                        <div className="flex flex-col flex-1 gap-2">
                            <p className="text-gray-300 max-sm:text-sm capitalize">full stack developer intern</p>
                            <p className="font-light text-4xl max-sm:text-2xl text-gray-300 overflow-hidden">MLNetworks</p>
                        </div>
                    </div>
                    <div className="mt-7 flex gap-7 w-full">
                        <p className="uppercase text-gray-300 flex-1 font-light">october 2021 - december 2023</p>
                        <span className="w-[1px] h-[70px] bg-gray-300"></span>
                        <div className="flex flex-col flex-1 gap-2">
                            <p className="text-gray-300 max-sm:text-sm capitalize">Software Developer</p>
                            <p className="font-light text-4xl max-sm:text-2xl text-gray-300 overflow-hidden">42 Network</p>
                        </div>
                    </div>
                </div>
                <div
                    className="row-start-2 max-sm:row-start-4 max-sm:col-span-4 max-sm:w-full col-start-1 col-span-2 py-8 px-6 max-sm:p-4 bg-bento-gradient rounded-3xl">
                    <h1 className="text-2xl text-gray-300 font-light tracking-wide text-center">My Skills</h1>
                    <div className="flex flex-wrap max-sm:justify-start w-full mt-7 gap-3">
                        {technologies.map((technology, index) => (
                            <p key={index}
                               className="text-lg max-sm:text-base text-gray-300 py-2 px-3 border border-gray-600 rounded-3xl flex items-center gap-1">
                                <technology.icon size={20} className={technology.style}/>
                                {technology.name}
                            </p>
                        ))}
                    </div>
                </div>
                <div
                    className="row-start-1 max-sm:col-span-4 max-sm:w-full grid bg-bento-gradient col-start-4 w-full rounded-3xl">
                    <Image
                        src="/animated_image.png"
                        alt="AboutMEImage"
                        width={450}
                        height={450}
                        className="bg-cover rounded-full bg-clip-border justify-self-center self-center w-[230px] h-[230px] brightness-75 bg-[#AEB9C399]"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
