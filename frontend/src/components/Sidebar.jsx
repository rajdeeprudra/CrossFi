import React from "react";
import { FaHome, FaUserPlus, FaSignInAlt} from " react-icons/fa";

const Sidebar = ()=>{
    return (

        <div className="bg-[#0D0F1C] text-white w-64 min-h-screen p-6">
            <h1 className="tesxt-2xl font-bold mb-8">CrossFi</h1>

            <nav className="flex flex-col gap-6">
                <button className="flex items-center gap-2 hover:text-blue-500">
                    <FaHome />
                    Dashboard
                </button>
                <button className="flex items-center gap-2 hover: text-blue-500">
                    <FaUserPlus/>
                    Register
                </button>
                <button className="flex items-center gap-2 hover:text-blue-500">
                    <FaSignInAlt/>
                    Login
                </button>
            </nav>
        </div>
    )
};

export default Sidebar;