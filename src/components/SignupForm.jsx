"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="relative flex h-screen items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/gym-bg.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 w-full max-w-md rounded-lg bg-gray-900 bg-opacity-80 p-8 text-white">
        <h2 className="mb-6 text-center text-2xl font-semibold">Create Your Account!</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Full name</label>
            <input type="text" className="mt-1 w-full rounded-lg border border-gray-700 bg-gray-800 p-2.5 focus:border-white focus:ring-white" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium">Gmail</label>
            <input type="email" className="mt-1 w-full rounded-lg border border-gray-700 bg-gray-800 p-2.5 focus:border-white focus:ring-white" placeholder="your.email@gmail.com" />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="mt-1 w-full rounded-lg border border-gray-700 bg-gray-800 p-2.5 focus:border-white focus:ring-white"
              placeholder="Enter password"
            />
            <button
              type="button"
              className="absolute right-3 top-10 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="relative">
            <label className="block text-sm font-medium">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="mt-1 w-full rounded-lg border border-gray-700 bg-gray-800 p-2.5 focus:border-white focus:ring-white"
              placeholder="Confirm password"
            />
            <button
              type="button"
              className="absolute right-3 top-10 text-gray-400"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="h-4 w-4 rounded border-gray-700 bg-gray-800 focus:ring-white" />
            <label className="ml-2 text-sm">Remember Me</label>
          </div>
          <button className="w-full rounded-lg bg-gray-700 p-2.5 text-white hover:bg-gray-600">Sign up</button>
          <div className="flex items-center justify-center">
            <p className="ml-2 text-sm">Already have an account? <Link href="/user/login" className="text-blue-600">Log in</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}
