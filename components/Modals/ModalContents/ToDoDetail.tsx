import { Card } from '@/types/dashboard'
import Image from 'next/image'
import kebabIcon from '@/public/icons/kebab.svg'
import closeIcon from '@/public/icons/close.svg'
import { useAppDispatch } from '@/hooks/useApp'
import { closeModal } from '@/store/reducers/modalReducer'
import ProgressChip from '@/components/Chips/ProgressChip'
import TagChip from '@/components/Chips/TagChip'
import CommentInput from '@/components/Inputs/CommentInput'

interface ToDoDetailProps {
  card: Card
  columnTitle: string
}

export default function ToDoDetail({ card, columnTitle }: ToDoDetailProps) {
  const dispatch = useAppDispatch()
  console.log(card.id)

  const handleKebabClick = () => {}
  console.log(columnTitle)

  return (
    <div className="modal-layout max-h-[76.3rem] w-[73rem]">
      <div className="absolute right-[2.8rem] top-[3.2rem] flex items-center gap-[2.4rem]">
        <button type="button" onClick={handleKebabClick}>
          <Image src={kebabIcon} alt="케밥" width={28} height={28} />
        </button>
        <button type="button" onClick={() => dispatch(closeModal())}>
          <Image src={closeIcon} alt="케밥" width={32} height={32} />
        </button>
      </div>
      <div className="max-w-[45rem]">
        <h3 className="mb-[2.4rem] text-[2.4rem] font-bold">{card.title}</h3>
        <div className="mb-[1.6rem] flex items-center gap-[2rem]">
          <ProgressChip progress={columnTitle} />
          <div className="h-[2rem] w-[0.1rem] bg-var-gray3" />
          <ul className="flex gap-[0.6rem]">
            {card.tags.map((tag) => (
              <TagChip key={tag} tag={tag} textColor="#D58D49" bgColor="#F9EEE3" />
            ))}
          </ul>
        </div>
        <p className="mb-[1.6rem] text-[1.4rem] leading-[2.4rem]">{card.description}</p>
        {card.imageUrl && (
          <Image className="mb-[2.4rem] w-full rounded-[0.6rem]" src={card.imageUrl} alt="이미지" />
        )}
        <CommentInput cardId={card.id} columnId={card.columnId} />
      </div>
    </div>
  )
}
