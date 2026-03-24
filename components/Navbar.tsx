import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='p-4 pl-12 flex bg-gray-800 justify-between text-gray-200 text-xl shadow-2xl items-center sticky top-0 z-50'>
      <p className='text-3xl text-underline hover:cursor-pointer'>X-plora</p>
      <div className='w-[480px] flex justify-between mr-12'> 
        <button className='hover:cursor-pointer after:block after:h-[1px] after:bg-gray-300 after:rounded-2xl after:scale-x-0 after:transition-transform after:duration-1000 after:origin-left hover:after:scale-x-100 hover:text-white'>About us</button>
        <button className='hover:cursor-pointer after:block after:h-[1px] after:bg-gray-300 after:rounded-2xl after:scale-x-0 after:transition-transform after:duration-1000 after:origin-left hover:after:scale-x-100 hover:text-white'>Languages</button>
        <button className='hover:cursor-pointer after:block after:h-[1px] after:bg-gray-300 after:rounded-2xl after:scale-x-0 after:transition-transform after:duration-1000 after:origin-left hover:after:scale-x-100 hover:text-white'>Contact</button>
      </div>
    </div>
    </>
  )
}

export default Navbar