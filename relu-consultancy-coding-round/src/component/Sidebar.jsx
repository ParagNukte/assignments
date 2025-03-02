import React, { useState } from "react";
import { navList } from "../data/navdata";

function Sidebar() {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (id) => {
    setActiveItem(id);
  };

  return (
    <div className="mt-4 h-full flex flex-col justify-between">
      <ul>
        {navList.map((navItem) => {
          const isActive = activeItem === navItem.id;

          return (
            <li
              key={navItem.id}
              className={`flex  my-4 cursor-pointer ${
                isActive
                  ? "border-l-3 border-[#88C2BB] font-bold cursor-pointer"
                  : ""
              }`}
              onClick={() => handleClick(navItem.id)}
            >
              <span className="flex flex-row justify-start mx-4 my-2">
                <img
                  src={`/nav-icons/${navItem.icon}.svg`}
                  className="mx-4"
                  alt={navItem.label}
                />
                {navItem.label}
              </span>
            </li>
          );
        })}
      </ul>
      <div className="flex flex-row mb-4 ">
        <ul>
          <li className="flex flex-row m-4 text-[#88C2BB]">
            <img src="/nav-icons/logout.svg" alt="" className="mx-4" />
            Log out
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
