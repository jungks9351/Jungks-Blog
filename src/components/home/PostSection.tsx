import { type Post } from 'contentlayer/generated'
import Link from 'next/link'
import UnderlineButton from '../common/UnderlineButton'
import PostCard from '../post/PostCard'

const PostSection = ({ posts }: { posts: Post[] }) => {
  return (
    <section className="py-10">
      <div className="grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl">
        <div className="col-span-full flex flex-col space-y-10 lg:flex-row lg:items-end lg:justify-between lg:space-y-0">
          <div className="space-y-2 lg:space-y-0 pb-1">
            <h2 className="leading-tight text-3xl md:text-4xl text-sub-purple font-bold pb-2">
              Have a look at my Recent Posting
            </h2>
            <h3 className="leading-tight text-3xl md:text-4xl text-gray-400 dark:text-slate-500">
              I am trying to keep posting.
            </h3>
          </div>
          <div className="leading-tight text-2xl md:text-3xl  lg:self-end">
            <Link href={'/post'}>
              <UnderlineButton text="See the All Post" />
            </Link>
          </div>
        </div>
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
