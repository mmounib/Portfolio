'use client'
import Image from 'next/image';
// import { motion } from "framer-motion"

import { gsap, ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from 'react';



const About = () => {

	const app = useRef<HTMLDivElement>(null);
	const image = useRef<HTMLImageElement>(null);

	useEffect(() => {
		if (app.current && image.current) {
			gsap.registerPlugin(ScrollTrigger);
	  
			gsap.fromTo(
			  app.current,
			  { opacity: 0, y: 100 },
			  { opacity: 1, y: 0, duration: 1, delay: 0.1, scrollTrigger: {
				trigger: app.current,
				start: "top 50%",
			  } }
			);
		}
	  }, []);

	
	return (
		<section className="" id='About'>
			<div ref={app} className="my-24 flex w-[60%] max-w-[1600px] max-md:w-full min-h-[600px] text-white gap-28 mx-auto max-custom-layout:flex-col max-sm:gap-14 max-sm:my-16 max-custom:w-[80%] max-sm:px-6 square">

				<div className="relative h-full hover:-rotate-6 transition-all duration-500">
					<div className='border-4 z-10 border-gray-600 border-collapse h-[400px] w-full absolute -top-12 -right-7'></div>
					<Image ref={image} src="/image.jpg" alt="Portfolio Image" width={1100} height={1100} className=' object-cover saturate-50 opacity-70 w-[1200px] h-[400px]' />
				</div>

				<div className="flex flex-col">
					<h1 className="h1-animate text-7xl max-sm:text-2xl text-[#E7B10A]">&lt;About Me /&gt; <span className="span-animate">ABOUT ME</span></h1>
					<div className="flex flex-col mt-20 max-sm:mt-12 max-w-[1600px]">
						<p className="">An aspiring front-end developer <strong> [Soon To Become a FullStack Web Developer] </strong> passionate about creating an engaging and user-friendly web experiences.</p>
						<p className=" mt-8 ">I have always been fascinated by how the design can be intercepted and with various technologies, therefore front-end development provides the perfect platform for me to express my creativity and problem-solving skills. I enjoy the process of transforming designs into functional and visually appealing websites, constantly seeking to improve my skills and stay up to date with the latest industry trends and best practices.</p>

						<p className='mt-8'>As a self-motivated individual, I take pride in delivering high-quality work and meeting deadlines. I am eager to apply my existing skills and learn new ones while working on real-world projects that challenge and push me to become a better front-end developer.</p>
					</div> 
				</div>

			</div>
		</section>
  	)
}

export default About