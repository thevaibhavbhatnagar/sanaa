import { BadgeCent, Truck } from "lucide-react";
import React from "react";
// jai shree ram
const TopBar = () => {
  return (
    <div className="bg-[#202020] text-gray-50 flex justify-center items-center p-2">
      <div className="flex justify-between items-center w-[85rem] text-sm">
        <div className="">Welcome to Sanaa!</div>
        <div className="flex justify-center items-center p-1 gap-3 lg:gap-5 ">
          <div className="flex gap-1">
            <Truck className="w-4" />
            <div className="hidden lg:flex">Track your order</div>
          </div>
          <div className="border-r h-4 mx-1"></div>
          <div className="flex gap-1">
            <BadgeCent className="w-4" />
            <div className="hidden lg:flex">All Offers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
