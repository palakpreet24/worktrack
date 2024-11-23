// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/worktrack image.jpg";
import image2 from "../assets/about-us.jpg";
import image3 from "../assets/login image.jpg"
import image4 from "../assets/contactus page.jpg"
const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
        {/* Logo */}
        <div className="">
          <a href="#home" className="no-underline">
          <div className="text-black text-5xl font-bold">Work<span className="text-[#6C6EF5]">Track</span></div>
         <div>
         <span className="text-black ml-20">Simplifying field work</span>
         </div>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-12">
          <a
            href="#home"
            className="text-gray-600 hover:text-blue-500 text-lg no-underline"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-600 hover:text-blue-500 text-lg no-underline"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-blue-500 text-lg no-underline"
          >
            Contact Us
          </a>
          <a
          href="#login"
          className="text-gray-600 hover:text-blue-500 text-lg no-underline"
        >
          Login
        </a>
        </div>
              {/* Sign Up Button */}
      <Link to="/signup">
        <button className="bg-blue-500 text-white text-lg px-4 py-2 rounded-lg hover:bg-blue-600">
          Sign Up
        </button>
      </Link>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen w-screen bg-white flex pt-16">
        <div className="h-full w-6/12 bg-white flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold p-3">
            <div className="p-2 pb-0">
              Track your <span className="text-[#6C6EF5]">work progress</span>
            </div>
            <div className="p-2 pb-0">
              <span className="text-[#6C6EF5]">Anywhere</span> Anytime!
            </div>
            <div className="p-2 pb-0 text-nowrap">
              Simplifying <span className="text-[#6C6EF5]">field </span>work
            </div>
          </h1>
          <p className="text-3xl text-gray-600 mb-6">
            Elevate Your Workflow, Optimize Your Time.
          </p>
          <button className="px-10 py-3 bg-[#FE978E] text-white text-center rounded-full font-semibold text-2xl transition-all hover:bg-[#E1483E]">
            Start
          </button>
        </div>
        <div className="h-full w-6/12">
          <img
            className="h-full w-full object-cover"
            src={image}
            alt="Work Progress"
          />
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="h-screen w-screen bg-white flex pt-16"
      >
        <div className="h-full w-4/12 bg-white flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold p-3 text-[#6C6EF5]">
            <div className="p-2 pb-0">
              About Us
            </div>
          </h1>
          <p className="text-lg text-gray-800 mb-32 pl-8 text-centre">
          Welcome to WorkTrack, your ultimate solution for simplifying and streamlining fieldwork operations. At WorkTrack, we believe in empowering professionals and teams to track their tasks, projects, and progress with ease. Our platform combines cutting-edge technology with user-friendly tools to enhance productivity, optimize workflows, and ensure better time management.
We are driven by a passion for innovation and a commitment to helping you achieve your goals. Whether you're managing a remote team, supervising projects in the field, or coordinating on-the-go tasks, WorkTrack is designed to make your job simpler, smarter, and more efficient.
          </p>
        </div>

        <div className="h-full w-8/12">
          <img
            className="h-full w-full object-cover"
            src={image2}
            alt="Work Progress"
          />
        </div>
      </section>

      {/* Contact Us Section */}
      <section
        id="contact"
        className="h-screen w-screen bg-white flex pt-16"
      >
      
      <div className="h-full w-6/12 bg-white flex flex-col items-center justify-center">
        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </form>
    </div>
      </div>
  
        <div className="h-full w-6/12">
          <img
            className="h-full w-full object-cover"
            src={image4}
            alt="Work Progress"
          />
        </div>
      
      </section>

      {/* Login Section */}
      <section
        id="login"
        className="h-screen w-screen bg-white flex pt-16"
      >
        <div className="h-full w-6/12 bg-white flex flex-col items-center justify-center pb-24">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome back</h1>
          <p className="text-gray-600 mb-6 text-xl">Please enter your details</p>

          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <a
                href="#"
                className="text-indigo-500 text-sm hover:underline"
              >
                Forgot password
              </a>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
        Login
      </button>
            </form>
            </div>

        <div className="h-auto w-[1000px]">
          <img
            className="h-full w-full object-cover"
            src={image3}
            alt="Work Progress"
          />
        </div>
      </section>

    </div>
  );
};

export default Home;