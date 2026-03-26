import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer >
            <div className='shadow-2xl shadow-[0_-4px_8px_rgba(0,0,0,0.6)] px-20 p-5 flex justify-between items-center gap-10 bg-gray-800 text-gray-200'>
            <div>
                123-234-121 <br />
                <Link href={'/policy'}>Blog_Policy</Link><br />
                 Accessibility Statement
            </div> 
            <div className=' p-2 w-[700px] text-left'>
            <h1 className='text-5xl'>JOIN  THE CONVERSATION </h1>
            <p className='text-2xl'>Get the content you need, just when you need it</p>
            <form action="">
                <div className='p-2 border'>
                    <input type="text" className='border-b h-10 mr-20 outline-none' placeholder='First name' />
                    <input type="text" className='border-b h-10 outline-none' placeholder='Last name' /><br />
                    <input type="text" className='border-b h-10 outline-none' placeholder='Email' /><br />
                </div>
                <button className='bg-gray-300  text-5xl w-[100%] text-gray-800 hover:cursor-pointer'>Subscribe</button>
            </form>
            </div>
            </div>
            <p className='bg-gray-800 text-white text-center'>© 2026 My Blog. All rights reserved.</p>
        </footer>
    )
}

export default Footer