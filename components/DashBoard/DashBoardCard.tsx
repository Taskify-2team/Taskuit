import { Card } from '@/types/dashboard'
import Image from 'next/image'
import formatDate from '@/utils/formatDate'
import TagChip from '../Chips/TagChip'

interface CardProps {
  card: Card
}

export default function DashBoardCard({ card }: CardProps) {
  const tagColor = [
    { bg: '#F9EEE3', text: '#D58D49' },
    { bg: '#F7DBF0', text: '#D549B6' },
    { bg: '#DBE6F7', text: '#4981D5' },
    { bg: '#E7F7DB', text: '#86D549' },
  ]

  return (
    <div className="w-[31.4rem] cursor-pointer rounded-[0.6rem] border-[0.1rem] border-var-gray3 bg-var-white p-[2rem]">
      {card.imageUrl && (
        <div className="relative mb-[1.2rem] h-[16rem]">
          <Image fill src={card.imageUrl} alt="카드 이미지" className="object-cover" />
        </div>
      )}
      <h3 className="mb-[1rem] text-[1.6rem]">{card.title}</h3>
      <ul className="mb-[1.3rem] flex gap-[0.6rem]">
        {card.tags.map((tag) => {
          const randomPick = Math.floor(Math.random() * 4)
          return (
            <TagChip
              key={tag}
              tag={tag}
              bgColor={tagColor[randomPick].bg}
              textColor={tagColor[randomPick].text}
            />
          )
        })}
      </ul>
      <div className="text-[1.2rem] text-var-gray5">{formatDate(card.createdAt)}</div>
    </div>
  )
}
