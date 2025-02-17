import React from "react";

const Navbar = () => {
    return (
      <nav className="bg-gray-800 text-white flex justify-between items-center px-6 py-4">
        <h2 className="text-2xl font-bold">GYM MANAGEMENT</h2>
        <div className="flex items-center space-x-4">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-12 h-12 rounded-full border border-gray-300"
          />
          <p className="text-sm">Pavith Bimsara</p>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  