import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/koda/Header'
import Footer from '@/components/koda/Footer'

export const metadata: Metadata = {
  title: 'KODA | Solunai',
  description: 'Industrial AI products designed for controlled operation. Operator-in-loop, audit-ready, stable deployment.',
  openGraph: {
    title: 'KODA | Solunai',
    description: 'Industrial AI products designed for controlled operation.',
    url: 'https://koda.solunai.co.jp',
    siteName: 'KODA',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
