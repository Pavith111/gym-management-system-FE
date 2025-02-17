import GymCard from "./GymCard";

const gyms = [
  {
    id: 1,
    name: "CrossFit Ceylon",
    location: "Colombo 1",
    price: "LKR 17,000/month",
    features: ["Advanced Equipments", "Personal Trainers", "Strength Training"],
    image: "/images/gym/gym1.jpg",
  },
  {
    id: 2,
    name: "Power World",
    location: "Colombo 1",
    price: "LKR 16,000/month",
    features: ["Normal Equipments", "Personal Trainers", "Strength Training"],
    image: "/images/gym/gym2.jpg",
  },
];

const GymList = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
      {gyms.map((gym) => (
        <GymCard key={gym.id} gym={gym} />
      ))}
      <div className="col-span-3 text-center">
        <button className="bg-gray-300 px-6 py-3 rounded-full text-lg font-bold">Load More</button>
      </div>
    </div>
  );
};

export default GymList;