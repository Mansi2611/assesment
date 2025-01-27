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
    <div className="logos w-[80%] border-2">


      <div className=" logos overflow-hidden py-3 bg-red-900">
      <div className="animate-slide whitespace-nowrap">
  {images.map((tech, index) => (
    <img src={tech} alt={`tech-${index}`} key={index} className="inline-block mx-4" />
  ))}
</div>

      </div>
    </div>
  );
};

export default Tech;
