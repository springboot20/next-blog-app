import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const nunitoSans = localFont({
  src: [
    {
      path: './fonts/NunitoSans_10pt-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/NunitoSans_10pt-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/NunitoSans_10pt-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/NunitoSans_10pt-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/NunitoSans_10pt-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/NunitoSans_10pt-Light.ttf',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-nunito-sans',
});
const nunito = localFont({
  src: [
    {
      path: './fonts/Nunito-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/Nunito-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Nunito-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Nunito-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Nunito-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Nunito-Light.ttf',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: 'Blog App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${nunitoSans.variable} ${nunito.variable} antialiased`}>{children}</body>
    </html>
  );
}
