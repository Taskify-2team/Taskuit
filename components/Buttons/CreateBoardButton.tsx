import Image from 'next/image'
import addLogo from '@/public/icons/addLogo.svg'
import { useAppDispatch } from '@/hooks/useApp'
import { openModal } from '@/store/reducers/modalReducer'
import { useLoadTheme } from '@/store/\bcontext/ThemeContext'

export default function CreateBoardButton() {
  const dispatch = useAppDispatch()
  const { theme } = useLoadTheme()

  return (
    <div
      className={`flex h-[7rem] w-[33.2rem] cursor-pointer items-center justify-center gap-[1.2rem] rounded-[0.6rem] border border-solid ${theme === 'normal' ? 'bg-var-white' : 'border-var-black2 bg-var-black2'}`}
      onClick={() => dispatch(openModal({ modalName: 'AddDashBoard' }))}
    >
      <p
        className={`text-nowrap text-[1.8rem] font-bold ${theme === 'normal' ? 'text-var-black4' : 'text-var-white'}`}
      >
        새로운 대시보드
      </p>
      <div className="relative h-[2.2rem] w-[2.2rem] rounded-[0.4rem] border-var-gray3 bg-var-violet p-[0.3rem]">
        <Image src={addLogo} alt="더하기 이미지" fill />
      </div>
    </div>
  )
}
