// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-sm">
      <h1 className="text-2xl font-bold">CrossFi</h1>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li><a href="#">Markets</a></li>
        <li><a href="#">Lend</a></li>
        <li><a href="#">Borrow</a></li>
        <li><a href="#">Dashboard</a></li>
      </ul>
      <button className="border px-4 py-2 rounded hover:bg-gray-100">Connect Wallet</button>
    </nav>
  );
};

export default Navbar;
