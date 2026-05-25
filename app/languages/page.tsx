import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 flex items-center justify-center px-4">
      
      <div className="w-full  bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-3xl shadow-2xl p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">Choose the Language your are comfertable:</h1>
          <p className="text-gray-400 mt-2">
            Language for your conveniance
          </p>
        </div>

        {/* contact info */}
        <form className=" flex flex-col gap-5">
          
          {/* Nepali */}
          <div className="flex text-white  gap-2">
            <span className="text-xl ">Nepali</span>
            <p className=" flex justify-center items-center text-gray-300"></p>
          </div>

          {/* Chinese */}
          <div className="flex text-white  gap-2">
            <span className="text-xl ">Chinese</span>
            <p className=" flex justify-center items-center text-gray-300"></p>
          </div>

          {/* Spanish */}
          <div className="flex text-white  gap-2">
            <span className="text-xl ">Spanish</span>
            <p className=" flex justify-center items-center text-gray-300"></p>
          </div>



          {/* Remember + Forgot */}
          {/* <div className="flex items-center justify-between text-sm">

            <textarea
              className=" h-20 w-full p-5 text-gray-300 hover:text-white transition rounded-xl" placeholder="any query.........."
            ></textarea>
          </div> */}

          {/* Button */}
          <button className="w-full bg-gray-200 text-gray-900 font-semibold py-3 rounded-xl hover:bg-white transition duration-300 shadow-lg">
            Confirm Language
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;