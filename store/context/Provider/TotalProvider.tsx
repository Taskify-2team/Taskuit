import { ReactNode, useEffect, useState } from 'react'
import { UserContext } from '../UserIdContext'
import { LanguageContext } from '../LanguageContext'
import { ThemeContext } from '../ThemeContext'

export default function TotalProvider({ children }: { children: ReactNode }) {
  const [userId, setUserId] = useState(0)
  const [language, setLanguage] = useState('ko')
  const [theme, setTheme] = useState('normal')

  const handleSetLanguage = () => {
    if (language === 'ko') {
      setLanguage('en')
    } else {
      setLanguage('ko')
    }
    localStorage.setItem('language', language)
  }

  const handleSetTheme = () => {
    if (theme === 'normal') {
      setTheme('dark')
    } else {
      setTheme('normal')
    }
    localStorage.setItem('theme', theme)
  }

  useEffect(() => {
    const data = localStorage.getItem('userId')
    if (data) {
      setUserId(Number(data))
    }
  }, [])

  useEffect(() => {
    const data = localStorage.getItem('language')
    if (data) {
      setLanguage(data)
    }
  }, [])

  useEffect(() => {
    const data = localStorage.getItem('theme')
    if (data) {
      setTheme(data)
    }
  }, [])

  return (
    <UserContext.Provider value={{ userId }}>
      <LanguageContext.Provider value={{ language, handleSetLanguage }}>
        <ThemeContext.Provider value={{ theme, handleSetTheme }}>{children}</ThemeContext.Provider>
      </LanguageContext.Provider>
    </UserContext.Provider>
  )
}
