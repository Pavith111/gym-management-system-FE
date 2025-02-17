import React from "react";

export default function GymRegistrationForm() {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex flex-col"
      style={{ backgroundImage: "url('/images/gym/gym5.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative max-w-3xl mx-auto mt-10 px-6 text-white font-bold">
        <h2 className="text-4xl font-bold text-center">
          Register your Gym with us!
        </h2>

        <form className="mt-8 space-y-6 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">First Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Last Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="tel"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Phone"
              />
            </div>
          </div>

          {/* City & Capital */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">
                City of Interest
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="City"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Available Liquid Capital (Including Partners)
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="0 - 100,000"
              />
            </div>
          </div>

          {/* Comments */}
          <div>
            <label className="block text-sm font-medium">Comments</label>
            <textarea
              className="w-full px-3 py-2 border rounded-md"
              rows={3}
              placeholder="Comments"
            ></textarea>
          </div>

          {/* Terms & Conditions */}
          <p className="text-xs text-white">
            By clicking Submit, I accept the{" "}
            <a href="#" className="underline">
              Terms and Conditions
            </a>
            , and I have read and understand the{" "}
            <a href="#" className="underline">
              Privacy Notice
            </a>
            .
          </p>

          {/* Checkbox */}
          <div className="flex items-start space-x-2 text-xs">
            <input type="checkbox" className="mt-1" />
            <p>
              I'd like to be contacted about franchise opportunities and agree
              to receive marketing communications.
              <a href="#" className="underline">
                {" "}
                Text Messaging Terms
              </a>
              .
            </p>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-red-500 text-white py-2 rounded-md mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
