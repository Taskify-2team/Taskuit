import { AuthInput, LongButton } from '@/components'
import LoginAccess from '@/service/auth'
import { isAxiosError } from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import logo from '@/public/images/taskuitLogo.png'

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
    formState: { errors, dirtyFields }, // dirtyFields 추가
  } = useForm<FormValueType>()
  const [loginError, setLoginError] = useState<string>('')

  const onSubmit = async (data: FormValueType) => {
    try {
      const response = await LoginAccess(data.id, data.password)
      const { accessToken } = response.data
      localStorage.setItem('accessToken', accessToken)
      window.location.href = '/mydashboard'
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        if (error?.response?.data.message) {
          if (error.response.data.message === '존재하지 않는 유저입니다.') {
            setError('id', {
              type: 'manual',
              message: error.response.data.message,
            })
          } else {
            setError('password', {
              type: 'manual',
              message: error.response.data.message,
            })
          }
        } else {
          setLoginError('서버에서 오류가 발생했습니다.')
        }
      }
    }
  }

  return (
    <div className="flex flex-col items-center pt-[10.3rem]">
      <div className="mb-[3.8rem] flex flex-col items-center">
        <Link href="/">
          <Image src={logo} width={210} alt="로고" />
          <p className="text-center text-[5rem] font-bold text-[#1A57C9]">Taskuit</p>
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
              render={({ field, fieldState: { error } }) => (
                <AuthInput
                  id="email"
                  placeholder="이메일"
                  label="이메일"
                  type="text"
                  field={field}
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
              }}
              render={({ field, fieldState: { error } }) => (
                <AuthInput
                  id="password"
                  placeholder="비밀번호"
                  label="비밀번호"
                  type="password"
                  field={field}
                  error={error || errors.password}
                />
              )}
            />
          </div>
          <div className="mb-[0.5rem] h-[2rem]">
            {loginError && <div className="text-[1.4rem] text-var-red">{loginError}</div>}
          </div>
          <LongButton type="submit" disabled={!dirtyFields.id || !dirtyFields.password}>
            로그인
          </LongButton>{' '}
          {/* dirtyFields를 사용하여 필드에 값이 있는지 확인 */}
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
