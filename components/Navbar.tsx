'use client'

import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import menu from '../public/menu.png'
import Image from 'next/image';

const task = [{ title: 'About us', path: '/about' },
{ title: 'Languages', path: 'languages' },
{ title: 'Contact', path: '/contact' },
{ title: 'Login', path: '/login' }];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='p-2 pl-12 flex bg-gray-800 justify-between text-gray-200 shadow-2xl shadow-[0_4px_8px_rgba(0,0,0,0.6)] items-center sticky top-0 z-50 sm:text-1xl'>
      <div className='flex justify-between items-center w-64 px-4 py-2 rounded-xl bg-gray-800/40 text-2xl font-semibold'>
        <Link href={'/'} className='transition-colors duration-300 hover:text-white text-gray-300'>
          X-Plora
        </Link>
        <Link href={'/blog'} className='relative text-gray-300 transition-colors duration-300 hover:text-white after:block after:h-[2px] after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100'>
          Blogs
        </Link>
      </div>
      <div className='absolute right-0 gap-5 w-[450px] hidden md:flex flex bg-gray-800/50 backdrop-blur-md shadow-2xl'>
        {task.map((items, index) => (
          <Link href={items.path}
            key={index}
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
            {items.title}
          </Link>
        ))}
      </div>

      <button className=' relative' onClick={() => { setOpen(!open) }}>
        <Image className='md:hidden  w-10  invert hover:cursor-pointer' src={menu} alt="menu" />
      </button>

      {open &&
        <div className='md:hidden w-52 absolute right-[-50px] top-16 rounded-2xl flex flex-col mr-12 px-4 py-2 bg-gray-900/90 backdrop-blur-md shadow-lg'>
          {task.map((items, index) => (
            <Link href={items.path}
              key={index}
              className='
              relative px-3 py-1 text-2xl text-gray-300 font-medium
              transition-colors duration-300
              hover:text-white

              after:block after:h-[2px] after:bg-white
              after:rounded-full after:scale-x-0
              after:transition-transform after:duration-300
              after:origin-left
              hover:after:scale-x-100
              hover:cursor-pointer'
            >
              {items.title}
            </Link>
          ))}
        </div>
      }
    </div>
  )
}

export default Navbar