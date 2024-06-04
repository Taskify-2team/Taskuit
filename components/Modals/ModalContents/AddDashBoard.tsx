/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import PurpleButton from '@/components/Buttons/ShortButtons/PurpleButton'
import WhiteButton from '@/components/Buttons/ShortButtons/WhiteButton'
import TextInput from '@/components/Input/TextInput'
import Image from 'next/image'
import { ChangeEvent, useState } from 'react'
import check from '@/public/icons/checkWhite.svg'
import { useAppDispatch } from '@/hooks/useApp'
import { closeModal } from '@/store/reducers/modalReducer'

export default function AddDashBoard() {
  const preparedColor = ['#7ac555', '#760dde', '#ffa500', '#76a5ea', '#e876ea']
  const dispatch = useAppDispatch()
  const [dashBoardBody, setDashBoardBody] = useState({
    title: '',
    color: '',
  })
  const handleColor = (colorName: string) => {
    setDashBoardBody({
      ...dashBoardBody,
      color: colorName,
    })
  }
  return (
    <>
      <h3 className="text-[2.4rem] font-bold">새로운 대시보드</h3>
      <div className="flex w-full flex-col gap-[1.8rem]">
        <TextInput
          id="name"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setDashBoardBody({ ...dashBoardBody, title: e.target.value })
          }
          label="대시보드 이름"
          placeholder="대시보드 이름"
        />
      </div>
      <ul className="flex gap-[1rem]">
        {preparedColor.map((color) => (
          <li
            key={color}
            onClick={() => handleColor(color)}
            className="flex size-[3rem] cursor-pointer justify-center rounded-[50%]"
            style={{ backgroundColor: color }}
          >
            {dashBoardBody.color === color && <Image src={check} alt="체크 아이콘" />}
          </li>
        ))}
      </ul>
      <div className="flex gap-[1.2rem] self-end">
        <WhiteButton text="취소" onClick={() => dispatch(closeModal())} />
        <PurpleButton text="생성" />
      </div>
    </>
  )
}
