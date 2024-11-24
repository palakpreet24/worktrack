import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-2 bg-white shadow bg-gradient-to-b from-white to-[#d2ddfc]">
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
      <a
        href="/#home"
        className="text-gray-600 hover:text-blue-500 text-lg no-underline"
      >
        Home
      </a>
      <a
        href="/#about"
        className="text-gray-600 hover:text-blue-500 text-lg no-underline"
      >
        About Us
      </a>
      <a
        href="/#contact"
        className="text-gray-600 hover:text-blue-500 text-lg no-underline"
      >
        Contact Us
      </a>
      <Link to = "/login">
      <div className="text-gray-600 hover:text-blue-500 text-lg no-underline"
    >
      Login
      </div>
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