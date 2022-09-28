import Head from 'next/head'
import { compareDesc } from 'date-fns'
import { allPosts, type Post } from 'contentlayer/generated'
import PostCard from 'src/components/PostCard'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import IntroduceSection from 'src/components/home/IntroduceSection'

export const getStaticProps = async () => {
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  })
  return { props: { posts } }
}

const Home = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <Head>
        <title>JungJin Blog</title>
      </Head>
      {/* <section className="py-10">
        <h2 className="leading-tight text-3xl md:text-4xl text-black dark:text-white">
          words
        </h2>
      </section> */}
      <IntroduceSection />
      {posts.map((post, idx) => (
        <PostCard key={idx} post={post} />
      ))}
    </>
  )
}

export default Home
