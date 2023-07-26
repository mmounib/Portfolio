'use client'

import Home from "./Components/Home"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"

import Lenis from '@studio-freight/lenis'

// import gsap from "gsap"


import { Crimson_Text } from 'next/font/google'
import { useEffect } from "react"

const crimson_Text = Crimson_Text({
	subsets: ['latin'],
	weight: ['400', '600', '700'],
  	style: ['normal', 'italic'],
}) 

const Page = () => {

	useEffect(() => {

		const lenis = new Lenis();
	
		lenis.on('scroll', (e: any) => {
		// console.log(e)
		})
	
		function raf(time: any) {
		lenis.raf(time)
		requestAnimationFrame(raf)
		}
	
		requestAnimationFrame(raf)
	}, []);
			
	return (
		<>
			<div className="flex flex-col mx-auto overflow-hidden" >
				<Home />
				<About />
				<Skills />
				<Projects />
				<Contact />
			</div >
		</>
	
  )
}
export default Page

