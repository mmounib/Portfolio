"use client";

import {useEffect} from "react";
import gsap from "gsap";
import {FaReact, FaNodeJs, FaGitAlt, FaDocker} from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io5";
import {BiLogoTypescript} from "react-icons/bi";
import {SiNextdotjs, SiTailwindcss, SiExpress, SiMysql} from "react-icons/si";
import {TbBrandTypescript, TbSql} from "react-icons/tb";
import {IconType} from "react-icons";


type Technolgy__Type = {
    icon: IconType;
    name: string;
}[];
const Skills = () => {
    useEffect(() => {
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
            icon: IoLogoJavascript, name: "JavaScript",
        },
        {
            icon: TbBrandTypescript, name: "Typescript",
        },
        {
            icon: SiNextdotjs, name: "nextJs",
        },
        {
            icon: FaReact, name: "ReactJs",
        },
        {
            icon: SiTailwindcss, name: "TailwindCSS",
        },
        {
            icon: FaNodeJs, name: "NodeJs",
        },
        {
            icon: SiExpress, name: "ExpressJs",
        },
        {
            icon: TbSql, name: "SQL",
        },
        {
            icon: FaGitAlt, name: "Git/Github",
        },
        {
            icon: FaDocker, name: "Docker",
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
                        <technology.icon size={30} className="stroke-gray-600"/>
                        {technology.name}
                    </p>
                ))}
            </div>
        </section>
    );
};

export default Skills;
