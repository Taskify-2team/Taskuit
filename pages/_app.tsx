import Footer from '@/components/Footer/Footer'
import LightHeader from '@/components/Headers/LightHeader/LightHeader'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Taskify</title>
      </Head>
      <LightHeader />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
