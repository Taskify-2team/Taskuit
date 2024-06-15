import { Html, Head, Main, NextScript } from 'next/document'
import { useLoadTheme } from '@/store/context/ThemeContext'

export default function Document() {
  const { theme } = useLoadTheme()

  return (
    <Html lang="ko">
      <Head>
        <script defer src="https://developers.kakao.com/sdk/js/kakao.min.js" />
      </Head>
      <body className={theme === 'normal' ? '' : 'bg-var-black2'}>
        <Main />
        <NextScript />
        <div id="modal" />
        <div id="toast" />
      </body>
    </Html>
  )
}
