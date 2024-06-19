import { useSession } from 'next-auth/react'
import { PropsWithChildren } from 'react'

function SessionLoader({ children }: PropsWithChildren<{}>) {
  const { status, data: session } = useSession()

  const isLogin = !!session && status === 'authenticated'
  const token = isLogin ? session.accessToken : ''

  useEffect(() => {
    setToken(token)
    setLoginState(isLogin)
  }, [isLogin])

  return <>{children}</>
}

export default SessionLoader
