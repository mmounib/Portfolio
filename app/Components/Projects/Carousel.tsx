import React, { useState, useRef, useEffect } from "react";
import ProjectsHelper from "../Helpers/ProjectsHelper";

interface CarouselProps {
  projects: any[];
}

const Carousel: React.FC<CarouselProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  return (
    <div className="flex gap-10 mb-12" ref={carousel}>
      <button className="mx-6 m-auto" onClick={handlePrevClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-12 h-12`"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <div className="selected">
        <ProjectsHelper projects={projects[currentIndex]} />
      </div>
      <button className="mx-6 m-auto" onClick={handleNextClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
