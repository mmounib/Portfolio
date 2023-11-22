// "use client";
import Image from "next/image";
import "../../Components/About.css";
import { useEffect } from "react";
import gsap from "gsap";

const About = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".animated__image",
      {
        x: 650,
        duration: 5,
        ease: "power4.out",
      },
      {
        x: 0,
      }
    );
    tl.fromTo(
      ".first__animation",
      {
        y: 600,
        duration: 2.2,
        delay: 0.5,
        ease: "power2.out",
      },
      {
        y: 0,
      }
    );
    tl.fromTo(
      ".second__animation",
      {
        y: 600,
        duration: 2.2,
        delay: 0.7,
        ease: "power2.out",
      },
      {
        y: 0,
      }
    );
    tl.fromTo(
      ".third__animation",
      {
        y: 600,
        duration: 2.2,
        delay: 1,
        ease: "power2.out",
      },
      {
        y: 0,
      }
    );
    tl.fromTo(
      ".h3__hover",
      {
        x: -600,
        // duration: 2.2,
        delay: 1.8,
        ease: "power2.out",
      },
      {
        x: 0,
        ease: "power2.out",
      }
    );
  }, []);

  function handleJumpToContactMe() {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <section
      id="about-section"
      className="flex max-sm:flex-col w-full gap-12 mt-16 overflow-hidden"
    >
      <div className="flex  flex-col overflow-hidden justify-center max-sm:px-3 items-center gap-6 max-w-[600px]">
        <div className=" overflow-hidden">
          <h1 className="text-2xl max-sm:text-lg first__animation mt-4 tracking-wider font-light capitalize">
            Hello my name is Mouad and I am Living in <span>Casablanca</span>, A
            dedicated <span>Full Stack developer</span> with a passion for
            creating innovative solutions that can meet the needs of the clients
            and companies. With a strong foundation in both front-end and
            back-end development. With this varied experience, I have developed
            solid skills to provide solutions to your digital needs.
          </h1>
        </div>
        <div className="flex flex-col mt-4 max-sm:mt-2 overflow-hidden">
          <h1 className="text-2xl max-sm:text-lg second__animation tracking-wider font-light capitalize">
            I&apos;m self-motivated, passionate, and hardworking coder.
          </h1>
          <h1 className="text-2xl max-sm:text-lg mt-4 third__animation tracking-wider font-light capitalize">
            I&apos;m here to build positive relationships, and find creative
            solutions to complex problems.
          </h1>
        </div>
        <h3
          className=" mt-auto h3__hover text-3xl max-sm:text-xl from-center"
          onClick={handleJumpToContactMe}
        >
          Let&apos;s Talk
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 text__svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </h3>
      </div>
      <div className="flex animated__image">
        <Image
          src="/about-image.jpg"
          alt="AboutMEImage"
          width={450}
          height={450}
          className="object-cover bg-cover rounded-none w-[600px] h-[600px] brightness-90 drop-shadow-lg"
        />
      </div>
    </section>
  );
};

export default About;
