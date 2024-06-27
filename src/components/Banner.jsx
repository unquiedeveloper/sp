import React from 'react';
// import img from "../assets/images/main_img.png";
import { FaArrowRight } from "react-icons/fa";
// import i1 from "../assets/images/bar.webp";
// import i2 from "../assets/images/roll.png";
import main from "../assets/main3.mp4"

function Banner() {
  return (
    <div className="relative w-full">
      <video autoPlay loop muted className="absolute inset-0 object-cover w-full h-full z-0">
        <source src={main} type="video/mp4" />
      </video>
      <div className="relative z-10 h-screen flex justify-center border"> {/* Set a fixed height for the main div */}
        <div className="max-w-screen-2xl w-full xl:px-20 px-4 mx-auto flex flex-col md:flex-row py-12 md:py-24 items-center gap-8 relative"> {/* Adjust the padding for responsiveness */}
          <div className="w-full md:w-1/2 space-y-7 px-4 text-center md:text-left flex flex-col items-center md:items-start"> {/* Center text on small screens */}
            {/* text */}
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug text-white">
              Dive into Delights of Delectable 
              <span className="text-yellow px-2">Food</span>
            </h2>
            <p className="text-base md:text-xl text-white">
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
            </p>
            <button className="bg-yellow px-8 py-3 font-semibold text-white rounded-full bg-red-700 ">
              View Menu
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Banner;
