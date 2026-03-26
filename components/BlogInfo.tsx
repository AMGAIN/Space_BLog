import React from 'react'
import Image, { StaticImageData } from "next/image";
import Link from 'next/link';
import x from '../public/x.png'
import facebook from '../public/facebook.png'
import linkedin from '../public/linkedIn.png'

type Props = {
  id: number
  title: string
  author: string
  date_time: string
  desc: string
  img: StaticImageData
}

const BlogInfo = ({ id, title, author,date_time, desc, img}: Props) => {
    return (
        <div className='p-4  w-[300px] '>
            <div className='my-5 gap-2 flex item-center'>
                <div className='border  border-red-300 rounded-[50%] bg-red-100 w-20 h-20'></div>
                <div className='flex items-center text-3xl'>{author}</div>
            </div>
            <hr />
            <div className='my-5 text-gray-400'>{date_time}</div>
            <hr />
            <div className='my-5 '>Categories:</div>
            <div className=''>
                {['SpaceStation', 'SpaceLogistics', 'CheaperTravel'].map((cat) => (
                    <button key={cat} className='p-3 m-2 bg-gray-700 border hover:cursor-pointer'>{cat}</button>
                ))}
            </div>
            <div className='m-5 flex justify-center gap-5'>
                {[x, facebook, linkedin].map((cat,index) => (
                    <Image key={index} src={cat}  alt="img" className='w-15 hover:cursor-pointer'/>
                ))}
            </div>
            <hr />
        </div>
    )
}

export default BlogInfo