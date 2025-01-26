export function NewsLetter() {
  return (
    <div className='max-w-7xl mx-auto px-4 xl:px-0 py-4'>
      <div className='p-4 md:p-10 rounded-lg space-y-4 bg-[#5712441A]'>
        <div className='space-y-1.5'>
          <h2 className='text-2xl font-bold text-[#151515] font-nunito'>
            Sign Up for Our Newsletters
          </h2>
          <p className='text-xl font-normal text-[#151515] font-nunito'>
            Subscribe to receive our latest company updates
          </p>
        </div>
        <form action=''>
          <fieldset>
            <label htmlFor='email' className='sr-only'>
              Email
            </label>
            <div className='flex flex-col sm:items-center sm:flex-row gap-3'>
              <input
                className='w-full rounded px-4 py-3 text-lg font-nunito'
                type='email'
                name='email'
                id='email'
                placeholder='Enter your email'
              />
              <button className='py-3 w-max px-6 rounded bg-[#571244] text-white capitalize font-lg font-semibold font-nunito'>
                subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
