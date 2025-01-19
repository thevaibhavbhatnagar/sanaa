import React from 'react'
import review1 from "../assets/CustomerReview/review1.jpg"
import RatingStar from "../components/subComponents/RatingStar"
import { CustomerReviewData } from '../constants';
const CustomerReview = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-[70rem] h-full flex justify-center items-center flex-col lg:h-[30rem]">
        <div className="">
          <div className="p-5 ">
            <h1 className="text-[#bc1320] text-[1.1rem] uppercase font-semibold">
              Customer Review
            </h1>
            <div className="text-3xl font-semibold lg:text-4xl lg:font-bold">
              Our Customers Say
            </div>
          </div>
          <ul className='flex flex-col lg:flex-row gap-5'>
            {CustomerReviewData.map((item) => (
              <li>
                <div className="border-2 border-[#c1dac1] w-[22rem] h-[18rem] rounded-xl bg-[#f9faf5]">
                  <div className="flex justify-between  items-center p-4">
                    <img src={item.img} alt="" className="border rounded-md" />
                    <div className="-translate-y-5">
                      <RatingStar className="" defaultRating={item.star}/>
                    </div>
                  </div>
                  <div className="p-4 ">
                    <div className="text-2xl font-semibold italic">
                      {item.userName}
                    </div>
                    <div className="text-[0.9rem]">
                       {item.comment}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CustomerReview