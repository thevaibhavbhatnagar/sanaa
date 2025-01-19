import React, { useState } from "react";
import sanaaLogo from "../assets/sanaaLogo.png";
import { Search, ShoppingCart, User } from "lucide-react";
const PrimaryHeader = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="flex justify-center items-center h-[5rem] p-2">
      <div className="flex w-full lg:w-[85rem] justify-between items-center">
        <div className="flex">
          <img
            src={sanaaLogo}
            alt="sanaa logo not found"
            className="w-[11rem]"
          />
        </div>

        <div className="flex ">
          <div className="flex  py-2 px-2 gap-2 md:w-[25rem]  lg:w-[25rem] md:bg-[#f5f5f5] lg:bg-[#f5f5f5]  lg:border lg:rounded-md ">
            <Search className="stroke-gray-400 w-5 " />
            <input
              type="text"
              value={search}
              name="search"
              placeholder={`Search essentials, groceries and more...`}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="  w-[3rem] md:bg-[#f5f5f5] lg:bg-[#f5f5f5] md:flex lg:flex md:w-full lg:w-full "
            />
          </div>
          <div className="flex justify-center items-center px-5 gap-2 lg:gap-5 text-sm ">
            <div className="flex gap-[0.8rem]">
              <User className="w-5 stroke-[#bc0000]" />
              <div className="hidden lg:flex font-semibold">Log In</div>
            </div>
            <div className="border-l-2 h-4 mx-2 border-[#000000]"></div>
            <div className="flex  gap-[0.8rem]">
              <ShoppingCart className="w-5 stroke-[#bc0000]" />
              <div className="hidden lg:flex font-semibold">Cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryHeader;
