"use client"
import React from 'react'
import Link from 'next/link';
import PostCard from './PostCard';
import { posts } from '../app/data';
import { motion } from 'framer-motion'
import Image from 'next/image';
import cargo from '@/public/cargo.png';
import { div } from 'framer-motion/client';

const PostContainer = () => {

  return (
    <div className='p-3 flex flex-col items-center lg:flex lg:flex-row lg:justify-evenly '>
    {posts.map((post)=>(
      <motion.div key={post.id} className='p-3 w-full sm:w-3/5 lg:w-1/4 flex flex-col  items-center text-white' initial={{ opacity:.8}} whileHover={{ opacity: 1, scale: 1.02,boxShadow: "0 0 20px white" }}  transition={{ duration: .4 }}>
        <h1 className='text-xl'>{post.title}</h1>
        <Image className='h-50' src={post.img} alt='post_image' />
        <p className='line-clamp-2'>{post.desc}</p>
        <Link href={`/blog/${post.id}`} className=' w-30 flex justify-center bg-gray-900'>READ MORE</Link>
      </motion.div>
      ))}
    </div>
  )
}

export default PostContainer