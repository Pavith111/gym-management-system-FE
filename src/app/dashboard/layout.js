"use client";

import Navbar from "@/components/Dashboard/NavBar";
import SideBar from "@/components/Dashboard/SideBar";
import Footer from "@/components/Footer";
import React from "react";

export default function GymManagementPage({ children }) {
  return (
    <div className="flex bg-gradient-to-b from-gray-100 to-gray-900 max-h-screen">
      <SideBar />
      <div className="flex-1">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
