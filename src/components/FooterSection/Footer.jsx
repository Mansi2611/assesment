import React from "react";
import Banner from "./Banner";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="h-auto border-2 m-auto">
        <Banner />

        <div className="flex justify-center ">
          <div className="w-[80%] flex justify-center gap-3 md:justify-between flex-col md:flex-row  md:gap-12 p-10 items-center">
            <div>
              Follow us On :{" "}
              <span className="inline-block">
                <div className="flex space-x-4 text-gray-600">
                  {/* GitHub */}
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="2x"
                      className="hover:text-black text-red-500"
                    />
                  </a>

                  {/* Twitter */}
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      size="2x"
                      className="hover:text-blue-400 text-red-500"
                    />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="2x"
                      className="hover:text-blue-700 text-red-500"
                    />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="2x"
                      className="hover:text-pink-500 text-red-500"
                    />
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faYoutube}
                      size="2x"
                      className="hover:text-red-600 text-red-500"
                    />
                  </a>
                </div>
              </span>
            </div>

            <div className="text-4xl text-gray-700 font-extrabold">LET'S TALK ?</div>

            <div>
              <button className="bg-[rgb(213,34,81)]  border-2 border-[rgb(213,34,81)] text-white py-1 px-6 w-auto sm:w-auto rounded-full text-sm md:text-base font-medium transition-all duration-300 cursor-pointer flex items-center">
                <span className="flex-grow text-center">Make an enquiry</span>
                <span className="ml-3 flex justify-center items-center w-8 h-8 bg-white rounded-full">
                  <ArrowRightIcon className="w-6 h-5 md:w-6 md:h-6 text-black font-bold" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/*Adress section  */}

        <div className="flex justify-center bg-gray-200 pb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%]">
            {/* India */}
            <div className="mx-7 mt-10">
              <div>
                <img
                  className="inline-block mb-1 mr-3 "
                  src="/assets/images/india.webp"
                />
                <span className="text-3xl font-bold text-gray-600">India</span>{" "}
              </div>

              <div className="flex flex-col gap-4 border-t-1 pt-3">
                <div className="flex gap-5">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    size="2x"
                    className="inline-block text-red-500 "
                  />
                  <span className="hover:text-red-500 ">
                    <a
                      href="https://maps.app.goo.gl/vjgvavKsUjoenGRD7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      402, Building 2, Sector 1, Millenium Business Park,
                      Mahape, Navi Mumbai, Maharashtra - 400710
                    </a>{" "}
                  </span>{" "}
                </div>

                <div className="flex gap-5">
                  <FontAwesomeIcon
                    icon={faPhone}
                    size="2x"
                    className="text-red-500 "
                  />
                  <span className="inline-block hover:text-red-500 ">
                    <a
                      href="tel:+91 (22) 4618 7682"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      +91 (22) 4618 7682
                    </a>{" "}
                  </span>{" "}
                </div>

                <div className="flex gap-5">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="2x"
                    className="text-red-500  "
                  />
                  <span className="inline-block">
                    <a
                      href="mailto:info@matrixbricks.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-red-500 "
                    >
                      {" "}
                      info@matrixbricks.com
                    </a>{" "}
                  </span>{" "}
                </div>
              </div>
            </div>
            {/* UAE */}
            <div className="mx-7 mt-10">
              <div>
                <img
                  className="inline-block mb-1 mr-3 "
                  src="/assets/images/arab.webp"
                />
                <span className="text-3xl font-bold text-gray-600">UAE</span>{" "}
              </div>

              <div className="flex flex-col gap-4 border-t-1 pt-3">
                <div className="flex gap-5">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    size="2x"
                    className="inline-block text-red-500 "
                  />
                  <span className="hover:text-red-500 ">
                    <a
                      href="https://maps.app.goo.gl/oK7SBx5ekbo2tiy66"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      1224, The One Tower, Internet City, Sheikh Zayed Road
                      Dubai 390114, UAE.
                    </a>{" "}
                  </span>{" "}
                </div>

                <div className="flex gap-5">
                  <FontAwesomeIcon
                    icon={faPhone}
                    size="2x"
                    className="text-red-500 "
                  />
                  <span className="inline-block hover:text-red-500 ">
                    <a
                      href="tel:+971 54 465 0160"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      +971 54 465 0160
                    </a>{" "}
                  </span>{" "}
                </div>

                <div className="flex gap-5">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="2x"
                    className="text-red-500  "
                  />
                  <span className="inline-block">
                    <a
                      href="mailto:info@matrixbricks.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-red-500 "
                    >
                      {" "}
                      uae@matrixbricks.com
                    </a>{" "}
                  </span>{" "}
                </div>
              </div>
            </div>

            {/* Canada */}
            <div className="mx-7 mt-10">
              <div>
                <img
                  className="inline-block mb-1 mr-3 "
                  src="/assets/images/canada.webp"
                />
                <span className="text-3xl font-bold text-gray-600">Canada</span>{" "}
              </div>

              <div className="flex flex-col gap-4 border-t-1 pt-3">
                <div className="flex gap-5">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    size="2x"
                    className="inline-block text-red-500 "
                  />
                  <span className="hover:text-red-500 ">
                    <a
                      href="https://maps.app.goo.gl/YKKchL388PQw1jX26"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      170-422, Richard Street, Vancouver, BC V6B 2Z4. Canada.
                    </a>{" "}
                  </span>{" "}
                </div>

                <div className="flex gap-5">
                  <FontAwesomeIcon
                    icon={faPhone}
                    size="2x"
                    className="text-red-500 "
                  />
                  <span className="inline-block hover:text-red-500 ">
                    <a
                      href="tel:+1(778)538-9854"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      +1(778)538-9854{" "}
                    </a>{" "}
                  </span>{" "}
                </div>

                <div className="flex gap-5">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="2x"
                    className="text-red-500  "
                  />
                  <span className="inline-block">
                    <a
                      href="mailto:info@matrixbricks.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-red-500 "
                    >
                      {" "}
                      info@matrixbricks.com{" "}
                    </a>{" "}
                  </span>{" "}
                </div>
              </div>
            </div>

            {/* UK */}
            <div className="mx-7 mt-10">
              <div>
                <img
                  className="inline-block mb-1 mr-3 "
                  src="/assets/images/uk.webp"
                />
                <span className="text-3xl font-bold text-gray-600">UK</span>{" "}
              </div>

              <div className="flex flex-col gap-4 border-t-1 pt-3">
                <div className="flex gap-5">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    size="2x"
                    className="inline-block text-red-500 "
                  />
                  <span className="hover:text-red-500 ">
                    <a
                      href="https://maps.app.goo.gl/vjgvavKsUjoenGRD7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      London, United Kingdom
                    </a>{" "}
                  </span>{" "}
                </div>

                <div className="flex gap-5">
                  <FontAwesomeIcon
                    icon={faPhone}
                    size="2x"
                    className="text-red-500 "
                  />
                  <span className="inline-block hover:text-red-500 ">
                    <a
                      href="tel:+44 20 3290 9666"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      +44 20 3290 9666‬
                    </a>{" "}
                  </span>{" "}
                </div>

                <div className="flex gap-5">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="2x"
                    className="text-red-500  "
                  />
                  <span className="inline-block">
                    <a
                      href="mailto:info@matrixbricks.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-red-500 "
                    >
                      {" "}
                      info@matrixbricks.com
                    </a>{" "}
                  </span>{" "}
                </div>
              </div>
            </div>

            {/* us */}
            <div className="mx-7 mt-10">
              <div>
                <img
                  className="inline-block mb-1 mr-3 "
                  src="/assets/images/us.webp"
                />
                <span className="text-3xl font-bold text-gray-600">US</span>{" "}
              </div>

              <div className="flex flex-col gap-4 border-t-1 pt-3">
                <div className="flex gap-5">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    size="2x"
                    className="inline-block text-red-500 "
                  />
                  <span className="hover:text-red-500 ">
                    <a
                      href="https://maps.app.goo.gl/o6eqxxQanDRiWohQ9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      5500 Greenwood Plaza Blvd, Suite 130 #27, Greenwood
                      Village, CO 80111, USA.
                    </a>{" "}
                  </span>{" "}
                </div>

                <div className="flex gap-5">
                  <FontAwesomeIcon
                    icon={faPhone}
                    size="2x"
                    className="text-red-500 "
                  />
                  <span className="inline-block hover:text-red-500 ">
                    <a
                      href="tel:+1 (720) 730-9987"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      +1 (720) 730-9987{" "}
                    </a>{" "}
                  </span>{" "}
                </div>

                <div className="flex gap-5">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="2x"
                    className="text-red-500  "
                  />
                  <span className="inline-block">
                    <a
                      href="mailto:info@matrixbricks.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-red-500 "
                    >
                      {" "}
                      info@matrixbricks.com{" "}
                    </a>{" "}
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* partners */}

        <div className="w-full flex justify-center items-center  md:justify-start lg:justify-start py-8 bg-gray-50 border-b-gray-100">
          <div className="w-[80%] flex flex-wrap justify-center gap-8">
            <span className="text-xl font-semibold text-gray-700 mb-4">
              Our Partners:
            </span>

            <div className="flex justify-center items-center gap-5">
              <img
                src="/assets/images/partner1.webp"
                alt="Partner 1"
                className="h-16 w-auto object-contain"
              />
              <img
                src="/assets/images/partner2.png"
                alt="Partner 2"
                className="h-16 w-auto object-contain"
              />
              <img
                src="/assets/images/partner3.png"
                alt="Partner 3"
                className="h-16 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* footer cont */}

        <div className="flex justify-center">
          <div className="sm:w-[95%] md:w-[75%] border-t-1 flex flex-wrap md:flex-nowrap justify-between items-center my-10 pt-10">
            <div className="flex flex-wrap md:flex-nowrap justify-between w-full md:w-auto">
              <span className="my-4 border-r-2 mx-1 pr-1 cursor-pointer hover:text-red-500">
                Customer Support
              </span>
              <span className="my-4 border-r-2 mx-1 pr-1 cursor-pointer hover:text-red-500">
                Privacy Policy
              </span>
              <span className="my-4 border-r-2 mx-1 pr-1 cursor-pointer hover:text-red-500">
                Terms Of Use
              </span>
              <span className="my-4 border-r-2 mx-1 pr-1 cursor-pointer hover:text-red-500">
                Sitemap
              </span>
              <span className="my-4 border-r-2 mx-1 pr-1 cursor-pointer hover:text-red-500">
                Blog Sitemap
              </span>
            </div>

            <div className="mt-4 md:mt-0 text-center md:text-right">
              <p>Copyright 2011 - 2024 © Matrix Bricks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
