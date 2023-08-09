import { Link } from "react-scroll";
import { useEffect, useRef } from "react";
import baffle from "baffle";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { RxHamburgerMenu as Hamburger } from "react-icons/rx";
import NextLink from "next/link";
import { Patua_One } from "next/font/google";


const patua_One = Patua_One({
  subsets: ["latin"],
  weight: "400",
});

const Navbar = () => {
    const menuRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const text = baffle(".text-animate");
      text.set({
        characters: "░▒░ ░██░> ████▓ >█> ░/█>█ ██░░ █<▒ ▓██░ ░/░▒",
        speed: 120,
      });
  
      text.start();
      text.reveal(5000);
    }, []);
  
    const toggleMenu = () => {
      if (menuRef.current) menuRef.current.classList.toggle("max-sm:hidden");
    };
  
    return (
      <nav>
        <div className="flex text-white text-2xl items-center justify-between mt-6 max-md:mx-4 z-[999]">
          <ul className="flex gap-8 max-md:hidden">
            <li>
              <Link
                to=""
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
              >
                Home
              </Link>
              <span className="link_span">Home</span>
            </li>
            <li>
              <Link
                to="About"
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
              >
                About
              </Link>
              <span className="link_span">About</span>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
              >
                Projects
              </Link>
              <span className="link_span">Projects</span>
            </li>
            <li>
              <Link
                to="Contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer"
              >
                Contact
              </Link>
              <span className="link_span">Contact</span>
            </li>
          </ul>
  
          <h1
            className={` text-animate text-4xl mx-auto max-md:ml-2 max-sm:text-3xl max-md:mr-0  ${patua_One.className}`}
          >
            MOUAD.MOUNIB
          </h1>
  
          <div className="flex gap-6 max-md:gap-4 items-center max-sm:hidden">
            <NextLink
              href="https://www.linkedin.com/in/mouad-mounib-954418193/"
              target="_blank"
              className="cursor-pointer"
            >
              <BsLinkedin
                size={28}
                className=" hover:text-[#E7B10A] hover:scale-110 transition-all"
              />
            </NextLink>
  
            <NextLink
              href="https://github.com/mmounib"
              target="_blank"
              className="cursor-pointer"
            >
              <BsGithub
                size={28}
                className=" hover:text-[#E7B10A] hover:scale-110 transition-all"
              />
            </NextLink>
          </div>
  
          <div className="flex" onClick={toggleMenu}>
            <Hamburger
              size={30}
              className=" hidden max-sm:block max-md:ml-4 cursor-pointer "
            />
          </div>
        </div>
        <div
          ref={menuRef}
          className="hidden menu_ref max-md:hidden max-sm:bg-[#E7B10A] max-sm:text-white max-sm:w-screen max-sm:justify-center max-sm:items-center max-sm:h-full max-sm:flex max-sm:text-xl max-sm:py-4"
        >
          <ul className="flex flex-col items-center gap-6 text-center">
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="About">About</Link>
            </li>
            <li>
              <Link to="projects">Projects</Link>
            </li>
            <li>
              <Link to="Contact">Contact</Link>
            </li>
            <li>
              <a
                href="https://github.com/mmounib"
                className="flex items-center gap-2 mt-2"
              >
                {" "}
                <BsGithub size={20} /> Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mouad-mounib-954418193/"
                className="flex items-center gap-2"
              >
                {" "}
                <BsLinkedin size={20} /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };

export default Navbar;