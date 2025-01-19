import React, { useRef } from "react";
import Dropdown from "./subComponents/Dropdown";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SecondaryHeader = () => {
  const Accessories = [
    {
      id: 1,
      items: "Jewelry",
    },
    {
      id: 2,
      items: "Watches",
    },
    {
      id: 3,
      items: "Bags",
    },
    {
      id: 4,
      items: "Hats",
    },
    {
      id: 5,
      items: "Sunglasses",
    },
  ];

  const ClothingAndShoes = [
    {
      id: 1,
      items: "Men's Clothing",
    },
    {
      id: 2,
      items: "Women's Clothing",
    },
    {
      id: 3,
      items: "Shoes",
    },
  ];

  const HomeLiving = [
    {
      id: 1,
      items: "Furniture",
    },
    {
      id: 2,
      items: "Home Décor",
    },
    {
      id: 3,
      items: "Kitchen & Dining",
    },
    {
      id: 4,
      items: "Bedding",
    },
  ];

  const Art = [
    {
      id: 1,
      items: "Paintings",
    },
    {
      id: 2,
      items: "Sculptures",
    },
    {
      id: 3,
      items: "Photography",
    },
    {
      id: 4,
      items: "Craft Supplies",
    },
  ];

  const AboutUs = [
    {
      id: 1,
      items: "Our Story",
    },
    {
      id: 2,
      items: "Mission & Vision",
    },
    {
      id: 3,
      items: "Meet the Team",
    },
    {
      id: 4,
      items: "Testimonials",
    },
  ];
  const NewsAndMedia = [
    {
      id: 1,
      items: "Latest News",
    },
    {
      id: 2,
      items: "Press Releases",
    },
    {
      id: 3,
      items: "Blog",
    },
    {
      id: 4,
      items: "Events",
    },
  ];

  const Sell = [
    {
      id: 1,
      items: "How to Sell",
    },
    {
      id: 2,
      items: "Seller Dashboard",
    },
    {
      id: 3,
      items: "Policies for Sellers",
    },
    {
      id: 4,
      items: "Help Center",
    },
  ];

  const scrollContainer = useRef(null);

  // Scroll to the left
  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: -200, // Adjust this value for scroll speed
        behavior: "smooth",
      });
    }
  };

  // Scroll to the right
  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: 200, // Adjust this value for scroll speed
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="flex justify-center items-center bg-[#f5f5f5] border  py-4">
      <div className="relative w-full lg:w-[85rem]  ">
        {/* Left Arrow Button (visible on all screen sizes) */}
        <ChevronLeft
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#f5f5f5] text-gray-500  sm:block lg:hidden cursor-pointer w-[2.5rem] h-[2.5rem] p-2"
          onClick={scrollLeft}
        />

        <div
          ref={scrollContainer}
          className="flex lg:flex-row gap-5 h-[2rem] justify-start items-center overflow-x-auto whitespace-nowrap w-full   scroll-container"
        >
          <Dropdown options={Accessories} title="Accessories" />
          <Dropdown options={ClothingAndShoes} title="Clothing & Shoes" />
          <Dropdown options={HomeLiving} title="Home Living" />
          <Dropdown options={Art} title="Art" />
          <Dropdown options={AboutUs} title="About Us" />
          <Dropdown options={NewsAndMedia} title="News & Media" />
          <Dropdown options={Sell} title="Sell" />
        </div>
        {/* Right Arrow Button (visible on all screen sizes) */}

        <ChevronRight
          className="absolute right-0 top-1/2 transform -translate-y-1/2  w-[2.5rem] h-[2.5rem] bg-[#f5f5f5] text-gray-500 sm:block lg:hidden cursor-pointer p-2 "
          onClick={scrollRight}
        />
      </div>
    </div>
  );
};

export default SecondaryHeader;
