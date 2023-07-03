
import Home from "./Components/Home"
import About from "./Components/About"
import Skills from "./Components/Skills"

const page = () => {
  return (
	<div className="flex flex-col mx-auto flex-wrap">
		<Home />
		<About />
		<Skills />
	</div>
  )
}

export default page