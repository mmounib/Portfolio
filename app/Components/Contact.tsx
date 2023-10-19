'use client'

import Link from 'next/link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { motion } from "framer-motion"

import { useRef, useState } from 'react';

import emailjs from 'emailjs-com';

import { Player } from '@lottiefiles/react-lottie-player';


const Contact = () => {

	const [isSent, setIsSent] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const form = useRef<HTMLFormElement>(null);


	const submitEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);

		if (form.current) {
			emailjs
				.sendForm("service_pl0g8jl", "template_olf496g", form.current, "TdmuPTbkguqUAFkOl")
				.then(
					(result) => {
						setIsSent(true);
						setIsLoading(false);
						setTimeout(() => setIsSent(false), 3000)
					},
					(error) => {
						setIsError(true);
						setIsLoading(false);
						setTimeout(() => setIsError(false), 3000)

					}
				);
		}
	};

	return (
	  	<section className="" id='Contact'>
			<motion.div className="flex justify-between w-[65%] max-w-[1600px] max-custom-layout:flex-col max-custom-layout:gap-6 max-custom:w-[80%] mx-auto min-h-[400px] mt-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 1.5}}>
				
				<div className="flex flex-col gap-12 items-center">
					<h1 className=" text-7xl max-custom-layout:text-5xl max-custom-layout:text-center leading-12 text-white">Let&rsquo;s Work Together</h1>
					<Player
						src='/animation_1.json'
						className=" w-[300px] h-[300px] max-sm:w-[200px] max-sm:h-[200px]"
						loop
						autoplay
					/>
				</div>
				<div className="flex flex-col h-full overflow-hidden">
					<form ref={form} className="w-[500px] max-sm:w-[320px] mx-auto " onSubmit={submitEmail}>
						<div className="mb-4 ">
							<label htmlFor="name" className="block font-medium text-white">Name</label>
							<input type="text" id="name" name="name" required className="bg-gray-600 rounded px-3 py-2 w-full focus:outline-none text-white" />
						</div>
						<div className="mb-4">
							<label htmlFor="email" className="block font-medium text-white">Email</label>
							<input type="email" id="email" name="email" required className=" bg-gray-600 rounded px-3 py-2 w-full focus:outline-none text-white" />
						</div>
						<div className="mb-4">
							<label htmlFor="message" className="block font-medium text-white">Message</label>
							<textarea id="message" name="message" required className="bg-gray-600 rounded px-3 py-2 w-full h-32 resize-none focus:outline-none text-white "></textarea>
						</div>
						<div className="">
							<button
								type="submit"
								className={`bg-[#E7B10A] text-white py-2 px-4 rounded outline-none ${
									isLoading ? "opacity-50 cursor-not-allowed" : ""
								}`}
								disabled={isLoading}
								>
								{isLoading ? "Loading..." : "Send Message"}
							</button>
						</div>
					</form>
					{isSent && (
						<div className="text-white success_div text-lg text-center mt-4 bg-green-900 font-extrabold py-2 flex items-center justify-center w-1/2 mx-auto">Your message has been sent successfully!</div>
					)}
					{isError && (
						<div className="text-white success_div text-lg text-center mt-4 bg-red-900 font-extrabold py-2 flex items-center justify-center w-1/2 mx-auto">Your message has not been sent!</div>
					)}
				</div>

			</motion.div>
			
			<div className="flex flex-col mx-auto w-[1100px] max-custom-layout:w-[80%] items-center min-h-[90px] my-8">
				<h3 className='text-white text-2xl'>Or Contact Me Through</h3>
				<div className="flex gap-4 mt-8 justify-center items-center w-full">
					<Link href="https://www.linkedin.com/in/mouad-mounib-954418193/" className='text-[#E7B10A] border border-[#E7B10A] font-extrabold flex gap-2 bg-black py-2 px-6 items-center shadow-inner hover:scale-x-105 transition-all'>
						<BsLinkedin size={20} className='text-[#E7B10A] transition-all' />
						<span>LinkedIn</span>
					</Link>
					<Link href="https://github.com/mmounib" className=' flex gap-2 bg-[#E7B10A] py-2 px-8 shadow-inner hover:scale-x-105 transition-all text-black font-extrabold'>
						<BsGithub size={20} className='transition-all' />
						<span>Github</span>
					</Link>

				</div>
			</div>


		</section>
  )
}

export default Contact