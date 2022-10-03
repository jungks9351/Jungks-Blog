import { Post } from 'contentlayer/generated'
import React from 'react'
import PostCard from './PostCard'

const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <ul className="py-10 grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 max-w-7xl gap-y-16 mx-auto">
      {posts.map((post, idx) => (
        <PostCard key={idx} post={post} />
      ))}
    </ul>
  )
}

export default PostList
