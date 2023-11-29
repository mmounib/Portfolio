import { Link } from "react-scroll";
import { useRef, useState } from "react";
import { RxHamburgerMenu as Hamburger } from "react-icons/rx";
import { Josefin_Sans } from "next/font/google";

const outfit = Josefin_Sans({
  subsets: ["latin"],
  weight: "400",
});

const Navbar = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [menu, setMenu] = useState(false);

  return (
    <nav className="">
      <div className="flex text-black items-center justify-around max-sm:justify-between max-sm:mx-3 mt-6 z-[999]">
        <h2 className={`text-base max-sm:text-xl`}>
          MOUAD
          <br></br>- MOUNIB
        </h2>
        <ul
          className={`${outfit.className} flex gap-10 items-center max-md:hidden ml-auto mr-16`}
        >
          <li>
            <Link
              to="home-section"
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-gray-600 transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about-section"
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-gray-600 transition-all duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-gray-600 transition-all duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer capitalize text-xl   rounded-[5px] link text-black flex gap-2 items-center relative"
            >
              Get In Touch
              <svg
                width="13px"
                height="10px"
                viewBox="0 0 13 10"
                className=" w-[20px] stroke-black p-1 h-[20px]"
              >
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </Link>
          </li>
        </ul>
        <div className="hidden max-sm:flex" onClick={() => setMenu(!menu)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-12 h-12 m-0"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      {menu && (
        <div className="hidden menu_ref absolute z-[999] max-md:hidden max-sm:bg-secondary max-sm:text-black max-sm:w-full max-sm:justify-center max-sm:items-center max-sm:h-screen max-sm:flex max-sm:text-xl">
          <ul
            className={` ${outfit.className} flex flex-col items-center gap-16 text-center`}
          >
            <li className="text-4xl">
              <Link to="">Home</Link>
            </li>
            <li className="text-4xl">
              <Link to="About">About</Link>
            </li>
            <li className="text-4xl">
              <Link to="projects">Projects</Link>
            </li>
            <li className="text-4xl">
              <Link to="Contact">Get In Touch</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
