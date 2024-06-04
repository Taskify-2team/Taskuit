import { AuthInput, LongButton } from '@/components'
import Link from 'next/link'
import { Controller, useForm } from 'react-hook-form'

export interface FormValueType {
  id: string
  password: string
  confirmPassword?: string
}

export default function LoginForm() {
  const { handleSubmit, control } = useForm()

  const onSubmit = async () => {}

  return (
    <div className="flex flex-col items-center pt-[22.3rem]">
      <div>로고 부분</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[52rem] flex-col">
          <div className="pb-[2.7rem]">
            <Controller
              name="email"
              control={control}
              rules={{
                required: '이메일을 입력해주세요.',
                pattern: {
                  value: /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-.]+$/,
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
                  error={error}
                />
              )}
            />
          </div>
          <div className="pb-[3rem]">
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
                  error={error}
                />
              )}
            />
          </div>
          <LongButton type="submit">로그인</LongButton>
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
