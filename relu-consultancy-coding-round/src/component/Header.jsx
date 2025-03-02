// src/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="h-20 mt-4  text-black flex items-center justify-start ">
      <div className="m-4 w-[260px] text-3xl flex items-center justify-center bg-white h-full  rounded-lg">
        LOGO
      </div>

      <div className="m-4 w-[620px] flex items-center justify-center h-full bg-white  rounded-lg">
        <img src="/nav-icons/Component 32.svg" alt="" className="ml-6" />
        <input
          type="text"
          placeholder="Search here"
          className="w-full ml-4 outline-0 rounded-md"
        />
        <div className="flex justify-center items-center">
          <img src="/nav-icons/Component 39 (2).png" alt="" className="mx-2" />
          <button className="mr-12">Filters</button>
        </div>
      </div>

      <div className="m-4 w-[260px] text-white text-[16px] flex items-center justify-center h-full bg-[#88C2BB]  rounded-lg">
        Become a Seller
      </div>
    </header>
  );
};

export default Header;
