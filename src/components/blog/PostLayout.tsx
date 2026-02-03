import React from 'react'

interface PostLayoutProps {
    children: React.ReactNode;
    postId?: string;
}

export const PostLayout = ({children, postId}: PostLayoutProps)=> {
  return (
    <>
    
        <article>
            {children}
        </article>
        <aside className="lg:col-span-4 bg-surface-ink p-4 rounded-xl">
            <p className="text-sm font-bold">Currently Reading ID: {postId}</p>
        </aside>
    </>
  )
}

export default PostLayout