import React from "react";
import RestaurantCard from "./RestaurantCard.js";
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

const Header = () => {
  return (
    <div className="header mx-1 flex justify-between border-solid border-2 border-black">
      <div className="logo-container">
        <img
          className="logo w-20 mx-5"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul className="flex mr-2">
          <li className="p-2 m-2">Home</li>
          <li className="p-2 m-2">About Us</li>
          <li className="p-2 m-2">Contact Us</li>
          <li className="p-2 m-2">Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body bg-yellow-200">
      <div className="Search m-5 bg-slate-200 border-slate-800 border-solid border-2 rounded-md">
        Search
      </div>
      <div className="res-container flex-wrap justify-center flex">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
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
