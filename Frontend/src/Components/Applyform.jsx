import React, { useState } from "react";
import Confetti from "react-confetti";

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    portfolio: "",
    linkedin: "",
    resumeLink: "",
    coverLetter: "",
  });

  const [applied, setApplied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setApplied(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-4 text-white relative">
      {applied && <Confetti numberOfPieces={150} recycle={false} />}
      
      <div className="bg-white/5 backdrop-blur-md p-10 rounded-2xl shadow-lg border border-white/10 max-w-xl w-full animate-fade-in">
        {!applied ? (
          <>
            <h2 className="text-3xl font-bold text-center text-cyan-400 mb-6">
              Apply for Your Dream Job
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-3 rounded-md bg-[#0e0e0e] border border-[#333] text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-3 rounded-md bg-[#0e0e0e] border border-[#333] text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400"
              />
              <input
                type="text"
                name="role"
                placeholder="Role Applying For (e.g. Game Writer)"
                value={formData.role}
                onChange={handleChange}
                required
                className="p-3 rounded-md bg-[#0e0e0e] border border-[#333] text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400"
              />
              <input
                type="url"
                name="portfolio"
                placeholder="Portfolio URL (optional)"
                value={formData.portfolio}
                onChange={handleChange}
                className="p-3 rounded-md bg-[#0e0e0e] border border-[#333] text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400"
              />
              <input
                type="url"
                name="linkedin"
                placeholder="LinkedIn Profile"
                value={formData.linkedin}
                onChange={handleChange}
                className="p-3 rounded-md bg-[#0e0e0e] border border-[#333] text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400"
              />
              <input
                type="url"
                name="resumeLink"
                placeholder="Resume Drive/Link"
                value={formData.resumeLink}
                onChange={handleChange}
                required
                className="p-3 rounded-md bg-[#0e0e0e] border border-[#333] text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400"
              />
              <textarea
                name="coverLetter"
                placeholder="Short Cover Letter"
                value={formData.coverLetter}
                onChange={handleChange}
                rows={4}
                className="p-3 rounded-md bg-[#0e0e0e] border border-[#333] text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400"
              />
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md font-semibold text-white hover:opacity-90 transition-all"
              >
                Submit Application
              </button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-4 py-8">
            <h3 className="text-2xl text-pink-300 font-semibold">
              Woohoo! 🎉 Application submitted
            </h3>
            <p className="text-slate-300">
              You’ll hear from us if you're the chosen one.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplyForm;
