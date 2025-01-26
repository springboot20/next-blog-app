import Link from 'next/link';
import { InstagramIcon, LinkedinIcon, TwitterIcon } from '../icons/icons';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className='bg-[#11040E] relative font-nunito'>
      <div className='max-w-7xl mx-auto p-4 xl:px-0'>
        <div className='max-w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
          <div className='space-y-3 mb-3'>
            <Image
              src='/assets/logo.png'
              alt='logo'
              width={140}
              height={0}
              style={{
                height: 'auto',
                width: 'auto',
              }}
            />
            <p className='text-white text-sm font-normal'>
              Tobams Group is an innovative consultancy firm reshaping the future of tech talent
              development in Africa, specializing in talent acquisition, internships, and skill
              development with a global perspective.
            </p>
            <div className='flex items-start gap-6'>
              <Link href='/'>
                <LinkedinIcon />
              </Link>
              <Link href='/'>
                <InstagramIcon />
              </Link>
              <Link href='/'>
                <TwitterIcon />
              </Link>
            </div>
          </div>

          <div>
            <h3 className='text-lg font-bold text-white'>What We Do</h3>
            <ul className='space-y-2'>
              <li className='text-white font-normal text-sm'>Sustainability Services</li>
              <li className='text-white font-normal text-sm'>
                Strategy Planning and Implementation
              </li>
              <li className='text-white font-normal text-sm'>Tech Talent Solutions</li>
              <li className='text-white font-normal text-sm'>Training and Development</li>
              <li className='text-white font-normal text-sm'>IT Consulting Services</li>
              <li className='text-white font-normal text-sm'>Training and Development</li>
              <li className='text-white font-normal text-sm'>Social Impact</li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-bold text-white'>Company</h3>
            <ul className='space-y-2'>
              <li className='capitalize text-white font-normal text-sm'>
                <Link href='#'>about</Link>
              </li>
              <li className='capitalize text-white font-normal text-sm'>
                <Link href='#'>jobs</Link>
              </li>
              <li className='capitalize text-white font-normal text-sm'>
                <Link href='#'>products</Link>
              </li>
              <li className='capitalize text-white font-normal text-sm'>
                <Link href='#'>our founder</Link>
              </li>
              <li className='capitalize text-white font-normal text-sm'>
                <Link href='#'>business model</Link>
              </li>
              <li className='capitalize text-white font-normal text-sm'>
                <Link href='#'>the team</Link>
              </li>
              <li className='capitalize text-white font-normal text-sm'>
                <Link href='#'>contact us</Link>
              </li>
              <li className='capitalize text-white font-normal text-sm'>
                <Link href='#'>blog</Link>
              </li>
              <li className='text-white font-normal text-sm'>
                <Link href='#'>FAQS</Link>
              </li>
              <li className='capitalize text-white font-normal text-sm'>
                <Link href='#'>testimonial</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-bold text-white'>Solution</h3>
            <ul className='space-y-2'>
              <li className='capitalize text-white font-normal text-sm'>
                <Link href='#'>Tobams Group Academy</Link>
              </li>
              <li className='capitalize text-white font-normal text-sm'>
                <Link href='#'>Help a Tech Talent</Link>
              </li>
              <li className='capitalize text-white font-normal text-sm'>
                <Link href='#'>Campus Ambassadors Program</Link>
              </li>
              <li className='capitalize text-white font-normal text-sm'>
                <Link href='#'>Join Our Platform</Link>
              </li>
              <li className='capitalize text-white font-normal text-sm'>
                <Link href='#'>Join Our Platform</Link>
              </li>
              <li className='capitalize text-white font-normal text-sm'>
                <Link href='#'>Pricing</Link>
              </li>
              <li className='capitalize text-white font-normal text-sm'>
                <Link href='#'>Book a Consultion</Link>
              </li>
              <li className='capitalize text-white font-normal text-sm'>
                <Link href='#'>Join Our Slack Community</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='bg-white/[0.06] p-4 rounded-md grid lg:h-auto lg:p-8 lg:grid-cols-3 gap-4 lg:gap-0 mt-5'>
          <div className='space-y-2 md:order-2 lg:border-l-2 lg:pl-4 lg:border-white/[0.06]'>
            <h3 className='text-lg font-bold text-white'>Contact Information</h3>
            <div className='flex items-center gap-2'>
              <span>
                <svg
                  width='24'
                  height='25'
                  viewBox='0 0 24 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M4 20.6069C3.45 20.6069 2.979 20.4109 2.587 20.0189C2.195 19.6269 1.99934 19.1563 2 18.6069V6.60694C2 6.05694 2.196 5.58594 2.588 5.19394C2.98 4.80194 3.45067 4.60627 4 4.60694H20C20.55 4.60694 21.021 4.80294 21.413 5.19494C21.805 5.58694 22.0007 6.0576 22 6.60694V18.6069C22 19.1569 21.804 19.6279 21.412 20.0199C21.02 20.4119 20.5493 20.6076 20 20.6069H4ZM12 13.6069L20 8.60694V6.60694L12 11.6069L4 6.60694V8.60694L12 13.6069Z'
                    fill='#EF4353'
                  />
                </svg>
              </span>
              <h3 className='text-sm text-white font-normal'>theteam@tobamsgroup.com</h3>
            </div>
            <div className='flex items-center gap-2'>
              <span>
                <svg
                  width='24'
                  height='25'
                  viewBox='0 0 24 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M19.23 15.8667L16.69 15.5767C16.3914 15.5416 16.0886 15.5747 15.8046 15.6734C15.5206 15.7721 15.2626 15.934 15.05 16.1467L13.21 17.9867C10.3712 16.5429 8.06382 14.2355 6.62004 11.3967L8.47004 9.5467C8.90004 9.1167 9.11004 8.5167 9.04004 7.9067L8.75004 5.3867C8.69335 4.89888 8.45923 4.44894 8.09228 4.12255C7.72532 3.79616 7.25115 3.61612 6.76004 3.6167H5.03004C3.90004 3.6167 2.96004 4.5567 3.03004 5.6867C3.56004 14.2267 10.39 21.0467 18.92 21.5767C20.05 21.6467 20.99 20.7067 20.99 19.5767V17.8467C21 16.8367 20.24 15.9867 19.23 15.8667Z'
                    fill='#EF4353'
                  />
                </svg>
              </span>
              <h3 className='text-sm text-white font-normal'>+447886600748</h3>
            </div>
          </div>

          <div className='lg:col-span-2'>
            <h3 className='text-lg font-bold text-white'>Registered Offices</h3>
            <div className='grid md:grid-cols-2 gap-3 lg:gap-0 lg:divide-x-2 lg:divide-white/[0.06]'>
              <div className='lg:pr-4'>
                <h3 className='text-[#EF4353] text-base font-normal capitalize'>united kindom</h3>
                <p className='text-sm font-normal text-white'>
                  07451196 (Registered by Company House) Vine Cottages, 215 North Street, Romford,
                  Essex, United Kingdom, RM1 4QA
                </p>
              </div>
              <div className='lg:pl-4'>
                <h3 className='text-[#EF4353] text-base font-normal capitalize'>nigeria</h3>
                <p className='text-sm font-normal text-white'>
                  RC 1048722 (Registered by the Corporate Affairs Commission) 4, Muaz Close,
                  Angwari-Rimi
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col-reverse mx-auto py-4 border-t border-white/[0.06] mt-5 gap-4 lg:flex-wrap lg:flex-row lg:gap-0 lg:items-center lg:justify-between w-full'>
          <p className='text-base font-thin text-white text-center'>
            Copyright ⓒ Tobams Group, <small>{new Date().getFullYear()}</small> . All rights
            reserved.
          </p>
          <div className='mt-3 flex items-center justify-center max-w-xs flex-wrap w-full gap-4 lg:gap-3 mx-auto lg:mt-0 lg:flex-nowrap lg:mx-0'>
            <Link href='#' className='underline text-sm font-thin text-white whitespace-nowrap'>
              Privacy Policy
            </Link>
            <Link href='#' className='underline text-sm font-thin text-white whitespace-nowrap'>
              Cookie Policy
            </Link>
            <Link href='#' className='underline text-sm font-thin text-white whitespace-nowrap'>
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
