/* eslint-disable jsx-a11y/label-has-associated-control */
import { AuthInput, LongButton } from '@/components'
import { isAxiosError } from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import logo from '@/public/images/taskuitLogo.png'
import { SignUpAccess } from '@/service/users'
import { openToast } from '@/store/reducers/toastReducer'
import { useAppDispatch } from '@/hooks/useApp'

const EMAIL_REGREX = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-.]+$/

export interface FormValueType {
  id: string
  password: string
  nickname: string
  passwordConfirm: string
  agreeTerms: boolean
}

export default function LoginForm() {
  const {
    handleSubmit,
    control,
    setError,
    getValues,
    formState: { errors, dirtyFields, isSubmitting },
  } = useForm<FormValueType>({
    mode: 'onBlur',
  })
  const [loginError, setLoginError] = useState<string>('')
  const dispatch = useAppDispatch()

  const onSubmit = async (data: FormValueType) => {
    try {
      await SignUpAccess(data.id, data.nickname, data.password)
      window.location.href = '/mydashboard'
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        if (error?.response?.data.message) {
          if (error.response.data.message === '이미 사용중인 이메일입니다.') {
            setError('id', {
              type: 'manual',
              message: error.response.data.message,
            })
            dispatch(openToast('emailInUse'))
          }
        } else {
          setLoginError('서버에서 오류가 발생했습니다.')
        }
      }
    }
  }

  return (
    <div className="flex flex-col items-center pb-[17.2rem] pt-[10.3rem]">
      <div className="mb-[3.8rem] flex flex-col items-center">
        <Link href="/">
          <Image src={logo} width={164} alt="로고" />
          <p className="text-[5rem] font-bold text-[#1A57C9]">Taskuit</p>
        </Link>
        <p className="text-[2rem]">첫 방문을 환영합니다!</p>
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
              name="nickname"
              control={control}
              rules={{
                required: '닉네임을 입력해 주세요',
                maxLength: {
                  value: 10,
                  message: '닉네임을 최대 10자 이하로 입력해 주세요.',
                },
              }}
              render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <AuthInput
                  id="nickname"
                  placeholder="닉네임을 입력해 주세요"
                  label="닉네임"
                  type="text"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={error}
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
                  error={error}
                />
              )}
            />
          </div>
          <div className="pb-[2.3rem]">
            <Controller
              name="passwordConfirm"
              control={control}
              rules={{
                required: '비밀번호를 한번 더 입력해 주세요.',
                validate: {
                  matchesPreviousPassword: (value) =>
                    value === getValues('password') || '비밀번호가 일치하지 않습니다.',
                },
              }}
              render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <AuthInput
                  id="passwordConfirm"
                  placeholder="비밀번호를 한번 더 입력해 주세요."
                  label="비밀번호 확인"
                  type="password"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={error}
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
                <label htmlFor="agreeTerms" className="mt-[1rem] text-[1.6rem] text-gray-600">
                  이용약관에 동의합니다.
                </label>
              </div>
            )}
          />
          <div className="mb-[0.5rem] h-[1.5rem]">
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
            가입하기
          </LongButton>
        </div>
      </form>
      <div className="mt-[1.6rem] flex gap-[1rem]">
        <span className="text-[1.6rem]">이미 가입하셨나요?</span>
        <Link href="/login" className="text-[1.6rem] text-primary-violet underline">
          로그인 하기
        </Link>
      </div>
    </div>
  )
}
