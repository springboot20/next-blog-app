'use client';

import Link from 'next/link';
import React from 'react';

export default function SearchFormReset() {
  const reset = () => {
    const form = document.querySelector('form') as HTMLFormElement;

    if (form) form.reset();
  };
  return (
    <button
      type='reset'
      onClick={reset}
      data-test="search-form-reset"
      className='size-5 rounded-full bg-gray-700 text-white flex items-center justify-center'>
      <Link href='/'>&times;</Link>
    </button>
  );
}
