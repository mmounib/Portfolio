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
      <div className="flex text-black items-center justify-around mt-6 max-md:mx-4 z-[999]">
        <h2 className={`text-base`}>
          MOUAD
          <br></br>- MOUNIB
        </h2>
        <ul
          className={`${outfit.className} flex gap-10 items-center max-md:hidden ml-auto mr-16`}
        >
          <li>
            <Link
              to=""
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
              to="About"
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
              to="projects"
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
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer capitalize text-xl link bg-black rounded-[5px] text-secondary flex gap-2 items-center relative py-2 px-4"
            >
              Get In Touch
              <svg
                width="13px"
                height="10px"
                viewBox="0 0 13 10"
                className=" w-[20px] stroke-secondary p-1 h-[20px]"
              >
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </Link>
          </li>
        </ul>
        <div className="hidden max-sm:flex" onClick={() => setMenu(!menu)}>
          <Hamburger
            size={30}
            className=" hidden max-sm:block max-md:ml-4 cursor-pointer "
          />
        </div>
      </div>
      {menu && (
        <div className="hidden menu_ref max-md:hidden max-sm:bg-secondary max-sm:text-white max-sm:w-screen max-sm:justify-center max-sm:items-center max-sm:h-screen max-sm:flex max-sm:text-xl max-sm:py-4">
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
            <li></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
