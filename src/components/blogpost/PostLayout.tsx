import React from 'react'

interface PostLayoutProps {
    children: React.ReactNode;
    postId?: string;
}
type RecentPosts = string[];

export const PostLayout = ({children, postId}: PostLayoutProps)=> {

    const temporaryTitles: RecentPosts = [
        "Dog saved by unicorn", 
        "Unicorn saved by dog", 
        "something else about dogs and unicorns"
    ];

  return (
    <div className='lg:grid grid-cols-10'>
    
        <article className='lg:col-span-7  '>
            {children}
        </article>
        <aside className="bg-surface-paper text-center lg:text-left lg:col-span-3  lg:p-4 rounded-xl lg:p-4">
            
            <h3 className='font-bold border-b text-title'>Recent Posts</h3>
            <ul className='py-2 text-funny lg:list-disc lg:list-inside '>
                {temporaryTitles.map((title,index) => (
                    <li key={index} > {title}</li>
                ))}
            </ul>
        </aside>
    </div>
  )
}

export default PostLayout