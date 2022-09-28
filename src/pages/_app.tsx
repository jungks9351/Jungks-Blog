import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Footer from 'src/components/common/Footer'
import Header from 'src/components/common/Header'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="h-screen w-full">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
