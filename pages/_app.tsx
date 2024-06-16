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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Taskuit</title>
      </Head>
      <Provider store={store}>
        <TotalProvider>
          <ToastPortal>
            <MyToastLayout />
          </ToastPortal>
          <ModalPortal>
            <ModalLayout />
          </ModalPortal>
          <ToastPortal>
            <ToastLayout />
          </ToastPortal>
          <Component {...pageProps} />
        </TotalProvider>
      </Provider>
    </>
  )
}
