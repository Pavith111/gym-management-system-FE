import { useState } from "react";

const GymListHero = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    price: "",
    facilities: "",
    location: "",
    rating: "",
  });

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value, filters); // Pass search query and filters
  };

  const handleFilterChange = (e, filterType) => {
    const newFilters = { ...filters, [filterType]: e.target.value };
    setFilters(newFilters);
    onSearch(searchQuery, newFilters); // Pass updated filters
  };

  return (
    <div
      className="relative bg-cover bg-center h-[400px] flex flex-col justify-center text-white px-6"
      style={{ backgroundImage: "url('/hero-image.jpg')" }}
    >
      <h2 className="text-4xl font-bold text-center">Find Your Perfect Gym</h2>
      <div className="flex justify-center gap-4 mt-6">
        <input
          type="text"
          placeholder="Search by Name, Location, or Facilities"
          value={searchQuery}
          onChange={handleInputChange}
          className="w-96 px-4 py-2 text-black rounded-md"
        />
        <select
          onChange={(e) => handleFilterChange(e, "price")}
          className="px-4 py-2 text-black rounded-md"
        >
          <option value="">Price range</option>
          <option value="Free">Free</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <select
          onChange={(e) => handleFilterChange(e, "facilities")}
          className="px-4 py-2 text-black rounded-md"
        >
          <option value="">Facilities</option>
          <option value="Cardio">Cardio</option>
          <option value="Weight Training">Weight Training</option>
          <option value="Sauna">Sauna</option>
          <option value="Pool">Pool</option>
        </select>
        <select
          onChange={(e) => handleFilterChange(e, "location")}
          className="px-4 py-2 text-black rounded-md"
        >
          <option value="">Location</option>
          <option value="Colombo 01">Colombo 01</option>
          <option value="Colombo 02">Colombo 02</option>
          <option value="Colombo 03">Colombo 03</option>
        </select>
        <select
          onChange={(e) => handleFilterChange(e, "rating")}
          className="px-4 py-2 text-black rounded-md"
        >
          <option value="">Rating Filter</option>
          <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
          <option value="4">⭐️⭐️⭐️⭐️</option>
        </select>
      </div>
    </div>
  );
};

export default GymListHero;
