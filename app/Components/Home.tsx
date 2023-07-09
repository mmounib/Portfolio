'use client'
import Link from 'next/link'

import { BsGithub, BsLinkedin } from 'react-icons/bs'
import {RxHamburgerMenu as Hamburger} from 'react-icons/rx'

import { Patua_One } from 'next/font/google'

const patua_One = Patua_One({
	subsets: ['latin'],
	weight: '400'
})

const Navbar = () => {

	const menuRef = useRef<HTMLDivElement>(null);

	const toggleMenu = () => {
		if (menuRef.current)
			menuRef.current.classList.toggle('max-sm:hidden');
	}

	return (
		<nav>
			<div className="flex text-white text-lg items-center justify-between mt-6 max-md:mx-4">
				<ul className='flex gap-8 max-md:hidden'>
					<li>
						<a  href="/">Home</a>
					</li>
					<li>
						<a href="/About">About</a>
					</li>
					<li>
						<a href="/Projects">Projects</a>
					</li>
					<li>
						<a href="/Contact">Contact</a>
					</li>
				</ul>

				<h1 className={`text-4xl mx-auto max-md:ml-2 max-sm:text-3xl max-md:mr-0  ${patua_One.className}`}>Mouad Mounib</h1>

				<div className="flex gap-6 max-md:gap-4 items-center max-sm:hidden">
					
					<Link href="https://www.linkedin.com/in/mouad-mounib-954418193/">
						<BsLinkedin size={25} className=' hover:text-[#E7B10A] hover:scale-110 transition-all'/>	  
					</Link>
					
					<Link href="https://github.com/mmounib">
						<BsGithub size={25} className=' hover:text-[#E7B10A] hover:scale-110 transition-all'/>	  
					</Link>
					
				</div>

				<div className="flex" onClick={toggleMenu}>
					<Hamburger size={30} className=' hidden max-sm:block max-md:ml-4 cursor-pointer'/>
				</div>  
			</div>
			<div ref={menuRef} className="hidden max-md:hidden max-sm:bg-[#E7B10A] max-sm:text-white max-sm:w-screen max-sm:justify-center max-sm:items-center max-sm:h-full max-sm:flex max-sm:text-xl max-sm:py-4">
				<ul className="flex flex-col items-center gap-6 text-center">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/About">About</a>
					</li>
					<li>
						<a href="/Projects">Projects</a>
					</li>
					<li>
						<a href="/Contact">Contact</a>
					</li>
					<li>
						<a href="https://github.com/mmounib" className='flex items-center gap-2 mt-2'> <BsGithub size={20}/> Github</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/mouad-mounib-954418193/" className='flex items-center gap-2'> <BsLinkedin size={20}/> LinkedIn</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

import Image from 'next/image';
import { useRef } from 'react'

const Home = () => {

	return (
		<div className="bg-black">
			<div className="flex max-md:gap-16 flex-col w-[60%] max-md:w-full min-h-[800px] mx-auto max-custom:w-[80%]">
				<Navbar />

				<div className="flex max-md:flex-col h-full my-auto items-center gap-12 max-md:gap-24 max-md:mb-4 max-sm:px-6">
					
					<div className="text-white max-sm:ml-6">
						<h1 className="text-3xl max-sm:text-xl text-[#E7B10A]">Hi There, I&rsquo;m Mouad,</h1>
						<h2 className='text-6xl max-sm:text-5xl max-sm:mt-2 leading-relaxed'>A FRONTEND DEVELOPER</h2>
						<p className="text-xl text-gray-400 mt-4 w-[400px]">I&rsquo;m a self-taught developer based in Morocco, I love to build things for the web.</p>
						
						<a href="#" className=' btn uppercase max-sm:after:hidden max-sm:bg-[#E7B10A] max-sm:border-0 max-sm:w-[40%] max-sm:text-center max-sm:inline-block '>Resume</a>	
					</div>
					
					<div className="relative h-full">
						<div className='border-4 z-10 border-[#E7B10A] border-collapse h-[400px] w-full absolute -top-12 -right-7'></div>
						<Image src="/my_image.jpg" alt="Portfolio Image" width={400} height={400} className='image w-[400px] h-[400px]'/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home