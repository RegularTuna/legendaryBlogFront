import React, { useEffect, useRef, useState } from 'react'
import BlogCard from '../components/blogpost/BlogCard'
import savingFish2 from '../assets/savingFish2.jpg'
import CustomButton from '../components/common/CustomButton';
import {ChevronDown} from 'lucide-react'

export const AllPosts = () => {
  
    const MOCK_POSTS = [
  {
    id: "a8ebf2af-4018-4d74-a12d-830a8a4cf57b",
    title: "Not-Yet Bald Man saves fish from drowning",
    categoryDTO: { id: 4, name: "superhero" },
    description: "In a baffling display of aquatic heroism, Riverton's favorite semi-follicle-challenged hero rescues a fish from its natural habitat, claiming the water was 'too wet.'",
    content: "<p>...</p>",
    coverImageUrl: savingFish2,
    featured: true,
    published: true,
    publishDate: "2026-02-03T16:00:10"
  },
  {
    id: "b2ccf3af-1234-5d74-a12d-830a8a4cf999",
    title: "Local cat accidentally joins city council",
    categoryDTO: { id: 2, name: "politics" },
    description: "Democracy takes a feline turn as 'Mr. Whiskers' wins a seat on the council after a landslide victory involving a laser pointer and a complete lack of opposition.",
    content: "<p>...</p>",
    coverImageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
    featured: false,
    published: true,
    publishDate: "2026-02-04T09:30:00"
  },
  {
    id: "c3ddf4bf-5678-4d74-b32d-930a8a4cf888",
    title: "Why the internet is actually a series of tubes",
    categoryDTO: { id: 1, name: "technology" },
    description: "An investigative deep-dive into the 2006 theory that revolutionized how we think about bandwidth, plumbing, and why your cat videos are stuck in traffic.",
    content: "<p>...</p>",
    coverImageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    featured: false,
    published: true,
    publishDate: "2026-02-05T12:00:00"
  },
  {
    id: "d4eef5cf-9012-4d74-c42d-030a8a4cf777",
    title: "Invisible man arrested for public indecency",
    categoryDTO: { id: 4, name: "superhero" },
    description: "The local precinct reports a strange case where the suspect was clearly not seen at the scene of the crime, yet the evidence was strikingly apparent.",
    content: "<p>...</p>",
    coverImageUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
    featured: false,
    published: false,
    publishDate: "2026-02-05T14:45:00"
  }
];

  const ALL_CAT = [
    "All",
    "Politics",
    "Unicorns"
  ]
  const [filter,setFilter] = useState("All");
  const [isOpen,setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)){
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (

    <>
    <div className='relative' ref={dropdownRef}>
      <CustomButton onClick={() => setIsOpen(!isOpen)} className='flex gap-2 px-4 py-2 rounded-full  bg-brand-quirk/50 text-brand-quirk'>{filter}
        <ChevronDown  className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}/>
      </CustomButton>
      {isOpen && (

        <ul className='absolute left-0 z-50 p-2 min-w-[140px] bg-white shadow-lg rounded-br-md'>
          {ALL_CAT.map((cat) => (
            <li>
              <button className='w-full text-left p-1 hover:bg-gray-100' onClick={()=> {
                setIsOpen(!isOpen);
                setFilter(cat);
              }}>{cat}</button>
            </li>
          ))}
      </ul>

      )}
    </div>


    <div>
      <p>Selected cat - {filter} </p>
    </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
          {MOCK_POSTS.map((post) => (
              <BlogCard key={post.id} post={post}/>
          )
        )}
      </div>
    </>
    
    
    
  )
}

