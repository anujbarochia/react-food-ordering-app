import React from "react";

function Search({
  setPrevSearch,
  searchText,
  setSearchText,
  restaurantList,
  setFilteredRestaurantList,
}) {
  return (
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
        onClick={() => {
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
  );
}

export default Search;
