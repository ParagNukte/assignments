import React, { useState } from "react";
import ToggleIcon from "../../public/icons/Group 193552.svg";
import HomeIcon from "../../public/icons/house-solid.svg";
import ChevronRightIcon from "../../public/icons/chevron-right.svg";

const Header = ({ onToggleComponent }) => {
  const [isComponentVisible, setIsComponentVisible] = useState(false);

  // Current page path for breadcrumbs - this would typically come from your router
  const currentPath = ["Dashboard", "Analytics", "Performance"];

  const handleToggle = () => {
    const newState = !isComponentVisible;
    setIsComponentVisible(newState);
    onToggleComponent(newState);
  };

  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center">
        {/* Toggle Button */}
        <button
          onClick={handleToggle}
          className={`
            mr-4 p-2 rounded-md transition-colors
            ${
              isComponentVisible
                ? "bg-blue-100 text-blue-600"
                : "bg-gray-100 text-gray-600"
            }
            hover:bg-blue-50
          `}
          aria-label="Toggle Component"
        >
          <img
            src={ToggleIcon}
            alt="Toggle"
            className={`
              w-5 h-5 transition-transform duration-300
              ${isComponentVisible ? "rotate-180" : "rotate-0"}
            `}
          />
        </button>

        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm text-gray-600">
          <div className="flex items-center">
            <img src={HomeIcon} alt="Home" className="w-4 h-4" />
          </div>

          {currentPath.map((item, index) => (
            <React.Fragment key={index}>
              <img
                src={ChevronRightIcon}
                alt="/"
                className="mx-2 w-3 h-3 text-gray-400"
              />
              <span
                className={
                  index === currentPath.length - 1
                    ? "font-medium text-blue-600"
                    : "hover:text-blue-500 cursor-pointer"
                }
              >
                {item}
              </span>
            </React.Fragment>
          ))}
        </nav>
      </div>

      {/* Right side of header - can contain user info, notifications, etc. */}
      <div className="flex items-center space-x-4">
        {/* You can add additional header elements here */}
      </div>
    </header>
  );
};

export default Header;
