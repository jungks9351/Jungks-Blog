import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Footer from 'src/components/common/Footer'
import Header from 'src/components/common/Header'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
