'use client'
import { BsArrowRightShort } from 'react-icons/bs';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from "framer-motion"


interface Project {
	name: string;
	paragraph: string;
	image: string;
	repo: string;
	website: string;
}


const ProjectList = ({ name, paragraph, image, repo, website }: Project) => { 

	return (
		<motion.div className="flex flex-col-reverse box w-[750px] hover:-translate-y-[20px] transition-all duration-500 pb-4 max-custom-layout:w-[70%] max-sm:w-[90%] max-w-[1700px] max-sm:hover:-translate-y-0" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .5 }}>
			<div className="flex relative">
				<div className="flex flex-col mt-4 px-2 w-[90%] z-10 slide_div">
					<h1 className="text-5xl shadow_text">{name}</h1>
					<p className=" text-2xl text-white leading-9 font-lg my-6 w-[450px] max-w-[500px]">{paragraph}</p>
					<div className="flex div_animate w-full text-[#E7B10A] text-xl gap-44">
						<div className="flex cursor-pointer">
							<Link href={repo} className='flex translate-x-0'>
								See Github
								<BsArrowRightShort className='text-3xl ml-1 hover:translate-x-2 transition-all'/>
							</Link>
							
						</div>
						<div className="flex cursor-pointer ">
							<Link href={website}>See Website</Link>
						</div>
					</div>
				</div>
				<Image src={image} alt="Portfolio Image" className='image max-custom-layout:w-full max-custom-layout:h-[200px] max-sm:h-[150px] h-[650px] absolute -right-1/4' width={450} height={650} />
			</div>
		</motion.div>
	)
}
const Projects = () => {
	
	
	return (
		<div className='bg-gray-950' id='projects'>
			<div className="flex flex-col w-[65%] max-md:w-full max-w-[1600px] max-sm:px-6 min-h-[800px] mx-auto mt-24 max-custom:w-[80%] max-sm:mb-5">

				<h1 className=" h1-animate text-5xl text-[#E7B10A] text-left max-sm:text-4xl max-custom-layout:text-left ">&lt;My Creative Works /&gt; <span className="span-animate">MY PROJECTS</span></h1>
				
				<div className="flex mx-auto justify-center w-full flex-wrap mt-14 max-custom-layout:justify-center">
					{/* <ProjectList name='FT_TRANSCENDENCE' paragraph="It's a full stack project written with typescript and its frameworks is (ReactJs,
					NestJs, PostgreSQL and Docker), It is an online ping pong game with a realtime chat
					and games where i have done the Front-End of it with ReactJs." image='/rackets.png' repo='https://github.com/mmounib/ft_transendence' website='' /> */}
					{/* <ProjectList name='WEBSERV' paragraph="It's a full stack project written with typescript and its frameworks is (ReactJs,
					NestJs, PostgreSQL and Docker), It is an online ping pong game with a realtime chat
					and games where i have done the Front-End of it with ReactJs." image='/ping_pong_1.jpg' repo='' website=''/>
					<ProjectList name='WhatGPT3' paragraph="It's a full stack project written with typescript and its frameworks is (ReactJs,
					NestJs, PostgreSQL and Docker), It is an online ping pong game with a realtime chat
					and games where i have done the Front-End of it with ReactJs." image='/screenshot.png' repo='https://github.com/mmounib/react-landingPage-project' website='https://whatgpt3.vercel.app/'/> */}
				</div>
				
			</div>
		</div>
	)
}

export default Projects