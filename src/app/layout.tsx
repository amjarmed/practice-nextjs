import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter, Raleway } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Providers } from '@/components/Providers';

// Font optimization
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
});

// Metadata for SEO - Next.js 15 metadata API
export const metadata: Metadata = {
  title: {
    default: 'ModernShop | Stylish E-Commerce Experience',
    template: '%s | ModernShop',
  },
  description: 'A modern e-commerce store with the latest and greatest products',
  keywords: ['ecommerce', 'shop', 'online store', 'modern', 'fashion', 'electronics'],
  authors: [{ name: 'ModernShop Team' }],
  creator: 'ModernShop',
  publisher: 'ModernShop',
  metadataBase: new URL('https://modernshop.example.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/shortcut-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://modernshop.example.com',
    siteName: 'ModernShop',
    title: 'ModernShop | Stylish E-Commerce Experience',
    description: 'A modern e-commerce store with the latest and greatest products',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ModernShop Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ModernShop | Stylish E-Commerce Experience',
    description: 'A modern e-commerce store with the latest and greatest products',
    images: ['/twitter-image.jpg'],
    creator: '@modernshop',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
  category: 'ecommerce',
};

// Viewport configuration - separated in Next.js 15
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 2,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${raleway.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Providers>
          {/* Toast notifications */}
          <Toaster position="top-center" />

          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
