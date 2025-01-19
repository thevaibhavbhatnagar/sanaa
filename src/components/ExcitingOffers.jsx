import React from 'react'
import ExcitingOffers1 from "../assets/excitingOffersAssets/ExcitingOffers1.jpg";
const ExcitingOffers = () => {
  return (
    <div className="flex justify-center bg-[#f9faf5] pt-[5rem] lg:h-[25rem] p-8">
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl lg:text-5xl font-bold">Exciting Offers</h1>
        <ul className="grid grid-cols-2 lg:grid-cols-3 gap-10">
          {Array.from({ length: 3 }).map((item, _index) => (
            <li>
              <img
                src={ExcitingOffers1}
                className="w-[20rem] border rounded-2xl"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExcitingOffers