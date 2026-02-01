
import type {Metadata} from 'next';
import './globals.css';
import { cn } from "@/lib/utils";
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { FloatingFeedbackButton } from '@/components/layout/FloatingFeedbackButton';
import { PromotionalPopup } from '@/components/layout/PromotionalPopup';
import Script from 'next/script';


export const metadata: Metadata = {
  title: {
    default: 'ডাঃ মনীষা চক্রবর্ত্তী - বরিশাল-৫ | ১৩শ জাতীয় সংসদ নির্বাচন',
    template: '%s | ডাঃ মনীষা চক্রবর্ত্তী',
  },
  description: 'আসন্ন ত্রয়োদশ জাতীয় সংসদ নির্বাচনে বরিশাল-৫ আসনে গণতান্ত্রিক যুক্তফ্রন্ট সমর্থিত বাসদ নেতা ডাঃ মনীষা চক্রবর্ত্তীর নির্বাচনী ওয়েবসাইট।',
  keywords: ['ডাঃ মনীষা চক্রবর্ত্তী', 'বরিশাল-৫', 'জাতীয় সংসদ নির্বাচন', 'বাসদ', 'গণতান্ত্রিক যুক্তফ্রন্ট', 'মই মার্কা', 'Manisha Chakrabarty', 'Barisal-5', 'Bangladesh Election'],
  authors: [{ name: 'ডাঃ মনীষা চক্রবর্ত্তী' }],
  creator: 'ডাঃ মনীষা চক্রবর্ত্তী Campaign',
  publisher: 'ডাঃ মনীষা চক্রবর্ত্তী Campaign',
  openGraph: {
    title: 'ডাঃ মনীষা চক্রবর্ত্তী - বরিশাল-৫ | ১৩শ জাতীয় সংসদ নির্বাচন',
    description: 'সংসদকে শ্রমজীবী মানুষের অধিকার আদায়ের প্রতিষ্ঠানে পরিণত করতে ডাঃ মনীষা চক্রবর্ত্তীকে মই মার্কায় আপনার সমর্থন দিন।',
    url: 'https://drmonishacr.web.app/', // To be replaced
    siteName: 'ডাঃ মনীষা চক্রবর্ত্তী',
    images: [
      {
        url: 'https://i.postimg.cc/qR3tQ508/manisha-chakrabarty-og.jpg', // To be replaced
        width: 1200,
        height: 630,
        alt: 'ডাঃ মনীষা চক্রবর্ত্তী',
      },
    ],
    locale: 'bn_BD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ডাঃ মনীষা চক্রবর্ত্তী - বরিশাল-৫ | ১৩শ জাতীয় সংসদ নির্বাচন',
    description: 'সংসদকে শ্রমজীবী মানুষের অধিকার আদায়ের প্রতিষ্ঠানে পরিণত করতে ডাঃ মনীষা চক্রবর্ত্তীকে মই মার্কায় আপনার সমর্থন দিন।',
    images: ['https://i.postimg.cc/qR3tQ508/manisha-chakrabarty-og.jpg'], // To be replaced
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
    icon: '/favicon.ico', // To be replaced
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/site.webmanifest', // To be replaced
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <head>
        <Script src="https://www.powr.io/powr.js?platform=html" strategy="lazyOnload"></Script>
      </head>
      <body className={cn("antialiased min-h-screen flex flex-col")}>
        <Header />
        <PromotionalPopup />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
        <FloatingFeedbackButton />
      </body>
    </html>
  );
}
