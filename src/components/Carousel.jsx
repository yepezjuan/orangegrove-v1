import React from "react";
import CloudinaryImage from "./CloudinaryImage";

const carouselData = ["pic4_hp2goy", "pic7_svylvg", "pic5_gilyep"];

const Carousel = ({ data }) => {
  return (
    <div className="w-full overflow-hidden grid grid-cols-3 scroll-mt-20">
      {carouselData.map((publicId, i) => (
        <CloudinaryImage
          key={i}
          publicId={publicId}
          loading="lazy"
          className="w-full h-auto object-cover"
        />
      ))}
    </div>
  );
};

export default Carousel;

// RAFC shortcut
