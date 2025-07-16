import React from "react";
import { Link } from "react-router-dom";

const Home = ({ isLoggedIn }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-sans overflow-x-hidden relative">

      {/* Blurred Glowing Blobs */}
      <div className="absolute w-[400px] h-[400px] bg-purple-500 opacity-30 rounded-full blur-3xl top-[-100px] left-[-150px] animate-pulse" />
      <div className="absolute w-[300px] h-[300px] bg-pink-500 opacity-30 rounded-full blur-2xl bottom-[-80px] right-[-80px] animate-ping" />

      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full px-12 py-4 flex justify-between items-center text-white font-medium tracking-wide z-20 relative">
        {/* Logo */}
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          Spire
        </div>

        {/* Center: Nav Links */}
<div className="flex gap-10 text-sm uppercase text-gray-300">
  <a href="#hero" className="hover:text-cyan-300 transition-all duration-200">Home</a>
  <a href="#featured-jobs" className="hover:text-pink-300 transition-all duration-200">Jobs</a>
  <Link to="/post-job" className="hover:text-cyan-300 transition-all duration-200">Post</Link>
  <a href="#about" className="hover:text-pink-300 transition-all duration-200">About</a>
  <a href="#contact" className="hover:text-cyan-300 transition-all duration-200">Contact</a>
</div>

        {/* Right: Login / Join Now / Logged In */}
        <div className="flex items-center gap-4">
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="text-sm hover:text-pink-300 transition-all duration-200">
                Login
              </Link>
              <Link to="/signup">
                <button className="px-4 py-2 text-sm font-bold rounded bg-gradient-to-r from-violet-500 to-black-500 text-white hover:opacity-90 transition-all">
                  Join Now
                </button>
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-2 text-cyan-300 text-sm">
              <span className="text-lg">👾</span>
              Logged In
            </div>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col items-center justify-center text-center px-6  min-h-[90vh] relative z-10"
      >
        <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-xl mb-6 leading-tight animate-fade-in">
          Unlock Your Dream Role <br className="hidden md:block" /> in Creative Tech
        </h2>
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mb-8">
          Narrative Designers, Lore Crafters, Visual Novel Developers — We’ve got you covered.
        </p>
        <div className="flex gap-6">
          <Link to="/jobs">
            <button className="px-8 py-3 bg-cyan-400 text-black rounded-full hover:bg-cyan-300 transition shadow-lg shadow-cyan-500/50 font-semibold text-lg">
              Browse Jobs
            </button>
          </Link>
          <Link to="/post-job">
            <button className="px-8 py-3 bg-pink-300 text-black rounded-full hover:bg-pink-400 transition shadow-lg shadow-pink-300/50 font-semibold text-lg">
              Post a Job (Admin)
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Jobs Section */}
<section
  id="featured-jobs"
  className="scroll-mt-28 text-center px-6 py-16 bg-[#1e1e2f]/40 backdrop-blur-md relative z-10"
>
  <h3 className="text-4xl font-bold text-cyan-400 mb-12 drop-shadow-md">
    Featured Jobs
  </h3>
  <div className="flex flex-wrap justify-center gap-10">
    {[
      {
        id: 1,
        title: "Lead Narrative Designer",
        company: "Riot Games",
        description:
          "Shape groundbreaking stories for AAA titles with one of the most creative teams in the industry.",
      },
      {
        id: 2,
        title: "Senior Gameplay Programmer",
        company: "CD Projekt Red",
        description:
          "Engineer innovative mechanics for immersive open-world RPGs alongside world-class developers.",
      },
      {
        id: 3,
        title: "UI/UX Designer — Multiplayer Focus",
        company: "Valve",
        description:
          "Craft intuitive, seamless user experiences for globally renowned competitive games.",
      },
    ].map((job) => (
      <div
        key={job.id}
        className="bg-white/5 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition max-w-sm w-full backdrop-blur-lg border border-white/10"
      >
        <h4 className="text-2xl font-bold text-pink-300 mb-2">{job.title}</h4>
        <p className="text-slate-300 text-sm mb-1">{job.company}</p>
        <p className="text-slate-400 text-sm mb-4">{job.description}</p>
        <Link to="/jobs" className="text-cyan-300 font-semibold hover:underline">
          View Details →
        </Link>
      </div>
    ))}
  </div>
</section>


      {/* About Section */}
      <section id="about" className="scroll-mt-28 text-center px-6 py-16 relative z-10">
        <h3 className="text-4xl font-bold text-cyan-400 mb-6 drop-shadow-md">
          About Spire
        </h3>
        <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
          Spire is a curated job board for the creative tech industry — a space built for storytellers, game devs, designers, and narrative artists.
We bridge the gap between innovative studios and passionate creatives looking to shape the future of gaming, interactive fiction, and immersive design.
Whether you're a writer crafting branching narratives, a designer breathing life into virtual worlds, or a studio searching for fresh talent, Spire connects you to opportunities that align with your vision.
It’s not just about finding a job — it’s about joining a community that values creativity, storytelling, and bold ideas. Your next chapter starts here.
        </p>
      </section>

      {/* Footer */}
      <footer id="contact" className="text-center text-slate-400 border-t border-slate-600 py-6 text-sm relative z-10">
        <p>&copy; 2025 Spire | All rights reserved.</p>
        <p className="mt-2">Contact: info@spirejobs.com | +91 9876543210</p>
      </footer>
    </div>
  );
};

export default Home;
