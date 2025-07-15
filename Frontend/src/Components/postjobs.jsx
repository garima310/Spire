import React, { useState } from "react";

const PostJob = ({ onAddJob }) => {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
    salary: "",
    qualifications: "",
    experience: "",
    jobType: "Full-Time",
    remote: "Yes",
    tags: "",
    website: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAddJob) {
      onAddJob(job);
    }
    setJob({
      title: "",
      company: "",
      location: "",
      description: "",
      salary: "",
      qualifications: "",
      experience: "",
      jobType: "Full-Time",
      remote: "Yes",
      tags: "",
      website: "",
      deadline: "",
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-6 py-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/20 rounded-full blur-[100px] animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-400/20 rounded-full blur-[100px] animate-ping -z-10" />
      <div className="absolute -top-10 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl -z-10" />

      <form
        onSubmit={handleSubmit}
        className="z-10 bg-white/5 border border-white/10 backdrop-blur-2xl p-10 rounded-3xl w-full max-w-2xl shadow-[0_0_40px_#00e0ff40] space-y-5"
      >
        <h2 className="text-3xl font-extrabold text-cyan-300 text-center drop-shadow-xl tracking-widest">
           Post a New Job
        </h2>

        <input type="text" name="title" value={job.title} onChange={handleChange} placeholder="Job Title" className="w-full p-4 rounded-xl bg-white/10 text-white placeholder:text-slate-400 border border-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-300" />
        <input type="text" name="company" value={job.company} onChange={handleChange} placeholder="Company Name" className="w-full p-4 rounded-xl bg-white/10 text-white placeholder:text-slate-400 border border-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-300" />
        <input type="text" name="location" value={job.location} onChange={handleChange} placeholder="Location" className="w-full p-4 rounded-xl bg-white/10 text-white placeholder:text-slate-400 border border-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-300" />

        <input type="text" name="salary" value={job.salary} onChange={handleChange} placeholder="Salary (optional)" className="w-full p-4 rounded-xl bg-white/10 text-white placeholder:text-slate-400 border border-pink-400/30 focus:outline-none focus:ring-2 focus:ring-pink-300" />

        <input type="text" name="experience" value={job.experience} onChange={handleChange} placeholder="Years of Experience (e.g. 2+ years)" className="w-full p-4 rounded-xl bg-white/10 text-white placeholder:text-slate-400 border border-pink-400/30 focus:outline-none focus:ring-2 focus:ring-pink-300" />

        <select name="jobType" value={job.jobType} onChange={handleChange} className="w-full p-4 rounded-xl bg-white/10 text-white border border-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-300">
          <option>Full-Time</option>
          <option>Part-Time</option>
          <option>Contract</option>
          <option>Internship</option>
        </select>

        <select name="remote" value={job.remote} onChange={handleChange} className="w-full p-4 rounded-xl bg-white/10 text-white border border-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-300">
          <option value="Yes">Remote</option>
          <option value="No">Onsite</option>
          <option value="Hybrid">Hybrid</option>
        </select>

        <textarea name="description" value={job.description} onChange={handleChange} placeholder="Job Description" rows="4" className="w-full p-4 rounded-xl bg-white/10 text-white placeholder:text-slate-400 border border-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-300" />

        <textarea name="qualifications" value={job.qualifications} onChange={handleChange} placeholder="Qualifications / Requirements" rows="3" className="w-full p-4 rounded-xl bg-white/10 text-white placeholder:text-slate-400 border border-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-300" />

        <input type="text" name="tags" value={job.tags} onChange={handleChange} placeholder="Tags (e.g. Unity, Unreal, Blender)" className="w-full p-4 rounded-xl bg-white/10 text-white placeholder:text-slate-400 border border-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-300" />

        <input type="url" name="website" value={job.website} onChange={handleChange} placeholder="Company Website (optional)" className="w-full p-4 rounded-xl bg-white/10 text-white placeholder:text-slate-400 border border-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-300" />

        <input type="date" name="deadline" value={job.deadline} onChange={handleChange} placeholder="Application Deadline" className="w-full p-4 rounded-xl bg-white/10 text-white border border-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-300" />

        <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-300 to-pink-300 text-black font-bold text-lg hover:scale-105 transition-all shadow-md">
           Post Job
        </button>
      </form>
    </div>
  );
};

export default PostJob;
