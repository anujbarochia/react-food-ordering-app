import React from "react";

function FilterButtons({
  filteredRestaurantList,
  setFilteredRestaurantList,
  restaurantList,
  prevSearch,
}) {
  return (
    <>
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
    </>
  );
}

export default FilterButtons;
