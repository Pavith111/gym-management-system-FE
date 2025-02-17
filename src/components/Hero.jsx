"use client";

import Image from 'next/image';
import { useState } from 'react'; // Import useState for search functionality

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission
    // Perform search logic here using searchTerm
    console.log("Searching for:", searchTerm);
    // You might redirect to a search results page or filter data here.
  };

  return (
    <section className="relative h-screen md:h-[700px] lg:h-screen bg-cover bg-center" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 md:p-10 lg:p-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 md:mb-6 lg:mb-16 leading-tight">
          TRY KYRO FITNESS AND GET UP TO 1 MONTHS OF PREMIUM ACCESS ON US
        </h1>



        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <p className="text-lg md:text-xl lg:text-2xl font-medium text-center">3 Day Trail Pass | SHAPE YOUR BODY</p>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg md:text-xl lg:text-2xl transition duration-300 ease-in-out">
            Sign Up Now
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;