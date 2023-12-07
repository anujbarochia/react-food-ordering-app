import React from "react";
import ShimmerUICard from "./ShimmerUICard";

const Shimmer = () => {
  // Creating an array of ShimmerUICard components using map
  const shimmerCards = Array.from({ length: 24 }, (_, index) => (
    <ShimmerUICard key={index} />
  ));
  return (
    <div className="shimmer-container flex flex-wrap justify-center ">
      {shimmerCards}
    </div>
  );
};

export default Shimmer;
