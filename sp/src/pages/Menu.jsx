import React, { useState } from 'react';
import v1 from "../assets/main3.mp4";
import Fooddata from "../components/data";
import swiggy from "../assets/s.png";
import zomato from "../assets/z.logomain.png";

function Menu() {
  const [menu, setMenu] = useState(Fooddata);

  const filterItems = (curitems) => {
    const updatedItems = Fooddata.filter((cur) => cur.category === curitems);
    setMenu(updatedItems);
  };

  const categoryColors = {
    "Soups": "bg-red-700",
    "Chinese Starters(Veg)": "bg-red-700",
    "Chinese Starters(NonVeg)": "bg-red-700",
    "Noodles and Rice Veg": "bg-red-700",
    "Momos": "bg-red-700",
    "Chopsy": "bg-red-700",
    "MainCourse(Veg)": "bg-red-700",
    "MainCourse(NonVeg)": "bg-red-700",
    "Combo(Veg)": "bg-red-700",
    "Veg Thali Combo": "bg-red-700",
    "NonVeg Thali Combo": "bg-red-700",
    "All": "bg-red-700"
  };

  return (
    <div className="pb-8"> {/* Added margin bottom here */}
      {/* Menu banner */}
      <div className="relative w-full">
        <video autoPlay loop muted className="absolute inset-0 object-cover w-full h-full z-0">
          <source src={v1} type="video/mp4" />
        </video>
        <div className="relative z-10 h-screen flex justify-center items-center">
          <div className="max-w-screen-2xl w-full xl:px-20 px-4 mx-auto flex flex-col py-12 md:py-24 items-center gap-8 relative">
            <div className="w-full space-y-7 px-4 text-center flex flex-col items-center">
              <h2 className="md:text-5xl text-4xl text-center font-bold md:leading-snug leading-snug text-white">
                For The Love Of Delicious
                <span className="text-yellow px-2">Food</span>
              </h2>
              <p className="md:w-4/5 mx-auto text-xl text-white">
                Come with family & feel the joy of mouthwatering food such as Greek Salad, Lasagne, Butternut pumpkin,
                Tokusen Wagyu, Olivas Rellenas and more for a moderate cost
              </p>
              <button className="bg-yellow px-8 py-3 font-semibold text-white rounded-full hover:bg-black">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="section-container btn-container flex items-center justify-center mt-6"> {/* Adjusted margin top here */}
        <div className="flex flex-wrap justify-center items-center gap-4 p-4 w-full">
          {Object.keys(categoryColors).map((category) => (
            <button
              key={category}
              className={`btn text-center text-white ${categoryColors[category]}`}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Food Items Section */}
      <div className="mt-3 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 section-container">
          {menu.map((el, index) => (
            <div
              key={index}
              className="card card-compact w-full max-w-sm bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <figure className="h-48">
                <img src={el.imgdata} alt="Food" className="h-full w-full object-cover" />
              </figure>
              <div className="card-body">
                <div className="flex justify-between items-center">
                  <h2 className="card-title text-lg font-semibold">{el.rname}</h2>
                  <span className="bg-red-700 text-white rounded px-2 py-1 text-sm">3.8★</span>
                </div>
                <div className="lower_data my-2">
                  <h5 className="text-gray-500">North India, Biryani, Mughlai</h5>
                </div>
                <div className="border-b-2 mb-2"></div>
                <div className="lower_data">
                  <p className="text-sm text-gray-600">1175+ orders placed from here recently</p>
                </div>
                <div className="flex justify-around mt-4">
                  <a href=""><img src={swiggy} alt="Swiggy" className="h-16 w-auto" /></a>
                  <a href=""><img src={zomato} alt="Zomato" className="h-12 w-auto" /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
