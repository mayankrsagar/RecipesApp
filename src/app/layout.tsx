import './globals.css';

import { Suspense } from 'react';

import type { Metadata } from 'next';
import {
  Geist,
  Geist_Mono,
} from 'next/font/google';

import Navbar from '@/components/navbar/navbar';

import Loading from './loading';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'All in one Recipe App',
  description: 'All in one place recipe for all your favorite food',
  icons: {
    icon: '/foodsLogo.png',
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<Loading />}>
        <Navbar/>
        {children}</Suspense>
      </body>
    </html>
  );
}
