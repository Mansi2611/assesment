import React, { useState, useEffect } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function ProjectsPage() {
  const [scrollIndex, setScrollIndex] = useState(0);

  const projects = [
    {
      fields: "HealthCare",
      title: "Heni Chemicals.",
      description: "Web Development",
      img: "/assets/images/project1.jpg",
    },
    {
      fields: "Manufacturing Sector",
      title: "Petes Panels",
      description: "Web Development",
      img: "/assets/images/project2.png",
    },
    {
      fields: "HealthCare",
      title: "Qualacon",
      description: "Web Development",
      img: "/assets/images/project3.png",
    },
    {
      fields: "Real Estate",
      title: "Project Four",
      description: "Web Development",
      img: "/assets/images/project4.jpg",
    },
  ];

  // Add first project at the end for infinite loop effect
  const loopedProjects = [...projects, projects[0],projects[1]];
//   const loopedProjects = [...projects, ...projects,...projects];

  // Function to move to the next card
  const scrollNext = () => {
    setScrollIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  // Function to move to the previous card
  const scrollPrev = () => {
    setScrollIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  // Automatic scrolling using setInterval
  useEffect(() => {
    const intervalId = setInterval(scrollNext, 3000); // Change card every 3 seconds
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div
      className="relative w-screen min-h-full h-auto lg:h-full flex flex-col lg:flex-row gap-8"
      style={{
        background: "linear-gradient(to bottom, #FFFFFF 50%, #F6F6F6 50%)",
      }}
    >
      {/* Left Section */}
      <div className="w-full lg:w-1/4 flex flex-col items-center justify-center bg-transparent px-8 order-1 lg:order-1 mb-6 ml-21 lg:mb-40">
        <h2 className="text-5xl font-bold text-slate-700 mb-6 text-center lg:text-left">
          Latest
          <br/>
           Projects
        </h2>

        {/* Hide Arrow Image and Buttons on Small Screens */}
        <img
          src="https://www.matrixbricks.com/img/icon/arrow.webp"
          alt="arrow"
          className="mb-6 hidden lg:block "
        />
        
        {/* Arrow buttons for large screens */}
        <div className="flex items-center gap-4 hidden lg:flex">
          <button
            onClick={scrollPrev}
            className="bg-transparent cursor-pointer border-2 border-black text-black hover:text-white hover:bg-black py-2 px-2 rounded-full flex justify-center items-center"
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="bg-transparent cursor-pointer border-2 border-black text-black hover:text-white hover:bg-black py-2 px-2 rounded-full flex justify-center items-center"
          >
            <ArrowRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Right Section (Carousel) */}
      <div className="w-full lg:w-3/4 overflow-hidden order-2 lg:order-2  mt-25 pl-21 ">
        <div className="flex justify-center items-center border-black border-red-200">
          <div
            className="flex transition-transform duration-500 ease-in-out "
            style={{
              transform: `translateX(-${(scrollIndex % projects.length) * 33.33}%)`,
              width: `${loopedProjects.length * 33}%`,
            }}
          >
            {loopedProjects.map((project, index) => (
              <div
                key={index}
                className="flex-none w-[30%] h-72 lg:h-80 bg-white text-black rounded-lg shadow-md p-4 mx-2 transition-transform transform hover:translate-y-[-5px] transition-all"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-40 lg:h-48 object-cover rounded-lg mb-2 cursor-pointer"
                />
                <p className="text-sm text-red-400 font-bold">{project.fields}</p>
                <h2 className="text-lg font-semibold">{project.title}</h2>
                <p className="text-gray-700 hover:text-red-400 transition-all duration-300 cursor-pointer">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


