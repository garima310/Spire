import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/login";
import Signup from "./Components/Signup";
import Loader from "./Components/loader";
import Home from "./Components/home";
import PostJob from "./Components/postjobs";
import JobList from "./Components/joblist"; 
import ApplyForm from "./Components/Applyform";




function App() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [jobs, setJobs] = useState([
    {
      title: "Frontend Developer",
      company: "GameDev Co.",
      location: "Remote",
      description: "Build cool UIs with React and Tailwind.",
    },
    {
      title: "Lore Writer",
      company: "Vellichor Interactive",
      location: "Bangalore",
      description: "Craft immersive narratives for our games.",
    },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/jobs" element={<JobList jobs={jobs} />} /> 
        <Route path="/apply" element={<ApplyForm />} />
        <Route path="*" element={<Home isLoggedIn={isLoggedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
