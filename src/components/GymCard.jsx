import Image from "next/image";

const GymCard = ({ gym }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg text-center">
      <Image src={gym.image} alt={gym.name} width={300} height={200} className="rounded-lg mx-auto" />
      <h3 className="text-xl font-bold mt-4">{gym.name}</h3>
      <p>{gym.location}</p>
      <p className="text-gray-700">{gym.price}</p>
      <p className="text-sm text-gray-500">{(gym.features || []).join(" • ")}</p>
      <button className="mt-4 bg-black text-white px-6 py-2 rounded">Explore More</button>
    </div>
  );
};

export default GymCard;