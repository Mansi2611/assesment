import React from "react";

import node from "../../../public/assets/images/scrollx/nodejs.webp";
import paloalto from "../../../public/assets/images/scrollx/paloalto.webp";
import php from "../../../public/assets/images/scrollx/php.webp";
import javascript from "../../../public/assets/images/scrollx/s1.webp";
import seqrite from "../../../public/assets/images/scrollx/seqrite.webp";
import sql from "../../../public/assets/images/scrollx/sql.webp";
import wordpress from "../../../public/assets/images/scrollx/wordpress.webp";
import xml from "../../../public/assets/images/scrollx/xml-logo.webp";

const Tech = () => {
  const images = [
    node,
    paloalto,
    php,
    javascript,
    seqrite,
    sql,
    wordpress,
    xml,
  ];

  return (
    <div className="logos w-[70%] m-8 overflow-hidden">
      <div className="animate-slide  group-hover:animate-none cursor-pointer  py-3 flex">
        <div className="flex whitespace-nowrap">
          {images.map((tech, index) => (
            <div
              className="mx-8 cursor-pointer border-1 h-24 w-42 flex justify-center items-center p-2  border-gray-300"
              key={index}
            >
              <img src={tech} alt={`tech-${index}`} loading="lazy" />
            </div>
          ))}
        </div>

        <div className="flex  whitespace-nowrap">
          {images.map((tech, index) => (
            <div
              className="mx-8 cursor-pointer border-1 h-24 w-42 flex justify-center items-center p-2  border-gray-300"
              key={index}
            >
              <img src={tech} alt={`tech-${index}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;
