import React from 'react';
import img1 from "../assets/i1.jpg";
import img2 from "../assets/i2.jpg";
import img3 from "../assets/n.jpg";
import img4 from "../assets/r.jpg";
import img5 from "../assets/s1.jpg";
import img6 from "../assets/s2.jpg";
import img7 from "../assets/s3.jpg";
import img8 from "../assets/m2.jpg";
import img9 from "../assets/m3.jpg";
import img10 from "../assets/c2.jpg";
function Categories() {
  const categoryItems = [
    { id: 1, title: "Main Course", image: img1, image2: img8 },
    { id: 2, title: "Chinese Starters", image: img2 , image2: img10 },
    { id: 3, title: "Noodles & Rice", image: img3, image2: img4 },
    { id: 4, title: "Soups", image: img7 , image2: img5 }
  ];

  return (
    <>
      <div className='max-w-screen-2xl xl:px-20 px-4 py-24 mx-auto text-center mt-[200px] md:mt-11'>
        <p className='subtitle'>Customer Categories</p>
        <h2 className='title'>Popular Categories</h2>
      </div>
      {/* category cards */}
      <div className='flex flex-col sm:flex-row flex-wrap gap-12 justify-center items-center mt-2'>
        {categoryItems.map((item) => (
          <a key={item.id} href="#" className="group relative block w-full sm:w-[48%] lg:w-[22%]">
            <div className="relative h-[350px] sm:h-[450px]">
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-300"
              />
              {item.image2 && (
                <img
                  src={item.image2}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              )}
            </div>
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6 bg-gradient-to-t from-black to-transparent">
              <h3 className="text-xl font-medium text-white">{item.title}</h3>
              <p className="mt-1.5 text-pretty text-xs text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi dicta impedit aperiam ipsum!
              </p>
              <span className="mt-3 inline-block bg-red-700 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                View Menu
              </span>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default Categories;
