import type {Metadata} from 'next';
import './globals.css';
import { cn } from "@/lib/utils";
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: {
    default: 'Sonar Bangla Vision - A New Dawn for a Golden Bengal',
    template: '%s | Sonar Bangla Vision',
  },
  description: 'Join the movement to build a future of progress, prosperity, and unity for Bengal. Learn about our candidate, our vision, and how you can get involved.',
  keywords: ['Sonar Bangla', 'Bengal politics', 'election campaign', 'political candidate', 'West Bengal', 'progress', 'development'],
  authors: [{ name: 'Sonar Bangla Vision Campaign' }],
  creator: 'Sonar Bangla Vision Campaign',
  publisher: 'Sonar Bangla Vision Campaign',
  openGraph: {
    title: 'Sonar Bangla Vision - A New Dawn for a Golden Bengal',
    description: 'Join the movement to build a future of progress, prosperity, and unity for Bengal.',
    url: 'https://sonar-bangla-vision.firebaseapp.com', // Replace with actual domain
    siteName: 'Sonar Bangla Vision',
    images: [
      {
        url: 'https://placehold.co/1200x630.png', // Replace with a representative image
        width: 1200,
        height: 630,
        alt: 'A hopeful image for Sonar Bangla Vision campaign',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sonar Bangla Vision - A New Dawn for a Golden Bengal',
    description: 'Join the movement to build a future of progress, prosperity, and unity for Bengal.',
    images: ['https://placehold.co/1200x630.png'], // Replace with a representative image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&family=Belleza&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased min-h-screen flex flex-col")}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
