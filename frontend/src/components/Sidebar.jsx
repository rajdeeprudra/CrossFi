// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section className="text-center py-20 px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Decentralized Lending & Borrowing
      </h2>
      <p className="text-gray-500 mb-8 text-lg max-w-xl mx-auto">
        Access liquidity across multiple blockchains with competitive rates and secure protocols.
      </p>
      <div className="flex justify-center space-x-4 mb-12">
        <button className="bg-black text-white px-6 py-3 rounded-md hover:opacity-90">
          Start Lending
        </button>
        <button className="border px-6 py-3 rounded-md hover:bg-gray-100">
          Explore Markets
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="p-6 border rounded-lg text-left">
          <h3 className="text-xl font-semibold mb-2">Lend Assets</h3>
          <p>Earn interest by providing liquidity to the protocol.</p>
        </div>
        <div className="p-6 border rounded-lg text-left">
          <h3 className="text-xl font-semibold mb-2">Borrow Assets</h3>
          <p>Access liquidity without selling your crypto holdings.</p>
        </div>
        <div className="p-6 border rounded-lg text-left">
          <h3 className="text-xl font-semibold mb-2">Cross-Chain</h3>
          <p>Seamlessly operate across multiple blockchains.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
