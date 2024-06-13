import { ModalPortal, ToastPortal } from '@/Portal'
import { ModalLayout } from '@/components'
import MyToastLayout from '@/components/Toasts/MyToastLayout'
import ToastLayout from '@/components/Toasts/ToastLayout'
import TotalProvider from '@/store/context/Provider/TotalProvider'
import store from '@/store/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'

declare global {
  interface Window {
    Kakao: any
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Taskify</title>
      </Head>
      <Provider store={store}>
        <TotalProvider>
          <ModalPortal>
            <ModalLayout />
          </ModalPortal>
          <ToastPortal>
            <MyToastLayout />
          </ToastPortal>
          <ToastPortal>
            <ToastLayout />
          </ToastPortal>
          <Component {...pageProps} />
        </TotalProvider>
      </Provider>
    </>
  )
}
