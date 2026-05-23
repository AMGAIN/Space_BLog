import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 flex items-center justify-center px-4">
      
      <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-3xl shadow-2xl p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">Welcome Back</h1>
          <p className="text-gray-400 mt-2">
            Login to continue to your account
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-5">
          
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-400">
              <input type="checkbox" className="accent-gray-500" />
              Remember me
            </label>

            <a
              href="#"
              className="text-gray-300 hover:text-white transition"
            >
              Forgot Password?
            </a>
          </div>

          {/* Button */}
          <button className="w-full bg-gray-200 text-gray-900 font-semibold py-3 rounded-xl hover:bg-white transition duration-300 shadow-lg">
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Don’t have an account?{" "}
          <span className="text-white hover:underline cursor-pointer">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default page;