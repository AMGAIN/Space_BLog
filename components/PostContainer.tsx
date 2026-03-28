import React from 'react'
import PostCard from './PostCard';
import { posts } from '../app/data';

const PostContainer = () => {

  return (
    <div className= ' bg-gray-900 border-white flex flex-col pb-5 items-center'>
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
  )
}

export default PostContainer