import type { Metadata } from 'next'

import { Header } from '@/components/layouts/header/header'
import { Poppins } from 'next/font/google'

import '@/styles/main.scss'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] })

export const metadata: Metadata = {
  description: 'Best online store',
  title: 'online store',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={'en'}>
      <body className={poppins.className}>
        <Header />
        <main className={'main'}>{children}</main>
      </body>
    </html>
  )
}
