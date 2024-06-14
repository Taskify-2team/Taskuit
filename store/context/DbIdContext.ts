import { createContext, useContext } from 'react'

interface DbContextValue {
  dbId: string
}

export const DbIdContext = createContext<DbContextValue>({
  dbId: '',
})

export const useDbId = () => {
  const { dbId } = useContext(DbIdContext)

  return { dbId }
}
