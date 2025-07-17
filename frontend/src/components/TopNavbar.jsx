import React from "react";

const TopNavbar = ()=>{
    return (
        <div className="bg-[#1A1D2E] text-white px-6 py-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Dashboard</h2>
            <div className="text-sm text-gray-300">Welcome, User!</div>
        </div>
    );
};

export default TopNavbar;
