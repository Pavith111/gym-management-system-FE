import { useState } from "react";
import GymCard from "./GymCard";

const gymsData = [
  {
    id: 1,
    name: "CrossFit Ceylon",
    location: "Colombo 01",
    price: "LKR 17,000/month",
    facilities: [
      "Advanced Equipments",
      "Personal Trainers",
      "Strength Training",
    ],
    rating: 5,
    image: "/images/gym/gym1.jpg",
  },
  {
    id: 2,
    name: "Power World",
    location: "Colombo 02",
    price: "LKR 16,000/month",
    facilities: ["Normal Equipments", "Personal Trainers", "Strength Training"],
    rating: 4,
    image: "/images/gym/gym2.jpg",
  },
];

const GymList = ({ searchQuery, filters }) => {
  const [gyms, setGyms] = useState(gymsData);

  const filteredGyms = gyms.filter((gym) => {
    const matchesSearch =
      gym.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gym.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gym.facilities.some((facility) =>
        facility.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesFilters =
      (!filters.price ||
        gym.price.toLowerCase().includes(filters.price.toLowerCase())) &&
      (!filters.facilities || gym.facilities.includes(filters.facilities)) &&
      (!filters.location || gym.location === filters.location) &&
      (!filters.rating || gym.rating.toString() === filters.rating);

    return matchesSearch && matchesFilters;
  });

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
      {filteredGyms.length > 0 ? (
        filteredGyms.map((gym) => <GymCard key={gym.id} gym={gym} />)
      ) : (
        <p className="text-center col-span-3">
          No gyms match your search criteria.
        </p>
      )}
      <div className="col-span-3 text-center">
        <button className="bg-gray-300 px-6 py-3 rounded-full text-lg font-bold">
          Load More
        </button>
      </div>
    </div>
  );
};

export default GymList;
