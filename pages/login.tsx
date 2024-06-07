import { AuthInput, LongButton } from '@/components'
import LoginAccess from '@/service/auth'
import { AxiosError, isAxiosError } from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import logo from '@/public/images/taskuitLogo.png'
import { useAppDispatch } from '@/hooks/useApp'
import { openToast } from '@/store/reducers/toastReducer'

const EMAIL_REGREX = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-.]+$/

export interface FormValueType {
  id: string
  password: string
}

export default function LoginForm() {
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors, dirtyFields, isSubmitting },
  } = useForm<FormValueType>({
    mode: 'onBlur',
  })
  const [loginError, setLoginError] = useState<string>('')
  const dispatch = useAppDispatch()

  const handleLoginSuccess = (accessToken: string) => {
    localStorage.setItem('accessToken', accessToken)
    window.location.href = '/mydashboard'
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLoginError = (error: AxiosError<any>) => {
    if (!isAxiosError(error)) {
      setLoginError('서버에서 오류가 발생했습니다.')
      return
    }

    const errorMessage = error.response?.data?.message
    if (errorMessage === '존재하지 않는 유저입니다.') {
      setError('id', {
        type: 'manual',
        message: errorMessage,
      })
    } else {
      setError('password', {
        type: 'manual',
        message: errorMessage,
      })
      dispatch(openToast('wrongCurrentPassword'))
    }
  }

  const onSubmit = async (data: FormValueType) => {
    try {
      const response = await LoginAccess(data.id, data.password)
      const { accessToken } = response.data
      handleLoginSuccess(accessToken)
    } catch (error: unknown) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      handleLoginError(error as AxiosError<any>)
    }
  }

  return (
    <div className="flex flex-col items-center pt-[10.3rem]">
      <div className="mb-[3.8rem] flex flex-col items-center">
        <Link href="/">
          <Image src={logo} width={164} alt="로고" />
          <p className="text-[5rem] font-bold text-[#1A57C9]">Taskuit</p>
        </Link>
        <p className="text-[2rem]">오늘도 만나서 반가워요!</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[52rem] flex-col">
          <div className="pb-[2.8rem]">
            <Controller
              name="id"
              control={control}
              rules={{
                required: '이메일을 입력해주세요.',
                pattern: {
                  value: EMAIL_REGREX,
                  message: '이메일 형식으로 작성해 주세요.',
                },
              }}
              render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <AuthInput
                  id="email"
                  placeholder="이메일"
                  label="이메일"
                  type="text"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={error || errors.id}
                />
              )}
            />
          </div>
          <div className="pb-[2.3rem]">
            <Controller
              name="password"
              control={control}
              rules={{
                required: '비밀번호를 입력해주세요',
                minLength: {
                  value: 8,
                  message: '8자 이상 입력해주세요.',
                },
              }}
              render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <AuthInput
                  id="password"
                  placeholder="비밀번호"
                  label="비밀번호"
                  type="password"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={error || errors.password}
                />
              )}
            />
          </div>
          <div className="mb-[0.5rem] h-[2rem]">
            {loginError && <div className="text-[1.4rem] text-var-red">{loginError}</div>}
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
            로그인
          </LongButton>
        </div>
      </form>
      <div className="mt-[1.6rem] flex gap-[1rem]">
        <span className="text-[1.6rem]">회원이 아니신가요?</span>
        <Link href="/signup" className="text-[1.6rem] text-primary-violet underline">
          회원가입하기
        </Link>
      </div>
    </div>
  )
}
