import Image from 'next/image'
import check from '@/public/icons/checkWhite.svg'

interface ColorSelectorProps {
  boardColor: string
  handleClick: (color: string) => void
}

export default function ColorSelector({ boardColor, handleClick }: ColorSelectorProps) {
  const preparedColor = ['#7ac555', '#760dde', '#ffa500', '#76a5ea', '#e876ea']

  return (
    <ul className="flex gap-[1rem]">
      {preparedColor.map((color) => (
        <li
          key={color}
          onClick={() => handleClick(color)}
          className="flex size-[3rem] cursor-pointer justify-center rounded-[50%]"
          style={{ backgroundColor: color }}
          role="presentation"
        >
          {boardColor === color && <Image src={check} alt="체크 아이콘" />}
        </li>
      ))}
    </ul>
  )
}
