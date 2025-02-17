"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import GymList from "@/components/GymList";
import NavBar from "@/components/NavBar";
import RegisterGym from "@/components/RegisterGym";
import GymListHero from "@/components/GymListHero";

export default function GymListing() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    price: "",
    facilities: "",
    location: "",
    rating: "",
  });

  const handleSearch = (query, newFilters) => {
    setSearchQuery(query);
    setFilters(newFilters);
  };

  return (
    <div>
      <NavBar />
      <GymListHero onSearch={handleSearch} />
      <GymList searchQuery={searchQuery} filters={filters} />
      <RegisterGym />
      <Footer />
    </div>
  );
}