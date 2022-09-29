import Head from 'next/head'
import { compareDesc } from 'date-fns'
import { allPosts, type Post } from 'contentlayer/generated'
import IntroSection from 'src/components/home/IntroSection'
import PostSection from 'src/components/home/PostSection'

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
      <IntroSection />
      <PostSection posts={posts} />
    </>
  )
}

export default Home
