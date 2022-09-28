import Image from 'next/image'

import { type Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'

const PostCard = ({ post }: { post: Post }) => {
  return (
    <article>
      <Image
        src={post.thumbnailUrl}
        alt="thumbnail"
        priority={true}
        layout="fixed"
        width={100}
        height={100}
        objectFit="cover"
      />
      <div>
        <h4>{post.title}</h4>
        <p>{post.description}</p>
        <time className="post-date text-color1" dateTime={post.publishedAt}>
          {format(parseISO(post.publishedAt), 'yy. LL. dd')}
        </time>
      </div>
    </article>
  )
}

export default PostCard
