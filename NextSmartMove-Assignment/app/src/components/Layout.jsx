import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ToggledComponent from "./ToggledComponent";

const Layout = ({ children }) => {
  // State to track whether the toggle component should be visible
  const [showToggleComponent, setShowToggleComponent] = useState(false);

  // Function to handle toggle component visibility
  const handleToggleComponent = (isVisible) => {
    setShowToggleComponent(isVisible);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      {/* Toggled component - slides in from left */}
      <div
        className={`
          fixed top-0 left-16 md:left-20 h-full bg-white border-r border-gray-200 shadow-lg z-20
          transition-all duration-300 ease-in-out overflow-y-auto
          ${showToggleComponent ? "w-64" : "w-0 opacity-0"}
        `}
      >
        <div
          className={`${showToggleComponent ? "p-0" : "p-0"} ${
            showToggleComponent ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
        >
          <ToggledComponent />
        </div>
      </div>

      {/* Main content area with header and content */}
      <div
        className={`
          flex-1 flex flex-col h-full w-full overflow-hidden transition-all duration-300 ease-in-out
          ${showToggleComponent ? "md:ml-84" : ""}
        `}
        style={showToggleComponent ? { marginLeft: "16rem" } : {}}
      >
        {/* Header spans full width */}
        <Header onToggleComponent={handleToggleComponent} />

        {/* Main content area with right padding for sidebar */}
        <main className="flex-1 overflow-y-auto m-2 mr-16 w-[calc(100% - )] ">
          {/* Main content area */}
          <div className="bg-white rounded-lg shadow ">{children}</div>
        </main>
      </div>

      {/* Right sidebar positioned to start below header */}
    </div>
  );
};

export default Layout;
