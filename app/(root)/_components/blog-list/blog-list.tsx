  'use client';

  import React, { useState } from 'react';
  import { BlogInterface } from '@/types/blog';
  import BlogCard from '../card/blog-card';

  interface Props {
    blogs: BlogInterface[];
  }

  export default function BlogList({ blogs }: Props) {
    const [visiblePosts, setVisiblePosts] = useState(6); // Initial number of posts

    // Handle loading more posts
    const handleViewMore = () => {
      setVisiblePosts((prev) => prev + 6); // Load 6 more posts on each click
    };

    const displayedBlogs = blogs.slice(0, visiblePosts); // Limit displayed blogs

    return (
      <div>
        <div className='grid sm:grid-cols-2 xl:grid-cols-3 mt-5 gap-4 lg:gap-8'>
          {displayedBlogs?.map((blog) => (
            <BlogCard key={blog?.id} blog={blog} />
          ))}
        </div>

        {/* View More Button */}
        {visiblePosts < blogs.length && (
          <div className='flex justify-center mt-8'>
            <button
              type='button'
              onClick={handleViewMore}
              className='px-6 py-2 bg-[#571244] text-white rounded hover:bg-[#6a1853] font-nunito-sans text-base transition'>
              View More
            </button>
          </div>
        )}
      </div>
    );
  }
