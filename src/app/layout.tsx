import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { GlobalNavbar } from '@/components/GlobalNavbar'
import { GlobalFooter } from '@/components/GlobalFooter'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
})
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://blackaion.com'),
  title: 'Blackaion - Infrastructure Investment & Development',
  description: 'Investment and advisory company with a focus on developing and growing infrastructure, energy and technology ventures across West Africa.',
  robots: 'index, follow',
  openGraph: {
    title: 'Blackaion - Infrastructure Investment & Development',
    description: 'Investment and advisory company with a focus on developing and growing infrastructure, energy and technology ventures across West Africa.',
    type: 'website',
    url: 'https://blackaion.com',
    siteName: 'Blackaion',
    images: [
      {
        url: 'https://cms.blackaion.com/uploads/thumbnail_vecteezy_digital_rendering_portrays_africa_s_illuminated_cities_71161648_1_1_1_1_37e585709a.webp',
        width: 1200,
        height: 630,
        alt: 'Blackaion - Infrastructure Investment & Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blackaion - Infrastructure Investment & Development',
    description: 'Investment and advisory company with a focus on developing and growing infrastructure, energy and technology ventures across West Africa.',
    images: ['https://cms.blackaion.com/uploads/thumbnail_vecteezy_digital_rendering_portrays_africa_s_illuminated_cities_71161648_1_1_1_1_37e585709a.webp'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* DNS prefetch for external APIs */}
        <link rel="dns-prefetch" href={process.env.NEXT_PUBLIC_API_URL} />

        {/* Preconnect to API domain */}
        <link rel="preconnect" href={process.env.NEXT_PUBLIC_API_URL} crossOrigin="anonymous" />
      </head>
      <body className={`${outfit.className} antialiased`}>
        <GlobalNavbar />
        <main className="bg-black mt-16">
          {children}
        </main>
        <GlobalFooter />
      </body>
    </html>
  )
}