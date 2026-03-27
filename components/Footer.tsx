import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer >
            <div className=' shadow-2xl shadow-[0_-4px_8px_rgba(0,0,0,0.6)] flex justify-center md:justify-between md:px-20 p-5 items-center gap-10 bg-gray-600 text-gray-200'>
                <div className=' md:block hidden'>
                    Tel: 123-234-121 <br />
                    <Link href={'/policy'}>Blog_Policy</Link><br />
                    Accessibility Statement
                    <p className='text-white '>© 2026 My Blog. All rights reserved.</p>
                </div>
                <div>
                <div className='p-2 w-[350px] md:w-[440px] text-left'>
                    <h1 className='text-3xl'>JOIN  THE CONVERSATION </h1>
                    <p className='md:text-2xl text-xl'>Get the content you need, just when you need it</p>
                    <form action="">
                        <div className='p-2 border'>
                            <input type="text" className='border-b h-10 mr-20 outline-none' placeholder='First name' />
                            <input type="text" className='border-b h-10 outline-none' placeholder='Last name' /><br />
                            <input type="text" className='border-b h-10 outline-none' placeholder='Email' /><br />
                        </div>
                        <button className='bg-gray-300  text-5xl w-[100%] text-gray-800 hover:cursor-pointer'>Subscribe</button>
                    </form>
                </div>
                <div className='md:hidden'>
                    123-234-121 <br />
                    <Link href={'/policy'}>Blog_Policy</Link><br />
                    Accessibility Statement
                    <p className='text-white '>© 2026 My Blog. All rights reserved.</p>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer