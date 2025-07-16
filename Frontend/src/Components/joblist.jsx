import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedStudio, setSelectedStudio] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    fetch("http://localhost:5000/api/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  const studios = ["All", ...new Set(jobs.map((job) => job.company))];
  const types = ["All", ...new Set(jobs.map((job) => job.type))];

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedStudio === "All" || job.company === selectedStudio) &&
      (selectedType === "All" || job.type === selectedType)
  );

  const visibleJobs = filteredJobs.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 py-12 grid grid-cols-1 lg:grid-cols-4 gap-10">

      {/* Sidebar Filters */}
      <aside className="lg:col-span-1 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md shadow-xl h-fit">
        <h3 className="text-2xl font-bold text-cyan-300 mb-6">Filters</h3>

        {/* Studio Filter */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2 text-pink-300">Studio</h4>
          {studios.map((studio) => (
            <button
              key={studio}
              onClick={() => setSelectedStudio(studio)}
              className={`block w-full text-left px-4 py-2 rounded-lg mb-1 text-sm ${
                selectedStudio === studio
                  ? "bg-cyan-300 text-black font-bold"
                  : "hover:bg-white/10"
              }`}
            >
              {studio}
            </button>
          ))}
        </div>

        {/* Type Filter */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-pink-300">Job Type</h4>
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`block w-full text-left px-4 py-2 rounded-lg mb-1 text-sm ${
                selectedType === type
                  ? "bg-cyan-300 text-black font-bold"
                  : "hover:bg-white/10"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </aside>

      {/* Jobs List */}
      <section className="lg:col-span-3 flex flex-col items-center gap-10">
        <div className="flex justify-center w-full mb-4">
          <input
            type="text"
            placeholder="Search jobs by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 w-80 rounded-full border border-cyan-300 text-black"
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3 w-full">
          {visibleJobs.length > 0 ? (
            visibleJobs.map((job, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={
                      job.logo ||
                      `https://api.dicebear.com/6.x/shapes/svg?seed=${job.company}`
                    }
                    alt={`${job.company} logo`}
                    className="w-12 h-12 rounded-full bg-white/20 p-1"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-pink-300">
                      {job.title}
                    </h3>
                    <p className="text-sm text-slate-300">{job.company}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-400 line-clamp-3">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs bg-cyan-300/10 border border-cyan-400 text-cyan-300 px-3 py-1 rounded-full">
                    {job.location}
                  </span>
                  {job.type && (
                    <span className="text-xs bg-pink-300/10 border border-pink-400 text-pink-300 px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                  )}
                </div>

                <Link to="/apply">
                  <button className="mt-6 w-full px-4 py-2 bg-cyan-300 text-black rounded-full hover:bg-cyan-200 transition-all font-semibold">
                    Apply Now
                  </button>
                </Link>
                 {/* Company Website Link */}
  {job.website && (
    <a
      href={job.website}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 text-xs text-cyan-300 underline hover:text-cyan-200 text-center"
    >
      Visit Company Site
    </a>
  )}
              </div>
            ))
          ) : (
            <p className="text-center text-slate-400 col-span-full mt-10">
              No jobs found. Try different filters!
            </p>
          )}
        </div>

        {visibleCount < filteredJobs.length && (
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="mt-8 px-6 py-3 bg-pink-300 hover:bg-pink-200 text-black font-semibold rounded-full shadow-lg transition"
          >
            Load More Jobs
          </button>
        )}
      </section>
    </div>
  );
};

export default JobList;
