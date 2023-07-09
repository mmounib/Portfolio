
import { BsArrowRightShort } from 'react-icons/bs';

import Image from 'next/image';
import Link from 'next/link';

interface Project {
	name: string;
	paragraph: string;
	image: string;
	repo: string;
	website: string;
}

const ProjectList = ({ name, paragraph, image, repo, website }: Project) => { 

	return (
		<div className="flex flex-col-reverse box w-[350px] pb-4 max-custom-layout:w-[70%] max-sm:w-[90%] ">
			<div className="flex flex-col mt-4 px-2">
				<h1 className="text-2xl text-[#E7B10A]">{name}</h1>
				<p className=" text-lg text-gray-300 my-6">{paragraph}</p>
				<div className="flex justify-between w-full text-white">
					<div className="flex cursor-pointer ">
						<Link href={repo} className='flex translate-x-0'>
							See Github
							<BsArrowRightShort className='text-2xl ml-1  hover:translate-x-2 transition-all'/>
						</Link>
						
					</div>
					<div className="flex cursor-pointer ">
						<Link href={website}>See Website</Link>
						{/* <BsArrowRightShort className='text-2xl ml-1 translate-x-0'/> */}
					</div>
				</div>
			</div>
			<Image src={image} alt="Portfolio Image" width={300} height={150} className='image h-[150px] max-custom-layout:w-full max-custom-layout:h-[200px] max-sm:h-[150px]'/>
		</div>
	)
}
const Projects = () => {
	
	
	return (
		<div className='bg-gray-950'>
			<div className="flex flex-col w-[60%] max-md:w-full max-sm:px-6 min-h-[800px] mx-auto mt-24 max-custom:w-[80%] max-sm:mb-5">

				<h1 className="text-5xl text-[#E7B10A] text-right max-custom-layout:text-left ">&lt;My Creative Work /&gt;</h1>
				
				<div className="flex gap-[2vw] max-sm:gap-4 mx-auto justify-between w-full flex-wrap mt-14">
					<ProjectList name='FT_TRANSCENDENCE' paragraph="It's a full stack project written with typescript and its frameworks is (ReactJs,
					NestJs, PostgreSQL and Docker), It is an online ping pong game with a realtime chat
					and games where i have done the Front-End of it with ReactJs." image='/ping_pong_1.jpg' repo='https://github.com/mmounib/ft_transendence' website='' />
					<ProjectList name='WEBSERV' paragraph="It's a full stack project written with typescript and its frameworks is (ReactJs,
					NestJs, PostgreSQL and Docker), It is an online ping pong game with a realtime chat
					and games where i have done the Front-End of it with ReactJs." image='/ping_pong_1.jpg' repo='' website=''/>
					<ProjectList name='WhatGPT3' paragraph="It's a full stack project written with typescript and its frameworks is (ReactJs,
					NestJs, PostgreSQL and Docker), It is an online ping pong game with a realtime chat
					and games where i have done the Front-End of it with ReactJs." image='/screenshot.png' repo='https://github.com/mmounib/react-landingPage-project' website='https://whatgpt3.vercel.app/'/>
				</div>
				
			</div>
		</div>
	)
}

export default Projects