// import React, { useState, useEffect } from "react";
// import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

// export default function ProjectsPage() {
//   const [scrollIndex, setScrollIndex] = useState(0);
//   const [activeStory, setActiveStory] = useState("All");

//   const projects = [
//     {
//       fields: "HealthCare",
//       title: "Heni Chemicals.",
//       description: "Web Development",
//       img: "/assets/images/project1.jpg",
//     },
//     {
//       fields: "Manufacturing Sector",
//       title: "Petes Panels",
//       description: "Web Development",
//       img: "/assets/images/project2.png",
//     },
//     {
//       fields: "HealthCare",
//       title: "Qualacon",
//       description: "Web Development",
//       img: "/assets/images/project3.png",
//     },
//     {
//       fields: "Real Estate",
//       title: "Project Four",
//       description: "Web Development",
//       img: "/assets/images/project4.jpg",
//     },
//   ];

//   const loopedProjects = [...projects, ...projects];

//   const scrollNext = () => {
//     setScrollIndex((prevIndex) => (prevIndex + 1) % projects.length);
//   };

//   const scrollPrev = () => {
//     setScrollIndex(
//       (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
//     );
//   };

//   useEffect(() => {
//     const intervalId = setInterval(scrollNext, 3000);
//     return () => clearInterval(intervalId);
//   }, []);

//   const filteredProjects =
//     activeStory === "All"
//       ? projects
//       : projects.filter((project) => project.fields === activeStory);

//   return (
//     <>
//       <div
//         className="relative w-screen overflow-x-hidden min-h-full h-auto lg:h-full mt-10 flex flex-col lg:flex-row gap-8"
//         style={{
//           background: "linear-gradient(to bottom, #FFFFFF 50%, #F6F6F6 50%)",
//         }}
//       >
//         {/* Left Section */}

//         <div className="w-full lg:w-2/7 flex flex-col items-center justify-center bg-transparent px-8 order-1 lg:order-1 mb-2 mt-4 ml-21 lg:mb-4">
//           <h2 className="text-5xl font-bold text-slate-700 mb-6 text-center lg:text-left">
//             Latest
//             <br />
//             Projects
//           </h2>

//           {/* Hide Arrow Image and Buttons on Small Screens */}
//           <img
//             src="https://www.matrixbricks.com/img/icon/arrow.webp"
//             alt="arrow"
//             className="mb-6 hidden lg:block "
//           />

//           {/* Arrow buttons for large screens */}
//           <div className="flex items-center gap-4 sm:hidden lg:flex">
//             <button
//               onClick={scrollPrev}
//               className="bg-transparent cursor-pointer border-2 border-black text-black hover:text-white hover:bg-black py-2 px-2 rounded-full flex justify-center items-center"
//             >
//               <ArrowLeftIcon className="w-6 h-6" />
//             </button>
//             <button
//               onClick={scrollNext}
//               className="bg-transparent cursor-pointer border-2 border-black text-black hover:text-white hover:bg-black py-2 px-2 rounded-full flex justify-center items-center"
//             >
//               <ArrowRightIcon className="w-6 h-6" />
//             </button>
//           </div>
//         </div>

//         {/* Right Section (Carousel) */}
//         <div className="w-full lg:w-4/7 sm overflow-hidden  order-2 lg:order-2">
//           <div className="flex justify-center items-center ">
//             <div className="flex animate-crouse ">
//               {loopedProjects.map((project, index) => (
//                 <div
//                   key={index}
//                   className=" flex-none w-full sm:w-[90%] md:w-[45%] lg:w-[30%] h-72 lg:h-80 bg-white text-black rounded-lg shadow-md p-4 mx-2 transition-all"
//                 >
//                   <img
//                     src={project.img}
//                     alt={project.title}
//                     className="w-full h-40 lg:h-48 object-cover rounded-lg mb-2 cursor-pointer"
//                   />
//                   <p className="text-sm text-red-400 font-bold">
//                     {project.fields}
//                   </p>
//                   <h2 className="text-lg font-semibold">{project.title}</h2>
//                   <p className="text-gray-700 hover:text-red-400 transition-all duration-300 cursor-pointer">
//                     {project.description}
//                   </p>
//                   {/* <p className="text-gray-700 hover:text-red-400 transition-all duration-300 cursor-pointer">
//                     {index}
//                   </p> */}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Success Stories Section */}
//       <div className="bg-gray-100 py-8">
//         <div className="container mx-auto px-4">
//           <h3 className="text-center text-3xl font-bold text-gray-800 mb-6">
//             Success Stories
//           </h3>
//           <div className="flex flex-wrap justify-center gap-4">
//             {["All", "HealthCare", "Manufacturing Sector", "Real Estate"].map(
//               (story, index) => (
//                 <button
//                   key={index}
//                   className={`px-6 py-2 rounded-lg border ${
//                     activeStory === story
//                       ? "bg-red-500 text-white border-red-500"
//                       : "bg-white text-gray-800 border-gray-300 hover:bg-gray-200"
//                   } transition-all duration-300`}
//                   onClick={() => setActiveStory(story)}
//                 >
//                   {story}
//                 </button>
//               )
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function ProjectsPage() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3); // Number of visible cards
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

  const totalProjects = projects.length;

  // Update itemsPerView based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1); // Small screens
      else if (window.innerWidth < 1024) setItemsPerView(2); // Medium screens
      else setItemsPerView(3); // Large screens
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate max scroll index
  const maxScrollIndex = totalProjects - itemsPerView;

  const scrollNext = () => {
    setScrollIndex((prevIndex) =>
      prevIndex < maxScrollIndex ? prevIndex + 1 : 0
    );
  };

  const scrollPrev = () => {
    setScrollIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : maxScrollIndex
    );
  };

  return (
    <div className="w-screen flex flex-col items-center bg-gray-100 py-10">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Latest Projects</h2>

      <div className="relative w-full max-w-6xl">
        {/* Arrow Buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-3 z-10 hover:bg-gray-800"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-3 z-10 hover:bg-gray-800"
        >
          <ArrowRightIcon className="w-6 h-6" />
        </button>

        {/* Carousel */}
        <div ref={carouselRef} className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${scrollIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-none w-full md:w-1/2 lg:w-1/3 p-4"
                style={{ flex: `0 0 ${100 / itemsPerView}%` }}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-48 object-cover"
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

        <div className=" flex justify-end items-center gap-3">
          <FontAwesomeIcon className="mt-1 " icon={faArrowRightLong} />
          <p className="border-b-1 border-gray-400 text-red-600 font-medium cursor-pointer">Success Stories </p> 

        </div>
      </div>
    </div>
  );
}
