import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import ToggledComponent from './ToggledComponent';

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
      
      <div className="flex-1 flex flex-col overflow-hidden ml-16 md:ml-20">
        <Header onToggleComponent={handleToggleComponent} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {showToggleComponent && <ToggledComponent />}
          
          {/* Main content area */}
          <div className="bg-white rounded-lg shadow p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;