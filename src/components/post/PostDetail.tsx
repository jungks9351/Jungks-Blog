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
    <>
      <div className="pt-[70px]">
        <time dateTime={props.publishedAt}>
          {format(parseISO(props.publishedAt), 'LLLL d, yyyy')}
        </time>
        <h1>{props.title}</h1>
        <ul>
          {props.tags &&
            props.tags.map((tag, i) => (
              <li key={i} className="tag">
                {tag}
              </li>
            ))}
        </ul>
        <h2>{props.description}</h2>
      </div>
      <div>{props.children}</div>
    </>
  )
}

export default PostDetail
