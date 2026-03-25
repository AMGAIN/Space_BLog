import React from 'react'
import Image from 'next/image'
import cargo from '../public/cargo.png'

const BlogBody = () => {
  return (
    <div className='p-3 w-[1200px] '>
        <h1 className='text-5xl mb-10'>Progress Cargo Craft Approaching Station for Docking</h1>
        <Image className='w-[1000px]' src={cargo} alt="cargo ship "></Image>
        <p className='my-10 text-2xl'>NASA’s live coverage of rendezvous and docking is now underway on NASA+, Amazon Prime, and the agency’s YouTube channel. Learn how to watch NASA content through a variety of online platforms, including social media. The Roscosmos Progress 94 spacecraft launched at 7:59 a.m. EDT (4:59 p.m. Baikonur time) March 22 on a Soyuz rocket from the Baikonur Cosmodrome in Kazakhstan.  </p>
    </div>
  )
}

export default BlogBody