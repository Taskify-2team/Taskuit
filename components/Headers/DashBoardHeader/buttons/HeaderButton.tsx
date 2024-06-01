import Image, { StaticImageData } from 'next/image'

interface ButtonItems {
  buttonIcon: StaticImageData
  buttonName: string
}

export default function HeaderButton({ buttonIcon, buttonName }: ButtonItems) {
  return (
    <button
      type="button"
      className="flex items-center gap-[0.8rem] rounded-xl border border-solid border-[#d9d9d9] px-[1.6rem]"
    >
      <Image src={buttonIcon} alt="버튼 아이콘" />
      <p className="text-[1.6rem]">{buttonName}</p>
    </button>
  )
}
