/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { ChangeEvent, useState } from 'react'
import { TextInput, ShortButton } from '@/components'
import { useAppDispatch } from '@/hooks/useApp'
import { closeModal } from '@/store/reducers/modalReducer'
import ColorSelector from '@/components/ColorSelector/ColorSelector'

export default function AddDashBoard() {
  const dispatch = useAppDispatch()
  const [dashBoardBody, setDashBoardBody] = useState({
    title: '',
    color: '#7ac555',
  })

  const handleColor = (colorName: string) => {
    setDashBoardBody({
      ...dashBoardBody,
      color: colorName,
    })
  }

  const submitAddDashBoard = () => {
    /** 새 대쉬보드 생성 요청 하기 */
  }

  return (
    <form onSubmit={submitAddDashBoard} className="modal-layout">
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
      <ColorSelector boardColor={dashBoardBody.color} handleClick={handleColor} />
      <div className="flex gap-[1.2rem] self-end">
        <ShortButton color="white" text="취소" onClick={() => dispatch(closeModal())} />
        <ShortButton color="purple" text="생성" onClick={submitAddDashBoard} />
      </div>
    </form>
  )
}
