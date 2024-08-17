import { Inter } from 'next/font/google';
import './globals.css';
export { metadata } from './metadata';

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
