import React from "react";
import RestaurantCard from "./RestaurantCard.js";

function ShowRestaurant({ restaurantList }) {
  return (
    <>
      {restaurantList.map((object) => {
        return <RestaurantCard key={object.card.card.info.id} obj={object} />;
      })}
    </>
  );
}

export default ShowRestaurant;
