import React from "react";
import { categoryAssets } from "../constants";
import category1 from "../assets/categoryAssets/category2.jpeg";
import leftVector from "../assets/categoryAssets/leftVector.png";
import rightVector from "../assets/categoryAssets/rightVector.png";
import { ArrowUpRight, MoveUpIcon } from "lucide-react";
const ShopCategory = () => {
  return (
    <div className="relative  border-green-600 lg:h-[35rem] pt-8 lg:pt-20 bg-[#f9faf5]">
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-[#bc0000] uppercase font-semibold text-[1.1rem]">
          Shop by Category
        </p>
        <h1 className="text-center text-xl lg:text-5xl font-bold">
          <div className="">Designed by Artists, Made by Us,</div>
          <div> Just for You</div>
        </h1>
      </div>
      <div className="pt-8">
        <ul className="grid grid-cols-2 sm:grid-cols-3 p-2 md:grid-cols-4 lg:grid-cols-5 lg:flex justify-center items-center gap-5 lg:h-[20rem] ">
          {categoryAssets.map((item) => (
            <li
              key={item.id}
              className="h-[11rem] lg:w-[14rem] lg:h-[16rem] flex flex-col justify-between items-center  "
            >
              <div className="flex rounded-full overflow-hidden hover:border-2 hover:border-dashed hover:border-[#7f4044] hover:p-1 ">
                <div className="relative aspect-square w-[8rem] lg:h-[12rem] lg:w-[12rem] rounded-full overflow-hidden ">
                  <img
                    src={item.img}
                    alt=""
                    className="absolute inset-0 w-full h-full"
                  />
                  <div className="relative inset-0 w-full h-full opacity-0 hover:opacity-50 bg-black text-white overflow-hidden rounded-full">
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white">
                      <ArrowUpRight className="stroke-white lg:w-[2rem] lg:h-[5rem]" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="w-[7rem] lg:w-[12rem] text-center  mt-2 text-sm lg:text-[1rem] font-semibold">
                {item.element}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <img
          src={leftVector}
          alt=""
          className="absolute left-0 top-1 lg:-translate-y-[5rem] w-[4rem] lg:w-[8rem]"
        />
      </div>
      <div className="">
        <img
          src={rightVector}
          alt=""
          className="absolute right-0 top-1 lg:-translate-y-[5rem] w-[4rem] lg:w-[8rem]"
        />
      </div>
    </div>
  );
};

export default ShopCategory;

// jai shree ram
// jai shree ram
