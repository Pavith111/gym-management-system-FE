import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const mockData = {
  "cross-fit": {
    name: "CrossFit Ceylon",
    address: "123 Main Street, Anytown, CA 91234",
    phone: "(555) 123-4567",
    website: "www.crossfitceylon.com",
    location: "Colombo 2",
    price: "LKR 17,000/month",
    amenities: [
      "Advanced Equipments",
      "Personal Trainers",
      "Strength Training",
    ],
    cover: "/images/gym/gym1.jpg",
    images: [
      "/images/gym/gym1.jpg",
      "/images/gym/gym2.jpg",
      "/images/gym/gym3.jpg",
    ],
    hours: {
      weekdays: "6:00 AM - 10:00 PM",
      saturday: "8:00 AM - 8:00 PM",
      sunday: "10:00 AM - 6:00 PM",
    },
    pricing: {
      monthly: "LKR 17,000/month",
      annual: "LKR 170,000/year (Save 20%)",
      dayPass: "LKR 1,500/day",
    },
  },
  "fitness-club": {
    name: "Fitness Hub",
    address: "456 Elm Street, Othertown, NY 12345",
    phone: "(555) 987-6543",
    website: "www.fitnesshub.com",
    location: "Colombo 5",
    price: "LKR 15,500/month",
    amenities: ["Cardio Machines", "Group Classes", "Strength Training"],
    cover: "/images/gym/gym2.jpg",
    images: [
      "/images/gym/gym4.jpg",
      "/images/gym/gym5.jpg",
      "/images/gym/gym1.jpg",
    ],
    hours: {
      weekdays: "6:00 AM - 10:00 PM",
      saturday: "8:00 AM - 8:00 PM",
      sunday: "10:00 AM - 6:00 PM",
    },
    pricing: {
      monthly: "LKR 15,500/month",
      annual: "LKR 155,000/year (Save 20%)",
      dayPass: "LKR 1,200/day",
    },
  },
};

export default async function GymProfile({ params }) {
  const slug = (await params).slug;
  const gymData = mockData[slug] || {};

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen">
      <NavBar />

      <div className="container mx-auto text-center mt-8">
        <Image
          src={gymData.cover}
          alt="Gym Cover"
          width={600}
          height={400}
          className="rounded-lg mx-auto"
        />
        <div className="bg-gray-300 shadow-md rounded-lg p-6 mt-4 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold">{gymData.name}</h2>
          <p className="text-gray-700">
            Address: {gymData.address} <br />
            Phone: {gymData.phone} <br />
            Website:{" "}
            <a
              href={`https://${gymData.website}`}
              className="text-blue-500"
              target="_blank"
            >
              {gymData.website}
            </a>
          </p>
        </div>
      </div>

      <div className="container mx-auto text-center my-8 max-w-3xl px-4">
        <p className="text-gray-800">
          Welcome to {gymData.name}, your premier destination for fitness in{" "}
          {gymData.location}. We offer state-of-the-art facilities with
          top-of-the-line equipment, a variety of classes, and a team of
          experienced trainers dedicated to helping you achieve your fitness
          goals.
        </p>
      </div>

      <div className="container mx-auto flex justify-center gap-6">
        {gymData.images &&
          gymData.images.map((image, index) => (
            <Image
              src={image}
              alt={index}
              width={200}
              height={150}
              className="rounded-lg shadow-md"
            />
          ))}
      </div>

      <div className="container mx-auto text-center mt-10 px-4">
        <h3 className="text-2xl font-bold">Amenities:</h3>
        <ul className="text-gray-800 mt-4">
          {gymData.amenities &&
            gymData.amenities.map((amenity, index) => (
              <li key={index}>✔ {amenity}</li>
            ))}
        </ul>
      </div>

      <div className="container mx-auto flex flex-wrap justify-center gap-6 mt-10">
        <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center w-72">
          <h4 className="font-bold pb-2">Hours:</h4>
          <b>Weekdays:</b> {gymData.hours?.weekdays} <br />
          <b>Saturday:</b> {gymData.hours?.saturday} <br />
          <b>Sunday:</b> {gymData.hours?.sunday}
        </div>
        <div className="bg-gray-200 py-6 px-4 rounded-lg shadow-md text-center w-80">
          <h4 className="font-bold pb-2">Pricing:</h4>
          <b>Monthly Membership</b>: {gymData.pricing?.monthly} <br />
          <b>Annual Membership:</b> {gymData.pricing?.annual} <br />
          <b>Day Pass:</b> {gymData.pricing?.dayPass} <br />
        </div>
      </div>

      <div className="container mx-auto text-center my-10">
        <button className="bg-black text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-gray-800 transition">
          Grab Your Trial Pass
        </button>
      </div>
      <Footer />
    </div>
  );
}
