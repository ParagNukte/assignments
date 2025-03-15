import React from 'react';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <h1 className="text-2xl font-semibold text-gray-800">Welcome to Mumbisoft Dashboard</h1>
      <p className="mt-4 text-gray-600">Select an option from the sidebar to get started.</p>
      
      {/* Add more content here as needed */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="font-medium text-blue-800">Quick Stats</h2>
          <p className="text-sm text-gray-600 mt-2">View your performance metrics at a glance.</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="font-medium text-blue-800">Recent Activity</h2>
          <p className="text-sm text-gray-600 mt-2">See the latest updates and activities.</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="font-medium text-blue-800">Upcoming Tasks</h2>
          <p className="text-sm text-gray-600 mt-2">Check your scheduled tasks and deadlines.</p>
        </div>
      </div>
    </Layout>
  );
}

export default App;