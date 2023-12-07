import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const handleLoginLogout = () => {
    setBtnName(btnName === "Login" ? "Logout" : "Login");
  };
  return (
    <div className="header mx-1 flex justify-between border-solid border-2 border-black">
      <div className="logo-container">
        <img className="logo w-20 mx-5" src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul className="flex mr-2">
          <li className="p-2 m-2">Home</li>
          <li className="p-2 m-2">About Us</li>
          <li className="p-2 m-2">Contact Us</li>
          <li className="p-2 m-2">Cart</li>
          <button
            className="p-2 m-2 cursor-pointer bg-slate-600 text-gray-50"
            onClick={handleLoginLogout}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
