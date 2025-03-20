import React from "react";
import HomeIcon from "../../public/icons/house-solid.svg";
import ChevronRightIcon from "../../public/icons/chevron-right.svg";
import ToggleButton from "./ToggleButton"; // Import the ToggleButton component

const Header = ({ showToggleComponent, onToggleComponent }) => {
  // Current page path for breadcrumbs - this would typically come from your router
  const currentPath = ["Dashboard", "Analytics", "Performance"];

  const handleToggle = () => {
    onToggleComponent(!showToggleComponent);
  };

  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center">
        {/* Toggle Button Component - Only show when showToggleComponent is false */}
        {!showToggleComponent && (
          <div className="mr-4">
            <ToggleButton isActive={showToggleComponent} onClick={handleToggle} />
          </div>
        )}

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