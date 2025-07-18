import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../config";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsLoggedIn(true);
        navigate("/");
      } else {
        alert(data.message || "Login failed!");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-4 overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-[100px] animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-400/20 rounded-full blur-[100px] animate-ping -z-10" />

      <div className="w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl z-10">
        <h2 className="text-3xl font-extrabold text-center text-cyan-300 mb-2 tracking-wide">
          Spire
        </h2>
        <p className="text-sm text-center text-pink-200 mb-6 italic">
          "Your next big quest starts with the right role."
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-3 border border-white/20 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-3 border border-white/20 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-300 to-pink-300 text-black py-2 rounded-xl hover:scale-105 transition-all font-semibold shadow-md"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-300">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-cyan-300 font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
