'use client'

import Home from "./Components/Home"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import React, { useEffect, useRef, useState } from "react"

import { motion } from "framer-motion"


import { Crimson_Text } from 'next/font/google'

const crimson_Text = Crimson_Text({
	subsets: ['latin'],
	weight: ['400', '600', '700'],
  	style: ['normal', 'italic'],
}) 

const Page = () => {
	const [Loader, setLoader] = useState<boolean>(true);
		
	const [Timer, setTimer] = useState<number>(2);



	const id = useRef<number | undefined>(undefined);

	const clear = () => {
		clearInterval(id.current);
		setLoader(false);
	}

	useEffect(() => {
		id.current = setInterval(() => {
			setTimer(prev => prev - 1);
		}, 1000);
	}, [])
	
	useEffect(() => {
		if (Timer === 0)
			clear();
	}, [Timer])
	
	
	
	return (
		<>
			{ Loader ? 
				<div className={` loader flex flex-col items-center justify-center bg-[#E7B10A] text-black fixed inset-0 z-10 ${crimson_Text}`} >
					<span className="text-lg leading-loose uppercase w-[500px]">mouad mounib</span>
					<h1 className="text-7xl uppercase w-[520px]">welcome to my protfolio</h1>
				</div >
				: 
				<div className="flex flex-col mx-auto overflow-hidden" id="main_container" >
					<Home />
					<About />
					<Skills />
					<Projects />
					<Contact />
				</div >
			}
		</>
	
  )
}
export default Page

