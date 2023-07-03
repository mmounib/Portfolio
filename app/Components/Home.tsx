import Link from 'next/link'

import { BsGithub, BsLinkedin } from 'react-icons/bs'

import { Patua_One } from 'next/font/google'

const patua_One = Patua_One({
	subsets: ['latin'],
	weight: '400'
})

const Navbar = () => {
  return (
	<nav>
		<div className="flex text-white text-lg items-center justify-between mt-6">
			<ul className='flex gap-8'>
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
			</ul>

			<h1 className={`text-4xl mx-auto ${patua_One.className}`}>Mouad Mounib</h1>

			<div className="flex gap-4 items-center">
				  
				<Link href="https://www.linkedin.com/in/mouad-mounib-954418193/">
					<BsLinkedin size={25} className=' '/>	  
				</Link>
				
				<Link href="https://github.com/mmounib">
					<BsGithub size={25} className=' '/>	  
				</Link>
				  
			</div>  
		</div>	  
	</nav>
  )
}

import Image from 'next/image';

const Home = () => {

	return (
		<div className="bg-black">
			<div className="flex flex-col w-[1100px] min-h-[800px] mx-auto">
				<Navbar />

				<div className="flex h-full my-auto items-center gap-12">
					
					<div className="text-white">
						<h1 className="text-3xl text-[#E7B10A]">Hi There, I&rsquo;m Mouad,</h1>
						<h2 className='text-6xl leading-relaxed'>A FRONTEND DEVELOPER</h2>
						<p className="text-xl text-gray-400 mt-4 w-[400px]">I&rsquo;m a self-taught developer based in Morocco, I love to build things for the web.</p>
						
						<a href="#" className=' btn uppercase'>Resume</a>	
					</div>
					
					<div className="relative">
						<div className='border-4 z-10 border-[#E7B10A] border-collapse h-[400px] w-[400px] absolute -top-12 -right-7'></div>
						<Image src="/my_image.jpg" alt="Portfolio Image" width={400} height={400} className='image'/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home