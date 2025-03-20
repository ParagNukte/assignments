import React from "react";
import ToggleIcon from "../../public/icons/Group 193552.svg";

const ToggleButton = ({ isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        p-2 rounded-md transition-colors
        ${isActive ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"}
        hover:bg-blue-50
      `}
      aria-label="Toggle Component"
    >
      <img
        src={ToggleIcon}
        alt="Toggle"
        className={`
          w-5 h-5 transition-transform duration-300
          ${isActive ? "rotate-180" : "rotate-0"}
        `}
      />
    </button>
  );
};

export default ToggleButton;
