import React from 'react';
import type { PostProps } from './types';
import { ChartBarStacked, CalendarCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// We tell React that this component uses the BlogCardProps interface
const BlogCard: React.FC<PostProps> = ({ post }) => {
  return (
    <div className='group bg-surface-ink flex flex-col border border-surface-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>
      
      <div className='relative aspect-video overflow-hidden'>
        <img 
          src={post.coverImageUrl} 
          alt={post.title} 
          className='w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500' 
        />
      </div>

      <div className='flex flex-col flex-1 p-5'>
        <div className='flex items-center gap-4 text-xs font-medium text-text-muted mb-3'>
           <div className='flex items-center gap-1.5'>
              <CalendarCheck size={14} className="text-brand-quirk" />
              <span>{post.publishDate.substring(0, 10)}</span>
           </div>
           <div className='flex items-center gap-1.5'>
              <ChartBarStacked size={14} className="text-brand-quirk" />
              <span className="capitalize">{post.categoryDTO.name}</span>
           </div>
        </div>

        <h3 className='text-xl text-title font-bold leading-tight mb-3 group-hover:text-brand-primary transition-colors'>
          {post.title}
        </h3>

        <p className='text-text-body text-sm leading-relaxed line-clamp-3 mb-6'>
          {post.description}
        </p>

        <div className='mt-auto pt-4 border-t border-surface-border/50'>
          <Link 
            to={`/posts/${post.id}`} 
            className='text-sm font-bold text-brand-primary flex items-center gap-1 group/link'
          >
            Read Story 
            <ArrowRight size={16} className='group-hover/link:translate-x-1 transition-transform' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;