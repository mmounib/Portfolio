'use client'

import Image from 'next/image';
import { motion } from "framer-motion"

interface SkillDivProps {
	image: string;
	alt: string;
	skillName: string;
}

const skillLists = [
	{
		image: '/react.svg',
		name: 'React',
	},
	{
		image: '/typescript.svg',
		name: 'Typescript',
	},
	{
		image: '/javascript.svg',
		name: 'Javascript',
	},
	{
		image: '/cpp.svg',
		name: 'C++',
	},
	{
		image: '/tailwindcss.svg',
		name: 'Tailwindcss',
	},
	{
		image: '/postgresql.svg',
		name: 'Postgresql',
	},
];

const SkillDiv = ({ image, alt, skillName }: SkillDivProps) => {
	return (
		<div className="flex flex-col items-center hover:rotate-6 transition-all duration-300">
			<Image src={image} alt={alt} width={150} height={150} />
			<p className="text-white text-2xl para_font">{skillName}</p>
		</div>
	);
};

const Skills = () => {
  	
	
	return (
	  	<section className="bg-black " >
			<div className="flex flex-col mt-20 w-[60%] max-w-[1600px] max-custom:w-[80%] max-md:w-full max-sm:px-6 mx-auto min-h-[200px]">
				<h1 className=" h1-animate text-7xl max-sm:text-2xl text-[#E7B10A] tracking-wider">&lt;Skills /&gt;<span className='span-animate'>Check Out My Skills</span></h1>

				<motion.div className="flex justify-between flex-wrap my-14" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 1}}>
					{skillLists.map((skill) => (
						<SkillDiv
							key={skill.name}
							image={skill.image}
							alt={skill.name}
							skillName={skill.name}
						/>
					))
					}
				</motion.div>
			</div>
		</section>
  	)
}

export default Skills