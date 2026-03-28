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
    return (
      <div className='p-10 text-2xl bg-red-500 text-white text-center'>
        Post not found
      </div>
    )
  }

  return (
    <div className='bg-gray-900 min-h-screen text-white px-4 md:px-10 py-10'>

      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-10'>

        {/* LEFT SIDEBAR */}
        <div className='hidden lg:block lg:w-[280px] sticky top-10 h-fit'>
          <BlogInfo {...post} />
        </div>

        {/* MAIN CONTENT */}
        <div className='flex-1'>
          <BlogBody {...post} />

          {/* MOBILE INFO */}
          <div className='lg:hidden mt-10'>
            <BlogInfo {...post} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Page