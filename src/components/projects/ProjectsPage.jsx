import React, { useState, useEffect, useRef } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function ProjectsPage() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [activeStory, setActiveStory] = useState("All");
  const [itemsPerView, setItemsPerView] = useState(3);

  const carouselRef = useRef();
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

  useEffect(() => {
    const intervalId = setInterval(scrollNext, 3000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    window.addEventListener("resize", updateItemsPerView);
    updateItemsPerView();

    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const filteredProjects =
    activeStory === "All"
      ? projects
      : projects.filter((project) => project.fields === activeStory);

  const loopedProjects = [...filteredProjects, ...filteredProjects];

  const scrollNext = () => {
    setScrollIndex((prevIndex) => {
      // Reset To start
      if (prevIndex + 1 >= filteredProjects.length) {
        setTimeout(() => setScrollIndex(0), 500);
      }
      return (prevIndex + 1) % filteredProjects.length;
    });
  };

  const scrollPrev = () => {
    setScrollIndex((prevIndex) => {
      if (prevIndex === 0) {
        setTimeout(() => setScrollIndex(filteredProjects.length - 1), 500); // Reset to end
      }
      return (
        (prevIndex - 1 + filteredProjects.length) % filteredProjects.length
      );
    });
  };

  return (
    <>
      <div
        className=" flex justify-center"
        style={{
          background: "linear-gradient(to bottom, #FFFFFF 55%, #F6F6F6 40%)",
        }}
      >
        <div
          className="relative  w-[80%] overflow-x-hidden min-h-full h-auto lg:h-full mt-10 flex flex-col lg:flex-row gap-8"
          style={{
            background: "linear-gradient(to bottom, #FFFFFF 50%, #F6F6F6 50%)",
          }}
        >
          {/* Left Section */}

          <div className="w-full lg:w-3/7  flex flex-col items-center justify-center bg-transparent px-8  mb-2 mt-4  lg:mb-4">
            <h2 className="text-2xl md:text-5xl font-bold text-slate-700 mb-6 text-center lg:text-left">
              Latest
              <br />
              Projects
            </h2>

            <img
              src="https://www.matrixbricks.com/img/icon/arrow.webp"
              alt="arrow"
              className="mb-6 hidden lg:block "
            />

            {/* btns for larger screen */}
            <div className=" items-center gap-4 hidden lg:flex">
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

          <div ref={carouselRef} className="overflow-hidden  w-full">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${
                  scrollIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {loopedProjects.map((project, index) => (
                <div
                  key={index}
                  className="flex-none w-full sm:w-1/2 md:w-1/2 lg:w-1/3 p-4"
                  style={{ flex: `0 0 ${100 / itemsPerView}%` }}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="p-4">
                      <p className="text-sm text-red-400 font-bold">
                        {project.fields}
                      </p>
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <p className="text-gray-700">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* btns for smaller screen */}
          <div className="flex justify-center items-center gap-4 md:hidden ">
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
