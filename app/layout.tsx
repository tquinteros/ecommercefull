import type { Metadata } from 'next'
import { inter, lusitana } from './src/components/fonts/fonts'
import './globals.css'
import Header from './src/components/Header/Header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased px-12`}>
        <Header />
        {children}
        <ToastContainer />
        </body>
    </html>
  )
}
