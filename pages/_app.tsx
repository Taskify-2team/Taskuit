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
          <MyToastLayout />
        </ToastPortal>
        <ToastPortal>
          <ToastLayout />
        </ToastPortal>
        <TotalProvider>
          <Component {...pageProps} />
        </TotalProvider>
      </Provider>
    </>
  )
}
