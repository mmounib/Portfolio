import { Link } from "react-scroll";
import { useEffect, useRef, useState } from "react";
const baffle = require("baffle");
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { RxHamburgerMenu as Hamburger } from "react-icons/rx";
import NextLink from "next/link";
import { Outfit } from "next/font/google";
import {BsArrowRightShort} from 'react-icons/bs'

import { AiOutlineContacts } from "react-icons/ai";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "400",
});

const Navbar = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [menu, setMenu] = useState(false);

  return (
    <nav className={`${outfit}`}>
      <div className="flex text-black items-center justify-around mt-6 max-md:mx-4 z-[999]">
        <h2
          className={`text-base`}
        >
          MOUAD 
          <br></br>
          - MOUNIB
        </h2>
        <ul className="flex gap-8 max-md:hidden ml-auto mr-16">
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
              className="cursor-pointer flex gap-2 items-center relative"
            >
              Get In Touch
              <BsArrowRightShort size={20} className=" text-black bg-blue-600 rounded-[10px]"/>
            </Link>
          </li>
        </ul>

        <div className="flex gap-6 max-md:gap-4 items-center max-sm:hidden">
          <NextLink
            href="https://www.linkedin.com/in/mouad-mounib-954418193/"
            target="_blank"
            className="cursor-pointer"
          >
            <BsLinkedin
              size={28}
              className=" hover:text-blue-600 hover:scale-110 transition-all"
            />
          </NextLink>

          <NextLink
            href="https://github.com/mmounib"
            target="_blank"
            className="cursor-pointer"
          >
            <BsGithub
              size={28}
              className=" hover:text-blue-600 hover:scale-110 transition-all"
            />
          </NextLink>
        </div>

        <div className="hidden max-sm:flex" onClick={() => setMenu(!menu)}>
          <Hamburger
            size={30}
            className=" hidden max-sm:block max-md:ml-4 cursor-pointer "
          />
        </div>
      </div>
      {menu && (
        <div className="hidden menu_ref max-md:hidden max-sm:bg-[#E7B10A] max-sm:text-white max-sm:w-screen max-sm:justify-center max-sm:items-center max-sm:h-full max-sm:flex max-sm:text-xl max-sm:py-4">
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
                className="flex justify-center items-center gap-2 mt-2"
              >
                {" "}
                <BsGithub size={20} /> Github /{" "}
                <a
                  href="https://www.linkedin.com/in/mouad-mounib-954418193/"
                  className="flex items-center gap-2"
                >
                  <BsLinkedin size={20} /> LinkedIn
                </a>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
