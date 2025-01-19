import React from "react";
import vendor1 from "../assets/ourVendor/vendor1.jpg";
import { ourVendor } from "../constants";

const OurVendors = () => {
  return (
    <div className="flex lg:justify-center py-5 ">
      <div className=" w-full lg:w-[70rem] px-10 flex flex-col gap-10   ">
        <div className="">
          <h1 className="text-[#bc0000] uppercase font-semibold text-[1.1rem]">
            our Shops
          </h1>
          <div className="flex lg:flex-row justify-between items-center">
            <div className="text-3xl font-bold lg:text-5xl lg:font-bold ">
              Discover Our Vendor
            </div>
            <div className="hidden lg:flex lg:flex-row lg:w-[6rem] text-gray-50 p-1 bg-[#318531] border rounded-3xl lg:text-center lg:justify-center hover:bg-green-700 hover:text-gray-200 transition duration-300 cursor-pointer">
              See All
            </div>
          </div>
        </div>
        <div className="">
          <ul className="grid grid-cols-2 justify-center lg:grid-cols-4 gap-5 ">
            {ourVendor.map((item) => (
              <li className="border-green-800 flex justify-center ">
                <div
                  className={`relative w-[10rem] sm:w-[12rem]  h-[12rem] lg:w-[15rem] lg:h-[15rem]  rounded-2xl lg:rounded-3xl `}
                  style={{ backgroundColor: item.color }}
                >
                  <img
                    src={item.img}
                    alt=""
                    className="absolute  w-[9rem] h-[7rem] sm:w-[12rem] sm:h-[8rem] sm:-translate-x-1 lg:w-[14rem] lg:h-[10rem] left-1 top-3 rounded-3xl p-2 lg:translate-x-1"
                  />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-sm lg:text-[1.1rem] w-full text-center py-2 ">
                    {item.name}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurVendors;
