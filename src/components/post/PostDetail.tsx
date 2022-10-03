import React from 'react'
import { format, parseISO } from 'date-fns'

interface PostDetailProps {
  title: string
  description: string
  publishedAt: string
  children: JSX.Element | JSX.Element[]
  tags?: string[]
}

const PostDetail = (props: PostDetailProps) => {
  return (
    <article className="pt-[100px] ">
      <div className="text-center">
        <time
          dateTime={props.publishedAt}
          className="text-lg font-medium text-gray-400 dark:text-slate-500 mt-2"
        >
          {format(parseISO(props.publishedAt), 'LLLL d, yyyy')}
        </time>
        <h1 className="mb-1 font-bold text-4xl sm:text-5xl">{props.title}</h1>
        <h2 className="text-base text-gray-400 dark:text-slate-500">
          {props.description}
        </h2>
        <ul className="p-2 flex flex-wrap justify-center gap-3">
          {props.tags &&
            props.tags.map((tag, idx) => (
              <li
                key={idx}
                className="text-sm font-medium uppercase text-sub-purple hover:text-main-purple cursor-default"
              >
                {tag}
              </li>
            ))}
        </ul>
      </div>
      <div className="py-10 prose dark:prose-invert lg:prose-xl prose-blockquote:border-l-main-purple prose-a:text-sub-purple prose-a:no-underline hover:prose-a:underline">
        {props.children}
      </div>
    </article>
  )
}

export default PostDetail
