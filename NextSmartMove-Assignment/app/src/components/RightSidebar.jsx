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
    <div className="h-full w-20 bg-white border-l border-gray-200 shadow-sm flex flex-col justify-start items-center py-4">
      {/* Menu items */}
      <div className="flex-1 overflow-y-auto w-full text-gray-700 space-y-6">
        {menuItems.map((item) => (
          <div key={item.key} className="flex flex-col items-center">
            <Tooltip title={item.label} placement="left">
              <button
                onClick={() => handleMenuItemClick(item.key)}
                className={`w-16 h-16 flex flex-col items-center justify-center rounded-lg transition-all duration-200 ${
                  activeKey === item.key
                    ? "bg-blue-50 text-blue-600"
                    : "hover:bg-gray-100"
                }`}
              >
                <img
                  src={`/icons/${item.icon}`}
                  alt={item.label}
                  className="w-5 h-5 mb-1"
                />
                <div className="text-xs font-medium mt-1">{item.label}</div>
              </button>
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;