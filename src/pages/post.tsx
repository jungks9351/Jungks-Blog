import { allPosts, Post } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import Head from 'next/head'
import PostList from 'src/components/post/PostList'

export const getStaticProps = async () => {
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  })
  return { props: { posts } }
}

const Post = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <Head>
        <title>Blog Post</title>
      </Head>
      <section className="pt-[100px]">
        <h2 className="leading-tight text-2xl md:text-3xl text-sub-purple font-bold pb-2">
          All Post
        </h2>
        <PostList posts={posts} />
      </section>
    </>
  )
}

export default Post
