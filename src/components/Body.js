import React from "react";
import ShowRestaurant from "../components/ShowRestaurant";

const Body = () => {
  return (
    <div className="body bg-yellow-200 p-[1rem]">
      <div className="Search m-2 bg-slate-200 border-slate-800 border-solid border-2 rounded-md">
        Search
      </div>
      <div className="res-container flex-wrap justify-center flex">
        <ShowRestaurant />
      </div>
    </div>
  );
};

export default Body;
