// 'use client'

import Home from "./Components/Home"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
// import React, { useEffect, useRef, useState } from "react"

import { motion } from "framer-motion"


import { Crimson_Text } from 'next/font/google'

const crimson_Text = Crimson_Text({
	subsets: ['latin'],
	weight: ['400', '600', '700'],
  	style: ['normal', 'italic'],
}) 

const Page = () => {
			
	return (
		<>
			<div className="flex flex-col mx-auto overflow-hidden" id="main_container" >
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

