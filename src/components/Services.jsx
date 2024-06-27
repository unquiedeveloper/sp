import React from 'react';
import { FaUserTie, FaBriefcase, FaLaptopCode, FaChalkboardTeacher, FaChartLine, FaTools } from 'react-icons/fa';
import res from "../assets/res.jpg"
function Services() {
  const icons = [
    FaUserTie, 
    FaBriefcase, 
    FaLaptopCode, 
    FaChalkboardTeacher, 
    FaChartLine, 
    FaTools
  ];
  
  return (
    <div className='w-full'>
        <section>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt=""
            src={res}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.
          </h2>

          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est
            esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam
            architecto eius quis quibusdam fugiat dicta.
          </p>

          <a
            href="#"
            className="mt-8 inline-block rounded border border-red-700 bg-red-600 px-12 py-3 text-sm font-medium text-white hover:bg-red-600 hover:text-white focus:outline-none focus:ring active:text-indigo-500"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

export default Services;
