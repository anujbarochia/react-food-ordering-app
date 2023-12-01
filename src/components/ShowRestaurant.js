import React from "react";
import RestaurantCard from "./RestaurantCard.js";
import restaurantList from "../utils/mockData.js";

function ShowRestaurant() {
  return (
    <>
      {restaurantList.map((object) => {
        return <RestaurantCard key={object.card.card.info.id} obj={object} />;
      })}
    </>
  );
}

export default ShowRestaurant;
