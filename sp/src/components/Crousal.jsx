import React from 'react';
import b1 from "../assets/1.png";
import b2 from "../assets/2.png";

function Crousal() {
  return (
    <>
      <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        {/* Adjusted heights for different screen sizes */}
        <div className="carousel w-full h-full">
          <div id="slide1" className="carousel-item relative w-full h-full">
            <img
              src={b1}
              className="w-full h-full object-contain md:object-cover object-center" /> {/* Object-contain for small devices and object-cover for larger devices */}
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full h-full">
            <img
              src={b2}
              className="w-full h-full object-contain md:object-cover object-center" /> {/* Object-contain for small devices and object-cover for larger devices */}
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full h-full">
            <img
              src={b1}
              className="w-full h-full object-contain md:object-cover object-center" /> {/* Object-contain for small devices and object-cover for larger devices */}
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full h-full">
            <img
              src={b2}
              className="w-full h-full object-contain md:object-cover object-center" /> {/* Object-contain for small devices and object-cover for larger devices */}
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Crousal;
