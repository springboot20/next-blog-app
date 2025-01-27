import { BlogInterface } from '@/types/blog';
import Link from 'next/link';
import { formatDate } from '@/lib';

export const truncate = (char: string, length: number): string => {
  if (char.length > length) {
    return char.slice(0, length) + '...';
  } else {
    return char;
  }
};

export default function BlogCard({ blog }: BlogInterface) {
  return (
    <div className='rounded-t-lg w-full overflow-hidden blog-card'>
      <div className='w-full h-52'>
        <img
          src={blog?.social_image}
          alt='cover img'
          className='object-cover object-center h-full w-full'
        />
      </div>
      <div className='mt-3 space-y-4'>
        <h3 className='font-semibold font-nunito text-xl text-[#151515] truncate'>{blog?.title}</h3>
        <div className='flex flex-col justify-between gap-4 h-full text-[#696969]'>
          <p className='font-normal font-nunito-sans text-base'>{blog?.description}</p>
          <div className='flex items-center justify-between'>
            <div className='font-nunito font-normal text-base divide-x-2'>
              <span className='pr-2'>{formatDate(blog?.created_at as string)}</span>
              <span className='pl-2'>{blog?.reading_time_minutes} mins read</span>
            </div>
            <Link
              href={`/${blog?.id}`}
              className='text-[#571244] text-lg font-normal font-nunito-sans capitalize border-b-2 border-[#571244]'>
              view post
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
