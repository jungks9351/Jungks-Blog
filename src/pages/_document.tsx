import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Next.js Static Blog" />
        <meta name="keywords" content="nextjs,static,website,Next.js,blog" />
        <link rel="icon" href="/images/blog_logo.png" />
      </Head>
      <body className="relative bg-white dark:bg-gray-900 transition duration-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
