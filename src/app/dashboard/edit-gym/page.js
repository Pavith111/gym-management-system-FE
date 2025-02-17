import React from "react";

const ModifyGymForm = () => {
    return (
      <div className="p-6 m-12 bg-gradient-to-b from-gray-800 to-gray-600 text-white rounded-lg shadow-lg max-w-3xl mx-auto">
        <form className="space-y-4">
          {/* Gym Name */}
          <div>
            <label className="block text-sm font-semibold mb-1">GYM NAME</label>
            <input
              type="text"
              className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-500"
              defaultValue="Power World"
            />
          </div>
  
          {/* Location */}
          <div>
            <label className="block text-sm font-semibold mb-1">LOCATION</label>
            <input
              type="text"
              className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-500"
              defaultValue="Panadura"
            />
          </div>
  
          {/* Phone & Email */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold mb-1">PHONE NUMBER</label>
              <input
                type="text"
                className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-500"
                defaultValue="706986695"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-semibold mb-1">EMAIL</label>
              <input
                type="email"
                className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-500"
                defaultValue="panadurapowerworld@gmail.com"
              />
            </div>
          </div>
  
          {/* Description */}
          <div>
            <label className="block text-sm font-semibold mb-1">DESCRIPTION</label>
            <textarea
              className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-500"
              defaultValue="About the Gym"
              rows={3}
            />
          </div>
  
          {/* Images Upload */}
          <div>
            <label className="block text-sm font-semibold mb-1">IMAGES</label>
            <input type="file" className="w-full p-2 bg-gray-700 rounded-md text-white" />
          </div>
  
          {/* Update Button */}
          <div className="flex justify-end">
            <button className="bg-black px-6 py-2 rounded-md text-white">Update</button>
          </div>
        </form>
      </div>
    );
  };
  
  export default ModifyGymForm;
  