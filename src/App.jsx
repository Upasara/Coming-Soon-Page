import React, { useState } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

// ✅ Import the background image
import backgroundImage from "./assets/pic.png";

function App() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:youremail@example.com?subject=Notify Me&body=Please notify me when the website launches.%0AUser Email: ${email}`;
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden">
      {/* 🔹 Background image with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: `url(${backgroundImage})`, // ✅ use imported image
        }}
      ></div>

      {/* 🔹 Optional overlay for readability */}
      <div className="absolute inset-0 bg-white/30 "></div>

      {/* 🔹 Content Layer */}
      <div className="relative z-10">
        {/* Logo */}
        <div className="bg-white shadow-md rounded-full px-6 py-2 mb-8 inline-block">
          <span className="font-semibold text-gray-700">YourBrand</span>
        </div>

        {/* Main Card */}
        <div className="max-w-2xl bg-white/70 backdrop-blur-md rounded-3xl p-10 shadow-lg mx-auto opacity-60">
          <p className="text-gray-500 font-medium mb-2">WE'RE STILL</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-600 mb-4">
            Cooking Our Website.
          </h1>
          <p className="text-gray-600 mb-8">
            We are going to launch our website very soon. <br />
            Stay tuned.
          </p>

          {/* Notify form */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center gap-2 flex-col sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none w-64 sm:w-80"
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-all"
            >
              <FaEnvelope />
              Notify Me
            </button>
          </form>
        </div>

        {/* Social media */}
        <div className="flex gap-4 mt-10 justify-center">
          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-md hover:bg-blue-50 transition"
          >
            <FaFacebookF className="text-blue-600 text-lg" />
          </a>
          <a
            href="https://instagram.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-md hover:bg-pink-50 transition"
          >
            <FaInstagram className="text-pink-500 text-lg" />
          </a>
          <a
            href="https://linkedin.com/in/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-md hover:bg-blue-50 transition"
          >
            <FaLinkedinIn className="text-blue-700 text-lg" />
          </a>
        </div>

        <p className="text-gray-400 text-sm mt-6">
          © 2025 YourBrand. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default App;
