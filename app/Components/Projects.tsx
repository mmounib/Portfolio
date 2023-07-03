
import Image from 'next/image';

interface Project {
	name: string;
	paragraph: string;
	image: string;
}

const ProjectList = ({ name, paragraph, image }: Project) => { 

	return (
		<div className="flex flex-col-reverse box w-[350px] pb-4">
			<div className="flex flex-col mt-4 px-2">
				<h1 className="text-2xl text-[#E7B10A]">{name}</h1>
				<p className="text-xl text-gray-300 my-6">{paragraph}</p>
				<div className="flex justify-between w-full text-white px-2">
					<button type="button">See Github</button>
					<button type="button">See Website</button>
				</div>
			</div>
			<Image src={image} alt="Portfolio Image" width={400} height={250} className='image'/>
		</div>
	)
}
const Projects = () => {
	
	
	return (
		<div className='bg-gray-950'>
			<div className="flex flex-col w-[1100px] min-h-[800px] mx-auto mt-24">

				<h1 className="text-5xl text-[#E7B10A] text-right">&lt;My Creative Work /&gt;</h1>
				
				<div className="flex gap-12 mx-auto mt-12">
					<ProjectList name='FT_TRANSCENDENCE' paragraph="It's a full stack project written with typescript and its frameworks is (ReactJs,
					NestJs, PostgreSQL and Docker), It is an online ping pong game with a realtime chat
					and games where i have done the Front-End of it with ReactJs." image='/ping_pong_1.jpg' />
					<ProjectList name='FT_TRANSCENDENCE' paragraph="It's a full stack project written with typescript and its frameworks is (ReactJs,
					NestJs, PostgreSQL and Docker), It is an online ping pong game with a realtime chat
					and games where i have done the Front-End of it with ReactJs." image='/ping_pong_1.jpg' />
					<ProjectList name='FT_TRANSCENDENCE' paragraph="It's a full stack project written with typescript and its frameworks is (ReactJs,
					NestJs, PostgreSQL and Docker), It is an online ping pong game with a realtime chat
					and games where i have done the Front-End of it with ReactJs." image='/ping_pong_1.jpg'/>
				</div>
				
			</div>
		</div>
	)
}

export default Projects