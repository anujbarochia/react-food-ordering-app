import React, { useState } from "react";
import ShowRestaurant from "../components/ShowRestaurant";
import resList from "../utils/mockData.js";

const Body = () => {
  let [restaurantList, setRestaurantList] = useState(resList);
  return (
    <div className="body bg-yellow-200 p-[1rem]">
      <div className="Search m-2 bg-slate-200 border-slate-800 border-solid border-2 rounded-md">
        Search
      </div>
      <button
        className="bg-blue-200 p-2 rounded-md ml-3"
        onClick={() => {
          const filteredList = restaurantList.filter(
            (el) => el.card.card.info.avgRating > 4
          );
          setRestaurantList(filteredList);
        }}
      >
        {" "}
        Top Rated Restaurant{" "}
      </button>
      <button
        className="bg-blue-200 p-2 rounded-md ml-2"
        onClick={() => {
          setRestaurantList(resList);
        }}
      >
        {" "}
        See All{" "}
      </button>
      <div className="res-container flex-wrap justify-center flex">
        <ShowRestaurant restaurantList={restaurantList} />
      </div>
    </div>
  );
};

export default Body;
