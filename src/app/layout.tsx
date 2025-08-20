
import type {Metadata} from 'next';
import './globals.css';
import { cn } from "@/lib/utils";
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { FloatingFeedbackButton } from '@/components/layout/FloatingFeedbackButton';
import Image from 'next/image';
import Script from 'next/script';

export const metadata: Metadata = {
  title: {
    default: 'সিয়াম ফেরদৌস ইমন - গবেষণা ও প্রকাশনা সম্পাদক পদপ্রার্থী | ডাকসু নির্বাচন ২০২৫',
    template: '%s | সিয়াম ফেরদৌস ইমন',
  },
  description: 'সিয়াম ফেরদৌস ইমন, গবেষণা ও প্রকাশনা সম্পাদক পদপ্রার্থী, ডাকসু নির্বাচন ২০২৫। ঢাকা বিশ্ববিদ্যালয় ও ফজলুল হক মুসলিম হলের একজন নিবেদিতপ্রাণ শিক্ষার্থী নেতা।',
  keywords: ['ঢাকা বিশ্ববিদ্যালয়', 'ডাকসু নির্বাচন', 'সিয়াম ফেরদৌস ইমন', 'গবেষণা ও প্রকাশনা সম্পাদক', 'শিক্ষার্থী নির্বাচন', 'ফজলুল হক মুসলিম হল', 'DUCSU election', 'Siam Ferdous Emon', 'Research and Publication Secretary', 'Dhaka University', 'student leader', 'campus election', 'DU', 'student welfare'],
  authors: [{ name: 'Siam Ferdous Emon' }],
  creator: 'Siam Ferdous Emon',
  publisher: 'Siam Ferdous Emon',
  openGraph: {
    title: 'সিয়াম ফেরদৌস ইমন - গবেষণা ও প্রকাশনা সম্পাদক পদপ্রার্থী | ডাকসু নির্বাচন ২০২৫',
    description: 'সিয়াম ফেরদৌস ইমন, ডাকসু নির্বাচনে গবেষণা ও প্রকাশনা সম্পাদক পদপ্রার্থী। ঢাকা বিশ্ববিদ্যালয় ও ফজলুল হক মুসলিম হলের একজন নিবেদিতপ্রাণ শিক্ষার্থী নেতা।',
    url: 'https://siam-emon-du.firebaseapp.com', // Replace with actual domain
    siteName: 'সিয়াম ফেরদৌস ইমন',
    images: [
      {
        url: 'https://i.postimg.cc/LXCLpBjm/532463080-3680875555553854-4475665250768894271-n.jpg', // Replace with a representative image
        width: 1200,
        height: 630,
        alt: 'সিয়াম ফেরদৌস ইমন এর একটি প্রচারণামূলক ছবি',
      },
    ],
    locale: 'bn_BD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'সিয়াম ফেরদৌস ইমন - গবেষণা ও প্রকাশনা সম্পাদক পদপ্রার্থী | ডাকসু নির্বাচন ২০২৫',
    description: 'সিয়াম ফেরদৌস ইমন, ডাকসু নির্বাচনে গবেষণা ও প্রকাশনা সম্পাদক পদপ্রার্থী। ঢাকা বিশ্ববিদ্যালয় ও ফজলুল হক মুসলিম হলের একজন নিবেদিতপ্রাণ শিক্ষার্থী নেতা।',
    images: ['https://i.postimg.cc/LXCLpBjm/532463080-3680875555553854-4475665250768894271-n.jpg'], // Replace with a representative image
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
        <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;700&display=swap" rel="stylesheet" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-TS85T6ZB8Q"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TS85T6ZB8Q');
          `}
        </Script>
        <Script src="https://www.powr.io/powr.js?platform=html" strategy="lazyOnload"></Script>
      </head>
      <body className={cn("font-body antialiased min-h-screen flex flex-col")}>
        <Header />
        <main className="flex-grow">{children}</main>
        <section className="w-full">
            <div className="relative w-full h-auto aspect-[16/9]">
                 <Image 
                    src="https://i.postimg.cc/CLsswhQ1/Screenshot-2025-08-18-035352-removebg-preview.png"
                    alt="Campaign Banner"
                    fill
                    className="object-contain"
                    data-ai-hint="campaign banner"
                 />
            </div>
        </section>
        <Footer />
        <Toaster />
        <FloatingFeedbackButton />
      </body>
    </html>
  );
}
