import React, { useState, useEffect } from "react";
import ShowRestaurant from "./ShowRestaurant";
import Shimmer from "./ShimmerUI";

// import resList from "../utils/mockData.js";

const Body = () => {
  let [restaurantList, setRestaurantList] = useState([]);
  let [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  let [prevSearch, setPrevSearch] = useState([]);
  let [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
    // Any side effects running here, like setInterval and clearInterval in the return statement
    // setInterval(() => {});
    // return statement runs after the component is unmounted
    // return () => {};
  }, []); //Passing empty array as an argument means that this code will run after the component is rendered
  //
  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/search/v3?lat=23.144477092557135&lng=72.59576804274302&str=pizza&trackingId=undefined&submitAction=ENTER&queryUniqueId=0e2d8325-da05-2696-3b61-54cd923d01ca&selectedPLTab=RESTAURANT"
    );

    const json = await data.json();
    console.log(json);
    console.log("--------------------------------");
    console.log(json.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards);
    // Optional Chaining
    setRestaurantList(
      json.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards
    );
    setFilteredRestaurantList(
      json.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards
    );
  };

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body Rendered");

  // if (restaurantList == 0) {
  //   return <Shimmer />;
  // }

  return (
    <div className="body bg-yellow-200 p-[1rem]">
      <div className="Search ">
        <input
          type="text"
          className="m-2 p-[3px] w-[177px] bg-slate-200 border-slate-700 border-solid border-2 rounded-md"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        {/* bg-slate-600 */}
        <button
          className="p-[6px] cursor-pointer bg-[#1a3738] hover:bg-[#313131] text-gray-50 text-sm  border-slate-700 border-solid border-2 rounded-md"
          onClick={async () => {
            // Filter the restaurants based on the search text, accordingly show the restaurant
            const filterRes = restaurantList.filter((res) =>
              res.card.card.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            console.log(
              `No of Filtered Restaurant on the basis of Search : ${filterRes.length}`
            );
            setPrevSearch(filterRes);
            setFilteredRestaurantList(filterRes);
          }}
          // let value = await filterRes();
          // setFilteredRestaurantList(value);
        >
          Search
        </button>
      </div>
      <button
        className="bg-blue-200 p-[5px] rounded-md ml-3"
        onClick={() => {
          const resList = filteredRestaurantList.filter(
            (el) => el.card.card.info.avgRating >= 4
          );
          setFilteredRestaurantList(resList);
        }}
      >
        {" "}
        Top Rated Restaurant{" "}
      </button>
      <button
        className="bg-blue-200 p-[5px] rounded-md ml-2"
        onClick={() => {
          restaurantList.length === filteredRestaurantList.length
            ? setFilteredRestaurantList(restaurantList)
            : setFilteredRestaurantList(prevSearch);
        }}
      >
        {" "}
        See All{" "}
      </button>
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
