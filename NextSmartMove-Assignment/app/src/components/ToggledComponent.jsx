import React from 'react';

const ToggledComponent = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
      <h2 className="text-lg font-medium text-gray-800">Toggled Component</h2>
      <p className="mt-2 text-gray-600">
        This component appears when the toggle button is activated. 
        Replace this with your actual component content.
      </p>
      
      {/* Placeholder content */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 p-3 rounded">
          <h3 className="font-medium text-blue-700">Section 1</h3>
          <p className="text-sm text-gray-600">Content for section 1 goes here.</p>
        </div>
        <div className="bg-blue-50 p-3 rounded">
          <h3 className="font-medium text-blue-700">Section 2</h3>
          <p className="text-sm text-gray-600">Content for section 2 goes here.</p>
        </div>
      </div>
    </div>
  );
};

export default ToggledComponent;