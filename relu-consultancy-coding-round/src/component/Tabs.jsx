import React, { useState } from "react";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (label) => {
    setActiveTab(label);
  };

  return (
    <div className="h-[400px] ">
      <div className=" flex space-x-4 sticky top-0 ">
        {children.map((child) => {
          const { label } = child.props;
          return (
            <button
              key={label}
              className={`mb-4 cursor-pointer ${
                label === activeTab ? "font-bold" : "text-gray-500"
              }`}
              onClick={() => handleClick(label)}
            >
              {label}
            </button>
          );
        })}
      </div>
      <div className="">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

export default Tabs;
