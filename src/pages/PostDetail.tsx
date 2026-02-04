import { useParams } from "react-router-dom";
import PostContent from "../components/blog/PostContent";

import React from 'react'
import PostLayout from "../components/blog/PostLayout";
import savingFish2 from '../assets/savingFish2.jpg'

function PostDetail() {

    const { id } = useParams<{ id: string }>();

    let mockPost = {
    "categoryDTO": {
        "id": 4,
        "name": "superhero"
    },
    "content": "<p><span class='font-bold'>RIVERTON, February 3, 2026 —</span> In an astonishing display of valor and perhaps a touch of ecological misunderstanding, a local hero known to many as <strong>\"Not-Yet Bald Man\"</strong> was spotted yesterday performing what onlookers described as a \"miraculous aquatic intervention\" in the frigid waters of the Riverton Creek.</p><p>The hero, clad in his signature cerulean and silver suit emblazoned with a prominent snowflake motif—and sporting a hair bun that defied both gravity and hereditary thinning—was observed meticulously extracting a large, gasping fish from the very water it calls home.</p><p>Sources close to the incident reported that <strong>Not-Yet Bald Man</strong> swooped down to the riverbank with an urgent intensity.</p><h3 class='text-lg font-bold'>The Victim Speaks</h3><p>In an exclusive interview conducted telepathically, the rescued fish, who identified himself only as \"Finley,\" expressed profound gratitude:</p><blockquote>\"BLUB BLUB BLUB! Thank goodness, another five minutes down there and I was a goner! This water... too, too… wet! BLUB BLUB BLUB!\"</blockquote><p>Finley reportedly communicated, before being gently returned to the river by <strong>Not-Yet Bald Man</strong>, apparently revitalized and slightly less moist.</p><h3 class='text-lg font-bold'>A Hero's Rationale</h3><p>When questioned about his unconventional rescue technique, <strong>Not-Yet Bald Man</strong> issued a brief statement: \"Every life is precious, whether on land or… even more so, apparently, in water.\"</p><p><em>Published by the Riverton Daily Gazette.</em>",
    "coverImageUrl": savingFish2,
    "description": null,
    "featured": true,
    "id": "a8ebf2af-4018-4d74-a12d-830a8a4cf57b",
    "publishDate": "2026-02-03T16:00:10.1765458",
    "published": true,
    "title": "Not-Yet Bald Man saves fish from drowning"
}

  return (
    <PostLayout postId={id}>
        <PostContent post={mockPost}></PostContent>
    </PostLayout>
  )
}

export default PostDetail