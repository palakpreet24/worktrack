import React from 'react';
import Sidebar from '../compnents/Sidebar';
import Card from '../compnents/Card';

export default function Dashboard() {
  return (
    <div className="flex pt-8">
      {/* Sidebar - On the left side */}
      <Sidebar />

      {/* Main Content - Cards on the right side */}
      <div className="flex-1 p-6 mt-20">
        {/* <h1 className="text-2xl font-bold mb-6">Dashboard</h1> */}
        <Card /> {/* Display the Card component here */}
      </div>
    </div>
  );
}
