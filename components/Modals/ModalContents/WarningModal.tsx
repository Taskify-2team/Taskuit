import ShortButton from '@/components/Buttons/ShortButton'
import { useAppDispatch } from '@/hooks/useApp'
import { closeModal } from '@/store/reducers/modalReducer'

/**
 *
 * @param {string} variant deleteColumn (컬럼 삭제 경고창), wrongPassword (비밀번호 틀림 경고창)
 * @returns {ReactNode}
 */

interface WarningModalProps {
  variant: string
}

export default function WarningModal({ variant }: WarningModalProps) {
  const dispatch = useAppDispatch()
  const variantList = new Map([
    ['deleteColumn', { text: '컬럼의 모든 카드가 삭제됩니다.', isCancel: true }],
    ['wrongPassword', { text: '현재 비밀번호가 틀렸습니다.', isCancel: false }],
  ])

  const foundVariant = variantList.get(variant)

  const submitDeleteColumn = () => {
    /** 콜럼 삭제 요청하기 */
  }

  return (
    <div className="modal-layout">
      <div className="flex flex-grow items-center self-center">
        <p className="text-[1.8rem]">{foundVariant?.text}</p>
      </div>
      <div className="absolute bottom-[2.8rem] right-[2.8rem] flex gap-[1rem]">
        {foundVariant?.isCancel ? (
          <>
            <ShortButton color="white" text="취소" onClick={() => dispatch(closeModal())} />
            <ShortButton color="purple" text="삭제" onClick={submitDeleteColumn} />
          </>
        ) : (
          <ShortButton color="purple" text="확인" onClick={() => dispatch(closeModal())} />
        )}
      </div>
    </div>
  )
}
