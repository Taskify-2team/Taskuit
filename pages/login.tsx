import { AuthInput, LongButton } from '@/components'
import Image from 'next/image'
import { useLoadTheme } from '@/store/context/ThemeContext'
import Link from 'next/link'
import { Controller, useForm } from 'react-hook-form'
import logo from '@/public/images/taskuitLogo_main.png'
import { useAppDispatch } from '@/hooks/useApp'
import { openToast } from '@/store/reducers/toastReducer'
import AuthThemeButton from '@/components/AuthThemeButton/AuthThemeButton'
import { LogInFormValueType } from '@/types/auth'
import { useLoadLanguage } from '@/store/context/LanguageContext'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

const EMAIL_REGREX = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-.]+$/

export default function LoginForm() {
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors, dirtyFields, isSubmitting },
  } = useForm<LogInFormValueType>({
    mode: 'onBlur',
  })
  const dispatch = useAppDispatch()
  const { handleSetTheme, theme } = useLoadTheme()
  const { language } = useLoadLanguage()
  const router = useRouter()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLoginError = (error: string) => {
    if (error === '존재하지 않는 유저입니다.') {
      setError('id', {
        type: 'manual',
        message: error,
      })
    } else {
      setError('password', {
        type: 'manual',
        message: error,
      })
      dispatch(openToast('wrongCurrentPassword'))
    }
  }

  const onSubmit = async (data: LogInFormValueType) => {
    const result = await signIn('credentials', {
      id: data.id,
      password: data.password,
      redirect: false,
    })
    console.log(result)
    if (result?.ok) {
      router.push('/mydashboard')
    } else if (result?.error) {
      handleLoginError(result.error)
    }
  }

  return (
    <div
      className={`flex flex-col items-center py-[18rem] sm:pt-[10rem] md:py-[20.7rem] ${theme === 'normal' ? 'bg-var-white' : 'bg-var-black2'} `}
    >
      <div className="mb-[3.8rem] flex flex-col items-center">
        <Link href="/" className="flex flex-col items-center">
          <Image src={logo} alt="로고" className="w-[30rem] sm:w-[20rem]" />
          <p className="text-center font-[Logo] text-[7rem] font-bold text-primary-violet sm:text-[5rem]">
            Taskuit
          </p>
        </Link>
        <p className={`text-[2rem] ${theme === 'normal' ? 'text-black' : 'text-white'}`}>
          {language === 'ko' ? '오늘도 만나서 반가워요!' : 'Nice to meet you again today!'}
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[52rem] flex-col sm:w-[35.1rem]">
          <div className="pb-[2.8rem]">
            <Controller
              name="id"
              control={control}
              rules={{
                required: `${language === 'ko' ? '이메일을 입력해주세요' : 'Please enter your email'}`,
                pattern: {
                  value: EMAIL_REGREX,
                  message: `${language === 'ko' ? '이메일 형식을 작성해주세요' : 'Please fill out the e-mail format'}`,
                },
              }}
              render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <AuthInput
                  id="email"
                  placeholder={language === 'ko' ? '이메일' : 'Email'}
                  label={language === 'ko' ? '이메일' : 'Email'}
                  type="text"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={error || errors.id}
                  theme={theme}
                />
              )}
            />
          </div>
          <div className="pb-[2.8rem]">
            <Controller
              name="password"
              control={control}
              rules={{
                required: `${language === 'ko' ? '비밀번호를 입력해주세요' : 'Please enter your password'}`,
                minLength: {
                  value: 8,
                  message: `${language === 'ko' ? '8자 이상 입력해주세요' : 'Please enter at least 8 characters'}`,
                },
              }}
              render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <AuthInput
                  id="password"
                  placeholder={language === 'ko' ? '비밀번호' : 'Password'}
                  label={language === 'ko' ? '비밀번호' : 'Password'}
                  type="password"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={error || errors.password}
                  theme={theme}
                />
              )}
            />
          </div>
          <LongButton
            type="submit"
            disabled={
              !dirtyFields.id ||
              !dirtyFields.password ||
              Object.keys(errors).length > 0 ||
              isSubmitting
            }
          >
            {language === 'ko' ? '로그인' : 'Login'}
          </LongButton>
        </div>
      </form>
      <div className="mt-[1.6rem] flex gap-[1rem]">
        <span className={`text-[1.6rem] ${theme === 'normal' ? 'text-black' : 'text-white'}`}>
          {language === 'ko' ? '회원이 아니신가요?' : `Not a member yet?`}
        </span>
        <Link
          href="/signup"
          className={`text-[1.6rem] underline ${theme === 'normal' ? 'text-primary-violet' : 'text-var-blue'}`}
        >
          {language === 'ko' ? '회원가입하기' : 'Sign up for membership'}
        </Link>
      </div>
      <AuthThemeButton theme={theme} handleSetTheme={handleSetTheme} />
    </div>
  )
}
