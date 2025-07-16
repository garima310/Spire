import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsLoggedIn(true);
        navigate("/");
      } else {
        alert(data.message || "Signup failed!");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute w-[400px] h-[400px] bg-purple-500 opacity-20 rounded-full blur-3xl top-[-150px] left-[-150px] animate-pulse" />
      <div className="absolute w-[300px] h-[300px] bg-pink-500 opacity-20 rounded-full blur-2xl bottom-[-100px] right-[-100px] animate-ping" />

      <div className="w-full max-w-md bg-white/5 backdrop-blur-lg p-10 rounded-2xl border border-white/10 shadow-xl relative z-10">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2 tracking-wide">
          Join Spire
        </h2>
        <p className="text-sm text-center text-pink-300 mb-6 italic">
          “Where every quest begins.”
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Username"
            className="p-3 rounded-md bg-[#1f1f2e] border border-[#3f3f52] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-3 rounded-md bg-[#1f1f2e] border border-[#3f3f52] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-3 rounded-md bg-[#1f1f2e] border border-[#3f3f52] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-md hover:scale-105 transition-all font-bold"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-slate-400">
          Already have an account?{" "}
          <Link to="/login" className="text-cyan-300 font-medium hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
