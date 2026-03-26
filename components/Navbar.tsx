import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
    <div>
      <div className=' md p-2 pl-12 flex bg-gray-800 justify-between text-gray-200 shadow-2xl shadow-[0_4px_8px_rgba(0,0,0,0.6)] items-center sticky top-0 z-50 sm:text-1xl'>
        <div className='flex justify-between items-center w-64 px-4 py-2 rounded-xl bg-gray-800/40 backdrop-blur-md  shadow-lg text-2xl font-semibold'>

          <Link href={'/'} className='transition-colors duration-300 hover:text-white text-gray-300'>
            X-Plora
          </Link>

          <Link href={'/blog'} className='relative text-gray-300 transition-colors duration-300 hover:text-white after:block after:h-[2px] after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100'>
            Blogs
          </Link>

        </div>
        
        <div className='w-[480px] flex justify-between mr-12 px-4 py-2 rounded-xl bg-gray-800/40 backdrop-blur-md border border-gray-700 shadow-lg'>
          {['About us', 'Languages', 'Contact', 'Login'].map((items) => (
            <button
              key={items}
              className='
              relative px-3 py-1 text-gray-300 font-medium
              transition-colors duration-300
              hover:text-white

              after:block after:h-[2px] after:bg-white
              after:rounded-full after:scale-x-0
              after:transition-transform after:duration-300
              after:origin-left
              hover:after:scale-x-100
              hover:cursor-pointer'
            >
              {items}
            </button>
          ))}
        </div>
        
      </div>
      <div>

      </div>
      </div>
    </>
  )
}

export default Navbar