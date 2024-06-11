import { ReactNode, useEffect, useState } from 'react'
import { getUserInfo } from '@/service/users'
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
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme('normal')
      localStorage.setItem('theme', 'normal')
    }
  }

  useEffect(() => {
    const loadUser = async () => {
      const result = await getUserInfo()
      setUserId(result.id)
    }
    loadUser()
  }, [])

  useEffect(() => {
    const data = localStorage.getItem('language')
    if (data) {
      setLanguage(data)
    } else {
      localStorage.setItem('language', language)
    }
  }, [])

  useEffect(() => {
    const data = localStorage.getItem('theme')
    if (data) {
      setTheme(data)
    } else {
      localStorage.setItem('theme', 'normal')
    }
  }, [])

  console.log(userId)

  return (
    <UserContext.Provider value={{ userId }}>
      <LanguageContext.Provider value={{ language, handleSetLanguage }}>
        <ThemeContext.Provider value={{ theme, handleSetTheme }}>{children}</ThemeContext.Provider>
      </LanguageContext.Provider>
    </UserContext.Provider>
  )
}
