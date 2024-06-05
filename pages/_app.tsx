import { ModalPortal, ToastPortal } from '@/Portal'
import { ModalLayout } from '@/components'
import ToastLayout from '@/components/Toasts/ToastLayout'
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
        <ModalPortal>
          <ModalLayout />
        </ModalPortal>
        <ToastPortal>
          <ToastLayout />
        </ToastPortal>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
