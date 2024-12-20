import React from 'react';
import Sidebar from '../compnents/Sidebar';
import Card from '../compnents/Card';
import Welcome from '../compnents/Welcome';
import UserHeader from '../compnents/UserHeader';

export default function Dashboard() {
  return (
    <div>
      {/* User Header */}
      <UserHeader />

      <div className="flex pt-8 mt-10">
        {/* Sidebar - On the left side */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Welcome Section */}
          <div className="mt-20 px-6">
            <Welcome />
          </div>

          {/* Cards Section */}
          <div className="flex-1 p-6 mt-4">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
