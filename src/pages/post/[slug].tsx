import { allPosts, type Post } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import PostDetail from 'src/components/post/PostDetail'

export const getStaticPaths = () => {
  return {
    paths: allPosts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = ({ params }: { params: Post }) => {
  const post = allPosts.find((post) => post.slug === params.slug)
  return {
    props: {
      post,
    },
  }
}

interface PostProps {
  post: Post
}

const PostDetailContainer = ({ post }: PostProps) => {
  const MDXContent = useMDXComponent(post.body.code)
  return (
    <PostDetail {...post}>
      <MDXContent />
    </PostDetail>
  )
}

export default PostDetailContainer
