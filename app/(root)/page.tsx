import { HeroSection } from '@/components/hero/hero';
import SearchForm from './_components/search-form/search-form';
import BlogList from './_components/blog-list/blog-list';
import { fetchBlogPosts } from '@/lib/api';
import { BlogInterface } from '@/types/blog';
export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{
    query?: string;
  }>;
}) {
  const query = (await searchParams)?.query;
  const posts: BlogInterface[] = await fetchBlogPosts();
  // console.log(posts);
  const filteredPosts = posts.filter((post) =>
    post?.title?.toLowerCase().includes(query?.toLowerCase())
  );

  const _posts = query ? filteredPosts : posts;

  return (
    <>
      <HeroSection />
      <section className='py-8 px-4 xl:px-0'>
        <div className='max-w-7xl mx-auto'>
          <header className='space-y-4'>
            <h1 className='font-semibold font-nunito text-4xl text-[#571244] text-center'>
              Stay Updated with the Latest trends in Tobams Group
            </h1>
            <div className='flex items-center justify-center max-w-5xl mx-auto'>
              <SearchForm query={query} />
            </div>
          </header>

          {posts.length > 0 ? (
            <BlogList blogs={_posts} />
          ) : (
            <div className='flex justify-center items-center flex-col'>
              <p className='text-center text-gray-500 mt-8 font-nunito-sans font-normal text-lg'>
                No posts found. Please try again later.
              </p>

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
                  loading post...
                </span>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
