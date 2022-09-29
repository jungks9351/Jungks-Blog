import { type Post } from 'contentlayer/generated'
import PostCard from '../PostCard'

const PostSection = ({ posts }: { posts: Post[] }) => {
  return (
    <section className="py-10">
      <div className="space-y-2 lg:space-y-0">
        <h2 className="leading-tight text-3xl md:text-4xl text-sub-purple font-bold">
          Have a look at my Posting
        </h2>
        <h3 className="pt-5 leading-tight text-3xl md:text-4xl text-gray-400 dark:text-slate-500">
          I am trying to keep posting.
        </h3>
      </div>
      <ul className="py-10 grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 max-w-7xl gap-y-16 mx-auto">
        {posts.map((post, idx) => (
          <PostCard key={idx} post={post} />
        ))}
      </ul>
    </section>
  )
}

export default PostSection
