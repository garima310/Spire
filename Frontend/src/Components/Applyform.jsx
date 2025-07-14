import React, { useState } from "react";

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: "",
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
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-[#e2e8f0] px-4">
      <div className="bg-[#1a1a1a] p-10 rounded-2xl shadow-xl max-w-md w-full">
        {!applied ? (
          <>
            <h2 className="text-3xl font-bold text-center text-[#6ee7b7] mb-6">
              Apply for this Job
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-3 rounded-md bg-[#0e0e0e] border border-[#2c2c2c] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#10b981]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-3 rounded-md bg-[#0e0e0e] border border-[#2c2c2c] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#10b981]"
              />
              <input
                type="text"
                name="resume"
                placeholder="Paste Resume Link"
                value={formData.resume}
                onChange={handleChange}
                required
                className="p-3 rounded-md bg-[#0e0e0e] border border-[#2c2c2c] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#10b981]"
              />
              <button
                type="submit"
                className="bg-[#10b981] text-white py-2 rounded-md hover:bg-[#0f766e] transition-all font-medium"
              >
                Apply Now
              </button>
            </form>
          </>
        ) : (
          <h3 className="text-xl text-center text-[#f9c5d1]">
            Thank you for applying! 🎉
          </h3>
        )}
      </div>
    </div>
  );
};

export default ApplyForm;
