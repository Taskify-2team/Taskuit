import { createContext, useContext } from 'react'

interface UserContextValue {
  userId: number
  dbId: string
}

export const UserContext = createContext<UserContextValue>({
  userId: 0,
  dbId: '',
})

export const useLoadUser = () => {
  const { userId, dbId } = useContext(UserContext)

  return { userId, dbId }
}
