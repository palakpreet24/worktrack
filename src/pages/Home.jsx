import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/worktrack image.jpg";
import image2 from "../assets/about-us.jpg";
import image4 from "../assets/contact-us.jpg";

const Home = () => {
  const navigate = useNavigate();
  const handleStartClick = () => {
    navigate("/Login");
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="h-screen w-full bg-white flex flex-wrap pt-16"
      >
        <div className="w-full md:w-6/12 flex flex-col items-center justify-center p-6">
          <h1 className="text-3xl md:text-5xl font-bold text-center p-3">
            <div className="p-2 pb-0">
              Track your <span className="text-[#6C6EF5]">work progress</span>
            </div>
            <div className="p-2 pb-0">
              <span className="text-[#6C6EF5]">Anywhere</span> Anytime!
            </div>
            <div className="p-2 pb-0">
              Simplifying <span className="text-[#6C6EF5]">field</span> work
            </div>
          </h1>
          <p className="text-base md:text-3xl text-gray-600 mb-6 text-center">
            Elevate Your Workflow, Optimize Your Time.
          </p>
          <button
            className="px-6 md:px-10 py-3 bg-[#FE978E] text-white rounded-full font-semibold text-lg md:text-2xl transition-all hover:bg-[#E1483E]"
            onClick={handleStartClick}
          >
            Start
          </button>
        </div>
        <div className="w-full md:w-6/12 h-60 md:h-full">
          <img
            className="w-full h-full object-cover"
            src={image}
            alt="Work Progress"
          />
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="min-h-screen w-full bg-gradient-to-b from-white to-[#d2ddfc] flex flex-wrap items-center px-6 md:px-16 py-12 gap-12 border-b-2"
      >
        <div className="w-full md:w-6/12 space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#6C6EF5] leading-tight">
            About Us
          </h1>
          <p className="text-sm md:text-lg text-gray-700 leading-relaxed text-justify">
            Welcome to <span className="font-semibold text-[#6C6EF5]">WorkTrack</span>,
            your ultimate solution for simplifying and streamlining fieldwork
            operations. At WorkTrack, we believe in empowering professionals and
            teams to track their tasks, projects, and progress with ease.
            <br />
            <br />
            Our platform combines cutting-edge technology with user-friendly
            tools to enhance productivity, optimize workflows, and ensure better
            time management. We are driven by a passion for innovation and a
            commitment to helping you achieve your goals.
            <br />
            <br />
            Whether you're managing a remote team, supervising projects in the
            field, or coordinating on-the-go tasks, WorkTrack is designed to make
            your job simpler, smarter, and more efficient.
          </p>
          <button className="px-6 md:px-8 py-3 bg-[#6C6EF5] text-white rounded-full font-medium text-base md:text-lg shadow-lg transition-all hover:bg-[#4A4DE4] hover:scale-105">
            Learn More
          </button>
        </div>
        <div className="w-full md:w-5/12">
          <img
            className="w-full h-auto shadow-lg rounded-lg hover:scale-105 transition-transform"
            src={image2}
            alt="About Us"
          />
        </div>
      </section>

      {/* Contact Us Section */}
      <section
        id="contact"
        className="min-h-screen w-full flex flex-wrap pt-16 border-b-2 bg-gradient-to-b from-white to-[#d2ddfc]"
      >
        <div className="w-full md:w-6/12 flex flex-col items-center justify-center px-6 py-12">
          <div className="w-full md:w-10/12 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
              Get in Touch
            </h2>
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
        <div className="w-full md:w-6/12">
          <img
            className="w-full h-60 md:h-full object-cover"
            src={image4}
            alt="Contact Us"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
