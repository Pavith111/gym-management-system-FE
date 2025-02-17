import React from "react";

const gyms = Array(7).fill({ id: "GYM001", location: "Colombo" });

const GymInfo = () => {
  return (
    <div className="p-6">
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-96 p-2 rounded-md bg-gray-700 text-white"
        />
      </div>

      <div className="space-y-3">
        {gyms.map((gym, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white p-3 rounded-md shadow-md"
          >
            <span className="px-3 py-2 border border-gray-300 rounded-md">{gym.id}</span>
            <span className="px-3 py-2 border border-gray-300 rounded-md">{gym.location}</span>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md">Modify</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-4">
        <button className="bg-black text-white px-4 py-2 rounded-md">Add GYM</button>
      </div>
    </div>
  );
};

export default GymInfo;
