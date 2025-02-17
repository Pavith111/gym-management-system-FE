import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen">
      <NavBar />

      <div className="container mx-auto text-center mt-12 max-w-2xl px-4">
        <h2 className="text-3xl font-bold mb-6">Free 3-Day Pass</h2>

        {/* Location Details */}
        <div className="text-gray-800 mb-8">
          <p className="text-lg flex items-center justify-center gap-2">
            📍 <span>Colombo, Bambalapitiya</span>
          </p>
          <p>No. 123, Galle Road, Bambalapitiya, Colombo 04</p>
          <p className="text-lg flex items-center justify-center gap-2 mt-2">
            📞 <span>+94 77 123 4567</span>
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4 text-left">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-md"
              placeholder="Enter first name"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-md"
              placeholder="Enter last name"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 border rounded-md"
              placeholder="Enter email"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-md"
              placeholder="Enter phone number"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white w-full py-3 rounded-md font-bold"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="container mx-auto text-center my-10 px-4">
        <h3 className="text-xl font-bold">Terms & Conditions</h3>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          Offer valid for new customers at participating Kyro Fitness locations
          in Sri Lanka. Each location is independently owned and operated. By
          providing your contact details, you agree to receive communications
          from Kyro Fitness and its affiliates. Standard message and data rates
          may apply. Visit your nearest Kyro Fitness for full terms.
        </p>
      </div>
      <Footer />
    </div>
  );
}
