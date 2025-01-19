import React from "react";
import {
  footerAbout,
  footerCatgory,
  footerLocation,
  footerShops,
  footerSupport,
} from "../constants";
import headingBottomBorder from "../assets/headingBottomBorder.png";
import sanaaLogoWhite from "../assets/sanaaLogoWhite3.png";
import googlePlay from "../assets/googlePlay.png";
import appleStore from "../assets/appleStore.png";
import payment from "../assets/paymentMode.png";
import footerTexture from "../assets/footerTexture1.jpg";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center  bg-[#f9faf5] pt-5 mt-5">
      <div className="flex justify-center items-center lg:w-[70rem] lg:h-[6rem] ">
        <div className="flex flex-col lg:flex-row justify-between items-center  w-full h-full gap-5">
          <h1 className="text-xl lg:text-3xl font-semibold ">
            Ready to get started? Sign Up
          </h1>
          <div className="flex gap-4">
            <div className="bg-[#ffffff]  border rounded-3xl w-[8rem] text-center  overflow-hidden">
              <button className="bg-transparent hover:bg-[#f0f0f0] hover:text-gray-800  transition duration-300 w-full h-full p-2">
                Sign Up
              </button>
            </div>
            <div className="bg-[#060] text-[#ffffff]  border  rounded-3xl w-[8rem] text-center overflow-hidden">
              <button className="bg-transparent text-white hover:bg-green-700 hover:text-gray-200 transition duration-300 w-full h-full p-2">
                Contact Us
              </button>
            </div>
            {/* <div className="bg-[#060] text-[#ffffff] p-2 border rounded-3xl w-[8rem] text-center">
              <button>Contact Us</button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="aspect-square  flex justify-center w-full lg:h-[16rem] bg-[#000000] mt-5">
        <div className=" border-white  lg:w-[70rem] lg:h-full  grid grid-cols-2 lg:grid-cols-5">
          <ul className="text-white  p-5">
            {footerCatgory.map((item) => (
              <li className="py-1 ">
                <div className="">
                  {item.heading && (
                    <div className="relative ">
                      <h1 className="text-xl font-semibold">{item.heading}</h1>
                      <div className="">
                        <img
                          src={headingBottomBorder}
                          alt=""
                          className="w-[5rem] h-[2rem]"
                        />
                      </div>
                    </div>
                  )}

                  <div className="text-gray-400 -translate-y-2 cursor-pointer hover:text-green-500 transition duration-300">
                    {item.item}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <ul className="text-white p-5">
            {footerShops.map((item) => (
              <li>
                <div className="">
                  {item.heading && (
                    <div className="relative ">
                      <h1 className="text-xl font-semibold">{item.heading}</h1>
                      <div className="">
                        <img
                          src={headingBottomBorder}
                          alt=""
                          className="w-[5rem] h-[2rem]"
                        />
                      </div>
                    </div>
                  )}

                  <div className="text-gray-400 -translate-y-2 cursor-pointer hover:text-green-500 transition duration-300">
                    {item.item}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <ul className="text-white p-5">
            {footerAbout.map((item) => (
              <li>
                <div className="">
                  {item.heading && (
                    <div className="relative ">
                      <h1 className="text-xl font-semibold">{item.heading}</h1>
                      <div className="">
                        <img
                          src={headingBottomBorder}
                          alt=""
                          className="w-[5rem] h-[2rem]"
                        />
                      </div>
                    </div>
                  )}

                  <div className="text-gray-400 -translate-y-2 cursor-pointer hover:text-green-500 transition duration-300">
                    {item.item}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <ul className="text-white p-5">
            {footerSupport.map((item) => (
              <li>
                <div className="">
                  {item.heading && (
                    <div className="relative ">
                      <h1 className="text-xl font-semibold">{item.heading}</h1>
                      <div className="">
                        <img
                          src={headingBottomBorder}
                          alt=""
                          className="w-[5rem] h-[2rem]"
                        />
                      </div>
                    </div>
                  )}

                  <div className="text-gray-400 -translate-y-2 cursor-pointer hover:text-green-500 transition duration-300">
                    {item.item}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <ul className="text-white p-5">
            {footerLocation.map((item) => (
              <li>
                <div className="">
                  {item.heading && (
                    <div className="relative ">
                      <h1 className="text-xl font-semibold">{item.heading}</h1>
                      <div className="">
                        <img
                          src={headingBottomBorder}
                          alt=""
                          className="w-[5rem] h-[2rem]"
                        />
                      </div>
                    </div>
                  )}

                  <div className="text-gray-400 -translate-y-2 cursor-pointer hover:text-green-500 transition duration-300">
                    {item.item}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="aspect-square w-full lg:h-[10rem] bg-[#000000] flex justify-center py-10">
        <div className="w-full lg:w-[70rem] flex flex-col lg:justify-between lg:flex-row items-center gap-10">
          <div className="">
            <div className="">
              <img
                src={sanaaLogoWhite}
                alt=""
                className="w-[15rem] shadow-sm  "
              />
            </div>
            <div className="mt-2">
              <ul className="flex gap-5 px-5">
                <li className="w-8 h-8 ">
                  <div className="bg-[#1e1e1e] w-full h-full rounded-lg text-[#1e1e1e]">
                    <a href="https://www.facebook.com/">
                      <Facebook fill="white" className="w-full h-full p-1" />
                    </a>
                  </div>
                </li>
                <li className="w-8 h-8 ">
                  <div className="bg-[#1e1e1e] w-full h-full rounded-lg text-[#1e1e1e]">
                    <a href="https://www.instagram.com/">
                      <Instagram fill="white" className="w-full h-full p-1" />
                    </a>
                  </div>
                </li>
                <li className="w-8 h-8 ">
                  <div className="bg-[#1e1e1e] w-full h-full rounded-lg text-[#1e1e1e]">
                    <a href="https://twitter.com/">
                      <Twitter fill="white" className="w-full h-full p-1" />
                    </a>
                  </div>
                </li>
                <li className="w-8 h-8 ">
                  <div className="bg-[#1e1e1e] w-full h-full rounded-lg text-[#1e1e1e]">
                    <a href="https://linkedin.com/">
                      <Linkedin fill="white" className="w-full h-full p-1" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-5 ">
            <div className="text-gray-50 text-3xl font-semibold">
              Download The App{" "}
            </div>
            <div className="">
              <ul className="flex gap-2">
                <li>
                  <div className="border rounded-lg overflow-hidden">
                    <a href="https://play.google.com/store">
                      <img src={googlePlay} alt="" className="w-[9rem]" />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="border rounded-lg overflow-hidden">
                    <a href="https://www.apple.com/in/store">
                      <img src={appleStore} alt="" className="w-[10rem]" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#000000] w-full flex justify-center py-2">
        <div className="w-full lg:w-[70rem]  border-b-2"></div>
      </div>
      <div className="bg-[#000000] w-full lg:h-[4rem] flex justify-center py-2">
        <div className="w-full lg:w-[70rem]   text-white flex flex-col  lg:flex-row justify-between items-center gap-5">
          <div className="text-center  ">
            Powered by State Department for Culture and Heritage{" "}
          </div>
          <div className="-translate-x-[2rem] lg:-translate-x-[5rem]">
            <img src={payment} alt="" srcset="" className=" h-[2.5rem]" />
          </div>
          <div className="text-center">© 2024, All rights reserved</div>
        </div>
      </div>
      <div className="w-full h-[1.5rem]  overflow-hidden bg-black pt-1">
        <img src={footerTexture} alt="" className="h-full w-full" />
      </div>
    </div>
  );
};

export default Footer;
// jai shree ram
