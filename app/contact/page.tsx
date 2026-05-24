import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 flex items-center justify-center px-4">
      
      <div className="w-full  bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-3xl shadow-2xl p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">How Can You Contact US</h1>
          <p className="text-gray-400 mt-2">
            Keep in Touch with US
          </p>
        </div>

        {/* contact info */}
        <div className=" flex flex-col gap-5">
          
          {/* Telephone no. */}
          <div className="flex text-white  gap-2">
            <span className="text-xl ">Telephone No. :</span>
            <p className=" flex justify-center items-center text-gray-300">+977 9803238922</p>
          </div>

          {/* Password */}
          <div className="flex text-white  gap-2">
            <span className="text-xl ">Email :</span>
            <p className=" flex justify-center items-center text-gray-300">myblog@hotmail.com</p>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">

            <textarea
              className=" h-20 w-full p-5 text-gray-300 hover:text-white transition rounded-xl" placeholder="any query.........."
            ></textarea>
          </div>

          {/* Button */}
          <button className="w-full bg-gray-200 text-gray-900 font-semibold py-3 rounded-xl hover:bg-white transition duration-300 shadow-lg">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;