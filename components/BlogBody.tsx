import React from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image';

type Props = {
  id: number
  title: string
  author: string
  date_time: string
  desc: string
  img: StaticImageData
}

const BlogBody = ({ id, title,author, date_time, desc, img}: Props) => {
  return (
    <div className='border py-5 w-[700px]  '>
        <h1 className='text-5xl mb-10'>{title}</h1>
        <Image className='w-[1100px]' src={img} alt="cargo ship "></Image>
        <p className='my-10 text-justify'>{desc}</p>
    </div>
  )
}

export default BlogBody