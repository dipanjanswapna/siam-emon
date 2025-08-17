import type {Metadata} from 'next';
import './globals.css';
import { cn } from "@/lib/utils";
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: {
    default: 'SIAM EMON - ঢাকা বিশ্ববিদ্যালয়',
    template: '%s | SIAM EMON',
  },
  description: 'সিয়াম ইমন, ঢাকা বিশ্ববিদ্যালয়। ডাকসু নির্বাচন ২০২৫। প্রাণী জেনেটিক্স এবং মলিকিউলার বায়োলজি ক্লাবের সভাপতি। প্রাণবন্ত ক্যাম্পাসের মুখপাত্র।',
  keywords: ['SIAM emon', 'dhaka university', 'du', 'Zoology Debating Club', 'University of Dhaka', 'Biology Instructor at Bigbang Academy', 'President 2024-25 at Animal Genetics & Molecular Biology Club- AGMBC', 'ডাকসু নির্বাচন ২০২৫','siam' , 'du daksu' , 'du', 'prangon ecosystem' , 'dipanjan swapna prangon'],
  authors: [{ name: 'SIAM EMON' }],
  creator: 'SIAM EMON',
  publisher: 'SIAM EMON',
  openGraph: {
    title: 'SIAM EMON - ঢাকা বিশ্ববিদ্যালয়',
    description: 'সিয়াম ইমন, ঢাকা বিশ্ববিদ্যালয়। ডাকসু নির্বাচন ২০২৫। প্রাণবন্ত ক্যাম্পাসের মুখপাত্র।',
    url: 'https://siam-emon-du.firebaseapp.com', // Replace with actual domain
    siteName: 'SIAM EMON',
    images: [
      {
        url: 'https://placehold.co/1200x630.png', // Replace with a representative image
        width: 1200,
        height: 630,
        alt: 'A hopeful image for SIAM EMON campaign',
      },
    ],
    locale: 'bn_BD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SIAM EMON - ঢাকা বিশ্ববিদ্যালয়',
    description: 'সিয়াম ইমন, ঢাকা বিশ্ববিদ্যালয়। ডাকসু নির্বাচন ২০২৫। প্রাণবন্ত ক্যাম্পাসের মুখপাত্র।',
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
    <html lang="bn" suppressHydrationWarning>
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
