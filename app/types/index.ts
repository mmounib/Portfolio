import {IconType} from "react-icons";
import {IoLogoJavascript} from "react-icons/io5";
import {TbBrandCpp,TbBrandTypescript, TbSql} from "react-icons/tb";
import {SiExpress, SiNextdotjs, SiTailwindcss} from "react-icons/si";
import {FaDocker, FaGitAlt, FaNodeJs, FaReact} from "react-icons/fa";

type Technolgy__Type = {
    icon: IconType;
    name: string;
    style: string,
}[];

export const technologies: Technolgy__Type = [
    {
        icon: IoLogoJavascript, name: "JavaScript", style: "fill-yellow-500",
    },
    {
        icon: TbBrandTypescript, name: "Typescript", style: "stroke-blue-700",
    },
    {
        icon: SiNextdotjs, name: "NextJs", style: "stroke-gray-700",
    },
    {
        icon: FaReact, name: "ReactJs", style: "stroke-blue-400 fill-blue-400",
    },
    {
        icon: SiTailwindcss, name: "TailwindCSS", style: "stroke-blue-500",
    },
    {
        icon: FaNodeJs, name: "NodeJs", style: "stroke-green-700 fill-green-700",
    },
    {
        icon: SiExpress, name: "ExpressJs", style: "stroke-yellow-500 fill-gray-700",
    },
    {
        icon: TbSql, name: "SQL", style: "stroke-blue-700",
    },
    {
        icon: TbBrandCpp, name: "C++", style: "stroke-white bg-blue-700 rounded-full p-1",
    },
    {
        icon: FaDocker, name: "Docker", style: "stroke-blue-700 fill-blue-700",
    },
];
