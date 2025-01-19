import React from "react";
import showcaseSlider1 from "../assets/showcaseSlider1.jpeg";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
const Showcase = () => {
  return (
    <div>
      <div className="relative border border-green-600 w-full h-[15rem] lg:h-[30rem]">
        <div className="">
          <img
            src={showcaseSlider1}
            alt="showcase image"
            className="border border-red-800 absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="relative bg-black w-full h-full opacity-50"></div>
        <div className="absolute border border-white w-full h-[5rem] top-1/2 -translate-y-5 lg:-translate-y-1/2 text-3xl lg:text-6xl text-[#f2f2f2] font-semibold text-center ">
          Discover the Heart of Kenya
        </div>
        <div className="absolute text-sm lg:text-xl text-[#f2f2f2] w-full h-[2rem] border top-1/2 translate-y-5 text-center">
          Shop Authentic Kenyan Treasures With Purpose
        </div>
        <div className="absolute w-full h-[2rem] lg:h-[3rem] border top-1/2 translate-y-[4rem] flex justify-center">
          <div className="flex border-2 rounded-full lg:w-[11rem] justify-center items-center p-2 text-[#f2f2f2]">
            <button>See Products</button>
            <ArrowRight />
          </div>
        </div>

        <div className="border absolute top-1/2 text-[#f2f2f2] left-0">
          <ChevronLeft className="lg:w-[4rem] lg:h-[4rem]" />
        </div>
        <div className="border absolute top-1/2 text-[#f2f2f2] right-0 ">
          <ChevronRight className="lg:w-[4rem] lg:h-[4rem] " />
        </div>
      </div>
    </div>
  );
};

export default Showcase;

// jai shree ram
// jai shree ram
