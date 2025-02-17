const GymListHero = () => {
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
          className="w-96 px-4 py-2 text-black rounded-md"
        />
        <select className="px-4 py-2 text-black rounded-md">
          <option>Price range</option>
          <option>Free</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <select className="px-4 py-2 text-black rounded-md">
          <option>Facilities</option>
          <option>Cardio</option>
          <option>Weight Training</option>
          <option>Sauna</option>
          <option>Pool</option>
        </select>
        <select className="px-4 py-2 text-black rounded-md">
          <option>Location</option>
          <option>Colombo 01</option>
          <option>Colombo 02</option>
          <option>Colombo 03</option>
        </select>
        <select className="px-4 py-2 text-black rounded-md">
          <option>Rating Filter</option>
          <option>⭐️⭐️⭐️⭐️⭐️</option>
          <option>⭐️⭐️⭐️⭐️</option>
        </select>
      </div>
    </div>
  );
};

export default GymListHero;
