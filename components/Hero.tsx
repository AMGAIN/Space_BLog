import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { posts } from '../app/data';

import trend from '../public/trend.png';
import search from '../public/search.png';

const Hero = () => {
  const post = posts.find(p => p.id === 3);

  if (!post) {
    return <div className='p-10 text-2xl bg-red-500 text-white'>hero product not found</div>
  }

  return (
    <div className='bg-gray-900 text-white'>
      
      {/* MAIN HERO */}
      <div className=" mx-6 md:mx-12 pt-12 flex flex-col lg:flex-row gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="lg:w-1/2 w-full backdrop-blur-md bg-gray-800/40 p-6 md:p-10 rounded-2xl border border-gray-700 shadow-lg">

          {/* Label */}
          <div className='flex items-center gap-3 mb-4'>
            <Image className="w-5" src={trend} alt="flame" priority />
            <p className='text-gray-400 text-sm tracking-widest uppercase'>Hot News</p>
          </div>

          {/* Title */}
          <Link 
            href={`/blog/${post.id}`} 
            className="block text-3xl md:text-5xl font-semibold leading-tight hover:text-gray-300 transition duration-300"
          >
            {post.title}
          </Link>

          {/* Description */}
          <p className="mt-5 text-gray-300 text-base md:text-lg leading-relaxed line-clamp-2">
            {post.desc}
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className=' lg:w-1/2 w-full relative group'>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl z-10"></div>
          
          <Image 
            className="rounded-2xl border border-gray-700 shadow-lg group-hover:scale-105 transition duration-500"
            src={post.img} 
            alt="hero_Image" 
            priority 
          />
        </div>
      </div>

      {/* SEARCH + CTA */}
      <div className=" mt-12 px-6 md:px-12 pb-12 flex flex-col md:flex-row gap-5 justify-between items-center">

        {/* Search */}
        <div className=' flex items-center bg-gray-800 rounded-full px-3 py-2 w-full md:w-auto border border-gray-700 transition'>
          <input 
            type="text" 
            placeholder="Search similar news..." 
            className=" bg-transparent outline-none text-white px-3 w-full md:w-72"
          />
          <Image 
            className='w-8 cursor-pointer opacity-80 hover:opacity-100 transition' 
            src={search} 
            alt="search" 
          />
        </div>

        {/* Button */}
        <Link 
          href={'/blog'} 
          className="px-6 py-3 rounded-full bg-gray-700 hover:bg-gray-600 transition duration-300 hover:scale-105 text-sm tracking-wide"
        >
          EXPLORE →
        </Link>

      </div>
    </div>
  )
}

export default Hero

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { posts } from "../app/data";

// import trend from "../public/trend.png";
// import search from "../public/search.png";

// const Hero = () => {
//   const post = posts.find((p) => p.id === 3);

//   if (!post) {
//     return (
//       <div className="bg-red-500 text-white p-10 text-center text-2xl">
//         Hero Post Not Found
//       </div>
//     );
//   }

//   return (
//     <section className="px-6 md:px-12 py-10 bg-gray-900">

//       <div className="relative overflow-hidden rounded-3xl">

//         {/* Background Image */}

//         <Image
//           src={post.img}
//           alt={post.title}
//           priority
//           className="w-full h-[650px] object-cover"
//         />

//         {/* Overlay */}

//         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20"></div>

//         {/* Floating Content */}

//         <div className="absolute inset-0 flex items-center">

//           <div className="max-w-2xl ml-8 md:ml-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12">

//             {/* Badge */}

//             <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-6">

//               <Image
//                 src={trend}
//                 alt="trend"
//                 className="w-4 h-4"
//               />

//               Trending News

//             </div>

//             {/* Heading */}

//             <Link href={`/blog/${post.id}`}>

//               <h1 className="text-4xl md:text-6xl font-bold leading-tight hover:text-gray-300 transition cursor-pointer">

//                 {post.title}

//               </h1>

//             </Link>

//             {/* Description */}

//             <p className="mt-6 text-gray-300 text-lg leading-8 line-clamp-3">

//               {post.desc}

//             </p>

//             {/* Buttons */}

//             <div className="flex flex-wrap gap-5 mt-10">

//               <Link
//                 href={`/blog/${post.id}`}
//                 className="bg-white text-black px-7 py-3 rounded-full font-semibold hover:scale-105 hover:bg-gray-200 transition duration-300"
//               >
//                 Read Article
//               </Link>

//               <Link
//                 href="/blog"
//                 className="border border-white/40 px-7 py-3 rounded-full hover:bg-white hover:text-black transition duration-300"
//               >
//                 Explore Blogs →
//               </Link>

//             </div>

//           </div>

//         </div>

//       </div>

//       {/* Bottom Search Section */}

//       <div className="relative -mt-10 z-20 flex justify-center">

//         <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-full flex items-center px-5 py-3 w-full max-w-2xl shadow-2xl">

//           <input
//             type="text"
//             placeholder="Search technology, AI, programming..."
//             className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-400 px-2"
//           />

//           <button className="bg-indigo-600 p-3 rounded-full hover:bg-indigo-500 transition">

//             <Image
//               src={search}
//               alt="search"
//               className="w-5 h-5"
//             />

//           </button>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default Hero;