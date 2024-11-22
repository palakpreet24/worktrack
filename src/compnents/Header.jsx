import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
      {/* Logo */}
      <div className="">
        <Link to="/" className="no-underline">
         <div className="text-black text-5xl font-bold">Work<span className="text-[#6C6EF5]">Track</span></div>
         <div>
         <span className="text-black ml-20">Simplifying field work</span>
         </div>
        </Link>
      </div>
      
      {/* Navigation Links */}
      <div className="hidden md:flex space-x-12">
        <Link
          to="/"
          className="text-gray-600 hover:text-blue-500 text-lg no-underline"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-gray-600 hover:text-blue-500 text-lg no-underline"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className="text-gray-600 hover:text-blue-500 text-lg no-underline"
        >
          Contact
        </Link>
        <Link
          to="/login"
          className="text-gray-600 hover:text-blue-500 text-lg no-underline"
        >
          Login
        </Link>
      </div>

      {/* Sign Up Button */}
      <Link to="/signup">
        <button className="bg-blue-500 text-white text-lg px-4 py-2 rounded-lg hover:bg-blue-600">
          Sign Up
        </button>
      </Link>
    </nav>
  );
};

export default Header;