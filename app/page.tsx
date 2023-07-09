
import Home from "./Components/Home"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"


const page = () => {
  return (
	<div className="flex flex-col mx-auto overflow-hidden" >
		<Home />
		<About />
		<Skills />
		<Projects />
		<Contact />
	</div>
  )
}

export default page