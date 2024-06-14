import { createContext, useContext } from 'react'

interface UserContextValue {
  userId: number
}

export const UserContext = createContext<UserContextValue>({
  userId: 0,
})

export const useLoadUser = () => {
  const { userId } = useContext(UserContext)

  return { userId }
}
