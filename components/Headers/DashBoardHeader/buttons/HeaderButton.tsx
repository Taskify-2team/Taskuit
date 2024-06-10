import Image, { StaticImageData } from 'next/image'

interface ButtonItems {
  buttonIcon: StaticImageData
  buttonName: string
  onClick?: () => void
}

export default function HeaderButton({ buttonIcon, buttonName, onClick }: ButtonItems) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-[0.8rem] rounded-xl border border-solid border-[#d9d9d9] px-[1.6rem]"
    >
      <Image src={buttonIcon} alt="버튼 아이콘" />
      <p className="text-[1.6rem]">{buttonName}</p>
    </button>
  )
}
