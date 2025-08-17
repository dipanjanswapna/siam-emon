import type {Metadata} from 'next';
import './globals.css';
import { cn } from "@/lib/utils";
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: {
    default: 'Seam Ferdous Emon - ঢাকা বিশ্ববিদ্যালয়',
    template: '%s | Seam Ferdous Emon',
  },
  description: 'সিয়াম ফেরদৌস ইমন, ঢাকা বিশ্ববিদ্যালয়। ডাকসু নির্বাচন ২০২৫। প্রাণবন্ত ক্যাম্পাসের মুখপাত্র।',
  keywords: ['ঢাকা বিশ্ববিদ্যালয়', 'ডাকসু নির্বাচন', 'সিয়াম ফেরদৌস ইমন', 'গবেষণা ও প্রকাশনা সম্পাদক', 'শিক্ষার্থী নির্বাচন', 'ফজলুল হক মুসলিম হল', 'DUCSU election', 'SIam Ferdous Emon', 'Research and Publication Secretary', 'Dhaka University', 'student leader', 'campus election', 'DU', 'student welfare'],
  authors: [{ name: 'Seam Ferdous Emon' }],
  creator: 'Seam Ferdous Emon',
  publisher: 'Seam Ferdous Emon',
  openGraph: {
    title: 'Seam Ferdous Emon - ঢাকা বিশ্ববিদ্যালয়',
    description: 'সিয়াম ফেরদৌস ইমন, ঢাকা বিশ্ববিদ্যালয়। ডাকসু নির্বাচন ২০২৫। প্রাণবন্ত ক্যাম্পাসের মুখপাত্র।',
    url: 'https://siam-emon-du.firebaseapp.com', // Replace with actual domain
    siteName: 'Seam Ferdous Emon',
    images: [
      {
        url: 'https://placehold.co/1200x630.png', // Replace with a representative image
        width: 1200,
        height: 630,
        alt: 'A hopeful image for Seam Ferdous Emon campaign',
      },
    ],
    locale: 'bn_BD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seam Ferdous Emon - ঢাকা বিশ্ববিদ্যালয়',
    description: 'সিয়াম ফেরদৌস ইমন, ঢাকা বিশ্ববিদ্যালয়। ডাকসু নির্বাচন ২০২৫। প্রাণবন্ত ক্যাম্পাসের মুখপাত্র।',
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
