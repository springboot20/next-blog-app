import Form from 'next/form';
import SearchFormReset from '../serach-form-reset/search-form-reset';

export default function SearchForm({ query }: { query?: string }) {
  return (
    <Form
      action='/'
      data-test='search-form'
      scroll={false}
      className='flex items-center w-full relative'>
      <input
        name='query'
        type='text'
        placeholder='search for a post'
        className='ring-1 border-none rounded text-sm font-nunito-sans text-gray-600 font-normal ring-gray-400 px-3 w-full py-2.5 focus:ring-2 focus:ring-gray-500 focus:outline-none'
      />
      <div className='flex items-center gap-2 absolute right-3'>
        {query && <SearchFormReset /> }
          <button data-test='search-form-button' type='submit'>
            <span className='sr-only'>search icon</span>
            <svg
              width='21'
              height='20'
              viewBox='0 0 21 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M9.5 17C13.9183 17 17.5 13.4183 17.5 9C17.5 4.58172 13.9183 1 9.5 1C5.08172 1 1.5 4.58172 1.5 9C1.5 13.4183 5.08172 17 9.5 17Z'
                stroke='#151515'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M19.5 19L15.2 14.7'
                stroke='#151515'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
      </div>
    </Form>
  );
}
