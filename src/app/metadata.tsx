import type { Metadata } from 'next';

const title = 'AngelinaBecerra.com';
const description = 'Photographer, Writer, Observer';
const url = 'https://angelinabecerra.com';

export const metadata: Metadata = {
  title,
  description,
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    images: [
      {
        url: 'https://d3kr26rn0w79t6.cloudfront.net/angelina-og-image.jpg',
        width: 150,
        height: 150,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title,
    description,
    creator: '@angelinaphotog',
    images: [
      {
        url: 'https://d3kr26rn0w79t6.cloudfront.net/angelina-og-image.jpg',
        width: 150,
        height: 150,
      },
    ],
  },
};
