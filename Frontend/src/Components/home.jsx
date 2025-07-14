import React from "react";
import { Link } from "react-router-dom";

const Home = ({ isLoggedIn }) => {

  return (
    <div className="relative h-screen w-full bg-[#0a0a0a] text-[#e2e8f0] font-serif overflow-hidden">

        
    

      {/* Header buttons */}
      {!isLoggedIn ? (
  <div className="absolute top-6 right-10 space-x-4 z-10">
    <Link to="/login">
      <button className="px-5 py-2 border border-[#6ee7b7] text-[#6ee7b7] rounded-full hover:bg-[#6ee7b7] hover:text-black transition-all duration-200">
        Login
      </button>
    </Link>
    <Link to="/signup">
      <button className="px-5 py-2 bg-[#f9c5d1] text-black rounded-full hover:bg-[#f48fb1] transition-all duration-200">
        Sign Up
      </button>
    </Link>
  </div>
) : (
  <div className="group relative">
  <div className="w-10 h-10 rounded-full bg-[#6ee7b7] flex items-center justify-center text-black font-bold shadow-md hover:scale-105 transition transform duration-200 cursor-pointer">
    <span className="text-lg">👤</span>
  </div>
  <span className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-[#1a1a1a] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
    Logged In
  </span>
</div>

)}


      {/* Main content */}
<div className="flex flex-col items-center justify-center h-full text-center px-4">
  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#6ee7b7]">
    You're just <span className="italic text-[#f9c5d1]">one step away</span> from your dream role.
  </h1>

  <p className="text-lg md:text-xl text-[#94a3b8] max-w-xl mt-2">
    Explore creative tech careers — from narrative designers to lore crafters. 
  </p>

  {/* Action Buttons */}
  <div className="flex space-x-4 mt-8">
    <Link to="/jobs">
      <button className="px-6 py-3 bg-[#6ee7b7] text-black rounded-full hover:bg-[#4ade80] transition duration-300 font-semibold shadow-md shadow-[#6ee7b760]">
        Browse Jobs
      </button>
    </Link>

    <Link to="/post-job">
      <button className="px-6 py-3 bg-[#f9c5d1] text-black rounded-full hover:bg-[#f48fb1] transition duration-300 font-semibold shadow-md shadow-[#f9c5d160]">
        Post a Job (Admin)
      </button>
    </Link>
  </div>
</div>
    </div>
  );
}


export default Home; 
