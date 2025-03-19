import React, { useState } from "react";
import { Tooltip } from "@mui/material";
import { sidebarMenuItems, appSettings } from "../data/mockData";

/**
 * RightSidebar - A fixed sidebar component that displays on the right side of the screen
 * Positioned to start below the header
 *
 * @param {Function} onMenuItemClick - Function to handle menu item clicks
 */
const RightSidebar = ({ onMenuItemClick = () => {} }) => {
  const [activeKey, setActiveKey] = useState(
    appSettings?.defaultActiveMenuItem || ""
  );

  const sidebarWidth = appSettings?.sidebarWidth || 240;

  const handleMenuItemClick = (key) => {
    setActiveKey(key);
    onMenuItemClick(key);
  };

  // Use local items if appData is not available
  const menuItems = sidebarMenuItems || [
    {
      key: "home",
      label: "Home",
      icon: "home.svg",
    },
    {
      key: "notes",
      label: "Notes",
      icon: "notes.svg",
    },
    // Add more default items if needed
  ];

  return (
    <div className="h-full w-20  bg-white rounded-lg shadow-lg transition-all duration-300 flex  justify-center items-center flex-col">
      {/* Menu items */}
      <div className="flex-1 overflow-y-auto py-2 w-14 text-black ">
        {menuItems.map((item) => (
          <div key={item.key} className="mb-1 flex flex-col items-center">
            <Tooltip title={item.label} placement="left">
              <button
                onClick={() => handleMenuItemClick(item.key)}
                className={`w-full flex flex-col items-center  hover:bg-gray-100 ${
                  activeKey === item.key ? "bg-blue-50 text-blue-600" : ""
                }`}
              >
                <img
                  src={`/icons/${item.icon}`}
                  alt={item.label}
                  className="w-4 h-4 mb-2" // Adjust icon size and margin
                />
                <div className=" text-xs w-full ">{item.label}</div>
              </button>
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;
