import { ReactNode, useEffect, useMemo, useState } from 'react'
import { getDbUserId } from '@/service/tag'
import { getUserInfo } from '@/service/users'
import { UserContext } from '../UserIdContext'
import { LanguageContext } from '../LanguageContext'
import { ThemeContext } from '../ThemeContext'
import { DbIdContext } from '../DbIdContext'

export default function TotalProvider({ children }: { children: ReactNode }) {
  const [userId, setUserId] = useState(0)
  const [dbId, setDbId] = useState('')
  const [language, setLanguage] = useState('ko')
  const [theme, setTheme] = useState('normal')

  useEffect(() => {
    const loadUser = async () => {
      const result = await getUserInfo()
      setUserId(result.id)
    }
    if (localStorage.getItem('accessToken')) {
      loadUser()
    }
  }, [])

  useEffect(() => {
    const loadDbId = async () => {
      const result = await getDbUserId({ userId })
      setDbId(result.id)
    }
    if (userId) {
      loadDbId()
    }
  }, [userId])

  useEffect(() => {
    const data = localStorage.getItem('language')
    if (data) {
      setLanguage(data)
    } else {
      localStorage.setItem('language', 'ko')
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

  const userIdValue = useMemo(() => ({ userId }), [userId])

  const dbIdValue = useMemo(() => ({ dbId }), [dbId])

  const languageValue = useMemo(
    () => ({
      language,
      handleSetLanguage: () => {
        if (language === 'ko') {
          setLanguage('en')
        } else {
          setLanguage('ko')
        }
        localStorage.setItem('language', language)
      },
    }),
    [language],
  )

  const themeValue = useMemo(
    () => ({
      theme,
      handleSetTheme: () => {
        if (theme === 'normal') {
          setTheme('dark')
          localStorage.setItem('theme', 'dark')
        } else {
          setTheme('normal')
          localStorage.setItem('theme', 'normal')
        }
      },
    }),
    [theme],
  )

  return (
    <UserContext.Provider value={userIdValue}>
      <DbIdContext.Provider value={dbIdValue}>
        <LanguageContext.Provider value={languageValue}>
          <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
        </LanguageContext.Provider>
      </DbIdContext.Provider>
    </UserContext.Provider>
  )
}
