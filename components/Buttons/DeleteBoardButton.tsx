import { ButtonHTMLAttributes } from 'react'

interface DeleteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function DeleteBoardButton({ onClick }: DeleteButtonProps) {
  return (
    <button
      className="flex h-[6.2rem] w-[32rem] cursor-pointer items-center justify-center rounded-[0.6rem] border border-solid border-var-gray3 text-[1.8rem] font-medium"
      onClick={onClick}
      type="button"
    >
      대시보드 삭제하기
    </button>
  )
}
