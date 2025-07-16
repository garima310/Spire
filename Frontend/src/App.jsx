import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Components/MainLayout";
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

  const jobs = [
  {
    title: "Narrative Designer",
    company: "Riot Games",
    location: "Remote",
    description: "Help build immersive narratives for next-gen story-driven games.",
    type: "Full-Time",
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7b/Riot_Games_logo_2022.svg"
  },
  {
    title: "3D Artist",
    company: "Ubisoft",
    location: "Montreal, Canada",
    description: "Create jaw-dropping 3D assets for AAA open-world environments.",
    type: "Contract",
    logo: ""
  },
  {
    title: "Gameplay Programmer",
    company: "CD Projekt Red",
    location: "Poland / Remote",
    description: "Work with RedEngine to bring mechanics to life in RPG worlds.",
    type: "Full-Time"
  }
];


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/apply" element={<ApplyForm />} />
        <Route path="*" element={<Home isLoggedIn={isLoggedIn} />} /> </Route>
      </Routes>
    </Router>
  );
}

export default App;
