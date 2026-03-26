import BlogBody from '@/components/BlogBody'
import BlogInfo from '@/components/BlogInfo'
import PostContainer from '@/components/PostContainer'
import React from 'react'


const page = () => {
  return (
    <div className='text-gray-300'>
      <div className='md: text-center  bg-gray-950 text-5xl'>
        <p >BLOGs</p>
      </div>
      
      <PostContainer/>
      
    </div>
  )
}

export default page