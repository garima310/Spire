import React, { useState } from "react";
import { Link } from "react-router-dom";

const JobList = ({ jobs }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e2e8f0] px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#6ee7b7]">
        Available Jobs
      </h2>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search jobs by title..."
          className="px-4 py-2 w-80 rounded-full border border-[#6ee7b7] text-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-6 rounded-xl shadow-md hover:scale-105 transition-all duration-200"
            >
              <h3 className="text-2xl font-semibold text-[#f9c5d1] mb-2">
                {job.title}
              </h3>
              <p className="text-lg text-[#6ee7b7]">{job.company}</p>
              <p className="text-sm text-gray-400">{job.location}</p>
              <p className="text-gray-300 mt-2">{job.description}</p>
              <Link to="/apply">
                <button className="mt-4 px-4 py-2 bg-[#6ee7b7] text-black rounded-full hover:bg-[#4ade80] transition-all font-semibold">
                    Apply Now
                </button>
            </Link>

            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No jobs found.
          </p>
        )}
      </div>
    </div>
  );
};

export default JobList;
