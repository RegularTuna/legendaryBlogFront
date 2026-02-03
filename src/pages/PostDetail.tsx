import { useParams } from "react-router-dom";
import PostContent from "../components/blog/PostContent";

import React from 'react'
import PostLayout from "../components/blog/PostLayout";

function PostDetail() {

    const { id } = useParams<{ id: string }>();

    const dummyPost = {
    title: "Monkey saves fish from drowning",
    category: "Nature Highlights",
    author: "Legendary Reporter",
    date: "Feb 2, 2026",
    body: "Lorem ipsum dolor sit amet..."
  };
  return (
    <PostLayout postId={id}>
        <PostContent post={dummyPost}></PostContent>
    </PostLayout>
  )
}

export default PostDetail