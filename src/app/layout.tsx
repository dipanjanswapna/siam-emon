
import type {Metadata} from 'next';
import { Hind_Siliguri } from 'next/font/google';
import './globals.css';
import { cn } from "@/lib/utils";
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { FloatingFeedbackButton } from '@/components/layout/FloatingFeedbackButton';
import { FloatingVoteButton } from '@/components/layout/FloatingVoteButton';
import { PromotionalPopup } from '@/components/layout/PromotionalPopup';
import Image from 'next/image';
import Script from 'next/script';

const hindSiliguri = Hind_Siliguri({
  subsets: ['bengali'],
  weight: ['400', '700'],
  variable: '--font-hind-siliguri',
});


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
    url: 'https://seamferdousemon.vercel.app/', // Replace with actual domain
    siteName: 'সিয়াম ফেরদৌস ইমন',
    images: [
      {
        url: 'https://i.postimg.cc/FHd9sjB3/20250821-1858-remix-01k36b5fqxfrh8vvnt3vxwnre2.jpg', // Replace with a representative image
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
    images: ['https://i.postimg.cc/FHd9sjB3/20250821-1858-remix-01k36b5fqxfrh8vvnt3vxwnre2.jpg'], // Replace with a representative image
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

function ImageBannerSection() {
    return (
        <section className="w-full bg-background py-4">
            <div className="container mx-auto">
                <div className="relative w-full h-auto aspect-[16/4] md:aspect-[16/3] lg:aspect-[16/2]">
                    <Image 
                        src="https://i.postimg.cc/CLsswhQ1/Screenshot-2025-08-18-035352-removebg-preview.png"
                        alt="ভোট দিন আমাকে! আপনার ভোটে গড়ে উঠুক একটি গবেষণা-উদ্যমী ডাকসু"
                        fill
                        className="object-contain"
                        data-ai-hint="vote appeal banner"
                    />
                </div>
            </div>
        </section>
    );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" suppressHydrationWarning className={hindSiliguri.variable}>
      <head>
        <meta name="google-site-verification" content="GSWYRx1SJSZQ8-RBsRO33orlxaiVDcr6lgrR3cognH8" />
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
      <body className={cn("antialiased min-h-screen flex flex-col")}>
        <Header />
        <PromotionalPopup />
        <main className="flex-grow">{children}</main>
        <ImageBannerSection />
        <Footer />
        <Toaster />
        <FloatingVoteButton />
        <FloatingFeedbackButton />
      </body>
    </html>
  );
}
