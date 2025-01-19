import { Heart, Star } from "lucide-react";
import React from "react";
import RatingStar from "./subComponents/RatingStar";
import { recommendedCardData } from "../constants";
const Recommended = () => {
  return (
    <div className=" flex justify-center bg-[#f9faf5] py-10 ">
      <div className=" flex  flex-col gap-8 w-full lg:w-[70rem]">
        {/* <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold p-8">
          Recommended for you
        </h1> */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold p-8">
            Recommended for you
          </h1>
          <div className="hidden lg:flex lg:flex-row lg:w-[6rem] text-gray-50 p-1 bg-[#318531] border rounded-3xl lg:text-center lg:justify-center hover:bg-green-700 hover:text-gray-200 transition duration-300 cursor-pointer">
            See All
          </div>
        </div>
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 ">
          {recommendedCardData.map((item) => (
            <li className="flex justify-center h-[23rem] border-green-500   rounded-2xl">
              <div className="relative flex flex-col gap-2 shadow-xl w-[15rem] rounded-2xl overflow-hidden bg-[#ffffff]">
                <div className="absolute flex justify-between">
                  <div className="flex w-[14rem] justify-between items-center m-2">
                    <div className="bg-[#bc1320] rounded-md text-[#f2f2f2] text-[0.8rem] px-1">
                      {item.discount || item.sale}
                    </div>
                    <div className="bg-[#f2f2f2] border rounded-full p-[0.2rem] ">
                      <Heart className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-[10rem] object-cover "
                  />
                </div>
                <div className="font-semibold px-4 text-[1rem]">
                  {item.title}
                </div>
                <div className="text-gray-500 px-4 -translate-y-1 text-[1rem]">
                  {item.seller}
                </div>
                <div className="px-2">
                  <RatingStar defaultRating={item.star} />
                </div>
                <div className="text-green-800 text-[1.2rem] font-semibold px-4">
                  {item.price}
                </div>
                {item.availability ? (
                  <div className="bg-gray-950 text-gray-50 p-[0.3rem] border rounded-3xl text-center m-1 -translate-y-1">
                    <button>Add to Basket</button>
                  </div>
                ) : (
                  <div className=""></div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recommended;

{
  /* <div className="relative flex flex-col gap-2 shadow-xl w-[15rem] rounded-2xl overflow-hidden    ">
        <div className="absolute  flex justify-between">
          <div className="flex w-[14rem] justify-between items-center m-2">
            <div className="bg-[#bc1320] rounded-md text-[#f2f2f2] text-[0.8rem] px-1">
              Save 5%
            </div>
            <div className="bg-[#f2f2f2] border rounded-full p-[0.2rem] ">
              <Heart className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="">
          <img src={category4} alt="" />
        </div>
        <div className="font-semibold px-2">
          A carved wood Kamba tribal figure, Kenya, East Africa
        </div>
        <div className="text-gray-500 px-2 -translate-y-1">
          by Kamba Antiques
        </div>
        <div className="px-2">
           <RatingStar/>
        </div>
        <div className="text-green-800 text-xl font-semibold px-2">KES 7,000</div>
        <div className="bg-gray-950 text-gray-50 p-[0.5rem] border rounded-3xl text-center m-2">
          <button>Add to Basket</button>
        </div>
      </div> */
}

// jai shree ram
