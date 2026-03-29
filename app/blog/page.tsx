import BlogBody from '@/components/BlogBody'
import BlogInfo from '@/components/BlogInfo'
import PostCard from '@/components/PostCard';
import { posts } from '../data';
import React from 'react'


const page = () => {
  return (
    <div className='text-gray-300'>
      <div className='md: text-center  bg-gray-950 text-5xl'>
        <p >BLOGs</p>
      </div>

      <div className=' bg-gray-900 border-white flex flex-col pb-5 items-center'>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            author={post.author}
            title={post.title}
            date={post.date_time}
            desc={post.desc}
            img={post.img}
          />
        ))}
      </div>

    </div>
  )
}

export default page