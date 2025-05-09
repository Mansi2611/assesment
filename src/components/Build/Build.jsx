import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Build = () => {
  return (
    <div className="bg-[#EFEFEF] min-h-screen flex justify-center py-8">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="flex justify-center flex-col mb-10">
          <p className="font-bold text-red-500 text-center">
            END TO END SOLUTION
          </p>
          <h2 className="font-bold text-2xl text-center">
            See How We Build Brands
          </h2>
        </div>

        {/* Steps section for small screen */}
        <div className="flex md:hidden lg:hidden xl:hidden flex-col gap-6 ">
          {/* Step 1 */}
          <div className="flex items-center justify-between gap-6">
            <div className="flex justify-center items-center w-16 h-16 bg-gradient-to-br from-red-600 to-red-400 text-white rounded-full shadow-md text-3xl font-bold">
              1
            </div>
            <div className="flex-1 bg-white p-4 rounded-2xl shadow-lg">
              <p className="font-semibold text-red-600">
                Analysis and Research
              </p>
              <p className="text-sm text-gray-600">
                Comprehensive examination and data collection to understand
                market trends, customer needs, and competitive landscape.
              </p>
              <ul className="mt-2 text-sm text-gray-500">
                <li>Competitive Audit</li>
                <li>Market Trends</li>
                <li>Customer Needs</li>
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center justify-between gap-6">
            <div className="flex justify-center items-center w-16 h-16 bg-gradient-to-br from-red-600 to-red-400 text-white rounded-full shadow-md text-3xl font-bold">
              2
            </div>
            <div className="flex-1 bg-white p-4 rounded-2xl shadow-lg">
              <p className="font-semibold text-red-600">Strategy & Planning</p>
              <p className="text-sm text-gray-600">
                Developing a roadmap to achieve business goals through detailed
                action plans and strategic initiatives.
              </p>
              <ul className="mt-2 text-sm text-gray-500">
                <li>Brand Strategy</li>
                <li>Product Strategy</li>
                <li>Growth & Innovation Strategy</li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center justify-between gap-6">
            <div className="flex justify-center items-center w-16 h-16 bg-gradient-to-br from-red-600 to-red-400 text-white rounded-full shadow-md text-3xl font-bold">
              3
            </div>
            <div className="flex-1 bg-white p-4 rounded-2xl shadow-lg">
              <p className="font-semibold text-red-600">Design & Development</p>
              <p className="text-sm text-gray-600">
                Crafting and building products or services with a focus on
                functionality, user experience, and innovation.
              </p>
              <ul className="mt-2 text-sm text-gray-500">
                <li>Website Design</li>
                <li>Web Development</li>
                <li>E-commerce Development</li>
                <li>Content Management Systems</li>
              </ul>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-center justify-between gap-6">
            <div className="flex justify-center items-center w-16 h-16 bg-gradient-to-br from-red-600 to-red-400 text-white rounded-full shadow-md text-3xl font-bold">
              4
            </div>
            <div className="flex-1 bg-white p-4 rounded-2xl shadow-lg">
              <p className="font-semibold text-red-600">Marketing</p>
              <p className="text-sm text-gray-600">
                Promoting and positioning products or services to attract and
                engage target audiences through various channels.
              </p>
              <ul className="mt-2 text-sm text-gray-500">
                <li>SEO</li>
                <li>Social Media Marketing</li>
                <li>Search Engine Marketing</li>
              </ul>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex items-center justify-between gap-6">
            <div className="flex justify-center items-center w-16 h-16 bg-gradient-to-br from-red-600 to-red-400 text-white rounded-full shadow-md text-3xl font-bold">
              5
            </div>
            <div className="flex-1 bg-white p-4 rounded-2xl shadow-lg">
              <p className="font-semibold text-red-600">Product Management</p>
              <p className="text-sm text-gray-600">
                Overseeing the lifecycle of a product, from conception to
                launch, ensuring it meets market demands and business
                objectives.
              </p>
              <ul className="mt-2 text-sm text-gray-500">
                <li>Product Engineering</li>
                <li>Data Analytics</li>
                <li>Cyber Security</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Steps section for large screen only*/}

        <div className="hidden  md:flex sm:hidden   flex-col items-center">
          {/* Step 1 */}
          <div className="w-full md:w-[70%] flex justify-end relative">
            <span className="absolute left-[28%] -top-3">
              <div className="w-18 h-18 flex justify-center items-center rounded-full border-3 border-red-500">
                <div className="w-16 h-16 my-4 rounded-full flex justify-center items-center bg-red-600 text-4xl font-bold text-white">
                  1
                </div>
              </div>
            </span>
            <div className="border-r-1 border-t-1 border-b-1 w-full md:w-[70%] border-red-600 pt-1 pb-3 flex flex-col justify-end rounded-br-full rounded-tr-full">
              <p className="ml-15 font-bold text-red-600 text-[15px]">
                Analysis and Research
              </p>
              <div className="border-r-1 border-t-1 border-b-1 my-4 border-red-500 mx-10 rounded-br-full rounded-tr-full mb-6">
                <div className="w-full md:w-[85%] flex gap-3 flex-col mt-3 pl-12">
                  <p>
                    Comprehensive examination and data collection to understand
                    market trends, customer needs, and competitive landscape.
                  </p>
                  <p className="flex ">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="w-4 mr-1 text-white h-12 p-1 rounded-full bg-red-600"
                    />
                    Competitive Audit
                  </p>
                  <p className="flex ">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="w-4 mr-1 text-white h-12 p-1 rounded-full bg-red-600"
                    />
                    Data Analyticst
                  </p>
                  <p className="flex mb-3">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="w-4 mr-1 text-white h-12 p-1 rounded-full bg-red-600"
                    />
                    Cloud Consulting and Assessment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="w-full md:w-[70%] flex justify-start relative">
            <div className="border-l-2 border-t-2 border-b-2 -mt-10 w-full md:w-[70%] border-red-600 py-3 flex flex-col justify-end rounded-bl-full rounded-l-full">
              <p className="w-40 text-left justify-end ml-90 pb-1 font-bold text-red-600 text-[15px]">
                Strategy & Planning
              </p>
              <div className="border-l-2 border-t-2 border-b-2 flex justify-end border-r-0 border-red-500 mx-10 pl-50 rounded-l-full mb-6">
                <div className="md:w-[90%] flex gap-3 flex-col mt-3 pl-12">
                  <p>
                    Developing a roadmap to achieve business goals through
                    detailed action plans and strategic initiatives.
                  </p>
                  <p className="flex ">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="w-4 mr-1 text-white h-12 p-1 rounded-full bg-red-600"
                    />
                    Brand Statergy
                  </p>
                  <p className="flex ">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="w-4 mr-1 text-white h-12 p-1 rounded-full bg-red-600"
                    />
                    Product Statergy
                  </p>
                  <p className="flex ">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="w-4 mr-1 text-white h-12 p-1 rounded-full bg-red-600"
                    />
                    Growth & Innovation Statergy
                  </p>
                  <p className="flex pb-7 ">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="w-4 mr-1 text-white h-12 p-1 rounded-full bg-red-600"
                    />
                    Trendspotting Cunsulting
                  </p>
                </div>
              </div>
            </div>
            <span className="absolute right-[28%] -top-15">
              <div className="w-18 h-18 flex justify-center items-center rounded-full border-3 border-red-500">
                <div className="w-16 h-16 my-4 rounded-full flex justify-center items-center bg-red-600 text-4xl font-bold text-white">
                  2
                </div>
              </div>
            </span>
          </div>

          {/* Step 3 */}
          <div className="w-full md:w-[70%] flex justify-end relative">
            <span className="absolute left-[18%] -top-15">
              <div className="w-18 h-18 flex justify-center items-center rounded-full border-3 border-red-500">
                <div className="w-16 h-16 my-4 rounded-full flex justify-center items-center bg-red-600 text-4xl font-bold text-white">
                  3
                </div>
              </div>
            </span>
            <div className="border-r-1 border-t-1 border-b-1 w-full md:w-[70%] -mt-10 border-red-600 pt-1 pb-5 flex flex-col justify-end rounded-br-full rounded-tr-full">
              <p className="ml-15 font-bold text-red-600 text-[15px]">
                Design & Development
              </p>
              <div className="border-r-1 border-t-1 border-b-1 my-3 border-red-500 mx-10 rounded-br-full rounded-tr-full">
                <div className="w-full md:w-[85%] flex gap-3 flex-col mt-3 pt-5 pl-12">
                  <p>
                    Crafting and building products or services with a focus on
                    functionality, user experience, and innovation.
                  </p>
                  <p className="flex ">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="w-4 mr-1 text-white h-12 p-1 rounded-full bg-red-600"
                    />
                    Website Design
                  </p>
                  <p className="flex ">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="w-4 mr-1 text-white h-12 p-1 rounded-full bg-red-600"
                    />
                    Web Development
                  </p>
                  <p className="flex ">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="w-4 mr-1 text-white h-12 p-1 rounded-full bg-red-600"
                    />
                    Content Management Systems
                  </p>
                  <p className="flex ">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="w-4 mr-1 text-white h-12 p-1 rounded-full bg-red-600"
                    />
                    E-commerce Development
                  </p>
                  <p className="pb-5  flex mb-3">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="w-4 mr-1 text-white h-12 p-1 rounded-full bg-red-600"
                    />
                    Software Development
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="w-full md:w-[70%] flex justify-start relative">
            <span className="absolute right-[28%] -top-15">
              <div className="w-18 h-18 flex justify-center items-center rounded-full border-3 border-red-500">
                <div className="w-16 h-16 my-4 rounded-full flex justify-center items-center bg-red-600 text-4xl font-bold text-white">
                  4
                </div>
              </div>
            </span>
            <div className="border-l-2 border-t-2 border-b-2 -mt-9 w-full md:w-[70%] border-red-600 py-3 flex flex-col justify-end rounded-bl-full rounded-l-full">
              <p className="w-60 text-left justify-end ml-90 font-bold text-red-600 text-[15px]">
                Marketing
              </p>
              <div className="border-l-2 border-t-2 border-b-2 flex justify-end border-r-0 border-red-500 mx-10 pl-50 rounded-l-full mb-6">
                <div className="md:w-[90%] flex gap-3 flex-col mt-3 pl-12">
                  <p>
                    Promoting and positioning products or services to attract
                    and engage target audiences through various channels.
                  </p>
                  <p className="flex">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="w-4 mr-1 text-white h-12 p-1 rounded-full bg-red-600"
                    />
                    Search Engine Optimization
                  </p>
                  <p className="flex">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="w-4 mr-1 text-white h-12 p-1 rounded-full bg-red-600"
                    />
                    Social Media Marketing
                  </p>
                  <p className="flex">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="w-4 mr-1 text-white h-12 p-1 rounded-full bg-red-600"
                    />
                    Search Engine Marketing
                  </p>
                  <p className="pb-3 flex">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="w-4 mr-1 text-white h-12 p-1 rounded-full bg-red-600"
                    />
                    Online Reputation Management
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="w-full md:w-[70%] flex justify-end relative">
            <span className="absolute left-[18%] -top-15">
              <div className="w-18 h-18 flex justify-center items-center rounded-full border-3 border-red-500">
                <div className="w-16 h-16 my-4 rounded-full flex justify-center items-center bg-red-600 text-4xl font-bold text-white">
                  5
                </div>
              </div>
            </span>
            <div className="border-r-1 border-t-1 border-b-1 w-full md:w-[70%] -mt-10 border-red-600 pt-1 pb-5 flex flex-col justify-end rounded-br-full rounded-tr-full">
              <p className="ml-15 font-bold text-red-600 text-[15px]">
                Product Management
              </p>
              <div className="border-r-1 border-t-1 border-b-1 my-3 border-red-500 mx-10 rounded-br-full rounded-tr-full">
                <div className="w-full sm:w-[90%] md:w-[85%] flex gap-3 flex-col mt-3 pt-5 pl-12">
                  <p>
                    Overseeing the lifecycle of a product, from conception to
                    launch, ensuring it meets market demands and business
                    objectives.
                  </p>
                  <p className="flex">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="w-4 mr-1 text-white h-12 p-1 rounded-full bg-red-600"
                    />
                    Product Engineering
                  </p>
                  <p className="flex">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="w-4 mr-1 text-white h-12 p-1 rounded-full bg-red-600"
                    />
                    Data Analytics
                  </p>
                  <p className="flex">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="w-4 mr-1 text-white h-12 p-1 rounded-full bg-red-600"
                    />
                    Robotic Process Automation
                  </p>
                  <p className="flex">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="w-4 mr-1 text-white h-12 p-1 rounded-full bg-red-600"
                    />
                    Cloud Managed Service
                  </p>
                  <p className="pb-5 mb-3 flex">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="w-4 mr-1 text-white h-12 p-1 rounded-full bg-red-600"
                    />
                    Cyber Security
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Build;
