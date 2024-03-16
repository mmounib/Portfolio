import gsap from "gsap";
import {FaReact, FaNodeJs, FaGitAlt, FaDocker} from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io5";
import {SiNextdotjs, SiTailwindcss, SiExpress} from "react-icons/si";
import {TbBrandTypescript, TbSql} from "react-icons/tb";
import {IconType} from "react-icons";
import {useGSAP} from "@gsap/react";


type Technolgy__Type = {
    icon: IconType;
    name: string;
    style: string,
}[];
const Skills = () => {
    useGSAP(() => {
        const tl = gsap.timeline();

        tl.fromTo(".skills", {
            width: "100%",
            duration: 2,
            ease: "power2.out",
        }, {
            width: 0,
            delay: 1,
            ease: "power2.out",
        })
    }, []);
    const technologies: Technolgy__Type = [
        {
            icon: IoLogoJavascript, name: "JavaScript", style: "stroke-gray-700 fill-gray-700",
        },
        {
            icon: TbBrandTypescript, name: "Typescript", style: "stroke-gray-700",
        },
        {
            icon: SiNextdotjs, name: "NextJs",style: "stroke-gray-700",
        },
        {
            icon: FaReact, name: "ReactJs",style: "stroke-gray-700 fill-gray-700",
        },
        {
            icon: SiTailwindcss, name: "TailwindCSS",style: "stroke-gray-700",
        },
        {
            icon: FaNodeJs, name: "NodeJs",style: "stroke-gray-700 fill-gray-700",
        },
        {
            icon: SiExpress, name: "ExpressJs",style: "stroke-gray-700 fill-gray-700",
        },
        {
            icon: TbSql, name: "SQL",style: "stroke-gray-700",
        },
        {
            icon: FaGitAlt, name: "Git/Github",style: "stroke-gray-700 fill-gray-700",
        },
        {
            icon: FaDocker, name: "Docker",style: "stroke-gray-700 fill-gray-700",
        },
    ];
    return (
        <section className="my-32 relative ">
            <div className="right-light max-sm:hidden"></div>
            <div className="flex flex-col w-fit relative">
                <h1 className="text-6xl w-full h1__before">MY SKILLSET</h1>
                <h1 className="h1__stroke w-fit flex">My Skills</h1>
                <span className="skills h1__animate w-auto"></span>
            </div>
            <div className="flex flex-wrap max-sm:justify-center w-full mt-20 gap-3">
                {technologies.map((technology, index) => (
                    <p key={index}
                       className="text-3xl py-2 px-4 border border-gray-600 rounded-3xl flex items-center gap-2">
                        <technology.icon size={30} className={technology.style}/>
                        {technology.name}
                    </p>
                ))}
            </div>
        </section>
    );
};

export default Skills;
