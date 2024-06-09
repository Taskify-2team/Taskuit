import Image, { StaticImageData } from 'next/image'

interface ButtonItems {
  buttonIcon: StaticImageData
  buttonName: string
  handleOnClick?: () => void
}

export default function HeaderButton({ buttonIcon, buttonName, handleOnClick }: ButtonItems) {
  return (
    <button
      type="button"
      className="flex items-center gap-[0.8rem] rounded-xl border border-solid border-[#d9d9d9] px-[1.6rem]"
      onClick={() => {
        if (handleOnClick) {
          handleOnClick()
        }
      }}
    >
      <Image src={buttonIcon} alt="버튼 아이콘" width={18} height={18} />
      <p className="text-[1.6rem]">{buttonName}</p>
    </button>
  )
}
