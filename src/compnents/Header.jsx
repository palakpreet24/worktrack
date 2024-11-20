import React from "react";

const Header = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">

      {/* Logo */}
      <div className="text-5xl font-bold">
        <span className="text-black">Work</span>
        <span className="text-blue-500">Track</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-12">
        <a href="#company" className="text-gray-600 hover:text-blue-500 text-lg no-underline">
          Home
        </a>
        <a href="#features" className="text-gray-600 hover:text-blue-500 text-lg no-underline">
          About Us
        </a>
        <a href="#pricing" className="text-gray-600 hover:text-blue-500 text-lg no-underline">
          Contact
        </a>
        <a href="#login" className="text-gray-600 hover:text-blue-500 text-lg no-underline">
          
        </a>
      </div>

      {/* Sign Up Button */}
      <button className="bg-blue-500 text-white text-lg px-4 py-2 rounded-lg hover:bg-blue-600">
        Sign Up
      </button>

    </nav>
  );
};

export default Header;