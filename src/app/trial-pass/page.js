import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function FreePass() {
  const locations = [
    {
      city: "Colombo, Bambalapitiya",
      address: "No. 123, Galle Road, Bambalapitiya, Colombo 04",
      phone: "+94 77 123 4567",
    },
    {
      city: "Kandy, Peradeniya Road",
      address: "No. 45, Peradeniya Road, Kandy",
      phone: "+94 81 234 5678",
    },
    {
      city: "Galle, Fort",
      address: "No. 10, Church Street, Galle Fort, Galle",
      phone: "+94 91 345 6789",
    },
  ];

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-gray-100 to-gray-300">
      <NavBar />

      {/* Header */}
      <div className="mb-10">
        <div className="container mx-auto text-center mt-10">
          <h2 className="text-3xl font-bold">Free 3-Day Pass</h2>
          <p className="text-lg text-gray-700 mt-2">
            Take some time to get to know Anytime Fitness. The pass is FREE!
          </p>
        </div>

        {/* Choose Gym Section */}
        <div className="container mx-auto text-center mt-10">
          <h3 className="text-2xl font-bold">Choose Your Gym</h3>
          <p className="text-gray-700 mt-2 font-semibold">
            Select one of these top locations near you:
          </p>

          {/* Location List */}
          <div className="mt-6 space-y-6">
            {locations.map((location, index) => (
              <Link href="/trial-pass/form">
                <div key={index} className="text-lg text-gray-800">
                  <p className="flex items-center justify-center gap-2 text-xl font-bold">
                    📍 {location.city}
                  </p>
                  <p>{location.address}</p>
                  <p className="flex items-center justify-center gap-2 mt-2">
                    📞 {location.phone}
                  </p>
                  {index < locations.length - 1 && (
                    <hr className="w-1/3 mx-auto my-4 border-gray-400" />
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
