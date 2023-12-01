import React from "react";
import RestaurantCard from "./RestaurantCard.js";
import Header from "./Header.js";
import ShowRestaurant from "./ShowRestaurant.js";
/**
 * header
 *  - Logo
 *  - Nav Items
 * body
 *  - Search
 *  - Restaurant Container
 *    - Restaurnat Card
 * footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

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

function AppLayout() {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default AppLayout;
