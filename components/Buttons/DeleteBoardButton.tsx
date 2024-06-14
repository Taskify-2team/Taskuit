import { useLoadTheme } from '@/store/context/ThemeContext'
import { ButtonHTMLAttributes } from 'react'

interface DeleteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function DeleteBoardButton({ onClick }: DeleteButtonProps) {
  const { theme } = useLoadTheme()

  return (
    <button
      className={`flex h-[6.2rem] w-[32rem] cursor-pointer items-center justify-center rounded-[0.6rem] border border-solid sm:w-full ${theme === 'normal' ? 'border-var-gray3 bg-var-white text-var-black4' : 'border-var-black1 bg-var-black1 text-var-gray3'} text-[1.8rem] font-medium`}
      onClick={onClick}
      type="button"
    >
      대시보드 삭제하기
    </button>
  )
}
