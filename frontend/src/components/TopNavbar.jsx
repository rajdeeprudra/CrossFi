
import React, { useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { ethers } from "ethers";

const Navbar = () => {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    const provider = await detectEthereumProvider();

    if (provider) {
      try {
        await provider.request({ method: "eth_requestAccounts" });

        const ethersProvider = new ethers.BrowserProvider(provider);
        const signer = await ethersProvider.getSigner();
        const address = await signer.getAddress();

        setAccount(address);
        console.log("Wallet connected:", address);
      } catch (error) {
        console.error("Wallet connection failed:", error);
        alert("Something went wrong while connecting to MetaMask.");
      }
    } else {
      alert("MetaMask not detected. Please install the extension.");
    }
  };

  const sendTransaction = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        const tx = await signer.sendTransaction({
          to: "0x02B9e8E5703CC015e218D464F2C75342F202562d", // Replace with a valid Sepolia address
          value: ethers.parseEther("0.01"), // 0.01 ETH
        });

        console.log("Transaction sent:", tx.hash);
        await tx.wait();
        console.log("Transaction confirmed!");
        alert("Transaction successful!");
      } catch (error) {
        console.error("Transaction failed:", error);
        alert("Transaction failed. See console for details.");
      }
    } else {
      alert("MetaMask not found");
    }
  };

  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-black">CrossFi</h1>
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li><a href="/" className="hover:text-black">Markets</a></li>
        <li><a href="/lend" className="hover:text-black">Lend</a></li>
        <li><a href="/borrow" className="hover:text-black">Borrow</a></li>
        <li><a href="/dashboard" className="hover:text-black">Dashboard</a></li>
      </ul>
      <div className="flex space-x-4">
        <button
          onClick={connectWallet}
          className="border px-4 py-2 rounded hover:bg-gray-100 text-black"
        >
          {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : "Connect Wallet"}
        </button>
        {account && (
          <button
            onClick={sendTransaction}
            className="border px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
          >
            Send 0.01 ETH
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
