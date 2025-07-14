// src/Components/PostJob.js

import React, { useState } from "react";

const PostJob = ({ onAddJob }) => {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAddJob) {
      onAddJob(job);
    }
    setJob({ title: "", company: "", location: "", description: "" });
    const [showToast, setShowToast] = useState(false);

  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="bg-[#1a1a1a] p-10 rounded-xl w-full max-w-lg shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-[#6ee7b7]">Post a New Job</h2>

        <input
          type="text"
          name="title"
          value={job.title}
          onChange={handleChange}
          placeholder="Job Title"
          className="w-full p-3 rounded bg-[#0e0e0e] border border-[#333] text-white"
        />
        <input
          type="text"
          name="company"
          value={job.company}
          onChange={handleChange}
          placeholder="Company Name"
          className="w-full p-3 rounded bg-[#0e0e0e] border border-[#333] text-white"
        />
        <input
          type="text"
          name="location"
          value={job.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full p-3 rounded bg-[#0e0e0e] border border-[#333] text-white"
        />
        <textarea
          name="description"
          value={job.description}
          onChange={handleChange}
          placeholder="Job Description"
          className="w-full p-3 rounded bg-[#0e0e0e] border border-[#333] text-white"
        />

        <button type="submit" className="w-full py-3 bg-[#6ee7b7] text-black rounded font-semibold hover:bg-[#4ade80]">
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostJob;
