
import Link from 'next/link'
import { useState } from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'


const Contact = () => {

	return (
	  	<div className="bg-black">
			<div className="flex w-[60%] max-custom-layout:flex-col max-custom-layout:gap-6 max-custom:w-[80%] mx-auto min-h-[400px] mt-12">
				<h1 className="text-7xl max-custom-layout:text-5xl max-custom-layout:text-center leading-12 text-white">Let&rsquo;s Work Together</h1>
				<div className="flex flex-col w-full h-full">
					<form className="w-[500px] max-sm:w-[320px] mx-auto ">
						<div className="mb-4 ">
							<label htmlFor="name" className="block font-medium text-white">Name</label>
							<input type="text" id="name" name="name" required className="bg-gray-500 opacity-70 rounded px-3 py-2 w-full focus:outline-none text-white" />
						</div>
						<div className="mb-4">
							<label htmlFor="email" className="block font-medium text-white">Email</label>
							<input type="email" id="email" name="email" required className=" bg-gray-500 opacity-70 rounded px-3 py-2 w-full focus:outline-none text-white" />
						</div>
						<div className="mb-4">
							<label htmlFor="message" className="block font-medium text-white">Message</label>
							<textarea id="message" name="message" required className="bg-gray-500 opacity-70 rounded px-3 py-2 w-full h-32 resize-none focus:outline-none text-white "></textarea>
						</div>
						<div className="">
							<button type="submit" className="bg-[#E7B10A] text-white py-2 px-4 rounded">Send Message</button>
						</div>
					</form>
				</div>

			</div>
			
			<div className="flex flex-col mx-auto w-[1100px] max-custom-layout:w-[80%] items-center min-h-[90px] my-8">
				<h3 className='text-white text-2xl'>Or Contact Me Through</h3>
				<div className="flex gap-4 mt-8 justify-center items-center w-full">
					<Link href="https://www.linkedin.com/in/mouad-mounib-954418193/" className='text-white flex gap-2 bg-[#E7B10A] py-2 px-6 items-center shadow-inner'>
						<BsLinkedin size={20} className='text-white transition-all' />
						<span>LinkedIn</span>
					</Link>
					<Link href="https://github.com/mmounib" className='text-white flex gap-2 bg-[#E7B10A] py-2 px-8 items-center shadow-inner'>
						<BsGithub size={20} className=' ' />
						<span>Github</span>
					</Link>

				</div>
			</div>


		</div>
  )
}

export default Contact