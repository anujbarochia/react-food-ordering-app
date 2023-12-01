import React from "react";

function RestaurantCard() {
  return (
    <div className="res-cards m-2 w-48 h-72 border-solid border-[3px] bg-stone-800 hover:border-yellow-300 hover:ring-2 ring-stone-600 hover:cursor-pointer">
      <div className="relative">
        <img
          src="https://www.foodiesfeed.com/wp-content/uploads/2023/08/fruit-tartelette-macro.jpg"
          alt=""
          className="
           logo w-48 h-[130px] object-cover"
        />
        <h3 className="absolute bottom-0 left-0 w-full text-[14px] text-bold text-center p-2 bg-gray-400 bg-opacity-70">
          Day & Night Dhaba
        </h3>
      </div>
      <div className="text-gray-50 h-auto w-full p-2">
        <h4 className="text-[12px] leading-5 m-1 p-1 text-slate-300">
          Ratings : <span>4.3 </span>
        </h4>
        <h4 className="text-[12px] leading-[14px] m-1 p-1 text-bold text-red-200">
          Burgers, South Indian, North Indian
        </h4>
        <span className="flex space-x-[4px] text-[12px] leading-5 mx-1 px-1 mt-[2px] text-slate-300">
          <h4 className="">37mins</h4>
          <h4> - </h4>
          <h4 className=""> 3.4km</h4>
        </span>
      </div>
    </div>
  );
}

export default RestaurantCard;
