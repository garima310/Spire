import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn })=> {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    

    // Redirect to homepage
    setIsLoggedIn(true);

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] px-4">
      <div className="w-full max-w-md bg-[#1a1a1a] p-10 rounded-2xl shadow-xl border border-[#2c2c2c]">
        <h2 className="text-3xl font-bold text-center text-[#6ee7b7] mb-2 tracking-wide">
          Vellichor
        </h2>
        <p className="text-sm text-center text-[#f9c5d1] mb-6 italic">
          “Between every page, there's a story waiting for you.”
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-[#2c2c2c] rounded-md bg-[#0e0e0e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#10b981] transition-all"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border border-[#2c2c2c] rounded-md bg-[#0e0e0e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#10b981] transition-all"
            required
          />
          <button
            type="submit"
            className="bg-[#10b981] text-white py-2 rounded-md hover:bg-[#0f766e] transition-all font-medium"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-400">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#6ee7b7] font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
