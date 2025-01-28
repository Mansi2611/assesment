import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isOpen, options, onClose }) => {
  return (
    <div
      className={`lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50 ${
        isOpen ? "block" : "hidden"
      }`}
      onClick={onClose}
    >
      <div className="bg-white w-64 p-4  h-full overflow-y-auto">
        <button onClick={onClose} className="text-xl text-gray-600 mb-4 ">
          <FontAwesomeIcon icon={faXmark} />{" "}
        </button>

        <ul>
          {options.map((option, index) => (
            <li key={index} className="py-2">
              <div className="text-lg font-bold text-gray-700 cursor-pointer">
                {option.label}
              </div>
              {option.dropdown && (
                <ul className="pl-4 mt-2">
                  {option.dropdown.map((item, i) => (
                    <li key={i} className="mt-2">
                      {typeof item === "object" ? (
                        <div>
                          <div className="text-red-500 font-bold">
                            {item.label}
                          </div>
                          <div className="mt-1">
                            {item.description?.map((desc, j) => (
                              <p
                                key={j}
                                className="text-gray-600 text-sm hover:text-red-500 cursor-pointer"
                              >
                                {desc}
                              </p>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <p className="text-gray-600 text-sm hover:text-red-500 cursor-pointer">
                          {item}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function NavigationSection() {
  const [activeDropdown, setActiveDropdown] = useState(null); // Tracks the active dropdown index
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseSidebar = () => {
    setIsOpen(false);
  };

  const options = [
    {
      label: "About",
      dropdown: [
        "About",
        "Digital Marketing",
        "Designing & Development",
        "Digital Transformation",
        "Others",
        "Industry",
        "Contact",
      ],
    },
    {
      label: "Digital Marketing",
      show: true,
      dropdown: [
        {
          label: "SEARCH ENGINE MARKETING",
          description: [
            "Google Search Ads",
            "RRetargetting Ads",
            "Google Display Advertising",
            "Google Shopping Ads",
          ],
        },
        {
          label: "SOCIAL MEDIA MARKETING",
          description: [
            "Social Media Managment",
            "Social Media Advertising ",
            "Facebook Advertising",
            "Instagram Advertising",
            "LinkdIn Advertising",
            "YouTube Ads",
          ],
        },
        {
          label: "SEARCH ENGINE OPTIMIZING",
          description: [
            "Enterprise SEO",
            "National SEO",
            "Local SEO",
            "International SEO",
            " SEO Audits",
            "SEO Content Writting",
          ],
        },
        {
          label: "ONLINE REPUTATION MANAGMENT",
        },
        {
          label: "APP STORE OPTIMIZATION",
        },
      ],
    },
    {
      label: "Designing & Development",
      dropdown: [
        "Web Designing",
        "Web Development",
        "Android App Development",
        "IOS App Development",
        "Content Managment System",
        "E-commerce Development",
      ],
    },
    {
      label: "Digital Transformation",
      show: true,

      dropdown: [
        {
          label: "PRODUCT ENGINEERING",
          description: [
            "Software Development",
            "Integration",
            "App Modernization",
          ],
        },
        {
          label: "Generative AI",
          description: [
            "Artifial Intelligence",
            "Machine Learning",
            "Robotic Process Automation",
            "Business Process Automation (BPA)",
            "Chatbot",
          ],
        },
        {
          label: "CLOUD",
          description: [
            "Cloud Consulting & Assesment",
            "Cloud Managed Services",
            "Cloud Migration Services",
          ],
        },
        {
          label: "DEVOP'S",
          description: ["SecOps", "FinOps", "MLOps"],
        },
        {
          label: "DATA ENGINEERING",
          description: [
            "Data Strategy & Solution",
            "Data Engineering & Operations",
            "Data Analytics",
          ],
        },
        {
          label: "CYBER SECURITY",
          description: [
            "Cloud Security",
            "Infrastructure Security",
            "Vulnerability /PEN Testing ",
            "Compliances Assesment",
          ],
        },
        {
          label: "IOT",
          description: ["IoT Consulting", "IoT Cloud"],
        },
      ],
    },
    {
      label: "Others",
      show: true,

      dropdown: [
        {
          label: "STRATEGY & CONSULTING",
          description: [
            "Brand Strategy",
            "Product Strategy",
            "Growth & Innovation Strategy",
            "Competitive Audit",
            "Trendspotting Consulting",
          ],
        },
        {
          label: "B2B MARKETING",
          description: [
            "Content Creation",
            "Content Syndication",
            "Account Based Marketing",
            "Marketing Qualified Leads",
            "Sales Qualified Leads",
          ],
        },
        {
          label: "MARKETING AUTOMATION",
          description: ["Hubspot", "Active Campaign", "Inbound Marketing"],
        },
      ],
    },
    {
      label: "Industry",
      dropdown: [
        "Fashion Industry",
        "Medical Industry",
        "SaaS Industry",
        "Real Estate Industry",
        "Human Resource Industry",
        "Fitness Industry",
        "Manufacturing Industry",
        "Food & Beverage Industry",
        "BFSI Industry",
        "FMCG Industry",
        "Hospitality Industry",
        "E-Commerce Industry",
        "IT-B2B Industry",
      ],
    },
    { label: "Contact" },
  ];

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="bg-transparent text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:flex justify-center items-center space-x-8">
          {options.map((option, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center space-x-1 gap-2 cursor-pointer hover:text-red-600 ">
                <span className="text-lg sm:text-base font-bold ">
                  {option.label}
                </span>
                {option.dropdown && (
                  <span className="text-white text-xs">▼</span>
                )}
              </div>

              {option.show && activeDropdown === index && (
                <div
                  className="absolute  left-1/2 transform -translate-x-1/2 border-2 w-[72vw]  ml-34 bg-white text-gray-800 shadow-lg rounded-lg z-10 flex flex-wrap gap-4 p-4"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  style={{ maxWidth: "90vw", justifyContent: "start" }}
                >
                  {option.dropdown.map((item, i) => (
                    <div
                      key={i}
                      className="w-72 flex-shrink-0"
                      style={{
                        flexBasis: "calc(20% - 1rem)",
                        minWidth: "250px",
                      }}
                    >
                      <div className="bg-white  ">
                        <div className="text-red-500 font-bold py-2 cursor-pointer">
                          {item.label}
                        </div>
                        <div className="border-t border-gray-300 my-2"></div>
                        <div>
                          {item.description?.map((val, j) => (
                            <p
                              className="cursor-pointer hover:text-red-500 mt-1"
                              key={j}
                            >
                              {val}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {option.show !== true &&
                option.dropdown &&
                activeDropdown === index && (
                  <div
                    className="absolute top-full left-0 mt-1 bg-white text-gray-800 shadow-lg rounded-lg w-48 z-10"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <ul className="p-2">
                      {option.dropdown.map((item, i) => (
                        <li
                          key={i}
                          className="px-4 py-1 hover:bg-gray-100 cursor-pointer hover:text-red-600"
                        >
                          {item.label || item}{" "}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          ))}
        </div>

        <div className="lg:hidden mt-4">
          <button
            onClick={handleMenuToggle}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <Bars3Icon className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Sidebar */}
        <Sidebar
          isOpen={isOpen}
          options={options}
          onClose={handleCloseSidebar}
        />
      </div>
    </div>
  );
}
