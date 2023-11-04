"use client";

import { Space_Grotesk } from "next/font/google";

import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import {PiLinkedinLogo} from 'react-icons/pi'

const Space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Contact = (): JSX.Element => {
  return (
    <section className="my-16">
      <div className="flex max-sm:flex-col max-sm:gap-6 gap-14">
        <div className="max-w-[65%]">
          <p className={`${Space.className} text-8xl `}>
            Have A Project In Mind Or want a Motivated Developer ! <br />{" "}
            <span
              className={`${Space.className} italic font-bold bg-black text-secondary py-6 px-4 mt-4 inline-block`}
            >
              Let&apos;s Connect By
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2 items-center">
            <span className="italic text-3xl max-w-[150px]">
              Sending Me an Email
            </span>
            <Link
              href="mailto:mouadmounib00@gmail.com"
              className="mt-3 text-3xl link-mail bg-secondary p-12 -rotate-[15deg]"
            >
              Here
            </Link>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span className="italic text-3xl max-w-[150px]">
            
              
              Or Check My Projects 
            </span>
            <Link
              href="mailto:mouadmounib00@gmail.com"
              className="mt-3 text-3xl py-2 px-4 border-secondary border-4 flex gap-2"
            >
              {" "}
              <FiGithub size={30} /> Github
            </Link>
          </div>
        </div>
        <div className="flex flex-col h-full mt-24 ml-auto">
          <span className="italic text-3xl max-w-[150px]">
            Or Connect With Me On
          </span>
          <Link
            href="mailto:mouadmounib00@gmail.com"
            className="mt-3 text-3xl py-2 px-4 flex gap-2"
          >
            {" "}
            <PiLinkedinLogo size={30} className="text-secondary"/> Linkedin
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
