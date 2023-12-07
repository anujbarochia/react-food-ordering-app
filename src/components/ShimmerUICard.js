import React from "react";

function ShimmerUICard() {
  return (
    <div className="shimmer-card m-2 w-48 h-72 rounded-sm bg-[#b9b3b3] bg-opacity-20">
      <div className="w-48 h-[130px] bg-[#b9b3b3] bg-opacity-30 "></div>
      <div className="h-[142px] w-48 bg-[#b9b3b3] bg-opacity-20  ">
        <h4 className=" w-3/4 px-4 p-4 mt-4 ml-2 bg-[#b9b3b3] bg-opacity-30 rounded-3xl "></h4>
        <h4 className="h-[11px]"></h4>
        <h4 className="h-[14px] w-2/3 p-2 ml-2 bg-[#b9b3b3] bg-opacity-20 rounded-3xl"></h4>
        <h4 className=" w-3/4 px-4 p-4 mt-4 ml-2 bg-[#b9b3b3] bg-opacity-30 rounded-3xl "></h4>
        <h4 className="h-[11px]"></h4>
        <h4 className="h-[14px] w-1/2 p-2 ml-2 bg-[#b9b3b3] bg-opacity-20 rounded-3xl"></h4>
      </div>
    </div>
  );
}

export default ShimmerUICard;
