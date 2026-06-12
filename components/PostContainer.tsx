// "use client"
// import React from 'react'
// import Link from 'next/link';
// import PostCard from './PostCard';
// import { posts } from '../app/data';
// import { motion } from 'framer-motion'
// import Image from 'next/image';
// import cargo from '@/public/cargo.png';
// import { div } from 'framer-motion/client';

// const PostContainer = () => {

//   return (
//     <div className='p-3 flex flex-col items-center lg:flex lg:flex-row lg:justify-evenly '>
//     {posts.map((post)=>(
//       <motion.div key={post.id} className='p-3 w-full sm:w-3/5 lg:w-1/4 flex flex-col  items-center text-white' initial={{ opacity:.8}} whileHover={{ opacity: 1, scale: 1.02,boxShadow: "0 0 20px gray" }}  transition={{ duration: .4 }}>
//         <h1 className='text-xl'>{post.title}</h1>
//         <Image className='h-50' src={post.img} alt='post_image' />
//         <p className='line-clamp-2'>{post.desc}</p>
//         <Link href={`/blog/${post.id}`} className=' w-30 flex justify-center bg-gray-900'>READ MORE</Link>
//       </motion.div>
//       ))}
//     </div>
//   )
// }

// export default PostContainer
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { posts } from "../app/data";

const PostContainer = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {posts.map((post) => (
        <motion.div
          key={post.id}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-2xl"
        >
          {/* Image */}

          <div className="relative overflow-hidden">
            <Image
              src={post.img}
              alt={post.title}
              className="w-full h-56 object-cover transition duration-500 hover:scale-110"
            />

            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/70 to-transparent"></div>

            <span className="absolute top-4 left-4 bg-indigo-600 text-xs px-3 py-1 rounded-full text-white">
              Blog
            </span>
          </div>

          {/* Content */}

          <div className="p-5 flex flex-col gap-4">
            <h2 className="text-xl font-bold text-white line-clamp-2">
              {post.title}
            </h2>

            <p className="text-gray-300 text-sm line-clamp-3">
              {post.desc}
            </p>

            <Link
              href={`/blog/${post.id}`}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700 hover:tracking-wide"
            >
              Read Article →
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PostContainer;