import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300 border-t border-gray-800'>

      <div className='max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

        {/* LEFT - INFO */}
        <div className='space-y-3 text-sm'>
          <p className='text-white font-semibold text-lg'>My Blog</p>
          <p>Tel: 123-234-121</p>
          <Link href={'/policy'} className='hover:text-white transition'>Blog Policy</Link>
          <p className='hover:text-white cursor-pointer transition'>Accessibility Statement</p>
          <p className='text-gray-500 text-xs pt-4'>
            © 2026 My Blog. All rights reserved.
          </p>
        </div>

        {/* MIDDLE - SPACER / OPTIONAL LINKS */}
        <div className='hidden lg:block'></div>

        {/* RIGHT - SUBSCRIBE */}
        <div className='w-full'>
          <h1 className='text-xl md:text-2xl font-semibold text-white mb-2'>
            Join the Conversation
          </h1>
          <p className='text-gray-400 mb-6 text-sm md:text-base'>
            Get the content you need, just when you need it.
          </p>

          <form className='space-y-4'>

            {/* NAME ROW */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <input
                type="text"
                placeholder='First name'
                className='flex-1 px-4 py-2 md:w-1/2 rounded-md bg-gray-800 border border-gray-700 outline-none focus:ring-2 ring-gray-500'
              />
              <input
                type="text"
                placeholder='Last name'
                className='flex-1 px-4 py-2 md:w-1/2 rounded-md bg-gray-800 border border-gray-700 outline-none focus:ring-2 ring-gray-500'
              />
            </div>

            {/* EMAIL */}
            <input
              type="email"
              placeholder='Email address'
              className='w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 outline-none focus:ring-2 ring-gray-500'
            />

            {/* BUTTON */}
            <button
              type="submit"
              className='w-full py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition duration-300 hover:scale-[1.02]'
            >
              Subscribe
            </button>

          </form>
        </div>

      </div>

    </footer>
  )
}

export default Footer