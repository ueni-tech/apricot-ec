import type { Metadata } from 'next'
import { Noto_Sans_JP, Roboto, Damion } from 'next/font/google'
import Header from '@/app/components/Header/Header'
import Footer from '@/app/components/Footer/Footer'
import './globals.scss'

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-jp',
})

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-en',
})

const damion = Damion({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-damion',
})

export const metadata: Metadata = {
  title: 'APRICOT - Elegance & Mignonne | アプリコット レディースファッション通販',
  description: 'あなたのお気に入りがみつかる。レディースファッション通販のアプリコットです。',
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${roboto.variable} ${damion.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
