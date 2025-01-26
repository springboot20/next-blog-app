import Image from 'next/image';
import Link from 'next/link';

export function Navigation() {
  return (
    <header className='bg-[#F9F9F9] z-20'>
      <nav className='lg:border-b'>
        <div className='max-w-7xl mx-auto px-4 xl:px-0 flex items-center h-full justify-between'>
          <Link href='/'>
            <Image
              src='/assets/logo.png'
              alt='logo'
              width={140}
              height={0}
              className='!h-24'
              style={{
                height: 'auto',
                width: 'auto',
              }}
            />
          </Link>
          <button type='button' className='lg:hidden'>
            <span className='sr-only'>open menu</span>
            <svg
              viewBox='0 0 32 32'
              fill='none'
              className='h-12 w-12'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4.61863 27.3813C6.57329 29.3333 9.71463 29.3333 16 29.3333C22.2853 29.3333 25.428 29.3333 27.38 27.38C29.3333 25.4293 29.3333 22.2853 29.3333 16C29.3333 9.71467 29.3333 6.572 27.38 4.61867C25.4293 2.66667 22.2853 2.66667 16 2.66667C9.71463 2.66667 6.57196 2.66667 4.61863 4.61867C2.66663 6.57333 2.66663 9.71467 2.66663 16C2.66663 22.2853 2.66663 25.4293 4.61863 27.3813ZM25 21.3333C25 21.5985 24.8946 21.8529 24.7071 22.0404C24.5195 22.228 24.2652 22.3333 24 22.3333H7.99996C7.73474 22.3333 7.48039 22.228 7.29285 22.0404C7.10532 21.8529 6.99996 21.5985 6.99996 21.3333C6.99996 21.0681 7.10532 20.8138 7.29285 20.6262C7.48039 20.4387 7.73474 20.3333 7.99996 20.3333H24C24.2652 20.3333 24.5195 20.4387 24.7071 20.6262C24.8946 20.8138 25 21.0681 25 21.3333ZM24 17C24.2652 17 24.5195 16.8946 24.7071 16.7071C24.8946 16.5196 25 16.2652 25 16C25 15.7348 24.8946 15.4804 24.7071 15.2929C24.5195 15.1054 24.2652 15 24 15H7.99996C7.73474 15 7.48039 15.1054 7.29285 15.2929C7.10532 15.4804 6.99996 15.7348 6.99996 16C6.99996 16.2652 7.10532 16.5196 7.29285 16.7071C7.48039 16.8946 7.73474 17 7.99996 17H24ZM25 10.6667C25 10.9319 24.8946 11.1862 24.7071 11.3738C24.5195 11.5613 24.2652 11.6667 24 11.6667H7.99996C7.73474 11.6667 7.48039 11.5613 7.29285 11.3738C7.10532 11.1862 6.99996 10.9319 6.99996 10.6667C6.99996 10.4014 7.10532 10.1471 7.29285 9.95956C7.48039 9.77202 7.73474 9.66667 7.99996 9.66667H24C24.2652 9.66667 24.5195 9.77202 24.7071 9.95956C24.8946 10.1471 25 10.4014 25 10.6667Z'
                fill='#151515'
              />
            </svg>
          </button>

          <div className='hidden lg:flex items-center gap-3'>
            <button
              type='button'
              className='flex items-center justify-center text-white rounded bg-[#571244] px-3.5 py-2 font-nunito-sans space-x-3 text-lg'>
              <span className='flex items-center justify-center rounded-full size-7 bg-[#DDD0DA]'>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M0 16C0 7.16343 7.16344 -1.52588e-05 16 -1.52588e-05C24.8366 -1.52588e-05 32 7.16343 32 16C32 24.8365 24.8366 32 16 32C7.16344 32 0 24.8365 0 16Z'
                    fill='#DDD0DA'
                  />
                  <path
                    d='M10 25V23C10 21.9391 10.4214 20.9217 11.1716 20.1716C11.9217 19.4214 12.9391 19 14 19H18C19.0609 19 20.0783 19.4214 20.8284 20.1716C21.5786 20.9217 22 21.9391 22 23V25M12 11C12 12.0609 12.4214 13.0783 13.1716 13.8284C13.9217 14.5786 14.9391 15 16 15C17.0609 15 18.0783 14.5786 18.8284 13.8284C19.5786 13.0783 20 12.0609 20 11C20 9.93912 19.5786 8.9217 18.8284 8.17156C18.0783 7.42141 17.0609 6.99998 16 6.99998C14.9391 6.99998 13.9217 7.42141 13.1716 8.17156C12.4214 8.9217 12 9.93912 12 11Z'
                    stroke='#571244'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </span>
              <div className='flex items-center space-x-3'>
                <span>Account</span>
                <span>
                  <svg
                    width='11'
                    height='6'
                    viewBox='0 0 11 6'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M1.16666 0.833303L5.33332 4.99997L9.49999 0.833303'
                      stroke='#ffffff'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
              </div>
            </button>
            <button
              type='button'
              className='bg-[#EF4353] px-3.5 py-2 text-center rounded font-nunito-sans text-white text-lg'>
              Take Assesment
            </button>
          </div>
        </div>
      </nav>

      <nav className='hidden lg:block h-20'>
        <div className='max-w-6xl mx-auto px-4 xl:px-0 flex items-center h-full justify-center'>
          <ul className='flex items-center gap-4 justify-center flex-wrap'>
            <Link href='/'>
              <li className='text-[#571244] py-0.5 border-b-2 border-[#571244] flex justify-center items-center gap-2 font-semibold font-nunito-sans px-2 text-lg'>
                <span>About</span>
                <span className='flex items-center justify-center'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M5.83337 8.33332L10 12.5L14.1667 8.33332'
                      stroke='#571244'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
              </li>
            </Link>
            <Link href='/'>
              <li className='text-[##151515] py-0.5 flex justify-center items-center gap-2 font-semibold font-nunito-sans px-2 text-lg'>
                <span>What We Do</span>
                <span className='flex items-center justify-center'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M5.83337 8.33332L10 12.5L14.1667 8.33332'
                      stroke='#571244'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
              </li>
            </Link>
            <Link href='/'>
              <li className='text-[##151515] py-0.5 flex justify-center items-center gap-2 font-semibold font-nunito-sans px-2 text-lg'>
                <span>Jobs</span>
                <span className='flex items-center justify-center'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M5.83337 8.33332L10 12.5L14.1667 8.33332'
                      stroke='#571244'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
              </li>
            </Link>
            <Link href='/'>
              <li className='text-[##151515] py-0.5 font-semibold font-nunito-sans px-2 text-lg'>
                <span>Projects</span>
              </li>
            </Link>
            <Link href='/'>
              <li className='text-[##151515] py-0.5 font-semibold font-nunito-sans px-2 text-lg'>
                <span>TG Academy</span>
              </li>
            </Link>
            <Link href='/'>
              <li className='text-[##151515] py-0.5 font-semibold font-nunito-sans px-2 text-lg'>
                <span>Strategic Partnership</span>
              </li>
            </Link>
            <Link href='/'>
              <li className='text-[##151515] py-0.5 font-semibold font-nunito-sans px-2 text-lg'>
                <span>Pricing</span>
              </li>
            </Link>
            <Link href='/'>
              <li className='text-[##151515] py-0.5 font-semibold font-nunito-sans px-2 text-lg'>
                <span>Book a Consultation</span>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}
