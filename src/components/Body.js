import React, { useState, useEffect } from "react";
import ShowRestaurant from "./ShowRestaurant";
import Shimmer from "./ShimmerUI";
import Search from "./Search";
import FilterButtons from "./FilterButtons";

// import resList from "../utils/mockData.js";

const Body = () => {
  let [restaurantList, setRestaurantList] = useState([]);
  let [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  let [prevSearch, setPrevSearch] = useState([]);
  let [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/search/v3?lat=23.144477092557135&lng=72.59576804274302&str=pizza&trackingId=undefined&submitAction=ENTER&queryUniqueId=0e2d8325-da05-2696-3b61-54cd923d01ca&selectedPLTab=RESTAURANT"
    );

    const json = await data.json();
    // console.log(json);
    // console.log("--------------------------------");
    // console.log(json.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards);
    // Optional Chaining
    setRestaurantList(
      json.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards
    );
    setFilteredRestaurantList(
      json.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards
    );
  };

  useEffect(() => {
    fetchData();
    // Any side effects running here, like setInterval and clearInterval in the return statement
    // setInterval(() => {});
    // return statement runs after the component is unmounted
    // return () => {};
  }, []); //Passing empty array as an argument means that this code will run after the component is rendered
  //

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body Rendered");

  // if (restaurantList == 0) {
  //   return <Shimmer />;
  // }

  // Props
  const mySearchComponentProps = {
    setPrevSearch: setPrevSearch,
    searchText: searchText,
    setSearchText: setSearchText,
    restaurantList: restaurantList,
    setFilteredRestaurantList: setFilteredRestaurantList,
  };
  const filteredButtonsProps = {
    filteredRestaurantList: filteredRestaurantList,
    setFilteredRestaurantList: setFilteredRestaurantList,
    restaurantList: restaurantList,
    prevSearch: prevSearch,
  };

  return (
    <div className="body bg-yellow-200 p-[1rem]">
      <Search {...mySearchComponentProps} />

      <FilterButtons {...filteredButtonsProps} />

      {restaurantList.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container flex-wrap justify-center flex">
          <ShowRestaurant filteredRestaurantList={filteredRestaurantList} />
        </div>
      )}
    </div>
  );
};

export default Body;
