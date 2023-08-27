import Footer from './components/Footer'
import NavBar from './components/NavBar'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['300','400','500', '700','900'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'IG Downloader',
  description: 'IG Downloader used for download any type of videos.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={poppins.className}>
        <NavBar />

        {children}
        <Footer />
      </body>
    </html>
  )
}
