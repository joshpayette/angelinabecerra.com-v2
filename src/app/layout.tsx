import { Inter } from 'next/font/google';
import './globals.css';
export { metadata } from './metadata';
import clsx from 'clsx';
import { Navbar, Sidebar } from '@/app/components/navigation';
import { StackedLayout } from '@/app/components/catalyst/stacked-layout';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="pinterest" content="nopin" />
      </head>
      <body className={clsx(inter.className, 'bg-black')}>
        <StackedLayout navbar={<Navbar />} sidebar={<Sidebar />}>
          {children}
        </StackedLayout>
      </body>
    </html>
  );
}
