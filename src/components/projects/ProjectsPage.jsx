


import React, { useState, useEffect } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function ProjectsPage() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [activeStory, setActiveStory] = useState("All");

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

  const loopedProjects = [...projects, projects[0], projects[1]];

  const scrollNext = () => {
    setScrollIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const scrollPrev = () => {
    setScrollIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(scrollNext, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const filteredProjects =
    activeStory === "All"
      ? projects
      : projects.filter((project) => project.fields === activeStory);

  return (
    <>
      <div
        className="relative w-screen overflow-x-hidden min-h-full h-auto lg:h-full mt-10 flex flex-col lg:flex-row gap-8"
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
<div className="flex items-center gap-4 sm:hidden lg:flex">
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
        <div className="w-full lg:w-3/4 sm overflow-hidden order-2 lg:order-2">
          <div className="flex justify-center items-center">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  (scrollIndex % projects.length) * 100
                }%)`,
                width: `${loopedProjects.length * 100}%`,
              }}
            >
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="flex-none w-full sm:w-[90%] md:w-[45%] lg:w-[30%] h-72 lg:h-80 bg-white text-black rounded-lg shadow-md p-4 mx-2 transition-transform transform hover:translate-y-[-5px] transition-all"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-40 lg:h-48 object-cover rounded-lg mb-2 cursor-pointer"
                  />
                  <p className="text-sm text-red-400 font-bold">
                    {project.fields}
                  </p>
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

      {/* Success Stories Section */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-3xl font-bold text-gray-800 mb-6">
            Success Stories
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["All", "HealthCare", "Manufacturing Sector", "Real Estate"].map(
              (story, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-lg border ${
                    activeStory === story
                      ? "bg-red-500 text-white border-red-500"
                      : "bg-white text-gray-800 border-gray-300 hover:bg-gray-200"
                  } transition-all duration-300`}
                  onClick={() => setActiveStory(story)}
                >
                  {story}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}





