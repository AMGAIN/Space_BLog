import BlogBody from '@/components/BlogBody'
import BlogInfo from '@/components/BlogInfo'
import { posts } from '@/app/data'
import React from 'react'

type Props = {
  params: Promise<{
    id: string
  }>
}

const Page = async ({ params }: Props) => {

  const { id } = await params

  const post = posts.find(p => p.id === Number(id));

  if (!post) {
    return <div className='p-10 text-2xl bg-red-500 text-white'>Post not found</div>
  }

  return (
    <div className='text-white p-10 flex gap-4 justify-center '>
      <BlogInfo
        id={post.id}
        title={post.title}
        author={post.author}
        date_time={post.date_time}
        desc={post.desc}
        img={post.img}
      />
      <BlogBody
        id={post.id}
        author={post.author}
        title={post.title}
        date_time={post.date_time}
        desc={post.desc}
        img={post.img}
       />
    </div>
  )
}

export default Page