"use client"
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 flex items-center justify-center px-4 py-10">
      
      <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-3xl shadow-2xl p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Create Account
          </h1>
          <p className="text-gray-400 mt-2">
            Join us and get started today
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-5">
          
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition"
            />
          </div>

          {/* Terms */}
          <label className="flex items-start gap-2 text-sm text-gray-400">
            <input
              type="checkbox"
              className="accent-gray-500 mt-1"
            />
            <span>
              I agree to the{" "}
              <span className="text-white cursor-pointer hover:underline">
                Terms & Conditions
              </span>
            </span>
          </label>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gray-200 text-gray-900 font-semibold py-3 rounded-xl hover:bg-white transition duration-300 shadow-lg"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <span className="text-white hover:underline cursor-pointer">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default page;