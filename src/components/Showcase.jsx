import React, { useState } from "react";
import showcaseSlider1 from "../assets/showcaseSlider1.jpeg";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Slider } from "../constants";
const Showcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
   const handlePrev = () => {
     setCurrentSlide((prev) => (prev === 0 ? Slider.length - 1 : prev - 1));
   };

   const handleNext = () => {
     setCurrentSlide((prev) => (prev === Slider.length - 1 ? 0 : prev + 1));
   };
  return (
    <div>
      <div className="relative   w-full h-[15rem] lg:h-[30rem] overflow-hidden">
        <ul
          className="w-full h-full flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {Slider.map((item, index) => (
            <li
              className={`relative   w-full h-[15rem] lg:h-[30rem] flex-shrink-0`}
            >
              <div className="">
                <img
                  src={item.img}
                  alt="showcase image"
                  className=" absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="relative bg-black w-full h-full opacity-50"></div>
              <div className="absolute   w-full h-[5rem] top-1/2 -translate-y-10 lg:-translate-y-14 text-3xl lg:text-6xl text-[#f2f2f2] font-semibold text-center ">
                {item.heading}
              </div>
              <div className="absolute text-sm lg:text-xl text-[#f2f2f2] w-full h-[2rem]  top-1/2 lg:translate-y-5 text-center">
                {item.desc}
              </div>
              <div className="absolute w-full h-[2rem] lg:h-[3rem] top-1/2 translate-y-[2.5rem] lg:translate-y-[4.5rem] flex justify-center">
                <div className="flex border-2 rounded-full lg:w-[11rem] justify-center items-center p-2 text-[#f2f2f2] hover:bg-gray-200 hover:text-gray-800 transition duration-300">
                  <button>See Products</button>
                  <ArrowRight />
                </div>
              </div>

              <div className="  absolute top-1/2 text-[#f2f2f2] left-0 cursor-pointer">
                <ChevronLeft
                  className="lg:w-[4rem] lg:h-[4rem]"
                  onClick={handlePrev}
                />
              </div>
              <div
                className="  absolute top-1/2 text-[#f2f2f2] right-0 cursor-pointer "
                onClick={handleNext}
              >
                <ChevronRight className="lg:w-[4rem] lg:h-[4rem] " />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Showcase;

// jai shree ram
// jai shree ram
