import { ModalProvider } from '@/contexts/ModalContext'
import store from '@/store/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Taskify</title>
      </Head>
      <Provider store={store}>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </Provider>
    </>
  )
}
