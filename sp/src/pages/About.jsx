import React from 'react';
import main from "../assets/v1.mp4";
import res from "../assets/res.jpg";

function About() {
  return (
    <>
      <div className="relative w-full h-screen">
        <video autoPlay loop muted className="absolute inset-0 object-cover w-full h-full z-0">
          <source src={main} type="video/mp4" />
        </video>
        <div className="relative z-10 h-full flex justify-center items-center">
          <div className="max-w-screen-2xl w-full xl:px-20 px-4 mx-auto flex flex-col items-center md:justify-center py-12 md:py-24 gap-8">
            <div className="w-full md:w-1/2 space-y-7 px-4 text-center flex flex-col items-center">
              <h2 className="md:text-5xl text-4xl font-bold leading-snug text-white">
                Dive into Delights of Delectable 
                <span className="text-yellow px-2">Food</span>
              </h2>
              <p className="text-base md:text-xl text-white">
                Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
              </p>
              <button className="bg-yellow px-8 py-3 font-semibold text-white rounded-full bg-red-700">
                View Menu
              </button>
            </div>
          </div>
        </div>
      </div>
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
    </>
  );
}

export default About;
