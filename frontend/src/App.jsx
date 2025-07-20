// src/App.jsx
import React from "react";
import Navbar from "./components/TopNavbar";
import Hero from "./components/Sidebar";

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
