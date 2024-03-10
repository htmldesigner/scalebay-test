import type { Metadata } from 'next'
import { PT_Sans } from 'next/font/google'
import '@/style/style.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import React from 'react'
import '@/types/ext-auth-extensions'
import { Providers } from '@/components/Providers'

const pt_sans = PT_Sans({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Главная страница',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Providers>
      <html lang='en'>
        <body className={pt_sans.className}>
          <Header />
          <main>
            <div className='container'>{children}</div>
          </main>
          <Footer />
        </body>
      </html>
    </Providers>
  )
}
