import React from 'react'

interface CategoryDTO {
  id: number;
  name: string;
}
interface PostContentProps {
  post: {
    id: string //There will be a uuid coming what type should this be
    title: string;
    categoryDTO: CategoryDTO; //this will come in a form of a dto containig id and name what should I do to the type
    content: string;
    publishDate?: string; //what type should this be
    featured: boolean; // Usually HTML or Markdown from your API
    published: boolean
    coverImageUrl: string;
  }
}
function PostContent({ post }: PostContentProps) {

  




  return (
    <>
        <div className='mb-3'>
            <h2 className='text-2xl text-title font-bold tracking-tight'>{post.title}</h2>
        </div>
        <div className='w-full my-4'>
          <img src={post.coverImageUrl} alt="" className='w-full object-cover' />
        </div>
        <div 
            className="prose max-w-none text-body"
            dangerouslySetInnerHTML={{ __html: post.content }} 
        />
    </>
  )
}

export default PostContent



