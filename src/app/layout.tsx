import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { PerformanceMonitor } from '@/components/PerformanceMonitor'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://blackaion.com'),
  title: 'Blackaion - Infrastructure Investment & Development',
  description: 'Investment and advisory company with a focus on developing and growing infrastructure, energy and technology ventures across West Africa.',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Blackaion - Infrastructure Investment & Development',
    description: 'Investment and advisory company with a focus on developing and growing infrastructure, energy and technology ventures across West Africa.',
    type: 'website',
    url: 'https://blackaion.com',
    siteName: 'Blackaion',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blackaion - Infrastructure Investment & Development',
    description: 'Investment and advisory company with a focus on developing and growing infrastructure, energy and technology ventures across West Africa.',
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
        {/* Preload critical resources */}
        <link rel="preload" href="/arrow---arrow-right-md.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/chevron-up.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/chevron-down.svg" as="image" type="image/svg+xml" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//images.pexels.com" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://images.pexels.com" crossOrigin="anonymous" />
      </head>
      <body className={`${outfit.className} antialiased`}>
        {children}
        <PerformanceMonitor />
      </body>
    </html>
  )
}