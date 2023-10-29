"use client";
import "../../../app/About.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const About = () => {
  const aboutMeRef = useRef(null);
  const myPhilosophy1Ref = useRef(null);
  const collaboration = useRef(null);

  const animateTextTyping = (ref: any, text: string, delay: number = 0) => {
    const tl = gsap.timeline({ repeat: 0, repeatDelay: 0, yoyo: true });

    tl.to(ref.current, {
      duration: 20,
      text: {
        value: text,
      },
    });

    return tl;
  };

  useEffect(() => {
    const aboutMeTl = animateTextTyping(
      aboutMeRef,
      "Hello I&apos;m Mouad, A dedicated software developer with a passion for creating innovative solutions that drive digital transformation. With a strong foundation in both front-end and back-end development."
    );
    const myPhilosophy1Tl = animateTextTyping(
      myPhilosophy1Ref,
      "I'm not just a developer; I&apos;m a partner in your project&apos;s success. I focus on creating clean, maintainable, and scalable code to ensure the long-term viability of the solutions I build. I&apos;m passionate about crafting software that not only functions flawlessly but also delights users."
    );

    myPhilosophy1Tl.delay(aboutMeTl.duration()).then(() => {
      animateTextTyping(
        collaboration,
        "If you're looking for a software developer who is dedicated to delivering high-quality solutions, I'd love to connect with you. Whether you have a specific project in mind or just want to explore possibilities, please don't hesitate to [reach out](#contact). Let's work together to turn your ideas into reality."
      );
    });
  }, []);

  return (
    <section className="flex w-full mt-14">
      <div className="window">
        <div className="bar">
          <div className="btns"></div>
        </div>
        <div className="body">
          <div className="">
            <div className="w-ull flex flex-col gap-4">
              <span className="comment text-2xl"># About Me</span>

              <div className="flex gap-2">
                <strong className="">$ </strong>
                <span className="command text-3xl" ref={aboutMeRef}></span>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4 mt-6">
              <span className="comment text-2xl"># My Philosophy</span>

              <div className="flex gap-2">
                <strong className="">$ </strong>
                <span
                  className="command text-3xl"
                  ref={myPhilosophy1Ref}
                ></span>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4 mt-6">
              <span className="comment text-2xl ">
                # Let&apos;s Collaborate
              </span>

              <div className="flex gap-2">
                <strong className="">$ </strong>
                <span className="command text-3xl" ref={collaboration}></span>
              </div>
            </div>
            <div className="mt-8">
              <strong>$ </strong>
              <span className="pulse text-2xl">_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

//   <div className="flex flex-col mt-20 max-sm:mt-12 max-w-[1600px]">
//     <p className="">
//       An aspiring front-end developer{" "}
//       <strong> [Soon To Become a FullStack Web Developer] </strong>{" "}
//       passionate about creating an engaging and user-friendly web
//       experiences.
//     </p>
//     <p className=" mt-8 ">
//       I have always been fascinated by how the design can be intercepted
//       and with various technologies, therefore front-end development
//       provides the perfect platform for me to express my creativity and
//       problem-solving skills. I enjoy the process of transforming
//       designs into functional and visually appealing websites,
//       constantly seeking to improve my skills and stay up to date with
//       the latest industry trends and best practices.
//     </p>

//     <p className="mt-8">
//       As a self-motivated individual, I take pride in delivering
//       high-quality work and meeting deadlines. I am eager to apply my
//       existing skills and learn new ones while working on real-world
//       projects that challenge and push me to become a better front-end
//       developer.
//     </p>
//   </div>
