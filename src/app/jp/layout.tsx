import type { Metadata } from 'next'
import Header from '@/components/koda/Header'
import Footer from '@/components/koda/Footer'

export const metadata: Metadata = {
  title: 'KODA | Solunai',
  description: '統制運用を前提としたAI製品。オペレーター・イン・ザ・ループ、監査対応、安定デプロイ。',
  openGraph: {
    title: 'KODA | Solunai',
    description: '統制運用を前提としたAI製品。',
    url: 'https://koda.solunai.co.jp/jp',
    siteName: 'KODA',
    locale: 'ja_JP',
    type: 'website',
  },
}

export default function JPLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header locale="jp" />
      <main>{children}</main>
      <Footer locale="jp" />
    </>
  )
}
