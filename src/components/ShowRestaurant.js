import React from "react";
import RestaurantCard from "./RestaurantCard.js";
import NoSuchRestaurant from "./NoSuchRestaurant.js";

function ShowRestaurant({ filteredRestaurantList }) {
  return filteredRestaurantList.length === 0 ? (
    <NoSuchRestaurant />
  ) : (
    <>
      {filteredRestaurantList.map((object) => {
        return <RestaurantCard key={object.card.card.info.id} obj={object} />;
      })}
    </>
  );
}

export default ShowRestaurant;
