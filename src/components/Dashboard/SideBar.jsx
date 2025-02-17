import Link from "next/link";
import React from "react";
import { useState } from "react";

const SideBar = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen p-4">
      <h1 className="text-xl font-bold mb-4">KYRO</h1>

      {["Users", "Gyms", "Reviews", "GYM Management", "A", "B", "C"].map((item) => (
        <div key={item} className="mb-2">
          <button
            onClick={() => toggleSection(item)}
            className="w-full text-left px-3 py-2 bg-gray-800 rounded-md"
          >
            {item}
          </button>
          {openSection === item && item === "GYM Management" && (
            <div className="ml-4 mt-2 space-y-2">
              <p className="text-sm cursor-pointer">GYM Info</p>
              <p className="text-sm cursor-pointer"><Link href="/dashboard/add-gym"> Add New Gym </Link></p>
              <p className="text-sm cursor-pointer">Package Info</p>
            </div>
          )}
        </div>
      ))}

      <button className="mt-4 w-full bg-gray-700 py-2 rounded-md">Sign out</button>
    </aside>
  );
};

export default SideBar;
