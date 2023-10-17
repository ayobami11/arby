import './globals.css';

import { Georama } from 'next/font/google';

import { AppContextProvider } from '@/contexts/app';

const georama = Georama({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-georama',
  fallback: ['sans-serif']
});

export const metadata = {
  title: 'Abisola',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${georama.variable}`}>
      <body className='text-white font-arial'>
        <AppContextProvider>
          {children}
        </AppContextProvider>
      </body>
    </html>
  )
}