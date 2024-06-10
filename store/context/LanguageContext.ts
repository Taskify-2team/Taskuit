import { createContext, useContext } from 'react'

interface LanguageContextValue {
  language: string
  handleSetLanguage: () => void
}

export const LanguageContext = createContext<LanguageContextValue>({
  language: '',
  handleSetLanguage: () => {},
})

export const useLoadLanguage = () => {
  const { language, handleSetLanguage } = useContext(LanguageContext)

  return { language, handleSetLanguage }
}
