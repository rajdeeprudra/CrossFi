
import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/TopNavbar";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-8 text-white bg-[#0B0D17] flex-1">
          {/* Add other UI blocks here later */}
          <h2 className="text-2xl font-semibold">Welcome to CrossFi</h2>
          <p className="text-gray-400 mt-2">Select an option from the sidebar</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
