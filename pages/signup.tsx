/* eslint-disable jsx-a11y/label-has-associated-control */
import { AuthInput, LongButton } from '@/components'
import { AxiosError, isAxiosError } from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import logo from '@/public/images/taskuitLogo_main.png'
import { SignUpAccess } from '@/service/users'
import { openToast } from '@/store/reducers/toastReducer'
import { useAppDispatch } from '@/hooks/useApp'
import { SignUpFormValueType } from '@/types/auth'
import { useLoadTheme } from '@/store/context/ThemeContext'
import AuthThemeButton from '@/components/AuthThemeButton/AuthThemeButton'
import { useLoadLanguage } from '@/store/context/LanguageContext'

const EMAIL_REGREX = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-.]+$/

export default function LoginForm() {
  const {
    handleSubmit,
    control,
    setError,
    getValues,
    formState: { errors, dirtyFields, isSubmitting },
  } = useForm<SignUpFormValueType>({
    mode: 'onBlur',
  })
  const [loginError, setLoginError] = useState<string>('')
  const dispatch = useAppDispatch()
  const { handleSetTheme, theme } = useLoadTheme()
  const { language } = useLoadLanguage()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSignUpError = (error: AxiosError<any>) => {
    const errorMessage = error.response?.data?.message
    if (errorMessage === '이미 사용중인 이메일입니다.') {
      setError('id', {
        type: 'manual',
        message: errorMessage,
      })
      dispatch(openToast('emailInUse'))
    } else {
      setLoginError('서버에서 오류가 발생했습니다.')
    }
  }

  const onSubmit = async (data: SignUpFormValueType) => {
    try {
      await SignUpAccess(data.id, data.nickname, data.password)
      dispatch(openToast('successSignUp'))
      setTimeout(() => {
        window.location.href = '/login'
      }, 3000)
    } catch (error: unknown) {
      if (!isAxiosError(error)) {
        setLoginError('서버에서 오류가 발생했습니다.')
        return
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const axiosError = error as AxiosError<any>
      handleSignUpError(axiosError)
    }
  }

  return (
    <div
      className={`flex flex-col items-center py-[18rem] sm:pt-[10rem] md:py-[20.7rem] ${theme === 'normal' ? 'bg-var-white' : 'bg-var-black2'} `}
    >
      <div className="mb-[3.8rem] flex flex-col items-center">
        <Link href="/" className="flex flex-col items-center">
          <Image src={logo} alt="로고" className="w-[30rem] sm:w-[20rem]" />
          <p className="text-center font-[Logo] text-[7rem] font-bold text-primary-violet">
            Taskuit
          </p>
        </Link>
        <p className={`text-[2rem] ${theme === 'normal' ? 'text-black' : 'text-white'}`}>
          {language === 'ko' ? '첫 방문을 환영합니다!' : 'Welcome to your first visit!'}
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
              name="nickname"
              control={control}
              rules={{
                required: `${language === 'ko' ? '닉네임을 입력해 주세요' : 'Please enter your nickname'}`,
                maxLength: {
                  value: 10,
                  message: `${language === 'ko' ? '닉네임을 최대 10자 이하로 입력해 주세요' : 'Please enter a nickname of 10 characters or less'}`,
                },
              }}
              render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <AuthInput
                  id="nickname"
                  placeholder={
                    language === 'ko' ? '닉네임을 입력해주세요' : 'Please enter your nickname'
                  }
                  label={language === 'ko' ? '닉네임' : 'Nickname'}
                  type="text"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={error}
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
                  error={error}
                  theme={theme}
                />
              )}
            />
          </div>
          <div className="pb-[2.8rem]">
            <Controller
              name="passwordConfirm"
              control={control}
              rules={{
                required: `${language === 'ko' ? '비밀번호를 한번 더 입력해 주세요' : 'Please enter your password one more time'}`,
                validate: {
                  matchesPreviousPassword: (value) =>
                    value === getValues('password') ||
                    `${language === 'ko' ? '비밀번호가 일치하지 않습니다.' : `Password doesn't match`}`,
                },
              }}
              render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <AuthInput
                  id="passwordConfirm"
                  placeholder={
                    language === 'ko'
                      ? '비밀번호를 한번 더 입력해 주세요'
                      : 'Please enter your password one more time'
                  }
                  label={language === 'ko' ? '비밀번호 확인' : 'Password confirm'}
                  type="password"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={error}
                  theme={theme}
                />
              )}
            />
          </div>
          <Controller
            name="agreeTerms"
            control={control}
            rules={{ required: '이용약관에 동의해주세요.' }}
            render={({ field }) => (
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  className="mr-2 h-[2rem] w-[2rem]"
                  checked={field.value}
                  onChange={field.onChange}
                />
                <label
                  htmlFor="agreeTerms"
                  className={`text-[1.6rem] text-gray-600 ${theme === 'normal' ? 'text-black' : 'text-white'}`}
                >
                  {language === 'ko'
                    ? '이용약관에 동의합니다'
                    : 'agree to the terms and conditions'}
                </label>
              </div>
            )}
          />
          <div className="h-[1.5rem]">
            {loginError && <div className="text-[1.4rem] text-var-red">{loginError}</div>}
          </div>
          <LongButton
            type="submit"
            disabled={
              Object.keys(errors).length > 0 ||
              !dirtyFields.id ||
              !dirtyFields.password ||
              !dirtyFields.nickname ||
              !dirtyFields.passwordConfirm ||
              !dirtyFields.agreeTerms ||
              isSubmitting
            }
          >
            {language === 'ko' ? '가입하기' : 'Singup'}
          </LongButton>
        </div>
      </form>
      <div className="mt-[1.6rem] flex gap-[1rem]">
        <span className={`text-[1.6rem] ${theme === 'normal' ? 'text-black' : 'text-white'}`}>
          {language === 'ko' ? '이미 가입하셨나요?' : 'Have you already signed up?'}
        </span>
        <Link
          href="/login"
          className={`text-[1.6rem] underline ${theme === 'normal' ? 'text-primary-violet' : 'text-var-blue'}`}
        >
          {language === 'ko' ? '로그인 하기' : 'Login'}
        </Link>
      </div>
      <AuthThemeButton theme={theme} handleSetTheme={handleSetTheme} />
    </div>
  )
}
