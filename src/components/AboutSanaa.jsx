import React from "react";
import AboutUsImage from "../assets/AboutUs/AboutUsImage.png";
import aboutDesign from "../assets/AboutUs/aboutDesign.png";
import curvedLine from "../assets/AboutUs/curvedLine.png";
import { ArrowRight } from "lucide-react";
const AboutSanaa = () => {
  const about = [
    {
      id: 0,
      title: "About Sanaa",
      desc: "Welcome to Sanaa, where every purchase tells a story of empowerment, tradition, and positive change. We re more than just an ecommerce platform we re a gateway to the rich tapestry of Kenyan heritage, all while making a direct positive impact on the communities that create these incredible treasures.",
      button: "Read More",
    },
  ];
  return (
    <div>
      <div className="relative  aspect-square w-full h-full lg:h-[25rem] border-green-500 flex flex-col lg:flex-row">
        <div className="aspect-square  w-full h-full bg-black text-[#ffffff]">
          <div className="">
            <img src={aboutDesign} alt="" className="absolute h-full " />
          </div>
          <div className=" border-pink-300 ml-[4rem] lg:ml-[5rem] h-full flex justify-center items-center">
            <div className=" border-red-600 flex flex-col gap-5">
              <div className="relative  ">
                <h1 className="text-2xl font-bold md:text-3xl md:font-semibold lg:text-5xl lg:font-bold">
                  {" "}
                  {about[0].title}
                </h1>
                <div className="">
                  <img
                    src={curvedLine}
                    alt=""
                    className="absolute w-[10rem] h-39 -translate-y-11 -translate-x-6  rotate-180"
                  />
                </div>
              </div>
              <div className="text-[0.6rem] sm:text-[0.8rem] lg:text-[1.2rem] pt-10">
                {" "}
                {about[0].desc}
              </div>
              <div className="flex border  w-[6rem] lg:w-[11rem] justify-between  items-center p-[0.1rem] lg:p-[0.7rem] rounded-3xl cursor-pointer hover:text-green-500 transition duration-300">
                <p className="text-[0.7rem] lg:text-[1.2rem] px-2 ">
                  {about[0].button}
                </p>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
        <div className="aspect-square  border-blue-600 w-full">
          <img
            src={AboutUsImage}
            alt=""
            className="w-full h-full object-cover lg:object-fill"
          />
        </div>
      </div>
      {/* <div className="relative border border-green-600   flex flex-col lg:flex-row justify-between h-[30rem] w-full">
        <div className="aspect-square border border-red-700 bg-black w-full h-full text-white flex justify-center items-center  py-5 pl-8 ">
          <div className="flex h-full">
            <img
              src={aboutDesign}
              alt=""
              className="absolute h-[27rem] lg:h-full inset-0 left-0"
              // className=" h-[20rem] sm:h-[18rem] lg:h-[30.5rem]"
            />
          </div>
          {/* <div className="relative border border-blue-900 w-full h-full lg:w-full lg:h-full flex flex-col gap-5 p-5 mx-10 my-8">
            <div className="relative border ">
              <h1 className="text-2xl font-bold md:text-3xl md:font-semibold lg:text-5xl lg:font-bold">
                {" "}
                {about[0].title}
              </h1>
              <div className="">
                <img
                  src={curvedLine}
                  alt=""
                  className="absolute w-[10rem] h-39 -translate-y-11 -translate-x-6 border rotate-180"
                />
              </div>
            </div>
            <div className="text-[0.6rem] sm:text-[0.8rem] lg:text-[1.3rem] pt-10">
              {" "}
              {about[0].desc}
            </div>
            <div className="flex border w-[8rem] lg:w-[11rem] justify-between  items-center p-[0.3rem] lg:p-[0.7rem] rounded-3xl">
              <p className="text-[0.8rem] lg:text-[1.2rem] px-2">
                {about[0].button}
              </p>
              <ArrowRight />
            </div>
          </div> */}
      {/* </div>
        <div className="border border-blue-600  w-full h-full lg:overflow-hidden ">
          <img
            src={AboutUsImage}
            alt=""
            srcset=""
            className="w-full h-full object-cover"
          /> */}
      {/* </div> */}
      {/* </div>  */}
    </div>
  );
};

export default AboutSanaa;
// jai shree ram
