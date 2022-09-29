import Image from 'next/image'

import { type Post } from 'contentlayer/generated'

const PostCard = ({ post }: { post: Post }) => {
  return (
    <li className="col-span-4">
      <div className=" w-full rounded overflow-hidden shadow-lg">
        <Image
          src={post.thumbnailUrl}
          alt="thumbnail"
          priority={true}
          layout="responsive"
          width={100}
          height={100}
          objectFit="cover"
        />
        <div className="px-6 py-4">
          <h4 className="font-bold text-xl mb-2">{post.title}</h4>
          <p className="text-base text-gray-400 dark:text-slate-500">
            {post.description}
          </p>
        </div>
        <ul className="px-6 pb-4 flex flex-wrap">
          {post.tags?.map((tag, idx) => (
            <li
              key={idx}
              className="mr-3 text-sm font-medium uppercase text-sub-purple hover:text-main-purple cursor-default"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default PostCard
