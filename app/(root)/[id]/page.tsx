import React from 'react';
import { formatDate } from '@/lib';
import MarkdownIt from 'markdown-it';
import blogs from '@/data';
import BlogCard from '../_components/card/blog-card';
import { fetchBlogPostDetail } from '@/lib/api';
import { BlogInterface } from '@/types/blog';

async function BlogDetails({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const id = (await params)?.id;
  const md = MarkdownIt();
  const post: BlogInterface | null = await fetchBlogPostDetail(id);

  if (!post) {
    return (
      <section className='py-3'>
        <div className='flex flex-col items-center justify-center'>
          <span className='font-medium text-gray-500 font-nunito-sans text-base'>
            Failed to load the post. Please try again later.
          </span>
          <div className='flex items-center justify-center space-x-3 min-h-[calc(60vh-5rem)]'>
            <div aria-label='Loading...' role='status'>
              <svg className='h-9 w-9 animate-spin' viewBox='3 3 18 18'>
                <path
                  className='fill-white'
                  d='M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z'></path>
                <path
                  className='fill-[#571244]'
                  d='M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z'></path>
              </svg>
            </div>
            <span className='font-medium text-gray-500 font-nunito-sans text-base'>
              loading post details
            </span>
          </div>
        </div>
      </section>
    );
  }

  const paseredContent = md.render(post?.body_markdown);

  return (
    <section className='py-3'>
      <div className='max-w-5xl mx-auto px-4 xl:px-0 space-y-4'>
        <div className='space-y-2'>
          <h1 className='text-3xl font-nunito font-bold'>{post?.title}</h1>
          <p className='font-medium font-nunito text-base text-[#696969]'>
            {formatDate(post?.created_at)}
          </p>
        </div>

        <div className='w-full h-[30rem] overflow-hidden rounded-lg border'>
          <img
            src={post?.cover_image}
            alt='cover img'
            className='object-cover object-center w-full h-full'
          />
        </div>

        <div className='prose prose-base prose-h2:my-4 max-w-5xl prose-headings:font-nunito prose-p:font-nunito-sans prose-ul:font-nunito-sans'>
          <article dangerouslySetInnerHTML={{ __html: paseredContent }} />
        </div>
      </div>

      <div className='max-w-7xl mx-auto'>
        <h1 className='text-center font-nunito font-bold text-2xl text-[#571244]'>More articles</h1>

        <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-5'>
          {blogs.slice(0, 3).map((blog) => {
            return <BlogCard key={blog?.id} blog={blog} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default BlogDetails;
