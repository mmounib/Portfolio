import Link from "next/link";
import {IoIosArrowRoundForward} from "react-icons/io";

type Project_Template = {
    header: string;
    subHeader: string;
    sup: number;
    link: string;
}[];

const ProjectCards = () => {
    const ProjectData: Project_Template = [
        {
            header: "ft_transcendence",
            subHeader: "Ping Pong Website",
            sup: 1,
            link: "/projects/ft_transcendence",
        },
        {
            header: "CarHub",
            subHeader: "Car Showcasing Website",
            sup: 2,
            link: "/projects/carhub",
        },
        {
            header: "markethub",
            subHeader: "Ecommerce Website",
            sup: 3,
            link: "/projects/ft_transcendence",
        },
        {
            header: "portfolio",
            subHeader: "Personal Portfolio Website",
            sup: 4,
            link: "/projects/ft_transcendence",
        },
    ];
    
    return (
        <>
            {ProjectData.map((content, index) => (
                <div key={index}
                     className="projects__shadow-style flex flex-col py-6 w-[450px]"
                >
                    <Link
                        href={content.link}
                        className="flex flex-col max-sm:flex-col py-4 px-8 relative justify-between items-end w-full cursor-none"
                    >
                        <h1 className="uppercase text-3xl max-sm:text-4xl font-extralight mr-auto">
                            <sup className="text-base flex">0{content.sup}</sup>
                            {content.header}
                        </h1>
                        <h1 className="text-xl max-sm:text-xl max-sm:mt-2 font-extralight tracking-wider text-gray-600 h1-hide">
                            {content.subHeader}
                        </h1>
                    </Link>
                    <Link
                        href={content.link}
                        className="flex items-end justify-end mr-2 mt-10 cursor-none"
                    >
                        <p className="font-light text-lg uppercase w-fit bg-black text-secondary py-2 px-3 flex items-center cursor-pointer proj__animation">
                            see more{" "}
                            <IoIosArrowRoundForward
                                size={25}
                                className="fill-secondary proj__animation-icon"
                            />{" "}
                        </p>
                    </Link>
                </div>
            ))}
            {/*<div className="projects__shadow-style flex flex-col w-[450px] py-6">*/}
            {/*    <Link*/}
            {/*        href="/projects/ft_transcendence"*/}
            {/*        className="flex flex-col max-sm:flex-col py-4 px-8 relative justify-between items-end w-full cursor-none"*/}
            {/*    >*/}
            {/*        <h1 className="uppercase text-3xl max-sm:text-4xl font-extralight mr-auto">*/}
            {/*            <sup className=" text-base flex">02</sup>*/}
            {/*            CarHub*/}
            {/*        </h1>*/}
            {/*        <h1 className="text-xl max-sm:text-xl max-sm:mt-2 font-extralight tracking-wider text-gray-600 h1-hide">*/}
            {/*            Car Showcasing Website*/}
            {/*        </h1>*/}
            {/*    </Link>*/}
            {/*    <Link*/}
            {/*        href="/projects/ft_transcendence"*/}
            {/*        className="flex items-end justify-end mr-2 mt-10 cursor-none"*/}
            {/*    >*/}
            {/*        <p className="font-light text-lg uppercase w-fit bg-black text-secondary py-2 px-3 flex items-center cursor-pointer proj__animation">*/}
            {/*            see more{" "}*/}
            {/*            <IoIosArrowRoundForward*/}
            {/*                size={25}*/}
            {/*                className=" fill-secondary proj__animation-icon"*/}
            {/*            />{" "}*/}
            {/*        </p>*/}
            {/*    </Link>*/}
            {/*</div>*/}
            {/*<div className="projects__shadow-style flex flex-col py-6 w-[450px]">*/}
            {/*    <Link*/}
            {/*        href="/projects/ft_transcendence"*/}
            {/*        className="flex flex-col max-sm:flex-col py-4 px-8 relative justify-between items-end w-full cursor-none"*/}
            {/*    >*/}
            {/*        <h1 className="uppercase text-3xl max-sm:text-4xl font-extralight mr-auto">*/}
            {/*            <sup className=" text-base flex">03</sup>*/}
            {/*            markethub*/}
            {/*        </h1>*/}
            {/*        <h1 className="text-xl max-sm:text-xl max-sm:mt-2 font-extralight tracking-wider text-gray-600 h1-hide">*/}
            {/*            Ecommerce Website*/}
            {/*        </h1>*/}
            {/*    </Link>*/}
            {/*    <Link*/}
            {/*        href="/projects/ft_transcendence"*/}
            {/*        className="flex items-end justify-end mr-2 mt-10 cursor-none"*/}
            {/*    >*/}
            {/*        <p className="font-light text-lg uppercase w-fit bg-black text-secondary py-2 px-3 flex items-center cursor-pointer proj__animation">*/}
            {/*            see more{" "}*/}
            {/*            <IoIosArrowRoundForward*/}
            {/*                size={25}*/}
            {/*                className=" fill-secondary proj__animation-icon"*/}
            {/*            />{" "}*/}
            {/*        </p>*/}
            {/*    </Link>*/}
            {/*</div>*/}
            {/*<div className="projects__shadow-style flex flex-col py-6 w-[450px]">*/}
            {/*    <Link*/}
            {/*        href="/projects/ft_transcendence"*/}
            {/*        className="flex flex-col max-sm:flex-col py-4 px-8 relative justify-between items-end w-full cursor-none"*/}
            {/*    >*/}
            {/*        <h1 className="uppercase text-3xl max-sm:text-4xl font-extralight mr-auto">*/}
            {/*            <sup className=" text-base flex">04</sup>*/}
            {/*            portfolio*/}
            {/*        </h1>*/}
            {/*        <h1 className="text-xl max-sm:text-xl max-sm:mt-2 font-extralight tracking-wider text-gray-600 h1-hide">*/}
            {/*            Personal Portfolio Website*/}
            {/*        </h1>*/}
            {/*    </Link>*/}
            {/*    <Link*/}
            {/*        href="/projects/ft_transcendence"*/}
            {/*        className="flex items-end justify-end mr-2 mt-10 cursor-none"*/}
            {/*    >*/}
            {/*        <p className="font-light text-lg uppercase w-fit bg-black text-secondary py-2 px-3 flex items-center cursor-pointer proj__animation">*/}
            {/*            see more{" "}*/}
            {/*            <IoIosArrowRoundForward*/}
            {/*                size={25}*/}
            {/*                className=" fill-secondary proj__animation-icon"*/}
            {/*            />{" "}*/}
            {/*        </p>*/}
            {/*    </Link>*/}
            {/*</div>*/}
        </>
    )
}
export default ProjectCards;