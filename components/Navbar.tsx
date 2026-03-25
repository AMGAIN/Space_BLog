import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <div className='p-4 pl-12 flex bg-gray-800 justify-between text-gray-200 text-xl shadow-2xl items-center sticky top-0 z-50'>
        <div className='flex justify-between w-96 '>
          <Link href={'/'} className='text-3xl text-underline hover:cursor-pointer'>X-plora</Link>
          <Link href={'/blog'} className='text-3xl text-underline hover:cursor-pointer'>Blogs</Link>
        </div>
        <div className='w-[480px] flex justify-between mr-12'>
          {['About us', 'Languages', 'Contact', 'Login'].map((items) => (
            <button className='hover:cursor-pointer after:block after:h-[1px] after:bg-gray-300 after:rounded-2xl after:scale-x-0 after:transition-transform after:duration-1000 after:origin-left hover:after:scale-x-100 hover:text-white'>{items}</button>
          ))}
        </div>
      </div>
    </>
  )
}

export default Navbar