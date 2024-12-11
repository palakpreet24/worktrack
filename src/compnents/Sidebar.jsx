import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-blue-900 text-white flex flex-col transition-all duration-300 mt-12">
        
      {/* Menu Items */}
      <ul className="flex-1 mt-4 space-y-4 px-4">
        <li className="hover:text-blue-300 cursor-pointer">Dashboard</li>
        <li className="hover:text-blue-300 cursor-pointer">Notice</li>
        <li className="hover:text-blue-300 cursor-pointer">Apply for Leave</li>
        <li className="hover:text-blue-300 cursor-pointer">Attendance</li>
        <li className="hover:text-blue-300 cursor-pointer">Holiday</li>
        <li className="hover:text-blue-300 cursor-pointer">Employee Detail</li>
        <li className="hover:text-blue-300 cursor-pointer">Calendar</li>
      </ul>

      {/* Logout Section */}
      <div className="p-4 border-t border-blue-700">
        <button className="w-full text-left hover:text-blue-300">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
