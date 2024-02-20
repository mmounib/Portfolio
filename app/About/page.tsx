import About from "../Components/About/About";
import AnimatedCursor from "../Components/AnimatedCursor";
import Experience from "../Components/Experience/Experience";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";
import Links from "@/app/Components/Links";
import Navbar from "@/app/Components/Navbar";
import Link from "next/link";

function page() {
    return (
        <>
            <AnimatedCursor/>
            <section className="max-w-[1300px] mx-auto">
                <Navbar/>
                <About/>
                <Skills/>
                <Experience/>
                <Projects/>
                <Links/>
                <div className="box">
                    <Link
                        href="https://drive.google.com/file/d/1iihuC8rg_6uw5lAM65lM7SaZxlQS1npn/view?usp=sharing"
                        target="_blank">
                        See Resume
                    </Link>
                </div>
            </section>
        </>
    );
}

export default page;
