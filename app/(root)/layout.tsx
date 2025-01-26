import React, { Fragment } from 'react';
import { Navigation } from '@/components/navigation/navigation';
import { Footer } from '@/components/footer/footer';
import { NewsLetter } from '@/components/news-letter/news-letter';

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Fragment>
      <Navigation />
      {children}
      <NewsLetter />
      <Footer />
    </Fragment>
  );
}
