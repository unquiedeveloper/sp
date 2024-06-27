import React from 'react';
import i2 from "../assets/i1.jpg";
import i3 from "../assets/i2.jpg";
import b3 from "../assets/m2.jpg";
import c from "../assets/1.png";
import s from "../assets/s.png";
import z from "../assets/z.logomain.png";

function Contact() {
  return (
    <>
      <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <div className="carousel w-full h-full">
          <div id="slide1" className="carousel-item relative w-full h-full">
            <img src={i2} className="w-full h-full object-cover" alt="Slide 1" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full h-full">
            <img src={i3} className="w-full h-full object-cover" alt="Slide 2" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full h-full">
            <img src={b3} className="w-full h-full object-cover" alt="Slide 3" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full h-full">
            <img src={i3} className="w-full h-full object-cover" alt="Slide 4" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl font-extrabold sm:text-5xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod alias doloribus impedit.
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt="Decorative"
                src={c}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-16 flex flex-col items-center justify-center">
              <article className="space-y-4 text-gray-600 text-center">
                <h2 className="text-4xl font-extrabold">Order Now</h2>
                <div className='flex justify-center items-center space-x-4'>
                  <a href=""> <img src={s} alt="Order" className="h-48 w-48" /></a>
                  <a href="">  <img src={z} alt="Logo" className="h-44 w-44" /></a>
                 
                
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <header>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between text-center sm:text-left">
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Need help? Talk to our expert.</h1>
              <p className="mt-1.5 text-sm text-gray-500">Talk to our experts</p>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <button
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
                type="button"
              >
                <span className="text-sm font-medium">Contact us</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>

              <button
                className="block rounded-lg bg-red-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-600 focus:outline-none focus:ring"
                type="button"
              >
                8684894051
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Contact;
