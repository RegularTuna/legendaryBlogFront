import React from 'react'

interface PostContentProps {
  post: {
    title: string;
    category: string;
    author: string;
    date: string;
    body: string; // Usually HTML or Markdown from your API
    image?: string;
  }
}
function PostContent({ post }: PostContentProps) {
  return (
    <>
        <div>
            <h2>Monkey saves fish from drowning</h2>
        </div>
        <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum modi dolorum deleniti quam sapiente. Saepe expedita ipsam, incidunt hic, molestiae, atque aliquam pariatur fugit perspiciatis mollitia facilis ullam quo eius!
            Amet consequuntur vero velit dolores eius quisquam natus minus libero quas numquam molestiae neque sapiente, odio aut? Eos neque officiis libero dolorum ducimus quae quos ipsum. Minima corporis doloremque ullam.
            Nihil rerum quis iste magnam hic vero, quam facilis, quia ut atque a, vitae eius temporibus in sequi officiis doloremque quibusdam? Officiis praesentium vel facilis aut perferendis nisi! Culpa, neque.
            Vel accusantium, sit dolorem, labore odio in, reprehenderit quam illum consequatur culpa assumenda? Facere inventore, quas reiciendis delectus sapiente nemo recusandae eligendi, minus autem quae culpa quia dolorem animi totam.
            Temporibus cupiditate reiciendis, praesentium, commodi tempora sint facere odio, nisi ducimus beatae incidunt repellat magnam ipsa? Expedita dolor harum, velit ipsum totam voluptatem accusantium consectetur corporis. Quasi magnam molestiae aut?
            </p>
        </div>
    </>
  )
}

export default PostContent