export interface CategoryDTO {
  id: number;
  name: string;
}

// 1. This defines what a Single Post looks like
export interface Post {
  id: string;
  title: string;
  description: string; // Don't forget this for your BlogCard!
  categoryDTO: CategoryDTO;
  content: string;
  publishDate: string; 
  featured: boolean; 
  published: boolean;
  coverImageUrl: string;
}

// 2. This defines the Props for a component receiving a post
export interface PostProps {
  post: Post;
}