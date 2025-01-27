

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHospital,
  faTruck,
  faBagShopping,
  faIndustry,
  faHouseChimney,
  faGem,
  faDesktop,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import industryData from "../../../public/assets/data/industryData.js";
import IndustryImages from "./IndustryImages.jsx";

export const Clients = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("healthcare");

  return (
    <div className="overflow-x-hidden">
      <div className="flex justify-center">
        <h3 className="text-4xl text-gray-700 font-bold mt-12">Our Clients</h3>
      </div>

      {/* icons and names */}
      <div className="flex justify-center items-center mt-5">
        <div className="w-[80%] border-b-1 flex flex-wrap gap-4 pt-4">
          <div
            className={`p-2 cursor-pointer ${
              selectedIndustry === "healthcare" ? "border-1 border-gray-200" : ""
            }`}
            onClick={() => setSelectedIndustry("healthcare")}
          >
            <FontAwesomeIcon icon={faHospital} className="text-red-500" /> Health Care
          </div>
          <div
            className={`p-2 cursor-pointer ${
              selectedIndustry === "logistics" ? "border-1 border-gray-200" : ""
            }`}
            onClick={() => setSelectedIndustry("logistics")}
          >
            <FontAwesomeIcon icon={faTruck} className="text-red-500" /> Logistics
          </div>
          <div
            className={`p-2 cursor-pointer ${
              selectedIndustry === "ecommerce" ? "border-1 border-gray-200" : ""
            }`}
            onClick={() => setSelectedIndustry("ecommerce")}
          >
            <FontAwesomeIcon icon={faBagShopping} className="text-red-500" /> Ecommerce
          </div>
          <div
            className={`p-2 cursor-pointer ${
              selectedIndustry === "fnb" ? "border-1 border-gray-200" : ""
            }`}
            onClick={() => setSelectedIndustry("fnb")}
          >
            <FontAwesomeIcon icon={faIndustry} className="text-red-500" /> F&B Industry
          </div>
          <div
            className={`p-2 cursor-pointer ${
              selectedIndustry === "realEstate" ? "border-1 border-gray-200" : ""
            }`}
            onClick={() => setSelectedIndustry("realEstate")}
          >
            <FontAwesomeIcon icon={faHouseChimney} className="text-red-500" /> Real Estate
          </div>
          <div
            className={`p-2 cursor-pointer ${
              selectedIndustry === "fashion" ? "border-1 border-gray-200" : ""
            }`}
            onClick={() => setSelectedIndustry("fashion")}
          >
            <FontAwesomeIcon icon={faGem} className="text-red-500" /> Fashion & Jewelry
          </div>
          <div
            className={`p-2 cursor-pointer ${
              selectedIndustry === "it" ? "border-1 border-gray-200" : ""
            }`}
            onClick={() => setSelectedIndustry("it")}
          >
            <FontAwesomeIcon icon={faDesktop} className="text-red-500" /> IT & B2B
          </div>
          <div
            className={`p-2 cursor-pointer ${
              selectedIndustry === "ngo" ? "border-t border-l border-r border-gray-200" : ""
            }`}
            onClick={() => setSelectedIndustry("ngo")}
          >
            <FontAwesomeIcon icon={faHeart} className="text-red-500" /> NGO
          </div>
        </div>
      </div>

      {/* Component to show images */}
      <div className="flex justify-center items-center">
      <IndustryImages selectedIndustry={selectedIndustry} images={industryData[selectedIndustry]} />

      </div>
    </div>
  );
};
