"use client";

import {useState} from "react";
import {Josefin_Sans} from "next/font/google";
import Link from "next/link";

const outfit = Josefin_Sans({
    subsets: ["latin"],
    weight: "400",
});

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    return (
        <nav className="">
            <div
                className="flex text-black items-center justify-around max-sm:justify-between max-sm:mx-3 mt-6 z-[999]">
                <h2 className={`text-xl max-sm:text-base`}>
                    <Link href="/">
                        MOUAD
                        <br></br>- MOUNIB
                    </Link>
                </h2>
                <ul
                    className={`flex gap-5 items-center max-md:hidden ml-auto`}
                >
                    <li>
                        <Link
                            href={'#about-section'}
                            className="transition-all duration-300"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'#projects-section'}
                            className="transition-all duration-300"
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'#about-section'}
                            className="transition-all duration-300"
                        >
                            Experience
                        </Link>
                    </li>
                </ul>
                <Link href={"#contact-section"}
                      className="font-bold text-black border-b-4 border-secondary contact ml-6 max-sm:ml-0 max-sm:px-5 hover:bg-opacity-90">Contact
                    Me</Link>
            </div>
        </nav>
    );
};

export default Navbar;
