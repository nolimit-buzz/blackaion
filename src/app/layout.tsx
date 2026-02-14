import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { GlobalNavbar } from '@/components/GlobalNavbar'
import { GlobalFooter } from '@/components/GlobalFooter'

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
    images: [
      {
        url: 'https://cms.blackaion.com/uploads/thumbnail_vecteezy_digital_rendering_portrays_africa_s_illuminated_cities_71161648_1_1_1_d655d92dc1.jpg',
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
    images: ['https://cms.blackaion.com/uploads/thumbnail_vecteezy_digital_rendering_portrays_africa_s_illuminated_cities_71161648_1_1_1_d655d92dc1.jpg'],
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
        <link rel="preload" href="/logo-white.png" as="image" type="image/png" />

        {/* DNS prefetch for external APIs */}
        <link rel="dns-prefetch" href={process.env.NEXT_PUBLIC_API_URL} />

        {/* Preconnect to API domain */}
        <link rel="preconnect" href={process.env.NEXT_PUBLIC_API_URL} crossOrigin="anonymous" />
      </head>
      <body className={`${outfit.className} antialiased`}>
        <GlobalNavbar />
        <main className="mt-16">
          {children}
        </main>
        <GlobalFooter />
      </body>
    </html>
  )
}