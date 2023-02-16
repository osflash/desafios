import '../styles/globals.css'

import { Inter } from '@next/font/google'

interface RottLayoutProps {
  children: React.ReactNode
}

const inter = Inter({
  subsets: ['latin'],
  display: 'optional'
})

const RootLayout: React.FC<RottLayoutProps> = ({ children }) => {
  return (
    <html lang="pt-br" className={inter.className}>
      <head />
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
