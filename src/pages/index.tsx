import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jungks Blog</title>
        <meta name="description" content="Create Next.js Blog" />
      </Head>
      <h1 className="text-3xl font-bold underline">Hello Next.js!</h1>
    </>
  )
}

export default Home
